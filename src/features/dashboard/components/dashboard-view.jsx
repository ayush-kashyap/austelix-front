"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboard.service";
import { useArticles } from "@/hooks/use-articles";
import { PageHeader } from "@/components/shared/page-header";
import { StatCardsSkeleton } from "@/components/shared/skeletons";
import { ErrorState } from "@/components/shared/error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { OverviewCards } from "./overview-cards";
import { DashboardCharts } from "./charts";
import { RecentActivity } from "./recent-activity";
import { mockComments } from "@/services/mock-data";

export function DashboardView() {
  const overview = useQuery({
    queryKey: ["dashboard", "overview"],
    queryFn: () => dashboardService.overview(),
  });
  const recent = useArticles({ sort: "newest", pageSize: 5 });

  if (overview.isError) {
    return (
      <>
        <PageHeader title="Dashboard" description="Your editorial activity at a glance." />
        <ErrorState onRetry={() => overview.refetch()} />
      </>
    );
  }

  return (
    <>
      <PageHeader title="Dashboard" description="Your editorial activity at a glance." />

      {overview.isLoading || !overview.data ? (
        <div className="space-y-4">
          <StatCardsSkeleton />
          <Skeleton className="h-[320px] w-full rounded-xl" />
        </div>
      ) : (
        <div className="space-y-6">
          <OverviewCards stats={overview.data.stats} />
          <DashboardCharts
            viewsSeries={overview.data.viewsSeries}
            categorySeries={overview.data.categorySeries}
          />
          <RecentActivity
            articles={recent.data?.data ?? []}
            comments={mockComments.slice(0, 4)}
          />
        </div>
      )}
    </>
  );
}
