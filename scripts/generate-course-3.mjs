import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 72, bufferPages: true });
const stream = fs.createWriteStream(path.join(outputDir, 'prompt-engineering-pro.pdf'));
doc.pipe(stream);

const purple = '#7C3AED';
const blue = '#2563EB';
const dark = '#1a1a2e';

function addPageNumber() {
  const pages = doc.bufferedPageRange();
  for (let i = 1; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(9).fillColor('#999').text(`${i + 1}`, 0, doc.page.height - 50, { align: 'center', width: doc.page.width });
  }
}

function chapterTitle(num, title) {
  doc.addPage();
  doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
  doc.rect(0, 160, doc.page.width, 4).fill(purple);
  doc.fontSize(16).fillColor('#a78bfa').text(`CHAPITRE ${num}`, 72, 60, { width: doc.page.width - 144 });
  doc.fontSize(24).fillColor('white').text(title, 72, 90, { width: doc.page.width - 144 });
}

function sectionTitle(t) { doc.moveDown(1.5); doc.fontSize(16).fillColor(purple).text(t); doc.moveDown(0.5); }
function subSection(t) { doc.moveDown(1); doc.fontSize(13).fillColor(blue).text(t); doc.moveDown(0.4); }
function para(t) { doc.fontSize(11).fillColor(dark).text(t, { align: 'justify', lineGap: 4 }); doc.moveDown(0.5); }
function checkNewPage(n = 200) { if (doc.y > doc.page.height - n) doc.addPage(); }

function promptExample(label, prompt, response) {
  checkNewPage(250);
  doc.moveDown(0.5);
  doc.rect(82, doc.y, doc.page.width - 164, 2).fill('#6366f1');
  doc.moveDown(0.3);
  doc.fontSize(11).fillColor('#6366f1').text(label, 82);
  doc.moveDown(0.3);
  doc.fontSize(10).fillColor('#1e293b').text(`Prompt : "${prompt}"`, 92, doc.y, { width: doc.page.width - 184 });
  doc.moveDown(0.3);
  if (response) {
    doc.fontSize(10).fillColor('#059669').text(`Resultat attendu : ${response}`, 92, doc.y, { width: doc.page.width - 184 });
  }
  doc.moveDown(0.5);
}

function summaryBox(points) {
  checkNewPage(250);
  doc.moveDown(1);
  doc.rect(82, doc.y, doc.page.width - 164, 2).fill(purple);
  doc.moveDown(0.5);
  doc.fontSize(13).fillColor(purple).text('Points cles', 92);
  doc.moveDown(0.5);
  points.forEach(p => { doc.fontSize(10).fillColor(dark).text(`✓  ${p}`, 92, doc.y, { width: doc.page.width - 184 }); doc.moveDown(0.3); });
  doc.moveDown(1);
}

// COVER
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 8).fill(purple);
doc.rect(0, 8, doc.page.width, 4).fill(blue);
doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - FORMATION COMPLETE', 72, 180, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(36).fillColor('white').text('Prompt Engineering Pro', 72, 240, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(22).fillColor('#c4b5fd').text("L'Art de Communiquer avec l'IA", 72, 300, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(12).fillColor('#94a3b8').text('Maitrisez les techniques avancees de prompt engineering', 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.text('Pour ChatGPT, Claude, Gemini, Midjourney et plus', { align: 'center', width: doc.page.width - 144 });
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026', 72, 580, { align: 'center', width: doc.page.width - 144 });

// TOC
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Table des Matieres', { align: 'center' });
doc.moveDown(2);
const chapters = [
  "Introduction au Prompt Engineering", "Comment les LLM Comprennent vos Prompts",
  "Les Principes Fondamentaux", "Techniques de Base", "Le Role et le Persona",
  "La Structuration des Prompts", "Le Chain-of-Thought Avance",
  "Prompt Engineering pour le Code", "Prompt Engineering pour l'Ecriture Creative",
  "Prompt Engineering pour l'Analyse de Donnees", "Prompt Engineering pour les Images",
  "Prompt Engineering pour la Video et l'Audio", "Techniques Avancees",
  "L'Ingenierie de Prompts Systeme", "Optimiser la Precision et Reduire les Hallucinations",
  "Les Limites des LLM", "Automatiser ses Prompts",
  "Prompt Engineering pour les Agents IA", "Etudes de Cas Reels", "L'Avenir du Prompt Engineering"
];
chapters.forEach((ch, i) => { doc.fontSize(11).fillColor(dark).text(`Chapitre ${i+1} — ${ch}`, { indent: 20 }); doc.moveDown(0.5); });

