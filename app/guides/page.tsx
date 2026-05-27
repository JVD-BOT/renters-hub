import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-English guides to the Renters' Rights Act 2025 for private renters in England.",
};

const GUIDES = [
  {
    num: "01",
    href: "/guides/what-changed-may-2026",
    title: "What changed on 1 May 2026",
    blurb:
      "A complete overview of the Renters' Rights Act 2025: Section 21 abolished, periodic tenancies for everyone, the new rent increase rules, pet requests, the bidding-war ban, and what's still being phased in.",
    meta: "Essay · 8 min · Last reviewed 27 May 2026",
  },
  {
    num: "02",
    href: "/guides/rent-increases",
    title: "How rent increases work now",
    blurb:
      "The three rules every Section 13 rent increase must follow, why rent review clauses no longer work, how to research market rent properly, and the three big changes to how the First-tier Tribunal handles challenges.",
    meta: "Essay · 7 min · Last reviewed 27 May 2026",
  },
  {
    num: "03",
    href: "/guides/section-13-notice",
    title: "Section 13 notices, decoded",
    blurb:
      "Every required field on the new Form 4A, the three dates that matter, the most common defects landlords are making, and exactly how to refer a notice to the First-tier Tribunal.",
    meta: "Reference · 6 min · Last reviewed 27 May 2026",
  },
];

const COMING = [
  "Section 8 grounds for possession — all 30 of them",
  "How to request a pet under the new rules",
  "Awaab's Law: what it requires of landlords",
  "The Information Sheet your landlord should have given you",
];

export default function GuidesIndex() {
  return (
    <article className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 pt-12 sm:pt-16 pb-12">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <span className="text-ink">Guides</span>
      </nav>

      <header className="mb-12 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-4">Contents</p>
        <h1 className="display-bold text-5xl sm:text-6xl leading-[1.02] tracking-tight">
          Everything you need to know.
        </h1>
        <p className="lede text-ink-soft mt-6 leading-snug max-w-2xl">
          Each guide is dated, cites primary sources, and is written from a
          renter&apos;s perspective. Updated when the law or guidance changes.
        </p>
      </header>

      <ol className="divide-y divide-rule">
        {GUIDES.map((g) => (
          <li key={g.href}>
            <Link
              href={g.href}
              className="group block py-7 sm:py-9 grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-10 items-baseline hover:bg-paper-deep/50 -mx-3 sm:-mx-6 px-3 sm:px-6 transition-colors"
            >
              <span className="display-bold text-4xl sm:text-5xl text-brick tabular-nums leading-none">
                {g.num}
              </span>
              <div>
                <h2 className="display text-2xl sm:text-3xl font-semibold leading-tight group-hover:underline underline-offset-4 decoration-2 decoration-brick">
                  {g.title}
                </h2>
                <p className="text-ink-soft mt-3 leading-relaxed">
                  {g.blurb}
                </p>
                <p className="meta text-mute mt-4">{g.meta}</p>
              </div>
              <span className="display-bold text-2xl text-ink hidden sm:block">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <aside className="mt-14 pt-8 border-t-2 border-ink">
        <p className="meta text-brick mb-5">Forthcoming</p>
        <ul className="text-ink-soft space-y-2.5">
          {COMING.map((c, i) => (
            <li key={c} className="flex gap-4">
              <span className="meta-lowercase text-mute shrink-0 pt-1 w-6 tabular-nums">
                {String(i + 4).padStart(2, "0")}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
