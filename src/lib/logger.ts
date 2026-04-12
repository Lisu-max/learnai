type LogLevel = "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  route: string;
  message: string;
  userId?: string;
  durationMs?: number;
  status?: number;
  error?: string;
}

export function log(entry: LogEntry) {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    env: process.env.NODE_ENV,
    ...entry,
  });

  if (entry.level === "error") {
    console.error(line);
  } else if (entry.level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }
}

export function logRequest(route: string, status: number, userId?: string, durationMs?: number) {
  log({ level: status >= 500 ? "error" : status >= 400 ? "warn" : "info", route, message: `${status}`, userId, status, durationMs });
}

export function logError(route: string, error: unknown, userId?: string) {
  const message = error instanceof Error ? error.message : String(error);
  log({ level: "error", route, message, userId, error: message });
}
