import { api, USE_MOCK, delay } from "./api-client";
import { mockArticles } from "./mock-data";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
function applyQuery(list, q) {
  let result = [...list];
  if (q.search) {
    const s = q.search.toLowerCase();
    result = result.filter(a => a.title.toLowerCase().includes(s) || a.excerpt.toLowerCase().includes(s) || a.author.name.toLowerCase().includes(s));
  }
  if (q.status && q.status !== "all") result = result.filter(a => a.status === q.status);
  if (q.categoryId && q.categoryId !== "all") result = result.filter(a => a.category.id === q.categoryId);
  if (q.authorId && q.authorId !== "all") result = result.filter(a => a.author.id === q.authorId);
  switch (q.sort) {
    case "oldest":
      result.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
      break;
    case "most-viewed":
      result.sort((a, b) => b.views - a.views);
      break;
    case "title":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      result.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }
  const page = q.page ?? 1;
  const pageSize = q.pageSize ?? DEFAULT_PAGE_SIZE;
  const total = result.length;
  const start = (page - 1) * pageSize;
  return {
    data: result.slice(start, start + pageSize),
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize))
  };
}
export const articlesService = {
  list(query = {}) {
    if (USE_MOCK) return delay(applyQuery(mockArticles, query));
    return api.get("/articles", query);
  },
  getById(id) {
    if (USE_MOCK) return delay(mockArticles.find(a => a.id === id) ?? null);
    return api.get(`/articles/${id}`);
  },
  create(input) {
    if (USE_MOCK) return delay({
      ...mockArticles[0],
      id: `a${Date.now()}`,
      ...mapInput(input)
    });
    return api.post("/articles", input);
  },
  update(id, input) {
    if (USE_MOCK) {
      const found = mockArticles.find(a => a.id === id) ?? mockArticles[0];
      return delay({
        ...found,
        ...mapInput(input)
      });
    }
    return api.put(`/articles/${id}`, input);
  },
  duplicate(id) {
    if (USE_MOCK) {
      const found = mockArticles.find(a => a.id === id) ?? mockArticles[0];
      return delay({
        ...found,
        id: `a${Date.now()}`,
        title: `${found.title} (Copy)`,
        status: "draft",
        slug: `${found.slug}-copy`
      });
    }
    return api.post(`/articles/${id}/duplicate`);
  },
  remove(id) {
    if (USE_MOCK) return delay(undefined);
    return api.delete(`/articles/${id}`);
  }
};

// Helper to project an ArticleInput onto fields we can echo back in mock mode.
function mapInput(input) {
  return {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt,
    featuredImage: input.featuredImage,
    content: input.content,
    status: input.status,
    scheduledFor: input.scheduledFor ?? null,
    seo: input.seo,
    updatedAt: new Date().toISOString()
  };
}
