# Architecture — Backend (jhic2.0-backend)

The **target** architecture for the Express REST API. The backend is currently a **stub** — implement it according to this document and `SCHEMA.md`.

> **Verify against code:** package versions below come from `package.json`. Do not assume code exists that isn't there yet.

---

## 1. Stack (planned/verified)

| Concern | Choice |
|---|---|
| Runtime | Node.js 22, ESM (`"type": "module"`, dev via `tsx watch`) |
| Framework | Express **^5.2.1** |
| ORM | Prisma **^7.9.1** + `@prisma/adapter-mariadb` (driver adapter; MySQL/MariaDB) |
| Auth | `jsonwebtoken` (JWT, stateless) + `bcryptjs` (hashing) |
| CORS / env | `cors`, `dotenv` |
| Uploads *(planned)* | `multer` |
| Permission engine *(optional)* | `@casl/ability` |

> **Prisma 7 notes:** the datasource `url` is configured in `prisma.config.ts` (not `schema.prisma`); the client uses the `prisma-client` generator with output to `src/generated/prisma`; `PrismaClient` is constructed with a driver adapter in `src/server.ts`.

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
- `GET /api/extracurriculars`
- `GET /api/testimonials`
- `GET /api/faq`, `GET /api/service-desk/status`
- `POST /api/inquiries`
- `POST /api/ppdb/register` → *(v2: SPMB landing, redirect to Foundation portal — no registration data)*
- ✅ `GET /api/featured-programs` — active Program Unggulan (`src/routes/featuredPrograms.ts`)
- ✅ `GET /api/program-umum` — active Program Umum tabs (`src/routes/programUmum.ts`)
- ✅ `GET /api/programs` — active programs + career portal link (`src/routes/programs.ts`, JHI-06)
- ✅ `GET /api/curriculum-versions` — active curriculum versions (filter: `programId`, `academicYear`)
- ✅ `GET /api/partners` — industry partner directory (`src/routes/partners.ts`)
- ✅ `GET /api/loker` — published job vacancies (filter: `programId`) (`src/routes/loker.ts`)
- ✅ `GET /api/beasiswa` — published scholarships (filter: `programId`) (`src/routes/beasiswa.ts`)
- ✅ `GET /api/lomba` — published competitions (`src/routes/lomba.ts`)

### Admin (JWT + RBAC)
- ✅ `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me` (`src/routes/auth.ts`, JHI-02)
- ✅ `GET /api/featured-programs/all`, `POST/PUT/DELETE /api/featured-programs[/:id]` — **Admin Kurikulum** (`featuredProgram.manage`)
- ✅ `GET /api/program-umum/all`, `GET /api/program-umum/:id`, `POST/PUT/DELETE /api/program-umum[/:id]` — **Admin Kurikulum** (`curriculum.manage`)
- ✅ `POST/PUT/DELETE /api/curriculum-versions[/:id]`, `GET /api/curriculum-versions/all` — **Admin Kurikulum** (`curriculum.manage`, JHI-10)
- ✅ `POST/PUT/DELETE /api/partners[/:id]` — **Admin Hubin** (`partner.manage`)
- ✅ `POST/PUT/DELETE /api/loker[/:id]`, `GET /api/loker/all` — **Admin Hubin** (`loker.manage`)
- ✅ `POST/PUT/DELETE /api/beasiswa[/:id]`, `GET /api/beasiswa/all` — **Admin Hubin** (`beasiswa.manage`)
- ✅ `POST/PUT/DELETE /api/lomba[/:id]`, `GET /api/lomba/all` — **Admin Humas** (`lomba.manage`)
- v2 modules: `admin/hubin/{lomba,loker,beasiswa}`, `admin/spmb` (landing content)

---

## 4. Auth & RBAC Design

1. **Register/Login** → hash password with `bcryptjs` → issue **JWT** (stateless, in `Authorization: Bearer <token>`).
2. **Auth middleware** verifies the JWT and attaches the user.
3. **RBAC middleware** checks the user's role against required permissions (optionally via `@casl/ability`).
4. **Roles** (from root `PRD.md` §3.11 / `ARCHITECTURE.md` §4): Super Admin, Admin Konten, Admin SPMB, Admin Support, Admin Kurikulum, Admin Hubin, Admin Humas, Admin Kesiswaan. Seeded in `prisma/seed.ts` with per-division `Role.division` + `Permission` keys.

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

## 7. Cross-References

- Canonical schema → `SCHEMA.md`
- Backend skills → `SKILL.md`
- Backend rules → `RULE.md`
- Product scope / roles → `../docs/PRD.md`, `../docs/ARCHITECTURE.md` §4
