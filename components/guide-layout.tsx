import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";

interface Source {
  href: string;
  label: string;
}

interface GuideLayoutProps {
  title: string;
  intro: string;
  lastReviewed?: string;
  readTime?: string;
  children: React.ReactNode;
  sources?: Source[];
}

const DEFAULT_SOURCES: Source[] = [
  {
    href: "https://www.legislation.gov.uk/ukpga/2025/26/contents",
    label: "Renters' Rights Act 2025 (full text on legislation.gov.uk)",
  },
  {
    href: "https://www.gov.uk/government/collections/private-renting-news-and-resources",
    label: "GOV.UK — Private renting news and resources",
  },
  {
    href: "https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet",
    label: "GOV.UK — The Renters' Rights Act Information Sheet 2026",
  },
];

export function GuideLayout({
  title,
  intro,
  lastReviewed = "27 May 2026",
  readTime,
  children,
  sources = DEFAULT_SOURCES,
}: GuideLayoutProps) {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 fade-up">
      <nav className="text-sm text-mute mb-5">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span>{" "}
        <Link href="/guides" className="hover:text-ink transition-colors">
          Guides
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span>{" "}
        <span className="text-ink">{title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="display text-4xl sm:text-[2.75rem] leading-[1.1] tracking-tight">
          {title}
        </h1>
        <p className="lede text-lg sm:text-xl text-mute mt-5 leading-relaxed font-light">
          {intro}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-center mt-6 text-xs text-mute uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Last reviewed {lastReviewed}
          </span>
          {readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          )}
          <span>· England only</span>
        </div>
      </header>

      <div className="prose border-t border-hairline pt-10">{children}</div>

      <section className="mt-14 border-t border-hairline pt-8">
        <h2 className="display text-2xl mb-4">Sources</h2>
        <ul className="space-y-2 text-sm">
          {sources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-2"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <aside className="mt-10 bg-paper-soft border border-hairline rounded-xl p-5 text-sm text-mute leading-relaxed">
        <p>
          <strong className="text-ink">This is information, not legal advice.</strong>{" "}
          The Renters&apos; Rights Act 2025 applies to England only. Wales and
          Scotland have separate regimes. For advice on your specific situation,
          contact{" "}
          <a
            href="https://england.shelter.org.uk/get_help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Shelter
          </a>
          ,{" "}
          <a
            href="https://www.citizensadvice.org.uk/housing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Citizens Advice
          </a>
          , or a solicitor.
        </p>
      </aside>

      <nav className="mt-12 mb-4 flex flex-col sm:flex-row gap-3">
        <Link
          href="/guides"
          className="text-sm text-signal underline underline-offset-2"
        >
          ← All guides
        </Link>
      </nav>
    </article>
  );
}
