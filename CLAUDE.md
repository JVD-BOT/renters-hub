# Renters Hub — project context (v2)

A consumer-facing site for private renters in England, built around the Renters' Rights Act 2025 (commenced 1 May 2026). **Set as a publication, not a SaaS landing page.** Free, plain-English. Tenant-side first; landlord-side monetisation comes later.

Live at: **https://rentershub.co.uk** (Vercel auto-deploys from `main`)

## Design direction (v2)

Pamphlet / indie magazine. References:
- **Stripe Press** — editorial gravitas
- **Defector Media / The Markup** — irreverent indie journalism
- **The Browser Company** — warmth + personality
- 1970s tenant-rights leaflets — political-publication-not-startup energy

Specifically *not*:
- The shadcn / Vercel / Linear template (italic accent words, kicker labels, soft gradients, card grids with hover lift, lucide icons in everything). Every AI generates this now.

### Palette

| Token            | Hex       | Use                                          |
|------------------|-----------|----------------------------------------------|
| `--paper`        | `#F0E9D6` | Page background. Cream, confident.           |
| `--paper-deep`   | `#E5DDC4` | Section backgrounds, notes                   |
| `--paper-deeper` | `#D8CDAE` | Deepest neutral                              |
| `--ink`          | `#181612` | Primary text. Warm near-black, not blue.     |
| `--ink-soft`     | `#2E2920` | Body prose                                   |
| `--brick`        | `#8C2622` | THE accent. Used confidently — not subtle.   |
| `--brick-soft`   | `#F2D9D5` | Hover backgrounds for brick links            |
| `--rust`         | `#C66835` | Secondary warm, sparingly                    |
| `--mute`         | `#6B6358` | Secondary text, taupe not grey               |
| `--positive` / `--warn` / `--danger` | desat. earth tones | Tool verdicts only |

### Typography

| Family            | Loaded via              | Use                                  |
|-------------------|-------------------------|--------------------------------------|
| **Inter**         | `next/font/google`      | Body sans-serif, navigation          |
| **Newsreader**    | `next/font/google`      | All display headlines, prose body    |
| **JetBrains Mono**| `next/font/google`      | Metadata, dates, section numbers     |

Utility classes: `.display`, `.display-bold`, `.display-italic`, `.meta`, `.meta-lowercase`, `.section-number`, `.drop-cap`, `.prose`, `.note`, `.btn-primary`, `.btn-secondary`, `.rule-thick`, `.rule-thin`.

`.prose h2[data-num="3"]` prefixes the heading with `§3` automatically.
`.drop-cap` floats a large brick-red first letter.

### Component vocabulary

- **Masthead** (header) — newspaper nameplate with date / Vol / Issue
- **Colophon** (footer) — book-style imprint with fonts used
- **Cover** (homepage hero) — magazine cover with sidebar facts box
- **Contents** (guides list) — numbered TOC (01, 02, 03)
- **Editorial** (homepage section) — first-person reason for the site
- **Note** — left-bordered editorial callout
- **Pull quote** — `blockquote` in long-form guides

## Sitemap

```
/                                  Front (cover, contents, tool, editorial, promise)
/rent-increase-check               Instrument No. 001 — the tool
/guides                            Contents page
/guides/what-changed-may-2026      Essay No. 01
/guides/rent-increases             Essay No. 02
/guides/section-13-notice          Reference No. 03
/about                             Colophon / about
/privacy                           Notice
/contact                           Correspondence
```

## Dev workflow

```
npm install
npm run dev          # http://localhost:3000
npm run build        # production build + type-check
```

Keep dev server in a **separate** PowerShell window from any Claude Code session.

## Content policy

- Every guide carries "Last reviewed" + Sources section
- Every guide ends with the Editorial note (disclaimer + Shelter/Citizens Advice/solicitor pointers)
- First-person voice throughout (E-E-A-T signal)
- All citations link to primary sources (legislation.gov.uk, GOV.UK)
- **England only** — explicit on every guide
- No AI-generated content presented as expert writing without genuine review

## AdSense plan

Don't apply yet. The 2026 bar requires 3–6 months of site activity and ~20–30 substantial articles. Current state: 3 substantive guides + 1 tool + 3 trust pages. Plan: add a guide a week until ~15, apply at ~3-month mark.

## Guardrails — do NOT add without explicit instruction

- Supabase or any database
- Authentication
- Stripe / billing
- Anthropic / OpenAI / any LLM API calls
- Analytics (GA, Plausible, Fathom, Vercel Analytics)
- Third-party trackers, ads, or affiliate scripts (until AdSense application)

## Workflow rules

- PowerShell syntax (semicolons, not `&&`)
- All commits go to `main` (not feature branches)
- After meaningful changes: `npm run build` to catch type errors before committing
- Verify with `git log --oneline -5` and live URL after every push
