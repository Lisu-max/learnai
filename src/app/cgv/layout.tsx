import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: `Consultez les Conditions Générales de Vente de ${siteConfig.name}. Paiement sécurisé via Stripe, accès à vie, mises à jour gratuites et droit de rétractation de 14 jours.`,
  openGraph: {
    title: `Conditions Générales de Vente | ${siteConfig.name}`,
    description: `Consultez les Conditions Générales de Vente de ${siteConfig.name}. Paiement sécurisé via Stripe, accès à vie, mises à jour gratuites et droit de rétractation de 14 jours.`,
    url: `${siteConfig.url}/cgv`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/cgv`,
  },
};

export default function CGVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