// CHAPTERS
chapterTitle(1, "Introduction au Prompt Engineering");
doc.moveDown(2);
sectionTitle("1.1 Qu'est-ce que le Prompt Engineering ?");
para("Le prompt engineering est l'art et la science de formuler des instructions efficaces pour obtenir les meilleurs resultats possibles d'un modele d'IA. Un « prompt » est l'ensemble du texte que vous envoyez a un modele de langage — votre question, vos instructions, votre contexte, vos exemples. La qualite de la reponse depend directement de la qualite du prompt.");
para("Le prompt engineering n'est pas simplement « poser une question ». C'est une discipline qui combine la comprehension du fonctionnement interne des LLM, la maitrise de techniques specifiques, et la capacite a structurer l'information de maniere optimale pour le modele. Un bon prompt engineer peut obtenir des resultats radicalement meilleurs qu'un utilisateur novice avec le meme modele.");
sectionTitle("1.2 Pourquoi le Prompt Engineering est Essentiel");
para("En 2026, la maitrise du prompt engineering est devenue une competence professionnelle a part entiere. Les entreprises recrutent des prompt engineers, les freelances facturent leurs competences en prompting, et les professionnels de tous domaines gagnent en productivite en ameliorant leurs interactions avec l'IA. La difference entre un prompt mediocre et un prompt excellent peut representer des heures de travail economisees.");
promptExample("Prompt mediocre vs excellent", "Mediocre : 'Ecris un email.' → Excellent : 'Redige un email professionnel au directeur marketing pour proposer une campagne de lancement produit Q2. Ton : confiant mais collaboratif. Inclus : objectifs, budget estimatif 50K, timeline 6 semaines, KPIs mesurables. Max 300 mots.'", "L'email excellent est 10x plus utile car le prompt est specifique et contextualise");
summaryBox(["Le prompt engineering optimise les resultats de l'IA", "C'est une competence professionnelle recherchee en 2026", "La qualite du prompt determine la qualite de la reponse", "Un investissement de quelques minutes dans le prompt economise des heures"]);

chapterTitle(2, "Comment les LLM Comprennent vos Prompts");
doc.moveDown(2);
sectionTitle("2.1 La Tokenisation");
para("Quand vous envoyez un prompt a un LLM, la premiere etape est la tokenisation : votre texte est decoupe en « tokens » — des morceaux de mots, des mots entiers, ou des caracteres speciaux. Comprendre la tokenisation vous aide a optimiser vos prompts. Par exemple, le mot « prompt engineering » est generalement decoupe en 2-3 tokens, tandis qu'un mot rare peut necessiter davantage de tokens.");
para("Les modeles ont une limite de tokens (fenetre de contexte) qui inclut votre prompt ET la reponse. En mars 2026, tous les modeles de pointe ont atteint 1 million de tokens de contexte : GPT-5.4 (1,05M tokens), Claude Opus 4.6 (1M tokens), Gemini 3.1 Pro (1M tokens). C'est assez pour analyser un livre entier ou une codebase complete. Malgre ces contextes enormes, optimisez la longueur de votre prompt : les informations les plus pertinentes doivent etre placees strategiquement pour eviter le phenomene de « lost in the middle ».");
sectionTitle("2.2 L'Attention et la Position");
para("Les LLM utilisent le mecanisme d'attention pour determiner quelles parties du prompt sont les plus pertinentes pour chaque partie de la reponse. Les informations au debut et a la fin du prompt recoivent generalement plus d'attention (effet de primaute et de recence). Placez vos instructions les plus importantes au debut de votre prompt, et reperez les informations critiques a la fin.");
para("Le « lost in the middle » est un phenomene bien documente : les informations au milieu d'un long prompt sont souvent moins bien prises en compte. Pour les prompts longs, structurez vos instructions avec des titres et des separateurs clairs pour aider le modele a maintenir son attention sur chaque section.");
summaryBox(["Les prompts sont tokenises avant traitement", "En 2026 : 1M+ tokens de contexte (GPT-5.4, Claude 4.6, Gemini 3.1)", "Placez les infos critiques au debut et a la fin", "Structurez les longs prompts pour eviter le 'lost in the middle'"]);

