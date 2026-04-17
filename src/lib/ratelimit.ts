import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ratelimiter: Ratelimit | null = null;

function getRatelimiter(): Ratelimit | null {
  if (ratelimiter) return ratelimiter;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  ratelimiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(10, "60 s"),
    analytics: true,
    prefix: "learnai_rl",
  });

  return ratelimiter;
}

// In-memory fallback for local dev / missing env vars
const memoryMap = new Map<string, { count: number; resetAt: number }>();
const MEM_WINDOW = 60_000;
const MEM_MAX = 10;

function memoryLimit(ip: string): boolean {
  const now = Date.now();
  const entry = memoryMap.get(ip);
  if (!entry || now > entry.resetAt) {
    memoryMap.set(ip, { count: 1, resetAt: now + MEM_WINDOW });
    return false;
  }
  entry.count += 1;
  return entry.count > MEM_MAX;
}

export async function isRateLimited(ip: string): Promise<boolean> {
  const rl = getRatelimiter();
  if (!rl) return memoryLimit(ip);

  const { success } = await rl.limit(ip);
  return !success;
}
