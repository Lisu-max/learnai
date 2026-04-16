import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales de ${siteConfig.name} — éditeur, hébergeur, propriété intellectuelle et informations légales obligatoires.`,
  openGraph: {
    title: `Mentions Légales | ${siteConfig.name}`,
    description: `Mentions légales de ${siteConfig.name} — éditeur, hébergeur, propriété intellectuelle et informations légales obligatoires.`,
    url: `${siteConfig.url}/mentions-legales`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/mentions-legales`,
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