chapterTitle(3, "Les Principes Fondamentaux");
doc.moveDown(2);
sectionTitle("3.1 Clarte et Specificite");
para("Le premier principe du prompt engineering est la clarte. Un prompt ambigu produit une reponse ambigue. Soyez aussi precis que possible dans ce que vous demandez. Au lieu de « parle-moi du marketing », demandez « explique les 5 strategies de content marketing les plus efficaces pour une startup B2B SaaS en 2026, avec un exemple concret pour chaque strategie ».");
sectionTitle("3.2 Contexte");
para("Fournissez le contexte necessaire pour que le modele comprenne votre situation. Qui etes-vous ? Quel est votre objectif ? Quel est votre public cible ? Quelles sont vos contraintes ? Plus le modele comprend votre contexte, plus sa reponse sera pertinente et utile.");
promptExample("Avec et sans contexte", "Sans : 'Comment ameliorer mon site ?' → Avec : 'Je suis proprietaire d'un e-commerce de vetements bio (Shopify, 500 visiteurs/jour, taux de conversion 1.2%). Comment ameliorer mon taux de conversion ? Budget limité a 500€/mois.'", "Le contexte permet une reponse actionnable et specifique");
checkNewPage();
sectionTitle("3.3 Format de Sortie");
para("Specifiez le format de sortie desire. Voulez-vous une liste a puces, un tableau, un paragraphe, du JSON, du Markdown ? Voulez-vous un ton formel ou decontracte ? Combien de mots ou de points ? Plus vous etes precis sur le format attendu, plus le resultat correspondra a vos attentes.");
sectionTitle("3.4 Contraintes et Limites");
para("Definissez clairement ce que vous ne voulez PAS. 'Ne mentionne pas X', 'Evite le jargon technique', 'Maximum 200 mots', 'Pas de listes a puces'. Les contraintes negatives sont souvent aussi importantes que les instructions positives pour obtenir le resultat souhaite.");
summaryBox(["Soyez clair et specifique dans vos demandes", "Fournissez le contexte : qui, quoi, pourquoi, pour qui", "Specifiez le format de sortie desire", "Definissez les contraintes et ce que vous ne voulez pas"]);

chapterTitle(4, "Techniques de Base");
doc.moveDown(2);
sectionTitle("4.1 Zero-Shot Prompting");
para("Le zero-shot prompting consiste a demander au modele d'effectuer une tache sans lui fournir d'exemple. C'est la forme la plus simple de prompting. Exemple : 'Classe ce commentaire comme positif, neutre ou negatif : \"Le produit est arrive en retard mais la qualite est excellente\"'. Le modele s'appuie uniquement sur ses connaissances pre-entrainement.");
sectionTitle("4.2 Few-Shot Prompting");
para("Le few-shot prompting consiste a fournir quelques exemples (2 a 5) avant de poser votre question. Les exemples « montrent » au modele le format, le style et le type de reponse attendus. C'est l'une des techniques les plus puissantes et les plus sous-utilisees.");
promptExample("Few-shot pour la classification", "Commentaire : 'Super produit !' → Sentiment : Positif\nCommentaire : 'Pas terrible' → Sentiment : Negatif\nCommentaire : 'Le produit est correct' → Sentiment : Neutre\n\nCommentaire : 'J'adore mais la livraison etait lente' → Sentiment : ?", "Le modele comprend le format et repond : Positif (ou Mitige)");
checkNewPage();
sectionTitle("4.3 Chain-of-Thought (CoT)");
para("Le Chain-of-Thought demande au modele de « reflechir etape par etape » avant de donner sa reponse finale. Cette technique ameliore drastiquement les performances sur les taches de raisonnement, de mathematiques et de logique. Il suffit souvent d'ajouter « Reflechis etape par etape » a la fin de votre prompt.");
promptExample("Chain-of-Thought", "Question : 'Si j'achete 3 articles a 17,50€ avec une remise de 15%, combien je paie ? Reflechis etape par etape.'", "Le modele detaille : 3 x 17,50 = 52,50 → 15% de 52,50 = 7,875 → 52,50 - 7,875 = 44,625€");
sectionTitle("4.4 Self-Consistency");
para("La self-consistency consiste a generer plusieurs reponses au meme prompt et a prendre la reponse majoritaire. Cela reduit les erreurs aleatoires et augmente la fiabilite, surtout pour les questions avec une seule bonne reponse. Vous pouvez demander au modele de generer 3 approches differentes puis de choisir la meilleure.");
summaryBox(["Zero-shot : pas d'exemple, question directe", "Few-shot : 2-5 exemples pour guider le modele", "Chain-of-Thought : 'Reflechis etape par etape'", "Self-consistency : plusieurs reponses pour plus de fiabilite"]);

