import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * @param {{ label: string, value: string|number, icon?: any, delta?: string,
 *   trend?: "up"|"down"|"flat", className?: string }} props
 */
export function StatCard({ label, value, icon: Icon, delta, trend = "flat", className }) {
  return (
    <Card className={className}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          {Icon && (
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
          )}
        </div>
        <div className="mt-3 text-2xl font-semibold tabular-nums tracking-tight">
          {value}
        </div>
        {delta && (
          <p
            className={cn(
              "mt-1 text-xs",
              trend === "up" && "text-emerald-600 dark:text-emerald-400",
              trend === "down" && "text-red-600 dark:text-red-400",
              trend === "flat" && "text-muted-foreground"
            )}
          >
            {delta}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
