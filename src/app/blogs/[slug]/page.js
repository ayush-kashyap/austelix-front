import React from "react";

/** Extract h2 headings from raw HTML for the Table of Contents. */
function extractHeadings(html) {
  if (!html) return [];
  const matches = [
    ...html.matchAll(/<h2[^>]*id="([^"]+)"[^>]*>([^<]+)<\/h2>/gi),
  ];
  return matches.map(([, id, text]) => ({ id, text: text.trim() }));
}
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryBadge from "@/components/blog/category-badge";
import AuthorInfo from "@/components/blog/author-info";
import ContentRenderer from "@/components/blog/content-renderer";
import TableOfContents from "@/components/blog/table-of-contents";
import ShareButtons from "@/components/blog/share-buttons";
import RelatedPosts from "@/components/blog/related-posts";
import PostNavigation from "@/components/blog/post-navigation";
import NewsletterCTA from "@/components/blog/newsletter-cta";

import {
  fetchBlogBySlug,
  fetchAllSlugs,
  fetchRelatedBlogs,
  fetchAdjacentBlogs,
} from "@/lib/blog-api";

// ─── Hard data (not in DB schema) ────────────────────────────────────────────
const SITE = {
  url: "https://austelix.com",
  name: "Austelix",
  twitter: "@austelix",
};

// Author data is not stored in the blog schema.
// All blogs default to the company author below.
const DEFAULT_AUTHOR = {
  name: "Ayush Kashyap",
  role: "Founder, CTO",
  image: "/square-img.jpg",
};
// ─────────────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) return { title: "Article not found — Austelix" };

  const url = `${SITE.url}/blogs/${blog.slug}`;
  const ogImage = blog.coverImage;

  return {
    title: `${blog.title} — Austelix`,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: DEFAULT_AUTHOR.name }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.excerpt,
      siteName: SITE.name,
      publishedTime: blog.publishedAt,
      authors: [DEFAULT_AUTHOR.name],
      tags: blog.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [ogImage],
      creator: SITE.twitter,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const [blog, related, { previous, next }] = await Promise.all([
    fetchBlogBySlug(slug),
    fetchRelatedBlogs(slug),
    fetchAdjacentBlogs(slug),
  ]);

  if (!blog) notFound();

  const url = `${SITE.url}/blogs/${blog.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    author: { "@type": "Person", name: DEFAULT_AUTHOR.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo-transparent.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: (blog.tags || []).join(", "),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header active="blog" />

      <article className="xl:px-32 lg:px-24 md:px-32 px-6 md:pt-16 pt-10 md:pb-24 pb-16">
        {/* Header block */}
        <div className="max-w-3xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-secondary"
          >
            <ArrowLeft size={16} /> All articles
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <CategoryBadge category={blog.category} />
            <span className="text-sm text-zinc-500">{blog.readTime}</span>
          </div>

          <h1 className="md:text-5xl text-3xl font-extrabold leading-[1.1] tracking-tight mt-5">
            {blog.title}
          </h1>

          <p className="text-zinc-400 md:text-lg text-base leading-relaxed mt-5">
            {blog.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <AuthorInfo
              author={DEFAULT_AUTHOR.name}
              authorImage={DEFAULT_AUTHOR.image}
              role={DEFAULT_AUTHOR.role}
              date={blog.publishedAt}
              size="lg"
            />
            <ShareButtons title={blog.title} url={url} />
          </div>
        </div>

        {/* Cover banner */}
        <div className="relative aspect-[16/9] md:aspect-[2.4/1] rounded-3xl overflow-hidden border border-[#1A1A1A] mt-10">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Body + sticky TOC */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12">
          <div className="min-w-0">
            <ContentRenderer content={blog.content} />

            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#1A1A1A]">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-[#1A1A1A] text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8">
              <ShareButtons title={blog.title} url={url} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={extractHeadings(blog.content)} />
            </div>
          </aside>
        </div>

        {/* Footer sections */}
        <div className="mt-20 flex flex-col gap-16">
          <PostNavigation previous={previous} next={next} />
          <NewsletterCTA />
          <RelatedPosts posts={related} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
