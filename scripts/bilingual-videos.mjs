#!/usr/bin/env node
// Découvre et applique les équivalents bilingues FR/EN pour toutes les vidéos YouTube.
//
// Usage :
//   node --env-file=.env.local scripts/bilingual-videos.mjs              # dry-run (rapport seulement)
//   node --env-file=.env.local scripts/bilingual-videos.mjs --apply      # patch les fichiers de cours
//   node --env-file=.env.local scripts/bilingual-videos.mjs --limit=30   # limite le nombre de recherches (quota)
//
// Quota YouTube Data API v3 :
//   - videos.list batch 50 IDs  = 1 unit
//   - search.list (par vidéo)   = 100 units
//   - Quota gratuit quotidien   = 10 000 units  →  ~90 recherches/jour
//   Utiliser --limit=80 et relancer chaque jour jusqu'à couverture.
//
// Sortie : reports/bilingual-videos.json (progression incrémentale).

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const COURSES_DIR = join(ROOT, 'src/content/courses');
const REPORT_PATH = join(ROOT, 'reports/bilingual-videos.json');

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
  console.error('❌ YOUTUBE_API_KEY manquant. Ajoute-le à .env.local');
  console.error('   Obtiens une clé gratuite : https://console.cloud.google.com/apis/credentials');
  console.error('   Active "YouTube Data API v3" sur le projet puis crée une clé API.');
  process.exit(1);
}

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const DEBUG = args.includes('--debug');
const LIMIT = parseInt(args.find(a => a.startsWith('--limit='))?.split('=')[1] ?? '80', 10);
const CONFIDENCE_THRESHOLD = parseFloat(
  args.find(a => a.startsWith('--min-confidence='))?.split('=')[1] ?? '0.2',
);

const VIDEO_ID_RE = /videoId:\s*"([A-Za-z0-9_-]{8,15})"/g;
const FRENCH_HINTS = /\b(le|la|les|un|une|des|du|et|est|pour|avec|dans|sur|ce|cette|qu[ei']|comment|pourquoi|intelligence|artificielle|apprentissage|francais|français)\b/i;
const ENGLISH_HINTS = /\b(the|and|for|with|how|why|what|this|that|english|learning|machine|intelligence|artificial)\b/i;

async function walkCourseFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkCourseFiles(full)));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

