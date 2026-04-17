import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/lib/courses";
import { CourseDetail } from "@/components/courses/course-detail";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const pageUrl = `https://www.learn-ai.fr/cours/${slug}`;
  const fullTitle = `${course.title} — Formation IA Interactive | LearnAI`;
  // Build a richer description capped at ~160 chars
  const baseDesc = course.description;
  const enrichedDesc = baseDesc.length < 130
    ? `${baseDesc} Accédez à des chapitres interactifs, quiz et vidéos pour maîtriser ce sujet en profondeur.`
    : baseDesc;
  const metaDescription = enrichedDesc.slice(0, 160);

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: pageUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
    },
  };
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${siteConfig.url}/cours/${slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(course.tier === "premium"
      ? {
          offers: {
            "@type": "Offer",
            price: "9.99",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }
      : { isAccessibleForFree: true }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Formations",
        item: `${siteConfig.url}/cours`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: course.title,
        item: `${siteConfig.url}/cours/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CourseDetail slug={slug} />
    </>
  );
}
