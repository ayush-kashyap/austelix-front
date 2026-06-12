"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    // Wire this to your email provider or API route.
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 md:p-12 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(199,10,14,0.18), transparent 62%)",
        }}
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight">
          Stay in the <span className="text-secondary">loop</span>
        </h2>
        <p className="text-zinc-400 md:text-base text-sm mt-3">
          Product updates, engineering notes, and the occasional behind-the-scenes
          story. No noise, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="mt-7 inline-flex items-center gap-2 text-secondary font-semibold">
            <Check size={18} /> You are subscribed. Welcome aboard.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="you@company.com"
              aria-label="Email address"
              className={`flex-1 rounded-full border bg-black py-3 px-5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors ${
                status === "error"
                  ? "border-[#C70A0E]"
                  : "border-[#1A1A1A] focus:border-[#C70A0E]/60"
              }`}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold red-shadow transition-shadow hover:shadow-[0_0_25px_rgba(199,10,14,1)]"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-secondary text-sm mt-3">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}

export default NewsletterCTA;
