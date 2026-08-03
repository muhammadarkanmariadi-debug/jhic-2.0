# JHIC 2.0 Frontend (SMK Telkom Malang)

JHIC 2.0 is the official web portal for SMK Telkom Malang, rebuilt from the ground up to provide a robust, modern, and interactive experience for students, parents, alumni, and industry partners.

This README is a **quickstart** only. For detailed knowledge, see the docs in this directory:

- [`AGENTS.md`](./AGENTS.md) — agent entry point + Next.js 16 warning
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — fixed FSD structure, routing map, data flow
- [`DESIGN.md`](./DESIGN.md) — design system & tokens
- [`RULE.md`](./RULE.md) — frontend-specific agent rules
- [`SKILL.md`](./SKILL.md) — frontend-specific agent skills
- Product scope, sitemap & roles → [`../PRD.md`](../PRD.md) and [`../ARCHITECTURE.md`](../ARCHITECTURE.md)

## 🚀 Tech Stack

- **Framework:** Next.js 16.2 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (utility-first, CSS-first config)
- **Icons & Visuals:** Lucide React, Recharts
- **Forms & Validation:** React Hook Form, Zod
- **Components:** React Paginate (reusable pagination)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd jhic2.0-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🧪 Scripts

- `npm run dev` - Starts the local development server.
- `npm run build` - Builds the application for production (utilizing Next.js Turbopack).
- `npm run start` - Runs the compiled application in production mode.
- `npm run lint` - Lints the codebase using ESLint to ensure code quality and consistency.

## ⚙️ Continuous Integration

This repository includes an automated GitHub Action pipeline (`.github/workflows/build-check.yml`).
Whenever a commit is pushed or a pull request is opened against the `main` branch, the CI pipeline triggers an automated `npm run build` to verify compilation and structural integrity. Linting is strategically decoupled during CI builds to prioritize structural validation, while remaining strictly enforceable locally via `npm run lint`.