chapterTitle(5, "Le Role et le Persona");
doc.moveDown(2);
sectionTitle("5.1 Assigner un Role");
para("Assigner un role au modele est l'une des techniques les plus puissantes du prompt engineering. En disant 'Tu es un expert en [domaine] avec 20 ans d'experience', vous orientez le modele vers un registre de connaissances et un style de communication specifiques. Le role influence le vocabulaire, le niveau de detail, et la perspective de la reponse.");
promptExample("Role expert", "'Tu es un nutritionniste certifie. Un patient de 35 ans, sedentaire, avec un IMC de 28, te demande un plan alimentaire pour perdre 5 kg en 3 mois. Propose un plan hebdomadaire realiste.'", "Reponse structuree, professionnelle, avec macronutriments et menus detailles");
sectionTitle("5.2 Personas Avances");
para("Vous pouvez combiner plusieurs attributs dans un persona : 'Tu es un consultant senior en strategie digitale, specialise dans le e-commerce B2C, base a Paris, travaillant avec des PME de 10-50 employes, style de communication direct et pragmatique'. Plus le persona est detaille, plus les reponses seront pertinentes et coherentes.");
para("Les personas negatifs sont aussi utiles : 'Ne sois pas un assistant generique. Sois un mentor exigeant qui challenge mes idees et pointe les faiblesses de mon raisonnement.' Cela pousse le modele a aller au-dela des reponses complaisantes.");
summaryBox(["Les roles orientent le style, le vocabulaire et la perspective", "Plus le persona est detaille, meilleures sont les reponses", "Combinez attributs professionnels, style et contraintes", "Les personas negatifs evitent les reponses generiques"]);

chapterTitle(6, "La Structuration des Prompts");
doc.moveDown(2);
sectionTitle("6.1 Le Framework CRISPE");
para("CRISPE est un framework populaire pour structurer ses prompts : Contexte (background), Role (persona), Instructions (tache), Style (ton et format), Parametres (contraintes), Exemples (few-shot). En suivant ce framework, vous vous assurez de ne rien oublier et de fournir au modele toutes les informations necessaires.");
sectionTitle("6.2 Utiliser le Markdown");
para("Les modeles de langage sont entraines sur du texte Markdown et le comprennent parfaitement. Utilisez des titres (#, ##), des listes (-, *), du texte en gras (**), des blocs de code (```), et des separateurs (---) pour structurer visuellement vos prompts. Un prompt bien structure est plus facile a lire pour le modele et produit de meilleurs resultats.");
promptExample("Prompt structure en Markdown", "# Tache\nRedige un article de blog.\n\n## Contexte\n- Blog : tech startup\n- Audience : entrepreneurs\n\n## Instructions\n1. Titre accrocheur\n2. Introduction avec stat\n3. 3 sections principales\n4. Conclusion avec CTA\n\n## Contraintes\n- 800 mots max\n- Ton : professionnel mais accessible", "Structure claire = reponse structuree");
sectionTitle("6.3 Les Delimiteurs");
para("Utilisez des delimiteurs clairs pour separer les differentes parties de votre prompt : des triples backticks (```), des guillemets, des balises XML (<context>...</context>), ou des separateurs (---). Les delimiteurs aident le modele a distinguer vos instructions du contenu a traiter, evitant les confusions.");
summaryBox(["Le framework CRISPE couvre tous les aspects d'un bon prompt", "Le Markdown structure visuellement vos prompts", "Les delimiteurs separent instructions et contenu", "Un prompt bien structure = une reponse bien structuree"]);

chapterTitle(7, "Le Chain-of-Thought Avance");
doc.moveDown(2);
sectionTitle("7.1 Tree of Thought (ToT)");
para("Le Tree of Thought pousse le Chain-of-Thought plus loin en demandant au modele d'explorer plusieurs pistes de raisonnement en parallele, d'evaluer chacune, et de choisir la meilleure. Prompt type : 'Considere 3 approches differentes pour resoudre ce probleme. Pour chaque approche, identifie les avantages et inconvenients, puis recommande la meilleure.'");
sectionTitle("7.2 Step-Back Prompting");
para("Le Step-Back Prompting demande au modele de prendre du recul avant de repondre : 'Avant de repondre, identifie les principes fondamentaux en jeu dans cette question.' Cette technique ameliore les reponses sur les questions complexes en forcant le modele a considerer le cadre theorique avant les details.");
sectionTitle("7.3 Raisonnement Contraint");
para("Vous pouvez contraindre le raisonnement du modele : 'Raisonne en utilisant UNIQUEMENT les informations fournies dans le texte ci-dessous. Si l'information n'est pas dans le texte, dis-le explicitement.' Cela reduit les hallucinations et force le modele a rester ancre dans les donnees fournies.");
summaryBox(["Tree of Thought explore plusieurs pistes en parallele", "Step-Back Prompting identifie les principes avant de repondre", "Le raisonnement contraint reduit les hallucinations", "Ces techniques avancees ameliorent la qualite sur les taches complexes"]);

