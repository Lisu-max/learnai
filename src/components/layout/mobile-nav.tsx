"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Brain, LogIn } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-2 h-px bg-border/50" />

          <Link
            href="/connexion"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogIn className="h-5 w-5" />
            Se connecter
          </Link>
          <Link
            href="/inscription"
            onClick={() => setOpen(false)}
            className="btn-gradient mt-2 rounded-lg px-4 py-3 text-center font-medium text-white"
          >
            S&apos;inscrire
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
