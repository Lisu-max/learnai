import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ethique-ia",
  chapters: [
    {
      number: 1,
      title: "Introduction a l'Ethique de l'IA",
      description: "Pourquoi l'ethique est essentielle dans le developpement et l'utilisation de l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Pourquoi l'Ethique de l'IA Nous Concerne Tous" },
        { type: "paragraph", content: "L'intelligence artificielle prend des decisions qui affectent nos vies chaque jour : les contenus que nous voyons sur les reseaux sociaux, les candidatures retenues pour un emploi, les diagnostics medicaux, les taux d'interet proposes par nos banques. Quand une technologie a autant d'impact, la question n'est plus seulement \"que peut-elle faire ?\" mais \"que devrait-elle faire ?\"." },
        { type: "paragraph", content: "L'ethique de l'IA est le domaine qui etudie les consequences morales, sociales et juridiques de ces systemes. Ce n'est pas un sujet reserve aux philosophes — c'est une preoccupation pratique pour chaque utilisateur, developpeur et decideur." },
        { type: "callout", content: "En 2026, plus de 80% des entreprises du Fortune 500 utilisent l'IA dans leurs processus decisionnels. La question de l'ethique n'est plus theorique — elle est operationnelle." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Introduction a l'ethique de l'IA" },
        { type: "heading", content: "Les Grands Principes Ethiques" },
        { type: "paragraph", content: "Les principaux cadres ethiques pour l'IA s'articulent autour de 5 principes : la bienfaisance (l'IA doit faire le bien), la non-malfaisance (ne pas causer de tort), l'autonomie (respecter les choix humains), la justice (equite et non-discrimination), et l'explicabilite (pouvoir comprendre les decisions de l'IA)." },
        { type: "key-point", content: "L'ethique de l'IA n'est pas contre l'innovation. Elle vise a s'assurer que l'innovation beneficie a tous et ne cause pas de tort disproportionne a certains groupes." },
        { type: "diagram", label: "Les 5 Principes Ethiques de l'IA", flow: "horizontal", nodes: [
          { label: "Bienfaisance", sub: "L'IA doit faire le bien", color: "emerald" },
          { label: "Non-malfaisance", sub: "Ne pas causer de tort", color: "pink" },
          { label: "Justice", sub: "Equite et non-discrimination", color: "blue" },
          { label: "Autonomie", sub: "Respecter les choix humains", color: "purple" },
          { label: "Explicabilite", sub: "Comprendre les decisions", color: "amber" },
        ]},
        { type: "paragraph", content: "Ce cours explore chacun de ces enjeux en profondeur : biais algorithmiques, impact sur l'emploi, vie privee, deepfakes, reglementation et responsabilite. L'objectif est de vous donner les cles pour utiliser l'IA de maniere eclairee et responsable." },
        { type: "summary", items: [
          "L'IA prend des decisions qui affectent nos vies quotidiennement",
          "L'ethique de l'IA concerne tous les utilisateurs, pas seulement les experts",
          "5 principes : bienfaisance, non-malfaisance, justice, autonomie, explicabilite",
          "80% des entreprises du Fortune 500 utilisent l'IA dans leurs decisions",
          "L'ethique n'est pas contre l'innovation — elle la guide"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi l'ethique de l'IA est-elle importante ?",
          options: ["Pour ralentir l'innovation", "Parce que l'IA prend des decisions qui affectent nos vies", "Pour rendre l'IA plus chere", "Pour limiter l'acces a l'IA"],
          correctIndex: 1,
          explanation: "L'IA influence les contenus que nous voyons, les decisions de recrutement, les diagnostics medicaux et bien plus. L'ethique est essentielle pour guider ces impacts."
        },
        {
          question: "Quel principe ethique signifie que l'IA ne doit pas causer de tort ?",
          options: ["Bienfaisance", "Non-malfaisance", "Autonomie", "Explicabilite"],
          correctIndex: 1,
          explanation: "La non-malfaisance est le principe selon lequel les systemes d'IA ne doivent pas causer de tort aux individus ou aux groupes."
        },
        {
          question: "L'ethique de l'IA est-elle reservee aux experts ?",
          options: ["Oui, seuls les developpeurs sont concernes", "Oui, c'est un sujet de philosophes", "Non, elle concerne tous les utilisateurs et decideurs", "Oui, seuls les gouvernements s'en occupent"],
          correctIndex: 2,
          explanation: "L'ethique de l'IA concerne chaque utilisateur, developpeur et decideur. Nous sommes tous affectes par les decisions prises par les systemes d'IA."
        },
        {
          question: "Que signifie l'explicabilite dans le contexte de l'IA ?",
          options: ["L'IA peut s'expliquer elle-meme", "On peut comprendre comment l'IA prend ses decisions", "L'IA est plus rapide", "L'IA donne toujours la bonne reponse"],
          correctIndex: 1,
          explanation: "L'explicabilite signifie qu'on peut comprendre et auditer le processus de decision de l'IA, ce qui est crucial pour la confiance et la responsabilite."
        },
      ],
    },
    {
      number: 2,
      title: "Biais Algorithmiques : Comprendre et Prevenir",
      description: "Comment les biais s'infiltrent dans l'IA et comment les combattre.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Qu'est-ce qu'un Biais Algorithmique ?" },
        { type: "paragraph", content: "Un biais algorithmique se produit quand un systeme d'IA produit des resultats systematiquement injustes envers certains groupes. Ces biais ne sont pas intentionnels — ils sont le reflet des prejudices presents dans les donnees d'entrainement, les choix de conception ou les metriques d'evaluation." },
        { type: "paragraph", content: "Par exemple, en 2018, Amazon a decouvert que son systeme de recrutement IA penalisait les CV contenant le mot \"femme\" (comme \"equipe de football feminin\") parce qu'il avait ete entraine sur 10 ans de CV, majoritairement masculins. Le systeme avait appris que les candidats hommes etaient plus souvent embauches." },
        { type: "heading", content: "Les Sources de Biais" },
        { type: "subheading", content: "Biais dans les Donnees" },
        { type: "paragraph", content: "Si les donnees d'entrainement ne sont pas representatives de la diversite de la population, le modele reproduira les desequilibres existants. Un systeme de reconnaissance faciale entraine principalement sur des visages caucasiens performera moins bien sur d'autres ethnies." },
        { type: "subheading", content: "Biais de Conception" },
        { type: "paragraph", content: "Les choix des concepteurs influencent les resultats : quelles donnees collecter, quelles metriques optimiser, quelles populations tester. Si l'equipe de developpement manque de diversite, certains biais passeront inapercus." },
        { type: "subheading", content: "Biais de Feedback" },
        { type: "paragraph", content: "Les systemes d'IA peuvent amplifier les biais existants dans une boucle de retroaction. Un algorithme de justice predictive qui cible davantage un quartier entrainera plus d'arrestations dans ce quartier, \"confirmant\" le biais initial." },
        { type: "callout", content: "Une etude du NIST (2024) a montre que les systemes de reconnaissance faciale ont un taux d'erreur 10 a 100 fois plus eleve pour les personnes a la peau foncee que pour les personnes a la peau claire." },
        { type: "heading", content: "Comment Prevenir les Biais" },
        { type: "paragraph", content: "La prevention passe par : la diversification des donnees d'entrainement, les audits reguliers des modeles, la diversite dans les equipes de developpement, les tests sur des sous-groupes de population, et la mise en place de mecanismes de recours pour les personnes affectees." },
        { type: "key-point", content: "Les biais algorithmiques sont un probleme humain, pas technologique. Ils refletent les prejudices de notre societe. La technologie seule ne peut pas les resoudre — il faut aussi un changement organisationnel et culturel." },
        { type: "diagram", label: "Les Sources de Biais Algorithmiques", flow: "vertical", nodes: [
          { label: "Biais dans les donnees", sub: "Donnees non representatives", color: "pink" },
          { label: "Biais de conception", sub: "Choix des developpeurs", color: "purple" },
          { label: "Biais de feedback", sub: "Boucle d'amplification", color: "amber" },
          { label: "Biais d'evaluation", sub: "Metriques inadaptees", color: "blue" },
        ]},
        { type: "summary", items: [
          "Les biais algorithmiques produisent des resultats injustes pour certains groupes",
          "Ils proviennent des donnees, de la conception et des boucles de feedback",
          "Amazon a du abandonner son IA de recrutement pour biais de genre",
          "La reconnaissance faciale a un taux d'erreur 10-100x plus eleve sur les peaux foncees",
          "Prevention : diversite des donnees, audits reguliers, equipes diverses"
        ]},
      ],
      quiz: [
        {
          question: "D'ou viennent principalement les biais algorithmiques ?",
          options: ["Du hardware", "Des donnees d'entrainement et des choix de conception", "De la vitesse de calcul", "Des utilisateurs finaux uniquement"],
          correctIndex: 1,
          explanation: "Les biais proviennent principalement des donnees d'entrainement non representatives et des choix de conception (metriques, populations cibles, etc.)."
        },
        {
          question: "Pourquoi Amazon a-t-il abandonne son IA de recrutement ?",
          options: ["Elle etait trop lente", "Elle penalisait les candidatures feminines", "Elle coutait trop cher", "Elle ne fonctionnait pas"],
          correctIndex: 1,
          explanation: "L'IA de recrutement d'Amazon penalisait les CV contenant des references feminines car elle avait appris a partir de 10 ans de donnees majoritairement masculines."
        },
        {
          question: "Qu'est-ce qu'un biais de feedback ?",
          options: ["Un commentaire negatif d'un utilisateur", "Une boucle ou l'IA amplifie les biais existants", "Un bug dans le code", "Un probleme de connexion"],
          correctIndex: 1,
          explanation: "Un biais de feedback est une boucle ou les predictions biaisees de l'IA influencent les donnees futures, amplifiant le biais initial."
        },
        {
          question: "Comment prevenir les biais algorithmiques ?",
          options: ["Supprimer l'IA", "Diversifier les donnees, auditer regulierement, diversifier les equipes", "Utiliser plus de puissance de calcul", "Ignorer le probleme"],
          correctIndex: 1,
          explanation: "La prevention combine diversification des donnees, audits reguliers, diversite des equipes et mecanismes de recours pour les personnes affectees."
        },
      ],
    },
    {
      number: 3,
      title: "IA et Emploi : Menaces et Opportunites",
      description: "Analyser l'impact reel de l'IA sur le marche du travail et les strategies d'adaptation.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Va-t-elle Remplacer Nos Emplois ?" },
        { type: "paragraph", content: "C'est la question qui inquiete le plus. La reponse est nuancee : l'IA ne remplace pas des metiers entiers, elle automatise des taches specifiques au sein de chaque metier. Selon le Forum Economique Mondial (2025), l'IA supprimera 85 millions d'emplois d'ici 2030 mais en creera 97 millions de nouveaux — un gain net de 12 millions." },
        { type: "paragraph", content: "Le veritable enjeu n'est pas la disparition des emplois mais leur transformation. Un comptable ne sera pas remplace par l'IA, mais un comptable qui utilise l'IA sera plus productif qu'un comptable qui ne l'utilise pas." },
        { type: "heading", content: "Les Metiers les Plus Impactes" },
        { type: "paragraph", content: "Les taches les plus exposees sont celles qui sont repetitives, previsibles et basees sur des regles : saisie de donnees, traduction basique, service client de niveau 1, analyse de documents standardises. A l'inverse, les taches necessitant creativite, empathie, negociation complexe et jugement moral sont les moins automatisables." },
        { type: "diagram", label: "Impact de l'IA sur les Types de Taches", flow: "horizontal", nodes: [
          { label: "Haut risque", sub: "Saisie, traduction basique, tri", color: "pink" },
          { label: "Risque modere", sub: "Analyse, redaction, programmation", color: "amber" },
          { label: "Faible risque", sub: "Creativite, empathie, strategie", color: "emerald" },
        ]},
        { type: "heading", content: "Les Nouvelles Opportunites" },
        { type: "paragraph", content: "L'IA cree de nouveaux metiers : prompt engineer, AI trainer, ethicien IA, ingenieur MLOps, consultant en transformation IA. Mais au-dela de ces roles specialises, chaque metier existant est enrichi par de nouvelles competences IA. Un marketeur qui maitrise l'IA generative, un avocat qui utilise l'IA pour la recherche juridique, un medecin assiste par l'IA diagnostique." },
        { type: "callout", content: "Etude Goldman Sachs (2025) : l'IA generative pourrait augmenter la productivite mondiale de 7% par an, ce qui represente 7 000 milliards de dollars de valeur ajoutee." },
        { type: "key-point", content: "La strategie gagnante n'est pas de rivaliser avec l'IA mais de combiner votre expertise humaine avec ses capacites. Les professionnels les plus valorises seront ceux qui savent quand et comment utiliser l'IA." },
        { type: "tip", content: "Investissez dans les competences que l'IA ne peut pas remplacer : pensee critique, intelligence emotionnelle, creativite, leadership et capacite d'adaptation." },
        { type: "summary", items: [
          "L'IA transforme les metiers plus qu'elle ne les supprime",
          "85M d'emplois supprimes mais 97M crees d'ici 2030 (gain net de 12M)",
          "Les taches repetitives et previsibles sont les plus exposees",
          "De nouveaux metiers emergent : prompt engineer, ethicien IA, MLOps",
          "La strategie gagnante : combiner expertise humaine + capacites IA"
        ]},
      ],
      quiz: [
        {
          question: "Selon le Forum Economique Mondial, quel est le bilan net de l'IA sur l'emploi d'ici 2030 ?",
          options: ["Perte nette de 85 millions d'emplois", "Gain net de 12 millions d'emplois", "Aucun changement", "Perte nette de 50 millions d'emplois"],
          correctIndex: 1,
          explanation: "L'IA supprimera 85 millions d'emplois mais en creera 97 millions de nouveaux, soit un gain net de 12 millions d'emplois."
        },
        {
          question: "Quelles taches sont les plus exposees a l'automatisation par l'IA ?",
          options: ["Creativite et empathie", "Taches repetitives, previsibles et basees sur des regles", "Negociation complexe", "Leadership strategique"],
          correctIndex: 1,
          explanation: "Les taches repetitives, previsibles et basees sur des regles (saisie de donnees, tri, traduction basique) sont les plus facilement automatisables."
        },
        {
          question: "Quelle est la meilleure strategie face a l'IA dans le monde du travail ?",
          options: ["Ignorer l'IA", "Rivaliser avec l'IA", "Combiner expertise humaine et capacites de l'IA", "Changer completement de metier"],
          correctIndex: 2,
          explanation: "La strategie gagnante est de combiner votre expertise humaine unique avec les capacites de l'IA pour etre plus productif et plus precieux."
        },
        {
          question: "Quel nouveau metier est directement lie a l'IA ?",
          options: ["Plombier IA", "Prompt engineer", "Cuisinier algorithmique", "Pilote de drone IA"],
          correctIndex: 1,
          explanation: "Le prompt engineer est un metier directement cree par l'essor de l'IA generative, specialise dans l'optimisation des interactions avec les LLM."
        },
      ],
    },
    {
      number: 4,
      title: "Vie Privee et Surveillance a l'Ere de l'IA",
      description: "Comprendre les risques pour la vie privee et apprendre a proteger ses donnees.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA et Vos Donnees Personnelles" },
        { type: "paragraph", content: "L'IA a besoin de donnees pour fonctionner — et souvent, ces donnees sont les votres. Chaque interaction avec un chatbot, chaque photo partagee, chaque recherche effectuee genere des donnees qui peuvent etre utilisees pour entrainer des modeles, cibler des publicites ou etablir des profils comportementaux." },
        { type: "paragraph", content: "La question n'est pas de savoir si vos donnees sont collectees — elles le sont. La question est : par qui, pour quoi, et avez-vous donne votre consentement eclaire ?" },
        { type: "heading", content: "Les Risques Majeurs" },
        { type: "subheading", content: "Profilage Comportemental" },
        { type: "paragraph", content: "Les algorithmes de recommandation creent des profils detailles de vos preferences, habitudes et personnalite. Ces profils sont utilises pour le ciblage publicitaire mais peuvent aussi influencer votre acces au credit, a l'assurance ou a l'emploi." },
        { type: "subheading", content: "Reconnaissance Faciale" },
        { type: "paragraph", content: "La reconnaissance faciale permet l'identification en temps reel dans les espaces publics. Certains pays l'utilisent pour la surveillance de masse, tandis que d'autres, comme l'UE avec l'AI Act, la reglementent strictement." },
        { type: "subheading", content: "Donnees d'Entrainement des LLM" },
        { type: "paragraph", content: "Les LLM sont entraines sur des donnees issues d'Internet qui peuvent inclure des informations personnelles. Quand vous partagez du contenu avec un chatbot, il peut etre utilise pour ameliorer le modele — sauf si vous desactivez cette option." },
        { type: "callout", content: "Le RGPD (Europe) donne aux citoyens le droit d'acces, de rectification et de suppression de leurs donnees personnelles. L'AI Act ajoute des obligations specifiques pour les systemes d'IA a haut risque." },
        { type: "heading", content: "Comment Proteger Sa Vie Privee" },
        { type: "paragraph", content: "Utilisez les versions entreprise des chatbots (pas d'entrainement sur vos donnees), desactivez l'historique quand possible, ne partagez jamais d'informations sensibles avec des chatbots publics, et verifiez les politiques de confidentialite des outils que vous utilisez." },
        { type: "key-point", content: "Chaque outil IA a une politique de donnees differente. Lisez-la. La gratuite a souvent un cout : vos donnees." },
        { type: "diagram", label: "Proteger sa Vie Privee avec l'IA", flow: "vertical", nodes: [
          { label: "Utiliser les versions entreprise", sub: "Pas d'entrainement sur vos donnees", color: "emerald" },
          { label: "Desactiver l'historique", sub: "Quand l'option est disponible", color: "blue" },
          { label: "Ne pas partager de donnees sensibles", sub: "Mots de passe, infos clients, finances", color: "pink" },
          { label: "Verifier les politiques", sub: "Lire les conditions d'utilisation", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA collecte et utilise vos donnees pour fonctionner et s'ameliorer",
          "Le profilage comportemental peut influencer credit, assurance et emploi",
          "Le RGPD et l'AI Act protegent les citoyens europeens",
          "Utilisez les versions entreprise pour proteger vos donnees",
          "La gratuite a un cout : souvent, ce sont vos donnees"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal risque pour la vie privee avec les chatbots IA ?",
          options: ["Ils sont trop lents", "Les donnees partagees peuvent etre utilisees pour entrainer les modeles", "Ils coutent trop cher", "Ils ne fonctionnent pas bien"],
          correctIndex: 1,
          explanation: "Les donnees que vous partagez avec un chatbot peuvent etre utilisees pour ameliorer le modele, sauf si vous utilisez une version entreprise ou desactivez cette option."
        },
        {
          question: "Que garantit le RGPD aux citoyens europeens ?",
          options: ["Un acces gratuit a l'IA", "Le droit d'acces, de rectification et de suppression de leurs donnees", "Des ordinateurs gratuits", "L'anonymat total sur Internet"],
          correctIndex: 1,
          explanation: "Le RGPD donne aux citoyens le droit d'acceder a leurs donnees personnelles, de les faire corriger et de demander leur suppression."
        },
        {
          question: "Pourquoi les versions entreprise des chatbots sont-elles recommandees ?",
          options: ["Elles sont moins cheres", "Vos donnees ne sont pas utilisees pour entrainer les modeles", "Elles sont plus rapides", "Elles ont plus de fonctionnalites"],
          correctIndex: 1,
          explanation: "Les versions entreprise garantissent que vos donnees ne seront pas utilisees pour entrainer les modeles, protégeant ainsi la confidentialite."
        },
        {
          question: "Quel est le \"cout\" des outils IA gratuits ?",
          options: ["Il n'y a aucun cout", "Vos donnees personnelles servent souvent a entrainer les modeles", "Le temps d'attente", "La publicite"],
          correctIndex: 1,
          explanation: "Les outils IA gratuits financent souvent leur fonctionnement en utilisant vos donnees pour ameliorer leurs modeles ou cibler des publicites."
        },
      ],
    },
    {
      number: 5,
      title: "Deepfakes et Desinformation",
      description: "Comprendre les deepfakes, les risques de desinformation et les moyens de s'en proteger.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Ere des Deepfakes" },
        { type: "paragraph", content: "Un deepfake est un contenu mediatique (video, audio, image) genere ou manipule par l'IA pour etre faux mais convaincant. En 2026, la technologie a atteint un niveau ou il est souvent impossible a l'oeil nu de distinguer un deepfake d'un contenu authentique." },
        { type: "paragraph", content: "Les deepfakes peuvent reproduire le visage et la voix de n'importe qui. Des logiciels accessibles permettent de creer un deepfake video convaincant en quelques minutes avec juste une photo et quelques secondes d'audio." },
        { type: "heading", content: "Les Risques des Deepfakes" },
        { type: "subheading", content: "Manipulation Politique" },
        { type: "paragraph", content: "Des videos deepfake de dirigeants politiques peuvent etre diffusees pour influencer des elections, creer des crises diplomatiques ou manipuler l'opinion publique. En periode electorale, un deepfake viral peut atteindre des millions de personnes avant d'etre dementi." },
        { type: "subheading", content: "Arnaque et Fraude" },
        { type: "paragraph", content: "Les deepfakes audio sont utilises pour des arnaques telephoniques : un faux appel de votre PDG vous demandant un virement urgent, une fausse voix d'un proche en detresse. En 2025, les pertes liees aux arnaques par deepfake ont depasse 25 milliards de dollars dans le monde." },
        { type: "subheading", content: "Atteintes a la Reputation" },
        { type: "paragraph", content: "Des deepfakes pornographiques non consentis touchent majoritairement les femmes. Ce phenomene a conduit a de nouvelles legislations dans de nombreux pays, dont la France et les Etats-Unis." },
        { type: "callout", content: "En 2025, le nombre de deepfakes detectes en ligne a augmente de 900% par rapport a 2020. 96% des deepfakes video sont de nature pornographique non consentie." },
        { type: "heading", content: "Comment Detecter et Se Proteger" },
        { type: "paragraph", content: "Plusieurs strategies existent : le watermarking IA (marques invisibles integrees dans le contenu genere), les outils de detection (Microsoft Video Authenticator, Intel FakeCatcher), la verification des sources, et la litteratie mediatique." },
        { type: "tip", content: "Avant de partager une video choquante, verifiez la source. Utilisez la recherche inversee d'image et consultez les sites de fact-checking. Si c'est trop choquant pour etre vrai, ca ne l'est peut-etre pas." },
        { type: "key-point", content: "Le meilleur rempart contre les deepfakes est l'esprit critique. Questionnez systématiquement les contenus surprenants, verifiez les sources et ne partagez pas de contenu dont vous n'etes pas certain de l'authenticite." },
        { type: "diagram", label: "Types de Deepfakes et Risques", flow: "horizontal", nodes: [
          { label: "Video", sub: "Manipulation politique, reputation", color: "pink" },
          { label: "Audio", sub: "Arnaques, faux appels urgents", color: "purple" },
          { label: "Image", sub: "Faux documents, usurpation", color: "amber" },
          { label: "Texte", sub: "Desinformation a grande echelle", color: "blue" },
        ]},
        { type: "summary", items: [
          "Les deepfakes sont des contenus faux generes par l'IA, souvent indiscernables",
          "Risques : manipulation politique, arnaques financières, atteintes a la reputation",
          "25 milliards de dollars de pertes liees aux arnaques deepfake en 2025",
          "Le watermarking et les outils de detection aident mais ne suffisent pas",
          "L'esprit critique et la verification des sources sont les meilleurs remparts"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce qu'un deepfake ?",
          options: ["Un contenu cree manuellement par un artiste", "Un contenu mediatique faux genere par l'IA", "Un type de virus informatique", "Un format de fichier video"],
          correctIndex: 1,
          explanation: "Un deepfake est un contenu mediatique (video, audio, image) genere ou manipule par l'IA pour etre faux mais convaincant."
        },
        {
          question: "Quel est le montant des pertes liees aux arnaques deepfake en 2025 ?",
          options: ["1 milliard de dollars", "5 milliards de dollars", "25 milliards de dollars", "100 milliards de dollars"],
          correctIndex: 2,
          explanation: "Les pertes liees aux arnaques par deepfake ont depasse 25 milliards de dollars dans le monde en 2025."
        },
        {
          question: "Quel pourcentage des deepfakes video est de nature pornographique non consentie ?",
          options: ["10%", "50%", "75%", "96%"],
          correctIndex: 3,
          explanation: "96% des deepfakes video detectes en ligne sont de nature pornographique non consentie, touchant majoritairement les femmes."
        },
        {
          question: "Quel est le meilleur rempart contre les deepfakes ?",
          options: ["Eviter Internet", "L'esprit critique et la verification des sources", "Des logiciels antivirus", "Ne jamais regarder de videos"],
          correctIndex: 1,
          explanation: "L'esprit critique, la verification des sources et le refus de partager du contenu non verifie sont les meilleurs remparts contre les deepfakes."
        },
      ],
    },
    {
      number: 6,
      title: "Reglementation : AI Act et RGPD",
      description: "Comprendre le cadre juridique europeen qui encadre l'utilisation de l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Cadre Reglementaire Europeen" },
        { type: "paragraph", content: "L'Union Europeenne est pionniere dans la reglementation de l'IA avec deux textes majeurs : le RGPD (Reglement General sur la Protection des Donnees, en vigueur depuis 2018) et l'AI Act (premiere loi mondiale dediee a l'IA, entree en application progressive depuis 2024)." },
        { type: "paragraph", content: "Ces reglements visent a proteger les citoyens tout en permettant l'innovation. Ils imposent des obligations proportionnelles aux risques : plus un systeme d'IA est risque, plus les contraintes sont strictes." },
        { type: "heading", content: "L'AI Act Explique" },
        { type: "paragraph", content: "L'AI Act classe les systemes d'IA en 4 niveaux de risque. Les systemes a risque inacceptable sont interdits (manipulation subliminale, scoring social, surveillance biometrique en temps reel dans les espaces publics sauf exceptions). Les systemes a haut risque doivent respecter des obligations strictes (transparence, documentation, supervision humaine)." },
        { type: "diagram", label: "Les 4 Niveaux de Risque de l'AI Act", flow: "vertical", nodes: [
          { label: "Risque inacceptable", sub: "Interdit : scoring social, manipulation subliminale", color: "pink" },
          { label: "Haut risque", sub: "Obligations strictes : recrutement, justice, sante", color: "amber" },
          { label: "Risque limite", sub: "Transparence : chatbots, deepfakes, IA generative", color: "blue" },
          { label: "Risque minimal", sub: "Libre : jeux video, filtres photo, spam", color: "emerald" },
        ]},
        { type: "heading", content: "Le RGPD et l'IA" },
        { type: "paragraph", content: "Le RGPD s'applique a toute utilisation de donnees personnelles par des systemes d'IA. Il garantit le droit a l'explication (comprendre pourquoi une decision automatisee a ete prise), le droit d'opposition (refuser une decision purement automatisee), et le droit a la portabilite (recuperer ses donnees)." },
        { type: "subheading", content: "Impact Pratique" },
        { type: "paragraph", content: "Pour les entreprises : obligation de documenter les systemes IA a haut risque, d'effectuer des evaluations d'impact, de nommer un responsable IA. Pour les citoyens : droit de savoir si une decision les concernant a ete prise par une IA, droit de contester cette decision." },
        { type: "callout", content: "Les amendes de l'AI Act peuvent atteindre 35 millions d'euros ou 7% du chiffre d'affaires mondial pour les infractions les plus graves — plus severe que le RGPD." },
        { type: "key-point", content: "L'Europe est le premier continent a reglementer l'IA de maniere globale. L'AI Act est un modele qui influence les legislations dans le monde entier, comme le RGPD l'a fait pour la protection des donnees." },
        { type: "tip", content: "Si vous developpez ou utilisez de l'IA en Europe, verifiez dans quelle categorie de risque se situe votre systeme. Les obligations varient considerablement selon le niveau." },
        { type: "summary", items: [
          "L'UE est pionniere avec le RGPD (2018) et l'AI Act (2024+)",
          "L'AI Act classe l'IA en 4 niveaux de risque avec obligations proportionnelles",
          "Le scoring social et la manipulation subliminale sont interdits",
          "Le RGPD garantit le droit a l'explication et a l'opposition",
          "Les amendes peuvent atteindre 35M euros ou 7% du CA mondial"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'AI Act ?",
          options: ["Un film de science-fiction", "La premiere loi mondiale dediee a l'IA, creee par l'UE", "Un logiciel d'intelligence artificielle", "Un concours international d'IA"],
          correctIndex: 1,
          explanation: "L'AI Act est la premiere legislation mondiale specifiquement dediee a la reglementation de l'IA, creee par l'Union Europeenne."
        },
        {
          question: "Combien de niveaux de risque l'AI Act definit-il ?",
          options: ["2", "3", "4", "5"],
          correctIndex: 2,
          explanation: "L'AI Act definit 4 niveaux de risque : inacceptable (interdit), haut risque, risque limite et risque minimal."
        },
        {
          question: "Quel droit le RGPD garantit-il face aux decisions automatisees ?",
          options: ["Le droit a un ordinateur gratuit", "Le droit a l'explication et a l'opposition", "Le droit a un emploi", "Le droit a Internet gratuit"],
          correctIndex: 1,
          explanation: "Le RGPD garantit le droit de comprendre pourquoi une decision automatisee a ete prise et le droit de s'y opposer."
        },
        {
          question: "Quel montant maximum les amendes de l'AI Act peuvent-elles atteindre ?",
          options: ["1 million d'euros", "10 millions d'euros", "35 millions d'euros ou 7% du CA mondial", "100 millions d'euros"],
          correctIndex: 2,
          explanation: "Les amendes de l'AI Act peuvent atteindre 35 millions d'euros ou 7% du chiffre d'affaires mondial — plus severe que le RGPD."
        },
      ],
    },
    {
      number: 7,
      title: "Responsabilite et Transparence de l'IA",
      description: "Qui est responsable quand l'IA se trompe ? Comment rendre l'IA transparente et fiable.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Question de la Responsabilite" },
        { type: "paragraph", content: "Quand une voiture autonome cause un accident, qui est responsable ? Le constructeur ? Le developpeur de l'IA ? Le proprietaire ? Quand un chatbot donne un conseil medical dangereux, qui est en faute ? La question de la responsabilite est l'un des defis juridiques les plus complexes de l'ere IA." },
        { type: "paragraph", content: "En 2026, la plupart des legislations adoptent une approche de responsabilite en chaine : le developpeur est responsable de la fiabilite du modele, le deployeur de son utilisation appropriee, et l'utilisateur de son usage conforme. Mais les zones grises restent nombreuses." },
        { type: "heading", content: "La Transparence : Boite Noire vs Boite Blanche" },
        { type: "paragraph", content: "Beaucoup de systemes d'IA, en particulier les reseaux de neurones profonds, sont des \"boites noires\" : ils produisent des resultats sans pouvoir expliquer leur raisonnement. C'est problematique quand ces systemes prennent des decisions affectant la vie des gens (justice, sante, credit)." },
        { type: "subheading", content: "L'IA Explicable (XAI)" },
        { type: "paragraph", content: "L'IA explicable (Explainable AI ou XAI) vise a rendre les decisions de l'IA comprehensibles pour les humains. Des techniques comme LIME, SHAP et les cartes d'attention permettent de comprendre quels facteurs ont influence une decision." },
        { type: "key-point", content: "La transparence n'est pas seulement technique — c'est aussi une question de communication. Les entreprises doivent informer clairement quand l'IA est utilisee et comment elle affecte les decisions." },
        { type: "heading", content: "L'IA Responsable en Pratique" },
        { type: "paragraph", content: "Les bonnes pratiques incluent : documenter les choix de conception et les donnees d'entrainement, tester les modeles sur des populations diverses, permettre le recours humain pour les decisions a fort impact, publier des rapports de transparence (model cards), et mettre en place des mecanismes de signalement." },
        { type: "callout", content: "Anthropic (createur de Claude) publie des \"Responsible Scaling Policies\" et des evaluations de securite pour chaque version de ses modeles — un exemple de transparence dans l'industrie." },
        { type: "diagram", label: "La Chaine de Responsabilite IA", flow: "vertical", nodes: [
          { label: "Developpeur du modele", sub: "Fiabilite, biais, securite du modele", color: "purple" },
          { label: "Deployeur / Entreprise", sub: "Utilisation appropriee, documentation", color: "blue" },
          { label: "Utilisateur", sub: "Usage conforme, verification des resultats", color: "emerald" },
          { label: "Regulateur", sub: "Controle, sanctions, recours", color: "amber" },
        ]},
        { type: "tip", content: "Quand vous utilisez l'IA pour des decisions importantes, documentez le processus : quel outil, quelles donnees, quelle decision. Cette tracabilite est votre meilleure protection." },
        { type: "summary", items: [
          "La responsabilite est partagee : developpeur, deployeur, utilisateur",
          "Les systemes IA sont souvent des \"boites noires\" inexplicables",
          "L'IA explicable (XAI) vise a rendre les decisions comprehensibles",
          "Les model cards et rapports de transparence deviennent la norme",
          "Documentez vos decisions assistees par IA pour la tracabilite"
        ]},
      ],
      quiz: [
        {
          question: "Qui est responsable quand une IA prend une mauvaise decision ?",
          options: ["Uniquement le developpeur", "Uniquement l'utilisateur", "La responsabilite est partagee en chaine", "Personne n'est responsable"],
          correctIndex: 2,
          explanation: "La responsabilite est partagee : le developpeur est responsable de la fiabilite, le deployeur de l'utilisation appropriee, et l'utilisateur de l'usage conforme."
        },
        {
          question: "Que signifie \"boite noire\" pour un systeme d'IA ?",
          options: ["Le systeme est peint en noir", "Le systeme ne peut pas expliquer son raisonnement", "Le systeme ne fonctionne pas", "Le systeme est secret et non publie"],
          correctIndex: 1,
          explanation: "Une \"boite noire\" designe un systeme qui produit des resultats sans pouvoir expliquer son raisonnement interne — un defi pour la transparence."
        },
        {
          question: "Que signifie XAI ?",
          options: ["eXtreme Artificial Intelligence", "Explainable Artificial Intelligence", "eXtended AI Integration", "eXpert AI Interface"],
          correctIndex: 1,
          explanation: "XAI (Explainable Artificial Intelligence) est le domaine qui vise a rendre les decisions de l'IA comprehensibles pour les humains."
        },
        {
          question: "Pourquoi la transparence est-elle importante pour l'IA ?",
          options: ["Pour rendre l'IA plus rapide", "Pour comprendre et verifier les decisions de l'IA", "Pour reduire les couts", "Pour impressionner les clients"],
          correctIndex: 1,
          explanation: "La transparence permet de comprendre, verifier et contester les decisions de l'IA, ce qui est essentiel quand ces decisions affectent la vie des gens."
        },
      ],
    },
    {
      number: 8,
      title: "Le Futur de l'IA : Enjeux et Espoirs",
      description: "Les grands defis a venir et les promesses d'une IA responsable et benefique.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA de Demain : Entre Promesses et Defis" },
        { type: "paragraph", content: "L'IA evolue a une vitesse sans precedent. En 2026, les agents autonomes, les modeles multimodaux et l'IA embarquee transforment deja notre quotidien. Mais les plus grands changements sont encore a venir. L'horizon 2030 promet des avancees majeures — et souleve des questions ethiques d'une ampleur inedite." },
        { type: "paragraph", content: "Ce chapitre final explore les grands enjeux du futur : l'AGI (Intelligence Artificielle Generale), l'IA en sante et climat, la gouvernance mondiale et la place de l'humain dans un monde de plus en plus automatise." },
        { type: "heading", content: "L'AGI : Le Saint Graal Controverse" },
        { type: "paragraph", content: "L'AGI — une IA capable d'accomplir n'importe quelle tache intellectuelle humaine — est le but ultime de nombreux laboratoires. Si elle est atteinte, elle pourrait resoudre des problemes que l'humanite ne peut pas resoudre seule : maladies incurables, changement climatique, energies propres. Mais elle pourrait aussi concentrer un pouvoir immense entre quelques mains." },
        { type: "callout", content: "Geoffrey Hinton, prix Nobel de physique et \"parrain du Deep Learning\", a quitte Google en 2023 pour alerter sur les risques existentiels de l'IA avancee. Il reste neanmoins optimiste sur le potentiel benefique de l'IA encadree." },
        { type: "heading", content: "L'IA au Service de l'Humanite" },
        { type: "subheading", content: "Sante" },
        { type: "paragraph", content: "L'IA accelere la decouverte de medicaments (AlphaFold a predit la structure de 200 millions de proteines), ameliore le diagnostic precoce (detection de cancers invisible a l'oeil nu) et personnalise les traitements. D'ici 2030, l'IA pourrait contribuer a sauver des millions de vies." },
        { type: "subheading", content: "Climat et Environnement" },
        { type: "paragraph", content: "L'IA optimise les reseaux electriques, ameliore les previsions meteo (modele GraphCast de DeepMind), accelere la recherche sur les materiaux pour les batteries et le solaire, et aide a surveiller la deforestation par satellite." },
        { type: "heading", content: "Les Defis a Relever" },
        { type: "paragraph", content: "La concentration du pouvoir IA entre quelques entreprises americaines et chinoises pose un probleme de souverainete. L'impact environnemental des datacenters est croissant. L'inegalite d'acces a l'IA entre pays riches et pauvres risque de creuser le fosse numerique." },
        { type: "diagram", label: "Les Enjeux du Futur de l'IA", flow: "horizontal", nodes: [
          { label: "AGI", sub: "Potentiel immense, risques existentiels", color: "purple" },
          { label: "Sante / Climat", sub: "IA au service de l'humanite", color: "emerald" },
          { label: "Gouvernance", sub: "Regulation mondiale necessaire", color: "blue" },
          { label: "Equite", sub: "Acces egal pour tous les pays", color: "amber" },
        ]},
        { type: "key-point", content: "L'avenir de l'IA n'est pas predetermine. Il sera ce que nous en ferons. Chaque citoyen, developpeur et decideur a un role a jouer pour s'assurer que l'IA beneficie a l'ensemble de l'humanite." },
        { type: "diagram", label: "Votre Role dans l'IA Responsable", flow: "vertical", nodes: [
          { label: "S'informer", sub: "Comprendre les enjeux ethiques de l'IA", color: "blue" },
          { label: "Questionner", sub: "Esprit critique face aux decisions IA", color: "purple" },
          { label: "Agir", sub: "Exiger transparence et responsabilite", color: "emerald" },
          { label: "Participer", sub: "Contribuer au debat democratique sur l'IA", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'AGI pourrait resoudre de grands problemes ou concentrer un pouvoir immense",
          "L'IA en sante pourrait sauver des millions de vies d'ici 2030",
          "L'impact environnemental et l'inegalite d'acces sont des defis majeurs",
          "La gouvernance mondiale de l'IA est un enjeu geopolitique",
          "L'avenir de l'IA depend de nos choix collectifs — chacun a un role"
        ]},
      ],
      quiz: [
        {
          question: "Que signifie AGI ?",
          options: ["Automated General Interface", "Artificial General Intelligence", "Advanced GPU Infrastructure", "Applied Gradient Iteration"],
          correctIndex: 1,
          explanation: "AGI (Artificial General Intelligence) designe une IA hypothetique capable d'accomplir n'importe quelle tache intellectuelle humaine."
        },
        {
          question: "Comment l'IA peut-elle aider a combattre le changement climatique ?",
          options: ["En remplacant les humains", "En optimisant les reseaux electriques et la recherche sur les materiaux", "En supprimant Internet", "En arretant toute production industrielle"],
          correctIndex: 1,
          explanation: "L'IA optimise les reseaux electriques, ameliore les previsions meteo, accelere la recherche sur les batteries et aide a surveiller la deforestation."
        },
        {
          question: "Quel est un defi majeur de la concentration du pouvoir IA ?",
          options: ["Les entreprises IA sont trop petites", "Quelques entreprises controlent une technologie qui affecte toute l'humanite", "L'IA est trop lente", "Il y a trop d'entreprises IA"],
          correctIndex: 1,
          explanation: "La concentration du pouvoir IA entre quelques entreprises americaines et chinoises pose des problemes de souverainete et d'equite mondiale."
        },
        {
          question: "Quel est le message principal de ce cours sur l'ethique de l'IA ?",
          options: ["L'IA est dangereuse et doit etre interdite", "L'avenir de l'IA depend de nos choix collectifs", "L'IA est parfaite et n'a pas besoin de regulation", "Seuls les experts peuvent influencer l'avenir de l'IA"],
          correctIndex: 1,
          explanation: "L'avenir de l'IA n'est pas predetermine. Chaque citoyen, developpeur et decideur a un role a jouer pour une IA responsable et benefique."
        },
      ],
    },
  ],
};

export default content;
