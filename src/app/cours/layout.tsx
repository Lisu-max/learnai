import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Nos Formations IA",
  description:
    "Découvrez nos 17 formations IA interactives : ChatGPT, Prompt Engineering, Machine Learning et automatisation. Accès immédiat, mises à jour gratuites, du débutant à l'expert.",
  openGraph: {
    title: `Nos Formations IA | ${siteConfig.name}`,
    description:
      "Découvrez nos 17 formations IA interactives : ChatGPT, Prompt Engineering, Machine Learning et automatisation. Accès immédiat, mises à jour gratuites, du débutant à l'expert.",
    url: `${siteConfig.url}/cours`,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: `${siteConfig.url}/cours`,
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Formations IA — LearnAI",
  description:
    "Découvrez nos 17 formations IA interactives : ChatGPT, Prompt Engineering, Machine Learning et automatisation.",
  url: `${siteConfig.url}/cours`,
  numberOfItems: courses.length,
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.description,
      url: `${siteConfig.url}/cours/${course.slug}`,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      educationalLevel: course.level,
      timeRequired: `PT${course.duration.replace("h", "H").replace("min", "M")}`,
      isAccessibleForFree: course.tier === "free",
      ...(course.tier === "premium" && {
        offers: {
          "@type": "Offer",
          price: "9.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      }),
    },
  })),
};

export default function CoursLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}
