import Link from "next/link";

/*
 * Masthead — not "header". Publication vocabulary.
 * Reference: newspaper front-page nameplate.
 */
export function Masthead() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="relative z-20 bg-paper border-b-[3px] border-ink">
      {/* Top strip — date, issue, locale */}
      <div className="border-b border-rule-light">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-8 flex items-center justify-between text-[0.68rem] meta text-mute">
          <span>{today}</span>
          <span className="hidden sm:inline">A pamphlet for renters in England · Vol. I</span>
          <span>No. 001</span>
        </div>
      </div>

      {/* Nameplate */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="block group">
          <h1 className="display-bold text-3xl sm:text-4xl text-ink leading-none">
            Renters Hub
          </h1>
          <p className="meta text-[0.65rem] text-brick mt-1.5">
            Independent · Free · No tracking
          </p>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7 text-sm">
          <Link
            href="/rent-increase-check"
            className="text-ink hover:text-brick transition-colors border-b border-transparent hover:border-brick pb-0.5"
          >
            Tools
          </Link>
          <Link
            href="/guides"
            className="text-ink hover:text-brick transition-colors border-b border-transparent hover:border-brick pb-0.5"
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="text-ink hover:text-brick transition-colors border-b border-transparent hover:border-brick pb-0.5 hidden sm:inline"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
