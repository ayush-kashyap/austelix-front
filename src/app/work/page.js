import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ArrowUpRight,
  Check,
  Calculator,
  BookOpen,
  LineChart,
  Gauge,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Our Work — Austelix",
  description:
    "Products we've designed and built. Featuring Vittarthi, a suite of 11+ free financial calculators helping every Indian plan, invest, and grow with confidence.",
  alternates: { canonical: "https://austelix.com/work" },
  openGraph: {
    type: "website",
    url: "https://austelix.com/work",
    title: "Our Work — Austelix",
    description: "Products we've designed and built — intelligent core, powerful brands.",
    siteName: "Austelix",
  },
};

const vittarthiFeatures = [
  "11+ instant calculators with live sliders and charts",
  "Scenario planning and side-by-side comparison",
  "Knowledge Hub — blogs, market news, and case studies",
  "SEO-optimized, fast, and mobile-first by design",
  "Built for India's real financial planning needs",
];

const vittarthiStats = [
  { value: "11+", label: "Free calculators" },
  { value: "363+", label: "Monthly users" },
  { value: "56+", label: "Articles & guides" },
  { value: "100%", label: "Free, no sign-up" },
];

const capabilities = [
  {
    icon: Calculator,
    title: "Financial calculators",
    body: "SIP, EMI, home/car/personal loans, PPF, NPS, PF, salary, retirement and loan eligibility — each with live inputs and instant results.",
    node: "border border-dashed border-[#C70A0E]/45 text-zinc-500",
  },
  {
    icon: LineChart,
    title: "Live markets & scenarios",
    body: "Real-time market context and scenario planning, so users can compare interest rates, tenures, and returns before committing.",
    node: "border border-[#C70A0E]/70 text-white",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    body: "A growing library of blogs, news, and data-driven case studies that turn complex finance into clear, actionable guidance.",
    node: "bg-secondary border border-secondary text-white shadow-[0_0_20px_2px_rgba(199,10,14,0.5)]",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    body: "Built for speed and discoverability — fast loads, clean markup, and search-optimized pages that rank and convert.",
    node: "bg-secondary border border-secondary text-white shadow-[0_0_26px_3px_rgba(199,10,14,0.7)]",
  },
];

// Add future products here — the grid below scales automatically.
const upcoming = [
  { name: "In development", tag: "Fintech", note: "A new product is taking shape." },
  { name: "Your product here", tag: "Let's build", note: "Have an idea worth building?" },
];

