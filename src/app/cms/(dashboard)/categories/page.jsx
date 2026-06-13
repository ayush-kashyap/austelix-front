"use client";

import { Plus, FolderTree } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { selectAllCategories } from "@/store/slices/categoriesSlice";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CategoriesPage() {
  const categories = useAppSelector(selectAllCategories);
  const roots = categories.filter((c) => !c.parentId);
  const childrenOf = (id) => categories.filter((c) => c.parentId === id);

  return (
    <>
      <PageHeader title="Categories" description="Group articles into a navigable hierarchy.">
        <Button><Plus className="h-4 w-4" /> New category</Button>
      </PageHeader>

      <Card>
        <CardContent className="divide-y p-0">
          {roots.map((c) => (
            <div key={c.id}>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <FolderTree className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.description}</p>
                  </div>
                </div>
                <Badge variant="secondary">{c.articleCount} articles</Badge>
              </div>
              {childrenOf(c.id).map((child) => (
                <div key={child.id} className="flex items-center justify-between border-t bg-muted/30 py-3 pl-12 pr-4">
                  <div>
                    <p className="text-sm font-medium">{child.name}</p>
                    <p className="text-xs text-muted-foreground">{child.description}</p>
                  </div>
                  <Badge variant="secondary">{child.articleCount}</Badge>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
