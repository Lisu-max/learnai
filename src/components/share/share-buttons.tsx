"use client";

import { useState } from "react";
import { Linkedin, Twitter, Link, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  text: string;
}

export function ShareButtons({ url, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  function shareLinkedIn() {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
  }

  function shareTwitter() {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=400");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={shareLinkedIn}
        className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
        aria-label="Partager sur LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </button>
      <button
        onClick={shareTwitter}
        className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition-colors"
        aria-label="Partager sur X"
      >
        <Twitter className="h-4 w-4" />
      </button>
      <button
        onClick={copyLink}
        className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 transition-colors"
        aria-label="Copier le lien"
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Link className="h-4 w-4" />}
      </button>
    </div>
  );
}
