# Design — JHIC 2.0 Global Design Context

This document captures **design context at the product/brand level** — the *why* behind the visual language. It deliberately stays **non-specific about tokens and components**; the authoritative, detailed design system lives in **`jhic2.0-frontend/DESIGN.md`** and its source of truth, **`jhic2.0-frontend/src/app/globals.css`**.

---

## 1. Brand Identity

- **Product:** JHIC 2.0 (Moklet SIGAP) — the official web portal and education gateway of **SMK Telkom Malang**.
- **Positioning:** A modern, all-in-one portal for students, parents, alumni, and industry partners. "Pelopor SMK bidang Teknologi dan Informatika di Indonesia sejak 1992" (pioneer of Indonesian vocational IT schools since 1992).
- **Audience:** Gen Z and millennial prospective students, their parents, alumni, and industry partners.

## 2. Global Design Principles

1. **Dynamic & aesthetic ("wow factor").** Modern interface with a strong first impression; micro-animations and glassmorphism-style surfaces keep visitors engaged.
2. **All-in-one gateway.** News portal, major profiles, aptitude test, and admission (SPMB) funnel into a single, coherent experience.
3. **CMS-driven.** Content is managed by school staff (Humas), so the visual system must remain consistent even as content changes.
4. **Parent-friendly.** Information (e.g. alumni distribution, living-cost guides) must be clear and trustworthy, not just visually flashy.
5. **Consistent and token-based.** Design is expressed through the centralized token system in `globals.css`, never ad-hoc values.

## 3. Visual Language at a Glance

| Aspect | Direction |
|---|---|
| Primary accent | A strong brand red (`#D71920`) used for CTAs, active states, and emphasis |
| Typography | Plus Jakarta Sans — modern, geometric, friendly; strong/bold headings |
| Surfaces | Light neutral backgrounds (`#F8F9FB`), white surfaces, soft borders |
| Shape | Generous radii (pill buttons, large rounded cards) |
| Depth | Soft shadows; a subtle red glow (`shadow-accent`) on primary actions |
| Motion | Subtle hover lifts, smooth transitions, a marquee for scrolling content |

> Full token tables (colors, type scale, spacing, radius, shadows, containers, animation) are in `jhic2.0-frontend/DESIGN.md` §Tokens.

## 4. Where Design Knowledge Lives

| Concern | Location |
|---|---|
| Design tokens & component library | `jhic2.0-frontend/DESIGN.md` + `jhic2.0-frontend/src/app/globals.css` |
| Brand narrative & principles | This file (root `DESIGN.md`) |
| Public assets (logos, images) | `jhic2.0-frontend/public/` |
| Feature/product design intent | `PRD.md` |

## 5. Design Constraints & Guidance for Agents

- **Never hardcode colors/shadows** — use the tokens from `globals.css` (e.g. `accent`, `surface`, `shadow-md`).
- **Reuse existing shared components** in `src/shared/ui/` instead of re-implementing patterns.
- **When the brand and the PRD conflict**, the PRD governs product decisions; visual tokens govern styling decisions.
- **Keep docs in sync:** any change to the token system must update `globals.css` **and** `jhic2.0-frontend/DESIGN.md`.
