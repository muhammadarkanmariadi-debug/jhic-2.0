# Design — Frontend Design System (jhic2.0-frontend)

The **specific, detailed** design knowledge for the frontend. The source of truth for every value here is **`src/app/globals.css`** (Tailwind CSS v4 `@theme` block). Brand-level context lives in the root `../DESIGN.md`.

> **Keep in sync:** if you change any token in `globals.css`, update the tables below.

---

## 1. Tokens (from `src/app/globals.css`)

### 1.1 Colors

| Token | Value | Usage |
|---|---|---|
| `bg-main` | `#F8F9FB` | Page background (default) |
| `surface` | `#ffffff` | Cards, sections, elevated panels |
| `surface-alt` | `#FAFAFA` | Alternate section background |
| `border-color` | `#E5E7EB` | Default borders |
| `border-light` | `#EEF0F3` | Subtle/light borders (e.g. footer) |
| `text-main` | `#111827` | Primary text |
| `text-muted` | `#6B7280` | Secondary/muted text |
| `text-light` | `#9CA3AF` | Tertiary/placeholder text |
| `text-inverse` | `#ffffff` | Text on accent/dark surfaces |
| `accent` | `#D71920` | Brand red — CTAs, active states, emphasis |
| `accent-hover` | `color-mix(in srgb, #D71920 84%, #000)` | Hover state for accent |
| `accent-text` | `#ffffff` | Text on accent |
| `secondary-action` | `#ffffff` | Secondary button surface |

### 1.2 Typography

| Token | Value |
|---|---|
| `font-sans` | `var(--font-plus-jakarta), system-ui, sans-serif` |
| `text-xs` | 11px |
| `text-sm` | 13px |
| `text-base` | 15.5px |
| `text-lg` | 18px |
| `text-xl` | 24px |
| `text-2xl` | `clamp(26px, 3.6vw, 38px)` |
| `text-3xl` | `clamp(32px, 5.6vw, 60px)` |

> Font is loaded via `next/font/google` in `src/app/layout.tsx` (`Plus_Jakarta_Sans`, variable `--font-plus-jakarta`). Body defaults: `line-height: 1.6`, `antialiased`, `overflow-x-hidden`.

### 1.3 Spacing

`space-1: 4px`, `space-2: 8px`, `space-3: 12px`, `space-4: 16px`, `space-5: 20px`, `space-6: 24px`, `space-8: 32px`, `space-10: 40px`, `space-12: 48px`, `space-16: 64px`.

### 1.4 Radius

| Token | Value |
|---|---|
| `radius-sm` | 10px |
| `radius-md` | 14px |
| `radius-lg` | 18px |
| `radius-xl` | 26px |
| `radius-pill` | 999px (pill buttons, avatars) |

### 1.5 Shadows / Elevation

| Token | Value |
|---|---|
| `shadow-sm` | `0 4px 12px rgba(0,0,0,0.05)` |
| `shadow-md` | `0 8px 30px rgba(0,0,0,0.08)` |
| `shadow-lg` | `0 20px 60px rgba(0,0,0,0.10)` |
| `shadow-accent` | `0 12px 26px rgba(215,25,32,0.28)` — red glow for primary actions |

`border-width: 1px` (default).

### 1.6 Layout

| Token | Value |
|---|---|
| `container-max` | 1200px |
| `container-hero` | 1280px |

### 1.7 Animations

`animate-marquee: marquee 30s linear infinite` — `@keyframes marquee` translates X from `0` to `-50%` (continuous scroll, e.g. partner logos / testimonials).

---

## 2. Base Styles (`@layer base`)

- `:root` maps `--background: var(--color-bg-main)` and `--foreground: var(--color-text-main)`.
- `body`: `bg-[var(--background)] text-[var(--foreground)] font-sans antialiased overflow-x-hidden`, `line-height: 1.6`.
- `html` in `layout.tsx`: `lang="id"`, `scroll-smooth`, `antialiased`; `body`: `flex min-h-full flex-col font-sans`.

---

## 3. Shared UI Component Inventory (`src/shared/ui/`)

| Component | Purpose |
|---|---|
| `Button` | Variants `primary`/`secondary`/`ghost`; sizes `sm`/`md`/`lg`; optional icon (left/right); `rounded-pill`, focus ring, hover lift |
| `Card` / `ContentCard` | Content containers |
| `PageHeader` | Page hero: breadcrumbs + large bold title + description (align left/center) |
| `SectionHeader` | Section heading: uppercase accent eyebrow + title with 3px accent underline + description |
| `Breadcrumbs` | Navigation trail |
| `Accordion` | Expandable FAQ/collapsible sections |
| `Modal` | Overlay dialog |
| `Pagination` | Paged lists (react-paginate) |
| `Timeline` | Vertical step timelines (e.g. PPDB flow) |
| `AutoCarousel` | Auto-advancing carousel |
| `OrgNode` | Org-chart nodes (structure organisasi) |

## 4. Widget Patterns (`src/widgets/`)

- **Layout:** `Header` (sticky, dropdown menus, scroll state, mobile menu) + `Footer` (4-column, contact/social).
- **Domain blocks:** `school/` (Hero, Features, Headmaster, FasilitasGrid, FAQAccordion), `program/` (Programs, JurusanTabs, EkskulGrid, PrestasiGrid, GraduationCheck), `news/` (News, NewsGrid, NewsHighlightCarousel), `alumni/` (AlumniDistribution, Testimonials, TestimonialMarquee), `about/` (CTA, Partners, K3Table), `contact/` (ContactFormSection, ServiceDeskGrid), `ppdb/` (PPDBCta, PPDBTimeline, PPDBPrestasi).

## 5. Interaction & Motion Conventions

- **Hover lift:** primary/secondary buttons and clickable cards lift with `-translate-y-0.5`.
- **Accent glow:** primary actions use `shadow-accent` (red glow).
- **Hover accent swap:** secondary elements (`bg-surface`, border) shift border/text to `accent` on hover.
- **Marquee:** continuous horizontal scroll for partners/testimonials (`animate-marquee`).
- **Focus:** `focus-visible:ring-2 ring-accent/30 ring-offset-2` for accessibility.
- **Sticky header:** transparent → solid on scroll (`window.scrollY > 80`).

---

## 6. Guidance

- Use tokens (`bg-surface`, `text-muted`, `shadow-md`, `rounded-pill`, ...) rather than raw CSS values.
- Compose with `shared/ui` components; extend patterns via props/className, don't fork them.
- New shared components go in `src/shared/ui/`; page-specific blocks go in `src/widgets/<domain>/`.
