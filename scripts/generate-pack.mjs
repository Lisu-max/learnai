import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
const doc = new PDFDocument({ size: 'A4', margin: 72 });
const stream = fs.createWriteStream(path.join(outputDir, 'pack-complet-ia-2026.pdf'));
doc.pipe(stream);

const purple = '#7C3AED'; const blue = '#2563EB'; const dark = '#1a1a2e';

// COVER
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 10).fill(purple);
doc.rect(0, 10, doc.page.width, 5).fill(blue);
doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - EDITION 2026', 72, 160, { align: 'center', width: doc.page.width - 144 });
doc.moveDown(2);
doc.fontSize(42).fillColor('white').text('Pack Complet IA', 72, 220, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(24).fillColor('#c4b5fd').text('Maitrisez l\'IA de A a Z', 72, 290, { align: 'center', width: doc.page.width - 144 });
doc.moveDown(4);
doc.fontSize(13).fillColor('#94a3b8').text('5 formations completes en un seul pack', 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.moveDown(2);

const courses = [
  { icon: '📘', title: "L'IA de A a Z", desc: "Guide Complet du Debutant - 12 chapitres" },
  { icon: '🛠️', title: "Maitriser les Outils IA", desc: "Guide Professionnel - 18 chapitres" },
  { icon: '✨', title: "Prompt Engineering Pro", desc: "L'Art de Communiquer avec l'IA - 20 chapitres" },
  { icon: '💼', title: "L'IA pour Votre Business", desc: "Strategies et Mise en Oeuvre - 25 chapitres" },
  { icon: '🎨', title: "Creer avec l'IA", desc: "Le Guide du Createur Digital - 22 chapitres" },
];

courses.forEach(c => {
  doc.fontSize(12).fillColor('white').text(`${c.icon}  ${c.title}`, 120, doc.y, { width: doc.page.width - 240 });
  doc.fontSize(10).fillColor('#94a3b8').text(`     ${c.desc}`, 120, doc.y, { width: doc.page.width - 240 });
  doc.moveDown(0.8);
});

doc.moveDown(4);
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026 — LearnAI', 72, 680, { align: 'center', width: doc.page.width - 144 });

// PAGE 2: Welcome
doc.addPage();
doc.fontSize(28).fillColor(purple).text('Bienvenue dans le Pack Complet IA', { align: 'center' });
doc.moveDown(2);
doc.fontSize(12).fillColor(dark).text("Felicitations pour votre achat du Pack Complet IA de LearnAI ! Vous avez entre les mains la formation la plus complete en langue francaise sur l'Intelligence Artificielle, mise a jour en mars 2026.", { align: 'justify', lineGap: 5 });
doc.moveDown(1);
doc.fontSize(12).fillColor(dark).text("Ce pack comprend 5 formations couvrant tous les aspects de l'IA : des fondamentaux theoriques aux applications pratiques, de la maitrise des outils au prompt engineering avance, de la strategie business a la creation artistique. Au total, plus de 97 chapitres et 700+ pages de contenu educatif riche et actionnable.", { align: 'justify', lineGap: 5 });

doc.moveDown(2);
doc.fontSize(16).fillColor(purple).text('Vos 5 Formations');
doc.moveDown(1);

const details = [
  { title: "1. L'IA de A a Z - Guide Complet du Debutant", file: "ia-de-a-a-z.pdf", desc: "Comprenez les fondamentaux de l'IA : machine learning, deep learning, NLP, vision par ordinateur, modeles de langage, IA generative, agents IA, ethique, et applications pratiques. Votre point de depart ideal." },
  { title: "2. Maitriser les Outils IA - Guide Professionnel", file: "maitriser-outils-ia.pdf", desc: "Maitrisez tous les outils IA majeurs : ChatGPT, Claude, Gemini, Midjourney, DALL-E, Stable Diffusion, Sora, ElevenLabs, Suno, GitHub Copilot, Cursor, et bien plus. Tutoriels detailles et comparatifs." },
  { title: "3. Prompt Engineering Pro", file: "prompt-engineering-pro.pdf", desc: "Apprenez l'art de communiquer efficacement avec l'IA. Techniques zero-shot, few-shot, Chain-of-Thought, personas, structuration, prompts pour le code, l'ecriture, les images, la video et les agents." },
  { title: "4. L'IA pour Votre Business", file: "ia-pour-votre-business.pdf", desc: "Transformez votre entreprise avec l'IA. Marketing, ventes, service client, operations, RH, finance, e-commerce. ROI, etudes de cas, plan d'action 90 jours, aspects juridiques et RGPD." },
  { title: "5. Creer avec l'IA - Le Guide du Createur Digital", file: "creer-avec-ia.pdf", desc: "Liberez votre creativite : images, video, musique, ecriture, design UI/UX, logos, mode, architecture. Monetisation, droits d'auteur, et avenir de la creation assistee par IA." },
];

details.forEach(d => {
  doc.moveDown(0.5);
  doc.fontSize(13).fillColor(blue).text(d.title);
  doc.fontSize(10).fillColor('#6b7280').text(`Fichier : ${d.file}`);
  doc.fontSize(11).fillColor(dark).text(d.desc, { align: 'justify', lineGap: 3 });
  doc.moveDown(0.5);
});

// PAGE 3: How to use
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Comment Utiliser ce Pack', { align: 'center' });
doc.moveDown(2);

doc.fontSize(14).fillColor(blue).text('Parcours Recommande');
doc.moveDown(0.5);
doc.fontSize(11).fillColor(dark).text("1. Commencez par « L'IA de A a Z » si vous debutez — elle pose les bases theoriques essentielles.", { lineGap: 4 });
doc.moveDown(0.3);
doc.text("2. Poursuivez avec « Maitriser les Outils IA » pour decouvrir et pratiquer les outils concrets.", { lineGap: 4 });
doc.moveDown(0.3);
doc.text("3. Approfondissez avec « Prompt Engineering Pro » — la competence cle pour tirer le maximum de l'IA.", { lineGap: 4 });
doc.moveDown(0.3);
doc.text("4. Choisissez ensuite selon vos objectifs :", { lineGap: 4 });
doc.text("   • « L'IA pour Votre Business » si vous etes entrepreneur ou professionnel", { lineGap: 4 });
doc.text("   • « Creer avec l'IA » si vous etes creatif ou createur de contenu", { lineGap: 4 });
doc.moveDown(1.5);

doc.fontSize(14).fillColor(blue).text('Conseils pour un Apprentissage Efficace');
doc.moveDown(0.5);
doc.fontSize(11).fillColor(dark).text("• Pratiquez en parallele de la lecture — ouvrez ChatGPT, Claude ou Midjourney et experimentez.", { lineGap: 4 });
doc.text("• Prenez des notes sur les techniques qui fonctionnent le mieux pour vous.", { lineGap: 4 });
doc.text("• Construisez votre bibliotheque de prompts au fur et a mesure.", { lineGap: 4 });
doc.text("• Revisitez les formations regulierement — l'IA evolue vite et votre comprehension s'approfondit avec la pratique.", { lineGap: 4 });
doc.text("• Partagez vos decouvertes avec vos collegues et votre reseau.", { lineGap: 4 });
doc.moveDown(2);

doc.fontSize(14).fillColor(purple).text('Merci de votre confiance !', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(11).fillColor(dark).text("L'equipe LearnAI est a votre disposition pour toute question. Nous mettons regulierement a jour nos formations pour refleter les dernieres avancees de l'IA. Bonne formation et bienvenue dans le futur !", { align: 'center', lineGap: 4 });

doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'pack-complet-ia-2026.pdf'));
  console.log(`PDF generated: pack-complet-ia-2026.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
