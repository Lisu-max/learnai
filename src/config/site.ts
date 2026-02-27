export const siteConfig = {
  name: "LearnAI",
  description:
    "Maîtrisez l'intelligence artificielle avec nos formations premium en PDF. De débutant à expert, accélérez votre carrière avec l'IA.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/cours" },
  ],
} as const;
