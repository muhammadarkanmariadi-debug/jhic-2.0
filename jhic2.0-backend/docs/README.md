# Backend Documentation Index

Index for the **jhic2.0-backend** documentation. See `../AGENTS.md` for the agent entry point.

> **Status: planning phase.** The backend is a stub — no `src/`, no `prisma/schema.prisma` yet. These docs define the target.

| Document | Purpose | Start here when... |
|---|---|---|
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Target Express layered architecture, API surface, auth/RBAC flow, env vars | You're implementing or extending the backend structure |
| [`SCHEMA.md`](./SCHEMA.md) | Canonical documented database schema (planned, to be implemented in Prisma) | You need the data model / DB design |
| [`SKILL.md`](./SKILL.md) | Backend-specific agent skills (Express 5, Prisma 7, JWT/RBAC, bcrypt) | You're implementing backend features and need conventions |
| [`RULE.md`](./RULE.md) | Backend-specific agent rules | You're an AI agent and need the backend hard constraints |

## Cross-references

- Global docs: `../../docs/` (PRD, ARCHITECTURE, RULE, SKILL)
