import Link from "next/link";

interface GuideLayoutProps {
  title: string;
  intro: string;
  lastReviewed?: string;
  children: React.ReactNode;
  sources?: { href: string; label: string }[];
}

export function GuideLayout({
  title,
  intro,
  lastReviewed = "27 May 2026",
  children,
  sources = [
    {
      href: "https://www.gov.uk/government/collections/private-renting-news-and-resources",
      label: "GOV.UK — Private renting news and resources",
    },
    {
      href: "https://www.legislation.gov.uk/ukpga/2025/40/contents",
      label: "Renters' Rights Act 2025 — full text on legislation.gov.uk",
    },
  ],
}: GuideLayoutProps) {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="text-sm text-mute mb-4">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden>›</span>{" "}
        <Link
          href="/guides/what-changed-may-2026"
          className="hover:text-ink transition-colors"
        >
          Guides
        </Link>{" "}
        <span aria-hidden>›</span> {title}
      </nav>

      <header className="mb-8">
        <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-mute mt-4 leading-relaxed">{intro}</p>
        <p className="text-xs text-mute mt-5 uppercase tracking-wider">
          Last reviewed: {lastReviewed}
        </p>
      </header>

      <div className="prose border-t border-hairline pt-8">{children}</div>

      <section className="mt-12 border-t border-hairline pt-8">
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
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      <aside className="mt-10 bg-paper-soft border border-hairline rounded-lg p-5 text-sm text-mute leading-relaxed">
        <p>
          <strong className="text-ink">This is information, not legal advice.</strong>{" "}
          For your specific situation, contact{" "}
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
    </article>
  );
}
