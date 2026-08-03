# Rules — JHIC 2.0 Universal Agent Rules

These are **hard rules** for any AI agent working anywhere in this repository (frontend or backend). Sub-project `RULE.md` files add app-specific rules on top of these; they never override them.

---

## 1. Ground Truth & Verification

1. **Code is the source of truth.** Documentation (including this repo's docs) drifts. Before asserting how something works, verify against the actual code.
2. **Do not invent dependencies or APIs.** Only use packages that exist in `package.json` / `package-lock.json`. If a feature needs a new dependency, call it out explicitly as a proposal — never silently assume it exists.
3. **Do not trust library conventions from training data.** Versions here are recent and breaking (e.g. Next.js 16, Tailwind CSS v4, Express 5). Read the installed package's docs (`node_modules/<pkg>/docs/...` or its README) when in doubt.

## 2. Feature & Product Rules

4. **Treat `PRD.md` as canonical for product scope** (features, sitemap, roles). Do not remove or re-scope features without an explicit instruction — PRD v2.0 carries over **all** v1 features.
5. **Internal vs UI names.** Use `Moklet[NamaUnik]` as the internal name (code/docs) but plain descriptive labels in the navigation/UI (see `PRD.md` §1).
6. **Documented ≠ implemented.** Features listed in the PRD may not exist in code yet (v1 vs v2 gap). Never claim a feature exists without checking.

## 3. Documentation Rules

7. **Keep docs in sync with code.** If you change the database model → update `jhic2.0-backend/SCHEMA.md`. If you change design tokens → update `jhic2.0-frontend/DESIGN.md` and `globals.css`. If you change routes → update the relevant `ARCHITECTURE.md`.
8. **Documentation language is English** across the repository.
9. **Don't duplicate knowledge.** Put shared knowledge in root docs, app-specific knowledge in the sub-project docs, and reference (don't copy) across files.

## 4. Engineering Hygiene

10. **Never commit secrets.** `.env`, credentials, and tokens stay out of git (see `.gitignore`).
11. **CI must pass.** `.github/workflows/build-check.yml` runs `npm run build` for the frontend on push/PR to `main`. Do not push changes that break the build. Lint is enforced locally (`npm run lint`) — keep it clean.
12. **Work within the existing architecture** (see `ARCHITECTURE.md` and the per-app architecture docs). If a change justifies a structural change, propose it rather than silently diverging.
13. **No dead references.** When renaming/removing files (e.g. docs), update every cross-reference to them.

## 5. Working with This Codebase

14. **Ask before large destructive actions** (deleting features, rewriting large sections, changing package versions).
15. **Prefer the existing shared primitives** over one-off implementations, within each app (e.g. `src/shared/ui/*` in the frontend).
16. **Validate work.** Run the app's build/lint/tests relevant to your change and report results.
