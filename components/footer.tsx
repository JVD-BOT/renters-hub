import Link from "next/link";

const LAST_UPDATED = "27 May 2026";

export function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <div className="text-sm text-mute">
          <p>
            Renters Hub — information for private renters in England under the
            Renters&apos; Rights Act 2025.
          </p>
          <p className="mt-1">
            This is information, not legal advice. For advice on your situation,
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
              href="https://www.citizensadvice.org.uk/housing/renting-privately/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              Citizens Advice
            </a>
            , or a solicitor.
          </p>
        </div>
        <div className="text-sm text-mute flex flex-col sm:items-end gap-1">
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-ink transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-ink transition-colors">
              About
            </Link>
          </div>
          <p className="text-xs">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>
    </footer>
  );
}