async function extractVideoIds(files) {
  const occurrences = new Map(); // videoId -> [{ file, match }]
  for (const file of files) {
    const src = await readFile(file, 'utf8');
    for (const m of src.matchAll(VIDEO_ID_RE)) {
      const id = m[1];
      if (!occurrences.has(id)) occurrences.set(id, []);
      occurrences.get(id).push({ file, fullMatch: m[0] });
    }
  }
  return occurrences;
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API ${res.status}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

async function fetchVideoMetadata(ids) {
  const byId = new Map();
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${batch.join(',')}&key=${API_KEY}`;
    const data = await fetchJson(url);
    for (const item of data.items ?? []) byId.set(item.id, item);
  }
  return byId;
}

function detectLanguage(item) {
  const snippet = item?.snippet ?? {};
  const declared = snippet.defaultAudioLanguage || snippet.defaultLanguage;
  if (declared) {
    if (declared.startsWith('fr')) return 'fr';
    if (declared.startsWith('en')) return 'en';
  }
  const text = `${snippet.title ?? ''} ${snippet.description ?? ''}`.slice(0, 500);
  const fr = (text.match(FRENCH_HINTS) ?? []).length;
  const en = (text.match(ENGLISH_HINTS) ?? []).length;
  if (fr > en) return 'fr';
  if (en > fr) return 'en';
  return null;
}

function iso8601DurationToSeconds(duration) {
  if (!duration) return 0;
  const m = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

function jaccardSimilarity(a, b) {
  const tokensA = new Set(a.toLowerCase().match(/\b\w{3,}\b/g) ?? []);
  const tokensB = new Set(b.toLowerCase().match(/\b\w{3,}\b/g) ?? []);
  if (tokensA.size === 0 || tokensB.size === 0) return 0;
  let intersection = 0;
  for (const t of tokensA) if (tokensB.has(t)) intersection++;
  return intersection / new Set([...tokensA, ...tokensB]).size;
}

const STOPWORDS = new Set([
  'the', 'a', 'an', 'to', 'of', 'in', 'on', 'for', 'with', 'and', 'or', 'how', 'why', 'what', 'that', 'this', 'is', 'are',
  'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'pour', 'avec', 'dans', 'sur', 'comment', 'pourquoi',
  'tutorial', 'tutoriel', 'guide', 'beginners', 'debutants', 'débutants', 'step', 'complete', 'ultimate', 'best',
]);

function extractKeywords(title) {
  const words = (title.match(/\b[\w&]{2,}\b/g) ?? [])
    .filter(w => !STOPWORDS.has(w.toLowerCase()))
    .slice(0, 6);
  return words.join(' ');
}

function buildQuery(source, targetLang) {
  const keywords = extractKeywords(source.snippet.title);
  const suffix = targetLang === 'fr' ? 'français' : 'english';
  return `${keywords} ${suffix}`.slice(0, 100);
}

async function searchEquivalent(source, targetLang) {
  const query = encodeURIComponent(buildQuery(source, targetLang));
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&relevanceLanguage=${targetLang}&key=${API_KEY}`;
  const data = await fetchJson(url);
  const candidates = (data.items ?? []).filter(r => r.id?.videoId && r.id.videoId !== source.id);
  if (candidates.length === 0) return null;

  const metaById = await fetchVideoMetadata(candidates.map(c => c.id.videoId));
  const sourceDuration = iso8601DurationToSeconds(source.contentDetails?.duration);
  const sourceKeywords = new Set(
    (source.snippet.title.toLowerCase().match(/\b\w{3,}\b/g) ?? []).filter(w => !STOPWORDS.has(w)),
  );

  const scored = [];
  for (const candidate of candidates) {
    const meta = metaById.get(candidate.id.videoId);
    if (!meta) continue;
    const candidateLang = detectLanguage(meta);
    const sourceLang = detectLanguage(source);
    if (candidateLang && sourceLang && candidateLang === sourceLang) continue;

    const titleSim = jaccardSimilarity(source.snippet.title, meta.snippet.title);
    const keywordOverlap = [...sourceKeywords].filter(k =>
      meta.snippet.title.toLowerCase().includes(k),
    ).length / Math.max(sourceKeywords.size, 1);
    const channelMatch = meta.snippet.channelTitle === source.snippet.channelTitle ? 0.2 : 0;
    const candidateDuration = iso8601DurationToSeconds(meta.contentDetails?.duration);
    const durationRatio = sourceDuration && candidateDuration
      ? Math.min(sourceDuration, candidateDuration) / Math.max(sourceDuration, candidateDuration)
      : 0;
    const durationBonus = durationRatio > 0.7 ? 0.15 : 0;
    const views = parseInt(meta.statistics?.viewCount ?? '0', 10);
    const viewsBonus = views > 10_000 ? 0.1 : views > 1_000 ? 0.05 : 0;
    const langBonus = candidateLang === targetLang ? 0.15 : 0;

    const confidence = Math.min(
      1,
      titleSim * 0.3 + keywordOverlap * 0.3 + channelMatch + durationBonus + viewsBonus + langBonus,
    );

    scored.push({
      videoId: candidate.id.videoId,
      title: meta.snippet.title,
      channelTitle: meta.snippet.channelTitle,
      durationSeconds: candidateDuration,
      detectedLang: candidateLang,
      confidence: +confidence.toFixed(3),
    });
  }

  scored.sort((a, b) => b.confidence - a.confidence);
  if (DEBUG) {
    console.log(`\n    Source: "${source.snippet.title}" [query: "${buildQuery(source, targetLang)}"]`);
    for (const s of scored.slice(0, 3)) {
      console.log(`      · ${s.confidence} [${s.detectedLang}] ${s.title} — ${s.channelTitle}`);
    }
  }
  return scored[0] ?? null;
}

async function loadReport() {
  try {
    const raw = await readFile(REPORT_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { videos: {}, lastRun: null };
  }
}

async function saveReport(report) {
  await mkdir(dirname(REPORT_PATH), { recursive: true });
  await writeFile(REPORT_PATH, JSON.stringify(report, null, 2) + '\n', 'utf8');
}

async function patchFiles(report, occurrences) {
  let patched = 0;
  const touchedFiles = new Set();
  const pending = Object.entries(report.videos).filter(([, v]) => (
    v.match && v.match.confidence >= CONFIDENCE_THRESHOLD && v.sourceLanguage
  ));

  for (const [sourceId, entry] of pending) {
    const files = occurrences.get(sourceId) ?? [];
    const pair = entry.sourceLanguage === 'fr'
      ? { fr: sourceId, en: entry.match.videoId }
      : { fr: entry.match.videoId, en: sourceId };

    for (const { file } of files) {
      const src = await readFile(file, 'utf8');
      const replacement = `videoId: { fr: "${pair.fr}", en: "${pair.en}" }`;
      const pattern = new RegExp(`videoId:\\s*"${sourceId}"`, 'g');
      const next = src.replace(pattern, replacement);
      if (next !== src) {
        await writeFile(file, next, 'utf8');
        touchedFiles.add(file);
        patched++;
      }
    }
  }
  return { patched, files: [...touchedFiles] };
}

async function main() {
  console.log(`🔍 Scan ${relative(ROOT, COURSES_DIR)}…`);
  const files = await walkCourseFiles(COURSES_DIR);
  const occurrences = await extractVideoIds(files);

  const alreadyBilingual = new Set();
  for (const file of files) {
    const src = await readFile(file, 'utf8');
    for (const m of src.matchAll(/videoId:\s*\{\s*fr:\s*"([^"]+)"\s*,\s*en:\s*"([^"]+)"/g)) {
      alreadyBilingual.add(m[1]);
      alreadyBilingual.add(m[2]);
    }
  }

  const totalUnique = occurrences.size;
  const pending = [...occurrences.keys()].filter(id => !alreadyBilingual.has(id));
  console.log(`   → ${totalUnique} videoId uniques, ${alreadyBilingual.size} déjà bilingues, ${pending.length} à traiter`);

  const report = await loadReport();

  console.log('📡 Fetch métadonnées YouTube…');
  const metadata = await fetchVideoMetadata(pending);
  console.log(`   → ${metadata.size}/${pending.length} récupérés`);

  const toSearch = [];
  for (const id of pending) {
    const meta = metadata.get(id);
    if (!meta) {
      report.videos[id] = { error: 'not_found_on_youtube' };
      continue;
    }
    const lang = detectLanguage(meta);
    const existing = report.videos[id] ?? {};
    report.videos[id] = {
      ...existing,
      sourceLanguage: lang,
      title: meta.snippet.title,
      channelTitle: meta.snippet.channelTitle,
      durationSeconds: iso8601DurationToSeconds(meta.contentDetails?.duration),
    };
    if (!lang) continue;
    if (existing.match?.videoId) continue;
    toSearch.push({ id, meta, targetLang: lang === 'fr' ? 'en' : 'fr' });
  }

  const searchBatch = toSearch.slice(0, LIMIT);
  console.log(`🌐 Recherche d'équivalents (${searchBatch.length}/${toSearch.length}, quota ~${searchBatch.length * 100} units)…`);

  for (let i = 0; i < searchBatch.length; i++) {
    const { id, meta, targetLang } = searchBatch[i];
    process.stdout.write(`   [${i + 1}/${searchBatch.length}] ${id} (${targetLang})…`);
    try {
      const match = await searchEquivalent(meta, targetLang);
      report.videos[id].match = match;
      process.stdout.write(match ? ` ✓ conf=${match.confidence}\n` : ' ∅ aucun\n');
    } catch (err) {
      process.stdout.write(` ❌ ${err.message}\n`);
      report.videos[id].error = err.message;
      if (err.message.includes('quotaExceeded') || err.message.includes('403')) {
        console.log('⚠️  Quota YouTube épuisé — arrêt anticipé, rapport sauvegardé.');
        break;
      }
    }
  }

  report.lastRun = new Date().toISOString();
  await saveReport(report);
  console.log(`💾 Rapport : ${relative(ROOT, REPORT_PATH)}`);

  const withMatch = Object.values(report.videos).filter(v => v.match).length;
  const confident = Object.values(report.videos).filter(
    v => v.match && v.match.confidence >= CONFIDENCE_THRESHOLD,
  ).length;
  console.log(`📊 ${withMatch} matches trouvés, ${confident} au-dessus du seuil ${CONFIDENCE_THRESHOLD}`);

  if (APPLY) {
    console.log(`✏️  Patch des fichiers (seuil confidence ≥ ${CONFIDENCE_THRESHOLD})…`);
    const { patched, files: touched } = await patchFiles(report, occurrences);
    console.log(`   → ${patched} occurrences patchées dans ${touched.length} fichiers`);
    for (const f of touched) console.log(`     · ${relative(ROOT, f)}`);
  } else {
    console.log('ℹ️  Mode dry-run. Relance avec --apply pour patcher les fichiers.');
  }
}

main().catch(err => {
  console.error('❌', err);
  process.exit(1);
});
