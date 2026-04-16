"use client";

import Link from "next/link";
import { Brain, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-background">
      <div className="section-divider" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 bg-purple-600/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
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
