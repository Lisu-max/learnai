import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/lib/courses";
import { getCourseContent, getChapter } from "@/content";
import { hasAccessToCourse } from "@/lib/access";
import { ChapterContent } from "@/components/chapter/chapter-content";
import { ChapterNav } from "@/components/chapter/chapter-nav";
import { InlineQuiz } from "@/components/quiz/inline-quiz";
import { getServerTranslation, getServerLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Clock, BookOpen, Video } from "lucide-react";
import type { ChapterSection } from "@/content/types";

function computeReadingTime(sections: ChapterSection[]): { totalMin: number; videoCount: number } {
  let wordCount = 0;
  let videoCount = 0;
  let videoMinutes = 0;
  for (const s of sections) {
    if (s.type === "video") {
      videoCount++;
      videoMinutes += s.videoDurationMinutes ?? 20;
      continue;
    }
    const texts = [s.content, s.label, s.prompt, s.result, ...(s.items || [])].filter(Boolean);
    wordCount += texts.join(" ").split(/\s+/).length;
  }
  const textMin = Math.max(1, Math.round(wordCount / 200));
  return { totalMin: textMin + videoMinutes, videoCount };
}

// Chapter content is static — revalidate every 24h
export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, num } = await params;
  const chapterNum = parseInt(num, 10);
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const content = await getCourseContent(slug);
  if (!content) return {};

  const chapter = getChapter(content, chapterNum);
  if (!chapter) return {};

  // Extract description from first paragraph section, truncated to 160 chars
  const firstParagraph = chapter.sections.find((s) => s.type === "paragraph");
  const description = firstParagraph?.content
    ? firstParagraph.content.slice(0, 157) + (firstParagraph.content.length > 157 ? "..." : "")
    : `${chapter.title} — Chapitre ${chapter.number} de la formation ${course.title} sur LearnAI.`;

  return {
    title: `${chapter.title} — ${course.title}`,
    description,
    openGraph: {
      title: `${chapter.title} — ${course.title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/cours/${slug}/chapitres/${num}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${chapter.title} — ${course.title} | ${siteConfig.name}`,
      description,
    },
    alternates: {
      canonical: `${siteConfig.url}/cours/${slug}/chapitres/${num}`,
    },
  };
}

export async function generateStaticParams() {
  const { courses } = await import("@/lib/courses");
  return courses.flatMap((course) =>
    Array.from({ length: course.chapters }, (_, i) => ({
      slug: course.slug,
      num: String(i + 1),
    }))
  );
}

interface Props {
  params: Promise<{ slug: string; num: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { slug, num } = await params;
  const t = await getServerTranslation();
  const locale = await getServerLocale();
  const chapterNum = parseInt(num, 10);

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const { hasAccess } = await hasAccessToCourse(slug);
  if (!hasAccess) redirect(`/cours/${slug}`);

  const content = await getCourseContent(slug, locale);
  if (!content) notFound();

  const chapter = getChapter(content, chapterNum);
  if (!chapter) notFound();

  const { totalMin, videoCount } = computeReadingTime(chapter.sections);

  const learningResourceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: chapter.title,
    description: `Chapitre ${chapter.number} de la formation ${course.title}`,
    learningResourceType: "Chapter",
    isPartOf: {
      "@type": "Course",
      name: course.title,
      url: `${siteConfig.url}/cours/${slug}`,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    timeRequired: `PT${totalMin}M`,
    position: chapter.number,
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
      {
        "@type": "ListItem",
        position: 3,
        name: chapter.title,
        item: `${siteConfig.url}/cours/${slug}/chapitres/${chapter.number}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    <div className="bg-grid">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Breadcrumb */}
        <Link
          href={`/cours/${slug}/chapitres`}
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {course.title}
        </Link>

        {/* Chapter header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-sm font-bold text-purple-400">
              {chapter.number}
            </span>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {totalMin >= 60
                  ? `${Math.floor(totalMin / 60)}h${totalMin % 60 > 0 ? ` ${totalMin % 60}min` : ""}`
                  : `${totalMin} min`}
              </span>
              {videoCount > 0 && (
                <span className="flex items-center gap-1">
                  <Video className="h-3.5 w-3.5" />
                  {videoCount} vidéo{videoCount > 1 ? "s" : ""}
                </span>
              )}
              <span className="flex items-center gap-1">
                <BookOpen className="h-3.5 w-3.5" />
                {t.chapters.chapterOf} {chapter.number}/{content.chapters.length}
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold">{chapter.title}</h1>
        </div>

        {/* Chapter content */}
        <ChapterContent
          sections={chapter.sections}
          audioSrc={`/audio/${slug}/${chapter.number}.mp3`}
        />

        {/* Quiz inline */}
        {chapter.quiz.length > 0 && (
          <InlineQuiz
            questions={chapter.quiz}
            courseSlug={slug}
            chapterNumber={chapter.number}
            totalChapters={content.chapters.length}
          />
        )}

        {/* Navigation */}
        <ChapterNav
          courseSlug={slug}
          chapterNumber={chapter.number}
          totalChapters={content.chapters.length}
          chapterTitle={chapter.title}
        />
      </div>
    </div>
    </>
  );
}
