import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "S'inscrire",
  description: `Créez votre compte ${siteConfig.name} et commencez à apprendre l'intelligence artificielle gratuitement.`,
  openGraph: {
    title: `S'inscrire | ${siteConfig.name}`,
    description: `Créez votre compte ${siteConfig.name} et commencez à apprendre l'intelligence artificielle gratuitement.`,
    url: `${siteConfig.url}/inscription`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/inscription`,
  },
};

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
