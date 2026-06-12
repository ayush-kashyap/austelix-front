import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/blog";

function AuthorInfo({
  author,
  authorImage,
  role,
  date,
  readTime,
  size = "sm",
}) {
  const avatar = size === "lg" ? 44 : 36;

  return (
    <div className="flex items-center gap-3">
      <Image
        src={authorImage}
        alt={author}
        width={avatar}
        height={avatar}
        className="rounded-full border border-[#1A1A1A] object-cover"
      />
      <div className="leading-tight">
        <div className={`font-semibold ${size === "lg" ? "text-base" : "text-sm"}`}>
          {author}
        </div>
        <div className="text-zinc-500 text-xs flex items-center gap-1.5 flex-wrap">
          {role && size === "lg" && <span>{role}</span>}
          {role && size === "lg" && (date || readTime) && (
            <span className="text-[#C70A0E]">•</span>
          )}
          {date && <span>{formatDate(date)}</span>}
          {date && readTime && <span className="text-[#C70A0E]">•</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
