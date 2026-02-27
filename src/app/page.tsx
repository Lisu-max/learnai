import { Hero } from "@/components/home/hero";
import { ValueProposition } from "@/components/home/value-proposition";
import { CoursePreview } from "@/components/home/course-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <CoursePreview />
      <Testimonials />
      <FAQ />
    </>
  );
}