chapterTitle(8, "Prompt Engineering pour le Code");
doc.moveDown(2);
sectionTitle("8.1 Demander du Code Efficacement");
para("Pour obtenir du code de qualite, specifiez : le langage, le framework, les dependances, le style de code (fonctionnel vs OOP), les conventions de nommage, et surtout le comportement attendu avec des exemples d'entree/sortie. Un prompt comme 'Ecris une fonction Python' est beaucoup moins efficace que 'Ecris une fonction Python 3.12 async qui appelle l'API OpenAI, gere le rate limiting avec exponential backoff, et retourne les resultats au format Pydantic model'.");
promptExample("Prompt pour du code", "'Ecris une fonction TypeScript qui prend un tableau d'objets {name: string, score: number} et retourne les 3 meilleurs scores. Utilise les methodes fonctionnelles (sort, slice). Inclus les types et un exemple d'utilisation.'", "Code propre, type, avec exemple executable");
sectionTitle("8.2 Debugging avec l'IA");
para("Pour debugger avec l'IA, fournissez : le code qui pose probleme, le message d'erreur exact, ce que vous attendiez, ce qui se passe a la place, et les etapes pour reproduire le bug. Le modele a besoin de tout le contexte pour diagnostiquer efficacement.");
sectionTitle("8.3 Refactoring et Review");
para("Demandez des code reviews ciblees : 'Review ce code en te concentrant sur : 1) les vulnerabilites de securite, 2) les problemes de performance, 3) la lisibilite. Pour chaque probleme, propose une correction concrete.' C'est plus utile qu'un vague 'review ce code'.");
summaryBox(["Specifiez langage, framework, style et comportement attendu", "Pour le debug : code + erreur + attendu vs obtenu", "Pour la review : criteres specifiques de qualite", "Donnez des exemples d'entree/sortie"]);

chapterTitle(9, "Prompt Engineering pour l'Ecriture Creative");
doc.moveDown(2);
sectionTitle("9.1 Cadrer la Creativite");
para("Paradoxalement, la creativite de l'IA beneficie de contraintes claires. Specifiez le genre, le ton, le public cible, la longueur, les themes a explorer, et le style narratif. 'Ecris une histoire' produira un resultat generique. 'Ecris une nouvelle de science-fiction sombre, 2000 mots, narrateur premiere personne, dans un monde ou l'IA a remplace tous les emplois creatifs, avec un twist final' produira quelque chose de bien plus interessant.");
sectionTitle("9.2 Techniques pour le Contenu Marketing");
para("Pour le contenu marketing, utilisez des formules eprouvees : AIDA (Attention, Interet, Desir, Action), PAS (Probleme, Agitation, Solution), ou BAB (Before, After, Bridge). Specifiez la formule dans votre prompt : 'Redige une page de vente en utilisant la structure PAS pour [produit]. Probleme : [X]. Solution : [Y].'");
summaryBox(["Les contraintes stimulent la creativite de l'IA", "Specifiez genre, ton, style narratif et themes", "Utilisez des formules marketing (AIDA, PAS, BAB)", "Iterez sur les resultats pour affiner"]);

chapterTitle(10, "Prompt Engineering pour l'Analyse de Donnees");
doc.moveDown(2);
sectionTitle("10.1 Analyser des Donnees avec l'IA");
para("L'IA excelle dans l'analyse de donnees quand on lui fournit les bonnes instructions. Uploadez vos donnees (CSV, Excel, tableaux) et demandez des analyses specifiques : 'Identifie les 3 tendances principales dans ces donnees de vente. Calcule la correlation entre le budget marketing et les conversions. Genere un resume executif avec des recommandations actionnables.'");
sectionTitle("10.2 Extraction d'Information");
para("L'extraction d'information structuree est un cas d'usage puissant. Donnez un texte non structure (email, article, rapport) et demandez au modele d'en extraire des donnees structurees au format JSON, tableau ou CSV. Fournissez un schema d'extraction precis pour des resultats coherents.");
summaryBox(["Uploadez les donnees et demandez des analyses specifiques", "Specifiez les metriques et les methodes d'analyse", "L'extraction transforme du texte libre en donnees structurees", "Validez toujours les calculs critiques"]);

