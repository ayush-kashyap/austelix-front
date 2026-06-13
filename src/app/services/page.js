import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  Compass,
  Rocket,
  Boxes,
  CloudUpload,
  ScanSearch,
  Search,
  PenLine,
  Sparkles,
  Loader2,
} from "lucide-react";

export const metadata = {
  title: "Software Development Consulting — Austelix",
  description:
    "Austelix is a software development consultancy. We take you from strategy and architecture to production-grade, shipped code — web, mobile, APIs, and cloud.",
  alternates: { canonical: "https://austelix.com/services" },
  openGraph: {
    type: "website",
    url: "https://austelix.com/services",
    title: "Software Development Consulting — Austelix",
    description:
      "Strategy that ends in shipped code — intelligent core, powerful brands.",
    siteName: "Austelix",
  },
};

const partnerFeatures = [
  "Technical strategy, scoping, and architecture you can defend",
  "Full-stack delivery — web, mobile, APIs, and infrastructure",
  "Production-grade code: tested, documented, and peer-reviewed",
  "Cloud, CI/CD, and monitoring set up from day one",
  "A clean handover — you own the code, always",
];

const partnerStats = [
  { value: "0→1", label: "Idea to launch" },
  { value: "Full-stack", label: "Web, mobile & cloud" },
  { value: "CI/CD", label: "Automated delivery" },
  { value: "Yours", label: "You own the code" },
];

const services = [
  {
    icon: Compass,
    title: "Product & technical strategy",
    body: "Roadmaps, scoping, and architecture decisions that still hold up after you grow. We help you choose what to build, and what not to.",
  },
  {
    icon: Code2,
    title: "Full-stack development",
    body: "Web and mobile apps built end to end — from database and APIs to the interface your users actually touch.",
  },
  {
    icon: Rocket,
    title: "MVP & rapid prototyping",
    body: "Get a real, usable product in front of users in weeks, not quarters — built so it won't have to be thrown away later.",
  },
  {
    icon: Boxes,
    title: "APIs & integrations",
    body: "Connect your stack — payments, data, auth, third-party services — cleanly and securely, with docs your team can read.",
  },
  {
    icon: CloudUpload,
    title: "Cloud, DevOps & scaling",
    body: "CI/CD, infrastructure, and monitoring set up so releases are boring and uptime isn't something you think about.",
  },
  {
    icon: ScanSearch,
    title: "Audits & performance",
    body: "Code reviews, security checks, and speed/SEO tuning that find what's slowing you down — and pay for themselves.",
  },
];

const stack = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "React Native",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
];

// Intensifying-red nodes mirror the brand's capability treatment.
const process = [
  {
    step: "STEP 01",
    icon: Search,
    title: "Discover",
    body: "We pin down the problem, the users, and what success looks like — before a single line of code is written.",
    node: "border border-dashed border-[#C70A0E]/45 text-zinc-500",
  },
  {
    step: "STEP 02",
    icon: PenLine,
    title: "Architect",
    body: "We design the system, choose the stack, and de-risk the hard parts early — so there are no nasty surprises later.",
    node: "border border-[#C70A0E]/70 text-white",
  },
  {
    step: "STEP 03",
    icon: Code2,
    title: "Build",
    body: "We ship in short, reviewable cycles you can see and steer — with working software at the end of every sprint.",
    node: "bg-secondary border border-secondary text-white shadow-[0_0_20px_2px_rgba(199,10,14,0.5)]",
  },
  {
    step: "STEP 04",
    icon: Rocket,
    title: "Ship & scale",
    body: "We launch, monitor, and harden the product in the real world — then hand you the keys and the documentation.",
    node: "bg-secondary border border-secondary text-white shadow-[0_0_26px_3px_rgba(199,10,14,0.7)]",
  },
];

