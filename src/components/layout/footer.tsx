import Link from "next/link";
import { Brain } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative bg-background">
      <div className="section-divider" />
      {/* Subtle glow at top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 bg-purple-600/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Formations premium en intelligence artificielle. Apprenez à votre
              rythme avec nos guides PDF complets.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Légal</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Conditions générales de vente
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Politique de confidentialité
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Mentions légales
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