chapterTitle(11, "Prompt Engineering pour les Images");
doc.moveDown(2);
sectionTitle("11.1 Anatomie d'un Prompt Image");
para("Un prompt de generation d'image se compose generalement de : le sujet principal, le style artistique, l'eclairage, la composition, les couleurs, l'atmosphere, et les parametres techniques. L'ordre des elements influence le resultat — placez les elements les plus importants en premier.");
promptExample("Prompt Midjourney", "'A serene Japanese garden in autumn, golden maple leaves reflecting in a koi pond, soft morning light filtering through mist, hyperrealistic photography, Canon EOS R5, 85mm lens, shallow depth of field --ar 16:9 --v 7 --s 750'", "Image photoreaiste detaillee avec ambiance specifique");
sectionTitle("11.2 Vocabulaire Visuel");
para("Developpez votre vocabulaire visuel. Types d'eclairage : golden hour, rim lighting, chiaroscuro, neon glow, studio lighting. Styles : oil painting, watercolor, digital art, concept art, anime, photorealistic. Compositions : rule of thirds, centered, bird's eye view, worm's eye view, close-up, wide angle.");
summaryBox(["Structure : sujet + style + eclairage + composition + parametres", "Placez les elements importants en premier", "Developpez votre vocabulaire visuel", "Les parametres techniques controlent la sortie"]);

chapterTitle(12, "Prompt Engineering pour la Video et l'Audio");
doc.moveDown(2);
sectionTitle("12.1 Prompts pour la Generation Video");
para("Les prompts video doivent decrire non seulement l'apparence visuelle mais aussi le mouvement, la temporalite et le son. Decrivez la scene de maniere cinematographique : angle de camera, mouvement (travelling, panoramique, zoom), rythme, transitions. Exemple : 'Slow aerial drone shot pulling back from a single tree on a hilltop at sunset, golden light, clouds moving in timelapse, cinematic 4K.'");
sectionTitle("12.2 Prompts pour la Musique");
para("Pour Suno/Udio, decrivez le genre, le tempo, l'instrumentation, l'ambiance et la structure. Exemple : 'Upbeat indie pop, 120 BPM, acoustic guitar and piano lead, light drums, male vocal, lyrics about chasing dreams, verse-chorus-verse-chorus-bridge-chorus structure.' Vous pouvez aussi fournir les paroles directement.");
summaryBox(["Les prompts video incluent mouvement et temporalite", "Decrivez en termes cinematographiques", "Les prompts musique : genre, tempo, instruments, structure", "Fournissez les paroles pour un controle total"]);

chapterTitle(13, "Techniques Avancees");
doc.moveDown(2);
sectionTitle("13.1 Meta-Prompting");
para("Le meta-prompting consiste a demander au modele de generer ou d'ameliorer un prompt. 'Tu es un expert en prompt engineering. Je veux [objectif]. Ecris-moi le prompt optimal pour obtenir ce resultat avec Claude.' Cette technique permet d'exploiter les connaissances du modele en prompt engineering pour ameliorer vos propres prompts.");
sectionTitle("13.2 Prompt Chaining");
para("Le prompt chaining decompose une tache complexe en etapes sequentielles, ou la sortie de chaque etape alimente l'entree de la suivante. Etape 1 : recherche et synthese. Etape 2 : plan et structure. Etape 3 : redaction du brouillon. Etape 4 : revision et amelioration. Chaque etape produit un resultat de meilleure qualite car le modele peut se concentrer sur une sous-tache a la fois.");
sectionTitle("13.3 Prompt Decomposition");
para("Pour les taches tres complexes, decomposez le probleme en sous-problemes independants, resolvez chacun separement, puis assemblez les resultats. C'est l'equivalent du « divide and conquer » en algorithmique. Un rapport complexe de 20 pages sera de meilleure qualite s'il est genere chapitre par chapitre plutot que d'un seul bloc.");
summaryBox(["Meta-prompting : l'IA ameliore vos prompts", "Prompt chaining : enchaine les etapes sequentiellement", "Decomposition : divise les problemes complexes", "Combinez ces techniques pour des resultats optimaux"]);

