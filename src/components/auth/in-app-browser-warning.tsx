"use client";

import { AlertTriangle, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useInAppBrowser, type InAppBrowser } from "@/hooks/useInAppBrowser";
import { useTranslation } from "@/lib/i18n/context";

const BROWSER_NAMES: Record<NonNullable<InAppBrowser>, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  messenger: "Messenger",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  tiktok: "TikTok",
  snapchat: "Snapchat",
  wechat: "WeChat",
  line: "LINE",
  "android-webview": "l'application",
  other: "cette application",
};

export function InAppBrowserWarning() {
  const { browser, isInApp } = useInAppBrowser();
  const { locale } = useTranslation();
  const [copied, setCopied] = useState(false);

  if (!isInApp || !browser) return null;

  const appName = BROWSER_NAMES[browser];
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const content = locale === "fr"
    ? {
        title: `Google Connexion ne fonctionne pas dans ${appName}`,
        body: `Pour te connecter avec Google, ouvre ce site dans Safari ou Chrome. Appuie sur les ⋯ en haut à droite puis « Ouvrir dans le navigateur », ou copie le lien ci-dessous.`,
        copyBtn: "Copier le lien",
        copied: "Lien copié !",
        altLogin: "Tu peux aussi te connecter par email ci-dessous (toujours fonctionnel).",
      }
    : {
        title: `Google Sign-In doesn't work inside ${appName}`,
        body: `To sign in with Google, open this site in Safari or Chrome. Tap the ⋯ menu at the top right then "Open in browser", or copy the link below.`,
        copyBtn: "Copy link",
        copied: "Link copied!",
        altLogin: "You can also sign in with email below (always works).",
      };

  return (
    <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
        <div className="flex-1 space-y-2">
          <p className="font-semibold text-amber-200">{content.title}</p>
          <p className="text-amber-100/80">{content.body}</p>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-md border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-200 transition-colors hover:bg-amber-500/20"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? content.copied : content.copyBtn}
          </button>
          <p className="pt-1 text-xs text-amber-100/60">{content.altLogin}</p>
        </div>
      </div>
    </div>
  );
}
