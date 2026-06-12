import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryBadge from "./category-badge";
import AuthorInfo from "./author-info";

function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden transition-all duration-300 hover:border-[#C70A0E]/50 hover:shadow-[0_0_40px_rgba(199,10,14,0.14)]"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-secondary">
            Featured
          </span>
          <span className="h-px flex-1 bg-[#1A1A1A]" />
          <CategoryBadge category={blog.category} />
        </div>

        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-secondary">
          {blog.title}
        </h2>

        <p className="text-zinc-400 md:text-base text-sm leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        <AuthorInfo
          author={blog.author}
          authorImage={blog.authorImage}
          role={blog.authorRole}
          date={blog.publishedAt}
          readTime={blog.readTime}
          size="lg"
        />

        <span className="inline-flex items-center gap-2 text-secondary font-semibold mt-1">
          Read article
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export default FeaturedBlog;
