"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Check, Ban, Trash2 } from "lucide-react";
import { commentsService } from "@/services/content.service";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/shared/status-badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableSkeleton } from "@/components/shared/skeletons";
import { EmptyState } from "@/components/shared/empty-state";
import { initials, timeAgo } from "@/lib/format";

export default function CommentsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: () => commentsService.list(),
  });

  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    if (data) setComments(data);
  }, [data]);

  const setStatus = (id, status) =>
    setComments((cs) => cs.map((c) => (c.id === id ? { ...c, status } : c)));
  const remove = (id) => setComments((cs) => cs.filter((c) => c.id !== id));

  const visible = comments.filter((c) => filter === "all" || c.status === filter);
  const countOf = (s) => comments.filter((c) => c.status === s).length;

  return (
    <>
      <PageHeader title="Comments" description="Review, approve, and moderate reader comments." />

      <Tabs value={filter} onValueChange={setFilter} className="mb-4">
        <TabsList>
          <TabsTrigger value="all">All ({comments.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({countOf("pending")})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({countOf("approved")})</TabsTrigger>
          <TabsTrigger value="spam">Spam ({countOf("spam")})</TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <TableSkeleton rows={4} />
      ) : visible.length === 0 ? (
        <EmptyState icon={Check} title="Nothing to moderate" description="There are no comments in this view." />
      ) : (
        <Card>
          <CardContent className="divide-y p-0">
            {visible.map((c) => (
              <div key={c.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={c.author.avatar} alt={c.author.name} />
                  <AvatarFallback>{initials(c.author.name)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium">{c.author.name}</span>
                    <span className="text-xs text-muted-foreground">{c.author.email}</span>
                    <StatusBadge status={c.status} />
                  </div>
                  <p className="mt-1 text-sm">{c.body}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    on {c.articleTitle} · {timeAgo(c.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {c.status !== "approved" && (
                    <Button size="sm" variant="outline" onClick={() => setStatus(c.id, "approved")}>
                      <Check className="h-4 w-4" /> Approve
                    </Button>
                  )}
                  {c.status !== "spam" && (
                    <Button size="sm" variant="outline" onClick={() => setStatus(c.id, "spam")}>
                      <Ban className="h-4 w-4" /> Spam
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(c.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
}
