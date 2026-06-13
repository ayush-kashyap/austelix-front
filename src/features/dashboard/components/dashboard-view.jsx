"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectAllArticles } from "@/store/slices/articlesSlice";
import { selectAllComments } from "@/store/slices/commentsSlice";
import { PageHeader } from "@/components/shared/page-header";
import { OverviewCards } from "./overview-cards";
import { DashboardCharts } from "./charts";
import { RecentActivity } from "./recent-activity";

const DASHBOARD_OVERVIEW = {
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

export function DashboardView() {
  const articles = useAppSelector(selectAllArticles);
  const comments = useAppSelector(selectAllComments);

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
        <OverviewCards stats={DASHBOARD_OVERVIEW.stats} />
        <DashboardCharts
          viewsSeries={DASHBOARD_OVERVIEW.viewsSeries}
          categorySeries={DASHBOARD_OVERVIEW.categorySeries}
        />
        <RecentActivity articles={recentArticles} comments={recentComments} />
      </div>
    </>
  );
}
