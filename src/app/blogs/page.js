import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogHero from "@/components/blog/blog-hero";
import BlogsListing from "./blogs-listing";
import {
  fetchAllBlogs,
  fetchAllCategories,
  fetchFeaturedBlog,
} from "@/lib/blog-api";

// ─── Hard data (not in DB schema) ────────────────────────────────────────────
const SITE = {
  url: "https://austelix.com",
  name: "Austelix",
  defaultOgImage: "/blog-cover.png",
};
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Blog — Austelix",
  description:
    "Product updates, engineering notes, and lessons learned while building intelligent software that creates lasting impact.",
  alternates: { canonical: `${SITE.url}/blogs` },
  openGraph: {
    type: "website",
    url: `${SITE.url}/blogs`,
    title: "Blog — Austelix",
    description:
      "Insights from our journey building intelligent software and powerful brands.",
    siteName: SITE.name,
    images: [
      { url: `${SITE.url}${SITE.defaultOgImage}`, width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Austelix",
    description:
      "Insights from our journey building intelligent software and powerful brands.",
    images: [`${SITE.url}${SITE.defaultOgImage}`],
  },
};

export default async function BlogsPage() {
  const [blogs, categories, featured] = await Promise.all([
    fetchAllBlogs(),
    fetchAllCategories(),
    fetchFeaturedBlog(),
  ]);

  return (
    <div>
      <Header active="blog" />
      <BlogHero />
      <BlogsListing blogs={blogs} categories={categories} featured={featured} />
      <Footer />
    </div>
  );
}
