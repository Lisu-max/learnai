import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Formations IA",
  description:
    "Des formations interactives complètes pour maîtriser l'intelligence artificielle, du débutant à l'expert.",
  openGraph: {
    title: "Nos Formations IA | LearnAI",
    description:
      "Des formations interactives complètes pour maîtriser l'intelligence artificielle, du débutant à l'expert.",
  },
};

export default function CoursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
