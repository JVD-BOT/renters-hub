import Link from "next/link";

const LAST_UPDATED = "27 May 2026";

export function Footer() {
  return (
    <footer className="border-t border-hairline mt-24 bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-signal" aria-hidden />
            <span className="display text-lg">Renters Hub</span>
          </div>
          <p className="text-sm text-mute leading-relaxed max-w-md">
            Independent, free, plain-English tools and guides for private
            renters in England under the Renters&apos; Rights Act 2025. Not a
            law firm. Not legal advice. Made by a renter, for renters.
          </p>
          <p className="text-xs text-mute mt-4">
            Last reviewed: {LAST_UPDATED} · Site applies to England only
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="kicker mb-3">Site</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/rent-increase-check" className="text-ink hover:text-signal">
                Rent increase check
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-ink hover:text-signal">
                All guides
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink hover:text-signal">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink hover:text-signal">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-ink hover:text-signal">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="kicker mb-3">If you need real help</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://england.shelter.org.uk/get_help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal"
              >
                Shelter helpline
              </a>
            </li>
            <li>
              <a
                href="https://www.citizensadvice.org.uk/housing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal"
              >
                Citizens Advice
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.uk/housing-tribunals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal"
              >
                First-tier Tribunal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-mute">
          © {new Date().getFullYear()} Renters Hub. Built independently.
        </div>
      </div>
    </footer>
  );
}
