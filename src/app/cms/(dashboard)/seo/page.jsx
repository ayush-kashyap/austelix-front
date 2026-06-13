"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SeoPage() {
  const [meta, setMeta] = useState({
    title: "Building a design system that scales — Austelix",
    description:
      "How we structured tokens, primitives, and patterns to stay consistent across 40+ surfaces without slowing the team down.",
    slug: "building-a-design-system-that-scales",
  });

  const url = `austelix.com/blogs/${meta.slug}`;

  return (
    <>
      <PageHeader title="SEO" description="Preview how an article appears in search and social." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-sm">Meta fields</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="meta-title">Meta title</Label>
              <Input id="meta-title" value={meta.title} onChange={(e) => setMeta({ ...meta, title: e.target.value })} />
              <p className="mt-1 text-xs text-muted-foreground">{meta.title.length}/60 characters</p>
            </div>
            <div>
              <Label htmlFor="meta-desc">Meta description</Label>
              <Textarea id="meta-desc" rows={3} value={meta.description} onChange={(e) => setMeta({ ...meta, description: e.target.value })} />
              <p className="mt-1 text-xs text-muted-foreground">{meta.description.length}/160 characters</p>
            </div>
            <div>
              <Label htmlFor="meta-slug">URL slug</Label>
              <Input id="meta-slug" value={meta.slug} onChange={(e) => setMeta({ ...meta, slug: e.target.value })} />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-sm">Google preview</CardTitle></CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe className="h-3.5 w-3.5" /> {url}
                </div>
                <p className="mt-1 text-lg leading-tight text-primary">{meta.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{meta.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Social card</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-lg border">
                <div className="aspect-[1.91/1] bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="p-3">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">austelix.com</p>
                  <p className="mt-0.5 truncate text-sm font-medium">{meta.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{meta.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
