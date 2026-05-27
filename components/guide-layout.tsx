import Link from "next/link";

interface Source {
  href: string;
  label: string;
}

interface GuideLayoutProps {
  number: string;
  title: string;
  intro: string;
  lastReviewed?: string;
  readTime?: string;
  category?: string;
  children: React.ReactNode;
  sources?: Source[];
}

const DEFAULT_SOURCES: Source[] = [
  {
    href: "https://www.legislation.gov.uk/ukpga/2025/26/contents",
    label: "Renters' Rights Act 2025 — full text on legislation.gov.uk",
  },
  {
    href: "https://www.gov.uk/government/collections/private-renting-news-and-resources",
    label: "GOV.UK — Private renting news and resources",
  },
  {
    href: "https://assets.publishing.service.gov.uk/media/69bc04b8f7b1c24d8e23ce60/The_Renters__Rights_Act_Information_Sheet_2026.pdf",
    label: "GOV.UK — Renters' Rights Act Information Sheet 2026 (PDF)",
  },
];

export function GuideLayout({
  number,
  title,
  intro,
  lastReviewed = "27 May 2026",
  readTime,
  category = "Essay",
  children,
  sources = DEFAULT_SOURCES,
}: GuideLayoutProps) {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <Link href="/guides" className="hover:text-brick">Guides</Link> /{" "}
        <span className="text-ink">No. {number}</span>
      </nav>

      <header className="mb-10 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-5">
          {category} · No. {number} · England only
        </p>
        <h1 className="display-bold text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
          {title}
        </h1>
        <p className="lede text-ink-soft mt-7 leading-snug">{intro}</p>
        <div className="meta text-mute mt-7 flex flex-wrap gap-x-4 gap-y-1">
          <span>Last reviewed {lastReviewed}</span>
          {readTime && <span>· {readTime}</span>}
        </div>
      </header>

      <div className="prose">{children}</div>

      {/* Sources — set like a footnotes section */}
      <section className="mt-16 pt-8 border-t-2 border-ink">
        <p className="meta text-brick mb-5">Sources & further reading</p>
        <ol className="text-sm space-y-2.5">
          {sources.map((s, i) => (
            <li key={s.href} className="flex gap-3">
              <span className="meta-lowercase text-mute shrink-0 pt-0.5 w-6">
                [{i + 1}]
              </span>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-brick hover:bg-brick-soft"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Disclaimer — set like an editorial note */}
      <aside className="mt-10 bg-paper-deep border-l-2 border-brick px-5 py-4 text-sm leading-relaxed">
        <p className="meta text-brick mb-2">Editorial note</p>
        <p className="text-ink-soft">
          This is information, not legal advice. The Renters&apos; Rights Act
          2025 applies to England only. For advice on your specific situation,
          contact{" "}
          <a
            href="https://england.shelter.org.uk/get_help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brick underline underline-offset-2"
          >
            Shelter
          </a>
          ,{" "}
          <a
            href="https://www.citizensadvice.org.uk/housing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brick underline underline-offset-2"
          >
            Citizens Advice
          </a>
          , or a solicitor.
        </p>
      </aside>

      <nav className="mt-12 mb-4 pt-6 border-t border-rule flex justify-between items-center text-sm">
        <Link
          href="/guides"
          className="text-ink hover:text-brick underline underline-offset-2"
        >
          ← All guides
        </Link>
        <span className="meta text-mute">End of No. {number}</span>
      </nav>
    </article>
  );
}
