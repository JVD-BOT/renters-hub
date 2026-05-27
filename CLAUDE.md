# Renters Hub — project context

A consumer-facing site for private renters in England, built around the Renters' Rights Act 2025 (commenced 1 May 2026). Free, plain-English tools and guides. Tenant-side first; landlord-side monetisation comes later.

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS 4 (CSS-first `@theme` config in `app/globals.css`)
- lucide-react for icons
- next/font: Geist Sans (body), Fraunces (display headings), Geist Mono (mono)
- No database, no auth, no Stripe, no LLM API calls in v0.
- Deploys to Vercel.

## Design system

Palette (defined as CSS variables in `app/globals.css`, exposed as Tailwind colors via `@theme`):

- `--ink` `#0D0D12` — primary text
- `--paper` `#F5F3EE` — page background
- `--signal` `#5B5EFF` — primary CTA, links
- `--mint` `#2FFFC8` — success / green verdict
- `--coral` `#FF4E6A` — danger / red verdict
- `--amber` `#F5B800` — warning / amber verdict
- `--mute` `#6B6B78` — secondary text

Use the `.display` / `.display-italic` utility classes for headline-style Fraunces text. Use `.prose` for guide-page content.

## Sitemap (as built)

```
/                                  Homepage
/rent-increase-check               Section 13 rent increase validator (hero tool)
/guides/what-changed-may-2026      Overview of RRA 2025
/guides/rent-increases             How rent increases work post-1 May 2026
/guides/section-13-notice          Plain-English Form 4A explainer
/about                             About (placeholder — fill manually)
/privacy                           Privacy policy
/contact                           Mailto only (no backend form in v0)
/sitemap.xml                       Auto-generated
/robots.txt                        Auto-generated
```

## Dev workflow

Run the dev server in a **separate PowerShell terminal window** from any Claude Code session:

```
npm run dev
```

This serves on `http://localhost:3000` and hot-reloads on file changes. Never run the dev server from inside a Claude Code session — keep them in separate tabs.

## Build & deploy

```
npm run build      # production build, also runs type-check
npm run start      # serve the built output locally
```

When deploying to Vercel, no env vars are required for v0. Push the `main` branch to a Vercel-linked GitHub repo and it deploys automatically.

## File map

```
app/
  layout.tsx                   Root layout with fonts, header, footer, cookie banner
  page.tsx                     Homepage
  globals.css                  Design tokens + prose styles
  sitemap.ts / robots.ts       SEO basics
  rent-increase-check/         Hero tool page (server) + uses client tool component
  guides/<slug>/page.tsx       Guide pages with placeholder content
  about, privacy, contact      Standard pages
components/
  header.tsx, footer.tsx       Site chrome
  cookie-banner.tsx            Essential-cookies-only banner (localStorage)
  rent-increase-tool.tsx       Client form + result UI for the hero tool
  guide-layout.tsx             Shared shell for guide pages (sources, disclaimer)
lib/
  rra-logic.ts                 Pure validation functions for Section 13 notices
```

## Guardrails — do NOT add without explicit instruction from Jon

- ❌ Supabase or any database
- ❌ Authentication (NextAuth, Clerk, etc.)
- ❌ Stripe or any billing
- ❌ Anthropic / OpenAI / any LLM API calls
- ❌ Analytics (GA, Plausible, Fathom, Vercel Analytics) — privacy commitment
- ❌ Third-party trackers, ads, or affiliate scripts

v0 is intentionally stateless and quiet. Monetisation arrives in v2+, deliberately.

## Workflow rules

- PowerShell syntax for any terminal commands (semicolons, not `&&`).
- All commits go to `main` (not feature branches). Verify with `git log --oneline -5` and `git log origin/main --oneline -5` after pushing.
- After meaningful changes, always run `npm run build` to catch type errors before committing.

## Content policy

- Every guide page must show "Last reviewed: <date>" and include a Sources section linking to primary sources (GOV.UK, legislation.gov.uk).
- Every page must show the disclaimer pointing to Shelter / Citizens Advice / a solicitor.
- The site is England-only. Wales (Renting Homes (Wales) Act 2016) and Scotland operate under different regimes. Be explicit about this.
- "Last updated" date in the footer should match the most recently reviewed page.
