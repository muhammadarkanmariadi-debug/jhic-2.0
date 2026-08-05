// JHI-15 — Backend smoke test. Boots the built server and asserts every public
// endpoint returns a NON-404 status (a 500 is expected without a live DB and
// still proves the route is mounted). Exits non-zero on any missing route.
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = process.env.PORT ?? 5000;
const BASE = `http://localhost:${PORT}`;

const endpoints = [
  { method: "GET", path: "/api/health" },
  { method: "GET", path: "/api/featured-programs" },
  { method: "GET", path: "/api/program-umum" },
  { method: "GET", path: "/api/programs" },
  { method: "GET", path: "/api/curriculum-versions" },
  { method: "GET", path: "/api/partners" },
  { method: "GET", path: "/api/loker" },
  { method: "GET", path: "/api/beasiswa" },
  { method: "GET", path: "/api/lomba" },
  { method: "GET", path: "/api/bot/intents" },
  { method: "POST", path: "/api/auth/login", body: { email: "x", password: "x" } },
  { method: "POST", path: "/api/bot/chat", body: { message: "halo" } },
  { method: "POST", path: "/api/feedback", body: { comment: "smoke" } },
];

const server = spawn("node", ["dist/server.js"], { stdio: "ignore" });
let failed = false;

try {
  await sleep(2500);

  for (const ep of endpoints) {
    try {
      const res = await fetch(`${BASE}${ep.path}`, {
        method: ep.method,
        headers: ep.method === "POST" ? { "Content-Type": "application/json" } : {},
        body: ep.method === "POST" ? JSON.stringify(ep.body ?? {}) : undefined,
      });
      if (res.status === 404) {
        console.error(`FAIL ${ep.method} ${ep.path} -> 404 (route missing)`);
        failed = true;
      } else {
        console.log(`OK   ${ep.method} ${ep.path} -> ${res.status}`);
      }
    } catch (e) {
      console.error(`ERROR ${ep.method} ${ep.path}: ${e.message}`);
      failed = true;
    }
  }
} finally {
  server.kill();
}

console.log(failed ? "SMOKE FAIL" : "SMOKE PASS");
process.exit(failed ? 1 : 0);