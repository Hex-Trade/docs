"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function PageActions({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const markdownPath = slug === "index" ? "/api/markdown" : `/api/markdown/${slug}`;
  const pageUrl = slug === "index" ? site.url : `${site.url}/${slug}`;
  const prompt = `Read ${pageUrl} and help me understand this Hextrade documentation page. Answer questions using only this page unless I ask otherwise.`;

  async function copyMarkdown() {
    const response = await fetch(markdownPath);
    const text = await response.text();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mt-8 space-y-1.5">
      <button
        type="button"
        onClick={copyMarkdown}
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy as Markdown"}
      </button>
      <a
        href={`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
      >
        <ExternalLink size={14} />
        Open in ChatGPT
      </a>
      <a
        href={`https://claude.ai/new?q=${encodeURIComponent(prompt)}`}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
      >
        <ExternalLink size={14} />
        Open in Claude
      </a>
    </div>
  );
}
