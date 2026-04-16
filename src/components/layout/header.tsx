"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { Brain, LogIn, User } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const initials = user
    ? `${(user.user_metadata?.first_name as string || "").charAt(0)}${(user.user_metadata?.last_name as string || "").charAt(0)}`.toUpperCase()
    : "";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-sm transition-colors hover:text-foreground ${pathname === "/" ? "font-medium text-foreground underline underline-offset-4 decoration-purple-400" : "text-muted-foreground"}`}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/cours"
            aria-current={pathname === "/cours" || pathname.startsWith("/cours/") ? "page" : undefined}
            className={`text-sm transition-colors hover:text-foreground ${pathname === "/cours" || pathname.startsWith("/cours/") ? "font-medium text-foreground underline underline-offset-4 decoration-purple-400" : "text-muted-foreground"}`}
          >
            {t.nav.courses}
          </Link>

          <LanguageSwitcher />

          {!loading && (
            <>
              {user ? (
                <Link
                  href="/compte"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {initials ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xs font-bold text-white">
                      {initials}
                    </div>
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  {t.account.title}
                </Link>
              ) : (
                <>
                  <Link
                    href="/connexion"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogIn className="h-4 w-4" />
                    {t.nav.login}
                  </Link>
                  <Link
                    href="/inscription"
                    className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium text-white"
                  >
                    {t.nav.signup}
                  </Link>
                </>
              )}
            </>
          )}
        </nav>

        <MobileNav user={user} loading={loading} />
      </div>
      <div className="section-divider" />
    </header>
  );
}
