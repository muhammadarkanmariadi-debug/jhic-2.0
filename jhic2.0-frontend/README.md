# JHIC 2.0 Frontend (SMK Telkom Malang)

JHIC 2.0 is the official web portal for SMK Telkom Malang, rebuilt from the ground up to provide a robust, modern, and interactive experience for students, parents, alumni, and industry partners.

## 🚀 Tech Stack

- **Framework:** Next.js 16.2 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Utility-first)
- **Icons & Visuals:** Lucide React, Recharts
- **Forms & Validation:** React Hook Form, Zod
- **Components:** React Paginate (Reusable Pagination)

## 📁 Architecture (Feature-Sliced Design)

The project leverages a strict Feature-Sliced Design (FSD) architecture within the `src/` directory to ensure modularity and scalability:

- **`src/app/`** - Next.js App Router definitions, routing, and global layouts.
- **`src/shared/`** - Reusable elements including UI components (Buttons, Pagination, Cards, Modals), central TypeScript interfaces (`types/index.ts`), and utilities.
- **`src/features/`** - Functional modules handling specific user interactions.
- **`src/entities/`** - Core business entities and atomic UI components (e.g., News, Alumni, Programs).
- **`src/services/`** - Data fetching, API integrations, and robust dummy data mapping.
- **`src/widgets/`** - Complex, self-contained UI blocks (Headers, Footers, Data Grids) combining multiple entities.

> **Note:** For a deep dive into the architectural plan, API endpoints, and RBAC strategies, please refer to the detailed [SKILL.md](../SKILL.md) file.

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
