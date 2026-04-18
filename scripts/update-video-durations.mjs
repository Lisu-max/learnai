// Update videoDurationMinutes in all course content files based on real
// YouTube durations fetched via yt-dlp.
//
// Usage:
//   node scripts/update-video-durations.mjs

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const COURSES_DIR = "src/content/courses";

function collectVideoIds() {
  const ids = new Set();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith(".ts")) {
        const src = readFileSync(p, "utf8");
        for (const m of src.matchAll(/videoId:\s*"([^"]+)"/g)) ids.add(m[1]);
      }
    }
  };
  walk(COURSES_DIR);
  return [...ids];
}

function fetchDurations(ids) {
  const durations = new Map();
  for (const id of ids) {
    try {
      const out = execSync(
        `yt-dlp --no-warnings --quiet --print "%(duration)s" "https://www.youtube.com/watch?v=${id}"`,
        { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
      ).trim();
      const secs = parseInt(out, 10);
      if (!isNaN(secs) && secs > 0) {
        durations.set(id, Math.max(1, Math.round(secs / 60)));
        process.stdout.write(`  ✓ ${id}: ${durations.get(id)}min\n`);
      } else {
        process.stdout.write(`  ✗ ${id}: invalid duration\n`);
      }
    } catch {
      process.stdout.write(`  ✗ ${id}: fetch failed\n`);
    }
  }
  return durations;
}

function patchFile(path, durations) {
  const src = readFileSync(path, "utf8");
  let changes = 0;

  // Find every video section block: { type: "video", videoId: "ID", ... }
  // We need to set videoDurationMinutes to the real value (add or replace).
  const updated = src.replace(
    /\{([^{}]*?type:\s*"video"[^{}]*?)\}/gs,
    (match, inner) => {
      const idMatch = inner.match(/videoId:\s*"([^"]+)"/);
      if (!idMatch) return match;
      const id = idMatch[1];
      const mins = durations.get(id);
      if (!mins) return match;

      let newInner;
      if (/videoDurationMinutes:\s*\d+/.test(inner)) {
        newInner = inner.replace(
          /videoDurationMinutes:\s*\d+/,
          `videoDurationMinutes: ${mins}`
        );
      } else {
        // Insert after videoId
        newInner = inner.replace(
          /(videoId:\s*"[^"]+",?)/,
          `$1\n      videoDurationMinutes: ${mins},`
        );
      }
      if (newInner !== inner) changes++;
      return `{${newInner}}`;
    }
  );

  if (changes > 0) writeFileSync(path, updated);
  return changes;
}

const ids = collectVideoIds();
console.log(`Found ${ids.length} unique videoIds. Fetching durations…`);
const durations = fetchDurations(ids);
console.log(`\nFetched ${durations.size}/${ids.length} durations.\nPatching files…`);

let totalChanges = 0;
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith(".ts")) {
      const n = patchFile(p, durations);
      if (n > 0) {
        console.log(`  ${p}: ${n} sections updated`);
        totalChanges += n;
      }
    }
  }
};
walk(COURSES_DIR);
console.log(`\n✓ Total sections updated: ${totalChanges}`);
