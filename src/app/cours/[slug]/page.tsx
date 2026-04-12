import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/lib/courses";
import { CourseDetail } from "@/components/courses/course-detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} | LearnAI`,
      description: course.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | LearnAI`,
      description: course.description,
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
    provider: {
      "@type": "Organization",
      name: "LearnAI",
      url: "https://learnai-csa3.vercel.app",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetail slug={slug} />
    </>
  );
}
