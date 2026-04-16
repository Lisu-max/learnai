import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Se connecter",
  description: `Connectez-vous à votre compte ${siteConfig.name} pour accéder à vos formations en intelligence artificielle.`,
  openGraph: {
    title: `Se connecter | ${siteConfig.name}`,
    description: `Connectez-vous à votre compte ${siteConfig.name} pour accéder à vos formations en intelligence artificielle.`,
    url: `${siteConfig.url}/connexion`,
  },
  alternates: {
    canonical: `${siteConfig.url}/connexion`,
  },
};

export default function ConnexionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
