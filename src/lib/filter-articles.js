import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

/** Client-side article filtering and pagination for the CMS list view. */
export function filterArticles(list, query = {}) {
  let result = [...list];

  if (query.search) {
    const s = query.search.toLowerCase();
    result = result.filter(
      (a) =>
        a.title.toLowerCase().includes(s) ||
        a.excerpt.toLowerCase().includes(s) ||
        a.author.name.toLowerCase().includes(s)
    );
  }

  if (query.status && query.status !== "all") {
    result = result.filter((a) => a.status === query.status);
  }

  if (query.categoryId && query.categoryId !== "all") {
    result = result.filter((a) => a.category.id === query.categoryId);
  }

  if (query.authorId && query.authorId !== "all") {
    result = result.filter((a) => a.author.id === query.authorId);
  }

  switch (query.sort) {
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

  const page = query.page ?? 1;
  const pageSize = query.pageSize ?? DEFAULT_PAGE_SIZE;
  const total = result.length;
  const start = (page - 1) * pageSize;

  return {
    data: result.slice(start, start + pageSize),
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}
