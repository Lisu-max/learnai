import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Découvrez comment ${siteConfig.name} protège vos données personnelles conformément au RGPD. Collecte, utilisation, droits d'accès et suppression de vos données.`,
  openGraph: {
    title: `Politique de Confidentialité | ${siteConfig.name}`,
    description: `Découvrez comment ${siteConfig.name} protège vos données personnelles conformément au RGPD. Collecte, utilisation, droits d'accès et suppression de vos données.`,
    url: `${siteConfig.url}/politique-confidentialite`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/politique-confidentialite`,
  },
};

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
