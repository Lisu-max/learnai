// Pre-generate an MP3 per chapter using Microsoft Edge TTS (free, neural voice).
// Outputs to public/audio/<slug>/<num>.mp3.
//
// Requires: pip install --user edge-tts
// Usage:   node scripts/generate-audio.mjs [slug]
//          (optional slug argument generates only one course; otherwise all)

import { execSync } from "node:child_process";
import {
  mkdirSync,
  existsSync,
  writeFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const VOICE = "fr-FR-DeniseNeural";
const EDGE_TTS_BIN =
  process.env.EDGE_TTS_BIN || "/Users/jeff/Library/Python/3.14/bin/edge-tts";
const OUT_DIR = "public/audio";
const COURSES_DIR = "src/content/courses";

function extractText(sections) {
  const parts = [];
  for (const s of sections) {
    switch (s.type) {
      case "paragraph":
      case "heading":
      case "subheading":
      case "key-point":
      case "callout":
        if (s.content) parts.push(s.content);
        break;
      case "tip":
        if (s.content) parts.push(`Conseil : ${s.content}`);
        break;
      case "summary":
        if (s.items?.length) parts.push(`Points clés. ${s.items.join(". ")}`);
        break;
      case "case-study":
        if (s.content)
          parts.push(`${s.label ? s.label + " : " : ""}${s.content}`);
        break;
      case "prompt-example":
        if (s.prompt) parts.push(`Exemple de prompt : ${s.prompt}`);
        break;
      case "diagram":
        if (s.nodes?.length) {
          parts.push(
            `${s.label ? s.label + ". " : ""}${s.nodes
              .map((n) => n.label + (n.sub ? ", " + n.sub : ""))
              .join(". ")}.`
          );
        }
        break;
    }
  }
  return parts.join(" ");
}

// Parse a .ts course content file by hand (no runtime import to avoid TS compile).
// We rely on the file literal structure; extract chapter title + sections text.
async function loadCourse(slug) {
  const path = join(COURSES_DIR, `${slug}.ts`);
  if (!existsSync(path)) return null;
  // Transpile via esbuild (already a dev dep). We simply dynamic-import after rewriting extension.
  const { default: esbuild } = await import("esbuild");
  const res = await esbuild.build({
    entryPoints: [path],
    bundle: true,
    platform: "node",
    format: "esm",
    write: false,
    external: [],
    target: "node20",
  });
  const code = res.outputFiles[0].text;
  const tmp = resolve(`/tmp/learnai-course-${slug}.mjs`);
  writeFileSync(tmp, code);
  const mod = await import(pathToFileURL(tmp).href + `?t=${Date.now()}`);
  return mod.default ?? mod.content ?? Object.values(mod)[0];
}

function synthesize(text, outPath) {
  const buf = Buffer.from(text, "utf8");
  const tmpTxt = outPath + ".txt";
  writeFileSync(tmpTxt, buf);
  execSync(
    `"${EDGE_TTS_BIN}" --voice ${VOICE} --file "${tmpTxt}" --write-media "${outPath}"`,
    { stdio: ["ignore", "ignore", "pipe"] }
  );
  try {
    execSync(`rm -f "${tmpTxt}"`);
  } catch {}
}

async function run() {
  const onlySlug = process.argv[2];
  const slugs = onlySlug
    ? [onlySlug]
    : readdirSync(COURSES_DIR)
        .filter((f) => f.endsWith(".ts") && !statSync(join(COURSES_DIR, f)).isDirectory())
        .map((f) => f.replace(/\.ts$/, ""));

  let ok = 0;
  let skipped = 0;
  let failed = 0;
  let totalBytes = 0;

  for (const slug of slugs) {
    const course = await loadCourse(slug);
    if (!course?.chapters?.length) {
      console.log(`  ⏭  ${slug}: no chapters`);
      continue;
    }
    const outCourseDir = join(OUT_DIR, slug);
    mkdirSync(outCourseDir, { recursive: true });

    for (const chapter of course.chapters) {
      const outPath = join(outCourseDir, `${chapter.number}.mp3`);
      if (existsSync(outPath) && statSync(outPath).size > 1024) {
        skipped++;
        continue;
      }
      const intro = chapter.title ? `${chapter.title}. ` : "";
      const body = extractText(chapter.sections);
      const full = (intro + body).trim();
      if (!full) {
        console.log(`  ⚠  ${slug}/${chapter.number}: empty`);
        continue;
      }
      try {
        synthesize(full, outPath);
        const size = statSync(outPath).size;
        totalBytes += size;
        ok++;
        console.log(`  ✓ ${slug}/${chapter.number} (${(size / 1024).toFixed(0)}KB)`);
      } catch (e) {
        failed++;
        console.log(`  ✗ ${slug}/${chapter.number}: ${e.message}`);
      }
    }
  }
  console.log(
    `\nGenerated ${ok} | Skipped ${skipped} | Failed ${failed} | Total ${(
      totalBytes /
      1024 /
      1024
    ).toFixed(1)} MB`
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
