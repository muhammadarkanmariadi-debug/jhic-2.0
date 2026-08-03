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
- `GET /api/programs`, `GET /api/extracurriculars`
- `GET /api/testimonials`, `GET /api/partners`
- `GET /api/faq`, `GET /api/service-desk/status`
- `POST /api/inquiries`
- `POST /api/ppdb/register` → *(v2: SPMB landing, redirect to Foundation portal — no registration data)*

### Admin (JWT + RBAC)
- `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`
- CRUD routes per resource, e.g. `POST/PUT/DELETE /api/admin/news`, `DELETE /api/admin/facilities/:id`
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

## 7. Cross-References

- Canonical schema → `SCHEMA.md`
- Backend skills → `SKILL.md`
- Backend rules → `RULE.md`
- Product scope / roles → `../PRD.md`, `../ARCHITECTURE.md` §4