const engagements = [
  { tag: "Outcome-based", name: "Project build", note: "Fixed scope, a clear outcome. We take an idea to launch and own the delivery." },
  { tag: "Embedded", name: "Dedicated team", note: "A full squad that works as your product team for as long as you need it." },
  { tag: "Retainer", name: "Advisory & architecture", note: "Senior guidance, code reviews, and technical direction on a steady retainer." },
  { tag: "Flexible", name: "Staff augmentation", note: "Plug our engineers into your existing team to add capacity where it counts." },
];

function DeployMock() {
  return (
    <div className="relative w-full rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] overflow-hidden">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-[#1A1A1A] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="h-3 w-3 rounded-full bg-[#2A2A2A]" />
        <span className="ml-3 text-xs text-zinc-500">app.austelix.com/deployments</span>
      </div>

      {/* deploy dashboard */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <Code2 size={16} />
            </span>
            <span className="font-bold">Deploy pipeline</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            passing
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">Uptime (30d)</div>
            <div className="text-3xl font-extrabold text-emerald-400">99.9%</div>
            <div className="mt-3 space-y-3">
              {[
                { l: "Test coverage", v: "92%", w: "92%" },
                { l: "Lighthouse", v: "98", w: "98%" },
                { l: "Build time", v: "1m 12s", w: "40%" },
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

          {/* test-pass ring */}
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
                strokeDashoffset="27"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 248 tests passed</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#1A1A1A]" /> 0 failed</div>
            </div>
          </div>
        </div>

        {/* pipeline stages */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#1A1A1A] pt-4 text-[11px] font-bold text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-emerald-500/15 text-emerald-400"><Check size={11} strokeWidth={3} /></span>
            Build
          </span>
          <span className="text-zinc-700">›</span>
          <span className="flex items-center gap-1.5">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-emerald-500/15 text-emerald-400"><Check size={11} strokeWidth={3} /></span>
            Test
          </span>
          <span className="text-zinc-700">›</span>
          <span className="flex items-center gap-1.5">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#C70A0E]/15 text-secondary"><Loader2 size={11} className="animate-spin" /></span>
            Deploy
          </span>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div>
      <Header active={"services"} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden xl:px-32 lg:px-24 md:px-32 px-6 md:pt-20 pt-14 md:pb-10 pb-8">
        <div
          className="pointer-events-none absolute -top-1/4 right-0 w-1/2 h-[140%]"
          style={{ background: "radial-gradient(circle, rgba(199,10,14,0.16), transparent 62%)" }}
        />
        <div className="relative">
          <span className="text-secondary md:text-xl text-lg font-bold">SOFTWARE DEVELOPMENT CONSULTING</span>
          <h1 className="md:text-6xl text-4xl font-extrabold leading-[1.08] tracking-tight mt-4 max-w-[20ch]">
            Strategy that ends in <span className="text-secondary">shipped</span> code.
          </h1>
          <p className="text-zinc-300 md:text-lg text-base leading-relaxed mt-6 max-w-[60ch]">
            Austelix is a software development consultancy. We take you from the first whiteboard
            sketch through architecture, build, and launch — and stay on through scaling. You get
            senior engineering judgment and a product that actually ships.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold red-shadow transition-shadow hover:shadow-[0_0_28px_rgba(199,10,14,1)]"
            >
              Book a consultation <ArrowUpRight size={16} />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] px-6 py-3 text-sm font-bold transition-colors hover:border-[#C70A0E]/60 hover:text-secondary"
            >
              See what we've built
            </a>
          </div>
        </div>
      </section>

      {/* ===== HOW WE PARTNER ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-12 py-8">
        <div className="relative rounded-[26px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/5 to-[#0A0A0A]/40 p-6 md:p-10">
          <span className="absolute -top-px -left-px h-16 w-16 rounded-tl-[26px] border-t-[3px] border-l-[3px] border-secondary pointer-events-none" />
          <span className="absolute -bottom-px -right-px h-16 w-16 rounded-br-[26px] border-b-[3px] border-r-[3px] border-secondary pointer-events-none" />

          <div className="flex items-center gap-2 text-secondary text-sm font-bold">
            <Code2 size={16} /> HOW WE PARTNER
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* copy */}
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#C70A0E]/10 text-secondary">
                  <Code2 size={24} />
                </span>
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight">Full-cycle product engineering</h2>
                  <div className="text-zinc-400 text-sm mt-1">Consulting that ends in production</div>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mt-5">
                We embed with your team — or act as your team — to turn a rough idea into a
                maintainable, scalable product. We own the strategy, the architecture, the delivery,
                and the long tail of scaling and support. No hand-waving, no throwaway prototypes:
                real software you can run.
              </p>

              <ul className="mt-6 space-y-2.5">
                {partnerFeatures.map((f) => (
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
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold red-shadow transition-shadow hover:shadow-[0_0_28px_rgba(199,10,14,1)]"
                >
                  Book a consultation <ArrowUpRight size={16} />
                </a>
                <a
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] px-6 py-3 text-sm font-bold transition-colors hover:border-[#C70A0E]/60 hover:text-secondary"
                >
                  See our work
                </a>
              </div>
            </div>

            {/* mock */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-6 -z-10"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)" }}
              />
              <DeployMock />
            </div>
          </div>

          {/* stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl bg-[#1A1A1A]">
            {partnerStats.map((s) => (
              <div key={s.label} className="bg-[#0A0A0A] p-5 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-secondary">{s.value}</div>
                <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10">
        <span className="text-secondary md:text-xl text-lg font-bold">WHAT WE DO</span>
        <h2 className="md:text-4xl text-2xl font-extrabold mt-3 max-w-[24ch]">
          Consulting across the <span className="text-secondary">whole stack</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 transition-all hover:border-[#C70A0E]/50 hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-black border border-[#C70A0E]/70 text-white">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-extrabold mt-5 mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#1A1A1A] bg-[#0A0A0A] px-4 py-2 text-[13px] font-semibold text-zinc-400 transition-colors hover:text-secondary hover:border-[#C70A0E]/50"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-10 py-6">
        <span className="text-secondary md:text-xl text-lg font-bold">HOW WE WORK</span>
        <h2 className="md:text-4xl text-2xl font-extrabold mt-3 max-w-[24ch]">
          A clear path from idea to <span className="text-secondary">production</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {process.map(({ step, icon: Icon, title, body, node }) => (
            <div key={title} className="rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6">
              <div className="text-xs font-extrabold tracking-wider text-zinc-600">{step}</div>
              <div className={`mt-3.5 grid h-11 w-11 place-items-center rounded-xl bg-black ${node}`}>
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-extrabold mt-4 mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WAYS TO WORK TOGETHER ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-10 py-6">
        <span className="text-secondary md:text-xl text-lg font-bold">WAYS TO WORK TOGETHER</span>
        <h2 className="md:text-3xl text-2xl font-extrabold mt-2">Pick the engagement that fits</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {engagements.map((p) => (
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

      {/* ===== PROOF WE SHIP ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/5 to-[#0A0A0A]/40 px-8 md:px-10 py-8">
          <div>
            <div className="flex items-center gap-2 text-secondary text-sm font-bold">
              <Sparkles size={15} /> PROOF WE SHIP
            </div>
            <h3 className="text-2xl font-extrabold mt-2">We build our own products, too.</h3>
            <p className="text-zinc-400 text-sm mt-1.5 max-w-[52ch]">
              Vittarthi — a platform of 11+ free financial calculators — is one we designed, built,
              and launched ourselves. The same hands build for our clients.
            </p>
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] px-6 py-3 text-sm font-bold transition-colors hover:border-[#C70A0E]/60 hover:text-secondary"
          >
            See our work <ArrowRight size={16} />
          </a>
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
            Let's build something worth <span className="text-secondary">shipping.</span>
          </h2>
          <p className="relative text-zinc-300 md:text-lg mt-5 max-w-[55ch] mx-auto">
            Tell us where you are — an idea, a stalled build, or a product that needs to scale. We'll
            tell you the honest path to production, and then we'll walk it with you.
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

export default Services;
