import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-pour-votre-business",
  chapters: [
    {
      number: 1,
      title: "L'IA comme Levier de Croissance Business",
      description: "Comment l'IA transforme les entreprises et où commencer pour un ROI maximal.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA : de la tendance au levier stratégique" },
        { type: "paragraph", content: "En 2026, les entreprises qui n'utilisent pas l'IA perdent du terrain face à celles qui l'ont intégrée dans leurs processus. L'IA n'est plus un avantage compétitif optionnel — c'est une nécessité opérationnelle. Les PME et TPE qui adoptent l'IA rapportent en moyenne 30 à 40% de gains de productivité sur les tâches administratives et créatives." },
        { type: "paragraph", content: "La bonne nouvelle : vous n'avez pas besoin d'investir des millions. Les outils IA modernes sont accessibles à partir de quelques dizaines d'euros par mois et peuvent transformer radicalement votre façon de travailler en quelques semaines." },
        { type: "callout", content: "Selon une étude McKinsey 2025, les PME qui adoptent l'IA génèrent en moyenne 1,5 fois plus de revenus par employé que leurs concurrentes qui ne l'utilisent pas." },
        { type: "subheading", content: "Les 4 domaines d'impact immédiat" },
        { type: "paragraph", content: "Marketing et contenu : génération d'articles, emails, publicités et posts réseaux sociaux en quelques minutes. Support client : chatbots IA qui répondent 24h/24 avec une satisfaction élevée. Opérations : automatisation des tâches répétitives (factures, rapports, analyses). Décisions : analyse de données et recommandations stratégiques basées sur vos chiffres." },
        { type: "key-point", content: "La règle des 80/20 de l'IA business : 20% des cas d'usage génèrent 80% des gains. Identifiez vos 3 tâches les plus chronophages et commencez par automatiser celles-là." },
        { type: "diagram", label: "Les 4 Domaines d'Impact IA pour les Entreprises", flow: "horizontal", nodes: [
          { label: "Marketing", sub: "Contenu, campagnes, SEO automatisés", color: "purple" },
          { label: "Support Client", sub: "Chatbots 24/7, tickets automatisés", color: "blue" },
          { label: "Opérations", sub: "Factures, rapports, analyses auto", color: "emerald" },
          { label: "Décisions", sub: "Data analysis et recommandations IA", color: "amber" },
        ]},
        { type: "video", videoId: "ad79nYk2keg", label: "L'Intelligence Artificielle expliquée en 5 minutes" },
        { type: "summary", items: [
          "L'IA est passée de tendance à nécessité opérationnelle en 2026",
          "Les PME IA-first génèrent 1,5x plus de revenus par employé",
          "4 domaines d'impact immédiat : marketing, support, opérations, décisions",
          "Pas besoin de millions : les outils accessibles dès quelques dizaines d'euros/mois",
          "Règle des 80/20 : commencez par vos 3 tâches les plus chronophages"
        ]},
      ],
      quiz: [
        { question: "Quel gain de productivité les PME adoptant l'IA rapportent-elles en moyenne ?", options: ["5 à 10%", "15 à 20%", "30 à 40%", "80 à 100%"], correctIndex: 2, explanation: "Les PME et TPE qui adoptent l'IA rapportent en moyenne 30 à 40% de gains de productivité sur les tâches administratives et créatives." },
        { question: "Quelle est la règle des 80/20 appliquée à l'IA business ?", options: ["80% des outils sont gratuits", "20% des cas d'usage génèrent 80% des gains", "Il faut 80 jours pour voir un ROI", "20% des employés utilisent l'IA"], correctIndex: 1, explanation: "La règle des 80/20 s'applique à l'IA : 20% des cas d'usage (vos tâches les plus chronophages) génèrent 80% des gains de productivité." },
        { question: "Quel est le premier domaine à automatiser pour un ROI immédiat ?", options: ["La comptabilité avancée", "Vos 3 tâches les plus répétitives et chronophages", "Le recrutement", "La R&D"], correctIndex: 1, explanation: "Commencer par les tâches les plus répétitives et chronophages garantit un ROI rapide car le temps économisé est immédiatement mesurable." },
        { question: "Quel facteur de revenus par employé les entreprises IA-first génèrent-elles ?", options: ["1,1x", "1,5x", "3x", "10x"], correctIndex: 1, explanation: "Selon McKinsey 2025, les PME adoptant l'IA génèrent en moyenne 1,5 fois plus de revenus par employé que leurs concurrentes non-IA." },
      ],
    },
    {
      number: 2,
      title: "Automatiser votre Marketing de Contenu",
      description: "Créer articles, posts, emails et publicités avec l'IA — workflows et outils.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA transforme la production de contenu" },
        { type: "paragraph", content: "Le marketing de contenu est souvent la première victime du manque de temps. L'IA change la donne : un article de blog qui prenait 4 heures prend désormais 45 minutes. Une semaine de posts réseaux sociaux se planifie en 30 minutes. Des emails de campagne se génèrent en quelques secondes." },
        { type: "subheading", content: "Articles de blog et SEO" },
        { type: "paragraph", content: "Workflow recommandé : 1. Perplexity pour la recherche des mots-clés et sujets tendance. 2. ChatGPT ou Claude pour la structure et le plan. 3. Claude pour la rédaction (meilleure nuance). 4. Un outil SEO (SurferSEO, Frase) pour l'optimisation. 5. Relecture humaine rapide avant publication. Temps total : 45 à 60 minutes pour un article de 1 500 mots." },
        { type: "subheading", content: "Réseaux sociaux à grande échelle" },
        { type: "paragraph", content: "Stratégie du contenu pilier : créez un article long (ou une vidéo), puis demandez à l'IA de le décliner en 10 tweets, 5 posts LinkedIn, 3 stories Instagram et 2 emailings. Une seule idée = 20 contenus différents en 30 minutes. Utilisez des prompts templates avec votre ton de marque pour garantir la cohérence." },
        { type: "subheading", content: "Email marketing personnalisé" },
        { type: "paragraph", content: "L'IA permet une personnalisation à l'échelle : en injectant les données de votre CRM dans vos prompts (prénom, historique d'achat, secteur), vous générez des emails personnalisés pour chaque segment en quelques minutes. Les taux d'ouverture augmentent en moyenne de 26% avec la personnalisation IA." },
        { type: "tip", content: "Créez un fichier 'Guide de Marque' : votre ton, vos valeurs, vos expressions interdites, vos exemples de contenu idéal. Injectez-le dans chaque prompt de contenu pour garantir une cohérence parfaite entre toutes vos productions IA." },
        { type: "diagram", label: "Workflow Marketing de Contenu IA", flow: "horizontal", nodes: [
          { label: "Recherche", sub: "Perplexity — sujets et mots-clés", color: "blue" },
          { label: "Structure", sub: "ChatGPT — plan et angles", color: "purple" },
          { label: "Rédaction", sub: "Claude — contenu nuancé", color: "emerald" },
          { label: "Déclinaison", sub: "IA — 20 formats depuis 1 contenu", color: "amber" },
        ]},
        { type: "diagram", label: "Stratégie du Contenu Pilier", flow: "cycle", nodes: [
          { label: "Contenu Pilier", sub: "Article long, vidéo, webinar", color: "purple" },
          { label: "Déclinaison IA", sub: "Posts, tweets, emailings, stories", color: "blue" },
          { label: "Engagement", sub: "Mesurer et réinjecter les insights", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Un article de 1 500 mots se produit en 45-60 minutes avec l'IA",
          "Stratégie pilier : 1 contenu long → 20 formats différents en 30 minutes",
          "La personnalisation IA augmente les taux d'ouverture email de 26%",
          "Un Guide de Marque injecté dans les prompts garantit la cohérence",
          "Workflow : Perplexity (recherche) → Claude (rédaction) → IA (déclinaison)"
        ]},
      ],
      quiz: [
        { question: "Combien de temps prend la rédaction d'un article de 1 500 mots avec l'IA ?", options: ["5 minutes", "45 à 60 minutes", "3 heures", "Autant qu'avant"], correctIndex: 1, explanation: "Avec l'IA et un workflow optimisé, un article de 1 500 mots se produit en 45 à 60 minutes contre 4 heures auparavant, soit une économie de 75 à 85%." },
        { question: "Qu'est-ce que la stratégie du contenu pilier ?", options: ["Écrire uniquement de longs articles", "Créer un contenu long et le décliner en de nombreux formats IA", "Publier quotidiennement sur tous les réseaux", "Copier les contenus de la concurrence"], correctIndex: 1, explanation: "La stratégie pilier consiste à créer un contenu long de qualité (article, vidéo) puis à demander à l'IA de le décliner en posts, tweets, emailings et stories — 1 idée = 20 contenus." },
        { question: "De combien la personnalisation IA augmente-t-elle les taux d'ouverture email ?", options: ["5%", "14%", "26%", "50%"], correctIndex: 2, explanation: "La personnalisation par IA (données CRM injectées dans les prompts) augmente en moyenne les taux d'ouverture email de 26% grâce à des messages plus pertinents pour chaque segment." },
        { question: "À quoi sert le Guide de Marque dans les prompts IA ?", options: ["À réduire les coûts des API", "À garantir la cohérence du ton et des valeurs dans tous les contenus", "À augmenter la vitesse de génération", "À éviter les hallucinations"], correctIndex: 1, explanation: "Le Guide de Marque injecté dans les prompts garantit que tous les contenus IA respectent votre ton, vos valeurs et vos expressions interdites — cohérence parfaite à l'échelle." },
      ],
    },
    {
      number: 3,
      title: "IA et Support Client — 24/7 sans Embauche",
      description: "Chatbots IA, automatisation des tickets et escalade intelligente.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Révolutionner le support client avec l'IA" },
        { type: "paragraph", content: "Le support client est souvent le poste de coût le plus important pour les PME en croissance. L'IA permet d'automatiser 60 à 80% des interactions sans sacrifier la qualité — et même en améliorant la satisfaction client grâce à des réponses instantanées 24h/24." },
        { type: "subheading", content: "Chatbot IA sur votre site" },
        { type: "paragraph", content: "Des outils comme Intercom (avec GPT), Tidio ou Crisp permettent de déployer un chatbot IA en quelques heures. Alimentez-le avec votre FAQ, votre catalogue de produits et vos politiques de retour/livraison. Le chatbot résout les questions simples instantanément et qualifie les leads avant de les transmettre à un humain." },
        { type: "subheading", content: "Automatisation des emails de support" },
        { type: "paragraph", content: "Intégrez Claude ou ChatGPT dans votre workflow email via Make ou Zapier : chaque email entrant est classifié par type (commande, retour, réclamation, question produit), une réponse adaptée est générée, et les cas complexes sont escaladés à l'équipe humaine. Résultat : délai de réponse réduit de 4 heures à moins de 5 minutes." },
        { type: "subheading", content: "Base de connaissances intelligente" },
        { type: "paragraph", content: "NotebookLM ou des outils comme Notion AI permettent de créer une base de connaissances interrogeable par vos équipes support. Au lieu de chercher dans des dizaines de documents, ils posent une question en langage naturel et obtiennent la réponse en secondes — avec la citation du document source." },
        { type: "key-point", content: "La règle d'or du support IA : automatisez les cas simples et récurrents, mais garantissez toujours un accès facile à un humain. Les clients acceptent l'IA si elle résout leur problème rapidement. Ils deviennent frustrés si elle les empêche d'accéder à un vrai conseiller." },
        { type: "diagram", label: "Architecture Support Client IA", flow: "vertical", nodes: [
          { label: "Niveau 1 — Chatbot IA", sub: "FAQ, produits, suivi commande (instantané)", color: "blue" },
          { label: "Niveau 2 — Email IA", sub: "Classification + réponse auto (<5 min)", color: "purple" },
          { label: "Niveau 3 — Escalade humaine", sub: "Réclamations complexes, clients VIP", color: "emerald" },
        ]},
        { type: "video", videoId: "R9OHn5ZF4Uo", label: "Machine Learning et automatisation expliqués simplement" },
        { type: "summary", items: [
          "L'IA automatise 60 à 80% des interactions support sans sacrifier la qualité",
          "Chatbot IA déployable en quelques heures avec Intercom, Tidio ou Crisp",
          "Emails support : classifiés et répondus automatiquement en moins de 5 minutes",
          "NotebookLM crée une base de connaissances interrogeable par vos équipes",
          "Règle d'or : toujours garantir un accès facile à un conseiller humain"
        ]},
      ],
      quiz: [
        { question: "Quel pourcentage des interactions support l'IA peut-elle automatiser ?", options: ["10 à 20%", "30 à 40%", "60 à 80%", "100%"], correctIndex: 2, explanation: "L'IA peut automatiser 60 à 80% des interactions support client (questions récurrentes, suivi de commande, retours) tout en améliorant la satisfaction grâce aux réponses instantanées." },
        { question: "Quel outil permet de créer une base de connaissances interrogeable par les équipes support ?", options: ["Midjourney", "NotebookLM", "Suno", "Stable Diffusion"], correctIndex: 1, explanation: "NotebookLM permet de charger tous vos documents de support (FAQ, procédures, politiques) et de les rendre interrogeables en langage naturel, avec citations des sources." },
        { question: "Quel est le délai de réponse email après automatisation IA ?", options: ["30 secondes", "Moins de 5 minutes", "30 minutes", "Identique à avant"], correctIndex: 1, explanation: "Avec l'automatisation IA via Make ou Zapier, le délai de réponse email passe de 4 heures (délai humain moyen) à moins de 5 minutes pour les cas automatisables." },
        { question: "Quelle est la règle d'or du support IA ?", options: ["Tout automatiser pour réduire les coûts", "Automatiser les cas simples et garantir l'accès à un humain", "Ne jamais utiliser de chatbot", "Répondre uniquement par email"], correctIndex: 1, explanation: "La règle d'or est d'automatiser les cas simples et récurrents tout en garantissant un accès facile à un conseiller humain pour les cas complexes — c'est ce qui maintient la satisfaction client." },
      ],
    },
    {
      number: 4,
      title: "Automatiser vos Opérations et Processus Internes",
      description: "Factures, rapports, RH, comptabilité — les processus métier à automatiser en priorité.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA pour les opérations : gagner des heures chaque semaine" },
        { type: "paragraph", content: "Les opérations internes sont souvent le domaine le plus immédiatement impactant pour l'IA. Les tâches administratives répétitives (saisie, rapports, comptes rendus, analyses) consomment en moyenne 30% du temps des équipes — sans créer de valeur directe. L'IA peut automatiser la majorité de ces tâches." },
        { type: "subheading", content: "Gestion documentaire et rapports" },
        { type: "paragraph", content: "Claude ou GPT-5.4 peuvent analyser des documents complexes, extraire des données structurées et générer des rapports formatés. Exemple : chargez 50 factures fournisseurs → l'IA extrait les données clés, les structure en tableau et identifie les anomalies. Ce qui prenait 4 heures se fait en 15 minutes." },
        { type: "subheading", content: "Comptes rendus de réunion automatiques" },
        { type: "paragraph", content: "Des outils comme Otter.ai, Fireflies ou le mode Meeting Summary de Google Meet transcrivent et résument automatiquement vos réunions. En fin de session, vous recevez les points clés, les décisions prises et les actions assignées. Plus besoin de prise de notes — concentrez-vous sur les échanges." },
        { type: "subheading", content: "RH et recrutement assistés par IA" },
        { type: "paragraph", content: "L'IA accélère le recrutement à chaque étape : rédaction des offres d'emploi, présélection des CV (en définissant des critères précis), rédaction des emails aux candidats, et même préparation des grilles d'entretien. Des outils comme Workable ou Greenhouse intègrent nativement l'IA dans leur workflow ATS." },
        { type: "tip", content: "Pour la présélection CV, fournissez à l'IA votre descriptif de poste et les 5 critères non-négociables. Demandez une note de 1 à 10 et une justification pour chaque CV. Traitez 100 CV en 30 minutes au lieu de 5 heures." },
        { type: "diagram", label: "Automatisation des Opérations Internes", flow: "vertical", nodes: [
          { label: "Gestion documentaire", sub: "Extraction de données, rapports auto", color: "blue" },
          { label: "Réunions", sub: "Transcription et résumé automatiques", color: "purple" },
          { label: "Recrutement", sub: "Offres, présélection CV, emails candidats", color: "emerald" },
          { label: "Comptabilité", sub: "Catégorisation, réconciliation, alertes", color: "amber" },
        ]},
        { type: "diagram", label: "ROI Typique de l'Automatisation Opérationnelle", flow: "horizontal", nodes: [
          { label: "Avant IA", sub: "30% du temps sur l'administratif", color: "pink" },
          { label: "Après IA", sub: "5-10% du temps sur l'administratif", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Les tâches administratives consomment en moyenne 30% du temps des équipes",
          "L'IA réduit ce chiffre à 5-10% grâce à l'automatisation des tâches répétitives",
          "Analyse de 50 factures : 4 heures → 15 minutes avec l'IA",
          "Otter.ai, Fireflies, Google Meet : comptes rendus automatiques en fin de réunion",
          "Présélection de 100 CV : 5 heures → 30 minutes avec des critères précis"
        ]},
      ],
      quiz: [
        { question: "Quel pourcentage du temps les équipes consacrent-elles aux tâches administratives en moyenne ?", options: ["5%", "15%", "30%", "60%"], correctIndex: 2, explanation: "En moyenne, les équipes consacrent 30% de leur temps à des tâches administratives répétitives (saisie, rapports, comptes rendus) sans valeur directe — l'IA peut automatiser la majorité." },
        { question: "Quel outil automatise la transcription et le résumé des réunions ?", options: ["Midjourney", "Otter.ai ou Fireflies", "Stable Diffusion", "ElevenLabs"], correctIndex: 1, explanation: "Otter.ai, Fireflies et le mode Meeting Summary de Google Meet transcrivent et résument automatiquement vos réunions, fournissant les points clés, décisions et actions en fin de session." },
        { question: "Combien de temps prend l'analyse de 50 factures avec l'IA ?", options: ["4 heures (identique)", "2 heures", "30 minutes", "15 minutes"], correctIndex: 3, explanation: "Avec l'IA, l'analyse de 50 factures (extraction de données, structuration, détection d'anomalies) prend environ 15 minutes contre 4 heures en traitement manuel." },
        { question: "Comment optimiser la présélection de CV avec l'IA ?", options: ["Laisser l'IA décider seule", "Fournir le descriptif + 5 critères non-négociables et demander une note", "Analyser uniquement les diplômes", "Faire analyser uniquement les CV d'une page"], correctIndex: 1, explanation: "Pour une présélection efficace, fournissez votre descriptif de poste et vos 5 critères non-négociables. Demandez une note de 1 à 10 et une justification — 100 CV traités en 30 minutes." },
      ],
    },
    {
      number: 5,
      title: "Mesurer le ROI de l'IA dans votre Entreprise",
      description: "KPIs, tableaux de bord, méthodes pour quantifier la valeur réelle de l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Mesurer pour optimiser : le ROI de l'IA" },
        { type: "paragraph", content: "Investir dans l'IA sans mesurer les résultats, c'est naviguer sans boussole. Définir les bons KPIs dès le départ vous permet de justifier les investissements, d'identifier ce qui fonctionne et d'optimiser en continu." },
        { type: "subheading", content: "KPIs de productivité" },
        { type: "paragraph", content: "Mesurez systématiquement : temps moyen par tâche avant/après IA, nombre de tâches traitées par heure, délai de traitement (emails, tickets, devis), et volume de production (articles publiés, emails envoyés, dossiers traités). Ces métriques montrent l'impact direct de l'IA sur l'efficacité opérationnelle." },
        { type: "subheading", content: "KPIs financiers" },
        { type: "paragraph", content: "Calculez : coût par lead (avant/après automatisation marketing), coût par ticket support résolu, coût de production de contenu par unité, et heures économisées × taux horaire moyen. Comparez ces économies au coût des abonnements IA pour calculer le ROI réel." },
        { type: "subheading", content: "KPIs de qualité" },
        { type: "paragraph", content: "L'IA ne doit pas sacrifier la qualité à la vitesse. Mesurez : taux de satisfaction client (CSAT, NPS), taux de correction des contenus IA générés, taux d'erreur sur les tâches automatisées, et taux de conversion des leads générés par IA vs humains." },
        { type: "key-point", content: "Formule ROI de l'IA = (Valeur des gains − Coûts des outils IA) / Coûts des outils IA × 100. Un ROI de 200% signifie que pour chaque euro investi, vous récupérez 3 euros de valeur." },
        { type: "diagram", label: "Dashboard ROI de l'IA", flow: "horizontal", nodes: [
          { label: "KPIs Productivité", sub: "Temps/tâche, volume, délais", color: "blue" },
          { label: "KPIs Financiers", sub: "Coût/lead, coût/ticket, heures économisées", color: "purple" },
          { label: "KPIs Qualité", sub: "CSAT, NPS, taux d'erreur, conversion", color: "emerald" },
        ]},
        { type: "video", videoId: "qAGAa6f2beg", label: "Comment les outils IA transforment les workflows professionnels" },
        { type: "summary", items: [
          "Mesurer le ROI est essentiel pour justifier et optimiser les investissements IA",
          "KPIs productivité : temps/tâche, volume traité, délais avant/après",
          "KPIs financiers : coût par lead/ticket, heures économisées × taux horaire",
          "KPIs qualité : CSAT, NPS, taux d'erreur, taux de conversion",
          "Formule ROI = (Gains − Coûts IA) / Coûts IA × 100"
        ]},
      ],
      quiz: [
        { question: "Pourquoi mesurer le ROI de l'IA dès le départ ?", options: ["Pour respecter la réglementation", "Pour justifier les investissements et optimiser en continu", "Pour impressionner les investisseurs", "Ce n'est pas nécessaire"], correctIndex: 1, explanation: "Mesurer le ROI dès le départ permet de justifier les investissements IA, d'identifier ce qui fonctionne réellement et d'optimiser en continu les workflows et les outils choisis." },
        { question: "Comment calculer les économies liées à l'IA sur les tâches manuelles ?", options: ["Estimer au hasard", "Heures économisées × taux horaire moyen", "Compter le nombre d'outils utilisés", "Mesurer la satisfaction des employés"], correctIndex: 1, explanation: "La méthode la plus rigoureuse est de multiplier les heures économisées par le taux horaire moyen de l'équipe concernée, puis de comparer ce chiffre au coût des abonnements IA." },
        { question: "Quelle est la formule du ROI de l'IA ?", options: ["Gains / Coûts", "(Gains − Coûts) / Coûts × 100", "Coûts × Gains", "Gains − Coûts"], correctIndex: 1, explanation: "La formule ROI = (Valeur des gains − Coûts des outils IA) / Coûts des outils IA × 100. Un ROI de 200% signifie 3 euros récupérés pour chaque euro investi." },
        { question: "Quel KPI de qualité mesure la satisfaction client ?", options: ["Temps de réponse", "CSAT et NPS", "Nombre de tickets", "Coût par ticket"], correctIndex: 1, explanation: "CSAT (Customer Satisfaction Score) et NPS (Net Promoter Score) sont les KPIs de qualité qui mesurent la satisfaction client — essentiels pour vérifier que l'IA ne dégrade pas l'expérience." },
      ],
    },
  ],
};

export default content;