chapterTitle(14, "L'Ingenierie de Prompts Systeme");
doc.moveDown(2);
sectionTitle("14.1 Qu'est-ce qu'un System Prompt ?");
para("Le system prompt (prompt systeme) est un ensemble d'instructions invisibles pour l'utilisateur qui definissent le comportement global du modele. Si vous developpez une application utilisant l'API d'un LLM, le system prompt est l'endroit ou vous definissez la personnalite, les regles, les limites et les objectifs de votre assistant.");
sectionTitle("14.2 Bonnes Pratiques");
para("Un bon system prompt inclut : l'identite de l'assistant, son domaine d'expertise, le ton et le style de communication, les regles a suivre (et a ne pas enfreindre), le format de reponse prefere, et les procedures pour les cas limites (quand l'assistant ne sait pas, quand la question est hors sujet, etc.).");
summaryBox(["Le system prompt definit le comportement global de l'assistant", "Incluez identite, expertise, ton, regles et limites", "Testez avec des cas limites et adversariaux", "Iterez et ameliorez continuellement"]);

chapterTitle(15, "Optimiser la Precision et Reduire les Hallucinations");
doc.moveDown(2);
sectionTitle("15.1 Comprendre les Hallucinations");
para("Les hallucinations sont des reponses plausibles mais factuellement incorrectes generees par le modele. Elles se produisent parce que les LLM sont des modeles probabilistes qui generent le texte le plus « probable », pas necessairement le plus « vrai ». Les hallucinations sont plus frequentes sur des sujets obscurs, des questions tres specifiques, ou des demandes de citations precises.");
sectionTitle("15.2 Techniques de Reduction");
para("Demandez au modele de citer ses sources. Utilisez des instructions comme 'Si tu n'es pas sur, dis-le.' Fournissez le contexte necessaire via des documents (RAG). Contraignez le raisonnement aux informations fournies. Demandez un score de confiance. Utilisez la self-consistency en generant plusieurs reponses.");
summaryBox(["Les hallucinations sont des reponses plausibles mais fausses", "Demandez au modele d'admettre son incertitude", "Fournissez des documents sources (RAG) pour ancrer les reponses", "Verifiez toujours les faits critiques"]);

chapterTitle(16, "Les Limites des LLM");
doc.moveDown(2);
sectionTitle("16.1 Ce que les LLM ne Savent pas Faire");
para("Les LLM ne sont pas fiables pour : les calculs mathematiques complexes (utilisez un outil de calcul), les informations en temps reel (utilisez la recherche web), les comptages precis (comptage de mots, de lettres), les predictions de futurs evenements specifiques. Comprendre ces limites vous permet de contourner les problemes en combinant l'IA avec d'autres outils.");
sectionTitle("16.2 Contourner les Limites");
para("Pour les calculs : demandez au modele d'ecrire du code Python plutot que de calculer directement. Pour les infos recentes : activez la recherche web ou fournissez les donnees. Pour les comptages : decomposez en sous-groupes verifiables. Pour les taches visuelles : utilisez un modele multimodal.");
summaryBox(["Connaissez les limites : calculs, temps reel, comptages, predictions", "Combinez l'IA avec des outils specialises", "Demandez du code pour les calculs complexes", "Fournissez les donnees recentes necessaires"]);

chapterTitle(17, "Automatiser ses Prompts");
doc.moveDown(2);
sectionTitle("17.1 Templates de Prompts");
para("Creez des templates de prompts reutilisables avec des variables. Par exemple : 'Tu es un [ROLE]. Redige un [TYPE_CONTENU] sur [SUJET] pour [AUDIENCE]. Ton : [TON]. Longueur : [LONGUEUR]. Contraintes : [CONTRAINTES].' Stockez vos meilleurs templates dans un document de reference et adaptez-les a chaque usage.");
sectionTitle("17.2 Workflows Automatises");
para("Utilisez des outils comme Make, Zapier, ou des scripts Python avec les API pour creer des workflows automatises qui executent des prompts a grande echelle. Exemple : recevoir un email → extraire les informations cles → generer une reponse personnalisee → l'envoyer automatiquement.");
summaryBox(["Creez des templates avec variables reutilisables", "Stockez vos meilleurs prompts dans une bibliotheque", "Automatisez avec Make/Zapier ou les API", "Testez et iterez sur vos templates"]);

chapterTitle(18, "Prompt Engineering pour les Agents IA");
doc.moveDown(2);
sectionTitle("18.1 Prompts pour les Agents");
para("Les agents IA utilisent des prompts systeme complexes qui definissent non seulement leur personnalite mais aussi leurs capacites (outils disponibles), leurs objectifs, et leur strategie de planification. Un bon prompt d'agent definit clairement quand utiliser chaque outil, comment decomposer les taches, et comment gerer les erreurs.");
sectionTitle("18.2 Tool Use et Function Calling");
para("Le function calling permet au modele d'appeler des fonctions externes (API, bases de donnees, outils). Le prompt doit decrire chaque fonction disponible avec ses parametres et ses cas d'usage. Le modele decide quand appeler quelle fonction en fonction de la conversation.");
summaryBox(["Les agents necessitent des system prompts complexes", "Definissez les outils, objectifs et strategies", "Le function calling connecte le modele a des outils externes", "Testez les agents sur des scenarios varies"]);

