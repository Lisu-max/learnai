"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";
import { Brain, LogIn, LogOut, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { logout } from "@/app/(auth)/actions";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export function Header() {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                href="/compte"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <User className="h-4 w-4" />
                Mon compte
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  Déconnexion
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/connexion"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LogIn className="h-4 w-4" />
                Se connecter
              </Link>
              <Link
                href="/inscription"
                className="btn-gradient rounded-lg px-4 py-2 text-sm font-medium text-white"
              >
                S&apos;inscrire
              </Link>
            </>
          )}
        </nav>

        <MobileNav user={user} />
      </div>
      <div className="section-divider" />
    </header>
  );
}
