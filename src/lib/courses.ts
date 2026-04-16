export interface CourseTranslation {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  tier: "free" | "premium";
  duration: string;
  chapters: number;
  features: string[];
  image: string;
  color: string;
  en?: CourseTranslation;
}

export const courses: Course[] = [
  {
    slug: "ia-de-a-a-z",
    title: "L'IA de A à Z",
    description:
      "Découvrez les fondamentaux de l'intelligence artificielle. Le guide parfait pour débuter et comprendre les concepts clés de l'IA en 2026.",
    longDescription:
      "Apprenez les concepts fondamentaux du machine learning, du deep learning, du NLP, de la vision par ordinateur, des modèles de langage (GPT-5.4, Claude 4.6, Gemini 3.1), de l'IA générative, des agents IA autonomes, et de l'éthique. Chaque chapitre inclut des vidéos, des points clés et un quiz interactif.",
    level: "Débutant",
    tier: "free",
    duration: "2h",
    chapters: 12,
    features: [
      "12 chapitres interactifs avec vidéos",
      "Quiz à chaque chapitre pour valider vos acquis",
      "Machine Learning, Deep Learning, réseaux de neurones",
      "GPT-5.4, Claude 4.6, Gemini 3.1 décryptés",
      "Agents IA, éthique et avenir de l'IA",
    ],
    image: "/images/courses/ia-de-a-a-z.jpg",
    color: "from-blue-500 to-cyan-500",
    en: {
      title: "AI from A to Z",
      description:
        "Discover the fundamentals of artificial intelligence. The perfect guide to getting started and understanding the key AI concepts in 2026.",
      longDescription:
        "Learn the core concepts of machine learning, deep learning, NLP, computer vision, language models (GPT-5.4, Claude 4.6, Gemini 3.1), generative AI, autonomous AI agents, and ethics. Each chapter includes videos, key points and an interactive quiz.",
      features: [
        "12 interactive chapters with videos",
        "Quiz after each chapter to validate your knowledge",
        "Machine Learning, Deep Learning, neural networks",
        "GPT-5.4, Claude 4.6, Gemini 3.1 explained",
        "AI agents, ethics and the future of AI",
      ],
    },
  },
  {
    slug: "maitriser-outils-ia",
    title: "Maîtriser les Outils IA",
    description:
      "Guide pratique de tous les outils IA majeurs : ChatGPT, Claude, Gemini, Midjourney, Sora, Cursor et bien plus.",
    longDescription:
      "Tutoriels complets pour chaque outil : ChatGPT (GPT-5.4), Claude 4.6, Gemini 3.1, Midjourney V7/V8, DALL-E 3, Stable Diffusion, Sora 2, ElevenLabs, Suno, GitHub Copilot, Cursor, NotebookLM, Perplexity, Make/Zapier et les API d'IA. Construisez votre workflow IA personnalisé.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h",
    chapters: 18,
    features: [
      "18 outils IA décortiqués en détail",
      "ChatGPT GPT-5.4, Claude 4.6, Gemini 3.1",
      "Midjourney V7/V8, Sora 2, ElevenLabs, Suno",
      "Cursor, Copilot, Claude Code pour le code",
      "Workflow IA personnalisé étape par étape",
    ],
    image: "/images/courses/maitriser-outils-ia.jpg",
    color: "from-purple-500 to-pink-500",
    en: {
      title: "Mastering AI Tools",
      description:
        "Practical guide to all major AI tools: ChatGPT, Claude, Gemini, Midjourney, Sora, Cursor and much more.",
      longDescription:
        "Complete tutorials for each tool: ChatGPT (GPT-5.4), Claude 4.6, Gemini 3.1, Midjourney V7/V8, DALL-E 3, Stable Diffusion, Sora 2, ElevenLabs, Suno, GitHub Copilot, Cursor, NotebookLM, Perplexity, Make/Zapier and AI APIs. Build your personalized AI workflow.",
      features: [
        "18 AI tools covered in depth",
        "ChatGPT GPT-5.4, Claude 4.6, Gemini 3.1",
        "Midjourney V7/V8, Sora 2, ElevenLabs, Suno",
        "Cursor, Copilot, Claude Code for coding",
        "Step-by-step personalized AI workflow",
      ],
    },
  },
  {
    slug: "prompt-engineering-pro",
    title: "Prompt Engineering Pro",
    description:
      "Maîtrisez l'art du prompt engineering avec 20 techniques avancées. La compétence la plus recherchée de 2026.",
    longDescription:
      "Tokenisation, zero-shot, few-shot, Chain-of-Thought, Tree of Thought, framework CRISPE, personas, system prompts, meta-prompting, prompt chaining. Chapitres dédiés au code, à l'écriture créative, aux images, à la vidéo et à la musique. 3 études de cas réels avec ROI mesuré.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h",
    chapters: 20,
    features: [
      "20 techniques avancées de prompting",
      "Prompts pour code, images, vidéo, musique",
      "System prompts et agents IA",
      "3 études de cas réels avec ROI",
      "Réduire les hallucinations",
    ],
    image: "/images/courses/prompt-engineering-pro.jpg",
    color: "from-violet-500 to-purple-500",
    en: {
      title: "Prompt Engineering Pro",
      description:
        "Master the art of prompt engineering with 20 advanced techniques. The most sought-after skill of 2026.",
      longDescription:
        "Tokenization, zero-shot, few-shot, Chain-of-Thought, Tree of Thought, CRISPE framework, personas, system prompts, meta-prompting, prompt chaining. Dedicated chapters for code, creative writing, images, video and music. 3 real case studies with measured ROI.",
      features: [
        "20 advanced prompting techniques",
        "Prompts for code, images, video, music",
        "System prompts and AI agents",
        "3 real case studies with ROI",
        "Reduce hallucinations",
      ],
    },
  },
  {
    slug: "ia-pour-votre-business",
    title: "L'IA pour votre Business",
    description:
      "Stratégies concrètes pour intégrer l'IA dans votre entreprise. ROI, automatisation, marketing, ventes — avec un plan d'action 90 jours.",
    longDescription:
      "Audit IA, calcul du ROI, service client (chatbots 70-85%), marketing digital, personnalisation, ventes/CRM, opérations, RH, finance, supply chain, e-commerce. 3 études de cas avec métriques réelles, plan d'action 90 jours, conformité RGPD/AI Act.",
    level: "Avancé",
    tier: "premium",
    duration: "4h",
    chapters: 25,
    features: [
      "Audit IA et calcul de ROI",
      "Marketing, ventes, RH, finance avec l'IA",
      "3 études de cas (CA +35%, coûts -60%)",
      "Plan d'action 90 jours",
      "RGPD, AI Act — conformité juridique",
    ],
    image: "/images/courses/ia-pour-votre-business.jpg",
    color: "from-amber-500 to-orange-500",
    en: {
      title: "AI for your Business",
      description:
        "Concrete strategies to integrate AI into your company. ROI, automation, marketing, sales — with a 90-day action plan.",
      longDescription:
        "AI audit, ROI calculation, customer service (chatbots 70-85%), digital marketing, personalization, sales/CRM, operations, HR, finance, supply chain, e-commerce. 3 case studies with real metrics, 90-day action plan, GDPR/AI Act compliance.",
      features: [
        "AI audit and ROI calculation",
        "Marketing, sales, HR, finance with AI",
        "3 case studies (revenue +35%, costs -60%)",
        "90-day action plan",
        "GDPR, AI Act — legal compliance",
      ],
    },
  },
  {
    slug: "ia-au-quotidien",
    title: "L'IA au Quotidien",
    description:
      "Guide pratique pour utiliser l'IA dans votre vie de tous les jours. Productivité, emails, recherche, organisation — devenez efficace avec l'IA.",
    longDescription:
      "Apprenez à utiliser l'IA concrètement au quotidien : rédiger des emails, rechercher efficacement, résumer des documents, traduire, organiser votre journée, automatiser les tâches répétitives, booster votre créativité et construire votre workflow IA personnalisé.",
    level: "Débutant",
    tier: "free",
    duration: "1h30",
    chapters: 10,
    features: [
      "10 chapitres pratiques",
      "Emails, recherche, organisation",
      "Automatisation des tâches",
      "Workflow IA personnalisé",
      "Quiz interactifs",
    ],
    image: "/images/courses/ia-au-quotidien.jpg",
    color: "from-amber-500 to-yellow-500",
  },
  {
    slug: "ethique-ia",
    title: "Éthique et Impact de l'IA",
    description:
      "Comprendre les enjeux éthiques de l'IA : biais, emploi, vie privée, régulation. Un cours essentiel pour utiliser l'IA de manière responsable.",
    longDescription:
      "Explorez les enjeux éthiques fondamentaux de l'intelligence artificielle : biais algorithmiques, impact sur l'emploi, vie privée et surveillance, deepfakes et désinformation, AI Act et RGPD, responsabilité et transparence, et le futur de l'IA responsable.",
    level: "Débutant",
    tier: "free",
    duration: "1h15",
    chapters: 8,
    features: [
      "8 chapitres de réflexion",
      "Biais, emploi, vie privée",
      "AI Act et RGPD expliqués",
      "Deepfakes et désinformation",
      "Quiz de compréhension",
    ],
    image: "/images/courses/ethique-ia.jpg",
    color: "from-rose-500 to-red-500",
  },
  {
    slug: "creer-avec-ia",
    title: "Créer avec l'IA",
    description:
      "Images, vidéo, musique, écriture, design, logos, jeux vidéo — le guide complet du créateur digital avec l'IA.",
    longDescription:
      "Midjourney V7/V8, DALL-E 3, Stable Diffusion, retouche photo IA, logos, UI/UX (Galileo AI, v0, Bolt), Sora 2, Runway Gen-3, Suno, Udio, ElevenLabs, écriture créative, réseaux sociaux, podcasting, jeux vidéo, mode, architecture. Monétisation et droits d'auteur.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h30",
    chapters: 22,
    features: [
      "Midjourney V7/V8, DALL-E 3, Stable Diffusion",
      "Sora 2, Runway Gen-3 pour la vidéo",
      "Suno, Udio, ElevenLabs pour l'audio",
      "Design UI/UX, logos, mode, architecture",
      "Monétisation et droits d'auteur",
    ],
    image: "/images/courses/creer-avec-ia.jpg",
    color: "from-emerald-500 to-teal-500",
    en: {
      title: "Create with AI",
      description:
        "Images, video, music, writing, design, logos, video games — the complete digital creator's guide with AI.",
      longDescription:
        "Midjourney V7/V8, DALL-E 3, Stable Diffusion, AI photo editing, logos, UI/UX (Galileo AI, v0, Bolt), Sora 2, Runway Gen-3, Suno, Udio, ElevenLabs, creative writing, social media, podcasting, video games, fashion, architecture. Monetization and copyright.",
      features: [
        "Midjourney V7/V8, DALL-E 3, Stable Diffusion",
        "Sora 2, Runway Gen-3 for video",
        "Suno, Udio, ElevenLabs for audio",
        "UI/UX design, logos, fashion, architecture",
        "Monetization and copyright",
      ],
    },
  },
  {
    slug: "coder-avec-ia",
    title: "Coder avec l'IA",
    description:
      "Cursor, Copilot, Claude Code, Bolt, v0 — maîtrisez tous les outils de développement assisté par l'IA. Du débutant au workflow pro.",
    longDescription:
      "Maîtrisez le développement assisté par l'IA de A à Z : GitHub Copilot, Cursor, Claude Code, Bolt, v0, debugging, code review, tests automatisés, refactoring, frontend React/Next.js, backend et APIs, bases de données, DevOps CI/CD, sécurité, documentation, projets full-stack, travail en équipe, et construction de votre workflow personnalisé.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h30",
    chapters: 18,
    features: [
      "18 chapitres techniques",
      "Cursor, Copilot, Claude Code",
      "Debugging et testing IA",
      "Full-stack avec l'IA",
      "CI/CD et DevOps IA",
    ],
    image: "/images/courses/coder-avec-ia.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "ia-freelances",
    title: "L'IA pour les Freelances",
    description:
      "Boostez votre activité freelance avec l'IA. Prospection, livrables, facturation, personal branding — gagnez en productivité et en revenus.",
    longDescription:
      "Transformez votre activité freelance avec l'IA : prospection automatisée, propositions commerciales générées, gestion de projet, livrables accélérés, facturation automatisée, personal branding, stratégie tarifaire, communication client, et construction d'un business scalable.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "2h",
    chapters: 10,
    features: [
      "10 chapitres actionnables",
      "Prospection et proposals IA",
      "Livrables accélérés",
      "Facturation automatisée",
      "Personal branding",
    ],
    image: "/images/courses/ia-freelances.jpg",
    color: "from-indigo-500 to-violet-500",
  },
  {
    slug: "automatiser-avec-ia",
    title: "Automatiser avec l'IA",
    description:
      "Maîtrisez Make, Zapier, n8n et les agents IA pour automatiser vos tâches. Du no-code aux workflows complexes, gagnez des heures chaque semaine.",
    longDescription:
      "Apprenez à automatiser vos tâches avec Make, Zapier et n8n. Connectez les APIs, créez des agents IA autonomes, automatisez vos emails, votre marketing de contenu, votre veille et votre comptabilité. Construisez des workflows multi-étapes complexes avec monitoring et sécurité.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h",
    chapters: 15,
    features: [
      "15 chapitres pratiques",
      "Make, Zapier, n8n maîtrisés",
      "Agents IA autonomes",
      "APIs et webhooks",
      "Workflows multi-étapes",
    ],
    image: "/images/courses/automatiser-avec-ia.jpg",
    color: "from-cyan-500 to-blue-500",
  },
  {
    slug: "ia-marketing-digital",
    title: "L'IA pour le Marketing Digital",
    description:
      "SEO, content marketing, réseaux sociaux, publicité — boostez votre marketing avec l'IA. Stratégies concrètes et outils actionnables.",
    longDescription:
      "Maîtrisez le SEO IA, le content marketing augmenté, les réseaux sociaux, l'email marketing intelligent, la publicité Google et Meta, les landing pages, l'analytics, le personal branding, le video marketing et la stratégie marketing complète avec l'IA.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "2h30",
    chapters: 12,
    features: [
      "12 chapitres actionnables",
      "SEO et content marketing IA",
      "Publicité Google et Meta",
      "Email marketing intelligent",
      "Analytics et optimisation",
    ],
    image: "/images/courses/ia-marketing-digital.jpg",
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "data-science-ia",
    title: "Data Science avec l'IA",
    description:
      "Python, pandas, machine learning, visualisation — apprenez la data science assistée par l'IA. Du no-code au déploiement.",
    longDescription:
      "Maîtrisez la data science de A à Z avec l'IA comme assistant : Python et NumPy, Pandas et analyse de données, visualisation avec Matplotlib et Seaborn, machine learning (régression, classification, clustering), NLP, vision par ordinateur, AutoML, feature engineering, déploiement de modèles, MLOps, éthique des données, et projet complet de data science.",
    level: "Avancé",
    tier: "premium",
    duration: "3h",
    chapters: 15,
    features: [
      "15 chapitres techniques",
      "Python et pandas",
      "Machine Learning pratique",
      "AutoML et no-code",
      "Projet complet",
    ],
    image: "/images/courses/data-science-ia.jpg",
    color: "from-sky-500 to-blue-500",
  },
  {
    slug: "ia-ressources-humaines",
    title: "L'IA pour les RH",
    description:
      "Recrutement, onboarding, formation, people analytics — transformez vos processus RH avec l'IA.",
    longDescription:
      "Transformez vos ressources humaines avec l'IA : recrutement augmenté, screening et évaluation des candidats, onboarding automatisé, formation personnalisée, engagement et rétention des talents, administration automatisée, people analytics, droit du travail et IA, et stratégie RH augmentée.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "2h",
    chapters: 10,
    features: [
      "10 chapitres pratiques",
      "Recrutement augmenté",
      "Onboarding automatisé",
      "People analytics",
      "Droit du travail et IA",
    ],
    image: "/images/courses/ia-ressources-humaines.jpg",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    slug: "ia-education",
    title: "L'IA pour l'Éducation",
    description:
      "Enseignants, étudiants, formateurs — exploitez l'IA pour enseigner, apprendre et évaluer plus efficacement.",
    longDescription:
      "Exploitez l'IA dans l'éducation : outils IA pour enseignants, création de cours assistée, évaluation et correction automatisées, personnalisation de l'apprentissage, IA pour les étudiants, recherche académique, contenu pédagogique, gamification, accessibilité et inclusion, détection d'usage IA, et l'école du futur.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "2h30",
    chapters: 12,
    features: [
      "12 chapitres pédagogiques",
      "Outils IA pour enseignants",
      "Évaluation automatisée",
      "Personnalisation de l'apprentissage",
      "Détection d'usage IA",
    ],
    image: "/images/courses/ia-education.jpg",
    color: "from-lime-500 to-green-500",
  },
];

export const FREE_SLUGS = ["ia-de-a-a-z", "ia-au-quotidien", "ethique-ia"];
export const PREMIUM_SLUGS = ["maitriser-outils-ia", "prompt-engineering-pro", "ia-pour-votre-business", "creer-avec-ia", "coder-avec-ia", "ia-freelances", "automatiser-avec-ia", "ia-marketing-digital", "data-science-ia", "ia-ressources-humaines", "ia-education"];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function isFreeCourse(slug: string): boolean {
  return FREE_SLUGS.includes(slug);
}

export function getCourseLocalized(course: Course, locale: string): Course {
  if (locale === "en" && course.en) {
    return { ...course, ...course.en };
  }
  return course;
}
