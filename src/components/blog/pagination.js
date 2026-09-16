"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getPageList(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = new Set([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result = [];
  let prev = 0;
  for (const page of sorted) {
    if (page - prev > 1) result.push("...");
    result.push(page);
    prev = page;
  }
  return result;
}

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = getPageList(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 pt-4"
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1A1A1A] text-zinc-300 transition-colors hover:border-[#C70A0E]/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#1A1A1A]"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`gap-${i}`} className="px-2 text-zinc-600">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={`w-10 h-10 rounded-full text-sm font-medium border transition-colors ${
              p === page
                ? "border-[#C70A0E] bg-[#C70A0E]/15 text-secondary"
                : "border-[#1A1A1A] text-zinc-400 hover:border-[#C70A0E]/40 hover:text-white"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1A1A1A] text-zinc-300 transition-colors hover:border-[#C70A0E]/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#1A1A1A]"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}

export default Pagination;
