"use client";

import React, { useMemo, useState } from "react";
import { searchAndFilterBlogs, paginate } from "@/lib/blog";
import SearchFilter from "@/components/blog/search-filter";
import FeaturedBlog from "@/components/blog/featured-blog";
import BlogCard from "@/components/blog/blog-card";
import Pagination from "@/components/blog/pagination";

const PER_PAGE = 6;

function BlogsListing({ blogs, categories, featured }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const isBrowsing = query.trim() === "" && category === "All";

  const filtered = useMemo(
    () => searchAndFilterBlogs(blogs, { query, category }),
    [blogs, query, category]
  );

  // When browsing the default view, the featured post is shown separately,
  // so it is excluded from the paginated grid to avoid duplication.
  const gridSource = isBrowsing
    ? filtered.filter((blog) => blog.slug !== featured?.slug)
    : filtered;

  const result = useMemo(
    () => paginate(gridSource, page, PER_PAGE),
    [gridSource, page]
  );

  const resetPage = () => setPage(1);

  return (
    <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:pb-24 pb-16 flex flex-col gap-10">
      <SearchFilter
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          resetPage();
        }}
        category={category}
        onCategoryChange={(value) => {
          setCategory(value);
          resetPage();
        }}
        categories={categories}
      />

      {isBrowsing && page === 1 && <FeaturedBlog blog={featured} />}

      {result.items.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.items.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <Pagination
            page={result.page}
            totalPages={result.totalPages}
            onPageChange={(next) => {
              setPage(next);
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          />
        </>
      ) : (
        <div className="text-center py-20 border border-[#1A1A1A] rounded-3xl">
          <p className="text-lg font-semibold">No articles found</p>
          <p className="text-zinc-500 text-sm mt-2">
            Try a different keyword or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              resetPage();
            }}
            className="mt-5 text-sm font-semibold text-secondary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

export default BlogsListing;
