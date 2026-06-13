// Seed data so the entire UI runs with zero backend. Shapes mirror the
// JSDoc typedefs in src/types/index.js.

export const mockCategories = [
  { id: "c1", name: "Engineering", slug: "engineering", description: "Deep dives and build logs.", parentId: null, articleCount: 12 },
  { id: "c2", name: "Frontend", slug: "frontend", description: "UI, UX and the browser.", parentId: "c1", articleCount: 7 },
  { id: "c3", name: "Backend", slug: "backend", description: "APIs, data and infra.", parentId: "c1", articleCount: 5 },
  { id: "c4", name: "Product", slug: "product", description: "Strategy and roadmap.", parentId: null, articleCount: 9 },
  { id: "c5", name: "Design", slug: "design", description: "Systems and craft.", parentId: null, articleCount: 6 },
  { id: "c6", name: "Company", slug: "company", description: "News and culture.", parentId: null, articleCount: 4 },
];

export const mockTags = [
  { id: "t1", name: "React", slug: "react", articleCount: 14 },
  { id: "t2", name: "Next.js", slug: "nextjs", articleCount: 11 },
  { id: "t3", name: "TypeScript", slug: "typescript", articleCount: 9 },
  { id: "t4", name: "Performance", slug: "performance", articleCount: 6 },
  { id: "t5", name: "Accessibility", slug: "accessibility", articleCount: 5 },
  { id: "t6", name: "Design Systems", slug: "design-systems", articleCount: 8 },
  { id: "t7", name: "DevOps", slug: "devops", articleCount: 4 },
  { id: "t8", name: "Security", slug: "security", articleCount: 3 },
];

export const mockAuthors = [
  { id: "u1", name: "Ava Mercer", avatar: "https://i.pravatar.cc/100?img=47" },
  { id: "u2", name: "Liam Okafor", avatar: "https://i.pravatar.cc/100?img=12" },
  { id: "u3", name: "Noor Haddad", avatar: "https://i.pravatar.cc/100?img=32" },
  { id: "u4", name: "Theo Lindqvist", avatar: "https://i.pravatar.cc/100?img=15" },
];

const cat = (id) => mockCategories.find((c) => c.id === id);
const tag = (...ids) => mockTags.filter((t) => ids.includes(t.id));
const author = (id) => mockAuthors.find((a) => a.id === id);

function makeArticle(i, overrides = {}) {
  const created = new Date(Date.now() - i * 86400000 * 3).toISOString();
  return {
    id: `a${i}`,
    title: `Untitled article ${i}`,
    slug: `untitled-article-${i}`,
    excerpt: "A short summary of what this article covers and why it matters.",
    featuredImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=60",
    category: cat("c1"),
    tags: tag("t1", "t2"),
    author: author("u1"),
    content: [{ type: "paragraph", value: "The full article body lives here as Markdown." }],
    status: "published",
    views: 1000 + i * 137,
    seo: {
      metaTitle: `Untitled article ${i}`,
      metaDescription: "Meta description for search engines.",
      keywords: ["react", "nextjs"],
    },
    publishedAt: created,
    scheduledFor: null,
    createdAt: created,
    updatedAt: created,
    ...overrides,
  };
}