function CalculatorMock() {
  return (
    <div className="relative w-full rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#1A1A1A] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="ml-3 text-xs text-zinc-500">vittarthi.com/calculators/sip</span>
      </div>

      {/* calculator card */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <TrendingUp size={16} />
            </span>
            <span className="font-bold">SIP Calculator</span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
            12% p.a.
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">Total Corpus</div>
            <div className="text-3xl font-extrabold text-emerald-400">₹11.6L</div>
            <div className="mt-3 space-y-3">
              {[
                { l: "Monthly Investment", v: "₹5,000", w: "62%" },
                { l: "Return Rate", v: "12%", w: "48%" },
                { l: "Time Period", v: "10 yrs", w: "34%" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{s.l}</span>
                    <span className="font-semibold">{s.v}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-[#1A1A1A]">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: s.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* donut */}
          <div className="mx-auto">
            <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
              <circle cx="60" cy="60" r="48" fill="none" stroke="#1A1A1A" strokeWidth="14" />
              <circle
                cx="60"
                cy="60"
                r="48"
                fill="none"
                stroke="#10b981"
                strokeWidth="14"
                strokeDasharray="301.6"
                strokeDashoffset="156"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#1A1A1A]" /> Invested ₹6.0L</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Returns ₹5.6L</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div>
      <Header active={"work"} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden xl:px-32 lg:px-24 md:px-32 px-6 md:pt-20 pt-14 md:pb-10 pb-8">
        <div
          className="pointer-events-none absolute -top-1/4 right-0 w-1/2 h-[140%]"
          style={{ background: "radial-gradient(circle, rgba(199,10,14,0.16), transparent 62%)" }}
        />
        <div className="relative">
          <span className="text-secondary md:text-xl text-lg font-bold">OUR WORK</span>
          <h1 className="md:text-6xl text-4xl font-extrabold leading-[1.08] tracking-tight mt-4 max-w-[20ch]">
            Products we build, <span className="text-secondary">brands</span> we power.
          </h1>
          <p className="text-zinc-300 md:text-lg text-base leading-relaxed mt-6 max-w-[60ch]">
            We don't just ship features — we build complete products that people actually
            use. Here's one we're proud of, with more on the way.
          </p>
        </div>
      </section>

      {/* ===== FEATURED PRODUCT: VITTARTHI ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-12 py-8">
        <div className="relative rounded-[26px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/5 to-[#0A0A0A]/40 p-6 md:p-10">
          <span className="absolute -top-px -left-px h-16 w-16 rounded-tl-[26px] border-t-[3px] border-l-[3px] border-secondary pointer-events-none" />
          <span className="absolute -bottom-px -right-px h-16 w-16 rounded-br-[26px] border-b-[3px] border-r-[3px] border-secondary pointer-events-none" />

          <div className="flex items-center gap-2 text-secondary text-sm font-bold">
            <Sparkles size={16} /> FEATURED PRODUCT
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* copy */}
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl font-extrabold">
                  V
                </span>
                <div>
                  <h2 className="text-3xl font-extrabold leading-none">Vittarthi</h2>
                  <div className="text-zinc-400 text-sm mt-1">Fintech · Financial Tools</div>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mt-5">
                A free, no-sign-up platform of financial calculators that helps every Indian
                plan, invest, and grow with confidence — turning complex formulas into clear,
                instant answers.
              </p>

              <ul className="mt-6 space-y-2.5">
                {vittarthiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C70A0E]/10 text-secondary">
                      <Check size={13} />
                    </span>
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://vittarthi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold red-shadow transition-shadow hover:shadow-[0_0_28px_rgba(199,10,14,1)]"
                >
                  Visit vittarthi.com <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://vittarthi.com/calculators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] px-6 py-3 text-sm font-bold transition-colors hover:border-[#C70A0E]/60 hover:text-secondary"
                >
                  Explore calculators
                </a>
              </div>
            </div>

            {/* mock */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-6 -z-10"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)" }}
              />
              <CalculatorMock />
            </div>
          </div>

          {/* stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl bg-[#1A1A1A]">
            {vittarthiStats.map((s) => (
              <div key={s.label} className="bg-[#0A0A0A] p-5 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-secondary">{s.value}</div>
                <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILT ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10">
        <span className="text-secondary md:text-xl text-lg font-bold">WHAT WE BUILT INTO IT</span>
        <h2 className="md:text-4xl text-2xl font-extrabold mt-3 max-w-[24ch]">
          From idea to a product people <span className="text-secondary">rely on</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {capabilities.map(({ icon: Icon, title, body, node }) => (
            <div key={title} className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
              <div className={`grid h-11 w-11 place-items-center rounded-xl bg-black ${node}`}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-extrabold mt-5 mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MORE / UPCOMING ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-10 py-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-secondary md:text-xl text-lg font-bold">MORE IN THE WORKS</span>
            <h2 className="md:text-3xl text-2xl font-extrabold mt-2">The pipeline is filling up</h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {upcoming.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-2xl border border-dashed border-[#222] bg-[#070707] p-7 transition-colors hover:border-[#C70A0E]/50"
            >
              <div className="text-xs font-bold uppercase tracking-wide text-zinc-500">{p.tag}</div>
              <div className="mt-2 text-xl font-extrabold text-zinc-300 group-hover:text-white transition-colors">
                {p.name}
              </div>
              <p className="text-zinc-500 text-sm mt-1.5">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-20 py-14">
        <div className="relative overflow-hidden rounded-[26px] border border-[#1A1A1A] bg-gradient-to-b from-[#0A0A0A] to-black p-10 md:p-14 text-center">
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full"
            style={{ background: "radial-gradient(circle, rgba(199,10,14,0.22), transparent 60%)" }}
          />
          <h2 className="relative md:text-5xl text-3xl font-extrabold tracking-tight">
            Have an idea worth <span className="text-secondary">building?</span>
          </h2>
          <p className="relative text-zinc-300 md:text-lg mt-5 max-w-[55ch] mx-auto">
            Vittarthi started as one. Tell us what you're working on, and let's turn it into a
            product people use.
          </p>
          <a
            href="/contact-us"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-bold red-shadow transition-shadow hover:shadow-[0_0_30px_rgba(199,10,14,1)]"
          >
            Start a project <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Work;
