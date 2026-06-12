import React from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "./category-badge";
import AuthorInfo from "./author-info";

function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden transition-all duration-300 hover:border-[#C70A0E]/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(199,10,14,0.12)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={blog.category} className="backdrop-blur-sm" />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-secondary">
          {blog.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {blog.excerpt}
        </p>
        <div className="pt-2 border-t border-[#1A1A1A]">
          <AuthorInfo
            author={blog.author}
            authorImage={blog.authorImage}
            date={blog.publishedAt}
            readTime={blog.readTime}
          />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
