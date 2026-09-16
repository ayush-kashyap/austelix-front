"use client";

import React from "react";
import { Search, X } from "lucide-react";

function SearchFilter({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative max-w-xl">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search articles, topics, authors..."
          aria-label="Search articles"
          className="w-full rounded-full border border-[#1A1A1A] bg-[#0A0A0A] py-3 pl-11 pr-11 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-[#C70A0E]/60"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const active = cat.name === category;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => onCategoryChange(cat.name)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
                active
                  ? "border-[#C70A0E] bg-[#C70A0E]/15 text-secondary"
                  : "border-[#1A1A1A] text-zinc-400 hover:border-[#C70A0E]/40 hover:text-white"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs text-zinc-600">{cat.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchFilter;
