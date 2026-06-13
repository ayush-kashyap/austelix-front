import { Inbox } from "lucide-react";

/**
 * @param {{ icon?: any, title?: string, description?: string,
 *   action?: React.ReactNode }} props
 */
export function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing here yet",
  description = "When there's something to show, it'll appear here.",
  action,
}) {
  return (
    <div className="grid place-items-center rounded-xl border border-dashed border-border p-12 text-center">
      <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
