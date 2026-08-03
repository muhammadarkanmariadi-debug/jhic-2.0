# SKILL — Backend Agent Skills (jhic2.0-backend)

Backend-specific skills and library conventions for AI agents building the JHIC 2.0 REST API.

> **Status:** planning phase — apply these skills when implementing per `ARCHITECTURE.md` and `SCHEMA.md`.

---

## 1. Core Stack Skills

### Node.js + Express 5
- Node 20, CommonJS (`"type": "commonjs"`).
- Express `^5.2.1` — Express 5 has breaking changes vs 4 (new router/path syntax, async error handling changes). Verify against installed docs before relying on Express 4 patterns.
- Structure: routes → middleware → controllers → services → Prisma (see `ARCHITECTURE.md` §2).

### Prisma 7
- Prisma 7 uses the new `prisma-client` generator (output path required). Migrations via `prisma migrate`.
- Define models in `prisma/schema.prisma`; the canonical documented schema is `SCHEMA.md` — **keep them in sync**.
- Query with `select` to avoid leaking sensitive fields (e.g. `passwordHash`).

### Auth: JWT + bcryptjs
- Hash passwords with `bcryptjs` (never plaintext; use salt rounds ~10-12).
- Issue **stateless JWT** (`jsonwebtoken`) on login; verify in an auth middleware from `Authorization: Bearer <token>`.
- No session store needed.

## 2. RBAC Skill

- Map roles → permissions (optionally with `@casl/ability`).
- RBAC roles (root `../docs/PRD.md` §3.10): `SUPER_ADMIN`, `ADMIN_KONTEN`, `ADMIN_SPMB`, `ADMIN_SUPPORT`, `ADMIN_KURIKULUM`, `ADMIN_HUBIN`.
- Enforce via a reusable `requirePermission('news:create')` middleware; combine with the auth middleware.

## 3. Config & Middleware Skills

- `dotenv` for env vars (`DATABASE_URL`, `JWT_SECRET`, `PORT`).
- `cors` configured for the frontend origin.
- Centralized error handler → consistent JSON error shape (`{ error: { code, message, details? } }`).
- Input validation at the middleware layer (zod or express-validator) — validate every request body/params/query.

## 4. API Design Skills

- RESTful, plural nouns, `/api` prefix (see `ARCHITECTURE.md` §3 for the endpoint list).
- Public endpoints vs admin endpoints (JWT + RBAC protected).
- v2 modules: curriculum versioning, hubin (lomba/loker/beasiswa), SPMB landing content, bot intents, feedback.

## 5. Security Skills

- Never log or return password hashes/tokens.
- Never commit `.env`; use `.env.example`.
- Rate-limit login endpoints (planned).
- Sanitize/validate WYSIWYG HTML content before storing/serving (XSS).

## 6. Verification Checklist

Before finishing backend work:
- [ ] `prisma/schema.prisma` matches `SCHEMA.md`.
- [ ] Password hashing uses `bcryptjs`; JWT verified in middleware.
- [ ] RBAC enforced on all admin routes.
- [ ] Consistent error shape; all inputs validated.
- [ ] No secrets committed; `.env` ignored.
