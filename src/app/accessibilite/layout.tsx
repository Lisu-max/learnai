import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: `Déclaration d'accessibilité de ${siteConfig.name}. Notre engagement pour rendre nos formations IA accessibles à tous.`,
  openGraph: {
    title: `Accessibilité | ${siteConfig.name}`,
    description: `Déclaration d'accessibilité de ${siteConfig.name}. Notre engagement pour rendre nos formations IA accessibles à tous.`,
    url: `${siteConfig.url}/accessibilite`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/accessibilite`,
  },
};

export default function AccessibiliteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
