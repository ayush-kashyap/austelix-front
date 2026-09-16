import React from "react";

function BlogHero() {
  return (
    <section className="relative overflow-hidden xl:px-32 lg:px-24 md:px-32 px-6 md:pt-20 pt-14 md:pb-10 pb-8">
      <div
        className="pointer-events-none absolute -top-1/3 right-0 w-1/2 h-[140%]"
        style={{
          background:
            "radial-gradient(circle, rgba(199,10,14,0.16), transparent 62%)",
        }}
      />
      <div className="relative max-w-3xl">
        <span className="text-secondary md:text-xl text-lg font-bold">BLOG</span>
        <h1 className="md:text-6xl text-4xl font-extrabold leading-[1.05] tracking-tight mt-4">
          Insights From <span className="text-secondary">Our Journey</span>
        </h1>
        <p className="text-zinc-400 md:text-lg text-base leading-relaxed mt-6">
          Product updates, engineering notes, and lessons learned while building
          intelligent software that creates lasting impact.
        </p>
      </div>
    </section>
  );
}

export default BlogHero;
