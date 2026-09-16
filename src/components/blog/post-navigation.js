import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PostNavigation({ previous, next }) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Article navigation"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#1A1A1A] pt-8"
    >
      {previous ? (
        <Link
          href={`/blogs/${previous.slug}`}
          className="group flex flex-col gap-1 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5 transition-colors hover:border-[#C70A0E]/50"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <span className="font-semibold leading-snug transition-colors group-hover:text-secondary line-clamp-2">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span className="hidden md:block" />
      )}

      {next && (
        <Link
          href={`/blogs/${next.slug}`}
          className="group flex flex-col gap-1 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-5 text-right transition-colors hover:border-[#C70A0E]/50 md:items-end"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Next
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="font-semibold leading-snug transition-colors group-hover:text-secondary line-clamp-2">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}

export default PostNavigation;
