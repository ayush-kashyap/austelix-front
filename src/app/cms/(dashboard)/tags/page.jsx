"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const INITIAL_TAGS = [
  { id: "t1", name: "React", slug: "react", articleCount: 14 },
  { id: "t2", name: "Next.js", slug: "nextjs", articleCount: 11 },
  { id: "t3", name: "TypeScript", slug: "typescript", articleCount: 9 },
  { id: "t4", name: "Performance", slug: "performance", articleCount: 6 },
  { id: "t5", name: "Accessibility", slug: "accessibility", articleCount: 5 },
  { id: "t6", name: "Design Systems", slug: "design-systems", articleCount: 8 },
  { id: "t7", name: "DevOps", slug: "devops", articleCount: 4 },
  { id: "t8", name: "Security", slug: "security", articleCount: 3 },
];

export default function TagsPage() {
  const [tags] = useState(INITIAL_TAGS);

  return (
    <>
      <PageHeader title="Tags" description="Lightweight labels for cross-cutting topics.">
        <Button><Plus className="h-4 w-4" /> New tag</Button>
      </PageHeader>

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
    </>
  );
}
