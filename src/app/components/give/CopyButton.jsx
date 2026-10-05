"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
        copied
          ? "bg-orchid text-white"
          : "bg-cream text-plum hover:bg-plum hover:text-white"
      }`}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span role="status" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}