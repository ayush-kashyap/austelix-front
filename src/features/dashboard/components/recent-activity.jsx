import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EmptyState } from "@/components/shared/empty-state";
import { StatusBadge } from "@/components/shared/status-badge";
import { initials, timeAgo } from "@/lib/format";

/** @param {{ articles: any[], comments: any[] }} props */
export function RecentActivity({ articles, comments }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-sm">Recently edited</CardTitle>
          <Link href="/cms/articles" className="text-xs text-primary hover:underline">
            View all
          </Link>
        </CardHeader>
        <CardContent className="divide-y">
          {articles.length === 0 ? (
            <EmptyState
              title="No recent articles"
              description="Recently edited articles will show up here."
            />
          ) : null}
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/cms/articles/${a.id}/edit`}
              className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">
                  {a.author.name} · {timeAgo(a.updatedAt)}
                </p>
              </div>
              <StatusBadge status={a.status} />
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-sm">Recent comments</CardTitle>
          <Link href="/cms/comments" className="text-xs text-primary hover:underline">
            Moderate
          </Link>
        </CardHeader>
        <CardContent className="divide-y">
          {comments.length === 0 ? (
            <EmptyState
              title="No recent comments"
              description="New comments will appear here for moderation."
            />
          ) : null}
          {comments.map((c) => (
            <div key={c.id} className="flex gap-3 py-3 first:pt-0 last:pb-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src={c.author.avatar} alt={c.author.name} />
                <AvatarFallback>{initials(c.author.name)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{c.author.name}</span>
                  <StatusBadge status={c.status} />
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.body}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  on {c.articleTitle} · {timeAgo(c.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