export const mockArticles = [
  makeArticle(1, {
    title: "Building a design system that scales",
    slug: "building-a-design-system-that-scales",
    excerpt: "How we structured tokens, primitives, and patterns to stay consistent across 40+ surfaces.",
    category: cat("c5"),
    tags: tag("t6", "t5"),
    author: author("u3"),
    status: "published",
    views: 8420,
  }),
  makeArticle(2, {
    title: "Server components changed how we fetch data",
    slug: "server-components-changed-how-we-fetch-data",
    excerpt: "A practical migration story moving from client fetching to RSC + streaming.",
    category: cat("c2"),
    tags: tag("t1", "t2", "t4"),
    author: author("u1"),
    status: "published",
    views: 12030,
  }),
  makeArticle(3, {
    title: "A pragmatic guide to caching with TanStack Query",
    slug: "pragmatic-guide-tanstack-query",
    excerpt: "Stale times, invalidation, and optimistic updates without the footguns.",
    category: cat("c2"),
    tags: tag("t1", "t4"),
    author: author("u2"),
    status: "draft",
    views: 0,
    publishedAt: null,
  }),
  makeArticle(4, {
    title: "Shipping accessible modals nobody hates",
    slug: "shipping-accessible-modals",
    excerpt: "Focus traps, escape handling, and announcing dialogs to screen readers.",
    category: cat("c2"),
    tags: tag("t5", "t1"),
    author: author("u3"),
    status: "scheduled",
    views: 0,
    publishedAt: null,
    scheduledFor: new Date(Date.now() + 86400000 * 4).toISOString(),
  }),
  makeArticle(5, {
    title: "Our incident review process, end to end",
    slug: "incident-review-process",
    excerpt: "Blameless retros, action items, and how we track follow-through.",
    category: cat("c3"),
    tags: tag("t7", "t8"),
    author: author("u4"),
    status: "published",
    views: 5310,
  }),
  makeArticle(6, {
    title: "Type-safe APIs without a build step",
    slug: "type-safe-apis-without-a-build-step",
    excerpt: "Using JSDoc typedefs to document contracts in a plain-JS codebase.",
    category: cat("c3"),
    tags: tag("t3"),
    author: author("u2"),
    status: "published",
    views: 3905,
  }),
  makeArticle(7, {
    title: "Roadmapping when everything is a priority",
    slug: "roadmapping-priorities",
    excerpt: "A lightweight scoring model to keep the team focused.",
    category: cat("c4"),
    tags: tag("t6"),
    author: author("u1"),
    status: "draft",
    views: 0,
    publishedAt: null,
  }),
  makeArticle(8, {
    title: "We rewrote our editor. Here is what broke.",
    slug: "we-rewrote-our-editor",
    excerpt: "Lessons from swapping a textarea for a structured rich-text editor.",
    category: cat("c2"),
    tags: tag("t1", "t2"),
    author: author("u3"),
    status: "published",
    views: 9650,
  }),
  makeArticle(9, {
    title: "Measuring what matters on the dashboard",
    slug: "measuring-what-matters",
    excerpt: "Choosing the five numbers that actually drive editorial decisions.",
    category: cat("c4"),
    tags: tag("t4"),
    author: author("u4"),
    status: "scheduled",
    views: 0,
    publishedAt: null,
    scheduledFor: new Date(Date.now() + 86400000 * 2).toISOString(),
  }),
  makeArticle(10, {
    title: "A culture of writing things down",
    slug: "culture-of-writing-things-down",
    excerpt: "Why our team defaults to docs over meetings.",
    category: cat("c6"),
    tags: tag("t6"),
    author: author("u2"),
    status: "published",
    views: 2240,
  }),
  makeArticle(11, {
    title: "Edge runtime: when it helps and when it hurts",
    slug: "edge-runtime-tradeoffs",
    excerpt: "Cold starts, regional data, and the limits of the edge.",
    category: cat("c3"),
    tags: tag("t7", "t4"),
    author: author("u1"),
    status: "published",
    views: 6710,
  }),
  makeArticle(12, {
    title: "Color contrast is a feature, not a checkbox",
    slug: "color-contrast-is-a-feature",
    excerpt: "Baking WCAG ratios into the token system from day one.",
    category: cat("c5"),
    tags: tag("t5", "t6"),
    author: author("u3"),
    status: "draft",
    views: 0,
    publishedAt: null,
  }),
];

