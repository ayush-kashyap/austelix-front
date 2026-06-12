import React from "react";
import Image from "next/image";
import { slugify } from "@/lib/blog";

function Paragraph({ value }) {
  return (
    <p className="text-zinc-300 md:text-[1.05rem] text-base leading-[1.85] mb-6">
      {value}
    </p>
  );
}

function Heading({ value }) {
  return (
    <h2
      id={slugify(value)}
      className="scroll-mt-28 md:text-2xl text-xl font-extrabold tracking-tight mt-12 mb-5"
    >
      {value}
    </h2>
  );
}

function BlogImage({ src, alt, caption }) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#1A1A1A]">
        <Image src={src} alt={alt || ""} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-zinc-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Quote({ value, cite }) {
  return (
    <blockquote className="my-10 border-l-4 border-secondary pl-6 py-1">
      <p className="md:text-xl text-lg font-medium leading-relaxed text-white">
        “{value}”
      </p>
      {cite && <cite className="block not-italic text-sm text-secondary mt-3">— {cite}</cite>}
    </blockquote>
  );
}

function BlogList({ style, items }) {
  const Tag = style === "ordered" ? "ol" : "ul";
  return (
    <Tag
      className={`my-6 space-y-3 pl-1 ${
        style === "ordered" ? "list-decimal list-inside" : ""
      }`}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={`text-zinc-300 leading-relaxed ${
            style === "ordered" ? "" : "relative pl-6"
          }`}
        >
          {style !== "ordered" && (
            <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-secondary" />
          )}
          {item}
        </li>
      ))}
    </Tag>
  );
}

function CodeBlock({ language, value }) {
  return (
    <div className="my-8 rounded-2xl border border-[#1A1A1A] bg-[#080808] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1A1A1A]">
        <span className="text-xs font-mono text-zinc-500">{language || "code"}</span>
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1f1f1f]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1f1f1f]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#C70A0E]/50" />
        </span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono text-zinc-200 whitespace-pre">{value}</code>
      </pre>
    </div>
  );
}

function ContentRenderer({ content }) {
  return (
    <div className="max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <Paragraph key={index} value={block.value} />;
          case "heading":
            return <Heading key={index} value={block.value} />;
          case "image":
            return (
              <BlogImage
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "quote":
            return <Quote key={index} value={block.value} cite={block.cite} />;
          case "list":
            return <BlogList key={index} style={block.style} items={block.items} />;
          case "code":
            return (
              <CodeBlock key={index} language={block.language} value={block.value} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default ContentRenderer;
