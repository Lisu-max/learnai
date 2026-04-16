export const siteConfig = {
  name: "LearnAI",
  description:
    "Maîtrisez l'intelligence artificielle avec nos formations premium en ligne. De débutant à expert, accélérez votre carrière avec l'IA.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://learn-ai.fr",
  company: {
    name: "Eterna Inc.",
    address: "251 Little Falls Drive, Wilmington, DE 19808, USA",
    jurisdiction: "Delaware, USA",
  },
  emails: {
    contact: "contact@learn-ai.fr",
    support: "support@learn-ai.fr",
    legal: "legal@learn-ai.fr",
  },
} as const;
