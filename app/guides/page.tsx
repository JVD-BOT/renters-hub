import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Scale, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-English guides to the Renters' Rights Act 2025 for private renters in England. Every guide is dated, sourced, and written from a renter's perspective.",
};

const GUIDES = [
  {
    href: "/guides/what-changed-may-2026",
    icon: Calendar,
    title: "What changed on 1 May 2026",
    blurb:
      "A complete overview of the Renters' Rights Act 2025: Section 21 abolished, periodic tenancies for everyone, the new rent increase rules, pet requests, the bidding-war ban, and what's still being phased in.",
    readTime: "8 min read",
    updated: "27 May 2026",
  },
  {
    href: "/guides/rent-increases",
    icon: Scale,
    title: "How rent increases work now",
    blurb:
      "The three rules every Section 13 rent increase must follow, why rent review clauses no longer work, how to research market rent properly, and the three big changes to how the First-tier Tribunal handles challenges.",
    readTime: "7 min read",
    updated: "27 May 2026",
  },
  {
    href: "/guides/section-13-notice",
    icon: FileText,
    title: "Section 13 notices, decoded",
    blurb:
      "Every required field on the new Form 4A, the three dates that matter, the most common defects landlords are making, and exactly how to refer a notice to the First-tier Tribunal.",
    readTime: "6 min read",
    updated: "27 May 2026",
  },
];

export default function GuidesIndexPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
      <nav className="text-sm text-mute mb-5">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span> Guides
      </nav>

      <header className="mb-12">
        <p className="kicker mb-3">Guides</p>
        <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
          Everything you need to know,{" "}
          <span className="display-italic">in plain English.</span>
        </h1>
        <p className="lede text-lg sm:text-xl text-mute mt-5 leading-relaxed">
          Each guide is dated, cites primary sources (the Act itself, GOV.UK,
          and tribunal procedure), and is written from a renter&apos;s
          perspective. We update them when the law or guidance changes.
        </p>
      </header>

      <div className="space-y-4">
        {GUIDES.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="card block group"
          >
            <div className="flex items-start gap-5">
              <g.icon className="w-6 h-6 text-signal shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-xl mb-2 group-hover:text-signal transition-colors">
                  {g.title}
                </h2>
                <p className="text-mute leading-relaxed mb-4">{g.blurb}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-mute">
                  <span>{g.readTime}</span>
                  <span>·</span>
                  <span>Last reviewed {g.updated}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-signal shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>

      <aside className="mt-12 p-6 bg-paper-soft border border-hairline rounded-xl">
        <p className="kicker mb-3">Coming soon</p>
        <ul className="text-sm text-mute space-y-2">
          <li>Section 8 grounds for possession — all 30 of them, explained</li>
          <li>How to request a pet under the new rules</li>
          <li>Awaab&apos;s Law: what it requires of landlords</li>
          <li>The Information Sheet your landlord should have given you</li>
        </ul>
      </aside>
    </article>
  );
}
