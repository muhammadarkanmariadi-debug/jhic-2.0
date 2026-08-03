# Architecture — Backend (jhic2.0-backend)

The **target** architecture for the Express REST API. The backend is currently a **stub** — implement it according to this document and `SCHEMA.md`.

> **Verify against code:** package versions below come from `package.json`. Do not assume code exists that isn't there yet.

---

## 1. Stack (planned/verified)

| Concern | Choice |
|---|---|
| Runtime | Node.js 20, CommonJS (`"type": "commonjs"`) |
| Framework | Express **^5.2.1** |
| ORM | Prisma **^7.9.0** + `@prisma/client` |
| Auth | `jsonwebtoken` (JWT, stateless) + `bcryptjs` (hashing) |
| CORS / env | `cors`, `dotenv` |
| Uploads *(planned)* | `multer` |
| Permission engine *(optional)* | `@casl/ability` |

> ⚠️ `package.json` contains `"prisma-client": "^0.0.0"` — this looks like an accidental/placeholder dependency. Verify and remove before implementing.

---

## 2. Target Directory Structure

```
jhic2.0-backend/
├── prisma/
│   ├── schema.prisma        # Database schema (create from SCHEMA.md)
│   └── migrations/          # Prisma migrations
├── src/
│   ├── server.js            # App bootstrap (dotenv, cors, routes, error handler)
│   ├── app.js               # Express app wiring
│   ├── routes/              # Route definitions (one file per resource)
│   ├── controllers/         # Request handling / orchestration
│   ├── middlewares/         # auth (JWT), rbac (role/permission), validate, error
│   ├── services/            # Business logic (thin controllers)
│   └── prisma/              # Prisma client singleton
├── .env                     # DATABASE_URL, JWT_SECRET, PORT (never commit)
└── package.json
```

### Layered flow

```
Request → route → middleware (auth/rbac/validate) → controller → service → Prisma → DB
                                                                    → JSON response (error handler)
```

- **Routes** define the URL and wire middleware.
- **Controllers** parse request/response; no business logic.
- **Services** contain business rules and Prisma calls.
- **Middlewares** enforce auth (JWT), authorization (RBAC), input validation, and centralize error handling.

---

## 3. API Surface (from root `PRD.md` / frontend types)

### Public (no auth)
- `GET /api/news`, `GET /api/news/:id`
- `GET /api/facilities`, `GET /api/achievements`
- `GET /api/jurusan` (list all majors), `GET /api/jurusan/:code` (detail)
- `GET /api/programs` (list all special programs), `GET /api/programs/featured` (navbar curation — max 3, minimal payload: `{ id, slug, navLabel, icon }[]`, indexed query)
- `GET /api/extracurriculars`
- `GET /api/testimonials`, `GET /api/partners`
- `GET /api/faq`, `GET /api/service-desk/status`
- `POST /api/inquiries`
- `POST /api/ppdb/register` → *(v2: SPMB landing, redirect to Foundation portal — no registration data)*

### Admin (JWT + RBAC)
- `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`
- CRUD routes per resource, e.g. `POST/PUT/DELETE /api/admin/news`, `DELETE /api/admin/facilities/:id`
- `POST/PUT/DELETE /api/admin/programs` — Admin Kurikulum manages program CRUD including `isFeatured` toggle and `sortOrder`
- `POST/PUT/DELETE /api/admin/jurusan` — Admin Kurikulum manages jurusan + curriculum versioning
- v2 modules: `admin/curriculum`, `admin/hubin/{lomba,loker,beasiswa}`, `admin/spmb` (landing content)

---

## 4. Auth & RBAC Design

1. **Register/Login** → hash password with `bcryptjs` → issue **JWT** (stateless, in `Authorization: Bearer <token>`).
2. **Auth middleware** verifies the JWT and attaches the user.
3. **RBAC middleware** checks the user's role against required permissions (optionally via `@casl/ability`).
4. **Roles** (from root `PRD.md` §3.10 / `ARCHITECTURE.md` §4): Super Admin, Admin Konten, Admin SPMB, Admin Support, Admin Kurikulum, Admin Hubin.

