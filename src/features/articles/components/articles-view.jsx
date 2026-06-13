"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileText, Plus } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { selectAllArticles } from "@/store/slices/articlesSlice";
import { filterArticles } from "@/lib/filter-articles";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/empty-state";
import { ArticleFilters } from "./article-filters";
import { ArticlesTable } from "./articles-table";

export function ArticlesView() {
  const articles = useAppSelector(selectAllArticles);
  const [query, setQuery] = useState({
    search: "",
    status: "all",
    categoryId: "all",
    authorId: "all",
    sort: "newest",
    page: 1,
    pageSize: 10,
  });

  const patch = (next) => setQuery((q) => ({ ...q, ...next }));
  const data = useMemo(() => filterArticles(articles, query), [articles, query]);

  return (
    <>
      <PageHeader title="Articles" description="Draft, schedule, and publish your content.">
        <Button asChild>
          <Link href="/cms/articles/new">
            <Plus className="h-4 w-4" /> New article
          </Link>
        </Button>
      </PageHeader>

      <ArticleFilters query={query} onChange={patch} />

      {data.data.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No articles match these filters"
          description="Try clearing the search or filters, or create a new article to get started."
          action={
            <Button asChild>
              <Link href="/cms/articles/new">
                <Plus className="h-4 w-4" /> New article
              </Link>
            </Button>
          }
        />
      ) : (
        <ArticlesTable
          data={data.data}
          page={data.page}
          totalPages={data.totalPages}
          total={data.total}
          onPageChange={(page) => patch({ page })}
        />
      )}
    </>
  );
}
