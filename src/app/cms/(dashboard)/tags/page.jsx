"use client";

import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { lookupService } from "@/services/dashboard.service";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardGridSkeleton } from "@/components/shared/skeletons";

export default function TagsPage() {
  const { data: tags = [], isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => lookupService.tags(),
  });

  return (
    <>
      <PageHeader title="Tags" description="Lightweight labels for cross-cutting topics.">
        <Button><Plus className="h-4 w-4" /> New tag</Button>
      </PageHeader>

      {isLoading ? (
        <CardGridSkeleton count={8} />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {tags.map((t) => (
            <Card key={t.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">#{t.name}</p>
                  <p className="text-xs text-muted-foreground">/{t.slug}</p>
                </div>
                <span className="tabular-nums text-sm text-muted-foreground">{t.articleCount}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
