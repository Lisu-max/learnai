import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 72, bufferPages: true });
const stream = fs.createWriteStream(path.join(outputDir, 'ia-de-a-a-z.pdf'));
doc.pipe(stream);

const purple = '#7C3AED';
const blue = '#2563EB';
const dark = '#1a1a2e';
const gray = '#4a4a6a';

function addPageNumber() {
  const pages = doc.bufferedPageRange();
  for (let i = 1; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(9).fillColor('#999')
      .text(`${i + 1}`, 0, doc.page.height - 50, { align: 'center', width: doc.page.width });
  }
}

// ===== COVER PAGE =====
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 8).fill(purple);
doc.rect(0, 8, doc.page.width, 4).fill(blue);

doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - FORMATION COMPLETE', 72, 180, { align: 'center', width: doc.page.width - 144 });
doc.moveDown(2);
doc.fontSize(38).fillColor('white').text("L'IA de A à Z", 72, 240, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(22).fillColor('#c4b5fd').text('Guide Complet du Débutant', 72, 300, { align: 'center', width: doc.page.width - 144 });
doc.moveDown(3);
doc.fontSize(12).fillColor('#94a3b8').text('Tout comprendre sur l\'Intelligence Artificielle', 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.text('Des fondamentaux aux applications pratiques', { align: 'center', width: doc.page.width - 144 });
doc.moveDown(6);
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026', 72, 580, { align: 'center', width: doc.page.width - 144 });
doc.text('LearnAI - Votre parcours vers la maîtrise de l\'IA', { align: 'center', width: doc.page.width - 144 });

// Helper functions
function chapterTitle(num, title) {
  doc.addPage();
  doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
  doc.rect(0, 160, doc.page.width, 4).fill(purple);
  doc.fontSize(16).fillColor('#a78bfa').text(`CHAPITRE ${num}`, 72, 60, { width: doc.page.width - 144 });
  doc.fontSize(28).fillColor('white').text(title, 72, 90, { width: doc.page.width - 144 });
}

function sectionTitle(title) {
  doc.moveDown(1.5);
  doc.fontSize(16).fillColor(purple).text(title);
  doc.moveDown(0.5);
}

function subSection(title) {
  doc.moveDown(1);
  doc.fontSize(13).fillColor(blue).text(title);
  doc.moveDown(0.4);
}

function para(text) {
  doc.fontSize(11).fillColor(dark).text(text, { align: 'justify', lineGap: 4 });
  doc.moveDown(0.5);
}

function keyPoint(text) {
  const y = doc.y;
  doc.rect(72, y, doc.page.width - 144, 2).fill('#e0e7ff');
  doc.moveDown(0.3);
  doc.fontSize(11).fillColor('#4338ca').text(`► ${text}`, { indent: 10 });
  doc.moveDown(0.5);
}

function checkNewPage(needed = 200) {
  if (doc.y > doc.page.height - needed) doc.addPage();
}

function summaryBox(points) {
  checkNewPage(250);
  doc.moveDown(1);
  const startY = doc.y;
  doc.rect(82, startY, doc.page.width - 164, 2).fill(purple);
  doc.moveDown(0.5);
  doc.fontSize(13).fillColor(purple).text('Points clés à retenir', 92);
  doc.moveDown(0.5);
  points.forEach(p => {
    doc.fontSize(10).fillColor(dark).text(`✓  ${p}`, 92, doc.y, { width: doc.page.width - 184 });
    doc.moveDown(0.3);
  });
  doc.moveDown(1);
}

// ===== TABLE OF CONTENTS =====
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Table des Matières', { align: 'center' });
doc.moveDown(2);

const chapters = [
  "Qu'est-ce que l'Intelligence Artificielle ?",
  "Les Fondamentaux du Machine Learning",
  "Le Deep Learning Expliqué Simplement",
  "Le Traitement du Langage Naturel (NLP)",
  "La Vision par Ordinateur",
  "Les Modèles de Langage",
  "L'IA Générative",
  "Les Agents IA",
  "L'Éthique de l'IA",
  "L'IA dans la Vie Quotidienne",
  "Commencer avec l'IA : Guide Pratique",
  "L'Avenir de l'IA"
];
chapters.forEach((ch, i) => {
  doc.fontSize(12).fillColor(dark).text(`Chapitre ${i+1} — ${ch}`, { indent: 20 });
  doc.moveDown(0.6);
});

// ===== CHAPTER 1 =====
chapterTitle(1, "Qu'est-ce que l'Intelligence Artificielle ?");
doc.moveDown(2);

sectionTitle("1.1 Définition de l'Intelligence Artificielle");
para("L'Intelligence Artificielle (IA) est un domaine de l'informatique qui vise à créer des systèmes capables d'effectuer des tâches qui nécessitent normalement l'intelligence humaine. Ces tâches incluent la reconnaissance vocale, la prise de décision, la traduction linguistique, la perception visuelle et bien d'autres encore. L'IA ne se limite pas à un seul algorithme ou une seule technique : c'est un ensemble vaste de méthodes, d'approches et de technologies qui travaillent ensemble pour simuler certains aspects de la cognition humaine.");
para("Le terme « Intelligence Artificielle » a été inventé en 1956 lors de la conférence de Dartmouth, organisée par John McCarthy, Marvin Minsky, Nathaniel Rochester et Claude Shannon. Ces pionniers avaient l'ambition de créer des machines capables de « penser » comme des êtres humains. Depuis lors, le domaine a connu des hauts et des bas, des périodes d'enthousiasme intense suivies de « hivers de l'IA » où le financement et l'intérêt diminuaient.");
para("Aujourd'hui, en 2026, l'IA connaît une période de croissance sans précédent. Les avancées dans le deep learning, les modèles de langage comme GPT-5.4, Claude 4.6 et Gemini 3.1, ainsi que la disponibilité massive de données et de puissance de calcul, ont propulsé l'IA dans pratiquement tous les secteurs de l'économie et de la société.");

checkNewPage();
sectionTitle("1.2 Les Différents Types d'IA");
subSection("IA Faible (Narrow AI)");
para("L'IA faible, également appelée IA étroite, est conçue pour effectuer une tâche spécifique. C'est le type d'IA que nous utilisons quotidiennement : les assistants vocaux comme Siri ou Alexa, les systèmes de recommandation de Netflix, les filtres anti-spam de votre boîte email, ou encore les systèmes de navigation GPS. Chacun de ces systèmes excelle dans sa tâche spécifique mais ne peut pas transférer ses compétences à d'autres domaines.");

subSection("IA Forte (General AI / AGI)");
para("L'IA forte, ou Intelligence Artificielle Générale (AGI), fait référence à un système qui posséderait une intelligence comparable à celle d'un être humain, capable de comprendre, apprendre et appliquer ses connaissances dans n'importe quel domaine intellectuel. En 2026, l'AGI reste un objectif de recherche non encore atteint, bien que les progrès récents des grands modèles de langage aient considérablement réduit l'écart perçu. Des entreprises comme OpenAI, Anthropic et Google DeepMind investissent massivement dans cette direction.");

subSection("Super Intelligence Artificielle");
para("La Super Intelligence Artificielle (ASI) est un concept théorique décrivant une IA qui surpasserait l'intelligence humaine dans tous les domaines : créativité scientifique, sagesse sociale, et compétences générales. Ce concept reste largement spéculatif et soulève d'importantes questions philosophiques et éthiques.");

checkNewPage();
sectionTitle("1.3 Histoire de l'IA : Les Grandes Étapes");
para("1943 : Warren McCulloch et Walter Pitts créent le premier modèle mathématique d'un neurone artificiel. 1950 : Alan Turing publie son article fondateur « Computing Machinery and Intelligence » et propose le fameux Test de Turing. 1956 : La conférence de Dartmouth marque la naissance officielle de l'IA comme discipline académique.");
para("1960-1970 : Premiers systèmes experts et programmes de résolution de problèmes. ELIZA, créé par Joseph Weizenbaum au MIT, simule un psychothérapeute. 1980-1990 : Essor des systèmes experts commerciaux, puis premier hiver de l'IA dû aux limitations techniques. 1997 : Deep Blue d'IBM bat le champion du monde d'échecs Garry Kasparov.");
para("2012 : AlexNet révolutionne la vision par ordinateur lors du concours ImageNet, marquant le début de l'ère du deep learning. 2016 : AlphaGo de DeepMind bat le champion du monde de Go Lee Sedol. 2017 : Google publie « Attention Is All You Need », introduisant l'architecture Transformer qui révolutionnera le NLP.");
para("2022-2023 : ChatGPT d'OpenAI démocratise l'IA auprès du grand public. Explosion de l'IA générative avec Midjourney, Stable Diffusion, et DALL-E. 2024-2025 : Les modèles multimodaux deviennent la norme. Claude 3.5 puis Claude 4, GPT-4o puis GPT-5, Gemini 1.5 puis Gemini 2.0 repoussent les limites. 2026 : GPT-5.4, Claude 4.6 et Gemini 3.1 atteignent le million de tokens de contexte. L'IA est intégrée dans la majorité des outils professionnels et personnels. Les agents IA autonomes avec Computer Use transforment les workflows. Les modèles de raisonnement (o1, o3, Deep Think) rivalisent avec les experts humains.");

checkNewPage();
sectionTitle("1.4 Comment Fonctionne l'IA ?");
para("À son niveau le plus fondamental, l'IA fonctionne en utilisant des algorithmes — des séries d'instructions mathématiques — pour analyser des données, identifier des patterns (motifs récurrents), et prendre des décisions ou faire des prédictions basées sur ces patterns. Le processus général comprend plusieurs étapes clés.");
para("La collecte de données est la première étape : l'IA a besoin de grandes quantités de données pour apprendre. Ces données peuvent être du texte, des images, des sons, des vidéos, des nombres, ou tout autre type d'information numérique. La qualité et la quantité des données déterminent en grande partie la performance du système.");
para("L'entraînement est le processus par lequel l'IA « apprend » à partir des données. Pendant l'entraînement, l'algorithme ajuste ses paramètres internes pour minimiser les erreurs dans ses prédictions. C'est un processus itératif qui peut nécessiter des milliards de calculs et des semaines de temps de calcul sur des processeurs spécialisés (GPU ou TPU).");
para("L'inférence est l'étape où l'IA utilise ce qu'elle a appris pour traiter de nouvelles données qu'elle n'a jamais vues auparavant. C'est la phase « productive » de l'IA, celle que les utilisateurs finaux expérimentent directement.");

summaryBox([
  "L'IA est un domaine vaste qui englobe de nombreuses techniques et approches",
  "On distingue l'IA faible (spécialisée), l'IA forte (générale) et la super IA (théorique)",
  "L'IA moderne repose principalement sur le machine learning et le deep learning",
  "L'architecture Transformer (2017) a révolutionné le domaine",
  "En 2026, l'IA est omniprésente dans notre quotidien et continue d'évoluer rapidement"
]);

// ===== CHAPTER 2 =====
chapterTitle(2, "Les Fondamentaux du Machine Learning");
doc.moveDown(2);

sectionTitle("2.1 Qu'est-ce que le Machine Learning ?");
para("Le Machine Learning (apprentissage automatique) est une branche de l'Intelligence Artificielle qui permet aux systèmes informatiques d'apprendre et de s'améliorer à partir de l'expérience, sans être explicitement programmés pour chaque tâche. Au lieu de coder des règles spécifiques, on fournit des données au système et on le laisse découvrir les patterns et les relations par lui-même.");
para("Imaginez que vous vouliez créer un programme qui distingue les chats des chiens dans des photos. L'approche traditionnelle consisterait à programmer manuellement des règles : « si l'animal a des moustaches longues et des oreilles pointues, c'est un chat ». Mais cette approche est fragile et limitée. Avec le Machine Learning, vous montrez plutôt des milliers de photos étiquetées « chat » et « chien » à l'algorithme, et il apprend par lui-même à distinguer les caractéristiques discriminantes.");
para("Le Machine Learning est devenu la pierre angulaire de l'IA moderne. Presque toutes les applications d'IA que vous utilisez quotidiennement — des recommandations Netflix à la reconnaissance faciale de votre smartphone — reposent sur des algorithmes de Machine Learning.");

checkNewPage();
sectionTitle("2.2 L'Apprentissage Supervisé");
para("L'apprentissage supervisé est la forme la plus courante de Machine Learning. Dans ce paradigme, l'algorithme apprend à partir d'un ensemble de données « étiquetées » — c'est-à-dire des exemples pour lesquels la bonne réponse est connue. L'objectif est que le modèle apprenne à prédire correctement l'étiquette pour de nouvelles données non vues.");
para("Prenons un exemple concret : la détection de spam. Vous disposez de milliers d'emails, chacun marqué comme « spam » ou « non-spam ». L'algorithme analyse les caractéristiques de chaque email (mots utilisés, expéditeur, liens présents, etc.) et apprend quels patterns sont associés au spam. Une fois entraîné, il peut classifier de nouveaux emails automatiquement.");

subSection("Régression");
para("La régression est utilisée lorsque la variable à prédire est continue (un nombre). Par exemple : prédire le prix d'une maison en fonction de sa surface, son emplacement et son nombre de chambres. La régression linéaire est l'algorithme le plus simple, mais il existe de nombreuses variantes plus sophistiquées comme la régression polynomiale, les forêts aléatoires (Random Forests), ou le gradient boosting.");

subSection("Classification");
para("La classification est utilisée lorsque la variable à prédire est catégorielle (une classe). Exemples : diagnostiquer une maladie (malade/sain), reconnaître un chiffre manuscrit (0-9), ou détecter un email frauduleux. Les algorithmes populaires incluent les arbres de décision, les SVM (Support Vector Machines), les k-plus-proches-voisins (KNN), et les réseaux de neurones.");

checkNewPage();
sectionTitle("2.3 L'Apprentissage Non Supervisé");
para("Contrairement à l'apprentissage supervisé, l'apprentissage non supervisé travaille avec des données non étiquetées. L'algorithme doit découvrir par lui-même la structure cachée dans les données, sans qu'on lui dise quoi chercher. C'est particulièrement utile pour l'exploration de données et la découverte de patterns insoupçonnés.");

subSection("Le Clustering (Regroupement)");
para("Le clustering consiste à regrouper des données similaires ensemble. L'algorithme K-Means, par exemple, divise les données en K groupes en minimisant la distance entre les points d'un même groupe. Applications concrètes : segmentation de clientèle (identifier des groupes de clients aux comportements similaires), compression d'images, ou détection d'anomalies.");

subSection("La Réduction de Dimensionnalité");
para("Lorsque les données ont de nombreuses caractéristiques (dimensions), il est souvent utile de les réduire tout en préservant l'information essentielle. L'Analyse en Composantes Principales (PCA) est la technique la plus connue. Elle est utilisée pour la visualisation de données complexes, le prétraitement avant d'autres algorithmes, et la compression de données.");

checkNewPage();
sectionTitle("2.4 L'Apprentissage par Renforcement");
para("L'apprentissage par renforcement (Reinforcement Learning, RL) est un paradigme où un agent apprend à prendre des décisions en interagissant avec un environnement. L'agent reçoit des récompenses positives ou négatives selon ses actions, et son objectif est de maximiser la récompense cumulée au fil du temps.");
para("C'est ce type d'apprentissage qui a permis à AlphaGo de battre les meilleurs joueurs de Go au monde. L'agent jouait des millions de parties contre lui-même, apprenant progressivement les meilleures stratégies. Le RL est également utilisé pour les voitures autonomes, les robots, l'optimisation de recommandations, et le fine-tuning des modèles de langage (RLHF — Reinforcement Learning from Human Feedback).");
para("Le RLHF est devenu une technique cruciale dans le développement des grands modèles de langage comme ChatGPT et Claude. Des évaluateurs humains comparent différentes réponses du modèle et indiquent laquelle est la meilleure. Ces préférences sont ensuite utilisées pour affiner le modèle, le rendant plus utile, plus précis et plus sûr.");

sectionTitle("2.5 Les Métriques d'Évaluation");
para("Pour évaluer la performance d'un modèle de Machine Learning, on utilise différentes métriques selon le type de problème. Pour la classification : la précision (accuracy), le rappel (recall), le score F1, et la courbe ROC-AUC. Pour la régression : l'erreur quadratique moyenne (MSE), l'erreur absolue moyenne (MAE), et le coefficient de détermination R².");
para("Un concept fondamental est la distinction entre le surapprentissage (overfitting) et le sous-apprentissage (underfitting). Le surapprentissage se produit quand le modèle apprend trop bien les données d'entraînement, y compris le bruit, et généralise mal. Le sous-apprentissage se produit quand le modèle est trop simple pour capturer les patterns des données. L'art du Machine Learning consiste à trouver le bon équilibre.");

summaryBox([
  "Le Machine Learning permet aux systèmes d'apprendre automatiquement à partir des données",
  "L'apprentissage supervisé utilise des données étiquetées pour la classification et la régression",
  "L'apprentissage non supervisé découvre des structures cachées dans les données",
  "L'apprentissage par renforcement apprend par essai-erreur avec un système de récompenses",
  "Le RLHF est utilisé pour aligner les grands modèles de langage avec les préférences humaines",
  "Le surapprentissage et le sous-apprentissage sont les deux écueils principaux à éviter"
]);

// ===== CHAPTER 3 =====
chapterTitle(3, "Le Deep Learning Expliqué Simplement");
doc.moveDown(2);

sectionTitle("3.1 Des Neurones Biologiques aux Neurones Artificiels");
para("Le deep learning (apprentissage profond) s'inspire du fonctionnement du cerveau humain. Notre cerveau contient environ 86 milliards de neurones, chacun connecté à des milliers d'autres via des synapses. Lorsqu'un neurone reçoit suffisamment de signaux de ses voisins, il « s'active » et transmet un signal à son tour. Les réseaux de neurones artificiels imitent ce mécanisme de manière simplifiée.");
para("Un neurone artificiel reçoit des entrées numériques, les multiplie par des « poids » (weights), additionne le tout, puis applique une « fonction d'activation » pour produire une sortie. La fonction d'activation introduit de la non-linéarité, permettant au réseau de modéliser des relations complexes. Les fonctions d'activation courantes incluent ReLU (Rectified Linear Unit), sigmoid, et tanh.");

checkNewPage();
sectionTitle("3.2 L'Architecture des Réseaux de Neurones");
para("Un réseau de neurones est organisé en couches (layers). La couche d'entrée reçoit les données brutes. Les couches cachées (hidden layers) effectuent les transformations. La couche de sortie produit le résultat final. Quand un réseau possède de nombreuses couches cachées, on parle de « deep learning » — apprentissage profond.");
para("Chaque connexion entre deux neurones possède un poids. Pendant l'entraînement, ces poids sont ajustés par un algorithme appelé rétropropagation (backpropagation). L'algorithme calcule l'erreur entre la prédiction du réseau et la valeur attendue, puis propage cette erreur en arrière à travers le réseau pour ajuster les poids. Ce processus est répété des millions de fois avec différents exemples d'entraînement.");
para("Les réseaux de neurones modernes peuvent avoir des milliards de paramètres. GPT-5.4, par exemple, est estime a plusieurs trillions de parametres. L'entraînement de tels modèles nécessite des milliers de GPU travaillant en parallèle pendant des semaines, ce qui représente un investissement de dizaines de millions de dollars.");

checkNewPage();
sectionTitle("3.3 Les Réseaux de Neurones Convolutifs (CNN)");
para("Les CNN sont spécialisés dans le traitement des images. Ils utilisent des « filtres » (ou kernels) qui glissent sur l'image pour détecter des caractéristiques locales : bords, textures, formes, puis des concepts de plus en plus abstraits dans les couches profondes. La première couche peut détecter des lignes horizontales et verticales, tandis que les couches plus profondes reconnaissent des visages, des objets, ou des scènes entières.");
para("L'architecture typique d'un CNN comprend des couches de convolution (extraction de caractéristiques), des couches de pooling (réduction de la dimension), et des couches fully connected (classification finale). Les architectures célèbres incluent AlexNet (2012), VGGNet, ResNet, et plus récemment les Vision Transformers (ViT).");

sectionTitle("3.4 Les Réseaux Récurrents (RNN) et LSTM");
para("Les RNN sont conçus pour traiter des séquences de données — texte, parole, séries temporelles. Contrairement aux réseaux classiques, ils possèdent une « mémoire » qui leur permet de prendre en compte les éléments précédents de la séquence. Cependant, les RNN simples souffrent du problème du gradient qui s'évanouit (vanishing gradient), ce qui limite leur capacité à mémoriser des dépendances à long terme.");
para("Les LSTM (Long Short-Term Memory) et les GRU (Gated Recurrent Units) résolvent ce problème grâce à des mécanismes de « portes » qui contrôlent le flux d'information. Bien que largement remplacés par les Transformers pour le traitement du langage, les RNN restent utiles pour certaines applications de séries temporelles et de traitement audio.");

checkNewPage();
sectionTitle("3.5 Les Transformers : La Révolution");
para("L'architecture Transformer, introduite par Google en 2017, a révolutionné le deep learning. Son innovation clé est le mécanisme d'attention (self-attention), qui permet au modèle de considérer simultanément toutes les positions d'une séquence et d'apprendre quelles parties sont les plus pertinentes les unes par rapport aux autres.");
para("Contrairement aux RNN qui traitent les séquences mot par mot, les Transformers peuvent traiter l'ensemble de la séquence en parallèle, ce qui les rend beaucoup plus rapides à entraîner sur du matériel moderne (GPU/TPU). Cette parallélisation a permis l'entraînement de modèles avec des centaines de milliards de paramètres.");
para("Les Transformers sont à la base de tous les grands modèles de langage actuels : GPT (OpenAI), Claude (Anthropic), Gemini (Google), LLaMA (Meta), et Mistral. Ils sont également utilisés en vision par ordinateur (Vision Transformer), en génération d'images (Diffusion Transformers), et dans de nombreux autres domaines.");

summaryBox([
  "Le deep learning utilise des réseaux de neurones avec de nombreuses couches",
  "La rétropropagation permet d'ajuster les poids du réseau pendant l'entraînement",
  "Les CNN excellent dans le traitement des images",
  "Les RNN/LSTM traitent les séquences mais sont largement remplacés par les Transformers",
  "L'architecture Transformer et son mécanisme d'attention ont révolutionné l'IA depuis 2017",
  "Les modèles modernes contiennent des milliards de paramètres"
]);

// ===== CHAPTER 4 =====
chapterTitle(4, "Le Traitement du Langage Naturel (NLP)");
doc.moveDown(2);

sectionTitle("4.1 Introduction au NLP");
para("Le Traitement du Langage Naturel (Natural Language Processing, NLP) est la branche de l'IA qui s'occupe de l'interaction entre les ordinateurs et le langage humain. L'objectif est de permettre aux machines de comprendre, interpréter et générer du langage naturel de manière utile. Le NLP est au coeur des assistants vocaux, des chatbots, de la traduction automatique, et des modèles de langage.");
para("Le langage humain est incroyablement complexe. Il est ambigu (« la petite brise la glace » peut avoir deux sens), contextuel (le même mot peut avoir différentes significations selon le contexte), et en constante évolution. Modéliser cette complexité est l'un des plus grands défis de l'IA.");

sectionTitle("4.2 La Tokenisation");
para("La première étape du NLP est la tokenisation : découper le texte en unités élémentaires appelées tokens. Un token peut être un mot entier, un sous-mot, ou même un caractère individuel. Les modèles modernes utilisent des algorithmes de tokenisation par sous-mots comme BPE (Byte Pair Encoding) ou SentencePiece, qui offrent un bon compromis entre la taille du vocabulaire et la capacité à gérer des mots inconnus.");
para("Par exemple, le mot « désassemblage » pourrait être découpé en tokens : [dés, assembl, age]. Cette approche permet au modèle de comprendre des mots qu'il n'a jamais vus en combinant les significations de leurs composants.");

checkNewPage();
sectionTitle("4.3 Les Embeddings : Représenter les Mots");
para("Les ordinateurs ne comprennent pas les mots directement — ils travaillent avec des nombres. Les embeddings sont des représentations vectorielles des mots dans un espace mathématique à haute dimension (typiquement 768 à 4096 dimensions). Les mots sémantiquement proches sont représentés par des vecteurs proches dans cet espace.");
para("Une propriété fascinante des embeddings est qu'ils capturent des relations sémantiques. Par exemple, le vecteur obtenu en calculant « roi - homme + femme » est très proche du vecteur « reine ». De même, « Paris - France + Japon » est proche de « Tokyo ». Les modèles d'embeddings modernes comme ceux utilisés dans les Transformers apprennent ces représentations contextuellement — le même mot peut avoir différents vecteurs selon le contexte.");

sectionTitle("4.4 Les Applications du NLP en 2026");
para("La traduction automatique a fait des progrès considérables. Des systèmes comme Google Translate, DeepL et les modèles de langage peuvent traduire entre des centaines de langues avec une qualité proche de celle des traducteurs humains pour de nombreuses paires de langues. L'analyse de sentiments permet aux entreprises de comprendre automatiquement l'opinion des clients dans les avis, les réseaux sociaux et les enquêtes.");
para("La génération de texte est devenue la vitrine du NLP grâce aux grands modèles de langage. Ces modèles peuvent rédiger des articles, des emails, du code, des poèmes, et bien plus encore. Le résumé automatique de documents, l'extraction d'informations structurées, et la réponse aux questions sont d'autres applications majeures du NLP moderne.");

summaryBox([
  "Le NLP permet aux machines de comprendre et générer du langage humain",
  "La tokenisation découpe le texte en unités élémentaires (tokens)",
  "Les embeddings transforment les mots en vecteurs numériques capturant le sens",
  "Les Transformers ont révolutionné le NLP en permettant la compréhension contextuelle",
  "Les applications incluent la traduction, l'analyse de sentiments et la génération de texte"
]);

// ===== CHAPTER 5 =====
chapterTitle(5, "La Vision par Ordinateur");
doc.moveDown(2);

sectionTitle("5.1 Comprendre la Vision par Ordinateur");
para("La vision par ordinateur (Computer Vision) est le domaine de l'IA qui permet aux machines d'interpréter et de comprendre le contenu visuel du monde réel — images, vidéos et flux en direct. Pour un ordinateur, une image n'est qu'une grille de nombres représentant l'intensité des pixels. La vision par ordinateur transforme ces nombres bruts en une compréhension sémantique : « cette image contient un chat orange assis sur un canapé bleu ».");
para("Les progrès en vision par ordinateur ont été spectaculaires ces dernières années. Les systèmes actuels peuvent non seulement reconnaître des objets, mais aussi comprendre des scènes complexes, estimer la profondeur, suivre des mouvements, et même générer de nouvelles images réalistes.");

sectionTitle("5.2 La Reconnaissance d'Images");
para("La classification d'images consiste à attribuer une étiquette à une image entière (« chat », « voiture », « paysage »). La détection d'objets va plus loin en localisant chaque objet dans l'image avec une boîte englobante. La segmentation sémantique classifie chaque pixel de l'image. Ces trois tâches sont fondamentales et servent de base à de nombreuses applications.");

checkNewPage();
sectionTitle("5.3 Applications Concrètes");
para("La reconnaissance faciale est utilisée pour le déverrouillage des smartphones (Face ID), la surveillance, et la vérification d'identité. Les véhicules autonomes utilisent la vision par ordinateur pour détecter les piétons, les panneaux de signalisation, les autres véhicules et les obstacles. L'imagerie médicale utilise l'IA pour détecter des tumeurs, des fractures et d'autres anomalies dans les radiographies, IRM et scanners, parfois avec une précision supérieure aux radiologues humains.");
para("Le contrôle qualité dans l'industrie manufacturière utilise des caméras et l'IA pour détecter les défauts de production en temps réel. La réalité augmentée, la recherche visuelle (trouver des produits similaires à partir d'une photo), et l'analyse sportive sont d'autres applications en pleine croissance.");

summaryBox([
  "La vision par ordinateur permet aux machines d'interpréter le contenu visuel",
  "Les CNN et Vision Transformers sont les architectures principales",
  "Classification, détection et segmentation sont les trois tâches fondamentales",
  "Applications : reconnaissance faciale, véhicules autonomes, imagerie médicale",
  "Les modèles multimodaux combinent vision et langage pour une compréhension plus riche"
]);

// ===== CHAPTER 6 =====
chapterTitle(6, "Les Modèles de Langage");
doc.moveDown(2);

sectionTitle("6.1 Qu'est-ce qu'un Modèle de Langage ?");
para("Un modèle de langage (Language Model, LM) est un système d'IA entraîné à comprendre et générer du texte en langage naturel. Techniquement, c'est un modèle probabiliste qui prédit le prochain token (mot ou sous-mot) le plus probable étant donné les tokens précédents. Les Grands Modèles de Langage (Large Language Models, LLM) sont des modèles de langage avec des milliards de paramètres, entraînés sur d'énormes corpus de texte.");
para("Le fonctionnement est conceptuellement simple : le modèle a lu une quantité massive de texte (livres, sites web, articles scientifiques, code source) et a appris les patterns statistiques du langage. Quand vous lui posez une question, il génère une réponse token par token, en choisissant à chaque étape le token le plus probable ou un token aléatoirement pondéré par les probabilités (sampling). La « température » contrôle le degré d'aléatoire : une température basse produit des réponses plus déterministes, une température haute des réponses plus créatives.");

checkNewPage();
sectionTitle("6.2 Les Principaux LLM en 2026");
subSection("GPT-5.4 (OpenAI)");
para("OpenAI domine le marche grand public avec sa famille GPT-5. Sorti le 5 mars 2026, GPT-5.4 est disponible en trois variantes : GPT-5.4 Standard (usage general), GPT-5.4 Thinking (raisonnement avance) et GPT-5.4 Pro (capacite maximale). Avec un contexte d'1,05 million de tokens, Computer Use natif (le modele peut controler un ordinateur), et une reduction de 33% des hallucinations par rapport a GPT-5.2, c'est un bond generationnel. GPT-5.4 mini et nano, sortis le 17 mars 2026, rendent cette puissance accessible a tous. ChatGPT reste l'interface grand public la plus populaire avec des centaines de millions d'utilisateurs.");

subSection("Claude 4.6 (Anthropic)");
para("Anthropic, fondée par d'anciens chercheurs d'OpenAI, développe Claude avec une emphase particulière sur la sécurité et la fiabilité. Claude Opus 4.6, sorti le 5 fevrier 2026, est le modele le plus capable du marche sur de nombreux benchmarks, avec une fenetre de contexte d'1 million de tokens, un horizon de completion de taches de 14,5 heures (le plus long de tous les modeles IA), et des performances de pointe en finance, code et raisonnement. Claude Sonnet 4.6 offre le meilleur equilibre performance/vitesse. Le Computer Use atteint 72,5% sur OSWorld. Claude Code, leur outil CLI, a transformé le développement logiciel assisté par IA.");

subSection("Gemini 3.1 (Google DeepMind)");
para("Google DeepMind a unifié ses efforts de recherche en IA avec Gemini, un modèle nativement multimodal capable de traiter du texte, des images, de la vidéo et de l'audio simultanément. Gemini 3.1 Pro, sorti en fevrier 2026, est le modele Pro le plus avance de Google avec un contexte d'1 million de tokens, un score de 77,1% sur ARC-AGI-2, et un raisonnement multimodal sur texte, images, audio, video et code. Il est intégré dans l'ensemble de l'écosystème Google : Search, Gmail, Docs, Sheets, Slides et Android.");

subSection("LLaMA 4 (Meta) et l'Open Source");
para("Meta a choisi la voie de l'open source avec LLaMA, permettant à la communauté de recherche et aux entreprises d'utiliser, modifier et déployer ces modèles librement. LLaMA 4, sorti début 2026, rivalise avec les modèles propriétaires en performance tout en étant accessible à tous. L'écosystème open source, incluant également Mistral (France), Qwen (Alibaba) et DeepSeek (Chine), a considérablement démocratisé l'accès à l'IA avancée.");

checkNewPage();
sectionTitle("6.3 Comment sont Entraînés les LLM ?");
para("L'entraînement d'un LLM se fait en plusieurs phases. Le pré-entraînement (pre-training) consiste à faire lire au modèle d'énormes quantités de texte (des téraoctets) pour qu'il apprenne la structure du langage, les faits sur le monde, et les patterns de raisonnement. Cette phase est la plus coûteuse en calcul et peut prendre des mois sur des milliers de GPU.");
para("Le fine-tuning ajuste le modèle pour des tâches spécifiques ou pour suivre des instructions. Le RLHF (Reinforcement Learning from Human Feedback) aligne le modèle avec les préférences humaines en termes de qualité, utilité et sécurité des réponses. Constitutional AI (Anthropic) est une alternative où le modèle apprend à s'auto-évaluer et s'auto-corriger selon un ensemble de principes définis.");

summaryBox([
  "Les LLM prédisent le prochain token le plus probable dans une séquence",
  "Les principaux LLM en 2026 : GPT-5.4, Claude 4.6, Gemini 3.1, LLaMA 4, Qwen 3.5",
  "L'entraînement comprend le pré-entraînement, le fine-tuning et le RLHF",
  "Le contexte (context window) détermine la quantité de texte que le modèle peut traiter",
  "L'open source (LLaMA, Mistral) démocratise l'accès aux LLM puissants"
]);

// ===== CHAPTER 7 =====
chapterTitle(7, "L'IA Générative");
doc.moveDown(2);

sectionTitle("7.1 La Révolution de l'IA Générative");
para("L'IA générative désigne les systèmes d'IA capables de créer du contenu nouveau et original : texte, images, musique, vidéo, code, et bien plus encore. Contrairement à l'IA discriminative qui classifie ou prédit, l'IA générative produit quelque chose qui n'existait pas auparavant. Cette capacité a provoqué une véritable révolution dans de nombreux domaines créatifs et professionnels.");
para("Le marché de l'IA générative est estimé à plus de 60 milliards de dollars en 2026 et continue de croître à un rythme exponentiel. Des millions de personnes utilisent quotidiennement des outils d'IA générative pour créer du contenu, automatiser des tâches, et augmenter leur productivité.");

sectionTitle("7.2 Génération de Texte");
para("La génération de texte est l'application la plus mature de l'IA générative. Les LLM comme GPT-5.4, Claude 4.6 et Gemini 3.1 peuvent rédiger des articles, des emails professionnels, des scripts, des poèmes, du code informatique, et pratiquement n'importe quel type de contenu textuel. La qualité est souvent indiscernable de celle d'un rédacteur humain, bien que des limites persistent (hallucinations, manque de créativité véritablement originale, biais).");

checkNewPage();
sectionTitle("7.3 Génération d'Images");
para("La génération d'images par IA a explosé depuis 2022 avec des outils comme Midjourney, DALL-E et Stable Diffusion. Ces systèmes utilisent principalement des modèles de diffusion : ils apprennent à transformer du bruit aléatoire en images cohérentes, guidés par des descriptions textuelles (prompts). La qualité des images générées est devenue photoréaliste, posant des questions importantes sur l'authenticité et les droits d'auteur.");
para("En 2026, la génération d'images a atteint un niveau de maturité impressionnant. Les modèles comprennent la composition, la perspective, l'éclairage, et le style artistique. Ils peuvent maintenir la cohérence d'un personnage à travers plusieurs images, modifier des images existantes avec précision, et même générer des images en 3D.");

sectionTitle("7.4 Génération Vidéo et Audio");
para("La génération de vidéo par IA, autrefois limitée à des clips courts et de basse qualité, a fait des progrès spectaculaires. Sora d'OpenAI, Runway Gen-3, et d'autres outils peuvent désormais générer des vidéos de plusieurs minutes avec une cohérence temporelle et un réalisme impressionnants. La synthèse vocale (ElevenLabs, Bark) produit des voix naturelles dans des dizaines de langues, tandis que Suno et Udio génèrent de la musique complète avec paroles.");

summaryBox([
  "L'IA générative crée du contenu nouveau : texte, images, vidéo, musique, code",
  "Les modèles de diffusion sont la technologie dominante pour la génération d'images",
  "La génération vidéo et musicale a fait des progrès spectaculaires en 2025-2026",
  "Les questions éthiques (deepfakes, droits d'auteur) accompagnent ces avancées",
  "L'IA générative transforme profondément les industries créatives et professionnelles"
]);

// ===== CHAPTER 8 =====
chapterTitle(8, "Les Agents IA");
doc.moveDown(2);

sectionTitle("8.1 Qu'est-ce qu'un Agent IA ?");
para("Un agent IA est un système autonome qui peut percevoir son environnement, prendre des décisions, et agir pour atteindre des objectifs définis. Contrairement à un simple chatbot qui répond à des questions, un agent peut planifier une séquence d'actions, utiliser des outils (recherche web, exécution de code, manipulation de fichiers), et s'adapter en fonction des résultats obtenus. Les agents représentent l'évolution naturelle des chatbots vers des systèmes véritablement autonomes.");
para("En mars 2026, les agents IA transforment la facon dont nous travaillons. La « capacite agentique » est devenue le critere numero un des nouvelles releases — chaque modele est desormais concu pour agir, pas seulement repondre. Claude Opus 4.6 peut maintenir une tache pendant 14,5 heures d'affilee. GPT-5.4 integre le Computer Use natif (controle d'un ordinateur). Des outils comme Claude Code d'Anthropic, GitHub Copilot Workspace, et Cursor Agent permettent aux developpeurs de deleguer des taches complexes de programmation. Des agents de support client gerent des conversations completes de maniere autonome avec des taux de resolution de 70-85%.");

checkNewPage();
sectionTitle("8.2 Architecture des Agents");
para("Un agent IA typique comprend plusieurs composants : un LLM comme « cerveau » pour le raisonnement et la planification, un ensemble d'outils (tools) que l'agent peut utiliser, une mémoire pour stocker le contexte et les résultats intermédiaires, et un mécanisme de planification pour décomposer les tâches complexes en étapes simples.");
para("Le paradigme ReAct (Reasoning + Acting) est l'un des plus populaires : l'agent alterne entre des phases de réflexion (Thought), d'action (Action), et d'observation des résultats (Observation). Cette boucle continue jusqu'à ce que l'objectif soit atteint ou que l'agent détermine qu'il ne peut pas accomplir la tâche.");

sectionTitle("8.3 Les Outils des Agents");
para("Les agents peuvent utiliser une variete d'outils : recherche sur le web, execution de code Python ou JavaScript, lecture et ecriture de fichiers, appels a des API externes, navigation web, et controle complet d'applications via le Computer Use (Claude 4.6 atteint 72,5% sur OSWorld, GPT-5.4 est le premier modele generaliste avec Computer Use natif). Le protocole MCP (Model Context Protocol), introduit par Anthropic et adopte par l'industrie, standardise la facon dont les agents interagissent avec les outils et les sources de donnees externes.");

summaryBox([
  "Les agents IA sont des systèmes autonomes capables de planifier et d'agir",
  "Ils combinent un LLM, des outils, une mémoire et un mécanisme de planification",
  "Le paradigme ReAct alterne réflexion, action et observation",
  "MCP standardise l'interaction entre agents et outils externes",
  "Les agents multi-agents collaborent pour résoudre des problèmes complexes"
]);

// ===== CHAPTER 9 =====
chapterTitle(9, "L'Éthique de l'IA");
doc.moveDown(2);

sectionTitle("9.1 Les Biais dans l'IA");
para("Les systèmes d'IA peuvent reproduire et amplifier les biais présents dans les données d'entraînement. Si un modèle est entraîné sur des données historiques qui reflètent des discriminations (genre, race, âge, origine), il risque de perpétuer ces discriminations dans ses prédictions et décisions. Par exemple, un système de recrutement entraîné sur des données historiques pourrait discriminer les candidatures féminines si les données reflètent un historique de recrutement biaisé.");
para("La lutte contre les biais est un défi majeur. Les approches incluent la diversification des données d'entraînement, l'audit régulier des modèles, l'utilisation de métriques d'équité (fairness metrics), et l'implication de populations diverses dans le développement et le test des systèmes d'IA. Des réglementations comme l'AI Act européen imposent des obligations de transparence et d'évaluation des biais pour les systèmes d'IA à haut risque.");

checkNewPage();
sectionTitle("9.2 Transparence et Explicabilité");
para("Les modèles de deep learning sont souvent qualifiés de « boîtes noires » : ils produisent des résultats sans expliquer leur raisonnement. L'explicabilité de l'IA (XAI - Explainable AI) est un domaine de recherche actif qui vise à rendre les décisions des systèmes d'IA compréhensibles par les humains. C'est particulièrement important dans des domaines critiques comme la santé, la justice et la finance.");

sectionTitle("9.3 Deepfakes et Désinformation");
para("La capacité de l'IA à générer du contenu réaliste — images, vidéos, voix — soulève des préoccupations majeures en matière de désinformation. Les deepfakes peuvent être utilisés pour créer de fausses déclarations de personnalités publiques, manipuler l'opinion, ou commettre des fraudes. En réponse, des techniques de détection de contenu généré par IA et des normes de watermarking (filigrane numérique) sont en cours de développement et de déploiement.");

sectionTitle("9.4 Régulation de l'IA");
para("L'Union Européenne a adopté l'AI Act, la première réglementation complète de l'IA au monde, qui classifie les systèmes d'IA par niveau de risque et impose des obligations proportionnelles. Les États-Unis suivent une approche plus sectorielle avec des executive orders et des initiatives réglementaires par domaine. La Chine a mis en place ses propres réglementations, notamment sur les algorithmes de recommandation et l'IA générative.");

summaryBox([
  "Les biais dans les données d'entraînement peuvent mener à des discriminations",
  "L'explicabilité des modèles est cruciale pour les applications critiques",
  "Les deepfakes posent des défis majeurs en matière de désinformation",
  "L'AI Act européen est la première réglementation complète de l'IA",
  "L'impact environnemental de l'entraînement des LLM est un enjeu croissant",
  "La collaboration internationale est nécessaire pour une gouvernance efficace de l'IA"
]);

// ===== CHAPTER 10 =====
chapterTitle(10, "L'IA dans la Vie Quotidienne");
doc.moveDown(2);

sectionTitle("10.1 La Santé");
para("L'IA transforme profondément le secteur de la santé. Le diagnostic assisté par IA permet de détecter des maladies plus tôt et plus précisément. Des algorithmes analysent les images médicales (radiographies, IRM, scanners) avec une précision parfois supérieure à celle des médecins spécialistes. La découverte de médicaments est accélérée par l'IA : AlphaFold de DeepMind a prédit la structure 3D de pratiquement toutes les protéines connues, ouvrant la voie à de nouveaux traitements.");
para("Les assistants de santé IA peuvent aider au triage des patients, répondre aux questions médicales courantes, et assurer un suivi personnalisé des maladies chroniques. La médecine de précision utilise l'IA pour adapter les traitements au profil génétique de chaque patient.");

sectionTitle("10.2 La Finance");
para("L'IA est omniprésente dans le secteur financier. Le trading algorithmique utilise l'IA pour analyser les marchés et exécuter des transactions en millisecondes. La détection de fraude utilise le Machine Learning pour identifier des transactions suspectes en temps réel. Les robo-advisors offrent des conseils d'investissement personnalisés à une fraction du coût des conseillers humains. L'évaluation du risque de crédit est de plus en plus automatisée.");

checkNewPage();
sectionTitle("10.3 L'Éducation");
para("L'IA personnalise l'apprentissage en adaptant le contenu, le rythme et les exercices au niveau et aux besoins de chaque élève. Des tuteurs IA comme Khan Academy avec Khanmigo offrent un accompagnement individuel 24/7. La correction automatique de devoirs et la génération d'exercices personnalisés permettent aux enseignants de se concentrer sur l'accompagnement humain. La traduction en temps réel rend le contenu éducatif accessible dans toutes les langues.");

sectionTitle("10.4 Les Transports");
para("Les véhicules autonomes continuent leur progression vers une adoption généralisée. En 2026, les robotaxis de Waymo et Cruise opèrent dans plusieurs grandes villes américaines. Les systèmes d'assistance à la conduite (ADAS) deviennent standard dans les véhicules neufs. L'IA optimise également la logistique, la planification des itinéraires, et la gestion du trafic urbain.");

summaryBox([
  "L'IA révolutionne le diagnostic médical et la découverte de médicaments",
  "La finance utilise l'IA pour le trading, la détection de fraude et le conseil",
  "L'éducation bénéficie de la personnalisation et des tuteurs IA",
  "Les véhicules autonomes et l'optimisation du trafic transforment les transports",
  "L'IA améliore notre quotidien de manière souvent invisible"
]);

// ===== CHAPTER 11 =====
chapterTitle(11, "Commencer avec l'IA : Guide Pratique");
doc.moveDown(2);

sectionTitle("11.1 Par Où Commencer ?");
para("Si vous souhaitez commencer à utiliser l'IA dans votre vie quotidienne ou professionnelle, voici un guide pratique pour vos premiers pas. Pas besoin d'être ingénieur ou développeur — les outils modernes d'IA sont conçus pour être accessibles à tous.");
para("La première étape est d'expérimenter avec les assistants IA conversationnels. Créez un compte sur ChatGPT (OpenAI), Claude (Anthropic), ou Gemini (Google). Ces outils sont gratuits dans leurs versions de base et vous permettront de découvrir les capacités et les limites des LLM. Posez des questions, demandez de l'aide pour rédiger des textes, résoudre des problèmes, ou analyser des informations.");

sectionTitle("11.2 Les Outils Essentiels");
para("Pour la rédaction et la productivité : ChatGPT, Claude, et Gemini. Pour la génération d'images : Midjourney (via Discord), DALL-E (via ChatGPT), ou Adobe Firefly. Pour le développement : GitHub Copilot, Cursor, ou Claude Code. Pour la recherche : Perplexity AI ou ChatGPT avec recherche web. Pour l'automatisation : Zapier ou Make avec des intégrations IA.");

checkNewPage();
sectionTitle("11.3 Apprendre le Prompt Engineering");
para("Le prompt engineering — l'art de formuler des instructions efficaces pour l'IA — est une compétence essentielle. Quelques principes de base : soyez spécifique dans vos demandes, fournissez du contexte, donnez des exemples de ce que vous attendez (few-shot prompting), et n'hésitez pas à itérer et affiner vos prompts. La formation « Prompt Engineering Pro » de LearnAI couvre ce sujet en profondeur.");

sectionTitle("11.4 Premiers Projets");
para("Commencez par des projets simples : utilisez l'IA pour résumer des articles longs, traduire des documents, rédiger des emails professionnels, ou analyser des données dans un tableur. Progressez vers des projets plus ambitieux : créez des images pour vos présentations, automatisez des tâches répétitives, ou développez un chatbot simple pour votre site web.");

summaryBox([
  "Commencez par expérimenter avec ChatGPT, Claude ou Gemini (gratuits)",
  "Apprenez les bases du prompt engineering pour des résultats optimaux",
  "Choisissez vos outils en fonction de vos besoins : texte, image, code, recherche",
  "Commencez par des projets simples et progressez graduellement",
  "Rejoignez des communautés pour apprendre et partager des expériences"
]);

// ===== CHAPTER 12 =====
chapterTitle(12, "L'Avenir de l'IA");
doc.moveDown(2);

sectionTitle("12.1 Vers l'Intelligence Artificielle Générale (AGI)");
para("L'AGI — une IA capable de comprendre et d'accomplir n'importe quelle tâche intellectuelle qu'un être humain peut faire — reste le Saint Graal de la recherche en IA. En 2026, nous nous en rapprochons mais ne l'avons pas encore atteinte. Les LLM actuels montrent des capacités impressionnantes de raisonnement, de planification et de créativité, mais ils ont encore des limitations significatives : hallucinations, manque de raisonnement causal robuste, et incapacité à véritablement apprendre de nouvelles connaissances après leur entraînement.");
para("Les chercheurs explorent plusieurs pistes vers l'AGI : les architectures hybrides combinant différents types de réseaux de neurones, l'apprentissage continu (continual learning), les systèmes neuro-symboliques combinant apprentissage statistique et raisonnement logique, et les approches basées sur la simulation et le monde physique.");

checkNewPage();
sectionTitle("12.2 Tendances Clés pour 2026-2030");
para("Les modeles multimodaux sont deja la norme en mars 2026 : GPT-5.4, Claude 4.6 et Gemini 3.1 traitent et generent du texte, des images, de la video, de l'audio et du code. Les agents IA sont de plus en plus autonomes — Claude 4.6 tient 14,5h sur une tache, GPT-5.4 controle un ordinateur nativement. La prochaine etape est la collaboration multi-agents : des equipes d'IA specialisees travaillant ensemble sur des projets complexes. Les modeles compacts comme Qwen 3.5 9B rivalisent avec des modeles 13x plus gros, democratisant le deploiement.");
para("L'IA embarquee (on-device AI) est en plein essor grace aux NPU integres dans les processeurs (AMD Ryzen AI 400, Apple Neural Engine, Qualcomm). Les modeles comme GPT-5.4 nano sont concus pour tourner localement sur les appareils. La plateforme Vera Rubin de Nvidia, devoilee en 2026, cible les modeles a un trillion de parametres. L'efficacite energetique et computationnelle des modeles s'ameliore considerablement, rendant l'IA plus durable et accessible.");

sectionTitle("12.3 Les Opportunités de Carrière");
para("L'IA crée de nombreuses opportunités professionnelles. Les métiers les plus demandés incluent : ingénieur en machine learning, data scientist, prompt engineer, spécialiste en éthique de l'IA, architecte de solutions IA, et consultant en transformation IA. Mais au-delà de ces rôles spécialisés, la maîtrise des outils d'IA devient une compétence transversale précieuse dans pratiquement tous les métiers.");
para("Les salaires dans le domaine de l'IA restent parmi les plus élevés du secteur technologique. Un ingénieur ML senior peut gagner entre 80 000 et 200 000 euros par an en France, et bien plus dans les grands centres technologiques comme la Silicon Valley ou Londres. Mais même sans devenir spécialiste, savoir utiliser efficacement les outils d'IA peut significativement augmenter votre productivité et votre valeur sur le marché du travail.");

sectionTitle("12.4 Se Préparer pour l'Avenir");
para("Pour tirer le meilleur parti de la révolution IA, adoptez une mentalité d'apprentissage continu. Restez informé des dernières avancées, expérimentez régulièrement avec de nouveaux outils, et développez votre esprit critique face aux productions de l'IA. Apprenez les bases du prompt engineering, comprenez les forces et les limites de l'IA, et réfléchissez à comment l'intégrer de manière éthique et efficace dans votre vie professionnelle et personnelle.");

summaryBox([
  "L'AGI reste un objectif de recherche majeur mais n'est pas encore atteinte",
  "Les agents autonomes avec Computer Use sont la tendance majeure de 2026",
  "L'IA embarquee (NPU, modeles nano) et les modeles compacts democratisent l'acces",
  "Les opportunités de carrière en IA sont nombreuses et bien rémunérées",
  "L'apprentissage continu et l'adaptabilité sont les clés du succès dans l'ère de l'IA"
]);

// ===== CONCLUSION =====
doc.addPage();
doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
doc.fontSize(28).fillColor('white').text('Conclusion', 72, 70, { width: doc.page.width - 144 });
doc.rect(0, 160, doc.page.width, 4).fill(purple);
doc.moveDown(4);
para("Félicitations ! Vous avez parcouru les fondamentaux de l'Intelligence Artificielle, du Machine Learning au Deep Learning, des modèles de langage aux agents autonomes, de l'éthique aux applications pratiques. Vous disposez maintenant d'une base solide pour comprendre les technologies qui transforment notre monde.");
para("L'IA n'est pas une mode passagère — c'est une transformation fondamentale comparable à l'avènement d'Internet ou de l'électricité. Les personnes et les organisations qui sauront comprendre, adopter et utiliser l'IA de manière responsable seront les mieux positionnées pour réussir dans les années à venir.");
para("N'oubliez pas : l'IA est un outil puissant, mais c'est l'humain qui reste aux commandes. Votre créativité, votre esprit critique, votre empathie et votre jugement moral sont irremplaçables. L'IA amplifie vos capacités — elle ne vous remplace pas.");
doc.moveDown(1);
doc.fontSize(14).fillColor(purple).text("Continuez votre apprentissage avec les autres formations LearnAI !", { align: 'center' });

// Add page numbers
addPageNumber();

doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'ia-de-a-a-z.pdf'));
  console.log(`PDF generated: ia-de-a-a-z.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
