"use client";

import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * @param {{ title?: string, description?: string, onRetry?: () => void }} props
 */
export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this. Try again, and if it keeps happening, refresh the page.",
  onRetry,
}) {
  return (
    <div className="grid place-items-center rounded-xl border border-dashed border-destructive/40 p-12 text-center">
      <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-destructive/10 text-destructive">
        <TriangleAlert className="h-6 w-6" />
      </span>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {onRetry && (
        <Button variant="outline" className="mt-4" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
