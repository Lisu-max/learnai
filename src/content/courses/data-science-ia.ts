import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "data-science-ia",
  chapters: [
    {
      number: 1,
      title: "Introduction a la Data Science avec l'IA",
      description: "Decouvrir le monde de la data science et comment l'IA revolutionne ce domaine.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Qu'est-ce que la Data Science ?" },
        { type: "paragraph", content: "La data science est l'art d'extraire des connaissances et des insights a partir de donnees brutes. Elle combine statistiques, informatique et expertise metier pour transformer des volumes massifs de donnees en decisions eclairees. En 2026, l'IA a radicalement accelere chaque etape du processus." },
        { type: "paragraph", content: "Un data scientist moderne ne travaille plus seul : il est assiste par des outils IA qui automatisent le nettoyage de donnees, suggerent des modeles, et generent des visualisations en quelques secondes. Le metier evolue du codage manuel vers l'orchestration intelligente." },
        { type: "callout", content: "Selon LinkedIn, la data science reste le metier le plus demande en tech en 2026, avec une augmentation de 35% des offres par rapport a 2024. L'IA n'a pas remplace les data scientists — elle les a rendus 10x plus productifs." },
        { type: "video", videoId: "ua-CiDNNj30", label: "Introduction a la Data Science avec l'IA" },
        { type: "heading", content: "Le Pipeline Data Science" },
        { type: "paragraph", content: "Tout projet de data science suit un pipeline : collecte des donnees, nettoyage et preparation, exploration et visualisation, modelisation, evaluation, et deploiement. L'IA intervient desormais a chaque etape pour accelerer le travail." },
        { type: "subheading", content: "Data Science vs Machine Learning vs IA" },
        { type: "paragraph", content: "La data science est le domaine global qui englobe l'analyse de donnees. Le machine learning est une technique de la data science qui permet aux modeles d'apprendre automatiquement. L'IA est le cadre plus large qui inclut le ML, le NLP, la vision par ordinateur et bien plus." },
        { type: "key-point", content: "La data science sans IA, c'est comme conduire une voiture sans GPS : possible, mais beaucoup plus lent et risque. L'IA est devenue l'assistant indispensable du data scientist moderne." },
        { type: "diagram", label: "Le Pipeline Data Science", flow: "horizontal", nodes: [
          { label: "Collecte", sub: "APIs, bases de donnees, web scraping", color: "blue" },
          { label: "Nettoyage", sub: "Gestion des valeurs manquantes", color: "purple" },
          { label: "Exploration", sub: "Visualisation et statistiques", color: "emerald" },
          { label: "Modelisation", sub: "ML, deep learning, AutoML", color: "amber" },
          { label: "Deploiement", sub: "APIs, dashboards, MLOps", color: "pink" },
        ]},
        { type: "tip", content: "Pour debuter en data science, pas besoin d'un doctorat en mathematiques. Les outils IA modernes comme ChatGPT et Claude peuvent vous expliquer les concepts statistiques et vous aider a ecrire du code Python en temps reel." },
        { type: "summary", items: [
          "La data science extrait des connaissances a partir de donnees brutes",
          "L'IA accelere chaque etape du pipeline data science",
          "Le metier evolue vers l'orchestration intelligente",
          "Data science > ML > IA : trois niveaux imbriques",
          "Les outils IA rendent la data science accessible a tous"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la data science ?",
          options: ["Un langage de programmation", "L'art d'extraire des connaissances a partir de donnees", "Un type de base de donnees", "Un framework JavaScript"],
          correctIndex: 1,
          explanation: "La data science est l'art d'extraire des connaissances et des insights a partir de donnees brutes, en combinant statistiques, informatique et expertise metier."
        },
        {
          question: "Quelle est la premiere etape du pipeline data science ?",
          options: ["La modelisation", "Le deploiement", "La collecte des donnees", "L'evaluation"],
          correctIndex: 2,
          explanation: "La collecte des donnees est toujours la premiere etape. Sans donnees de qualite, aucun modele ne peut produire de bons resultats."
        },
        {
          question: "Comment l'IA a-t-elle change le metier de data scientist ?",
          options: ["Elle a remplace les data scientists", "Elle a rendu le metier obsolete", "Elle a rendu les data scientists 10x plus productifs", "Elle n'a eu aucun impact"],
          correctIndex: 2,
          explanation: "L'IA n'a pas remplace les data scientists mais les a rendus beaucoup plus productifs en automatisant les taches repetitives et en accelerant l'analyse."
        },
        {
          question: "Quelle est la relation entre data science, ML et IA ?",
          options: ["Ce sont des synonymes", "La data science englobe le ML, l'IA englobe tout", "L'IA est un sous-ensemble du ML", "Le ML n'a rien a voir avec la data science"],
          correctIndex: 1,
          explanation: "L'IA est le cadre le plus large, le ML est une technique de l'IA, et la data science est le domaine applique qui utilise le ML et d'autres methodes pour analyser les donnees."
        },
      ],
    },
    {
      number: 2,
      title: "Python et IA : Les Bases",
      description: "Les fondamentaux de Python pour la data science assistes par l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Pourquoi Python pour la Data Science ?" },
        { type: "paragraph", content: "Python est le langage dominant de la data science et du machine learning. Sa syntaxe claire, son ecosysteme massif de bibliotheques (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch), et sa communaute active en font le choix incontournable." },
        { type: "paragraph", content: "En 2026, coder en Python est encore plus facile grace aux assistants IA. ChatGPT, Claude et Cursor peuvent generer, expliquer et debugger du code Python instantanement. Vous n'avez plus besoin de memoriser chaque syntaxe — l'IA est votre copilote." },
        { type: "subheading", content: "Les Structures de Donnees Essentielles" },
        { type: "paragraph", content: "Les listes, dictionnaires, tuples et ensembles sont les briques de base. Les listes pour les sequences ordonnees, les dictionnaires pour les paires cle-valeur, les tuples pour les donnees immuables, et les ensembles pour les collections uniques." },
        { type: "subheading", content: "NumPy : Le Calcul Numerique" },
        { type: "paragraph", content: "NumPy est la fondation du calcul scientifique en Python. Ses tableaux multidimensionnels (ndarray) permettent des operations mathematiques vectorisees, jusqu'a 100x plus rapides que les boucles Python natives. C'est la base sur laquelle Pandas, Scikit-learn et TensorFlow sont construits." },
        { type: "prompt-example", prompt: "Ecris un script Python avec NumPy qui genere 1000 nombres aleatoires suivant une distribution normale, calcule la moyenne, la mediane et l'ecart-type, puis affiche un histogramme avec matplotlib.", result: "import numpy as np\nimport matplotlib.pyplot as plt\n\ndata = np.random.normal(loc=0, scale=1, size=1000)\nprint(f'Moyenne: {np.mean(data):.4f}')\nprint(f'Mediane: {np.median(data):.4f}')\nprint(f'Ecart-type: {np.std(data):.4f}')\n\nplt.hist(data, bins=30, edgecolor='black')\nplt.title('Distribution Normale')\nplt.show()" },
        { type: "video", videoId: "vmEHCJofslg", label: "Python pour la Data Science — les bases" },
        { type: "key-point", content: "Ne cherchez pas a tout memoriser. Utilisez l'IA pour generer le code, puis comprenez ce qu'il fait. La comprehension est plus importante que la memorisation en 2026." },
        { type: "diagram", label: "L'Ecosysteme Python Data Science", flow: "horizontal", nodes: [
          { label: "NumPy", sub: "Calcul numerique vectorise", color: "blue" },
          { label: "Pandas", sub: "Manipulation de donnees tabulaires", color: "purple" },
          { label: "Matplotlib / Seaborn", sub: "Visualisation de donnees", color: "emerald" },
          { label: "Scikit-learn", sub: "Machine Learning classique", color: "amber" },
        ]},
        { type: "summary", items: [
          "Python est le langage incontournable de la data science",
          "NumPy est la fondation du calcul scientifique en Python",
          "L'IA (ChatGPT, Claude, Cursor) accelere l'apprentissage de Python",
          "Listes, dictionnaires, tuples et ensembles sont les bases",
          "La comprehension du code est plus importante que la memorisation"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi Python domine-t-il la data science ?",
          options: ["Il est le plus rapide", "Sa syntaxe claire et son ecosysteme massif de bibliotheques", "Il est le plus ancien", "Il est le seul langage compatible avec l'IA"],
          correctIndex: 1,
          explanation: "Python domine grace a sa syntaxe claire, lisible, et surtout a son ecosysteme massif de bibliotheques specialisees (NumPy, Pandas, Scikit-learn, etc.)."
        },
        {
          question: "Qu'est-ce que NumPy ?",
          options: ["Un editeur de code", "Une bibliotheque de calcul numerique", "Un framework web", "Un outil de visualisation"],
          correctIndex: 1,
          explanation: "NumPy est la bibliotheque fondamentale pour le calcul scientifique en Python, offrant des tableaux multidimensionnels et des operations vectorisees."
        },
        {
          question: "Comment l'IA aide-t-elle a coder en Python ?",
          options: ["Elle remplace completement le developpeur", "Elle genere, explique et debugge du code instantanement", "Elle n'est pas utile pour Python", "Elle traduit Python en Java"],
          correctIndex: 1,
          explanation: "Les assistants IA comme ChatGPT et Claude generent du code Python, l'expliquent ligne par ligne, et aident a debugger les erreurs en temps reel."
        },
        {
          question: "Quelle structure Python est ideale pour stocker des paires cle-valeur ?",
          options: ["Liste", "Tuple", "Dictionnaire", "Ensemble"],
          correctIndex: 2,
          explanation: "Les dictionnaires Python stockent des paires cle-valeur, ce qui les rend ideaux pour representer des donnees structurees comme des enregistrements."
        },
      ],
    },
    {
      number: 3,
      title: "Pandas et Analyse de Donnees",
      description: "Maitriser Pandas pour manipuler, nettoyer et analyser des jeux de donnees.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Pandas : L'Outil Incontournable" },
        { type: "paragraph", content: "Pandas est la bibliotheque Python la plus utilisee pour la manipulation de donnees tabulaires. Ses deux structures principales — Series (1D) et DataFrame (2D) — permettent de charger, nettoyer, transformer et analyser des donnees avec une syntaxe intuitive." },
        { type: "paragraph", content: "Imaginez Pandas comme un Excel surpuissant programmable. Vous pouvez filtrer des millions de lignes en une seule commande, fusionner des tables complexes, et appliquer des transformations en masse — le tout en quelques lignes de code." },
        { type: "subheading", content: "Les Operations Fondamentales" },
        { type: "paragraph", content: "Charger des donnees (read_csv, read_excel, read_sql), explorer (head, describe, info), filtrer (loc, iloc, conditions booleennes), grouper (groupby), fusionner (merge, join), et exporter (to_csv, to_excel). Ce sont les operations que vous utiliserez quotidiennement." },
        { type: "subheading", content: "Le Nettoyage de Donnees" },
        { type: "paragraph", content: "80% du travail d'un data scientist est le nettoyage de donnees. Valeurs manquantes (dropna, fillna), doublons (drop_duplicates), types de donnees (astype), outliers, et normalisation. L'IA peut desormais automatiser une grande partie de ce nettoyage." },
        { type: "prompt-example", prompt: "J'ai un DataFrame Pandas avec des ventes mensuelles. Montre-moi comment nettoyer les valeurs manquantes, grouper par categorie de produit, et calculer le total des ventes par categorie.", result: "import pandas as pd\n\n# Nettoyage des valeurs manquantes\ndf = df.dropna(subset=['montant'])\ndf['categorie'] = df['categorie'].fillna('Inconnu')\n\n# Groupement et aggregation\nventes_par_cat = df.groupby('categorie')['montant'].agg(['sum','mean','count'])\nventes_par_cat = ventes_par_cat.sort_values('sum', ascending=False)\nprint(ventes_par_cat)" },
        { type: "callout", content: "Astuce IA : demandez a ChatGPT ou Claude de generer vos pipelines Pandas. Decrivez vos donnees en langage naturel et l'IA produira le code optimise. Verifiez toujours le resultat sur un echantillon." },
        { type: "video", videoId: "i_LwzRVP7bg", label: "Pandas en 20 minutes — tutoriel pratique" },
        { type: "diagram", label: "Le Workflow Pandas Typique", flow: "horizontal", nodes: [
          { label: "Charger", sub: "read_csv, read_excel, read_sql", color: "blue" },
          { label: "Explorer", sub: "head, describe, info, shape", color: "purple" },
          { label: "Nettoyer", sub: "dropna, fillna, drop_duplicates", color: "pink" },
          { label: "Transformer", sub: "groupby, merge, pivot, apply", color: "emerald" },
          { label: "Exporter", sub: "to_csv, to_excel, to_sql", color: "amber" },
        ]},
        { type: "summary", items: [
          "Pandas est l'outil central de la manipulation de donnees en Python",
          "DataFrame (2D) et Series (1D) sont les structures principales",
          "80% du travail est le nettoyage de donnees",
          "L'IA peut generer et optimiser vos pipelines Pandas",
          "Operations cles : charger, explorer, nettoyer, transformer, exporter"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la structure principale de Pandas pour les donnees tabulaires ?",
          options: ["Array", "DataFrame", "Matrix", "Table"],
          correctIndex: 1,
          explanation: "Le DataFrame est la structure 2D principale de Pandas, equivalent a un tableau avec des lignes et des colonnes nommees."
        },
        {
          question: "Quel pourcentage du travail d'un data scientist est consacre au nettoyage de donnees ?",
          options: ["20%", "50%", "80%", "95%"],
          correctIndex: 2,
          explanation: "Environ 80% du temps d'un data scientist est consacre au nettoyage et a la preparation des donnees — c'est l'etape la plus chronophage."
        },
        {
          question: "Quelle methode Pandas supprime les lignes avec des valeurs manquantes ?",
          options: ["remove_null()", "dropna()", "clean()", "delete_missing()"],
          correctIndex: 1,
          explanation: "La methode dropna() supprime les lignes (ou colonnes) contenant des valeurs manquantes (NaN) dans un DataFrame."
        },
        {
          question: "Comment Pandas charge-t-il un fichier CSV ?",
          options: ["pd.open_csv()", "pd.read_csv()", "pd.load_csv()", "pd.import_csv()"],
          correctIndex: 1,
          explanation: "pd.read_csv() est la methode standard pour charger un fichier CSV dans un DataFrame Pandas."
        },
      ],
    },
    {
      number: 4,
      title: "Visualisation de Donnees avec l'IA",
      description: "Creer des graphiques impactants avec Matplotlib, Seaborn et les outils IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Art de la Visualisation de Donnees" },
        { type: "paragraph", content: "Une bonne visualisation transforme des donnees brutes en insights comprehensibles instantanement. Elle raconte une histoire, revele des tendances cachees, et guide la prise de decision. En data science, la visualisation est aussi importante que l'analyse elle-meme." },
        { type: "subheading", content: "Matplotlib : La Fondation" },
        { type: "paragraph", content: "Matplotlib est la bibliotheque de base pour la visualisation en Python. Flexible mais verbose, elle permet de creer pratiquement n'importe quel type de graphique. Sa syntaxe orientee objet offre un controle total sur chaque element du graphique." },
        { type: "subheading", content: "Seaborn : La Beaute Statistique" },
        { type: "paragraph", content: "Seaborn est construit sur Matplotlib et offre des graphiques statistiques elegants en une seule ligne de code. Histogrammes, heatmaps, violin plots, pair plots — Seaborn excelle dans l'exploration visuelle des donnees." },
        { type: "subheading", content: "Plotly : L'Interactivite" },
        { type: "paragraph", content: "Plotly cree des graphiques interactifs pour le web. Zoom, survol, filtres dynamiques — ideal pour les dashboards et les presentations. Dash (par Plotly) permet de creer des applications web completes de data visualization." },
        { type: "tip", content: "Demandez a ChatGPT ou Claude de generer vos graphiques. Decrivez ce que vous voulez visualiser et l'IA produira le code Matplotlib, Seaborn ou Plotly adapte. Vous pouvez meme lui envoyer une capture d'ecran du graphique souhaite." },
        { type: "video", videoId: "OGxgnH8y2NM", label: "Visualisation de donnees avec Python" },
        { type: "key-point", content: "Le choix du graphique depend de la question posee : barres pour comparer, lignes pour les tendances temporelles, scatter pour les correlations, pie pour les proportions, heatmap pour les matrices." },
        { type: "diagram", label: "Quel Graphique pour Quelle Question ?", flow: "horizontal", nodes: [
          { label: "Barres", sub: "Comparer des categories", color: "blue" },
          { label: "Lignes", sub: "Tendances temporelles", color: "purple" },
          { label: "Scatter", sub: "Correlations entre variables", color: "emerald" },
          { label: "Heatmap", sub: "Matrices de correlation", color: "amber" },
        ]},
        { type: "prompt-example", prompt: "Cree un graphique Seaborn qui montre la correlation entre le prix et la surface d'appartements, avec une ligne de regression et les points colores par quartier.", result: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.lmplot(data=df, x='surface', y='prix',\n           hue='quartier', height=8,\n           scatter_kws={'alpha': 0.6})\nplt.title('Prix vs Surface par Quartier')\nplt.xlabel('Surface (m2)')\nplt.ylabel('Prix (EUR)')\nplt.show()" },
        { type: "summary", items: [
          "La visualisation transforme des donnees brutes en insights actionnables",
          "Matplotlib pour le controle total, Seaborn pour l'elegance, Plotly pour l'interactivite",
          "Le choix du graphique depend de la question posee",
          "L'IA peut generer des graphiques complexes a partir de descriptions en langage naturel",
          "Une bonne visualisation raconte une histoire claire"
        ]},
      ],
      quiz: [
        {
          question: "Quelle bibliotheque Python offre des graphiques statistiques elegants en une ligne ?",
          options: ["Matplotlib", "Seaborn", "NumPy", "Pandas"],
          correctIndex: 1,
          explanation: "Seaborn est construit sur Matplotlib et offre des graphiques statistiques elegants avec une syntaxe minimaliste, en une seule ligne de code."
        },
        {
          question: "Quel type de graphique est ideal pour montrer une tendance temporelle ?",
          options: ["Diagramme en barres", "Graphique en lignes", "Pie chart", "Scatter plot"],
          correctIndex: 1,
          explanation: "Les graphiques en lignes sont ideaux pour montrer l'evolution d'une variable au fil du temps (tendances temporelles)."
        },
        {
          question: "Quelle bibliotheque permet de creer des graphiques interactifs pour le web ?",
          options: ["Matplotlib", "Seaborn", "Plotly", "NumPy"],
          correctIndex: 2,
          explanation: "Plotly cree des graphiques interactifs pour le web avec zoom, survol, et filtres dynamiques — ideal pour les dashboards."
        },
        {
          question: "Quel graphique utiliser pour visualiser une matrice de correlation ?",
          options: ["Histogramme", "Heatmap", "Camembert", "Graphique en barres"],
          correctIndex: 1,
          explanation: "La heatmap est le graphique ideal pour visualiser une matrice de correlation, avec des couleurs representant l'intensite des correlations."
        },
      ],
    },
    {
      number: 5,
      title: "Machine Learning : Concepts Fondamentaux",
      description: "Comprendre les bases du ML : supervise, non supervise, evaluation des modeles.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Les Fondements du Machine Learning" },
        { type: "paragraph", content: "Le machine learning permet aux ordinateurs d'apprendre des patterns a partir de donnees sans etre explicitement programmes. En data science, c'est l'outil qui transforme les donnees en predictions, classifications et recommandations." },
        { type: "subheading", content: "Apprentissage Supervise" },
        { type: "paragraph", content: "Le modele apprend a partir d'exemples etiquetes. Donnez-lui des milliers d'emails classes comme spam ou non-spam, et il apprendra a distinguer les deux. Les algorithmes cles : regression lineaire, arbres de decision, Random Forest, SVM, et reseaux de neurones." },
        { type: "subheading", content: "Apprentissage Non Supervise" },
        { type: "paragraph", content: "Le modele decouvre des structures cachees sans etiquettes. Il identifie des groupes (clustering), reduit la dimensionnalite, ou detecte des anomalies. Algorithmes cles : K-Means, DBSCAN, PCA, et autoencoders." },
        { type: "heading", content: "Le Workflow ML" },
        { type: "paragraph", content: "1) Split des donnees (train/test/validation). 2) Choix de l'algorithme. 3) Entrainement sur les donnees train. 4) Evaluation sur les donnees test. 5) Optimisation des hyperparametres. 6) Deploiement du modele final." },
        { type: "key-point", content: "Le sur-apprentissage (overfitting) est le piege numero 1 en ML. Un modele qui performe trop bien sur les donnees d'entrainement mais mal sur de nouvelles donnees est inutile. Le split train/test est votre premiere protection." },
        { type: "video", videoId: "ua-CiDNNj30", label: "Les concepts cles du Machine Learning" },
        { type: "diagram", label: "Le Workflow Machine Learning", flow: "horizontal", nodes: [
          { label: "Split donnees", sub: "Train / Test / Validation", color: "blue" },
          { label: "Entrainement", sub: "L'algorithme apprend les patterns", color: "purple" },
          { label: "Evaluation", sub: "Metriques sur donnees test", color: "emerald" },
          { label: "Optimisation", sub: "Tuning des hyperparametres", color: "amber" },
        ]},
        { type: "diagram", label: "Supervise vs Non Supervise", flow: "horizontal", nodes: [
          { label: "Supervise", sub: "Donnees etiquetees → prediction", color: "purple" },
          { label: "Non supervise", sub: "Pas d'etiquettes → decouverte", color: "blue" },
        ]},
        { type: "tip", content: "Scikit-learn offre une API unifiee pour quasiment tous les algorithmes ML classiques. Apprenez fit(), predict() et score() — ces 3 methodes couvrent 90% de vos besoins." },
        { type: "summary", items: [
          "Le ML permet d'apprendre des patterns a partir de donnees",
          "Supervise : donnees etiquetees, prediction et classification",
          "Non supervise : pas d'etiquettes, clustering et detection d'anomalies",
          "Le sur-apprentissage est le piege principal a eviter",
          "Le split train/test est essentiel pour evaluer un modele"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le sur-apprentissage (overfitting) ?",
          options: ["Un modele qui apprend trop lentement", "Un modele trop performant sur les donnees d'entrainement mais mauvais sur de nouvelles donnees", "Un modele qui manque de donnees", "Un modele qui utilise trop de RAM"],
          correctIndex: 1,
          explanation: "Le sur-apprentissage se produit quand un modele memorise les donnees d'entrainement au lieu d'apprendre les patterns generalisables."
        },
        {
          question: "Pourquoi divise-t-on les donnees en train et test ?",
          options: ["Pour economiser de la memoire", "Pour evaluer la performance du modele sur des donnees inedites", "Par convention uniquement", "Pour accelerer l'entrainement"],
          correctIndex: 1,
          explanation: "Le split train/test permet d'evaluer comment le modele se comporte sur des donnees qu'il n'a jamais vues, simulant une utilisation reelle."
        },
        {
          question: "Quel algorithme est utilise pour le clustering ?",
          options: ["Regression lineaire", "K-Means", "Random Forest", "SVM"],
          correctIndex: 1,
          explanation: "K-Means est un algorithme de clustering (apprentissage non supervise) qui regroupe les donnees en K clusters bases sur leur similarite."
        },
        {
          question: "Quelles sont les 3 methodes Scikit-learn les plus utilisees ?",
          options: ["load(), save(), run()", "fit(), predict(), score()", "train(), test(), deploy()", "read(), write(), execute()"],
          correctIndex: 1,
          explanation: "fit() entraine le modele, predict() fait des predictions, et score() evalue la performance — ces 3 methodes couvrent 90% des besoins en ML."
        },
      ],
    },
    {
      number: 6,
      title: "Regression et Classification",
      description: "Les deux piliers du ML supervise : predire des valeurs et classifier des categories.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Regression : Predire des Valeurs Continues" },
        { type: "paragraph", content: "La regression predit une valeur numerique continue : prix d'un appartement, temperature demain, chiffre d'affaires du mois prochain. La regression lineaire est le point de depart, mais des modeles plus complexes comme Random Forest Regressor et XGBoost offrent souvent de meilleures performances." },
        { type: "paragraph", content: "Les metriques de regression : MAE (erreur absolue moyenne), MSE (erreur quadratique moyenne), RMSE (racine de MSE), et R2 (coefficient de determination). Un R2 de 0.85 signifie que votre modele explique 85% de la variance des donnees." },
        { type: "heading", content: "Classification : Predire des Categories" },
        { type: "paragraph", content: "La classification assigne une categorie a une observation : spam ou non-spam, client fidele ou desabonne, maladie presente ou absente. Les algorithmes courants : regression logistique, arbres de decision, Random Forest, SVM, et reseaux de neurones." },
        { type: "paragraph", content: "Les metriques de classification : accuracy, precision, recall, F1-score, et matrice de confusion. L'accuracy seule peut etre trompeuse avec des classes desequilibrees — le F1-score est souvent plus fiable." },
        { type: "callout", content: "Attention aux classes desequilibrees ! Si 95% de vos emails sont non-spam, un modele qui repond toujours \"non-spam\" aura 95% d'accuracy mais sera completement inutile. Utilisez le F1-score ou l'AUC-ROC." },
        { type: "video", videoId: "vmEHCJofslg", label: "Regression vs Classification expliquees" },
        { type: "prompt-example", prompt: "Entraine un modele Random Forest pour predire si un client va se desabonner (churn), avec un rapport de classification complet.", result: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(classification_report(y_test, y_pred))" },
        { type: "diagram", label: "Regression vs Classification", flow: "horizontal", nodes: [
          { label: "Regression", sub: "Valeurs continues (prix, temperature)", color: "blue" },
          { label: "Classification", sub: "Categories (spam/non-spam, oui/non)", color: "purple" },
        ]},
        { type: "key-point", content: "Le choix entre regression et classification depend de la nature de votre variable cible : continue (nombre) = regression, categorielle (classe) = classification." },
        { type: "summary", items: [
          "Regression : predire des valeurs continues (prix, temperature)",
          "Classification : predire des categories (spam, churn, maladie)",
          "Metriques regression : MAE, RMSE, R2",
          "Metriques classification : accuracy, precision, recall, F1-score",
          "Attention aux classes desequilibrees — le F1-score est plus fiable que l'accuracy"
        ]},
      ],
      quiz: [
        {
          question: "Quel type de ML utiliser pour predire le prix d'un appartement ?",
          options: ["Classification", "Clustering", "Regression", "Reinforcement learning"],
          correctIndex: 2,
          explanation: "Le prix est une valeur continue, donc on utilise la regression pour le predire."
        },
        {
          question: "Que signifie un R2 de 0.85 ?",
          options: ["Le modele a 85% d'accuracy", "Le modele explique 85% de la variance des donnees", "Le modele a 85% de precision", "Le modele utilise 85% des donnees"],
          correctIndex: 1,
          explanation: "Le R2 (coefficient de determination) mesure la proportion de la variance expliquee par le modele. 0.85 signifie que le modele capture 85% de la variabilite."
        },
        {
          question: "Pourquoi l'accuracy peut-elle etre trompeuse ?",
          options: ["Elle est toujours fausse", "Elle ne fonctionne pas avec les classes desequilibrees", "Elle est trop complexe a calculer", "Elle ne mesure que la regression"],
          correctIndex: 1,
          explanation: "Avec des classes desequilibrees (ex: 95% non-spam), un modele naif peut atteindre 95% d'accuracy en predisant toujours la classe majoritaire."
        },
        {
          question: "Quel algorithme est couramment utilise pour la classification ?",
          options: ["Regression lineaire", "K-Means", "Random Forest", "PCA"],
          correctIndex: 2,
          explanation: "Random Forest est un algorithme polyvalent utilise pour la classification (et la regression). Il combine des centaines d'arbres de decision pour des predictions robustes."
        },
      ],
    },
    {
      number: 7,
      title: "Clustering et Segmentation",
      description: "Regrouper automatiquement les donnees pour decouvrir des structures cachees.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Le Clustering : Decouvrir des Groupes" },
        { type: "paragraph", content: "Le clustering est une technique d'apprentissage non supervise qui regroupe des observations similaires ensemble. Sans etiquettes prealables, l'algorithme identifie des structures naturelles dans les donnees : segments de clients, groupes de produits, ou clusters de comportements." },
        { type: "subheading", content: "K-Means" },
        { type: "paragraph", content: "K-Means est l'algorithme de clustering le plus populaire. Il partitionne les donnees en K groupes en minimisant la distance intra-cluster. Simple et rapide, il fonctionne bien pour des clusters spheriques de taille similaire. La methode du coude (elbow method) aide a determiner le nombre optimal de clusters." },
        { type: "subheading", content: "DBSCAN" },
        { type: "paragraph", content: "DBSCAN detecte des clusters de formes arbitraires et identifie automatiquement les points aberrants (outliers). Contrairement a K-Means, il ne necessite pas de specifier le nombre de clusters a l'avance — il les decouvre automatiquement." },
        { type: "heading", content: "Cas d'Usage : La Segmentation Client" },
        { type: "paragraph", content: "La segmentation RFM (Recency, Frequency, Monetary) est un classique du marketing data-driven. En appliquant K-Means sur les scores RFM, vous identifiez vos meilleurs clients, les clients a risque, et les clients perdus — permettant des actions marketing ciblees." },
        { type: "video", videoId: "i_LwzRVP7bg", label: "Clustering et segmentation expliques" },
        { type: "diagram", label: "K-Means vs DBSCAN", flow: "horizontal", nodes: [
          { label: "K-Means", sub: "Clusters spheriques, K fixe", color: "blue" },
          { label: "DBSCAN", sub: "Formes arbitraires, K auto", color: "purple" },
        ]},
        { type: "tip", content: "Pour la segmentation client, commencez toujours par une analyse RFM. C'est simple, interpretable, et actionnable. L'IA peut vous aider a determiner le nombre optimal de segments." },
        { type: "diagram", label: "La Segmentation RFM", flow: "horizontal", nodes: [
          { label: "Recency", sub: "Date du dernier achat", color: "emerald" },
          { label: "Frequency", sub: "Nombre d'achats", color: "amber" },
          { label: "Monetary", sub: "Montant total depense", color: "pink" },
        ]},
        { type: "summary", items: [
          "Le clustering regroupe des donnees similaires sans etiquettes",
          "K-Means : simple, rapide, clusters spheriques",
          "DBSCAN : formes arbitraires, detection d'outliers",
          "La segmentation RFM est un cas d'usage classique en marketing",
          "L'IA aide a determiner le nombre optimal de clusters"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le clustering ?",
          options: ["Predire une valeur continue", "Regrouper des donnees similaires sans etiquettes", "Classifier des emails comme spam", "Entrainer un reseau de neurones"],
          correctIndex: 1,
          explanation: "Le clustering regroupe des observations similaires ensemble sans utiliser d'etiquettes — c'est un apprentissage non supervise."
        },
        {
          question: "Quel avantage DBSCAN a-t-il sur K-Means ?",
          options: ["Il est plus rapide", "Il detecte des clusters de formes arbitraires", "Il necessite moins de donnees", "Il est plus precis"],
          correctIndex: 1,
          explanation: "DBSCAN peut detecter des clusters de formes arbitraires et identifier les outliers, alors que K-Means est limite aux clusters spheriques."
        },
        {
          question: "Que signifie RFM dans la segmentation client ?",
          options: ["Random Forest Model", "Recency, Frequency, Monetary", "Real-time Feature Mapping", "Recursive Function Method"],
          correctIndex: 1,
          explanation: "RFM signifie Recency (recence d'achat), Frequency (frequence d'achat), Monetary (montant depense) — trois criteres pour segmenter les clients."
        },
        {
          question: "Comment determiner le nombre optimal de clusters en K-Means ?",
          options: ["On choisit toujours 3", "La methode du coude (elbow method)", "On prend le nombre de variables", "On teste aleatoirement"],
          correctIndex: 1,
          explanation: "La methode du coude trace l'inertie en fonction du nombre de clusters et identifie le point d'inflexion optimal."
        },
      ],
    },
    {
      number: 8,
      title: "NLP et Analyse de Texte",
      description: "Analyser du texte avec l'IA : sentiment, extraction d'entites, topic modeling.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le NLP au Service de la Data Science" },
        { type: "paragraph", content: "Le traitement du langage naturel (NLP) permet d'analyser des donnees textuelles a grande echelle : avis clients, articles, emails, rapports. En 2026, les LLM ont revolutionne le NLP — ce qui necessitait des semaines de code peut etre fait en un prompt." },
        { type: "subheading", content: "Analyse de Sentiment" },
        { type: "paragraph", content: "Detecter si un texte est positif, negatif ou neutre. Applications : monitoring de marque, analyse d'avis clients, detection de tendances sur les reseaux sociaux. Les LLM comme Claude et GPT excellent dans cette tache avec une precision superieure aux methodes classiques." },
        { type: "subheading", content: "Extraction d'Entites Nommees (NER)" },
        { type: "paragraph", content: "Identifier automatiquement les personnes, lieux, organisations, dates et montants dans un texte. SpaCy et les LLM permettent cette extraction en quelques lignes de code. Essentiel pour structurer des donnees textuelles brutes." },
        { type: "subheading", content: "Topic Modeling" },
        { type: "paragraph", content: "Decouvrir les themes principaux dans un corpus de documents. LDA (Latent Dirichlet Allocation) et BERTopic sont les approches classiques. Les LLM offrent desormais une alternative plus simple : donnez un corpus a Claude et demandez-lui d'identifier les themes." },
        { type: "prompt-example", prompt: "Analyse le sentiment de ces 5 avis clients et classe-les en positif, neutre ou negatif. Explique ton raisonnement.", result: "Avis 1: \"Produit genial, livraison rapide\" → POSITIF (termes laudatifs)\nAvis 2: \"Correct mais rien d'exceptionnel\" → NEUTRE (nuance)\nAvis 3: \"Completement decue, ne fonctionne pas\" → NEGATIF (deception)\nAvis 4: \"Bon rapport qualite-prix\" → POSITIF (satisfaction)\nAvis 5: \"Service client inexistant\" → NEGATIF (critique)" },
        { type: "video", videoId: "OGxgnH8y2NM", label: "NLP et analyse de texte avec Python" },
        { type: "diagram", label: "Les Techniques NLP en Data Science", flow: "horizontal", nodes: [
          { label: "Sentiment", sub: "Positif / Negatif / Neutre", color: "purple" },
          { label: "NER", sub: "Personnes, lieux, organisations", color: "blue" },
          { label: "Topic Modeling", sub: "Themes principaux d'un corpus", color: "emerald" },
          { label: "Summarization", sub: "Resume automatique de textes", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le NLP analyse des donnees textuelles a grande echelle",
          "Les LLM ont revolutionne le NLP — un prompt remplace des semaines de code",
          "Analyse de sentiment : detecter l'opinion dans les textes",
          "NER : extraire personnes, lieux, organisations automatiquement",
          "Topic modeling : decouvrir les themes dans un corpus"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'analyse de sentiment ?",
          options: ["Detecter les emotions faciales", "Determiner si un texte est positif, negatif ou neutre", "Traduire un texte dans une autre langue", "Resumer un document"],
          correctIndex: 1,
          explanation: "L'analyse de sentiment determine la polarite d'un texte (positif, negatif, neutre) — essentielle pour le monitoring de marque et l'analyse d'avis."
        },
        {
          question: "Que signifie NER ?",
          options: ["Neural Engine Recognition", "Named Entity Recognition", "Natural Expression Resolver", "Numeric Extraction Routine"],
          correctIndex: 1,
          explanation: "NER (Named Entity Recognition) identifie automatiquement les entites nommees dans un texte : personnes, lieux, organisations, dates."
        },
        {
          question: "Comment les LLM ont-ils change le NLP ?",
          options: ["Ils l'ont rendu obsolete", "Ils permettent de faire en un prompt ce qui prenait des semaines", "Ils n'ont eu aucun impact", "Ils ont complexifie le processus"],
          correctIndex: 1,
          explanation: "Les LLM comme Claude et GPT permettent de realiser des taches NLP complexes (sentiment, NER, resume) en un seul prompt, sans code specialise."
        },
        {
          question: "Quel est l'objectif du topic modeling ?",
          options: ["Traduire des textes", "Decouvrir les themes principaux dans un corpus", "Corriger l'orthographe", "Compresser des fichiers texte"],
          correctIndex: 1,
          explanation: "Le topic modeling identifie automatiquement les themes dominants dans un ensemble de documents, sans supervision humaine."
        },
      ],
    },
    {
      number: 9,
      title: "Vision par Ordinateur",
      description: "Analyser des images et videos avec Python : detection d'objets, classification, OCR.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Vision par Ordinateur en Data Science" },
        { type: "paragraph", content: "La vision par ordinateur permet aux machines d'analyser et de comprendre les images et les videos. En data science, elle est utilisee pour la classification d'images, la detection d'objets, l'OCR (reconnaissance de texte), et l'analyse de documents visuels." },
        { type: "subheading", content: "Classification d'Images" },
        { type: "paragraph", content: "Assigner une categorie a une image : chat vs chien, tumeur benigne vs maligne, produit defectueux vs conforme. Les modeles pre-entraines (ResNet, EfficientNet, ViT) permettent d'obtenir d'excellents resultats avec peu de donnees via le transfer learning." },
        { type: "subheading", content: "Detection d'Objets" },
        { type: "paragraph", content: "Localiser et identifier des objets dans une image. YOLO (You Only Look Once) est le standard de facto pour la detection en temps reel. Applications : vehicules autonomes, surveillance, comptage automatique, controle qualite industriel." },
        { type: "heading", content: "L'IA Multimodale Simplifie Tout" },
        { type: "paragraph", content: "En 2026, les modeles multimodaux comme GPT-5.4 et Claude 4.6 peuvent analyser des images directement. Plus besoin de pipelines complexes pour de nombreuses taches : envoyez l'image a l'API et posez votre question en langage naturel." },
        { type: "callout", content: "Le transfer learning est votre meilleur ami en vision par ordinateur. Au lieu d'entrainer un modele de zero (necessitant des millions d'images), utilisez un modele pre-entraine et affinez-le sur vos donnees — quelques centaines d'images suffisent souvent." },
        { type: "video", videoId: "ua-CiDNNj30", label: "Vision par ordinateur avec Python" },
        { type: "diagram", label: "Applications de la Vision par Ordinateur", flow: "horizontal", nodes: [
          { label: "Classification", sub: "Categorie d'une image", color: "purple" },
          { label: "Detection", sub: "Localiser des objets (YOLO)", color: "blue" },
          { label: "OCR", sub: "Extraire du texte d'images", color: "emerald" },
          { label: "Segmentation", sub: "Decouper une image en zones", color: "amber" },
        ]},
        { type: "summary", items: [
          "La vision par ordinateur analyse images et videos automatiquement",
          "Transfer learning : affiner un modele pre-entraine avec peu de donnees",
          "YOLO est le standard pour la detection d'objets en temps reel",
          "Les modeles multimodaux simplifient l'analyse d'images",
          "Applications : sante, industrie, vehicules autonomes, documents"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le transfer learning ?",
          options: ["Transferer des donnees entre serveurs", "Reutiliser un modele pre-entraine pour une nouvelle tache", "Copier le code d'un collegue", "Envoyer un modele sur le cloud"],
          correctIndex: 1,
          explanation: "Le transfer learning consiste a prendre un modele pre-entraine sur des millions d'images et a l'affiner sur votre tache specifique avec peu de donnees."
        },
        {
          question: "Quel algorithme est le standard pour la detection d'objets en temps reel ?",
          options: ["K-Means", "Random Forest", "YOLO", "PCA"],
          correctIndex: 2,
          explanation: "YOLO (You Only Look Once) est l'algorithme de reference pour la detection d'objets en temps reel, utilise dans les vehicules autonomes et la surveillance."
        },
        {
          question: "Comment les modeles multimodaux simplifient-ils la vision par ordinateur ?",
          options: ["Ils sont gratuits", "Ils analysent des images via une simple question en langage naturel", "Ils sont plus rapides que YOLO", "Ils n'ont pas besoin de GPU"],
          correctIndex: 1,
          explanation: "Les modeles multimodaux permettent d'analyser des images en posant simplement une question en langage naturel, sans pipeline complexe."
        },
        {
          question: "Que signifie OCR ?",
          options: ["Online Computer Rendering", "Optical Character Recognition", "Object Classification Runtime", "Optimized Code Repository"],
          correctIndex: 1,
          explanation: "OCR (Optical Character Recognition) est la technologie qui extrait du texte a partir d'images ou de documents scannes."
        },
      ],
    },
    {
      number: 10,
      title: "AutoML et No-Code ML",
      description: "Creer des modeles ML sans coder grace aux plateformes AutoML.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "AutoML : Le Machine Learning Automatise" },
        { type: "paragraph", content: "L'AutoML automatise les etapes les plus complexes du machine learning : selection de features, choix d'algorithme, tuning d'hyperparametres, et meme la creation d'ensembles de modeles. Ce qui prenait des jours a un expert prend desormais quelques minutes." },
        { type: "subheading", content: "Outils AutoML Open Source" },
        { type: "paragraph", content: "Auto-sklearn et TPOT sont des bibliotheques Python qui automatisent la selection et l'optimisation de modeles Scikit-learn. H2O AutoML offre une plateforme complete avec une interface web. PyCaret simplifie le ML en quelques lignes de code." },
        { type: "subheading", content: "Plateformes No-Code" },
        { type: "paragraph", content: "Google Vertex AI, Azure ML, et Amazon SageMaker proposent des interfaces visuelles pour creer des modeles sans ecrire une seule ligne de code. Importez vos donnees, choisissez votre cible, et la plateforme fait le reste." },
        { type: "heading", content: "Les LLM comme Outils AutoML" },
        { type: "paragraph", content: "En 2026, la facon la plus simple de faire du ML est de demander a Claude ou GPT. Decrivez votre dataset et votre objectif, et l'IA generera le code complet : preprocessing, feature engineering, entrainement, evaluation et visualisation." },
        { type: "tip", content: "L'AutoML est parfait pour le prototypage rapide et pour obtenir une baseline. Mais pour les modeles en production a haute performance, l'expertise humaine reste necessaire pour le feature engineering et l'optimisation fine." },
        { type: "video", videoId: "vmEHCJofslg", label: "AutoML — creer des modeles sans expertise" },
        { type: "diagram", label: "Du Code Manuel a l'AutoML", flow: "vertical", nodes: [
          { label: "Code manuel", sub: "Expert, flexible, long", color: "pink" },
          { label: "Bibliotheques AutoML", sub: "Auto-sklearn, PyCaret, H2O", color: "purple" },
          { label: "Plateformes no-code", sub: "Vertex AI, SageMaker, Azure ML", color: "blue" },
          { label: "LLM assistants", sub: "Claude, GPT — ML en langage naturel", color: "emerald" },
        ]},
        { type: "summary", items: [
          "AutoML automatise selection d'algorithme, tuning et evaluation",
          "Outils open source : Auto-sklearn, PyCaret, H2O AutoML",
          "Plateformes no-code : Vertex AI, SageMaker, Azure ML",
          "Les LLM sont la nouvelle interface pour faire du ML",
          "AutoML pour le prototypage, expertise humaine pour la production"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'AutoML automatise ?",
          options: ["Uniquement la collecte de donnees", "La selection d'algorithme, le tuning et l'evaluation", "Uniquement la visualisation", "Uniquement le deploiement"],
          correctIndex: 1,
          explanation: "L'AutoML automatise les etapes les plus complexes du ML : selection de features, choix d'algorithme, tuning d'hyperparametres et creation d'ensembles."
        },
        {
          question: "Quelle plateforme no-code est proposee par Google ?",
          options: ["SageMaker", "Azure ML", "Vertex AI", "H2O"],
          correctIndex: 2,
          explanation: "Google Vertex AI est la plateforme ML de Google Cloud, offrant des outils AutoML avec une interface visuelle no-code."
        },
        {
          question: "Pourquoi l'AutoML ne remplace-t-il pas completement l'expertise humaine ?",
          options: ["Il est trop cher", "Le feature engineering et l'optimisation fine restent critiques en production", "Il ne fonctionne qu'avec Python", "Il ne supporte pas le deep learning"],
          correctIndex: 1,
          explanation: "L'AutoML est excellent pour le prototypage, mais les modeles de production haute performance necessitent une expertise humaine en feature engineering et optimisation."
        },
        {
          question: "Comment les LLM revolutionnent-ils le ML en 2026 ?",
          options: ["Ils remplacent tous les algorithmes", "Ils permettent de decrire un objectif ML en langage naturel et generer le code", "Ils sont gratuits", "Ils fonctionnent sans donnees"],
          correctIndex: 1,
          explanation: "Les LLM permettent de decrire votre dataset et objectif en langage naturel, et ils generent le code ML complet : preprocessing, entrainement, evaluation."
        },
      ],
    },
    {
      number: 11,
      title: "Feature Engineering avec l'IA",
      description: "Creer et selectionner les meilleures features pour ameliorer vos modeles.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Feature Engineering : L'Art Cache du ML" },
        { type: "paragraph", content: "Le feature engineering est le processus de creation, transformation et selection des variables d'entree pour un modele ML. C'est souvent ce qui fait la difference entre un modele mediocre et un modele excellent. Un bon feature engineering peut ameliorer la performance de 20% a 50%." },
        { type: "subheading", content: "Techniques de Creation de Features" },
        { type: "paragraph", content: "Encodage des variables categorielles (one-hot, label, target encoding), creation de features temporelles (jour de semaine, mois, saison), interactions entre variables, transformations mathematiques (log, racine carree), et features de texte (TF-IDF, embeddings)." },
        { type: "subheading", content: "Selection de Features" },
        { type: "paragraph", content: "Trop de features = overfitting et lenteur. Les methodes de selection : correlation avec la cible, importance dans les arbres de decision, elimination recursive (RFE), et regularisation (Lasso, Ridge). L'objectif est de garder les features les plus informatives." },
        { type: "heading", content: "L'IA Comme Assistant de Feature Engineering" },
        { type: "paragraph", content: "En 2026, les LLM excellent dans le feature engineering. Decrivez votre dataset a Claude ou GPT, et il suggerera des features pertinentes basees sur l'expertise du domaine. Il peut aussi generer le code de transformation complet." },
        { type: "prompt-example", prompt: "J'ai un dataset de ventes e-commerce avec : date_achat, montant, categorie_produit, ville_client, age_client. Quelles features supplementaires pourrais-je creer pour predire la probabilite de rachat ?", result: "Features suggerees :\n1. recence_dernier_achat (jours depuis dernier achat)\n2. frequence_achats_30j (nombre d'achats sur 30 jours)\n3. montant_moyen_par_achat\n4. jour_de_semaine (encodage cyclique)\n5. categorie_preferee (mode)\n6. diversite_categories (nombre unique)\n7. tendance_montant (hausse/baisse sur 3 derniers achats)\n8. distance_au_magasin (si donnees geographiques)\n9. saison_achat (printemps, ete, automne, hiver)\n10. anciennete_client (jours depuis premier achat)" },
        { type: "video", videoId: "i_LwzRVP7bg", label: "Feature engineering avec Python et l'IA" },
        { type: "key-point", content: "Le feature engineering est l'etape ou l'expertise metier fait la plus grande difference. L'IA peut suggerer des features generiques, mais la connaissance du domaine permet de creer des features vraiment discriminantes." },
        { type: "diagram", label: "Le Pipeline de Feature Engineering", flow: "horizontal", nodes: [
          { label: "Creation", sub: "Nouvelles features a partir des brutes", color: "blue" },
          { label: "Transformation", sub: "Encodage, normalisation, log", color: "purple" },
          { label: "Selection", sub: "Garder les plus informatives", color: "emerald" },
          { label: "Validation", sub: "Impact sur la performance du modele", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le feature engineering peut ameliorer la performance de 20% a 50%",
          "Techniques : encodage, features temporelles, interactions, embeddings",
          "La selection de features evite l'overfitting et accelere l'entrainement",
          "Les LLM suggerent des features pertinentes basees sur l'expertise du domaine",
          "L'expertise metier reste essentielle pour les features discriminantes"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le feature engineering ?",
          options: ["L'entrainement d'un modele", "La creation et selection de variables d'entree pour un modele", "Le deploiement d'une API", "La visualisation de donnees"],
          correctIndex: 1,
          explanation: "Le feature engineering est le processus de creation, transformation et selection des variables (features) utilisees par un modele ML."
        },
        {
          question: "De combien le feature engineering peut-il ameliorer la performance ?",
          options: ["1-2%", "5-10%", "20-50%", "100%"],
          correctIndex: 2,
          explanation: "Un bon feature engineering peut ameliorer la performance d'un modele de 20% a 50%, c'est souvent l'etape la plus impactante."
        },
        {
          question: "Que fait la methode one-hot encoding ?",
          options: ["Elle normalise les donnees", "Elle transforme une variable categorielle en colonnes binaires", "Elle supprime les outliers", "Elle calcule la moyenne"],
          correctIndex: 1,
          explanation: "Le one-hot encoding transforme chaque valeur d'une variable categorielle en une colonne binaire (0 ou 1), permettant aux algorithmes ML de traiter des categories."
        },
        {
          question: "Pourquoi la selection de features est-elle importante ?",
          options: ["Pour avoir plus de colonnes", "Pour eviter l'overfitting et accelerer l'entrainement", "Pour rendre le code plus long", "Pour augmenter la taille du dataset"],
          correctIndex: 1,
          explanation: "Trop de features entrainent de l'overfitting et ralentissent l'entrainement. La selection garde uniquement les features les plus informatives."
        },
      ],
    },
    {
      number: 12,
      title: "Deploiement de Modeles",
      description: "Mettre un modele ML en production : APIs, conteneurs, et cloud.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Du Notebook a la Production" },
        { type: "paragraph", content: "Un modele ML dans un Jupyter Notebook ne sert a rien s'il ne peut pas etre utilise en production. Le deploiement transforme un prototype en un service fiable, scalable et accessible par d'autres applications ou utilisateurs." },
        { type: "subheading", content: "API REST avec FastAPI" },
        { type: "paragraph", content: "FastAPI est le framework Python de reference pour deployer des modeles ML en tant qu'API REST. Performant, type-safe, et avec documentation automatique, il permet de creer un endpoint de prediction en quelques lignes de code." },
        { type: "subheading", content: "Conteneurisation avec Docker" },
        { type: "paragraph", content: "Docker empaquette votre modele, ses dependances et son environnement dans un conteneur portable. Un conteneur Docker fonctionne de maniere identique sur votre machine, en staging et en production — plus de \"ca marche sur mon PC\"." },
        { type: "subheading", content: "Deploiement Cloud" },
        { type: "paragraph", content: "AWS SageMaker, Google Vertex AI et Azure ML offrent des services manages pour deployer des modeles. Pour les projets plus simples, des plateformes comme Hugging Face Spaces, Streamlit Cloud et Railway permettent un deploiement en quelques clics." },
        { type: "callout", content: "En 2026, le deploiement de modeles est beaucoup plus simple qu'avant. Des outils comme BentoML et MLflow gerent l'empaquetage, le versioning et le deploiement en quelques commandes." },
        { type: "video", videoId: "OGxgnH8y2NM", label: "Deployer un modele ML en production" },
        { type: "diagram", label: "Du Notebook a la Production", flow: "horizontal", nodes: [
          { label: "Jupyter Notebook", sub: "Prototype et experimentation", color: "blue" },
          { label: "API FastAPI", sub: "Endpoint de prediction", color: "purple" },
          { label: "Docker", sub: "Conteneur portable", color: "emerald" },
          { label: "Cloud / Plateforme", sub: "Deploiement scalable", color: "amber" },
        ]},
        { type: "tip", content: "Commencez toujours par le deploiement le plus simple possible. Un modele sur Hugging Face Spaces ou Streamlit Cloud peut etre deploye en 5 minutes. Optimisez ensuite si le trafic le justifie." },
        { type: "summary", items: [
          "Un modele dans un notebook est inutile — il faut le deployer",
          "FastAPI est le standard pour les APIs ML en Python",
          "Docker garantit la portabilite entre environnements",
          "Plateformes simples : Hugging Face Spaces, Streamlit Cloud",
          "Cloud : SageMaker, Vertex AI, Azure ML pour le scale"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi deployer un modele ML ?",
          options: ["Pour le rendre plus precis", "Pour qu'il soit utilisable en production par d'autres applications", "Pour economiser de la memoire", "Pour le rendre open source"],
          correctIndex: 1,
          explanation: "Le deploiement transforme un prototype en un service accessible et fiable, utilisable par d'autres applications ou utilisateurs en production."
        },
        {
          question: "Quel framework Python est recommande pour deployer des modeles ML en API ?",
          options: ["Django", "Flask", "FastAPI", "Tornado"],
          correctIndex: 2,
          explanation: "FastAPI est le framework de reference : performant (asynchrone), type-safe, avec documentation automatique et support natif de Pydantic."
        },
        {
          question: "Quel est l'avantage principal de Docker ?",
          options: ["Il accelere le modele", "Il garantit un fonctionnement identique partout", "Il reduit la taille du modele", "Il ameliore la precision"],
          correctIndex: 1,
          explanation: "Docker empaquette le modele et ses dependances dans un conteneur qui fonctionne de maniere identique partout — plus de problemes d'environnement."
        },
        {
          question: "Quelle plateforme permet un deploiement en quelques clics ?",
          options: ["AWS Lambda", "Hugging Face Spaces", "Kubernetes", "Terraform"],
          correctIndex: 1,
          explanation: "Hugging Face Spaces permet de deployer des modeles ML en quelques clics, sans configuration complexe de serveurs."
        },
      ],
    },
    {
      number: 13,
      title: "MLOps et Monitoring",
      description: "Gerer le cycle de vie des modeles en production : monitoring, retraining, CI/CD.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "MLOps : Le DevOps du Machine Learning" },
        { type: "paragraph", content: "Le MLOps est l'ensemble des pratiques qui gerent le cycle de vie complet des modeles ML en production : versioning, entrainement automatise, deploiement, monitoring, et retraining. C'est ce qui transforme un modele one-shot en un systeme fiable et evolutif." },
        { type: "subheading", content: "Versioning des Donnees et Modeles" },
        { type: "paragraph", content: "Git pour le code, DVC (Data Version Control) pour les donnees, MLflow pour les modeles et les experiences. Le versioning permet de reproduire n'importe quelle experience et de revenir a une version anterieure en cas de regression." },
        { type: "subheading", content: "Monitoring en Production" },
        { type: "paragraph", content: "Un modele en production peut se degrader : data drift (les donnees changent), concept drift (la relation donnees-cible change), ou bugs dans le pipeline. Le monitoring detecte ces problemes avant qu'ils n'impactent les utilisateurs." },
        { type: "subheading", content: "CI/CD pour le ML" },
        { type: "paragraph", content: "Les pipelines CI/CD automatisent les tests, la validation et le deploiement des modeles. A chaque push de code ou de donnees, le pipeline re-entraine le modele, valide ses performances, et le deploie automatiquement si les criteres sont remplis." },
        { type: "key-point", content: "Le data drift est le probleme numero 1 des modeles en production. Un modele entraine sur des donnees de 2024 peut devenir obsolete en quelques mois si les comportements des utilisateurs changent." },
        { type: "video", videoId: "ua-CiDNNj30", label: "MLOps — gerer des modeles en production" },
        { type: "diagram", label: "Le Cycle MLOps", flow: "cycle", nodes: [
          { label: "Entrainement", sub: "Donnees + algorithme → modele", color: "blue" },
          { label: "Deploiement", sub: "API + conteneur → production", color: "purple" },
          { label: "Monitoring", sub: "Drift, performance, alertes", color: "emerald" },
        ]},
        { type: "diagram", label: "Les Outils MLOps", flow: "horizontal", nodes: [
          { label: "MLflow", sub: "Tracking experiments + modeles", color: "blue" },
          { label: "DVC", sub: "Versioning des donnees", color: "purple" },
          { label: "Evidently AI", sub: "Monitoring et drift detection", color: "pink" },
          { label: "GitHub Actions", sub: "CI/CD pour ML pipelines", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le MLOps gere le cycle de vie complet des modeles en production",
          "Versioning : Git (code), DVC (donnees), MLflow (modeles)",
          "Le data drift est le probleme numero 1 en production",
          "Le monitoring detecte les degradations avant qu'elles n'impactent les utilisateurs",
          "CI/CD automatise tests, validation et deploiement des modeles"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le MLOps ?",
          options: ["Un langage de programmation", "Les pratiques de gestion du cycle de vie des modeles ML", "Un type de reseau de neurones", "Un service cloud"],
          correctIndex: 1,
          explanation: "Le MLOps est l'ensemble des pratiques (versioning, deploiement, monitoring, retraining) qui gerent les modeles ML en production de maniere fiable."
        },
        {
          question: "Qu'est-ce que le data drift ?",
          options: ["Un bug de code", "Un changement dans la distribution des donnees en production", "Une perte de donnees", "Un probleme de memoire"],
          correctIndex: 1,
          explanation: "Le data drift se produit quand les donnees en production different de celles utilisees pour l'entrainement, degradant les performances du modele."
        },
        {
          question: "Quel outil gere le versioning des donnees ?",
          options: ["Git", "DVC", "Docker", "Kubernetes"],
          correctIndex: 1,
          explanation: "DVC (Data Version Control) est concu specifiquement pour versionner les donnees et les modeles ML, complementant Git pour le code."
        },
        {
          question: "Pourquoi le CI/CD est-il important en MLOps ?",
          options: ["Pour ecrire plus de code", "Pour automatiser tests, validation et deploiement des modeles", "Pour reduire les couts cloud", "Pour remplacer les data scientists"],
          correctIndex: 1,
          explanation: "Le CI/CD automatise le pipeline ML complet : a chaque modification, le modele est re-entraine, valide et deploye automatiquement si les criteres sont remplis."
        },
      ],
    },
    {
      number: 14,
      title: "Ethique des Donnees",
      description: "Biais, vie privee, RGPD et IA responsable dans la data science.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'Ethique au Coeur de la Data Science" },
        { type: "paragraph", content: "La data science manipule des donnees sensibles : donnees personnelles, financieres, medicales. Chaque modele ML prend des decisions qui impactent des vies reelles. L'ethique n'est pas optionnelle — c'est une responsabilite fondamentale du data scientist." },
        { type: "subheading", content: "Les Biais dans les Donnees" },
        { type: "paragraph", content: "Les modeles ML heritent des biais presents dans les donnees d'entrainement. Un modele de recrutement entraine sur des donnees historiquement biaisees perpetuera ces discriminations. L'audit des donnees et des predictions est essentiel pour detecter et corriger ces biais." },
        { type: "subheading", content: "RGPD et Protection des Donnees" },
        { type: "paragraph", content: "Le RGPD (Reglement General sur la Protection des Donnees) impose des regles strictes : consentement, droit a l'oubli, minimisation des donnees, portabilite, et transparence. L'AI Act europeen ajoute des obligations specifiques pour les systemes IA a haut risque." },
        { type: "subheading", content: "IA Responsable" },
        { type: "paragraph", content: "L'IA responsable repose sur 4 piliers : equite (pas de discrimination), transparence (decisions explicables), securite (protection des donnees), et accountability (responsabilite des consequences). Ces principes doivent guider chaque decision en data science." },
        { type: "callout", content: "En 2026, l'AI Act europeen est pleinement en vigueur. Les entreprises qui deploient des systemes IA a haut risque (recrutement, sante, finance) doivent realiser des evaluations d'impact et maintenir une documentation complete." },
        { type: "video", videoId: "vmEHCJofslg", label: "Ethique et IA responsable" },
        { type: "diagram", label: "Les 4 Piliers de l'IA Responsable", flow: "horizontal", nodes: [
          { label: "Equite", sub: "Pas de discrimination", color: "purple" },
          { label: "Transparence", sub: "Decisions explicables", color: "blue" },
          { label: "Securite", sub: "Protection des donnees", color: "emerald" },
          { label: "Accountability", sub: "Responsabilite des consequences", color: "amber" },
        ]},
        { type: "summary", items: [
          "Les modeles ML heritent des biais presents dans les donnees",
          "Le RGPD et l'AI Act imposent des regles strictes",
          "IA responsable : equite, transparence, securite, accountability",
          "L'audit des donnees et des predictions est essentiel",
          "L'ethique est une responsabilite fondamentale du data scientist"
        ]},
      ],
      quiz: [
        {
          question: "D'ou viennent les biais dans les modeles ML ?",
          options: ["Du code Python", "Des donnees d'entrainement", "Du materiel informatique", "Des utilisateurs finaux"],
          correctIndex: 1,
          explanation: "Les modeles ML heritent des biais presents dans les donnees d'entrainement. Si les donnees refletent des discriminations historiques, le modele les reproduira."
        },
        {
          question: "Quel reglement europeen protege les donnees personnelles ?",
          options: ["AI Act", "RGPD", "NIS2", "DORA"],
          correctIndex: 1,
          explanation: "Le RGPD (Reglement General sur la Protection des Donnees) impose des regles strictes sur le traitement des donnees personnelles en Europe."
        },
        {
          question: "Quels sont les 4 piliers de l'IA responsable ?",
          options: ["Vitesse, precision, cout, simplicite", "Equite, transparence, securite, accountability", "Python, R, SQL, Spark", "Entrainement, test, validation, deploiement"],
          correctIndex: 1,
          explanation: "L'IA responsable repose sur l'equite (pas de discrimination), la transparence (decisions explicables), la securite (protection des donnees) et l'accountability."
        },
        {
          question: "Que impose l'AI Act europeen pour les systemes IA a haut risque ?",
          options: ["Ils doivent etre gratuits", "Des evaluations d'impact et une documentation complete", "Ils doivent etre open source", "Ils sont interdits"],
          correctIndex: 1,
          explanation: "L'AI Act impose aux systemes IA a haut risque (recrutement, sante, finance) des evaluations d'impact et une documentation complete."
        },
      ],
    },
    {
      number: 15,
      title: "Projet Complet de Data Science",
      description: "Realiser un projet data science de bout en bout avec l'IA comme assistant.",
      estimatedMinutes: 10,
      sections: [
        { type: "heading", content: "Projet : Prediction du Churn Client" },
        { type: "paragraph", content: "Ce chapitre vous guide dans un projet complet de data science : predire quels clients vont se desabonner (churn). Nous suivrons chaque etape du pipeline, de la comprehension du probleme au deploiement, en utilisant l'IA comme assistant a chaque etape." },
        { type: "subheading", content: "Etape 1 : Comprendre le Probleme" },
        { type: "paragraph", content: "Le churn coute cher : acquerir un nouveau client coute 5 a 25 fois plus que retenir un existant. Predire le churn permet d'agir proactivement : offres de retention, contact personnalise, amelioration du produit." },
        { type: "subheading", content: "Etape 2 : Exploration des Donnees" },
        { type: "paragraph", content: "Chargement du dataset avec Pandas, statistiques descriptives, distribution des variables, correlation avec la cible (churn). Visualisation avec Seaborn pour identifier les patterns : quels segments churnent le plus ?" },
        { type: "subheading", content: "Etape 3 : Feature Engineering" },
        { type: "paragraph", content: "Creer les features pertinentes : anciennete, frequence d'utilisation recente, tendance de consommation, nombre de tickets support, score NPS. Encoder les variables categorielles, normaliser les numeriques." },
        { type: "subheading", content: "Etape 4 : Modelisation" },
        { type: "paragraph", content: "Comparer plusieurs modeles : regression logistique (baseline), Random Forest, XGBoost, et LightGBM. Utiliser la validation croisee pour une evaluation robuste. Optimiser les hyperparametres avec GridSearchCV ou Optuna." },
        { type: "subheading", content: "Etape 5 : Evaluation et Interpretation" },
        { type: "paragraph", content: "Matrice de confusion, precision, recall, F1-score, courbe ROC-AUC. Utiliser SHAP pour expliquer les predictions : quelles features influencent le plus le churn ? Presenter les resultats avec des visualisations claires." },
        { type: "subheading", content: "Etape 6 : Deploiement" },
        { type: "paragraph", content: "Deployer le modele final en API avec FastAPI, conteneuriser avec Docker, et mettre en place un monitoring pour detecter le data drift. Creer un dashboard Streamlit pour les equipes metier." },
        { type: "prompt-example", prompt: "Tu es un data scientist expert. Je te donne un dataset de clients telecom avec colonnes : tenure, monthly_charges, total_charges, contract_type, internet_service, tech_support, churn. Guide-moi pour predire le churn avec XGBoost, en incluant feature engineering, validation croisee, et interpretation SHAP.", result: "import xgboost as xgb\nfrom sklearn.model_selection import cross_val_score\nimport shap\n\n# Feature engineering\ndf['charge_par_mois_tenure'] = df['total_charges'] / (df['tenure'] + 1)\ndf['is_month_to_month'] = (df['contract_type'] == 'Month-to-month').astype(int)\n\n# Modele XGBoost\nmodel = xgb.XGBClassifier(n_estimators=200, learning_rate=0.1)\nscores = cross_val_score(model, X, y, cv=5, scoring='f1')\nmodel.fit(X_train, y_train)\n\n# Interpretation SHAP\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X_test)\nshap.summary_plot(shap_values, X_test)" },
        { type: "video", videoId: "i_LwzRVP7bg", label: "Projet complet de data science de A a Z" },
        { type: "key-point", content: "Un projet data science reussi ne s'arrete pas au modele. La valeur est dans l'impact business : combien de clients retenus, quel ROI ? Presentez toujours vos resultats en termes business, pas en metriques techniques." },
        { type: "diagram", label: "Le Projet Data Science de Bout en Bout", flow: "vertical", nodes: [
          { label: "Comprendre", sub: "Probleme business + objectifs", color: "blue" },
          { label: "Explorer", sub: "EDA, visualisation, patterns", color: "purple" },
          { label: "Creer", sub: "Feature engineering + preprocessing", color: "emerald" },
          { label: "Modeliser", sub: "Entrainement + validation croisee", color: "amber" },
          { label: "Deployer", sub: "API + monitoring + dashboard", color: "pink" },
        ]},
        { type: "summary", items: [
          "Un projet complet va de la comprehension du probleme au deploiement",
          "Le churn prediction est un cas d'usage classique et impactant",
          "Feature engineering et selection de modele sont les etapes cles",
          "SHAP rend les predictions interpretables et explicables",
          "Presentez toujours les resultats en termes d'impact business"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi predire le churn est-il important ?",
          options: ["C'est un exercice academique", "Acquerir un nouveau client coute 5 a 25x plus que retenir un existant", "C'est obligatoire par la loi", "C'est plus facile que les autres projets ML"],
          correctIndex: 1,
          explanation: "Le churn coute cher : retenir un client existant est 5 a 25 fois moins cher que d'en acquerir un nouveau. Predire le churn permet d'agir proactivement."
        },
        {
          question: "A quoi sert SHAP dans un projet ML ?",
          options: ["A entrainer le modele plus vite", "A expliquer quelles features influencent les predictions", "A nettoyer les donnees", "A deployer le modele"],
          correctIndex: 1,
          explanation: "SHAP (SHapley Additive exPlanations) explique la contribution de chaque feature a chaque prediction, rendant le modele interpretable."
        },
        {
          question: "Quelle est l'etape souvent negligee dans les projets data science ?",
          options: ["L'entrainement du modele", "Le deploiement et le monitoring en production", "La collecte de donnees", "L'installation de Python"],
          correctIndex: 1,
          explanation: "Beaucoup de projets s'arretent au notebook. Le deploiement en production avec monitoring est essentiel pour creer de la valeur reelle."
        },
        {
          question: "Comment presenter les resultats d'un projet data science ?",
          options: ["Uniquement avec des metriques techniques", "En termes d'impact business (clients retenus, ROI)", "En montrant le code Python", "En envoyant le notebook Jupyter"],
          correctIndex: 1,
          explanation: "Les stakeholders business s'interessent a l'impact : combien de clients retenus, quel ROI, quelle reduction de couts — pas aux metriques techniques."
        },
      ],
    },
  ],
};

export default content;
