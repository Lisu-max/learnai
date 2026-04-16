"use client";

import Link from "next/link";
import { Brain, Mail, Linkedin, Youtube, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";
import { useState } from "react";

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // placeholder — ignore errors
    } finally {
      setSubmitted(true);
      setSubmitting(false);
    }
  }

  return (
    <footer className="relative bg-background">
      <div className="section-divider" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 bg-purple-600/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        {/* Newsletter */}
        <div className="mb-10 rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-base font-semibold">Restez à la pointe de l&apos;IA</h3>
              <p className="mt-1 text-sm text-muted-foreground">Conseils, nouveautés et ressources exclusives — directement dans votre boîte mail.</p>
            </div>
            {submitted ? (
              <p className="shrink-0 text-sm font-medium text-emerald-400">Merci ! Vous êtes inscrit(e).</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex w-full max-w-sm gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="min-w-0 flex-1 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus:border-purple-500/60 focus:outline-none focus:ring-1 focus:ring-purple-500/40"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  <Send className="h-3.5 w-3.5" />
                  {submitting ? "..." : "S'inscrire"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/cours" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.nav.courses}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cgv" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.legalNotice}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t.footer.contact}</h3>
            <a
              href={`mailto:${siteConfig.emails.contact}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-purple-400"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.emails.contact}
            </a>
            <p className="mt-3 text-xs text-muted-foreground/70">
              {t.footer.responseTime}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/learnai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-blue-500/50 hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@learnai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-red-500/50 hover:text-red-400"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.copyright}</p>
          <p className="text-xs text-muted-foreground/50">
            {siteConfig.company.name} — {siteConfig.company.jurisdiction}
          </p>
          <p className="text-xs text-muted-foreground/50">
            {t.footer.securePayment}
          </p>
        </div>
      </div>
    </footer>
  );
}
