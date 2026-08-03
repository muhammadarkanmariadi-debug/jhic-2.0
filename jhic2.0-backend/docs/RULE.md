# Rules — Backend (jhic2.0-backend)

Specific rules for AI agents working on the **Express backend**. These add to — never override — the universal rules in the root `../docs/RULE.md`.

---

## 1. Schema & Data Rules

1. **SCHEMA.md is the canonical data contract.** Every change to `prisma/schema.prisma` must be mirrored in `SCHEMA.md`, and vice versa. Never change one without the other.
2. **No schema-less drift.** Do not bypass Prisma with raw SQL unless explicitly required and documented.
3. **Never store plaintext passwords.** Always `bcryptjs`-hash; never return `passwordHash` in responses.
4. **Use soft, consistent types** (UUIDs, `snake_case` DB columns via `@map`, timestamps on every model).

## 2. Auth & Security Rules

5. **JWT for session state** — stateless, in `Authorization: Bearer <token>`, verified in middleware. Do not introduce a session store.
6. **RBAC enforced server-side** on every admin route via `requirePermission` middleware — never trust client-side role claims.
7. **Validate all input** (zod or express-validator) before it reaches services/Prisma.
8. **Never commit secrets.** `.env` (with `DATABASE_URL`, `JWT_SECRET`) stays out of git; provide `.env.example`.
9. **Protect against XSS** in WYSIWYG content and injection everywhere.

## 3. Architecture Rules

10. **Follow the layered flow:** routes → middleware → controllers → services → Prisma. No business logic in controllers/routes.
11. **Consistent error shape** (`{ error: { code, message, details? } }`) via a central error handler.
12. **Resource naming:** RESTful plural nouns under `/api`. Public vs admin (JWT) clearly separated.
13. **The `prisma-client: ^0.0.0` placeholder** in `package.json` must be removed during implementation.

## 4. Featured-Nav & Program Rules

14. **Jurusan ≠ Program.** `Jurusan` (RPL/TKJ/PG) are majors with curriculum versioning; `Program` (TS/ICP/CCP) are special programs with `isFeatured`. Never conflate the two models.
15. **`isFeatured` curates the navbar only.** Setting `isFeatured = false` does not hide a program from the catalog — it only removes it from the frontend navbar's "Program Unggulan" group. Max 3 featured at once.
16. **`GET /api/programs/featured`** must return the minimal payload (`{ id, slug, navLabel, icon }[]`, `LIMIT 3`, using the composite index) and be publicly cacheable (no auth). This is the frontend's nav data source.
17. **Revalidation is frontend-owned.** The Express backend serves data; the Next.js frontend controls `revalidateTag("nav-programs")`. If the admin CMS is a separate SPA in the future, switch to short TTL (`revalidate: 60`) on the frontend side instead.

## 5. Quality Rules

18. **Keep the API deterministic and documented** — the endpoint list in `ARCHITECTURE.md` §3 is the contract; update it when routes change.
19. **Migration hygiene:** schema changes go through `prisma migrate`; review migrations before applying.
20. **No dead code stubs** — don't leave unimplemented routes/controllers that pretend to work.
