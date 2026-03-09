"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, Brain, LogIn, User } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface MobileNavProps {
  user: SupabaseUser | null;
  loading: boolean;
}

export function MobileNav({ user, loading }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const initials = user
    ? `${(user.user_metadata?.first_name as string || "").charAt(0)}${(user.user_metadata?.last_name as string || "").charAt(0)}`.toUpperCase()
    : "";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <button className="p-2 text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 border-border/50 bg-background">
        <div className="flex items-center gap-2 pb-8 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/cours"
            onClick={() => setOpen(false)}
            className="text-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.courses}
          </Link>

          <div className="my-2 h-px bg-border/50" />

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>

          {!loading && (
            <>
              {user ? (
                <Link
                  href="/compte"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {initials ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xs font-bold text-white">
                      {initials}
                    </div>
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                  {t.account.title}
                </Link>
              ) : (
                <>
                  <Link
                    href="/connexion"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogIn className="h-5 w-5" />
                    {t.nav.login}
                  </Link>
                  <Link
                    href="/inscription"
                    onClick={() => setOpen(false)}
                    className="btn-gradient mt-2 rounded-lg px-4 py-3 text-center font-medium text-white"
                  >
                    {t.nav.signup}
                  </Link>
                </>
              )}
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
