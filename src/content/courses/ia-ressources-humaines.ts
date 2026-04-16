import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-ressources-humaines",
  chapters: [
    {
      number: 1,
      title: "Introduction : L'IA Transforme les RH",
      description: "Comprendre comment l'IA revolutionne la gestion des ressources humaines.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA dans les Ressources Humaines" },
        { type: "paragraph", content: "Les ressources humaines vivent une transformation profonde grace a l'IA. Du recrutement a la formation, de l'administration a l'analyse des talents, chaque processus RH peut etre augmente par l'intelligence artificielle. En 2026, les entreprises qui n'utilisent pas l'IA dans leurs RH sont en retard." },
        { type: "paragraph", content: "L'IA ne remplace pas les professionnels RH — elle les libere des taches repetitives pour se concentrer sur ce qui compte : la relation humaine, la strategie, et le developpement des talents. Un DRH augmente par l'IA peut gerer 3x plus de collaborateurs avec une meilleure qualite." },
        { type: "callout", content: "Selon Gartner, 76% des leaders RH estiment que leur organisation sera en retard si elle n'adopte pas l'IA dans les 12 prochains mois. Le temps d'agir, c'est maintenant." },
        { type: "video", videoId: "sgg3NmGzRXY", label: "L'IA dans les RH — vue d'ensemble" },
        { type: "heading", content: "Les Domaines Impactes" },
        { type: "paragraph", content: "L'IA transforme tous les domaines RH : recrutement (tri de CV, matching), onboarding (parcours personnalises), formation (apprentissage adaptatif), engagement (analyse de sentiment), administration (automatisation des taches), et people analytics (predictions et insights)." },
        { type: "key-point", content: "L'IA en RH n'est pas un luxe technologique — c'est un avantage competitif. Les entreprises qui l'adoptent recrutent plus vite, retiennent mieux, et developpent leurs talents plus efficacement." },
        { type: "diagram", label: "L'IA dans le Cycle de Vie du Collaborateur", flow: "horizontal", nodes: [
          { label: "Recrutement", sub: "Tri CV, matching, entretiens", color: "purple" },
          { label: "Onboarding", sub: "Parcours personnalises", color: "blue" },
          { label: "Formation", sub: "Apprentissage adaptatif", color: "emerald" },
          { label: "Engagement", sub: "Analyse de sentiment, retention", color: "amber" },
          { label: "Administration", sub: "Automatisation des processus", color: "pink" },
        ]},
        { type: "tip", content: "Commencez par les quick wins : automatiser le tri de CV, generer des descriptions de poste avec l'IA, et utiliser des chatbots RH pour les questions frequentes des employes." },
        { type: "summary", items: [
          "L'IA transforme tous les processus RH sans remplacer l'humain",
          "76% des leaders RH considerent l'adoption de l'IA comme urgente",
          "Quick wins : tri de CV, descriptions de poste, chatbots RH",
          "L'IA permet de se concentrer sur la relation humaine et la strategie",
          "Avantage competitif : recrutement plus rapide, meilleure retention"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal avantage de l'IA pour les professionnels RH ?",
          options: ["Remplacer les DRH", "Les liberer des taches repetitives pour se concentrer sur la strategie", "Reduire les salaires", "Supprimer les entretiens"],
          correctIndex: 1,
          explanation: "L'IA libere les professionnels RH des taches repetitives (tri de CV, administration) pour qu'ils se concentrent sur la relation humaine et la strategie."
        },
        {
          question: "Quel pourcentage des leaders RH considere l'adoption de l'IA comme urgente ?",
          options: ["25%", "50%", "76%", "95%"],
          correctIndex: 2,
          explanation: "Selon Gartner, 76% des leaders RH estiment que leur organisation sera en retard si elle n'adopte pas l'IA rapidement."
        },
        {
          question: "Quel est un quick win pour commencer avec l'IA en RH ?",
          options: ["Remplacer tous les recruteurs par des IA", "Automatiser le tri de CV", "Supprimer les entretiens d'embauche", "Utiliser uniquement des chatbots"],
          correctIndex: 1,
          explanation: "L'automatisation du tri de CV est un quick win facile a implementer qui fait gagner des heures aux recruteurs tout en ameliorant la qualite du screening."
        },
        {
          question: "L'IA remplace-t-elle les professionnels RH ?",
          options: ["Oui, completement", "Non, elle les augmente pour qu'ils soient plus efficaces", "Partiellement, seulement les juniors", "Elle ne change rien aux RH"],
          correctIndex: 1,
          explanation: "L'IA ne remplace pas les RH mais les augmente : un DRH assiste par l'IA peut gerer plus de collaborateurs avec une meilleure qualite."
        },
      ],
    },
    {
      number: 2,
      title: "Recrutement Augmente par l'IA",
      description: "Optimiser chaque etape du recrutement avec l'intelligence artificielle.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Recrutement a l'Ere de l'IA" },
        { type: "paragraph", content: "Le recrutement est le domaine RH le plus impacte par l'IA. De la redaction de l'offre d'emploi a la selection finale, chaque etape peut etre optimisee. Les entreprises qui utilisent l'IA recrutent en moyenne 40% plus vite et 25% moins cher." },
        { type: "subheading", content: "Redaction des Offres d'Emploi" },
        { type: "paragraph", content: "Les LLM generent des descriptions de poste inclusives, attractives et optimisees pour le SEO. Claude et ChatGPT peuvent adapter le ton selon la culture d'entreprise, eliminer les biais de langage gentre, et suggerer des mots-cles pertinents pour attirer les bons profils." },
        { type: "subheading", content: "Sourcing et Matching" },
        { type: "paragraph", content: "Les algorithmes de matching IA croisent les competences des candidats avec les exigences du poste. Des outils comme LinkedIn Recruiter AI, HireVue et Eightfold utilisent le NLP et le ML pour identifier les meilleurs profils, meme ceux qui ne cherchent pas activement." },
        { type: "subheading", content: "Chatbots de Recrutement" },
        { type: "paragraph", content: "Les chatbots RH repondent 24/7 aux questions des candidats, planifient les entretiens, et collectent les informations preliminaires. Ils ameliorent l'experience candidat tout en reduisant la charge des recruteurs de 30 a 50%." },
        { type: "prompt-example", prompt: "Redige une offre d'emploi pour un Data Analyst junior dans une startup fintech a Paris. Ton decontracte, inclusif, sans biais de genre. Inclus les competences techniques, les soft skills, et les avantages.", result: "Data Analyst Junior — Rejoins notre aventure fintech !\n\nTu es passionne(e) par les donnees et tu veux avoir un impact reel ? Rejoins notre equipe de 15 personnes qui revolutionne le paiement en France.\n\nCe que tu feras :\n- Analyser les donnees de transactions pour identifier les tendances\n- Creer des dashboards avec Metabase/Looker\n- Collaborer avec l'equipe produit pour piloter les decisions\n\nCompetences : SQL, Python (pandas), outils de dataviz\nSoft skills : curiosite, rigueur, communication\n\nAvantages : RTT, teletravail 3j/sem, MacBook Pro, budget formation" },
        { type: "video", videoId: "bCs4MN4MNIU", label: "Le recrutement augmente par l'IA" },
        { type: "diagram", label: "Le Funnel de Recrutement Augmente", flow: "vertical", nodes: [
          { label: "Offre d'emploi IA", sub: "Redaction inclusive et optimisee", color: "blue" },
          { label: "Sourcing IA", sub: "Matching candidats-poste automatique", color: "purple" },
          { label: "Chatbot pre-screening", sub: "Questions et planification 24/7", color: "emerald" },
          { label: "Entretien assiste", sub: "Questions suggerees, prise de notes IA", color: "amber" },
          { label: "Decision", sub: "Score composite, pas de remplacement humain", color: "pink" },
        ]},
        { type: "summary", items: [
          "L'IA accelere le recrutement de 40% en moyenne",
          "Les LLM generent des offres inclusives et attractives",
          "Le matching IA identifie les meilleurs candidats automatiquement",
          "Les chatbots reduisent la charge des recruteurs de 30-50%",
          "La decision finale reste toujours humaine"
        ]},
      ],
      quiz: [
        {
          question: "De combien l'IA accelere-t-elle le recrutement en moyenne ?",
          options: ["10%", "25%", "40%", "75%"],
          correctIndex: 2,
          explanation: "Les entreprises utilisant l'IA dans le recrutement observent une acceleration de 40% en moyenne du processus de recrutement."
        },
        {
          question: "Quel est l'avantage principal des chatbots de recrutement ?",
          options: ["Ils remplacent les recruteurs", "Ils repondent 24/7 et reduisent la charge de 30-50%", "Ils prennent les decisions d'embauche", "Ils sont gratuits"],
          correctIndex: 1,
          explanation: "Les chatbots de recrutement repondent aux candidats 24/7, planifient les entretiens et reduisent la charge des recruteurs de 30 a 50%."
        },
        {
          question: "Comment l'IA aide-t-elle a rediger des offres d'emploi ?",
          options: ["Elle copie les offres concurrentes", "Elle genere des textes inclusifs, sans biais de genre, optimises SEO", "Elle traduit les offres en anglais", "Elle fixe le salaire automatiquement"],
          correctIndex: 1,
          explanation: "Les LLM generent des descriptions de poste inclusives, eliminent les biais de langage gentre, et optimisent le texte pour attirer les bons profils."
        },
        {
          question: "Qui prend la decision finale d'embauche dans un recrutement augmente par l'IA ?",
          options: ["L'algorithme", "Le chatbot", "Le manager humain", "Le candidat"],
          correctIndex: 2,
          explanation: "Dans un recrutement augmente par l'IA, la decision finale d'embauche reste toujours humaine. L'IA assiste et optimise, mais ne decide pas."
        },
      ],
    },
    {
      number: 3,
      title: "Screening et Evaluation des Candidats",
      description: "Utiliser l'IA pour evaluer les competences et le potentiel des candidats.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Screening Augmente par l'IA" },
        { type: "paragraph", content: "Trier 500 CV pour un poste est fastidieux et source d'erreurs. L'IA analyse les CV en quelques secondes, extrait les competences cles, et classe les candidats par pertinence. Les recruteurs se concentrent alors sur les 10-20 meilleurs profils au lieu de tout lire." },
        { type: "subheading", content: "Analyse Automatique de CV" },
        { type: "paragraph", content: "Les parseurs de CV IA extraient automatiquement : competences techniques, experience, formation, langues, certifications. Les modeles NLP vont plus loin en inferant les competences implicites et en evaluant la coherence du parcours." },
        { type: "subheading", content: "Tests de Competences IA" },
        { type: "paragraph", content: "Les plateformes comme Codility, HackerRank et TestGorilla utilisent l'IA pour creer et evaluer des tests techniques adaptatifs. Le niveau de difficulte s'ajuste en temps reel selon les reponses du candidat, offrant une evaluation plus precise et plus juste." },
        { type: "subheading", content: "Analyse Video des Entretiens" },
        { type: "paragraph", content: "Attention : l'analyse video des entretiens par l'IA (expressions faciales, ton de voix) est controversee et regulee. L'AI Act europeen classe les systemes de reconnaissance d'emotions comme a haut risque. Privilegiez les outils qui analysent le contenu des reponses, pas le non-verbal." },
        { type: "callout", content: "Alerte ethique : l'IA de screening doit etre auditee regulierement pour les biais. Un systeme entraine sur des donnees historiques peut discriminer involontairement certains profils (age, genre, origine). L'audit est une obligation legale sous l'AI Act." },
        { type: "video", videoId: "S9bAm75MJGg", label: "Screening et evaluation IA des candidats" },
        { type: "key-point", content: "L'IA de screening est un outil d'aide a la decision, jamais un decideur. Le recruteur doit toujours valider les recommandations de l'IA et garder un oeil critique sur les resultats." },
        { type: "diagram", label: "Le Pipeline de Screening IA", flow: "horizontal", nodes: [
          { label: "Parsing CV", sub: "Extraction auto des competences", color: "blue" },
          { label: "Matching", sub: "Score de pertinence candidat-poste", color: "purple" },
          { label: "Tests adaptatifs", sub: "Evaluation technique personnalisee", color: "emerald" },
          { label: "Shortlist", sub: "Top 10-20 pour entretien humain", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA trie 500 CV en secondes et identifie les meilleurs profils",
          "Les tests adaptatifs ajustent la difficulte en temps reel",
          "L'analyse video des emotions est controversee et regulee",
          "L'audit des biais est obligatoire sous l'AI Act",
          "L'IA assiste le screening, le recruteur decide"
        ]},
      ],
      quiz: [
        {
          question: "Combien de CV un recruteur doit-il typiquement trier pour un poste ?",
          options: ["10-20", "50-100", "200-500+", "1000+"],
          correctIndex: 2,
          explanation: "Un poste attractif peut recevoir 200 a 500+ candidatures. L'IA permet de trier ces CV en secondes au lieu d'heures."
        },
        {
          question: "Pourquoi l'analyse video des emotions est-elle controversee ?",
          options: ["Elle est trop chere", "Elle est classee haut risque par l'AI Act et peut etre biaisee", "Elle est trop lente", "Elle ne fonctionne pas"],
          correctIndex: 1,
          explanation: "L'AI Act europeen classe la reconnaissance d'emotions comme a haut risque. Ces systemes peuvent etre biaises et ne mesurent pas reellement les competences."
        },
        {
          question: "Que font les tests adaptatifs ?",
          options: ["Ils posent les memes questions a tous", "Ils ajustent la difficulte selon les reponses du candidat", "Ils remplacent les entretiens", "Ils evaluent uniquement le QI"],
          correctIndex: 1,
          explanation: "Les tests adaptatifs ajustent le niveau de difficulte en temps reel selon les reponses, offrant une evaluation plus precise et une meilleure experience candidat."
        },
        {
          question: "Pourquoi faut-il auditer regulierement les outils IA de screening ?",
          options: ["Pour verifier la vitesse", "Pour detecter et corriger les biais de discrimination", "Pour reduire les couts", "Pour mettre a jour l'interface"],
          correctIndex: 1,
          explanation: "Les outils IA de screening peuvent reproduire des biais presents dans les donnees historiques. L'audit regulier detecte et corrige ces discriminations."
        },
      ],
    },
    {
      number: 4,
      title: "Onboarding Automatise",
      description: "Creer des parcours d'integration personnalises et automatises avec l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'Onboarding Augmente par l'IA" },
        { type: "paragraph", content: "Un bon onboarding reduit le turnover de 82% et ameliore la productivite de 70% (Glassdoor). L'IA personnalise chaque parcours d'integration en fonction du poste, du niveau d'experience, et du style d'apprentissage du nouveau collaborateur." },
        { type: "subheading", content: "Parcours Personnalises" },
        { type: "paragraph", content: "L'IA genere un plan d'onboarding adapte : contenu de formation priorise, rencontres planifiees avec les bonnes personnes, taches progressives, et checkpoints de validation. Chaque nouveau collaborateur recoit un parcours unique qui accelere sa montee en competences." },
        { type: "subheading", content: "Chatbot Compagnon" },
        { type: "paragraph", content: "Un chatbot IA dedie aux nouveaux arrivants repond a toutes leurs questions : ou est la cafeteria, comment poser des conges, qui contacter pour le materiel informatique. Disponible 24/7, il reduit le stress des premiers jours et decharge l'equipe RH." },
        { type: "subheading", content: "Automatisation Administrative" },
        { type: "paragraph", content: "Contrats, documents a signer, acces informatiques, inscriptions aux formations obligatoires — l'IA automatise toute la paperasse de l'onboarding. Les workflows automatises envoient les bons documents au bon moment sans intervention humaine." },
        { type: "tip", content: "Le meilleur onboarding combine l'efficacite de l'IA et la chaleur humaine. Automatisez l'administratif et la logistique, mais gardez les moments cles en personne : accueil par le manager, dejeuner d'equipe, premier feedback." },
        { type: "video", videoId: "sgg3NmGzRXY", label: "Onboarding automatise avec l'IA" },
        { type: "diagram", label: "L'Onboarding IA en 4 Etapes", flow: "vertical", nodes: [
          { label: "Pre-boarding", sub: "Documents, acces, materiel automatises", color: "blue" },
          { label: "Jour 1", sub: "Accueil humain + guide IA personnalise", color: "purple" },
          { label: "Semaines 1-4", sub: "Formation adaptative + chatbot compagnon", color: "emerald" },
          { label: "Mois 1-3", sub: "Checkpoints automatiques + feedback manager", color: "amber" },
        ]},
        { type: "summary", items: [
          "Un bon onboarding reduit le turnover de 82%",
          "L'IA personnalise chaque parcours d'integration",
          "Le chatbot compagnon repond 24/7 aux questions des nouveaux",
          "L'automatisation administrative elimine la paperasse",
          "Combiner efficacite IA et chaleur humaine pour les moments cles"
        ]},
      ],
      quiz: [
        {
          question: "De combien un bon onboarding reduit-il le turnover ?",
          options: ["20%", "50%", "82%", "95%"],
          correctIndex: 2,
          explanation: "Selon Glassdoor, un bon onboarding reduit le turnover de 82% et ameliore la productivite de 70% — c'est un investissement majeur."
        },
        {
          question: "Quel est le role du chatbot compagnon en onboarding ?",
          options: ["Remplacer le manager", "Repondre 24/7 aux questions des nouveaux collaborateurs", "Evaluer la performance", "Planifier les conges"],
          correctIndex: 1,
          explanation: "Le chatbot compagnon repond aux questions pratiques des nouveaux arrivants 24/7, reduisant le stress et dechargeant l'equipe RH."
        },
        {
          question: "Que doit-on garder en humain malgre l'automatisation ?",
          options: ["La paperasse administrative", "L'accueil par le manager et les moments cles", "L'envoi des documents", "La creation des acces informatiques"],
          correctIndex: 1,
          explanation: "L'accueil par le manager, les dejeuners d'equipe et les premiers feedbacks doivent rester humains pour creer du lien et de la confiance."
        },
        {
          question: "Comment l'IA personnalise-t-elle l'onboarding ?",
          options: ["Elle donne le meme parcours a tous", "Elle adapte le contenu au poste, niveau et style d'apprentissage", "Elle accelere simplement le processus", "Elle traduit les documents"],
          correctIndex: 1,
          explanation: "L'IA genere un plan d'onboarding unique adapte au poste, au niveau d'experience, et au style d'apprentissage de chaque nouveau collaborateur."
        },
      ],
    },
    {
      number: 5,
      title: "Formation et Developpement avec l'IA",
      description: "Personnaliser la formation continue et le developpement des competences.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "La Formation Continue Augmentee" },
        { type: "paragraph", content: "La formation est le domaine RH ou l'IA apporte le plus de valeur. L'apprentissage adaptatif personnalise le contenu pour chaque collaborateur, le micro-learning s'integre dans le quotidien, et les LLM deviennent des tuteurs personnels disponibles 24/7." },
        { type: "subheading", content: "Apprentissage Adaptatif" },
        { type: "paragraph", content: "Les plateformes LMS augmentees par l'IA evaluent le niveau de chaque apprenant et adaptent le parcours en temps reel. Si un collaborateur maitrise un sujet, l'IA accelere. S'il bloque, elle propose des exercices supplementaires et des explications alternatives." },
        { type: "subheading", content: "LLM comme Tuteurs Personnels" },
        { type: "paragraph", content: "Les entreprises deploient des chatbots IA internes formes sur leurs process, outils et documentation. Un collaborateur peut poser n'importe quelle question sur les procedures internes et obtenir une reponse instantanee — sans deranger un collegue." },
        { type: "subheading", content: "Identification des Gaps de Competences" },
        { type: "paragraph", content: "L'IA analyse les competences actuelles des equipes, les compare aux besoins futurs, et identifie les gaps. Elle recommande ensuite des formations ciblees pour chaque collaborateur, optimisant le budget formation." },
        { type: "prompt-example", prompt: "Cree un plan de formation personnalise de 3 mois pour un chef de projet qui doit monter en competences sur l'IA et l'automatisation, avec du micro-learning integre dans son quotidien.", result: "Plan de Formation IA — Chef de Projet (3 mois)\n\nMois 1 — Fondamentaux IA :\n- 15 min/jour : modules LearnAI (IA de A a Z)\n- Semaine 2 : atelier ChatGPT pour la gestion de projet\n- Semaine 4 : quiz validation + certification\n\nMois 2 — Outils pratiques :\n- 15 min/jour : tutoriels Make/Zapier\n- Semaine 6 : projet pratique (automatiser un reporting)\n- Semaine 8 : presentation au manager\n\nMois 3 — Integration strategique :\n- 15 min/jour : cas d'usage IA par secteur\n- Semaine 10 : plan d'action IA pour son equipe\n- Semaine 12 : soutenance + feedback 360" },
        { type: "video", videoId: "bCs4MN4MNIU", label: "Formation et developpement avec l'IA" },
        { type: "diagram", label: "La Formation Augmentee par l'IA", flow: "horizontal", nodes: [
          { label: "Diagnostic", sub: "Evaluation des competences actuelles", color: "blue" },
          { label: "Personnalisation", sub: "Parcours adapte au profil", color: "purple" },
          { label: "Micro-learning", sub: "15 min/jour integre au quotidien", color: "emerald" },
          { label: "Suivi", sub: "Progression et ajustements en temps reel", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'apprentissage adaptatif personnalise le parcours de chaque collaborateur",
          "Les LLM deviennent des tuteurs personnels disponibles 24/7",
          "L'IA identifie les gaps de competences et recommande des formations",
          "Le micro-learning (15 min/jour) s'integre dans le quotidien",
          "Le budget formation est optimise grace au ciblage IA"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'apprentissage adaptatif ?",
          options: ["Tout le monde suit le meme cours", "Le parcours s'adapte au niveau et au rythme de chaque apprenant", "Les cours sont uniquement en video", "L'apprenant choisit ses horaires"],
          correctIndex: 1,
          explanation: "L'apprentissage adaptatif utilise l'IA pour evaluer le niveau de chaque apprenant et adapter le contenu, le rythme et les exercices en temps reel."
        },
        {
          question: "Qu'est-ce que le micro-learning ?",
          options: ["Des cours de 3 heures", "Des sessions courtes (10-15 min) integrees dans le quotidien", "Apprendre uniquement sur mobile", "Un format reserve aux debutants"],
          correctIndex: 1,
          explanation: "Le micro-learning consiste en des sessions courtes (10-15 minutes) integrees dans le quotidien, plus efficaces que les formations longues ponctuelles."
        },
        {
          question: "Comment l'IA aide-t-elle a identifier les gaps de competences ?",
          options: ["Elle demande aux employes", "Elle analyse les competences actuelles et les compare aux besoins futurs", "Elle consulte les CV", "Elle fait passer des examens"],
          correctIndex: 1,
          explanation: "L'IA analyse les competences actuelles des equipes, les compare aux besoins strategiques futurs, et identifie les gaps a combler avec des formations ciblees."
        },
        {
          question: "Quel est l'avantage d'un chatbot IA forme sur les process internes ?",
          options: ["Il est moins cher qu'un LMS", "Il repond instantanement aux questions sur les procedures internes", "Il remplace la formation", "Il est obligatoire par la loi"],
          correctIndex: 1,
          explanation: "Un chatbot IA forme sur la documentation interne repond instantanement a toute question de procedure, sans deranger un collegue et disponible 24/7."
        },
      ],
    },
    {
      number: 6,
      title: "Engagement et Retention des Talents",
      description: "Detecter les risques de depart et ameliorer l'engagement avec l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA au Service de l'Engagement" },
        { type: "paragraph", content: "Perdre un collaborateur cle coute entre 50% et 200% de son salaire annuel (recrutement, formation, perte de productivite). L'IA permet de detecter les signaux faibles de desengagement et d'agir avant qu'il ne soit trop tard." },
        { type: "subheading", content: "Analyse de Sentiment et Pulse Surveys" },
        { type: "paragraph", content: "Les pulse surveys hebdomadaires (2-3 questions rapides) sont analysees par l'IA pour detecter les tendances d'engagement. Le NLP analyse les commentaires libres pour identifier les themes recurrents : charge de travail, management, evolution de carriere." },
        { type: "subheading", content: "Prediction du Turnover" },
        { type: "paragraph", content: "Les modeles ML predisent le risque de depart de chaque collaborateur en analysant : anciennete, evolution salariale, frequence des absences, resultats des surveys, changements de manager, et comparaison avec des profils similaires qui sont partis." },
        { type: "subheading", content: "Actions de Retention Personnalisees" },
        { type: "paragraph", content: "L'IA ne se contente pas de predire — elle recommande des actions : entretien avec le manager, revue salariale, changement de projet, formation, flexibilite horaire. Chaque recommandation est adaptee au profil et aux motivations de l'individu." },
        { type: "callout", content: "Attention a l'ethique : la prediction du turnover ne doit jamais etre utilisee contre les collaborateurs (refuser une promotion parce qu'ils \"risquent de partir\"). L'objectif est d'ameliorer leur experience, pas de les surveiller." },
        { type: "video", videoId: "S9bAm75MJGg", label: "Engagement et retention avec l'IA" },
        { type: "diagram", label: "Le Cycle de Retention IA", flow: "cycle", nodes: [
          { label: "Mesurer", sub: "Pulse surveys + analyse de sentiment", color: "blue" },
          { label: "Predire", sub: "Score de risque de depart", color: "purple" },
          { label: "Agir", sub: "Actions personnalisees de retention", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Perdre un collaborateur coute 50% a 200% de son salaire annuel",
          "Les pulse surveys analysees par l'IA detectent les tendances",
          "Les modeles ML predisent le risque de depart individuel",
          "L'IA recommande des actions de retention personnalisees",
          "Ethique : l'objectif est d'ameliorer l'experience, pas de surveiller"
        ]},
      ],
      quiz: [
        {
          question: "Combien coute la perte d'un collaborateur cle ?",
          options: ["10% de son salaire", "25% de son salaire", "50% a 200% de son salaire annuel", "1 mois de salaire"],
          correctIndex: 2,
          explanation: "La perte d'un collaborateur cle coute entre 50% et 200% de son salaire annuel en recrutement, formation du remplacant et perte de productivite."
        },
        {
          question: "Qu'est-ce qu'un pulse survey ?",
          options: ["Un examen medical", "Un questionnaire court et frequent (hebdomadaire) sur l'engagement", "Un entretien annuel", "Un test de competences"],
          correctIndex: 1,
          explanation: "Les pulse surveys sont des questionnaires courts (2-3 questions) envoyes frequemment (chaque semaine) pour mesurer l'engagement en continu."
        },
        {
          question: "Quelles donnees alimentent la prediction du turnover ?",
          options: ["Uniquement le salaire", "Anciennete, absences, surveys, evolution salariale, changements de manager", "Les posts sur les reseaux sociaux", "Les evaluations academiques"],
          correctIndex: 1,
          explanation: "Les modeles de prediction du turnover analysent de multiples signaux : anciennete, absences, resultats de surveys, evolution salariale, et changements de manager."
        },
        {
          question: "Quelle est la limite ethique de la prediction du turnover ?",
          options: ["Elle est trop imprecise", "Elle ne doit pas etre utilisee contre les collaborateurs", "Elle est illegale", "Elle ne fonctionne que dans les grandes entreprises"],
          correctIndex: 1,
          explanation: "La prediction du turnover doit servir a ameliorer l'experience des collaborateurs, jamais a les penaliser (refus de promotion, surveillance)."
        },
      ],
    },
    {
      number: 7,
      title: "Administration RH Automatisee",
      description: "Automatiser les taches administratives RH avec des workflows IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Automatiser la Paperasse RH" },
        { type: "paragraph", content: "Les equipes RH passent en moyenne 40% de leur temps sur des taches administratives : gestion des conges, bulletins de paie, declarations sociales, contrats, attestations. L'IA et l'automatisation peuvent reduire ce temps de 70%, liberant les RH pour des taches strategiques." },
        { type: "subheading", content: "Gestion des Conges et Absences" },
        { type: "paragraph", content: "Les systemes IA gerent automatiquement les demandes de conges : verification du solde, validation selon les regles de l'entreprise, notification du manager, mise a jour du planning. Les chatbots permettent de poser des conges par simple message." },
        { type: "subheading", content: "Generation de Documents" },
        { type: "paragraph", content: "Contrats de travail, avenants, attestations, certificats — les LLM generent ces documents en quelques secondes a partir de templates et de donnees du SIRH. La relecture humaine reste necessaire pour les documents critiques." },
        { type: "subheading", content: "Reponses aux Questions Frequentes" },
        { type: "paragraph", content: "Un chatbot RH interne repond a 80% des questions des employes : politique de teletravail, mutuelle, tickets restaurant, procedure de note de frais. Il reduit drastiquement les sollicitations repetitives vers l'equipe RH." },
        { type: "tip", content: "Commencez par automatiser les 3 demandes les plus frequentes. En general : solde de conges, bulletin de paie, et attestation employeur. Ces automatisations ont un ROI immediat et visible." },
        { type: "video", videoId: "sgg3NmGzRXY", label: "Automatisation administrative RH" },
        { type: "diagram", label: "Les Taches RH Automatisables", flow: "horizontal", nodes: [
          { label: "Conges", sub: "Demande → validation → planning auto", color: "blue" },
          { label: "Documents", sub: "Generation automatique de contrats", color: "purple" },
          { label: "FAQ", sub: "Chatbot RH 80% des questions", color: "emerald" },
          { label: "Paie", sub: "Calculs et declarations auto", color: "amber" },
        ]},
        { type: "key-point", content: "L'objectif de l'automatisation RH n'est pas de reduire les effectifs mais de reaffecter le temps des RH vers des missions a forte valeur : strategie talents, accompagnement manageurs, culture d'entreprise." },
        { type: "summary", items: [
          "Les RH passent 40% de leur temps sur l'administratif",
          "L'automatisation peut reduire ce temps de 70%",
          "Conges, documents, FAQ et paie sont les priorites",
          "Le chatbot RH repond a 80% des questions des employes",
          "L'objectif : reaffecter le temps vers des missions strategiques"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps RH est consacre a l'administratif ?",
          options: ["10%", "25%", "40%", "60%"],
          correctIndex: 2,
          explanation: "Les equipes RH passent en moyenne 40% de leur temps sur des taches administratives repetitives."
        },
        {
          question: "Quel est le ROI le plus immediat de l'automatisation RH ?",
          options: ["La prediction du turnover", "L'automatisation des 3 demandes les plus frequentes", "Le remplacement du SIRH", "La formation en ligne"],
          correctIndex: 1,
          explanation: "Automatiser les 3 demandes les plus frequentes (conges, bulletins de paie, attestations) offre un ROI immediat et visible."
        },
        {
          question: "A combien de questions le chatbot RH peut-il repondre ?",
          options: ["20%", "50%", "80%", "100%"],
          correctIndex: 2,
          explanation: "Un chatbot RH bien configure repond a environ 80% des questions frequentes des employes, reduisant drastiquement les sollicitations vers l'equipe RH."
        },
        {
          question: "Quel est le vrai objectif de l'automatisation RH ?",
          options: ["Reduire les effectifs RH", "Reaffecter le temps vers des missions strategiques", "Supprimer les RH", "Economiser sur les logiciels"],
          correctIndex: 1,
          explanation: "L'objectif n'est pas de reduire les effectifs mais de liberer les RH pour des missions a forte valeur : strategie talents, accompagnement, culture."
        },
      ],
    },
    {
      number: 8,
      title: "People Analytics",
      description: "Exploiter les donnees RH pour prendre des decisions strategiques eclairees.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "People Analytics : Les Donnees au Service des RH" },
        { type: "paragraph", content: "Le people analytics utilise les donnees RH pour prendre des decisions basees sur des faits plutot que sur l'intuition. Taux de turnover, engagement, performance, diversite, equity salariale — chaque indicateur peut etre mesure, analyse et predit." },
        { type: "subheading", content: "Les KPIs RH Essentiels" },
        { type: "paragraph", content: "Turnover rate, time-to-hire, cost-per-hire, employee NPS (eNPS), taux d'absenteisme, ratio de diversite, equity salariale, taux de promotion interne, score d'engagement, et ROI de la formation. Ces KPIs forment le tableau de bord du DRH data-driven." },
        { type: "subheading", content: "L'IA dans le People Analytics" },
        { type: "paragraph", content: "L'IA va au-dela des dashboards descriptifs. Elle predit le turnover, identifie les hauts potentiels, detecte les inequites salariales, optimise la planification des effectifs, et recommande des actions personnalisees pour chaque manager et collaborateur." },
        { type: "subheading", content: "Construire un Dashboard RH" },
        { type: "paragraph", content: "Les outils modernes comme Looker, Power BI et Metabase permettent de creer des dashboards RH interactifs. L'IA peut generer automatiquement des insights et des recommandations a partir des donnees affichees." },
        { type: "prompt-example", prompt: "Analyse ces KPIs RH et identifie les 3 problemes prioritaires :\n- Turnover : 22% (industrie : 15%)\n- Time-to-hire : 45 jours (cible : 30)\n- eNPS : 12 (bon : >30)\n- Absenteisme : 8% (norme : 5%)\n- Diversite genre management : 28% femmes", result: "3 Problemes Prioritaires :\n\n1. TURNOVER CRITIQUE (22% vs 15%) — Perte de talents et couts eleves. Action : pulse surveys immediate + entretiens de retention avec les profils a risque.\n\n2. ENGAGEMENT BAS (eNPS 12) — Correle au turnover. Action : diagnostic par equipe pour identifier les managers/equipes en difficulte.\n\n3. ABSENTEISME ELEVE (8% vs 5%) — Signal de mal-etre. Action : analyse par departement + entretiens de retour d'absence systematiques.\n\nNote : le time-to-hire et la diversite sont importants mais le turnover et l'engagement sont les urgences." },
        { type: "video", videoId: "bCs4MN4MNIU", label: "People analytics et dashboards RH" },
        { type: "diagram", label: "Les 4 Niveaux du People Analytics", flow: "vertical", nodes: [
          { label: "Descriptif", sub: "Que s'est-il passe ? (dashboards)", color: "blue" },
          { label: "Diagnostic", sub: "Pourquoi ? (analyse de correlations)", color: "purple" },
          { label: "Predictif", sub: "Que va-t-il se passer ? (ML)", color: "emerald" },
          { label: "Prescriptif", sub: "Que faire ? (recommandations IA)", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le people analytics remplace l'intuition par les donnees",
          "KPIs essentiels : turnover, eNPS, time-to-hire, diversite, absenteisme",
          "L'IA predit, identifie les hauts potentiels et recommande des actions",
          "4 niveaux : descriptif, diagnostic, predictif, prescriptif",
          "Les dashboards RH rendent les donnees actionnables"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le people analytics ?",
          options: ["Un logiciel RH", "L'utilisation des donnees RH pour des decisions basees sur les faits", "Un type d'entretien", "Une methode de recrutement"],
          correctIndex: 1,
          explanation: "Le people analytics utilise les donnees RH pour prendre des decisions strategiques basees sur des faits plutot que sur l'intuition."
        },
        {
          question: "Que mesure l'eNPS ?",
          options: ["La productivite", "L'engagement des employes", "Le chiffre d'affaires", "Le nombre de recrutements"],
          correctIndex: 1,
          explanation: "L'eNPS (employee Net Promoter Score) mesure l'engagement et la satisfaction des employes a travers une question simple : recommanderiez-vous votre entreprise ?"
        },
        {
          question: "Quel est le niveau le plus avance du people analytics ?",
          options: ["Descriptif", "Diagnostic", "Predictif", "Prescriptif"],
          correctIndex: 3,
          explanation: "Le niveau prescriptif est le plus avance : il ne se contente pas de predire, il recommande des actions concretes a prendre."
        },
        {
          question: "Quel outil permet de creer des dashboards RH interactifs ?",
          options: ["Excel uniquement", "Looker, Power BI ou Metabase", "Un chatbot", "Le SIRH uniquement"],
          correctIndex: 1,
          explanation: "Looker, Power BI et Metabase sont des outils de BI modernes qui permettent de creer des dashboards RH interactifs et visuels."
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
        { type: "paragraph", content: "L'utilisation de l'IA en RH est encadree par un arsenal juridique croissant : RGPD, AI Act europeen, Code du travail, et jurisprudence emergente. Le non-respect de ces regles expose a des sanctions lourdes et a des risques de reputation." },
        { type: "subheading", content: "RGPD et Donnees RH" },
        { type: "paragraph", content: "Les donnees RH sont des donnees personnelles protegees par le RGPD. Consentement, finalite, minimisation, droit d'acces, droit a l'oubli — chaque traitement IA doit respecter ces principes. L'analyse des emails ou de la navigation des employes est strictement encadree." },
        { type: "subheading", content: "AI Act et Recrutement" },
        { type: "paragraph", content: "L'AI Act classe les systemes IA de recrutement et de gestion RH comme a \"haut risque\". Obligations : transparence (informer que l'IA est utilisee), explicabilite (pouvoir expliquer les decisions), audit regulier des biais, documentation technique complete, et supervision humaine." },
        { type: "subheading", content: "Non-Discrimination et IA" },
        { type: "paragraph", content: "Un algorithme de recrutement qui discrimine (meme involontairement) expose l'entreprise a des poursuites. Les criteres proteges : genre, age, origine, handicap, religion, orientation sexuelle. L'audit des biais est une obligation legale, pas une option." },
        { type: "heading", content: "Bonnes Pratiques Juridiques" },
        { type: "paragraph", content: "Informer les candidats et employes de l'utilisation de l'IA. Documenter les decisions. Maintenir une supervision humaine pour toute decision significative. Auditer regulierement les algorithmes. Designez un referent IA au sein de l'equipe juridique." },
        { type: "callout", content: "Sanctions RGPD : jusqu'a 20 millions d'euros ou 4% du CA mondial. Sanctions AI Act : jusqu'a 35 millions d'euros ou 7% du CA mondial. Le cout de la conformite est infiniment inferieur au cout de la non-conformite." },
        { type: "video", videoId: "S9bAm75MJGg", label: "Droit du travail et IA en RH" },
        { type: "diagram", label: "Le Cadre Juridique de l'IA en RH", flow: "horizontal", nodes: [
          { label: "RGPD", sub: "Protection des donnees personnelles", color: "blue" },
          { label: "AI Act", sub: "Obligations pour systemes haut risque", color: "purple" },
          { label: "Code du travail", sub: "Non-discrimination, information CSE", color: "emerald" },
          { label: "Jurisprudence", sub: "Decisions de justice emergentes", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA en RH est classee \"haut risque\" par l'AI Act",
          "RGPD : consentement, minimisation, droit d'acces pour les donnees RH",
          "L'audit des biais est une obligation legale",
          "Sanctions : jusqu'a 35M EUR ou 7% du CA mondial",
          "Supervision humaine obligatoire pour les decisions significatives"
        ]},
      ],
      quiz: [
        {
          question: "Comment l'AI Act classe-t-il les systemes IA de recrutement ?",
          options: ["Risque minimal", "Risque limite", "Haut risque", "Risque inacceptable"],
          correctIndex: 2,
          explanation: "L'AI Act europeen classe les systemes IA de recrutement et de gestion RH comme a \"haut risque\", imposant des obligations strictes."
        },
        {
          question: "Quelle sanction maximale prevoit l'AI Act ?",
          options: ["1 million d'euros", "10 millions d'euros", "35 millions d'euros ou 7% du CA", "Aucune sanction financiere"],
          correctIndex: 2,
          explanation: "L'AI Act prevoit des sanctions allant jusqu'a 35 millions d'euros ou 7% du chiffre d'affaires mondial — des montants dissuasifs."
        },
        {
          question: "L'audit des biais en IA RH est-il obligatoire ?",
          options: ["Non, c'est optionnel", "Oui, c'est une obligation legale", "Seulement pour les grandes entreprises", "Seulement pour le recrutement"],
          correctIndex: 1,
          explanation: "L'audit regulier des biais est une obligation legale sous l'AI Act pour tous les systemes IA a haut risque, y compris ceux utilises en RH."
        },
        {
          question: "Quelle bonne pratique est essentielle pour l'IA en RH ?",
          options: ["Ne pas informer les candidats pour eviter les biais", "Maintenir une supervision humaine pour toute decision significative", "Utiliser l'IA pour toutes les decisions sans exception", "Minimiser la documentation"],
          correctIndex: 1,
          explanation: "La supervision humaine est obligatoire pour toute decision significative (embauche, licenciement, promotion) meme quand l'IA assiste le processus."
        },
      ],
    },
    {
      number: 10,
      title: "Strategie RH Augmentee",
      description: "Construire une strategie RH integrant l'IA de maniere ethique et efficace.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Construire sa Strategie RH Augmentee" },
        { type: "paragraph", content: "Adopter l'IA en RH ne se fait pas du jour au lendemain. Il faut une strategie claire, un plan de deploiement progressif, et une attention constante a l'ethique et au cadre juridique. Ce chapitre vous guide dans la construction de votre feuille de route." },
        { type: "subheading", content: "Phase 1 : Audit et Quick Wins (Mois 1-3)" },
        { type: "paragraph", content: "Identifiez les processus RH les plus chronophages et les plus automatisables. Commencez par les quick wins : chatbot FAQ, generation de documents, tri de CV. Mesurez le temps gagne et le ROI pour justifier les investissements suivants." },
        { type: "subheading", content: "Phase 2 : Fondations (Mois 3-6)" },
        { type: "paragraph", content: "Mettez en place l'infrastructure : SIRH compatible IA, donnees propres et centralisees, politique de gouvernance des donnees, formation des equipes RH aux outils IA. Sans donnees de qualite, aucun outil IA ne fonctionnera correctement." },
        { type: "subheading", content: "Phase 3 : Deploiement (Mois 6-12)" },
        { type: "paragraph", content: "Deployez les solutions a fort impact : recrutement augmente, onboarding personnalise, people analytics, prediction du turnover. Mesurez chaque initiative avec des KPIs clairs et iterez en fonction des resultats." },
        { type: "subheading", content: "Phase 4 : Excellence (Annee 2+)" },
        { type: "paragraph", content: "Optimisez et innovez : IA prescriptive, workforce planning predictif, experience collaborateur ultra-personnalisee. Partagez les resultats avec la direction pour ancrer l'IA comme pilier strategique des RH." },
        { type: "prompt-example", prompt: "Tu es un consultant en transformation RH. Cree une feuille de route sur 12 mois pour une PME de 200 employes qui veut integrer l'IA dans ses RH, avec un budget limite.", result: "Feuille de Route IA RH — PME 200 employes\n\nMois 1-3 — Quick Wins (budget : 500 EUR/mois) :\n- Chatbot FAQ RH avec ChatGPT Teams\n- Generation de fiches de poste avec Claude\n- Templates de contrats IA\nROI attendu : 15h/semaine economisees\n\nMois 3-6 — Fondations (budget : 1500 EUR/mois) :\n- SIRH cloud (Lucca ou PayFit)\n- Centralisation des donnees RH\n- Formation equipe RH (2 jours)\nROI attendu : donnees propres + equipe formee\n\nMois 6-12 — Impact (budget : 2500 EUR/mois) :\n- ATS avec tri IA (Recruitee ou Workable)\n- Dashboard people analytics (Metabase)\n- Pulse surveys automatisees\nROI attendu : -30% time-to-hire, +15 eNPS" },
        { type: "video", videoId: "sgg3NmGzRXY", label: "Construire sa strategie RH augmentee" },
        { type: "key-point", content: "La cle du succes n'est pas la technologie — c'est la conduite du changement. Impliquez les equipes RH des le depart, formez-les, et celebrez les quick wins pour creer l'adhesion." },
        { type: "diagram", label: "La Feuille de Route IA RH", flow: "vertical", nodes: [
          { label: "Phase 1 : Quick Wins", sub: "Mois 1-3 — Chatbot, documents, tri CV", color: "blue" },
          { label: "Phase 2 : Fondations", sub: "Mois 3-6 — SIRH, donnees, formation", color: "purple" },
          { label: "Phase 3 : Deploiement", sub: "Mois 6-12 — Recrutement, analytics, retention", color: "emerald" },
          { label: "Phase 4 : Excellence", sub: "Annee 2+ — IA prescriptive, innovation", color: "amber" },
        ]},
        { type: "summary", items: [
          "Strategie progressive en 4 phases sur 12+ mois",
          "Commencez par les quick wins pour prouver le ROI",
          "Donnees propres et centralisees = prerequis indispensable",
          "La conduite du changement est plus importante que la technologie",
          "Mesurez chaque initiative avec des KPIs clairs"
        ]},
      ],
      quiz: [
        {
          question: "Par quoi faut-il commencer pour integrer l'IA en RH ?",
          options: ["Acheter un SIRH complet", "Par les quick wins pour prouver le ROI", "Par la prediction du turnover", "Par le remplacement des recruteurs"],
          correctIndex: 1,
          explanation: "Commencez par les quick wins (chatbot FAQ, generation de documents, tri de CV) pour prouver le ROI et creer l'adhesion avant d'investir davantage."
        },
        {
          question: "Quel est le prerequis indispensable pour l'IA en RH ?",
          options: ["Un budget illimite", "Des donnees propres et centralisees", "Un data scientist dedie", "Un accord syndical"],
          correctIndex: 1,
          explanation: "Sans donnees propres et centralisees, aucun outil IA ne fonctionnera correctement. La qualite des donnees est le fondement de tout projet IA."
        },
        {
          question: "Quelle est la cle du succes de l'IA en RH ?",
          options: ["La technologie la plus avancee", "La conduite du changement et l'implication des equipes", "Le budget le plus eleve", "Le SIRH le plus complet"],
          correctIndex: 1,
          explanation: "La conduite du changement est plus importante que la technologie. Impliquez les equipes, formez-les, et celebrez les quick wins."
        },
        {
          question: "Combien de temps faut-il pour une strategie IA RH complete ?",
          options: ["1 mois", "3 mois", "12+ mois en 4 phases progressives", "3 ans minimum"],
          correctIndex: 2,
          explanation: "Une strategie IA RH complete se deploie sur 12+ mois en 4 phases progressives : quick wins, fondations, deploiement, excellence."
        },
      ],
    },
  ],
};

export default content;
