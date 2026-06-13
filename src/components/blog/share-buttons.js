"use client";

import React, { useState } from "react";
import {  Link2, Check } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on X",
      icon: faXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "Share on LinkedIn",
      icon: faLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on Facebook",
      icon: faFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-zinc-400">Share</span>
      <div className="flex items-center gap-2">
        {links.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[#1A1A1A] text-zinc-300 transition-colors hover:border-[#C70A0E]/50 hover:text-secondary"
          >
            <FontAwesomeIcon icon={Icon} height={16} />
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-[#1A1A1A] text-zinc-300 transition-colors hover:border-[#C70A0E]/50 hover:text-secondary"
        >
          {copied ? <Check size={16} className="text-secondary" /> : <Link2 size={16} />}
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
