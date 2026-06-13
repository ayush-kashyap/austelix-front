import { FileText, CheckCircle2, FileEdit, Eye, MessageSquare } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { formatNumber } from "@/lib/format";

/** @param {{ stats: any }} props */
export function OverviewCards({ stats }) {
  const cards = [
    { label: "Total articles", value: stats.totalArticles, icon: FileText, delta: "+3 this week", trend: "up" },
    { label: "Published", value: stats.published, icon: CheckCircle2, delta: "+2 this week", trend: "up" },
    { label: "Drafts", value: stats.drafts, icon: FileEdit, delta: "Awaiting review", trend: "flat" },
    { label: "Total views", value: formatNumber(stats.totalViews), icon: Eye, delta: "+12% vs last month", trend: "up" },
    { label: "Comments", value: stats.comments, icon: MessageSquare, delta: "8 pending", trend: "flat" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  );
}
