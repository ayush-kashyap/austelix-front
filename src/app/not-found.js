import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/work", label: "Work" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <div>
      <Header />

      <section className="relative overflow-hidden about-hero-glow glow-radial-center about-tick xl:px-32 lg:px-24 md:px-32 px-6 md:py-28 py-20 text-center flex flex-col items-center">
        <div className="relative z-[2] flex flex-col items-center gap-6 max-w-2xl">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            404
          </span>
          <h1 className="md:text-6xl text-3xl font-extrabold leading-[1.08] tracking-tight">
            This page <span className="text-secondary">doesn&apos;t exist</span>
          </h1>
          <div className="w-[54px] h-1 bg-secondary rounded shadow-[0_0_14px_rgba(199,10,14,0.7)]" />
          <p className="text-zinc-400 md:text-base text-sm leading-relaxed max-w-md">
            The page you&apos;re looking for may have been moved, removed, or the
            URL might be incorrect.
          </p>

          <Image
            src="/austelix-transparent.png"
            width={200}
            height={200}
            alt="Austelix"
            className="w-[min(50%,180px)] h-auto opacity-60 drop-shadow-[0_0_45px_rgba(199,10,14,0.3)] my-2"
          />

          <div className="flex gap-4 flex-col sm:flex-row mt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold red-shadow sliding-animation"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 border border-(--secondary-color) rounded-full px-6 py-3 text-sm font-semibold sliding-animation"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:pb-24 pb-16">
        <span className="text-secondary md:text-xl text-lg font-bold block text-center mb-3">
          EXPLORE
        </span>
        <h2 className="md:text-2xl text-xl font-extrabold text-center mb-8">
          Or try one of these <span className="text-secondary">pages</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {quickLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-[18px] border border-[#1A1A1A] bg-[#0A0A0A] px-5 py-4 text-center text-sm font-semibold transition-colors hover:border-[#C70A0E]/50 hover:text-secondary"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