## 5. Environment Variables

| Var | Purpose |
|---|---|
| `DATABASE_URL` | Prisma connection string (MySQL/PostgreSQL) |
| `JWT_SECRET` | JWT signing secret |
| `PORT` | API port (default 4000 suggested) |

## 6. Conventions

- Consistent JSON error shape (e.g. `{ error: { code, message, details? } }`).
- RESTful resource naming; plural nouns; `/api` prefix.
- Validate every input (zod or express-validator) at the middleware layer.
- Never return password hashes; use `select`/DTOs in Prisma queries.
- Keep `SCHEMA.md` in sync with every change to `prisma/schema.prisma`.

## 7. Performance & Scaling (Modular Monolith)

This application is a **modular monolith** (layered routes/controllers/services within one Express process). This is a deliberate and documented choice — not a placeholder for microservices.

### 7.1 Why not microservices

At this scale (a single school's portal — tens to low-thousands of concurrent users), microservices + database-per-service would be **measurably worse**:

| Dimension | Monolith (current) | Microservices |
|---|---|---|
| Page render latency | 1 process, 1 DB round-trip set (~10–50 ms) | Fan-out to 3–6 services: each hop ~0.5–2 ms + serialization + retries → +10–50 ms per page, more failure modes |
| Cross-entity queries | Single SQL JOIN (e.g. alumni by jurusan, jobs per major) | Impossible across split DBs — need API composition, data duplication, or event sync |
| Content consistency | One transaction, one schema | Outbox/Kafka-style event sync — massive complexity for a news site |
| Ops cost | 1 deploy, 1 CI, 1 log stream, 1 migration flow | N×(deploy, secrets, monitoring, tracing, migrations) for 1 small team |

> Reference: Martin Fowler, *MonolithFirst* (2015) + *The Modular Monolith*; Sam Newman, *Building Microservices* ("don't start here" chapter); TechEmpower Web Framework Benchmarks Round 22.

The modular-monolith boundaries (routes/controllers/services) already isolate concerns cleanly. If an extraction is ever needed, the service layer is the seam.

### 7.2 Caching strategy

- **Public read endpoints** (news, programs, jurusan, alumni, FAQ, facilities) should be cached in-memory or via Redis. These are read-heavy, write-rare.
- **`GET /api/programs/featured`** is the navbar data source — consumed by the frontend via ISR (`next: { revalidate, tags: ['nav-programs'] }`). The backend serves it as a normal cached endpoint; the frontend controls cache invalidation via `revalidateTag`.
- **Cache invalidation:** admin mutations (create/update/delete) bust the relevant cache key. For the featured-nav endpoint, the frontend admin CMS calls `revalidateTag('nav-programs')` after a program mutation.
- **Consider adding `Cache-Control` headers** on public GET endpoints for CDN/edge caching.

### 7.3 Prisma N+1 prevention

- Use `include` / `select` to batch related data in a single query.
- Never fetch a list then query per row (e.g. news → author per row). Use `include: { author: true }`.
- The featured-nav query is trivially fast: `WHERE isFeatured=true ORDER BY sortOrder LIMIT 3` on the composite index — sub-millisecond at this table size.

### 7.4 Rate limiting

- Rate-limit public POSTs (`/api/inquiries`, `/api/feedback`, future bot endpoints) and `/api/auth/login` to prevent abuse.
- Use `express-rate-limit` or similar middleware; configure per-endpoint limits.

### 7.5 Future scaling path

- **Read replica** for alumni analytics (recharts aggregation queries) if the main DB is stressed — not a schema split, just a replica.
- **ISR + on-demand revalidation** on the frontend handles most read-scaling automatically.
- **Do not pre-optimize.** Express 5 sustains ~10k+ simple req/s on a single instance; single PostgreSQL handles ~5k+ QPS. Both are far beyond this app's load.

---

## 8. Cross-References

- Canonical schema → `SCHEMA.md`
- Backend skills → `SKILL.md`
- Backend rules → `RULE.md`
- Product scope / roles → `../docs/PRD.md`, `../docs/ARCHITECTURE.md` §4
