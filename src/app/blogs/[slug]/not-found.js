import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlogNotFound() {
  return (
    <div>
      <Header active="blog" />
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 py-32 text-center flex flex-col items-center gap-5">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
          404
        </span>
        <h1 className="md:text-4xl text-2xl font-extrabold">
          This article could not be found
        </h1>
        <p className="text-zinc-400 max-w-md">
          The post you are looking for may have been moved or no longer exists.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold red-shadow mt-2"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>
      </section>
      <Footer />
    </div>
  );
}
