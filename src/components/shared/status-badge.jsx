import { cn } from "@/lib/utils";
import { STATUS_TONE } from "@/lib/constants";

const TONE_CLASSES = {
  emerald:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400",
  amber:
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400",
  red: "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-500/10 dark:text-red-400",
  sky: "bg-sky-50 text-sky-700 ring-sky-600/20 dark:bg-sky-500/10 dark:text-sky-400",
  zinc: "bg-zinc-100 text-zinc-600 ring-zinc-500/20 dark:bg-zinc-800 dark:text-zinc-300",
};

/**
 * Status pill. Maps a domain status to a tone via STATUS_TONE.
 * @param {{ status: string, className?: string }} props
 */
export function StatusBadge({ status, className }) {
  const tone = STATUS_TONE[status] ?? "zinc";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ring-1 ring-inset",
        TONE_CLASSES[tone],
        className
      )}
    >
      {status}
    </span>
  );
}
