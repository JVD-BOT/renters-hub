import Link from "next/link";

/*
 * Colophon — not "footer". Publication vocabulary.
 * Reference: book publishing colophons + indie magazine credits page.
 */
export function Colophon() {
  return (
    <footer className="relative z-10 mt-32 border-t-[3px] border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="grid sm:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 sm:gap-6">
          <div>
            <p className="meta text-mute mb-3">Imprint</p>
            <p className="display text-xl text-ink mb-1 font-semibold">Renters Hub</p>
            <p className="text-sm text-mute leading-relaxed max-w-xs">
              A pamphlet for private renters in England under the
              Renters&apos; Rights Act 2025. Made by one person, for free,
              with no funding and no tracking.
            </p>
          </div>

          <nav aria-label="Pages">
            <p className="meta text-mute mb-3">Pages</p>
            <ul className="space-y-1.5 text-[0.95rem]">
              <li>
                <Link href="/" className="text-ink hover:text-brick hover:underline underline-offset-2">
                  Front
                </Link>
              </li>
              <li>
                <Link
                  href="/rent-increase-check"
                  className="text-ink hover:text-brick hover:underline underline-offset-2"
                >
                  Rent check
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-ink hover:text-brick hover:underline underline-offset-2">
                  All guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink hover:text-brick hover:underline underline-offset-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink hover:text-brick hover:underline underline-offset-2">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink hover:text-brick hover:underline underline-offset-2">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Helplines">
            <p className="meta text-mute mb-3">For real help</p>
            <ul className="space-y-1.5 text-[0.95rem]">
              <li>
                <a
                  href="https://england.shelter.org.uk/get_help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-brick hover:underline underline-offset-2"
                >
                  Shelter
                </a>
              </li>
              <li>
                <a
                  href="https://www.citizensadvice.org.uk/housing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-brick hover:underline underline-offset-2"
                >
                  Citizens Advice
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.uk/housing-tribunals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-brick hover:underline underline-offset-2"
                >
                  Property Tribunal
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="meta text-mute mb-3">Colophon</p>
            <p className="text-sm text-mute leading-relaxed">
              Set in <em className="text-ink">Newsreader</em> and{" "}
              <em className="text-ink">Inter</em>, with metadata in{" "}
              <em className="text-ink">JetBrains Mono</em>.
            </p>
            <p className="text-sm text-mute leading-relaxed mt-2">
              Built with Next.js. Hosted on Vercel.
            </p>
          </div>
        </div>

        <div className="rule-thin mt-10" />

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs meta-lowercase text-mute">
          <span>© {new Date().getFullYear()} Renters Hub.</span>
          <span>Information, not legal advice. England only.</span>
        </div>
      </div>
    </footer>
  );
}
