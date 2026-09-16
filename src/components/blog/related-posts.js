import React from "react";
import BlogCard from "./blog-card";

function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="border-t border-[#1A1A1A] pt-12">
      <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-8">
        Related <span className="text-secondary">Articles</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
