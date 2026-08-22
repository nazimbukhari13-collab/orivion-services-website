# Orivion

Marketing website for **Orivion**, a licensed Dubai corporate services provider that also runs an in-house digital studio. The site covers two families of work:

- **Business setup** — company formation, trade licensing, PRO and visas, compliance, accounting and tax, banking, office solutions.
- **Digital & technology** — websites and platforms, custom software, CRM and automation, digital marketing, social media, AI integration.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, server-side rendered)
- [TanStack Router](https://tanstack.com/router) with file-based routes
- [Tailwind CSS v4](https://tailwindcss.com) plus a custom design layer in `src/orivion.css`
- [Vite](https://vitejs.dev) 8, bundled through Nitro for a Cloudflare target
- TanStack Query, Radix UI primitives, `lucide-react`, `sonner`

## Getting started

Node 20 or newer is required. Any of Bun, npm or pnpm works; the examples use npm.

```bash
npm install
npm run dev
```

The dev server runs at **http://localhost:8080**.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
  routes/            File-based routes (pages + sitemap.xml + SSR shell)
  components/
    orivion/         Themed header, footer, shared UI, client effects
    site/            Site layout and the consultation form
    ui/              Radix-based primitives
  lib/site-data.ts   Services, jurisdictions, free zones, FAQs, posts, config
  orivion.css        The Orivion design system (scoped under .orivion)
  styles.css         Tailwind entry and design tokens
public/              Static assets
```

## The Orivion theme

The look lives in `src/orivion.css`, scoped under a `.orivion` root class that wraps the whole app. It uses Space Grotesk for body text, Instrument Serif (italic) for accents, and JetBrains Mono for labels, over a light background with a blue-to-violet-to-peach gradient. Interaction (custom cursor, scroll reveals, count-up stats, the services accordion) is wired up in `src/components/orivion/OrivionEffects.tsx` and re-runs on each route change.

## Content

Business and service content is accurate as of 2026 (UAE Corporate Tax at 9% above AED 375,000, Small Business Relief through the end of 2026, ESR wound down for financial years from 2023, VAT at 5%, and the Golden Visa routes). Treat it as marketing copy, not legal or tax advice.
