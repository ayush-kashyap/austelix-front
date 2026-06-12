"use client";

import React, { useEffect, useState } from "react";

function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-xs font-bold tracking-[0.16em] uppercase text-zinc-500 mb-4">
        On this page
      </p>
      <ul className="space-y-1 border-l border-[#1A1A1A]">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`block -ml-px border-l-2 pl-4 py-1.5 leading-snug transition-colors ${
                activeId === id
                  ? "border-[#C70A0E] text-secondary font-medium"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
