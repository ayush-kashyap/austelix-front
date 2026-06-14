"use client";

import React, { useState } from "react";
import { Send, Check } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBJECTS = [
  "General inquiry",
  "A new project",
  "Partnership",
  "Support",
  "Something else",
];

const initialState = {
  name: "",
  email: "",
  company: "",
  subject: SUBJECTS[0],
  message: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(values.email)) next.email = "Enter a valid email.";
    if (!values.message.trim()) next.message = "Tell us a little about it.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setStatus("submitting");
    // Wire this to your email provider or an API route, e.g. POST /api/contact.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setValues(initialState);
  };

  const inputBase =
    "w-full rounded-xl border bg-black py-3 px-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors";
  const ok = "border-[#1A1A1A] focus:border-[#C70A0E]/60";
  const bad = "border-[#C70A0E]";

  if (status === "success") {
    return (
      <div className="relative flex flex-col items-center justify-center text-center min-h-[420px] gap-4">
        <div className="w-14 h-14 rounded-full bg-[#C70A0E]/10 border border-[#C70A0E]/40 flex items-center justify-center text-secondary">
          <Check size={26} />
        </div>
        <h3 className="text-xl font-extrabold">Message sent</h3>
        <p className="text-zinc-400 text-sm max-w-xs">
          Thanks for reaching out. We'll get back to you within one to two
          business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-secondary hover:underline mt-1"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <h2 className="text-2xl font-extrabold mb-1">Send us a message</h2>
      <p className="text-zinc-400 text-sm mb-7">
        We'll get back to you within one to two business days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-2">
            Full name
          </label>
          <input
            value={values.name}
            onChange={update("name")}
            placeholder="Mr. XYZ"
            className={`${inputBase} ${errors.name ? bad : ok}`}
          />
          {errors.name && (
            <p className="text-secondary text-xs mt-1.5">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="xyz@company.com"
            className={`${inputBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && (
            <p className="text-secondary text-xs mt-1.5">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-2">
            Company <span className="text-zinc-600 font-normal">(optional)</span>
          </label>
          <input
            value={values.company}
            onChange={update("company")}
            placeholder="Acme Inc."
            className={`${inputBase} ${ok}`}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-2">
            I'm reaching out about
          </label>
          <select
            value={values.subject}
            onChange={update("subject")}
            className={`${inputBase} ${ok} appearance-none cursor-pointer`}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s} className="bg-black">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-semibold text-zinc-300 mb-2">
          Message
        </label>
        <textarea
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you have in mind..."
          rows={5}
          className={`${inputBase} resize-y min-h-[130px] ${
            errors.message ? bad : ok
          }`}
        />
        {errors.message && (
          <p className="text-secondary text-xs mt-1.5">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-bold red-shadow transition-shadow hover:shadow-[0_0_28px_rgba(199,10,14,1)] disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        <Send size={16} />
      </button>
    </form>
  );
}

export default ContactForm;
