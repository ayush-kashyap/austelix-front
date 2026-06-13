"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UploadCloud, Grid2x2, List as ListIcon, FileText } from "lucide-react";
import { mediaService } from "@/services/content.service";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardGridSkeleton } from "@/components/shared/skeletons";
import { formatFileSize, formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export default function MediaPage() {
  const [view, setView] = useState("grid");
  const { data: media = [], isLoading } = useQuery({
    queryKey: ["media"],
    queryFn: () => mediaService.list(),
  });

  return (
    <>
      <PageHeader title="Media Library" description="Images and files used across your content.">
        <div className="flex items-center gap-1 rounded-lg border p-0.5">
          <Button variant={view === "grid" ? "secondary" : "ghost"} size="icon" className="h-7 w-7" onClick={() => setView("grid")}>
            <Grid2x2 className="h-4 w-4" />
          </Button>
          <Button variant={view === "list" ? "secondary" : "ghost"} size="icon" className="h-7 w-7" onClick={() => setView("list")}>
            <ListIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button><UploadCloud className="h-4 w-4" /> Upload</Button>
      </PageHeader>

      {isLoading ? (
        <CardGridSkeleton count={6} />
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {media.map((m) => (
            <Card key={m.id} className="overflow-hidden">
              <div className="grid aspect-video place-items-center bg-muted">
                {m.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.url} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <FileText className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
              <CardContent className="p-3">
                <p className="truncate text-sm font-medium">{m.name}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(m.size)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="divide-y p-0">
            {media.map((m) => (
              <div key={m.id} className="flex items-center gap-3 p-3">
                <div className={cn("grid h-10 w-10 place-items-center overflow-hidden rounded-md bg-muted")}>
                  {m.type === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.url} alt={m.name} className="h-full w-full object-cover" />
                  ) : (
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.mimeType}</p>
                </div>
                <span className="text-sm text-muted-foreground">{formatFileSize(m.size)}</span>
                <span className="hidden text-sm text-muted-foreground sm:block">{formatDate(m.uploadedAt)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
}
