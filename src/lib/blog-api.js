/**
 * Blog data fetchers backed by the external CMS API (project-cms).
 *
 * Base URL comes from the `backend_api` env var — the CMS origin with no
 * trailing slash and no /api suffix, e.g. http://localhost:3001
 *
 * Every fetcher degrades to an empty value instead of throwing, so the
 * marketing site still renders when the CMS is unset, down, or erroring.
 * These run in Server Components only (`backend_api` is not NEXT_PUBLIC_).
 */

const BASE = (process.env.backend_api || "").replace(/\/+$/, "");

/** GET a CMS endpoint, returning its `data` payload or null on any failure. */
async function getJson(path) {
  if (!BASE) return null;
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Accept: "application/json" },
      // Pick up CMS edits within a minute without hammering the API.
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const body = await res.json();
    if (!body || body.status === false) return null;
    return body.data ?? null;
  } catch {
    return null;
  }
}

/** Shape a raw CMS blog document into what the blog pages expect. */
function normalise(doc) {
  return {
    id: doc._id?.toString?.() ?? doc._id ?? doc.id,
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    coverImage: doc.coverImage,
    publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString() : null,
    readTime: doc.readTime,
    category: doc.category,
    tags: doc.tags ?? [],
    featured: doc.featured ?? false,
    // content is stored as an HTML string
    content: doc.content ?? "",
  };
}

const byNewest = (a, b) =>
  new Date(b.publishedAt ?? 0) - new Date(a.publishedAt ?? 0);

/** All blogs, newest first. [] if the CMS is unreachable. */
export async function fetchAllBlogs() {
  // The CMS list endpoint paginates (default 10) and does not sort, so ask
  // for one large page and order here.
  const data = await getJson("/api/blogs/get?page_size=1000");
  const results = data?.results;
  if (!Array.isArray(results)) return [];
  return results.map(normalise).sort(byNewest);
}

/** Single blog by slug — null if missing or the CMS is unreachable. */
export async function fetchBlogBySlug(slug) {
  const data = await getJson(`/api/blogs/get/${encodeURIComponent(slug)}`);
  const doc = Array.isArray(data) ? data[0] : data;
  return doc ? normalise(doc) : null;
}

/** All slugs for generateStaticParams. [] if the CMS is unreachable. */
export async function fetchAllSlugs() {
  const blogs = await fetchAllBlogs();
  return blogs.map((b) => b.slug).filter(Boolean);
}

/** Featured blog — first flagged one, else newest. null if none. */
export async function fetchFeaturedBlog() {
  const blogs = await fetchAllBlogs();
  if (blogs.length === 0) return null;
  return blogs.find((b) => b.featured) ?? blogs[0];
}

/** Categories with counts, "All" first. [] if the CMS is unreachable. */
export async function fetchAllCategories() {
  const data = await getJson("/api/category/get");
  if (!Array.isArray(data)) return [];
  const total = data.reduce((sum, c) => sum + (c.blogCount || 0), 0);
  return [
    { name: "All", count: total },
    ...data
      .map((c) => ({ name: c.category, count: c.blogCount || 0 }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}

/** Up to `limit` others in the same category. [] if none or unreachable. */
export async function fetchRelatedBlogs(slug, limit = 3) {
  const blogs = await fetchAllBlogs();
  const current = blogs.find((b) => b.slug === slug);
  if (!current) return [];
  return blogs
    .filter((b) => b.slug !== slug && b.category === current.category)
    .slice(0, limit);
}

/** Older/newer neighbours by publish date. Nulls if none or unreachable. */
export async function fetchAdjacentBlogs(slug) {
  const blogs = await fetchAllBlogs();
  const index = blogs.findIndex((b) => b.slug === slug);
  if (index === -1) return { previous: null, next: null };

  const pick = (b) => (b ? { slug: b.slug, title: b.title } : null);
  // blogs is newest-first, so the newer neighbour sits at the lower index.
  return { previous: pick(blogs[index + 1]), next: pick(blogs[index - 1]) };
}
