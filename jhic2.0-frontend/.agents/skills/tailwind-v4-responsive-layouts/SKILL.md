---
name: tailwind-v4-responsive-layouts
description: Tailwind CSS v4 for complex responsive layouts and modern design patterns. Use when building multi-section pages with intricate responsive behavior, setting up v4 configuration, or implementing modern UI patterns with grid layouts, container queries, and design tokens.
---

# Tailwind CSS v4 Responsive Layouts

Modern responsive design with Tailwind v4's CSS-first configuration and advanced layout utilities.

## When to Apply

- Setting up Tailwind v4 with clean CSS-first configuration
- Building complex multi-section responsive pages
- Implementing modern design patterns with container queries and subgrid
- Creating layouts that adapt across multiple breakpoints

## Critical Rules

**CSS-first Configuration**: Replace JavaScript config with `@theme` directive in CSS

```css
// WRONG - v3 style JavaScript config
module.exports = {
  theme: {
    extend: {
      colors: { brand: '#000' }
    }
  }
}

// RIGHT - v4 CSS-first configuration
@import "tailwindcss";

@theme {
  --color-brand-500: #000;
  --breakpoint-3xl: 120rem;
  --container-8xl: 96rem;
}
```

**PostCSS Plugin Update**: Use dedicated `@tailwindcss/postcss` package

```js
// WRONG - v3 plugin setup
export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  }
}

// RIGHT - v4 plugin setup
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

**Gap over Space Utilities**: Use `gap` utilities instead of `space-x/y` for reliable spacing

```html
<!-- WRONG - space utilities can break -->
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- RIGHT - gap utilities are consistent -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Key Patterns

### V4 Installation and Setup

```bash
npm install tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

```css
/* globals.css */
@import "tailwindcss";
```

### Multi-Section Responsive Grid

```html
<div class="grid min-h-dvh grid-cols-1 lg:grid-cols-[18rem_2.5rem_minmax(0,1fr)_2.5rem]">
  <!-- Sidebar - hidden on mobile -->
  <div class="max-lg:hidden">
    <div class="sticky top-0 h-dvh overflow-y-auto p-6">
      <!-- Sidebar content -->
    </div>
  </div>
  
  <!-- Decorative border -->
  <div class="max-lg:hidden border-x bg-stripe-pattern"></div>
  
  <!-- Main content -->
  <div class="grid grid-cols-subgrid lg:col-start-3">
    <!-- Content sections -->
  </div>
</div>
```

### Container Queries for Component Responsiveness

```html
<div class="@container">
  <div class="grid grid-cols-2 gap-4 @sm:grid-cols-3 @lg:grid-cols-4">
    <!-- Responsive based on container, not viewport -->
  </div>
</div>
```

### Custom Theme Variables

```css
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 120rem;
  
  --color-brand-50: oklch(0.99 0.01 280);
  --color-brand-500: oklch(0.5 0.2 280);
  --color-brand-900: oklch(0.2 0.15 280);
  
  --font-display: "Inter", sans-serif;
  --ease-smooth: cubic-bezier(0.3, 0, 0, 1);
}
```

### Modern Card Layout

```html
<div class="mx-auto max-w-md md:max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="..." />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold text-brand-500 uppercase tracking-wide">
        Category
      </div>
      <h3 class="mt-1 text-lg font-medium leading-tight">Title</h3>
      <p class="mt-2 text-gray-500">Description content...</p>
    </div>
  </div>
</div>
```

### Complex Responsive Columns

```html
<div class="@container">
  <div class="columns-2 gap-4 @sm:columns-3 @lg:gap-8">
    <img class="aspect-square rounded-lg mb-4 @sm:mb-8" />
    <img class="aspect-3/2 rounded-lg mb-4 @sm:mb-8" />
    <img class="aspect-square rounded-lg mb-4 @sm:mb-8" />
  </div>
</div>
```

## Common Mistakes

- **Using v3 config syntax** — v4 requires CSS-first `@theme` configuration
- **Missing PostCSS plugin update** — Install `@tailwindcss/postcss` separately
- **Space utilities in complex layouts** — Use `gap` utilities for reliable spacing
- **Viewport-only responsive design** — Combine breakpoints with container queries for component-level responsiveness