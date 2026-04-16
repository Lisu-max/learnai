import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-au-quotidien",
  chapters: [
    {
      number: 1,
      title: "Bienvenue dans l'Ere de l'IA",
      description: "Comprendre pourquoi l'IA change notre quotidien et comment en tirer parti des aujourd'hui.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "Bienvenue dans l'Ere de l'IA" },
        { type: "paragraph", content: "En 2026, l'intelligence artificielle n'est plus reservee aux experts ou aux grandes entreprises. Elle est dans votre poche, sur votre ordinateur, dans vos applications preferees. Chaque jour, des millions de personnes utilisent l'IA pour gagner du temps, mieux communiquer et etre plus productifs." },
        { type: "paragraph", content: "Ce cours va vous montrer comment utiliser concretement l'IA dans votre vie de tous les jours. Pas de theorie abstraite — des cas pratiques, des outils reels et des methodes eprouvees pour devenir efficace avec l'IA." },
        { type: "callout", content: "Selon une etude McKinsey de 2025, les professionnels qui utilisent l'IA au quotidien gagnent en moyenne 3 heures par semaine — soit plus de 150 heures par an." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "L'IA au quotidien : introduction" },
        { type: "heading", content: "Pourquoi l'IA Change Tout" },
        { type: "paragraph", content: "L'IA generative a democratise l'acces a des capacites qui etaient auparavant reservees a des specialistes : rediger un texte professionnel, analyser un document, traduire instantanement, creer des visuels, organiser des informations complexes. Aujourd'hui, un outil comme ChatGPT ou Claude peut vous aider dans presque toutes ces taches." },
        { type: "paragraph", content: "La cle n'est pas de tout automatiser, mais de savoir quand et comment utiliser l'IA pour amplifier vos competences existantes. L'IA est un multiplicateur de force — elle rend les bons encore meilleurs." },
        { type: "key-point", content: "L'IA ne remplace pas votre expertise — elle l'amplifie. Votre valeur ajoutee reste dans votre jugement, votre creativite et votre connaissance du contexte." },
        { type: "diagram", label: "Les 3 Piliers de l'IA au Quotidien", flow: "horizontal", nodes: [
          { label: "Productivite", sub: "Gagner du temps sur les taches repetitives", color: "amber" },
          { label: "Communication", sub: "Mieux rediger, traduire, synthetiser", color: "blue" },
          { label: "Creativite", sub: "Generer des idees et du contenu", color: "emerald" },
        ]},
        { type: "tip", content: "Vous n'avez besoin d'aucune competence technique. Si vous savez ecrire un message, vous savez utiliser l'IA." },
        { type: "summary", items: [
          "L'IA est accessible a tous en 2026 — pas besoin d'etre expert",
          "Les utilisateurs d'IA gagnent en moyenne 3 heures par semaine",
          "L'IA amplifie vos competences, elle ne les remplace pas",
          "Ce cours se concentre sur des cas pratiques du quotidien",
          "Aucune competence technique requise pour commencer"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'heures par semaine gagnent en moyenne les professionnels utilisant l'IA ?",
          options: ["1 heure", "3 heures", "5 heures", "10 heures"],
          correctIndex: 1,
          explanation: "Selon les etudes recentes, les professionnels qui integrent l'IA dans leur quotidien gagnent en moyenne 3 heures par semaine, soit plus de 150 heures par an."
        },
        {
          question: "Quel est le meilleur role de l'IA dans votre quotidien ?",
          options: ["Remplacer completement votre travail", "Amplifier vos competences existantes", "Prendre des decisions a votre place", "Eliminer le besoin de reflexion"],
          correctIndex: 1,
          explanation: "L'IA est un multiplicateur de force qui amplifie vos competences existantes. Votre jugement et votre expertise restent essentiels."
        },
        {
          question: "Faut-il etre un expert technique pour utiliser l'IA au quotidien ?",
          options: ["Oui, il faut savoir programmer", "Oui, il faut un diplome en informatique", "Non, il suffit de savoir ecrire un message", "Oui, il faut comprendre le machine learning"],
          correctIndex: 2,
          explanation: "Les outils IA modernes sont concus pour etre utilises en langage naturel. Si vous savez ecrire un message, vous savez utiliser l'IA."
        },
        {
          question: "Qu'est-ce qui a democratise l'IA aupres du grand public ?",
          options: ["Les robots industriels", "L'IA generative et les chatbots comme ChatGPT", "Les voitures autonomes", "Les algorithmes de trading"],
          correctIndex: 1,
          explanation: "L'IA generative, avec des outils comme ChatGPT et Claude, a rendu l'IA accessible a tous en permettant d'interagir en langage naturel."
        },
      ],
    },
    {
      number: 2,
      title: "Rediger des Emails et Messages avec l'IA",
      description: "Apprendre a utiliser l'IA pour rediger des emails professionnels, messages et courriers impeccables.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA, Votre Assistant de Redaction" },
        { type: "paragraph", content: "La redaction d'emails et de messages represente en moyenne 28% du temps de travail d'un professionnel. L'IA peut reduire ce temps de 60 a 80% tout en ameliorant la qualite de vos ecrits. Que ce soit un email formel a un client, un message rapide a un collegue ou une lettre de motivation, l'IA vous aide a trouver les bons mots." },
        { type: "paragraph", content: "Les outils comme ChatGPT et Claude excellent dans la redaction assistee. Ils peuvent adapter le ton (formel, amical, diplomatique), corriger la grammaire, restructurer vos idees et meme suggerer des formulations plus percutantes." },
        { type: "heading", content: "Rediger un Email Professionnel" },
        { type: "prompt-example", content: "Redige un email professionnel a mon client M. Dupont pour lui annoncer un retard de 2 semaines sur le projet de refonte du site web. Ton : diplomatique et rassurant. Propose une solution concrete (appel cette semaine pour replanifier). Signe : Marie, Chef de projet." },
        { type: "paragraph", content: "Remarquez la structure du prompt : contexte (qui, quoi), ton souhaite, elements a inclure, et signature. Plus votre prompt est precis, meilleur sera le resultat." },
        { type: "heading", content: "Adapter le Ton et le Style" },
        { type: "paragraph", content: "L'IA peut adapter le meme message a differents contextes. Un email de relance peut etre formule de maniere douce, ferme ou urgente selon la situation. Vous pouvez aussi demander a l'IA de reformuler un message que vous trouvez trop agressif ou trop passif." },
        { type: "tip", content: "Astuce : copiez-collez un email que vous avez recu et demandez a l'IA de vous aider a y repondre. C'est souvent plus rapide que de partir de zero." },
        { type: "key-point", content: "Relisez toujours le texte genere par l'IA avant de l'envoyer. Verifiez les faits, les noms, les dates et ajustez le ton a votre style personnel." },
        { type: "diagram", label: "Workflow de Redaction avec l'IA", flow: "horizontal", nodes: [
          { label: "Briefer l'IA", sub: "Contexte, ton, elements cles", color: "blue" },
          { label: "Generer le brouillon", sub: "L'IA produit une premiere version", color: "purple" },
          { label: "Relire et ajuster", sub: "Personnaliser et verifier", color: "emerald" },
          { label: "Envoyer", sub: "Message professionnel et efficace", color: "amber" },
        ]},
        { type: "summary", items: [
          "La redaction represente 28% du temps de travail — l'IA la reduit de 60-80%",
          "Structurez vos prompts : contexte, ton, elements cles, signature",
          "L'IA peut adapter le ton : formel, amical, diplomatique, urgent",
          "Relisez toujours avant d'envoyer — verifiez faits, noms et dates",
          "Astuce : collez un email recu et demandez de l'aide pour repondre"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps de travail est consacre a la redaction d'emails ?",
          options: ["10%", "28%", "50%", "75%"],
          correctIndex: 1,
          explanation: "En moyenne, 28% du temps de travail est consacre a la redaction d'emails et de messages. L'IA peut considérablement reduire ce temps."
        },
        {
          question: "Que faut-il toujours faire apres que l'IA a genere un email ?",
          options: ["L'envoyer immediatement", "Le supprimer et recommencer", "Le relire et verifier les faits, noms et dates", "Demander une deuxieme version"],
          correctIndex: 2,
          explanation: "Il faut toujours relire le texte genere, verifier les faits, les noms, les dates et ajuster le ton avant d'envoyer."
        },
        {
          question: "Pour obtenir un bon email de l'IA, votre prompt doit inclure :",
          options: ["Juste le sujet de l'email", "Le contexte, le ton souhaite et les elements cles", "Uniquement le nom du destinataire", "Le texte complet que vous voulez"],
          correctIndex: 1,
          explanation: "Un bon prompt de redaction inclut le contexte (qui, quoi), le ton souhaite, les elements cles a inclure et eventuellement la signature."
        },
        {
          question: "L'IA peut-elle adapter le ton d'un meme message ?",
          options: ["Non, elle produit toujours le meme ton", "Oui, elle peut passer de formel a amical, diplomatique ou urgent", "Seulement en anglais", "Uniquement pour les emails courts"],
          correctIndex: 1,
          explanation: "L'IA peut adapter le meme message a differents tons : formel, amical, diplomatique, urgent, etc. selon vos instructions."
        },
      ],
    },
    {
      number: 3,
      title: "Rechercher Efficacement avec l'IA",
      description: "Transformer vos recherches d'information grace a l'IA conversationnelle et les moteurs augmentes.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Recherche Reinventee par l'IA" },
        { type: "paragraph", content: "Google vous donne des liens. L'IA vous donne des reponses. C'est la difference fondamentale. Au lieu de parcourir 10 pages de resultats pour trouver l'information, vous posez une question et obtenez une reponse synthetisee, contextualisee et sourcee." },
        { type: "paragraph", content: "Des outils comme Perplexity AI, ChatGPT avec navigation web et Claude combinent la puissance des LLM avec l'acces en temps reel a Internet. Ils analysent des dizaines de sources et vous fournissent une synthese structuree." },
        { type: "heading", content: "Les Outils de Recherche IA" },
        { type: "subheading", content: "Perplexity AI" },
        { type: "paragraph", content: "Perplexity est le moteur de recherche IA par excellence. Il cite ses sources, fournit des reponses detaillees et permet de poser des questions de suivi. Ideal pour la recherche factuelle, la veille et l'exploration de sujets complexes." },
        { type: "subheading", content: "ChatGPT et Claude avec Navigation Web" },
        { type: "paragraph", content: "ChatGPT et Claude peuvent naviguer sur le web en temps reel. Ils sont particulierement utiles quand vous avez besoin d'une analyse plus approfondie ou d'une synthese de plusieurs sources contradictoires." },
        { type: "prompt-example", content: "Je cherche les meilleures pratiques pour le teletravail en 2026. Compare les recommandations de 3 sources differentes (etudes, articles d'experts, retours d'entreprises). Presente les points communs et les divergences dans un tableau." },
        { type: "key-point", content: "Verifiez toujours les informations critiques. L'IA peut halluciner des faits ou des sources. Croisez les informations pour les decisions importantes." },
        { type: "diagram", label: "Recherche Classique vs Recherche IA", flow: "horizontal", nodes: [
          { label: "Google classique", sub: "10 liens bleus a trier manuellement", color: "blue" },
          { label: "Perplexity / IA", sub: "Reponse synthetisee avec sources", color: "emerald" },
          { label: "ChatGPT / Claude", sub: "Analyse approfondie et contextuelle", color: "purple" },
        ]},
        { type: "summary", items: [
          "L'IA donne des reponses synthetisees, pas juste des liens",
          "Perplexity AI excelle dans la recherche factuelle sourcee",
          "ChatGPT et Claude offrent des analyses plus approfondies",
          "Toujours verifier les informations critiques — l'IA peut halluciner",
          "Les questions de suivi permettent d'approfondir un sujet"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la difference principale entre Google et une recherche IA ?",
          options: ["Google est plus rapide", "L'IA donne des reponses synthetisees au lieu de liens", "Google est plus precis", "Il n'y a aucune difference"],
          correctIndex: 1,
          explanation: "Google fournit des liens a explorer. L'IA synthetise l'information de multiples sources et fournit directement une reponse structuree."
        },
        {
          question: "Quel outil est specialise dans la recherche IA avec citations de sources ?",
          options: ["Midjourney", "Suno", "Perplexity AI", "ElevenLabs"],
          correctIndex: 2,
          explanation: "Perplexity AI est un moteur de recherche IA qui cite systematiquement ses sources et fournit des reponses detaillees et sourcees."
        },
        {
          question: "Pourquoi faut-il verifier les informations fournies par l'IA ?",
          options: ["Parce que l'IA est toujours fausse", "Parce que l'IA peut halluciner des faits ou des sources", "Parce que l'IA est lente", "Parce que Google est plus fiable"],
          correctIndex: 1,
          explanation: "L'IA peut parfois generer des informations fausses (hallucinations). Il est essentiel de croiser les sources pour les informations critiques."
        },
        {
          question: "Quand utiliser ChatGPT/Claude plutot que Perplexity pour une recherche ?",
          options: ["Pour une recherche rapide", "Pour une analyse approfondie de sources contradictoires", "Pour trouver un site web", "Jamais, Perplexity est toujours meilleur"],
          correctIndex: 1,
          explanation: "ChatGPT et Claude sont plus adaptes quand vous avez besoin d'une analyse approfondie, d'une synthese de sources contradictoires ou d'un raisonnement complexe."
        },
      ],
    },
    {
      number: 4,
      title: "Resumer des Documents en Quelques Secondes",
      description: "Apprendre a resumer des articles, rapports, livres et videos grace a l'IA.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "L'Art du Resume avec l'IA" },
        { type: "paragraph", content: "Nous sommes submerges d'informations. Articles, rapports, emails, notes de reunion, videos — le volume d'information a traiter ne cesse d'augmenter. L'IA peut resumer un document de 50 pages en 5 points cles en quelques secondes." },
        { type: "paragraph", content: "Les modeles comme Claude 4.6 avec son contexte d'1 million de tokens peuvent analyser des documents entiers — livres, rapports annuels, contrats juridiques — et en extraire l'essentiel selon vos besoins specifiques." },
        { type: "heading", content: "Techniques de Resume" },
        { type: "prompt-example", content: "Resume ce rapport en 5 points cles. Pour chaque point, donne : le fait principal, pourquoi c'est important, et l'action recommandee. Format : bullet points. Public : directeur commercial qui a 2 minutes." },
        { type: "paragraph", content: "La cle d'un bon resume IA est de preciser : le format souhaite (bullet points, paragraphe, tableau), le public cible (expert, debutant, decideur), la longueur et les aspects a privilegier." },
        { type: "subheading", content: "Resumer des Videos" },
        { type: "paragraph", content: "Des outils comme YouTube Summary avec ChatGPT, Eightify ou NotebookLM de Google peuvent resumer des heures de video en quelques minutes. Collez simplement le lien de la video et obtenez un resume structure avec les moments cles." },
        { type: "tip", content: "Pour les longs documents, demandez d'abord un resume executif, puis approfondissez les sections qui vous interessent avec des questions de suivi." },
        { type: "key-point", content: "Adaptez le niveau de detail a votre besoin : un resume pour un decideur est different d'un resume pour un expert technique." },
        { type: "diagram", label: "Types de Resumes IA", flow: "horizontal", nodes: [
          { label: "Resume executif", sub: "5 points cles pour decideurs", color: "amber" },
          { label: "Resume detaille", sub: "Section par section avec nuances", color: "blue" },
          { label: "Resume actionnable", sub: "Faits + actions recommandees", color: "emerald" },
        ]},
        { type: "summary", items: [
          "L'IA peut resumer un document de 50 pages en quelques secondes",
          "Precisez le format, le public cible et les aspects a privilegier",
          "Les videos peuvent aussi etre resumees (NotebookLM, Eightify)",
          "Commencez par un resume executif, puis approfondissez si necessaire",
          "Adaptez le niveau de detail au public : decideur vs expert"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la capacite de contexte de Claude 4.6 ?",
          options: ["32 000 tokens", "128 000 tokens", "500 000 tokens", "1 million de tokens"],
          correctIndex: 3,
          explanation: "Claude 4.6 dispose d'un contexte d'1 million de tokens, ce qui lui permet d'analyser des documents tres longs — livres entiers, rapports annuels, etc."
        },
        {
          question: "Pour obtenir un bon resume, que faut-il preciser a l'IA ?",
          options: ["Juste le document", "Le format, le public cible et les aspects a privilegier", "Uniquement la longueur souhaitee", "Le nom de l'auteur du document"],
          correctIndex: 1,
          explanation: "Un bon resume necessite de preciser le format souhaite, le public cible et les aspects a privilegier pour obtenir un resultat adapte a vos besoins."
        },
        {
          question: "Quel outil Google permet de resumer des videos et documents ?",
          options: ["Google Drive", "Google Docs", "NotebookLM", "Google Sheets"],
          correctIndex: 2,
          explanation: "NotebookLM de Google permet de resumer des videos YouTube, des documents PDF et d'autres sources en quelques clics."
        },
        {
          question: "Quelle strategie est recommandee pour les longs documents ?",
          options: ["Tout lire soi-meme d'abord", "Demander un resume executif puis approfondir avec des questions de suivi", "Demander un resume en un seul mot", "Ignorer les longs documents"],
          correctIndex: 1,
          explanation: "Pour les longs documents, commencez par un resume executif pour avoir la vue d'ensemble, puis approfondissez les sections qui vous interessent."
        },
      ],
    },
    {
      number: 5,
      title: "Traduction et Communication Multilingue",
      description: "Utiliser l'IA pour traduire, communiquer et travailler dans plusieurs langues.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "L'IA Abolit les Barrieres Linguistiques" },
        { type: "paragraph", content: "En 2026, la traduction IA a atteint un niveau de qualite remarquable. Les LLM comme GPT-5.4 et Claude 4.6 ne se contentent pas de traduire mot a mot — ils comprennent le contexte, les nuances culturelles et l'intention derriere le message." },
        { type: "paragraph", content: "Que vous ayez besoin de traduire un email professionnel, de communiquer avec un partenaire etranger ou de comprendre un document technique en anglais, l'IA fait le travail en quelques secondes avec une qualite souvent superieure aux traducteurs automatiques classiques." },
        { type: "heading", content: "Au-dela de la Traduction Simple" },
        { type: "prompt-example", content: "Traduis cet email en anglais professionnel (American English). Adapte les formules de politesse au style business americain. Garde un ton chaleureux mais professionnel. Si certaines expressions francaises n'ont pas d'equivalent direct, propose une adaptation culturelle." },
        { type: "paragraph", content: "L'IA peut aussi localiser du contenu — adapter un texte aux specificites culturelles d'un marche. Un slogan qui fonctionne en France peut necessiter une adaptation complete pour le marche americain ou japonais." },
        { type: "subheading", content: "Communication en Temps Reel" },
        { type: "paragraph", content: "Des outils comme Google Translate avec la camera, les sous-titres en temps reel dans Google Meet et les fonctions de traduction integrees dans ChatGPT permettent de communiquer en temps reel avec des personnes parlant d'autres langues." },
        { type: "callout", content: "Les LLM modernes gèrent plus de 100 langues et comprennent les nuances culturelles, les expressions idiomatiques et les registres de langue (formel, familier, technique)." },
        { type: "key-point", content: "Pour les documents critiques (contrats, textes juridiques), faites toujours relire la traduction par un locuteur natif. L'IA est excellente mais pas infaillible." },
        { type: "diagram", label: "Niveaux de Traduction IA", flow: "vertical", nodes: [
          { label: "Traduction basique", sub: "Mot a mot, sens general", color: "blue" },
          { label: "Traduction contextuelle", sub: "Nuances, ton, registre", color: "purple" },
          { label: "Localisation", sub: "Adaptation culturelle complete", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Les LLM traduisent avec contexte, nuances et adaptation culturelle",
          "Precisez le registre et le public cible pour une meilleure traduction",
          "La localisation va au-dela de la traduction : adaptation culturelle",
          "Des outils permettent la communication multilingue en temps reel",
          "Faites relire les documents critiques par un locuteur natif"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce qui differencie la traduction IA des traducteurs classiques ?",
          options: ["Elle est plus lente", "Elle comprend le contexte et les nuances culturelles", "Elle ne fonctionne qu'en anglais", "Elle traduit mot a mot"],
          correctIndex: 1,
          explanation: "Les LLM comprennent le contexte, les nuances culturelles et l'intention derriere le message, ce qui produit des traductions plus naturelles."
        },
        {
          question: "Qu'est-ce que la localisation ?",
          options: ["Trouver la position GPS d'un texte", "Adapter un contenu aux specificites culturelles d'un marche", "Traduire en langue locale uniquement", "Stocker des donnees localement"],
          correctIndex: 1,
          explanation: "La localisation va au-dela de la traduction : elle adapte le contenu aux specificites culturelles, aux expressions et aux habitudes d'un marche cible."
        },
        {
          question: "Pour quels documents faut-il faire relire la traduction IA ?",
          options: ["Les emails amicaux", "Les posts sur les reseaux sociaux", "Les contrats et textes juridiques", "Les listes de courses"],
          correctIndex: 2,
          explanation: "Pour les documents critiques comme les contrats et textes juridiques, il est essentiel de faire relire la traduction par un locuteur natif."
        },
        {
          question: "Combien de langues les LLM modernes gerent-ils environ ?",
          options: ["10 langues", "30 langues", "Plus de 100 langues", "Seulement l'anglais et le francais"],
          correctIndex: 2,
          explanation: "Les LLM modernes comme GPT-5.4 et Claude 4.6 gerent plus de 100 langues avec une comprehension des nuances et expressions idiomatiques."
        },
      ],
    },
    {
      number: 6,
      title: "Organiser sa Journee avec l'IA",
      description: "Planifier, prioriser et gerer son temps efficacement grace a l'assistance IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA comme Assistant de Planification" },
        { type: "paragraph", content: "La gestion du temps est l'un des plus grands defis du quotidien professionnel. L'IA peut vous aider a planifier votre journee, prioriser vos taches, gerer votre agenda et meme vous rappeler les echeances importantes." },
        { type: "paragraph", content: "Des outils comme ChatGPT, Claude, Notion AI et Motion utilisent l'IA pour optimiser votre emploi du temps. Ils peuvent analyser vos habitudes, identifier les periodes les plus productives et suggerer des ameliorations." },
        { type: "heading", content: "Planifier sa Journee avec un Prompt" },
        { type: "prompt-example", content: "Voici mes taches pour demain : presentation client a 14h (haute priorite), 15 emails a traiter, rapport mensuel a finir, reunion equipe a 10h, appel fournisseur. Je suis plus productif le matin. Cree un planning optimise de 8h a 18h avec des pauses. Identifie ce qui peut etre delegue ou reporte." },
        { type: "paragraph", content: "L'IA peut aussi vous aider a decomposer un gros projet en taches plus petites et a estimer le temps necessaire pour chaque etape. C'est particulierement utile pour eviter la procrastination face a des taches complexes." },
        { type: "subheading", content: "Priorisation Intelligente" },
        { type: "paragraph", content: "Demandez a l'IA de classer vos taches selon la matrice Eisenhower (urgent/important) ou la methode MoSCoW (Must, Should, Could, Won't). L'IA peut vous aider a identifier ce qui est vraiment prioritaire et ce qui peut attendre." },
        { type: "tip", content: "Chaque matin, envoyez votre liste de taches a l'IA avec votre contexte (reunions, deadlines, energie). En 30 secondes, vous avez un planning optimise." },
        { type: "diagram", label: "Matrice de Priorisation IA", flow: "horizontal", nodes: [
          { label: "Urgent + Important", sub: "Faire immediatement", color: "pink" },
          { label: "Important, pas urgent", sub: "Planifier cette semaine", color: "blue" },
          { label: "Urgent, pas important", sub: "Deleguer si possible", color: "amber" },
          { label: "Ni urgent ni important", sub: "Eliminer ou reporter", color: "emerald" },
        ]},
        { type: "key-point", content: "L'IA ne connait pas votre contexte emotionnel ou politique. Utilisez ses suggestions comme point de depart, puis ajustez selon votre realite." },
        { type: "summary", items: [
          "L'IA peut planifier votre journee en analysant vos taches et contraintes",
          "Decomposez les gros projets en taches plus petites avec l'IA",
          "Utilisez la matrice Eisenhower ou MoSCoW pour prioriser",
          "Envoyez votre liste de taches chaque matin pour un planning rapide",
          "Ajustez toujours les suggestions IA a votre contexte reel"
        ]},
      ],
      quiz: [
        {
          question: "Quelle methode de priorisation l'IA peut-elle appliquer a vos taches ?",
          options: ["La methode FIFO", "La matrice Eisenhower (urgent/important)", "L'algorithme de Dijkstra", "La methode Agile uniquement"],
          correctIndex: 1,
          explanation: "L'IA peut classer vos taches selon la matrice Eisenhower (urgent vs important) pour vous aider a identifier les vraies priorites."
        },
        {
          question: "Pourquoi faut-il donner son contexte a l'IA pour la planification ?",
          options: ["Pour qu'elle soit plus lente", "Pour qu'elle adapte le planning a vos contraintes reelles", "Ce n'est pas necessaire", "Pour impressionner ses collegues"],
          correctIndex: 1,
          explanation: "Donner son contexte (reunions, deadlines, periodes productives) permet a l'IA de creer un planning realiste et adapte a vos contraintes."
        },
        {
          question: "Comment l'IA aide-t-elle face a la procrastination ?",
          options: ["En supprimant les taches difficiles", "En decomposant les gros projets en taches plus petites", "En remettant les taches a plus tard", "En ignorant les taches complexes"],
          correctIndex: 1,
          explanation: "L'IA peut decomposer un gros projet intimidant en taches plus petites et gérables, ce qui reduit la procrastination."
        },
        {
          question: "Que signifie MoSCoW en gestion de priorites ?",
          options: ["Une ville en Russie", "Must, Should, Could, Won't", "Monday, Saturday, Cost, Outcome, Weekly", "Manage, Optimize, Schedule, Control, Overview, Win"],
          correctIndex: 1,
          explanation: "MoSCoW est une methode de priorisation : Must (doit etre fait), Should (devrait), Could (pourrait), Won't (ne sera pas fait cette fois)."
        },
      ],
    },
    {
      number: 7,
      title: "Automatiser les Taches Repetitives",
      description: "Decouvrir les outils d'automatisation IA pour eliminer les taches chronophages.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Automatisation IA : Travaillez Plus Smart" },
        { type: "paragraph", content: "Chaque professionnel passe en moyenne 4,5 heures par semaine sur des taches repetitives qui pourraient etre automatisees : copier-coller des donnees, reformater des documents, envoyer des emails de suivi, mettre a jour des tableaux. L'IA combinee aux outils d'automatisation peut eliminer la majorite de ces taches." },
        { type: "heading", content: "Les Outils d'Automatisation" },
        { type: "subheading", content: "Make (ex-Integromat) et Zapier" },
        { type: "paragraph", content: "Make et Zapier connectent vos applications entre elles sans code. Par exemple : quand un email arrive avec une piece jointe, l'IA l'analyse, extrait les informations cles, et met a jour votre CRM automatiquement. Ces plateformes integrent desormais des etapes IA (GPT, Claude) dans leurs workflows." },
        { type: "subheading", content: "N8N (Self-Hosted)" },
        { type: "paragraph", content: "N8N est une alternative open source que vous pouvez heberger vous-meme. Elle offre plus de controle et de personnalisation, et integre nativement des noeuds IA pour le traitement de texte, la classification et l'extraction de donnees." },
        { type: "subheading", content: "Les GPTs Personnalises et Claude Projects" },
        { type: "paragraph", content: "Vous pouvez creer des assistants IA sur mesure pour des taches specifiques. Un GPT personnalise pour repondre aux questions clients, un Claude Project pour analyser vos rapports mensuels — ces assistants deviennent vos employes virtuels specialises." },
        { type: "prompt-example", content: "Je recois 50 candidatures par email chaque semaine. Cree-moi un workflow d'automatisation : 1) extraire les infos cles du CV (nom, experience, competences), 2) classifier en 3 categories (prioritaire, a revoir, non qualifie), 3) envoyer un email de confirmation personnalise, 4) mettre a jour un Google Sheet." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Automatiser avec l'IA : tutoriel pratique" },
        { type: "diagram", label: "Ecosysteme d'Automatisation IA", flow: "horizontal", nodes: [
          { label: "Make / Zapier", sub: "Connecter les apps sans code", color: "purple" },
          { label: "N8N", sub: "Open source, self-hosted", color: "blue" },
          { label: "GPTs / Claude Projects", sub: "Assistants IA sur mesure", color: "emerald" },
        ]},
        { type: "key-point", content: "Commencez par automatiser UNE tache repetitive. Mesurez le temps gagne. Puis automatisez la suivante. L'automatisation progressive est plus efficace que tout automatiser d'un coup." },
        { type: "summary", items: [
          "4,5 heures/semaine perdues en taches repetitives automatisables",
          "Make et Zapier connectent vos apps et integrent des etapes IA",
          "N8N est une alternative open source pour plus de controle",
          "Les GPTs personnalises et Claude Projects creent des assistants sur mesure",
          "Automatisez progressivement : une tache a la fois"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'heures par semaine sont perdues en taches repetitives en moyenne ?",
          options: ["1 heure", "2,5 heures", "4,5 heures", "8 heures"],
          correctIndex: 2,
          explanation: "En moyenne, les professionnels passent 4,5 heures par semaine sur des taches repetitives qui pourraient etre automatisees."
        },
        {
          question: "Quelle plateforme d'automatisation est open source et self-hosted ?",
          options: ["Zapier", "Make", "N8N", "IFTTT"],
          correctIndex: 2,
          explanation: "N8N est une plateforme d'automatisation open source que vous pouvez heberger vous-meme, offrant plus de controle et de personnalisation."
        },
        {
          question: "Qu'est-ce qu'un GPT personnalise ?",
          options: ["Un processeur specialise", "Un assistant IA sur mesure pour des taches specifiques", "Un langage de programmation", "Un type de base de donnees"],
          correctIndex: 1,
          explanation: "Un GPT personnalise est un assistant IA configurable pour des taches specifiques — comme repondre aux questions clients ou analyser des rapports."
        },
        {
          question: "Quelle est la meilleure approche pour commencer l'automatisation ?",
          options: ["Tout automatiser d'un coup", "Automatiser progressivement, une tache a la fois", "Attendre que la technologie soit parfaite", "Demander a un developpeur de tout coder"],
          correctIndex: 1,
          explanation: "L'automatisation progressive est plus efficace : commencez par UNE tache, mesurez le temps gagne, puis automatisez la suivante."
        },
      ],
    },
    {
      number: 8,
      title: "Booster sa Creativite avec l'IA",
      description: "Utiliser l'IA comme partenaire creatif pour generer des idees et du contenu original.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA, Votre Partenaire Creatif" },
        { type: "paragraph", content: "L'IA n'est pas la pour remplacer votre creativite — elle est la pour la stimuler. Que vous soyez en panne d'inspiration pour un article, un pitch, un nom de produit ou une campagne marketing, l'IA peut generer des dizaines d'idees en quelques secondes pour vous aider a demarrer." },
        { type: "paragraph", content: "Le brainstorming avec l'IA est comme avoir un collegue infatigable qui ne juge jamais vos idees et propose toujours des alternatives. Vous pouvez explorer des directions creatives que vous n'auriez jamais envisagees seul." },
        { type: "heading", content: "Techniques de Brainstorming IA" },
        { type: "prompt-example", content: "Je lance une marque de the bio premium pour les 25-35 ans. Genere 15 noms de marque creatifs en explorant 3 directions : 1) noms evoquant la nature et la zen attitude, 2) noms modernes et urbains, 3) noms poétiques et littéraires. Pour chaque nom, explique le concept en une phrase." },
        { type: "paragraph", content: "L'IA excelle aussi dans la creation de contenu : articles de blog, posts pour les reseaux sociaux, scripts video, newsletters. Donnez-lui votre angle, votre ton et votre public — elle genere un premier brouillon que vous n'avez plus qu'a affiner." },
        { type: "subheading", content: "L'IA Visuelle pour la Creativite" },
        { type: "paragraph", content: "Midjourney, DALL-E et Stable Diffusion transforment vos idees en images. Besoin d'un logo, d'un mockup, d'une illustration pour une presentation ? Decrivez ce que vous voulez et l'IA le genere. C'est un game-changer pour les non-designers." },
        { type: "tip", content: "Utilisez la technique du \"Et si...\" avec l'IA. \"Et si mon produit etait un super-heros, quel serait son pouvoir ?\" Les questions absurdes produisent souvent les idees les plus originales." },
        { type: "callout", content: "Etude Harvard Business Review (2025) : les equipes utilisant l'IA pour le brainstorming generent 40% d'idees en plus et explorent 3x plus de directions creatives." },
        { type: "diagram", label: "Le Cycle Creatif avec l'IA", flow: "horizontal", nodes: [
          { label: "Inspiration", sub: "Brainstorming avec l'IA", color: "purple" },
          { label: "Generation", sub: "Texte, images, concepts", color: "blue" },
          { label: "Selection", sub: "Vous choisissez les meilleures idees", color: "amber" },
          { label: "Raffinement", sub: "Iteration et personnalisation", color: "emerald" },
        ]},
        { type: "summary", items: [
          "L'IA stimule la creativite au lieu de la remplacer",
          "Le brainstorming IA genere 40% d'idees en plus",
          "Donnez un angle, un ton et un public pour du contenu cible",
          "Midjourney et DALL-E transforment vos idees en images",
          "La technique du \"Et si...\" produit des idees originales"
        ]},
      ],
      quiz: [
        {
          question: "Comment l'IA aide-t-elle la creativite ?",
          options: ["Elle remplace completement la creativite humaine", "Elle stimule et amplifie la creativite existante", "Elle copie des idees existantes", "Elle n'aide pas du tout"],
          correctIndex: 1,
          explanation: "L'IA stimule et amplifie votre creativite en proposant des dizaines d'idees et de directions que vous pouvez explorer et affiner."
        },
        {
          question: "Quel gain en idees les equipes utilisant l'IA pour le brainstorming observent-elles ?",
          options: ["10% de plus", "25% de plus", "40% de plus", "100% de plus"],
          correctIndex: 2,
          explanation: "Les etudes montrent que les equipes utilisant l'IA pour le brainstorming generent 40% d'idees en plus et explorent 3x plus de directions creatives."
        },
        {
          question: "Quel outil permet de transformer une description en image ?",
          options: ["Google Docs", "Perplexity", "Midjourney", "N8N"],
          correctIndex: 2,
          explanation: "Midjourney, DALL-E et Stable Diffusion transforment des descriptions textuelles en images, ce qui est ideal pour le prototypage visuel."
        },
        {
          question: "Quelle technique creative est recommandee avec l'IA ?",
          options: ["Copier-coller des idees existantes", "La technique du \"Et si...\" avec des questions absurdes", "Ne jamais modifier les reponses de l'IA", "Utiliser uniquement des prompts courts"],
          correctIndex: 1,
          explanation: "La technique du \"Et si...\" avec des questions decalees ou absurdes pousse l'IA a proposer des idees originales et inattendues."
        },
      ],
    },
    {
      number: 9,
      title: "Construire son Workflow IA Personnel",
      description: "Assembler les outils et techniques pour creer votre ecosysteme IA sur mesure.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Votre Ecosysteme IA Personnel" },
        { type: "paragraph", content: "Maintenant que vous connaissez les differents usages de l'IA, il est temps de construire votre workflow personnel. Un workflow IA efficace combine 3 a 5 outils complementaires qui couvrent vos besoins principaux : redaction, recherche, organisation, creation et automatisation." },
        { type: "paragraph", content: "L'objectif n'est pas d'utiliser tous les outils existants, mais de choisir ceux qui s'integrent naturellement dans votre journee de travail. Un workflow trop complexe sera abandonne en quelques jours." },
        { type: "heading", content: "Etape 1 : Identifier Vos Besoins" },
        { type: "paragraph", content: "Listez vos 5 taches les plus chronophages. Pour chacune, evaluez : combien de temps y consacrez-vous par semaine ? Un outil IA pourrait-il la simplifier ? Commencez par les taches a fort impact." },
        { type: "heading", content: "Etape 2 : Choisir Vos Outils" },
        { type: "diagram", label: "Workflow IA Type pour un Professionnel", flow: "vertical", nodes: [
          { label: "Claude ou ChatGPT", sub: "Redaction, analyse, brainstorming", color: "purple" },
          { label: "Perplexity", sub: "Recherche et veille", color: "blue" },
          { label: "Notion AI ou Motion", sub: "Organisation et planification", color: "emerald" },
          { label: "Make ou Zapier", sub: "Automatisation des workflows", color: "amber" },
          { label: "Midjourney ou Canva AI", sub: "Creation visuelle", color: "pink" },
        ]},
        { type: "heading", content: "Etape 3 : Creer des Templates" },
        { type: "paragraph", content: "Creez des prompts templates pour vos taches recurrentes. Un template pour vos emails clients, un pour vos comptes rendus de reunion, un pour vos posts LinkedIn. Stockez-les dans un document ou utilisez les Claude Projects / GPTs personnalises." },
        { type: "prompt-example", content: "Cree-moi 5 templates de prompts pour mes taches hebdomadaires : 1) Compte rendu de reunion (participants, decisions, actions), 2) Email de suivi client, 3) Resume du rapport de vente, 4) Post LinkedIn professionnel, 5) Planification de la semaine." },
        { type: "tip", content: "Revoyez votre workflow chaque mois. Supprimez les outils que vous n'utilisez pas, ajoutez ceux qui pourraient vous aider et affinez vos templates." },
        { type: "key-point", content: "Le meilleur workflow est celui que vous utilisez vraiment. Commencez simple avec 2-3 outils et evoluez progressivement." },
        { type: "summary", items: [
          "Un bon workflow combine 3 a 5 outils complementaires",
          "Identifiez vos 5 taches les plus chronophages en premier",
          "Creez des templates de prompts pour les taches recurrentes",
          "Revoyez votre workflow chaque mois et ajustez",
          "Commencez simple : 2-3 outils suffisent pour demarrer"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'outils IA un workflow efficace combine-t-il idealement ?",
          options: ["1 seul", "3 a 5 complementaires", "10 ou plus", "Tous les outils disponibles"],
          correctIndex: 1,
          explanation: "Un workflow IA efficace combine 3 a 5 outils complementaires qui couvrent vos besoins principaux sans etre trop complexe."
        },
        {
          question: "Par quoi faut-il commencer pour construire son workflow ?",
          options: ["Acheter tous les outils premium", "Identifier ses 5 taches les plus chronophages", "Copier le workflow de quelqu'un d'autre", "Apprendre a programmer"],
          correctIndex: 1,
          explanation: "Commencez par identifier vos 5 taches les plus chronophages et evaluez comment l'IA peut les simplifier. Priorisez celles a fort impact."
        },
        {
          question: "Qu'est-ce qu'un template de prompt ?",
          options: ["Un fichier Word", "Un prompt preformate pour une tache recurrente", "Un plugin payant", "Un type de base de donnees"],
          correctIndex: 1,
          explanation: "Un template de prompt est un prompt preformate que vous reutilisez pour des taches recurrentes (emails clients, comptes rendus, posts LinkedIn)."
        },
        {
          question: "A quelle frequence faut-il revoir son workflow IA ?",
          options: ["Jamais, une fois suffit", "Chaque jour", "Chaque mois", "Chaque annee"],
          correctIndex: 2,
          explanation: "Revoyez votre workflow chaque mois : supprimez les outils inutilises, ajoutez ceux qui pourraient aider et affinez vos templates."
        },
      ],
    },
    {
      number: 10,
      title: "Les Bonnes Pratiques au Quotidien",
      description: "Adopter les reflexes essentiels pour une utilisation efficace et responsable de l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Les Regles d'Or de l'IA au Quotidien" },
        { type: "paragraph", content: "Utiliser l'IA efficacement ne se resume pas a savoir ecrire des prompts. C'est un ensemble de bonnes pratiques qui garantissent des resultats de qualite, protegent vos donnees et evitent les pieges courants." },
        { type: "heading", content: "Les 7 Bonnes Pratiques" },
        { type: "subheading", content: "1. Verifiez Toujours les Informations Critiques" },
        { type: "paragraph", content: "L'IA peut halluciner — generer des informations fausses mais convaincantes. Pour les chiffres, dates, citations et faits importants, verifiez toujours avec une source fiable." },
        { type: "subheading", content: "2. Ne Partagez Jamais de Donnees Sensibles" },
        { type: "paragraph", content: "Evitez de copier-coller des donnees confidentielles (mots de passe, numeros de carte, informations personnelles de clients) dans les chatbots IA. Utilisez des versions entreprise avec garanties de confidentialite si necessaire." },
        { type: "subheading", content: "3. Soyez Precis dans Vos Prompts" },
        { type: "paragraph", content: "Plus votre prompt est precis (contexte, format, ton, longueur, public), meilleur sera le resultat. Un prompt vague produit une reponse vague." },
        { type: "subheading", content: "4. Iterez et Affinez" },
        { type: "paragraph", content: "Le premier resultat est rarement parfait. Demandez des modifications, precisions ou alternatives. L'IA s'ameliore avec le feedback." },
        { type: "callout", content: "Regle d'or : l'IA est un outil puissant, pas un oracle infaillible. Votre jugement reste la derniere ligne de defense." },
        { type: "heading", content: "Rester a Jour" },
        { type: "paragraph", content: "L'ecosysteme IA evolue tres rapidement. De nouveaux outils, fonctionnalites et modeles sortent chaque mois. Suivez quelques sources de veille fiables pour rester a jour sans etre submerge." },
        { type: "tip", content: "Abonnez-vous a 2-3 newsletters IA en francais (comme Flint AI ou Ben's Bites traduit) pour rester informe sans y passer des heures." },
        { type: "diagram", label: "Les Reflexes Essentiels", flow: "horizontal", nodes: [
          { label: "Verifier", sub: "Croiser les informations critiques", color: "pink" },
          { label: "Proteger", sub: "Ne jamais partager de donnees sensibles", color: "blue" },
          { label: "Preciser", sub: "Des prompts detailles = meilleurs resultats", color: "emerald" },
          { label: "Iterer", sub: "Affiner les reponses progressivement", color: "amber" },
        ]},
        { type: "key-point", content: "L'IA au quotidien, c'est 20% de technologie et 80% de bonnes habitudes. Les reflexes que vous construisez aujourd'hui definiront votre productivite de demain." },
        { type: "summary", items: [
          "Verifiez toujours les informations critiques — l'IA peut halluciner",
          "Ne partagez jamais de donnees sensibles dans les chatbots publics",
          "Des prompts precis produisent des resultats de qualite",
          "Iterez et affinez — le premier resultat est rarement parfait",
          "Restez a jour avec 2-3 newsletters IA fiables",
          "L'IA est un outil puissant, pas un oracle infaillible"
        ]},
      ],
      quiz: [
        {
          question: "Que signifie \"halluciner\" pour une IA ?",
          options: ["L'IA plante et redémarre", "L'IA genere des informations fausses mais convaincantes", "L'IA refuse de repondre", "L'IA devient plus lente"],
          correctIndex: 1,
          explanation: "Une hallucination IA est une information fausse generee de maniere convaincante par le modele. C'est pourquoi il faut toujours verifier les informations critiques."
        },
        {
          question: "Que ne faut-il JAMAIS partager avec un chatbot IA public ?",
          options: ["Vos idees de projets", "Des donnees sensibles (mots de passe, infos clients)", "Des questions de culture generale", "Vos preferences alimentaires"],
          correctIndex: 1,
          explanation: "Les donnees sensibles (mots de passe, numeros de carte, informations personnelles) ne doivent jamais etre partagees avec des chatbots IA publics."
        },
        {
          question: "Quel est l'impact d'un prompt vague ?",
          options: ["Un resultat excellent", "Un resultat vague et peu utile", "Une erreur systeme", "Aucun impact"],
          correctIndex: 1,
          explanation: "Un prompt vague produit une reponse vague. Plus vous precisez le contexte, le format, le ton et le public, meilleur sera le resultat."
        },
        {
          question: "Quelle est la regle d'or de l'utilisation de l'IA au quotidien ?",
          options: ["Faire confiance aveuglément a l'IA", "L'IA est un outil puissant, pas un oracle infaillible", "Utiliser uniquement des outils payants", "Ne jamais verifier les reponses"],
          correctIndex: 1,
          explanation: "L'IA est un outil puissant mais pas infaillible. Votre jugement reste la derniere ligne de defense pour valider les resultats."
        },
      ],
    },
  ],
};

export default content;
