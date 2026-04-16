import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ValueProposition } from "@/components/home/value-proposition";
import { CoursePreview } from "@/components/home/course-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTABanner } from "@/components/home/cta-banner";
import { FAQ } from "@/components/home/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Formations IA Premium — De débutant à expert",
  description:
    "Maîtrisez l'intelligence artificielle avec nos formations en ligne. Cours interactifs, quiz, certificats. ChatGPT, Claude, Midjourney, Prompt Engineering et plus.",
  openGraph: {
    title: `${siteConfig.name} — Formations IA Premium`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Formations IA Premium`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: "Formations premium en intelligence artificielle",
    logo: `${siteConfig.url}/opengraph-image`,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/cours?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <Hero />
      <ValueProposition />
      <CoursePreview />
      <Testimonials />
      <CTABanner />
      <FAQ />
    </>
  );
}
