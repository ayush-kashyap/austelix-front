import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "./contact-form.js";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
} from "lucide-react";
import { faFacebookF, faInstagram,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Contact Us — Austelix",
  description:
    "Have a problem worth solving or a product in mind? Get in touch with the Austelix team. We reply within one to two business days.",
  alternates: { canonical: "https://austelix.com/contact-us" },
  openGraph: {
    type: "website",
    url: "https://austelix.com/contact-us",
    title: "Contact Us — Austelix",
    description: "Let's build something that matters. Get in touch with the Austelix team.",
    siteName: "Austelix",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "tech.austelix@gmail.com",
    href: "mailto:tech.austelix@gmail.com",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 7007583356",
    href: "tel:+917007583356",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    note: "Working with teams everywhere",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "1–2 business days",
  },
];

const socials = [
  { icon: faLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/company/austelix" },
  { icon: faInstagram, label: "Instagram", href: "https://instagram.com/austelix" },
  // { icon: faFacebookF, label: "Facebook", href: "#" },
];

const steps = [
  {
    step: "01",
    title: "We read it",
    body: "Your message lands with the team directly — not a ticket queue. We read every one.",
    node: "border-2 border-dashed border-[#C70A0E]/45 text-zinc-500",
  },
  {
    step: "02",
    title: "We reply",
    body: "You'll hear back from a real person within one to two business days, usually sooner.",
    node: "border-2 border-[#C70A0E]/70 text-white shadow-[0_0_0_4px_rgba(199,10,14,0.08)]",
  },
  {
    step: "03",
    title: "We map next steps",
    body: "A short call to understand the problem and figure out exactly where we can help.",
    node: "bg-secondary border-2 border-secondary text-white shadow-[0_0_22px_2px_rgba(199,10,14,0.55)]",
  },
];

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "We focus on products that solve real problems — from early concepts to scaling existing platforms. If there's a meaningful challenge behind it, we're interested.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Typically within one to two business days. For time-sensitive matters, mention it in your message and we'll prioritize.",
  },
  {
    q: "Do you work with early-stage teams?",
    a: "Yes. Some of the best products start as a rough idea. We're happy to help shape it from the ground up.",
  },
];

function ContactUs() {
  return (
    <div>
      <Header active={"contact"} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden xl:px-32 lg:px-24 md:px-32 px-6 md:pt-20 pt-14 md:pb-10 pb-8">
        <div
          className="pointer-events-none absolute -top-1/4 right-0 w-1/2 h-[140%]"
          style={{
            background:
              "radial-gradient(circle, rgba(199,10,14,0.18), transparent 62%)",
          }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
          <div>
            <span className="text-secondary md:text-xl text-lg font-bold">
              CONTACT US
            </span>
            <h1 className="md:text-6xl text-4xl font-extrabold leading-[1.08] tracking-tight mt-4">
              Let's build something that <span className="text-secondary">matters.</span>
            </h1>
            <p className="text-zinc-300 md:text-lg text-base leading-relaxed mt-6 max-w-[54ch]">
              Have a problem worth solving, a product in mind, or just want to talk?
              Tell us what you're working on — every message reaches the team directly.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/austelix-transparent.png"
              width={320}
              height={320}
              alt="Austelix"
              className="w-[min(60%,240px)] h-auto opacity-90 drop-shadow-[0_0_45px_rgba(199,10,14,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* ===== FORM + DETAILS ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
          {/* form panel */}
          <div className="relative rounded-[22px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/5 to-[#0A0A0A]/50 p-8 md:p-10">
            <span className="absolute -top-px -left-px w-14 h-14 border-t-[3px] border-l-[3px] border-secondary rounded-tl-[22px] pointer-events-none" />
            <span className="absolute -bottom-px -right-px w-14 h-14 border-b-[3px] border-r-[3px] border-secondary rounded-br-[22px] pointer-events-none" />
            <ContactForm />
          </div>

          {/* details */}
          <div>
            <h2 className="text-2xl font-extrabold mb-1">Reach us directly</h2>
            <p className="text-zinc-400 text-sm mb-7">
              Prefer email or a quick call? Here's how to find us.
            </p>

            <div>
              {contactDetails.map(({ icon: Icon, label, value, note, href }) => {
                const inner = (
                  <>
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-[#C70A0E]/40 bg-[#C70A0E]/10 flex items-center justify-center text-secondary">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-[0.1em] uppercase text-zinc-500">
                        {label}
                      </div>
                      <div className="text-base font-semibold mt-0.5">{value}</div>
                      {note && (
                        <div className="text-zinc-400 text-xs mt-0.5">{note}</div>
                      )}
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex gap-4 items-start py-[1.1rem] border-t border-[#1A1A1A] first:border-t-0 transition-colors hover:text-secondary"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex gap-4 items-start py-[1.1rem] border-t border-[#1A1A1A] first:border-t-0"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-8">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[42px] h-[42px] rounded-full border border-[#1A1A1A] flex items-center justify-center text-zinc-300 transition-colors hover:border-[#C70A0E]/50 hover:text-secondary"
                >
                  <FontAwesomeIcon icon={Icon} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10">
        <span className="text-secondary md:text-xl text-lg font-bold">
          WHAT HAPPENS NEXT
        </span>
        <h2 className="md:text-4xl text-2xl font-extrabold mt-3">
          After you hit <span className="text-secondary">send</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-[18px] border border-[#1A1A1A] bg-[#0A0A0A] p-7"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-5 bg-black ${s.node}`}
              >
                {s.step}
              </div>
              <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10 md:pb-24 pb-16">
        <span className="text-secondary md:text-xl text-lg font-bold">FAQ</span>
        <h2 className="md:text-4xl text-2xl font-extrabold mt-3">
          Questions, <span className="text-secondary">answered</span>
        </h2>

        <div className="border-t border-[#1A1A1A] mt-8">
          {faqs.map((f) => (
            <div key={f.q} className="py-6 border-b border-[#1A1A1A]">
              <h4 className="text-lg font-bold mb-2">
                <span className="text-secondary mr-2">Q.</span>
                {f.q}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
