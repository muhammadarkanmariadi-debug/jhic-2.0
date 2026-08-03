# JHIC 2.0 — Sistem Informasi & Portal Web SMK Telkom Malang

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Environment-Node.js%2020-339933.svg?logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Frontend-Next.js%2016-000000.svg?logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Backend-Express.js-000000.svg?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748.svg?logo=prisma&logoColor=white)

**Platform Portal Web Modern, Sistem PPDB, dan Manajemen Konten Akademik Terpusat untuk Lingkungan Sekolah Vokasi**

</div>

---

This is a monorepo containing the **JHIC 2.0** web portal for SMK Telkom Malang — a Next.js frontend and a (planned) Express/Prisma backend. This README is a **navigation index only**; all detailed knowledge lives in the documents linked below.

## Documentation Index

| Document | Purpose |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | Entry-point router for AI agents working in this repo |
| [`PRD.md`](./PRD.md) | Product Requirements v2.0 (Moklet SIGAP) — features, sitemap, roles |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Global architecture, repo layout, knowledge-source hierarchy, RBAC model |
| [`DESIGN.md`](./DESIGN.md) | Global design context & brand-level principles |
| [`RULE.md`](./RULE.md) | Universal agent rules for both apps |
| [`SKILL.md`](./SKILL.md) | Common agent skills for working in this monorepo |

## Sub-Projects

| Path | Description | Docs |
|---|---|---|
| [`jhic2.0-frontend/`](./jhic2.0-frontend/) | Next.js 16 (App Router) web application | [`AGENTS.md`](./jhic2.0-frontend/AGENTS.md), [`SKILL.md`](./jhic2.0-frontend/SKILL.md), [`DESIGN.md`](./jhic2.0-frontend/DESIGN.md), [`RULE.md`](./jhic2.0-frontend/RULE.md), [`ARCHITECTURE.md`](./jhic2.0-frontend/ARCHITECTURE.md), [`README.md`](./jhic2.0-frontend/README.md) |
| [`jhic2.0-backend/`](./jhic2.0-backend/) | Express REST API (currently a stub — planning phase) | [`AGENTS.md`](./jhic2.0-backend/AGENTS.md), [`SKILL.md`](./jhic2.0-backend/SKILL.md), [`RULE.md`](./jhic2.0-backend/RULE.md), [`ARCHITECTURE.md`](./jhic2.0-backend/ARCHITECTURE.md), [`SCHEMA.md`](./jhic2.0-backend/SCHEMA.md) |

## Quick Start

```bash
cd jhic2.0-frontend
npm install
npm run dev     # http://localhost:3000
```

---

<div align="center">

**© 2026 JHIC 2.0 (SMK Telkom Malang) — Hak Cipta Dilindungi.**<br>
*Mencetak Generasi Vokasi Berbasis Teknologi Masa Depan.*

</div>
