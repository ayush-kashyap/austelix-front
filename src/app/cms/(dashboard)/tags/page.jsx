"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export default function TagsPage() {
  const [tags,setTags] = useState([]);

  return (
    <>
      <PageHeader title="Tags" description="Lightweight labels for cross-cutting topics.">
        <Button><Plus className="h-4 w-4" /> New tag</Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tags.length===0?<div>No data</div>:tags.map((t) => (
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
