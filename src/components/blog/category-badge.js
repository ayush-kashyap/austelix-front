import React from "react";

function CategoryBadge({ category, className = "" }) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold tracking-wide px-3 py-1 rounded-full border border-[#C70A0E]/40 bg-[#C70A0E]/10 text-secondary ${className}`}
    >
      {category}
    </span>
  );
}

export default CategoryBadge;
