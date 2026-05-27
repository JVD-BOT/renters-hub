# Renters Hub — project context

A consumer-facing site for private renters in England, built around the Renters' Rights Act 2025 (commenced 1 May 2026). Free, plain-English tools and guides. Tenant-side first; landlord-side monetisation comes later.

Currently live at: **https://renters-hub.vercel.app** (Vercel auto-deploys from `main`)

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS 4 (CSS-first `@theme` config in `app/globals.css`)
- lucide-react for icons
- next/font: Geist Sans (body), Fraunces (display headings), Geist Mono (mono)
- No database, no auth, no Stripe, no LLM API calls in v0/v1
- Deploys to Vercel from GitHub `main`

## Design system (v1)

Palette anchored to Jon's personal identity, elevated for public-facing use:

| Token              | Hex       | Use                                     |
|--------------------|-----------|------------------------------------------|
| `--ink`            | `#0D0D12` | Primary text                             |
| `--ink-soft`       | `#1A1A24` | Slightly lighter ink for prose body      |
| `--paper`          | `#F7F4ED` | Page background (warmer than v0)         |
| `--paper-soft`     | `#EFEBE0` | Section backgrounds, cards               |
| `--paper-deep`     | `#E5DFD0` | Deepest neutral tone                     |
| `--signal`         | `#5B5EFF` | Primary CTA, links, brand accent         |
| `--signal-soft`    | `#ECEDFF` | Signal background tint                   |
| `--signal-deep`    | `#4244D9` | Signal text on light backgrounds         |
| `--sand`           | `#C29A5C` | Editorial secondary (warm accent)        |
| `--mint` / `--coral` / `--amber` | varied | Semantic only (verdict colours)         |
| `--mute`           | `#5D5D6B` | Secondary text                           |

Use `.display` / `.display-italic` utility classes for Fraunces headline-style text. Use `.prose` for guide-page content. Use `.kicker` for the small uppercase pre-heading labels. Use `.callout`, `.callout-warn`, `.callout-good` inside `.prose` for inline boxed tips.

## Sitemap (as built)

```
/                                  Homepage (hero, stats, tool feature, guides, why, closing)
/rent-increase-check               Section 13 rent increase validator (hero tool)
/guides                            Guides index page
/guides/what-changed-may-2026      Overview of RRA 2025 (1800+ words)
/guides/rent-increases             How rent increases work (1900+ words)
/guides/section-13-notice          Form 4A decoded (1900+ words)
/about                             First-person About page (E-E-A-T anchor)
/privacy                           Privacy policy
/contact                           Email + emergency redirect to Shelter
/sitemap.xml                       Auto-generated
/robots.txt                        Auto-generated
```

## Dev workflow

Local dev requires Node 18+ and npm:
```
npm install
npm run dev
```

Serves on `http://localhost:3000` with hot reload. Keep the dev server in a **separate** PowerShell window from any Claude Code session.

## Build & deploy

```
npm run build      # production build + type-check
npm run start      # serve the built output locally
```

Production deploys via Vercel from GitHub `main`. No env vars required.

## Content policy (AdSense-aware)

- Every guide page must carry "Last reviewed" + Sources section
- Every guide page must show the disclaimer pointing to Shelter / Citizens Advice / a solicitor
- All guides written from first-person voice where appropriate (E-E-A-T signal)
- Every guide links to primary sources (legislation.gov.uk, GOV.UK)
- Site is **England only** — be explicit about this on every guide
- "Last updated" date in footer matches most recently reviewed page
- No AI-generated content presented as expert writing without genuine review

## AdSense plan

We do **not** apply for AdSense yet. The 2026 AdSense bar requires 3–6 months of consistent activity and 20–30 quality articles. Current status: 3 substantive guides + 1 tool + about/privacy/contact = 7 pages of substance. Plan: add a guide a week until we hit ~15, then apply at the 3-month mark.

## Guardrails — do NOT add without explicit instruction from Jon

- Supabase or any database
- Authentication (NextAuth, Clerk, etc.)
- Stripe or any billing
- Anthropic / OpenAI / any LLM API calls
- Analytics (GA, Plausible, Fathom, Vercel Analytics) — privacy commitment
- Third-party trackers, ads, or affiliate scripts (until AdSense application)

## Workflow rules

- PowerShell syntax for any terminal commands (semicolons, not `&&`)
- All commits go to `main` (not feature branches)
- After meaningful changes: `npm run build` to catch type errors before committing
- Verify with `git log --oneline -5` and live URL after every push
