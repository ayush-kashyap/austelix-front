import { FileText, CheckCircle2, FileEdit, Eye, MessageSquare } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { formatNumber } from "@/lib/format";

/** @param {{ stats: any }} props */
export function OverviewCards({ stats }) {
  const cards = [
    { label: "Total articles", value: stats.totalArticles, icon: FileText },
    { label: "Published", value: stats.published, icon: CheckCircle2 },
    { label: "Drafts", value: stats.drafts, icon: FileEdit },
    { label: "Total views", value: formatNumber(stats.totalViews), icon: Eye },
    { label: "Comments", value: stats.comments, icon: MessageSquare },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  );
}