export const mockMedia = [
  { id: "m1", name: "hero-banner.jpg", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=60", type: "image", mimeType: "image/jpeg", size: 248000, uploadedAt: new Date(Date.now() - 86400000).toISOString() },
  { id: "m2", name: "team-offsite.jpg", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=60", type: "image", mimeType: "image/jpeg", size: 512000, uploadedAt: new Date(Date.now() - 86400000 * 2).toISOString() },
  { id: "m3", name: "architecture-diagram.png", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=60", type: "image", mimeType: "image/png", size: 184000, uploadedAt: new Date(Date.now() - 86400000 * 3).toISOString() },
  { id: "m4", name: "q3-report.pdf", url: "#", type: "pdf", mimeType: "application/pdf", size: 1340000, uploadedAt: new Date(Date.now() - 86400000 * 5).toISOString() },
  { id: "m5", name: "product-shot.jpg", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=60", type: "image", mimeType: "image/jpeg", size: 396000, uploadedAt: new Date(Date.now() - 86400000 * 6).toISOString() },
  { id: "m6", name: "onboarding-flow.png", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=60", type: "image", mimeType: "image/png", size: 224000, uploadedAt: new Date(Date.now() - 86400000 * 8).toISOString() },
];

export const mockComments = [
  { id: "cm1", author: { name: "Jordan Pike", email: "jordan@example.com", avatar: "https://i.pravatar.cc/100?img=5" }, articleId: "a2", articleTitle: "Server components changed how we fetch data", body: "This finally made RSC click for me. The streaming section was gold.", status: "approved", createdAt: new Date(Date.now() - 3600000 * 5).toISOString() },
  { id: "cm2", author: { name: "Sam Iyer", email: "sam@example.com" }, articleId: "a1", articleTitle: "Building a design system that scales", body: "How do you handle versioning when a token changes?", status: "pending", createdAt: new Date(Date.now() - 3600000 * 9).toISOString() },
  { id: "cm3", author: { name: "buy-cheap-now", email: "spam@bots.io" }, articleId: "a5", articleTitle: "Our incident review process, end to end", body: "Check out my link for free followers!!!", status: "spam", createdAt: new Date(Date.now() - 3600000 * 14).toISOString() },
  { id: "cm4", author: { name: "Priya N.", email: "priya@example.com", avatar: "https://i.pravatar.cc/100?img=20" }, articleId: "a8", articleTitle: "We rewrote our editor. Here is what broke.", body: "We hit the exact same selection bug. Did TipTap fix it for you?", status: "pending", createdAt: new Date(Date.now() - 3600000 * 26).toISOString() },
  { id: "cm5", author: { name: "Marcus Reed", email: "marcus@example.com" }, articleId: "a11", articleTitle: "Edge runtime: when it helps and when it hurts", body: "Cold starts were our killer too. Great breakdown.", status: "approved", createdAt: new Date(Date.now() - 3600000 * 40).toISOString() },
];

export const mockUsers = [
  { id: "u1", name: "Ava Mercer", email: "ava@austelix.com", avatar: "https://i.pravatar.cc/100?img=47", role: "admin", status: "active", createdAt: new Date(Date.now() - 86400000 * 400).toISOString() },
  { id: "u2", name: "Liam Okafor", email: "liam@austelix.com", avatar: "https://i.pravatar.cc/100?img=12", role: "editor", status: "active", createdAt: new Date(Date.now() - 86400000 * 300).toISOString() },
  { id: "u3", name: "Noor Haddad", email: "noor@austelix.com", avatar: "https://i.pravatar.cc/100?img=32", role: "writer", status: "active", createdAt: new Date(Date.now() - 86400000 * 210).toISOString() },
  { id: "u4", name: "Theo Lindqvist", email: "theo@austelix.com", avatar: "https://i.pravatar.cc/100?img=15", role: "writer", status: "active", createdAt: new Date(Date.now() - 86400000 * 120).toISOString() },
  { id: "u5", name: "Dana Cole", email: "dana@austelix.com", role: "viewer", status: "invited", createdAt: new Date(Date.now() - 86400000 * 10).toISOString() },
  { id: "u6", name: "Felix Wu", email: "felix@austelix.com", role: "editor", status: "suspended", createdAt: new Date(Date.now() - 86400000 * 90).toISOString() },
];

export const mockDashboard = {
  stats: {
    totalArticles: 41,
    published: 28,
    drafts: 9,
    totalViews: 184320,
    comments: 312,
  },
  viewsSeries: [
    { date: "Mon", views: 4200 },
    { date: "Tue", views: 5100 },
    { date: "Wed", views: 4800 },
    { date: "Thu", views: 6300 },
    { date: "Fri", views: 7400 },
    { date: "Sat", views: 5200 },
    { date: "Sun", views: 4600 },
  ],
  categorySeries: [
    { name: "Engineering", value: 17 },
    { name: "Product", value: 9 },
    { name: "Design", value: 6 },
    { name: "Company", value: 4 },
    { name: "Other", value: 5 },
  ],
};
