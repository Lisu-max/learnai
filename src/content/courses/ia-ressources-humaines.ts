import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-ressources-humaines",
  chapters: [
    {
      number: 1,
      title: "Introduction : L'IA Transforme les RH",
      description: "Comprendre comment l'IA révolutionné la gestion des ressources humaines.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA dans les Ressources Humaines" },
        { type: "paragraph", content: "Les ressources humaines vivent une transformation profonde grâce à l'IA. Du recrutement a la formation, de l'administration à l'analyse des talents, chaque processus RH peut être augmente par l'intelligence artificielle. En 2026, les entreprises qui n'utilisent pas l'IA dans leurs RH sont en retard." },
        { type: "paragraph", content: "L'IA ne remplace pas les professionnels RH — elle les libere des tâches répétitives pour se concentrer sur ce qui compte : la relation humaine, la stratégie, et le développement des talents. Un DRH augmente par l'IA peut gérer 3x plus de collaborateurs avec une meilleure qualité." },
        { type: "callout", content: "Selon Gartner, 76% des leaders RH estiment que leur organisation sera en retard si elle n'adopte pas l'IA dans les 12 prochains mois. Le temps d'agir, c'est maintenant." },
        { type: "video", videoId: "-F2NZhT4Tuc",
      videoDurationMinutes: 10, label: "L'IA dans les RH — vue d'ensemble" },
        { type: "heading", content: "Les Domaines Impactes" },
        { type: "paragraph", content: "L'IA transforme tous les domaines RH : recrutement (tri de CV, matching), onboarding (parcours personnalisés), formation (apprentissage adaptatif), engagement (analyse de sentiment), administration (automatisation des tâches), et people analytics (prédictions et insights)." },
        { type: "key-point", content: "L'IA en RH n'est pas un luxe technologique — c'est un avantage competitif. Les entreprises qui l'adoptent recrutent plus vite, retiennent mieux, et developpent leurs talents plus efficacement." },
        { type: "diagram", label: "L'IA dans le Cycle de Vie du Collaborateur", flow: "horizontal", nodes: [
          { label: "Recrutement", sub: "Tri CV, matching, entretiens", color: "purple" },
          { label: "Onboarding", sub: "Parcours personnalisés", color: "blue" },
          { label: "Formation", sub: "Apprentissage adaptatif", color: "emerald" },
          { label: "Engagement", sub: "Analyse de sentiment, retention", color: "amber" },
          { label: "Administration", sub: "Automatisation des processus", color: "pink" },
        ]},
        { type: "tip", content: "Commencez par les quick wins : automatiser le tri de CV, générer des descriptions de poste avec l'IA, et utiliser des chatbots RH pour les questions fréquentes des employés." },
        { type: "summary", items: [
          "L'IA transforme tous les processus RH sans remplacer l'humain",
          "76% des leaders RH considerent l'adoption de l'IA comme urgente",
          "Quick wins : tri de CV, descriptions de poste, chatbots RH",
          "L'IA permet de se concentrer sur la relation humaine et la stratégie",
          "Avantage competitif : recrutement plus rapide, meilleure retention"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal avantage de l'IA pour les professionnels RH ?",
          options: ["Remplacer les DRH", "Les liberer des tâches répétitives pour se concentrer sur la stratégie", "Réduire les salaires", "Supprimer les entretiens"],
          correctIndex: 1,
          explanation: "L'IA libere les professionnels RH des tâches répétitives (tri de CV, administration) pour qu'ils se concentrent sur la relation humaine et la stratégie."
        },
        {
          question: "Quel pourcentage des leaders RH considéré l'adoption de l'IA comme urgente ?",
          options: ["25%", "50%", "76%", "95%"],
          correctIndex: 2,
          explanation: "Selon Gartner, 76% des leaders RH estiment que leur organisation sera en retard si elle n'adopte pas l'IA rapidement."
        },
        {
          question: "Quel est un quick win pour commencer avec l'IA en RH ?",
          options: ["Remplacer tous les recruteurs par des IA", "Automatiser le tri de CV", "Supprimer les entretiens d'embauche", "Utiliser uniquement des chatbots"],
          correctIndex: 1,
          explanation: "L'automatisation du tri de CV est un quick win facile à implementer qui fait gagner des heures aux recruteurs tout en ameliorant la qualité du screening."
        },
        {
          question: "L'IA remplace-t-elle les professionnels RH ?",
          options: ["Oui, complètement", "Non, elle les augmente pour qu'ils soient plus efficaces", "Partiellement, seulement les juniors", "Elle ne changé rien aux RH"],
          correctIndex: 1,
          explanation: "L'IA ne remplace pas les RH mais les augmente : un DRH assisté par l'IA peut gérer plus de collaborateurs avec une meilleure qualité."
        },
      ],
    },
    {
      number: 2,
      title: "Recrutement Augmente par l'IA",
      description: "Optimiser chaque étape du recrutement avec l'intelligence artificielle.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Recrutement à l'Ère de l'IA" },
        { type: "paragraph", content: "Le recrutement est le domaine RH le plus impacte par l'IA. De la rédaction de l'offre d'emploi a la sélection finale, chaque étape peut être optimisée. Les entreprises qui utilisent l'IA recrutent en moyenne 40% plus vite et 25% moins cher." },
        { type: "subheading", content: "Rédaction des Offres d'Emploi" },
        { type: "paragraph", content: "Les LLM generent des descriptions de poste inclusives, attractives et optimisées pour le SEO. Claude et ChatGPT peuvent adapter le ton selon la culture d'entreprise, éliminer les biais de langage gentre, et suggérer des mots-clés pertinents pour attirer les bons profils." },
        { type: "subheading", content: "Sourcing et Matching" },
        { type: "paragraph", content: "Les algorithmes de matching IA croisent les compétences des candidats avec les exigences du poste. Des outils comme LinkedIn Recruiter AI, HireVue et Eightfold utilisent le NLP et le ML pour identifier les meilleurs profils, même ceux qui ne cherchent pas activement." },
        { type: "subheading", content: "Chatbots de Recrutement" },
        { type: "paragraph", content: "Les chatbots RH répondent 24/7 aux questions des candidats, planifient les entretiens, et collectent les informations preliminaires. Ils ameliorent l'expérience candidat tout en reduisant la charge des recruteurs de 30 à 50%." },
        { type: "prompt-example", prompt: "Redige une offre d'emploi pour un Data Analyst junior dans une startup fintech a Paris. Ton decontracte, inclusif, sans biais de genre. Inclus les compétences techniques, les soft skills, et les avantages.", result: "Data Analyst Junior — Rejoins notre aventure fintech !\n\nTu es passionne(e) par les données et tu veux avoir un impact réel ? Rejoins notre équipe de 15 personnes qui révolutionné le paiement en France.\n\nCe que tu feras :\n- Analyser les données de transactions pour identifier les tendances\n- Créer des dashboards avec Metabase/Looker\n- Collaborer avec l'équipe produit pour piloter les décisions\n\nCompetences : SQL, Python (pandas), outils de dataviz\nSoft skills : curiosite, rigueur, communication\n\nAvantages : RTT, teletravail 3j/sem, MacBook Pro, budget formation" },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Le recrutement augmente par l'IA" },
        { type: "diagram", label: "Le Funnel de Recrutement Augmente", flow: "vertical", nodes: [
          { label: "Offre d'emploi IA", sub: "Rédaction inclusive et optimisée", color: "blue" },
          { label: "Sourcing IA", sub: "Matching candidats-poste automatique", color: "purple" },
          { label: "Chatbot pre-screening", sub: "Questions et planification 24/7", color: "emerald" },
          { label: "Entretien assisté", sub: "Questions suggérées, prise de notes IA", color: "amber" },
          { label: "Décision", sub: "Score composite, pas de remplacement humain", color: "pink" },
        ]},
        { type: "summary", items: [
          "L'IA accélère le recrutement de 40% en moyenne",
          "Les LLM generent des offres inclusives et attractives",
          "Le matching IA identifié les meilleurs candidats automatiquement",
          "Les chatbots reduisent la charge des recruteurs de 30-50%",
          "La décision finale reste toujours humaine"
        ]},
      ],
      quiz: [
        {
          question: "De combien l'IA accélère-t-elle le recrutement en moyenne ?",
          options: ["10%", "25%", "40%", "75%"],
          correctIndex: 2,
          explanation: "Les entreprises utilisant l'IA dans le recrutement observent une accélération de 40% en moyenne du processus de recrutement."
        },
        {
          question: "Quel est l'avantage principal des chatbots de recrutement ?",
          options: ["Ils remplacent les recruteurs", "Ils répondent 24/7 et reduisent la charge de 30-50%", "Ils prennent les décisions d'embauche", "Ils sont gratuits"],
          correctIndex: 1,
          explanation: "Les chatbots de recrutement répondent aux candidats 24/7, planifient les entretiens et reduisent la charge des recruteurs de 30 à 50%."
        },
        {
          question: "Comment l'IA aide-t-elle a rédiger des offres d'emploi ?",
          options: ["Elle copie les offres concurrentes", "Elle génère des textes inclusifs, sans biais de genre, optimises SEO", "Elle traduit les offres en anglais", "Elle fixe le salaire automatiquement"],
          correctIndex: 1,
          explanation: "Les LLM generent des descriptions de poste inclusives, eliminent les biais de langage gentre, et optimisent le texte pour attirer les bons profils."
        },
        {
          question: "Qui prend la décision finale d'embauche dans un recrutement augmente par l'IA ?",
          options: ["L'algorithme", "Le chatbot", "Le manager humain", "Le candidat"],
          correctIndex: 2,
          explanation: "Dans un recrutement augmente par l'IA, la décision finale d'embauche reste toujours humaine. L'IA assisté et optimisé, mais ne décide pas."
        },
      ],
    },
    {
      number: 3,
      title: "Screening et Évaluation des Candidats",
      description: "Utiliser l'IA pour évaluer les compétences et le potentiel des candidats.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Screening Augmente par l'IA" },
        { type: "paragraph", content: "Trier 500 CV pour un poste est fastidieux et source d'erreurs. L'IA analyse les CV en quelques secondes, extrait les compétences clés, et classe les candidats par pertinence. Les recruteurs se concentrent alors sur les 10-20 meilleurs profils au lieu de tout lire." },
        { type: "subheading", content: "Analyse Automatique de CV" },
        { type: "paragraph", content: "Les parseurs de CV IA extraient automatiquement : compétences techniques, expérience, formation, langues, certifications. Les modèles NLP vont plus loin en inferant les compétences implicites et en evaluant la cohérence du parcours." },
        { type: "subheading", content: "Tests de Compétences IA" },
        { type: "paragraph", content: "Les plateformes comme Codility, HackerRank et TestGorilla utilisent l'IA pour créer et évaluer des tests techniques adaptatifs. Le niveau de difficulté s'ajuste en temps réel selon les réponses du candidat, offrant une évaluation plus précise et plus juste." },
        { type: "subheading", content: "Analyse Vidéo des Entretiens" },
        { type: "paragraph", content: "Attention : l'analyse video des entretiens par l'IA (expressions faciales, ton de voix) est controversee et regulee. L'AI Act européen classe les systèmes de reconnaissance d'émotions comme a haut risque. Privilegiez les outils qui analysent le contenu des réponses, pas le non-verbal." },
        { type: "callout", content: "Alerte ethique : l'IA de screening doit être auditee régulièrement pour les biais. Un système entraîné sur des données historiques peut discriminer involontairement certains profils (age, genre, origine). L'audit est une obligation légale sous l'AI Act." },
        { type: "video", videoId: "oeli5xkFZJo",
      videoDurationMinutes: 14, label: "Screening et évaluation IA des candidats" },
        { type: "key-point", content: "L'IA de screening est un outil d'aide à la décision, jamais un decideur. Le recruteur doit toujours valider les recommandations de l'IA et garder un oeil critique sur les résultats." },
        { type: "diagram", label: "Le Pipeline de Screening IA", flow: "horizontal", nodes: [
          { label: "Parsing CV", sub: "Extraction auto des compétences", color: "blue" },
          { label: "Matching", sub: "Score de pertinence candidat-poste", color: "purple" },
          { label: "Tests adaptatifs", sub: "Évaluation technique personnalisée", color: "emerald" },
          { label: "Shortlist", sub: "Top 10-20 pour entretien humain", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA trie 500 CV en secondes et identifié les meilleurs profils",
          "Les tests adaptatifs ajustent la difficulté en temps réel",
          "L'analyse video des émotions est controversee et regulee",
          "L'audit des biais est obligatoire sous l'AI Act",
          "L'IA assisté le screening, le recruteur décide"
        ]},
      ],
      quiz: [
        {
          question: "Combien de CV un recruteur doit-il typiquement trier pour un poste ?",
          options: ["10-20", "50-100", "200-500+", "1000+"],
          correctIndex: 2,
          explanation: "Un poste attractif peut recevoir 200 à 500+ candidatures. L'IA permet de trier ces CV en secondes au lieu d'heures."
        },
        {
          question: "Pourquoi l'analyse video des émotions est-elle controversee ?",
          options: ["Elle est trop chère", "Elle est classee haut risque par l'AI Act et peut être biaisee", "Elle est trop lente", "Elle ne fonctionne pas"],
          correctIndex: 1,
          explanation: "L'AI Act européen classe la reconnaissance d'émotions comme a haut risque. Ces systèmes peuvent être biaises et ne mesurent pas réellement les compétences."
        },
        {
          question: "Que font les tests adaptatifs ?",
          options: ["Ils posent les mêmes questions à tous", "Ils ajustent la difficulté selon les réponses du candidat", "Ils remplacent les entretiens", "Ils evaluent uniquement le QI"],
          correctIndex: 1,
          explanation: "Les tests adaptatifs ajustent le niveau de difficulté en temps réel selon les réponses, offrant une évaluation plus précise et une meilleure expérience candidat."
        },
        {
          question: "Pourquoi faut-il auditer régulièrement les outils IA de screening ?",
          options: ["Pour vérifier la vitesse", "Pour détecter et corriger les biais de discrimination", "Pour réduire les coûts", "Pour mettre à jour l'interface"],
          correctIndex: 1,
          explanation: "Les outils IA de screening peuvent reproduire des biais présents dans les données historiques. L'audit régulier détecte et corrige ces discriminations."
        },
      ],
    },
    {
      number: 4,
      title: "Onboarding Automatise",
      description: "Créer des parcours d'intégration personnalisés et automatises avec l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'Onboarding Augmente par l'IA" },
        { type: "paragraph", content: "Un bon onboarding réduit le turnover de 82% et améliore la productivité de 70% (Glassdoor). L'IA personnalise chaque parcours d'intégration en fonction du poste, du niveau d'expérience, et du style d'apprentissage du nouveau collaborateur." },
        { type: "subheading", content: "Parcours Personnalises" },
        { type: "paragraph", content: "L'IA génère un plan d'onboarding adapte : contenu de formation priorise, rencontres planifiees avec les bonnes personnes, tâches progressives, et checkpoints de validation. Chaque nouveau collaborateur reçoit un parcours unique qui accélère sa montee en compétences." },
        { type: "subheading", content: "Chatbot Compagnon" },
        { type: "paragraph", content: "Un chatbot IA dédié aux nouveaux arrivants répond à toutes leurs questions : ou est la cafeteria, comment poser des conges, qui contacter pour le matériel informatique. Disponible 24/7, il réduit le stress des premiers jours et decharge l'équipe RH." },
        { type: "subheading", content: "Automatisation Administrative" },
        { type: "paragraph", content: "Contrats, documents a signer, accès informatiques, inscriptions aux formations obligatoires — l'IA automatise toute la paperasse de l'onboarding. Les workflows automatises envoient les bons documents au bon moment sans intervention humaine." },
        { type: "tip", content: "Le meilleur onboarding combiné l'efficacité de l'IA et la chaleur humaine. Automatisez l'administratif et la logistique, mais gardez les moments clés en personne : accueil par le manager, dejeuner d'équipe, premier feedback." },
        { type: "video", videoId: "-F2NZhT4Tuc",
      videoDurationMinutes: 10, label: "Onboarding automatisé avec l'IA" },
        { type: "diagram", label: "L'Onboarding IA en 4 Étapes", flow: "vertical", nodes: [
          { label: "Pre-boarding", sub: "Documents, accès, matériel automatises", color: "blue" },
          { label: "Jour 1", sub: "Accueil humain + guide IA personnalisé", color: "purple" },
          { label: "Semaines 1-4", sub: "Formation adaptative + chatbot compagnon", color: "emerald" },
          { label: "Mois 1-3", sub: "Checkpoints automatiques + feedback manager", color: "amber" },
        ]},
        { type: "summary", items: [
          "Un bon onboarding réduit le turnover de 82%",
          "L'IA personnalise chaque parcours d'intégration",
          "Le chatbot compagnon répond 24/7 aux questions des nouveaux",
          "L'automatisation administrative élimine la paperasse",
          "Combiner efficacité IA et chaleur humaine pour les moments clés"
        ]},
      ],
      quiz: [
        {
          question: "De combien un bon onboarding réduit-il le turnover ?",
          options: ["20%", "50%", "82%", "95%"],
          correctIndex: 2,
          explanation: "Selon Glassdoor, un bon onboarding réduit le turnover de 82% et améliore la productivité de 70% — c'est un investissement majeur."
        },
        {
          question: "Quel est le rôle du chatbot compagnon en onboarding ?",
          options: ["Remplacer le manager", "Répondre 24/7 aux questions des nouveaux collaborateurs", "Évaluer la performance", "Planifier les conges"],
          correctIndex: 1,
          explanation: "Le chatbot compagnon répond aux questions pratiques des nouveaux arrivants 24/7, reduisant le stress et dechargeant l'équipe RH."
        },
        {
          question: "Que doit-on garder en humain malgré l'automatisation ?",
          options: ["La paperasse administrative", "L'accueil par le manager et les moments clés", "L'envoi des documents", "La création des accès informatiques"],
          correctIndex: 1,
          explanation: "L'accueil par le manager, les dejeuners d'équipe et les premiers feedbacks doivent rester humains pour créer du lien et de la confiance."
        },
        {
          question: "Comment l'IA personnalisé-t-elle l'onboarding ?",
          options: ["Elle donne le même parcours à tous", "Elle adapte le contenu au poste, niveau et style d'apprentissage", "Elle accélère simplement le processus", "Elle traduit les documents"],
          correctIndex: 1,
          explanation: "L'IA génère un plan d'onboarding unique adapte au poste, au niveau d'expérience, et au style d'apprentissage de chaque nouveau collaborateur."
        },
      ],
    },
    {
      number: 5,
      title: "Formation et Développement avec l'IA",
      description: "Personnaliser la formation continue et le développement des compétences.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "La Formation Continue Augmentee" },
        { type: "paragraph", content: "La formation est le domaine RH ou l'IA apporte le plus de valeur. L'apprentissage adaptatif personnalisé le contenu pour chaque collaborateur, le micro-learning s'intégré dans le quotidien, et les LLM deviennent des tuteurs personnels disponibles 24/7." },
        { type: "subheading", content: "Apprentissage Adaptatif" },
        { type: "paragraph", content: "Les plateformes LMS augmentées par l'IA evaluent le niveau de chaque apprenant et adaptent le parcours en temps réel. Si un collaborateur maîtrise un sujet, l'IA accélère. S'il bloque, elle propose des exercices supplémentaires et des explications alternatives." },
        { type: "subheading", content: "LLM comme Tuteurs Personnels" },
        { type: "paragraph", content: "Les entreprises déploient des chatbots IA internes formes sur leurs process, outils et documentation. Un collaborateur peut poser n'importé quelle question sur les procédures internes et obtenir une réponse instantanée — sans deranger un collègue." },
        { type: "subheading", content: "Identification des Gaps de Compétences" },
        { type: "paragraph", content: "L'IA analyse les compétences actuelles des équipes, les compare aux besoins futurs, et identifié les gaps. Elle recommandé ensuite des formations ciblées pour chaque collaborateur, optimisant le budget formation." },
        { type: "prompt-example", prompt: "Cree un plan de formation personnalisé de 3 mois pour un chef de projet qui doit monter en compétences sur l'IA et l'automatisation, avec du micro-learning intégré dans son quotidien.", result: "Plan de Formation IA — Chef de Projet (3 mois)\n\nMois 1 — Fondamentaux IA :\n- 15 min/jour : modules LearnAI (IA de A à Z)\n- Semaine 2 : atelier ChatGPT pour la gestion de projet\n- Semaine 4 : quiz validation + certification\n\nMois 2 — Outils pratiques :\n- 15 min/jour : tutoriels Make/Zapier\n- Semaine 6 : projet pratique (automatiser un reporting)\n- Semaine 8 : présentation au manager\n\nMois 3 — Intégration stratégique :\n- 15 min/jour : cas d'usage IA par secteur\n- Semaine 10 : plan d'action IA pour son équipe\n- Semaine 12 : soutenance + feedback 360" },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Formation et développement avec l'IA" },
        { type: "diagram", label: "La Formation Augmentee par l'IA", flow: "horizontal", nodes: [
          { label: "Diagnostic", sub: "Évaluation des compétences actuelles", color: "blue" },
          { label: "Personnalisation", sub: "Parcours adapte au profil", color: "purple" },
          { label: "Micro-learning", sub: "15 min/jour intégré au quotidien", color: "emerald" },
          { label: "Suivi", sub: "Progression et ajustements en temps réel", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'apprentissage adaptatif personnalisé le parcours de chaque collaborateur",
          "Les LLM deviennent des tuteurs personnels disponibles 24/7",
          "L'IA identifié les gaps de compétences et recommandé des formations",
          "Le micro-learning (15 min/jour) s'intégré dans le quotidien",
          "Le budget formation est optimisé grâce au ciblage IA"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'apprentissage adaptatif ?",
          options: ["Tout le monde suit le même cours", "Le parcours s'adapte au niveau et au rythme de chaque apprenant", "Les cours sont uniquement en video", "L'apprenant choisit ses horaires"],
          correctIndex: 1,
          explanation: "L'apprentissage adaptatif utilise l'IA pour évaluer le niveau de chaque apprenant et adapter le contenu, le rythme et les exercices en temps réel."
        },
        {
          question: "Qu'est-ce que le micro-learning ?",
          options: ["Des cours de 3 heures", "Des sessions courtes (10-15 min) intégrées dans le quotidien", "Apprendre uniquement sur mobile", "Un format réservé aux débutants"],
          correctIndex: 1,
          explanation: "Le micro-learning consiste en des sessions courtes (10-15 minutes) intégrées dans le quotidien, plus efficaces que les formations longues ponctuelles."
        },
        {
          question: "Comment l'IA aide-t-elle à identifier les gaps de compétences ?",
          options: ["Elle demande aux employés", "Elle analyse les compétences actuelles et les compare aux besoins futurs", "Elle consulte les CV", "Elle fait passer des examens"],
          correctIndex: 1,
          explanation: "L'IA analyse les compétences actuelles des équipes, les compare aux besoins stratégiques futurs, et identifié les gaps a combler avec des formations ciblées."
        },
        {
          question: "Quel est l'avantage d'un chatbot IA forme sur les process internes ?",
          options: ["Il est moins cher qu'un LMS", "Il répond instantanément aux questions sur les procédures internes", "Il remplace la formation", "Il est obligatoire par la loi"],
          correctIndex: 1,
          explanation: "Un chatbot IA forme sur la documentation interne répond instantanément a toute question de procédure, sans deranger un collègue et disponible 24/7."
        },
      ],
    },
    {
      number: 6,
      title: "Engagement et Retention des Talents",
      description: "Détecter les risques de depart et améliorer l'engagement avec l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA au Service de l'Engagement" },
        { type: "paragraph", content: "Perdre un collaborateur clé coûte entre 50% et 200% de son salaire annuel (recrutement, formation, perte de productivité). L'IA permet de détecter les signaux faibles de desengagement et d'agir avant qu'il ne soit trop tard." },
        { type: "subheading", content: "Analyse de Sentiment et Pulse Surveys" },
        { type: "paragraph", content: "Les pulse surveys hebdomadaires (2-3 questions rapides) sont analysées par l'IA pour détecter les tendances d'engagement. Le NLP analyse les commentaires libres pour identifier les thèmes recurrents : charge de travail, management, évolution de carrière." },
        { type: "subheading", content: "Prédiction du Turnover" },
        { type: "paragraph", content: "Les modèles ML predisent le risque de depart de chaque collaborateur en analysant : ancienneté, évolution salariale, fréquence des absences, résultats des surveys, changements de manager, et comparaison avec des profils similaires qui sont partis." },
        { type: "subheading", content: "Actions de Retention Personnalisees" },
        { type: "paragraph", content: "L'IA ne se contente pas de prédire — elle recommandé des actions : entretien avec le manager, revue salariale, changement de projet, formation, flexibilité horaire. Chaque recommandation est adaptee au profil et aux motivations de l'individu." },
        { type: "callout", content: "Attention à l'ethique : la prédiction du turnover ne doit jamais être utilisée contre les collaborateurs (refuser une promotion parce qu'ils \"risquent de partir\"). L'objectif est d'améliorer leur expérience, pas de les surveiller." },
        { type: "video", videoId: "oeli5xkFZJo",
      videoDurationMinutes: 14, label: "Engagement et retention avec l'IA" },
        { type: "diagram", label: "Le Cycle de Retention IA", flow: "cycle", nodes: [
          { label: "Mesurer", sub: "Pulse surveys + analyse de sentiment", color: "blue" },
          { label: "Predire", sub: "Score de risque de depart", color: "purple" },
          { label: "Agir", sub: "Actions personnalisées de retention", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Perdre un collaborateur coûte 50% a 200% de son salaire annuel",
          "Les pulse surveys analysées par l'IA detectent les tendances",
          "Les modèles ML predisent le risque de depart individuel",
          "L'IA recommandé des actions de retention personnalisées",
          "Éthique : l'objectif est d'améliorer l'expérience, pas de surveiller"
        ]},
      ],
      quiz: [
        {
          question: "Combien coûte la perte d'un collaborateur clé ?",
          options: ["10% de son salaire", "25% de son salaire", "50% a 200% de son salaire annuel", "1 mois de salaire"],
          correctIndex: 2,
          explanation: "La perte d'un collaborateur clé coûte entre 50% et 200% de son salaire annuel en recrutement, formation du remplacant et perte de productivité."
        },
        {
          question: "Qu'est-ce qu'un pulse survey ?",
          options: ["Un examen médical", "Un questionnaire court et fréquent (hebdomadaire) sur l'engagement", "Un entretien annuel", "Un test de compétences"],
          correctIndex: 1,
          explanation: "Les pulse surveys sont des questionnaires courts (2-3 questions) envoyés fréquemment (chaque semaine) pour mesurer l'engagement en continu."
        },
        {
          question: "Quelles données alimentent la prédiction du turnover ?",
          options: ["Uniquement le salaire", "Anciennete, absences, surveys, évolution salariale, changements de manager", "Les posts sur les réseaux sociaux", "Les évaluations académiques"],
          correctIndex: 1,
          explanation: "Les modèles de prédiction du turnover analysent de multiples signaux : ancienneté, absences, résultats de surveys, évolution salariale, et changements de manager."
        },
        {
          question: "Quelle est la limite ethique de la prédiction du turnover ?",
          options: ["Elle est trop imprecise", "Elle ne doit pas être utilisée contre les collaborateurs", "Elle est illégale", "Elle ne fonctionne que dans les grandes entreprises"],
          correctIndex: 1,
          explanation: "La prédiction du turnover doit servir a améliorer l'expérience des collaborateurs, jamais a les penaliser (refus de promotion, surveillance)."
        },
      ],
    },
    {
      number: 7,
      title: "Administration RH Automatisee",
      description: "Automatiser les tâches administratives RH avec des workflows IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Automatiser la Paperasse RH" },
        { type: "paragraph", content: "Les équipes RH passent en moyenne 40% de leur temps sur des tâches administratives : gestion des conges, bulletins de paie, déclarations sociales, contrats, attestations. L'IA et l'automatisation peuvent réduire ce temps de 70%, liberant les RH pour des tâches stratégiques." },
        { type: "subheading", content: "Gestion des Conges et Absences" },
        { type: "paragraph", content: "Les systèmes IA gèrent automatiquement les demandes de conges : vérification du solde, validation selon les règles de l'entreprise, notification du manager, mise à jour du planning. Les chatbots permettent de poser des conges par simple message." },
        { type: "subheading", content: "Génération de Documents" },
        { type: "paragraph", content: "Contrats de travail, avenants, attestations, certificats — les LLM generent ces documents en quelques secondes à partir de templates et de données du SIRH. La relecture humaine reste nécessaire pour les documents critiques." },
        { type: "subheading", content: "Réponses aux Questions Frequentes" },
        { type: "paragraph", content: "Un chatbot RH interne répond a 80% des questions des employés : politique de teletravail, mutuelle, tickets restaurant, procédure de note de frais. Il réduit drastiquement les sollicitations répétitives vers l'équipe RH." },
        { type: "tip", content: "Commencez par automatiser les 3 demandes les plus fréquentes. En général : solde de conges, bulletin de paie, et attestation employeur. Ces automatisations ont un ROI immédiat et visible." },
        { type: "video", videoId: "-F2NZhT4Tuc",
      videoDurationMinutes: 10, label: "Automatisation administrative RH" },
        { type: "diagram", label: "Les Tâches RH Automatisables", flow: "horizontal", nodes: [
          { label: "Conges", sub: "Demande → validation → planning auto", color: "blue" },
          { label: "Documents", sub: "Génération automatique de contrats", color: "purple" },
          { label: "FAQ", sub: "Chatbot RH 80% des questions", color: "emerald" },
          { label: "Paie", sub: "Calculs et déclarations auto", color: "amber" },
        ]},
        { type: "key-point", content: "L'objectif de l'automatisation RH n'est pas de réduire les effectifs mais de reaffecter le temps des RH vers des missions a forte valeur : stratégie talents, accompagnement manageurs, culture d'entreprise." },
        { type: "summary", items: [
          "Les RH passent 40% de leur temps sur l'administratif",
          "L'automatisation peut réduire ce temps de 70%",
          "Conges, documents, FAQ et paie sont les priorités",
          "Le chatbot RH répond a 80% des questions des employés",
          "L'objectif : reaffecter le temps vers des missions stratégiques"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps RH est consacre à l'administratif ?",
          options: ["10%", "25%", "40%", "60%"],
          correctIndex: 2,
          explanation: "Les équipes RH passent en moyenne 40% de leur temps sur des tâches administratives répétitives."
        },
        {
          question: "Quel est le ROI le plus immédiat de l'automatisation RH ?",
          options: ["La prédiction du turnover", "L'automatisation des 3 demandes les plus fréquentes", "Le remplacement du SIRH", "La formation en ligne"],
          correctIndex: 1,
          explanation: "Automatiser les 3 demandes les plus fréquentes (conges, bulletins de paie, attestations) offre un ROI immédiat et visible."
        },
        {
          question: "A combien de questions le chatbot RH peut-il répondre ?",
          options: ["20%", "50%", "80%", "100%"],
          correctIndex: 2,
          explanation: "Un chatbot RH bien configure répond a environ 80% des questions fréquentes des employés, reduisant drastiquement les sollicitations vers l'équipe RH."
        },
        {
          question: "Quel est le vrai objectif de l'automatisation RH ?",
          options: ["Réduire les effectifs RH", "Reaffecter le temps vers des missions stratégiques", "Supprimer les RH", "Economiser sur les logiciels"],
          correctIndex: 1,
          explanation: "L'objectif n'est pas de réduire les effectifs mais de liberer les RH pour des missions a forte valeur : stratégie talents, accompagnement, culture."
        },
      ],
    },
    {
      number: 8,
      title: "People Analytics",
      description: "Exploiter les données RH pour prendre des décisions stratégiques eclairees.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "People Analytics : Les Données au Service des RH" },
        { type: "paragraph", content: "Le people analytics utilise les données RH pour prendre des décisions basées sur des faits plutôt que sur l'intuition. Taux de turnover, engagement, performance, diversité, equity salariale — chaque indicateur peut être mesure, analyse et prédit." },
        { type: "subheading", content: "Les KPIs RH Essentiels" },
        { type: "paragraph", content: "Turnover rate, time-to-hire, cost-per-hire, employée NPS (eNPS), taux d'absenteisme, ratio de diversité, equity salariale, taux de promotion interne, score d'engagement, et ROI de la formation. Ces KPIs forment le tableau de bord du DRH data-driven." },
        { type: "subheading", content: "L'IA dans le People Analytics" },
        { type: "paragraph", content: "L'IA va au-dela des dashboards descriptifs. Elle prédit le turnover, identifié les hauts potentiels, détecte les inequites salariales, optimisé la planification des effectifs, et recommandé des actions personnalisées pour chaque manager et collaborateur." },
        { type: "subheading", content: "Construire un Dashboard RH" },
        { type: "paragraph", content: "Les outils modernes comme Looker, Power BI et Metabase permettent de créer des dashboards RH interactifs. L'IA peut générer automatiquement des insights et des recommandations à partir des données affichees." },
        { type: "prompt-example", prompt: "Analyse ces KPIs RH et identifié les 3 problèmes prioritaires :\n- Turnover : 22% (industrie : 15%)\n- Time-to-hire : 45 jours (ciblé : 30)\n- eNPS : 12 (bon : >30)\n- Absenteisme : 8% (norme : 5%)\n- Diversité genre management : 28% femmes", result: "3 Problèmes Prioritaires :\n\n1. TURNOVER CRITIQUE (22% vs 15%) — Perte de talents et coûts élèves. Action : pulse surveys immédiate + entretiens de retention avec les profils a risque.\n\n2. ENGAGEMENT BAS (eNPS 12) — Correle au turnover. Action : diagnostic par équipe pour identifier les managers/équipes en difficulté.\n\n3. ABSENTEISME ELEVE (8% vs 5%) — Signal de mal-être. Action : analyse par departement + entretiens de retour d'absence systematiques.\n\nNote : le time-to-hire et la diversité sont importants mais le turnover et l'engagement sont les urgences." },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "People analytics et dashboards RH" },
        { type: "diagram", label: "Les 4 Niveaux du People Analytics", flow: "vertical", nodes: [
          { label: "Descriptif", sub: "Que s'est-il passe ? (dashboards)", color: "blue" },
          { label: "Diagnostic", sub: "Pourquoi ? (analyse de correlations)", color: "purple" },
          { label: "Predictif", sub: "Que va-t-il se passer ? (ML)", color: "emerald" },
          { label: "Prescriptif", sub: "Que faire ? (recommandations IA)", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le people analytics remplace l'intuition par les données",
          "KPIs essentiels : turnover, eNPS, time-to-hire, diversité, absenteisme",
          "L'IA prédit, identifié les hauts potentiels et recommandé des actions",
          "4 niveaux : descriptif, diagnostic, prédictif, prescriptif",
          "Les dashboards RH rendent les données actionnables"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le people analytics ?",
          options: ["Un logiciel RH", "L'utilisation des données RH pour des décisions basées sur les faits", "Un type d'entretien", "Une méthode de recrutement"],
          correctIndex: 1,
          explanation: "Le people analytics utilise les données RH pour prendre des décisions stratégiques basées sur des faits plutôt que sur l'intuition."
        },
        {
          question: "Que mesure l'eNPS ?",
          options: ["La productivité", "L'engagement des employés", "Le chiffre d'affaires", "Le nombre de recrutements"],
          correctIndex: 1,
          explanation: "L'eNPS (employée Net Promoter Score) mesure l'engagement et la satisfaction des employés à travers une question simple : recommanderiez-vous votre entreprise ?"
        },
        {
          question: "Quel est le niveau le plus avance du people analytics ?",
          options: ["Descriptif", "Diagnostic", "Predictif", "Prescriptif"],
          correctIndex: 3,
          explanation: "Le niveau prescriptif est le plus avance : il ne se contente pas de prédire, il recommandé des actions concrètes à prendre."
        },
        {
          question: "Quel outil permet de créer des dashboards RH interactifs ?",
          options: ["Excel uniquement", "Looker, Power BI ou Metabase", "Un chatbot", "Le SIRH uniquement"],
          correctIndex: 1,
          explanation: "Looker, Power BI et Metabase sont des outils de BI modernes qui permettent de créer des dashboards RH interactifs et visuels."
        },
      ],
    },
    {
      number: 9,
      title: "Droit du Travail et IA",
      description: "Les implications juridiques de l'IA en RH : RGPD, AI Act, biais.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Cadre Juridique de l'IA en RH" },
        { type: "paragraph", content: "L'utilisation de l'IA en RH est encadree par un arsenal juridique croissant : RGPD, AI Act européen, Code du travail, et jurisprudence émergente. Le non-respect de ces règles exposé à des sanctions lourdes et a des risques de reputation." },
        { type: "subheading", content: "RGPD et Données RH" },
        { type: "paragraph", content: "Les données RH sont des données personnelles protégées par le RGPD. Consentement, finalité, minimisation, droit d'accès, droit à l'oubli — chaque traitement IA doit respecter ces principes. L'analyse des emails ou de la navigation des employés est strictement encadree." },
        { type: "subheading", content: "AI Act et Recrutement" },
        { type: "paragraph", content: "L'AI Act classe les systèmes IA de recrutement et de gestion RH comme a \"haut risque\". Obligations : transparence (informer que l'IA est utilisée), explicabilite (pouvoir expliquer les décisions), audit régulier des biais, documentation technique complète, et supervision humaine." },
        { type: "subheading", content: "Non-Discrimination et IA" },
        { type: "paragraph", content: "Un algorithme de recrutement qui discrimine (même involontairement) expose l'entreprise a des poursuites. Les critères protégés : genre, age, origine, handicap, religion, orientation sexuelle. L'audit des biais est une obligation légale, pas une option." },
        { type: "heading", content: "Bonnes Pratiques Juridiques" },
        { type: "paragraph", content: "Informer les candidats et employés de l'utilisation de l'IA. Documenter les décisions. Maintenir une supervision humaine pour toute décision significative. Auditer régulièrement les algorithmes. Designez un referent IA au sein de l'équipe juridique." },
        { type: "callout", content: "Sanctions RGPD : jusqu'à 20 millions d'euros ou 4% du CA mondial. Sanctions AI Act : jusqu'à 35 millions d'euros ou 7% du CA mondial. Le coût de la conformite est infiniment inférieur au coût de la non-conformite." },
        { type: "video", videoId: "oeli5xkFZJo",
      videoDurationMinutes: 14, label: "Droit du travail et IA en RH" },
        { type: "diagram", label: "Le Cadre Juridique de l'IA en RH", flow: "horizontal", nodes: [
          { label: "RGPD", sub: "Protection des données personnelles", color: "blue" },
          { label: "AI Act", sub: "Obligations pour systèmes haut risque", color: "purple" },
          { label: "Code du travail", sub: "Non-discrimination, information CSE", color: "emerald" },
          { label: "Jurisprudence", sub: "Decisions de justice émergentes", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA en RH est classee \"haut risque\" par l'AI Act",
          "RGPD : consentement, minimisation, droit d'accès pour les données RH",
          "L'audit des biais est une obligation légale",
          "Sanctions : jusqu'à 35M EUR ou 7% du CA mondial",
          "Supervision humaine obligatoire pour les décisions significatives"
        ]},
      ],
      quiz: [
        {
          question: "Comment l'AI Act classe-t-il les systèmes IA de recrutement ?",
          options: ["Risque minimal", "Risque limite", "Haut risque", "Risque inacceptable"],
          correctIndex: 2,
          explanation: "L'AI Act européen classe les systèmes IA de recrutement et de gestion RH comme a \"haut risque\", imposant des obligations strictes."
        },
        {
          question: "Quelle sanction maximale prevoit l'AI Act ?",
          options: ["1 million d'euros", "10 millions d'euros", "35 millions d'euros ou 7% du CA", "Aucune sanction financiere"],
          correctIndex: 2,
          explanation: "L'AI Act prevoit des sanctions allant jusqu'à 35 millions d'euros ou 7% du chiffre d'affaires mondial — des montants dissuasifs."
        },
        {
          question: "L'audit des biais en IA RH est-il obligatoire ?",
          options: ["Non, c'est optionnel", "Oui, c'est une obligation légale", "Seulement pour les grandes entreprises", "Seulement pour le recrutement"],
          correctIndex: 1,
          explanation: "L'audit régulier des biais est une obligation légale sous l'AI Act pour tous les systèmes IA a haut risque, y compris ceux utilisés en RH."
        },
        {
          question: "Quelle bonne pratique est essentielle pour l'IA en RH ?",
          options: ["Ne pas informer les candidats pour éviter les biais", "Maintenir une supervision humaine pour toute décision significative", "Utiliser l'IA pour toutes les décisions sans exception", "Minimiser la documentation"],
          correctIndex: 1,
          explanation: "La supervision humaine est obligatoire pour toute décision significative (embauche, licenciement, promotion) même quand l'IA assisté le processus."
        },
      ],
    },
    {
      number: 10,
      title: "Stratégie RH Augmentee",
      description: "Construire une stratégie RH intégrant l'IA de manière ethique et efficace.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Construire sa Stratégie RH Augmentee" },
        { type: "paragraph", content: "Adopter l'IA en RH ne se fait pas du jour au lendemain. Il faut une stratégie claire, un plan de déploiement progressif, et une attention constante à l'ethique et au cadre juridique. Ce chapitre vous guide dans la construction de votre feuille de route." },
        { type: "subheading", content: "Phase 1 : Audit et Quick Wins (Mois 1-3)" },
        { type: "paragraph", content: "Identifiez les processus RH les plus chronophages et les plus automatisables. Commencez par les quick wins : chatbot FAQ, génération de documents, tri de CV. Mesurez le temps gagne et le ROI pour justifier les investissements suivants." },
        { type: "subheading", content: "Phase 2 : Fondations (Mois 3-6)" },
        { type: "paragraph", content: "Mettez en place l'infrastructure : SIRH compatible IA, données propres et centralisees, politique de gouvernance des données, formation des équipes RH aux outils IA. Sans données de qualité, aucun outil IA ne fonctionnera correctement." },
        { type: "subheading", content: "Phase 3 : Déploiement (Mois 6-12)" },
        { type: "paragraph", content: "Deployez les solutions a fort impact : recrutement augmente, onboarding personnalisé, people analytics, prédiction du turnover. Mesurez chaque initiative avec des KPIs clairs et iterez en fonction des résultats." },
        { type: "subheading", content: "Phase 4 : Excellence (Année 2+)" },
        { type: "paragraph", content: "Optimisez et innovez : IA prescriptive, workforce planning prédictif, expérience collaborateur ultra-personnalisée. Partagez les résultats avec la direction pour ancrer l'IA comme pilier stratégique des RH." },
        { type: "prompt-example", prompt: "Tu es un consultant en transformation RH. Cree une feuille de route sur 12 mois pour une PME de 200 employés qui veut intégrer l'IA dans ses RH, avec un budget limite.", result: "Feuille de Route IA RH — PME 200 employés\n\nMois 1-3 — Quick Wins (budget : 500 EUR/mois) :\n- Chatbot FAQ RH avec ChatGPT Teams\n- Génération de fiches de poste avec Claude\n- Templates de contrats IA\nROI attendu : 15h/semaine economisees\n\nMois 3-6 — Fondations (budget : 1500 EUR/mois) :\n- SIRH cloud (Lucca ou PayFit)\n- Centralisation des données RH\n- Formation équipe RH (2 jours)\nROI attendu : données propres + équipe formee\n\nMois 6-12 — Impact (budget : 2500 EUR/mois) :\n- ATS avec tri IA (Recruitee ou Workable)\n- Dashboard people analytics (Metabase)\n- Pulse surveys automatisees\nROI attendu : -30% time-to-hire, +15 eNPS" },
        { type: "video", videoId: "-F2NZhT4Tuc",
      videoDurationMinutes: 10, label: "Construire sa stratégie RH augmentée" },
        { type: "key-point", content: "La clé du succès n'est pas la technologie — c'est la conduite du changement. Impliquez les équipes RH des le depart, formez-les, et celebrez les quick wins pour créer l'adhésion." },
        { type: "diagram", label: "La Feuille de Route IA RH", flow: "vertical", nodes: [
          { label: "Phase 1 : Quick Wins", sub: "Mois 1-3 — Chatbot, documents, tri CV", color: "blue" },
          { label: "Phase 2 : Fondations", sub: "Mois 3-6 — SIRH, données, formation", color: "purple" },
          { label: "Phase 3 : Déploiement", sub: "Mois 6-12 — Recrutement, analytics, retention", color: "emerald" },
          { label: "Phase 4 : Excellence", sub: "Année 2+ — IA prescriptive, innovation", color: "amber" },
        ]},
        { type: "summary", items: [
          "Stratégie progressive en 4 phases sur 12+ mois",
          "Commencez par les quick wins pour prouver le ROI",
          "Données propres et centralisees = prerequis indispensable",
          "La conduite du changement est plus importante que la technologie",
          "Mesurez chaque initiative avec des KPIs clairs"
        ]},
      ],
      quiz: [
        {
          question: "Par quoi faut-il commencer pour intégrer l'IA en RH ?",
          options: ["Acheter un SIRH complet", "Par les quick wins pour prouver le ROI", "Par la prédiction du turnover", "Par le remplacement des recruteurs"],
          correctIndex: 1,
          explanation: "Commencez par les quick wins (chatbot FAQ, génération de documents, tri de CV) pour prouver le ROI et créer l'adhésion avant d'investir davantage."
        },
        {
          question: "Quel est le prerequis indispensable pour l'IA en RH ?",
          options: ["Un budget illimite", "Des données propres et centralisees", "Un data scientist dédié", "Un accord syndical"],
          correctIndex: 1,
          explanation: "Sans données propres et centralisees, aucun outil IA ne fonctionnera correctement. La qualité des données est le fondement de tout projet IA."
        },
        {
          question: "Quelle est la clé du succès de l'IA en RH ?",
          options: ["La technologie la plus avancée", "La conduite du changement et l'implication des équipes", "Le budget le plus élève", "Le SIRH le plus complet"],
          correctIndex: 1,
          explanation: "La conduite du changement est plus importante que la technologie. Impliquez les équipes, formez-les, et celebrez les quick wins."
        },
        {
          question: "Combien de temps faut-il pour une stratégie IA RH complète ?",
          options: ["1 mois", "3 mois", "12+ mois en 4 phases progressives", "3 ans minimum"],
          correctIndex: 2,
          explanation: "Une stratégie IA RH complète se déploie sur 12+ mois en 4 phases progressives : quick wins, fondations, déploiement, excellence."
        },
      ],
    },
  ],
};

export default content;