chapterTitle(19, "Etudes de Cas Reels");
doc.moveDown(2);
sectionTitle("19.1 Cas 1 : Automatiser un Blog");
para("Un blogueur tech utilise Claude pour rediger ses articles. Son workflow : 1) Prompt de recherche pour identifier les tendances. 2) Prompt de structure pour creer le plan. 3) Prompt de redaction section par section. 4) Prompt de revision pour ameliorer le style et corriger les erreurs. Resultat : il publie 3x plus d'articles avec une qualite superieure, en passant de 8h a 2h par article.");
sectionTitle("19.2 Cas 2 : Support Client IA");
para("Une startup SaaS a cree un chatbot de support avec un system prompt detaille incluant : la base de connaissances du produit, les procedures de resolution courantes, un ton amical et professionnel, et des regles d'escalade vers un humain. Resultat : 70% des tickets resolus automatiquement, temps de reponse divise par 10, satisfaction client en hausse de 25%.");
sectionTitle("19.3 Cas 3 : Analyse Juridique");
para("Un cabinet d'avocats utilise Claude pour analyser des contrats. Le prompt systeme definit Claude comme assistant juridique, avec des instructions pour identifier les clauses a risque, les obligations et les conditions suspensives. Chaque analyse est validee par un juriste humain. Resultat : temps d'analyse reduit de 80%, aucun element critique manque.");
summaryBox(["L'automatisation de blog : 3x plus de contenu en 4x moins de temps", "Le chatbot support : 70% des tickets resolus automatiquement", "L'analyse juridique : 80% de temps gagne avec validation humaine", "La cle : des prompts specifiques et un workflow structure"]);

chapterTitle(20, "L'Avenir du Prompt Engineering");
doc.moveDown(2);
sectionTitle("20.1 Vers des Modeles Plus Intelligents");
para("Les modeles deviennent de plus en plus capables de comprendre des instructions ambigues et de produire de bons resultats avec des prompts simples. Le prompt engineering ne disparaitra pas pour autant — il evoluera. Les techniques basiques deviendront moins necessaires, tandis que les techniques avancees (system prompts complexes, orchestration d'agents, prompt chaining) deviendront encore plus importantes.");
sectionTitle("20.2 Le Prompt Engineer de 2030");
para("Le role du prompt engineer evolue vers celui d'architecte IA : designer les interactions humain-IA, concevoir les system prompts des agents autonomes, optimiser les workflows multi-modeles, et s'assurer de la qualite et de la securite des systemes IA. C'est un metier en pleine expansion avec des opportunites dans tous les secteurs.");
para("La maitrise du prompt engineering restera un avantage competitif majeur, non pas parce que les modeles seront difficiles a utiliser, mais parce que les possibilites seront si vastes que seuls ceux qui maitrisent l'art de la communication avec l'IA pourront en exploiter tout le potentiel.");
summaryBox(["Les modeles s'ameliorent mais le prompt engineering reste essentiel", "Les techniques avancees gagnent en importance", "Le role evolue vers architecte IA et designer d'interactions", "Investir dans le prompt engineering est un pari gagnant a long terme"]);

// CONCLUSION
doc.addPage();
doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
doc.fontSize(28).fillColor('white').text('Conclusion', 72, 70, { width: doc.page.width - 144 });
doc.rect(0, 160, doc.page.width, 4).fill(purple);
doc.moveDown(4);
para("Felicitations ! Vous maitrisez desormais les techniques fondamentales et avancees du prompt engineering. De la structuration des prompts au Chain-of-Thought, des personas aux system prompts, vous disposez d'un arsenal complet pour tirer le meilleur parti de n'importe quel modele d'IA.");
para("N'oubliez pas : le prompt engineering est un art qui se perfectionne avec la pratique. Experimentez, iterez, et construisez votre propre bibliotheque de prompts efficaces. Chaque interaction avec l'IA est une opportunite d'apprendre et de s'ameliorer.");
doc.moveDown(1);
doc.fontSize(14).fillColor(purple).text("Continuez votre apprentissage avec les autres formations LearnAI !", { align: 'center' });

addPageNumber();
doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'prompt-engineering-pro.pdf'));
  console.log(`PDF generated: prompt-engineering-pro.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
