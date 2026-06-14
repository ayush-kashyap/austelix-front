"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectAllArticles } from "@/store/slices/articlesSlice";
import { selectAllCategories } from "@/store/slices/categoriesSlice";
import { selectAllComments } from "@/store/slices/commentsSlice";
import { PageHeader } from "@/components/shared/page-header";
import { OverviewCards } from "./overview-cards";
import { DashboardCharts } from "./charts";
import { RecentActivity } from "./recent-activity";

export function DashboardView() {
  const articles = useAppSelector(selectAllArticles);
  const categories = useAppSelector(selectAllCategories);
  const comments = useAppSelector(selectAllComments);

  const stats = useMemo(
    () => ({
      totalArticles: articles.length,
      published: articles.filter((a) => a.status === "published").length,
      drafts: articles.filter((a) => a.status === "draft").length,
      totalViews: articles.reduce((sum, a) => sum + (a.views ?? 0), 0),
      comments: comments.length,
    }),
    [articles, comments]
  );

  const categorySeries = useMemo(() => {
    const counts = new Map(categories.map((c) => [c.id, { name: c.name, value: 0 }]));
    for (const article of articles) {
      const categoryId = article.categoryId ?? article.category?.id;
      const entry = categoryId ? counts.get(categoryId) : null;
      if (entry) entry.value += 1;
    }
    return [...counts.values()].filter((c) => c.value > 0);
  }, [articles, categories]);

  const recentArticles = useMemo(
    () =>
      [...articles]
        .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
        .slice(0, 5),
    [articles]
  );

  const recentComments = useMemo(() => comments.slice(0, 4), [comments]);

  return (
    <>
      <PageHeader title="Dashboard" description="Your editorial activity at a glance." />

      <div className="space-y-6">
        <OverviewCards stats={stats} />
        <DashboardCharts categorySeries={categorySeries} />
        <RecentActivity articles={recentArticles} comments={recentComments} />
      </div>
    </>
  );
}
