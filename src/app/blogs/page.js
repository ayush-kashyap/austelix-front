import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogHero from "@/components/blog/blog-hero";
import BlogsListing from "./blogs-listing";
import { getAllBlogs, getAllCategories, getFeaturedBlog } from "@/lib/blog";
import { siteConfig } from "@/data/blogs";

export const metadata = {
  title: "Blog — Austelix",
  description:
    "Product updates, engineering notes, and lessons learned while building intelligent software that creates lasting impact.",
  alternates: {
    canonical: `${siteConfig.url}/blogs`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blogs`,
    title: "Blog — Austelix",
    description:
      "Insights from our journey building intelligent software and powerful brands.",
    siteName: siteConfig.name,
    images: [{ url: `${siteConfig.url}${siteConfig.defaultOgImage}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Austelix",
    description:
      "Insights from our journey building intelligent software and powerful brands.",
    images: [`${siteConfig.url}${siteConfig.defaultOgImage}`],
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const categories = getAllCategories();
  const featured = getFeaturedBlog();

  return (
    <div>
      <Header active="blog" />
      <BlogHero />
      <BlogsListing blogs={blogs} categories={categories} featured={featured} />
      <Footer />
    </div>
  );
}
