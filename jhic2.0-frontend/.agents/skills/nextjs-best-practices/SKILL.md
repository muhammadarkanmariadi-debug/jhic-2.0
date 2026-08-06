---
name: nextjs-best-practices
description: Next.js App Router best practices for optimization and production-ready applications. Use when refactoring existing Next.js code, optimizing performance, implementing proper file structure, or ensuring production readiness with metadata, caching, and error handling.
---

# Next.js Best Practices

Comprehensive patterns for production-ready Next.js applications with App Router.

## When to Apply

- Optimizing existing Next.js applications for performance
- Implementing proper file structure and routing conventions
- Setting up production-grade error handling and SEO
- Configuring caching strategies and data fetching patterns

## Critical Rules

**Server vs Client Components**: Default to Server Components, use Client Components only for interactivity

```tsx
// WRONG - Using Client Component for static content
'use client'
export default function Header() {
  return <h1>Static Title</h1>
}

// RIGHT - Server Component by default, Client only for interactivity
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />        {/* Server Component */}
        <Search />      {/* Client Component */}
      </nav>
      <main>{children}</main>
    </>
  )
}
```

**Root Layout Requirements**: Must include `<html>` and `<body>` tags with `children` prop

```tsx
// WRONG - Missing required structure
export default function RootLayout({ children }) {
  return <div>{children}</div>
}

// RIGHT - Complete root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**Data Fetching Caching**: Use explicit cache options for predictable behavior

```tsx
// WRONG - Relying on defaults
const data = await fetch('https://api.example.com/data')

// RIGHT - Explicit caching strategy
const cachedData = await fetch('https://api.example.com/data', { 
  cache: 'force-cache' 
})
const realtimeData = await fetch('https://api.example.com/data', { 
  cache: 'no-store' 
})
const revalidatedData = await fetch('https://api.example.com/data', { 
  next: { revalidate: 60 } 
})
```

## Key Patterns

### File Structure with src/ Directory

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   ├── global-error.tsx    # Global error boundary
│   ├── not-found.tsx       # 404 page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── page.tsx
│   │   │   └── not-found.tsx
│   │   └── error.tsx
│   └── api/
│       └── auth/
│           └── route.ts
├── components/
├── lib/
└── utils/
```

### Metadata Configuration

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App Name',
  description: 'App description for SEO',
  openGraph: {
    title: 'App Name',
    description: 'App description',
    url: 'https://example.com',
    siteName: 'App Name',
    images: [{
      url: 'https://example.com/og.png',
      width: 800,
      height: 600,
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### Error Boundaries Setup

```tsx
// app/error.tsx - Route segment error
'use client'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => retry()}>Try again</button>
    </div>
  )
}

// app/global-error.tsx - Global error boundary
'use client'

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => retry()}>Try again</button>
      </body>
    </html>
  )
}
```

### Font Optimization

```ts
// lib/fonts.ts
import { Inter, Roboto_Mono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
```

### API Route Security

```ts
// app/api/admin/route.ts
import { verifySession } from '@/app/lib/dal'

export async function GET() {
  const session = await verifySession()
  
  if (!session) {
    return new Response(null, { status: 401 })
  }
  
  if (session.user.role !== 'admin') {
    return new Response(null, { status: 403 })
  }
  
  // Continue for authorized users
}
```

### Middleware with Security Headers

```ts
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
  `.replace(/\s{2,}/g, ' ').trim()

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers).set('x-nonce', nonce),
    },
  })
  
  response.headers.set('Content-Security-Policy', cspHeader)
  return response
}

export const config = {
  matcher: [{
    source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    missing: [
      { type: 'header', key: 'next-router-prefetch' },
      { type: 'header', key: 'purpose', value: 'prefetch' }
    ],
  }],
}
```

## Common Mistakes

- **Missing cache strategies** — Always specify `cache` or `revalidate` options for fetch calls
- **Client Components for static content** — Use Server Components unless interactivity is required
- **Missing error boundaries** — Add `error.tsx` files for route segments and `global-error.tsx` for root
- **Incorrect root layout** — Must include `<html>` and `<body>` tags in root layout
- **Bundle bloat from Server imports** — Keep server-only code in Server Components