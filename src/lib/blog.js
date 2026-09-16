// =============================================================================
// Pure query helpers over the blog data. No React, no side effects, so these
// can be used in server components, client components, and tests alike.
// =============================================================================

import { blogs } from "@/data/blogs";

const byNewest = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);

export function getAllBlogs() {
  return [...blogs].sort(byNewest);
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug) || null;
}

export function getAllSlugs() {
  return blogs.map((blog) => blog.slug);
}

export function getFeaturedBlog() {
  return blogs.find((blog) => blog.featured) || getAllBlogs()[0];
}

export function getAllCategories() {
  const counts = blogs.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  return [
    { name: "All", count: blogs.length },
    ...Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}

export function searchAndFilterBlogs(list, { query = "", category = "All" } = {}) {
  const normalized = query.trim().toLowerCase();

  return list.filter((blog) => {
    const matchesCategory = category === "All" || blog.category === category;
    if (!matchesCategory) return false;
    if (!normalized) return true;

    const haystack = [
      blog.title,
      blog.excerpt,
      blog.category,
      blog.author,
      ...(blog.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

export function paginate(list, page = 1, perPage = 6) {
  const totalItems = list.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;

  return {
    items: list.slice(start, start + perPage),
    page: current,
    perPage,
    totalItems,
    totalPages,
    hasPrev: current > 1,
    hasNext: current < totalPages,
  };
}

export function getRelatedBlogs(slug, limit = 3) {
  const current = getBlogBySlug(slug);
  if (!current) return [];

  const scored = blogs
    .filter((blog) => blog.slug !== slug)
    .map((blog) => {
      const sharedTags = (blog.tags || []).filter((tag) =>
        (current.tags || []).includes(tag)
      ).length;
      const sameCategory = blog.category === current.category ? 2 : 0;
      return { blog, score: sharedTags + sameCategory };
    })
    .sort((a, b) => b.score - a.score || byNewest(a.blog, b.blog));

  return scored.slice(0, limit).map((entry) => entry.blog);
}

export function getAdjacentBlogs(slug) {
  const ordered = getAllBlogs();
  const index = ordered.findIndex((blog) => blog.slug === slug);

  return {
    previous: index > 0 ? ordered[index - 1] : null,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getHeadings(content) {
  return content
    .filter((block) => block.type === "heading")
    .map((block) => ({ id: slugify(block.value), text: block.value }));
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
