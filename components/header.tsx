import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Renters Hub home"
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full bg-signal group-hover:bg-coral transition-colors"
            aria-hidden
          />
          <span className="display text-xl">Renters Hub</span>
        </Link>
        <nav className="flex items-center gap-7 text-[15px]">
          <Link
            href="/rent-increase-check"
            className="text-ink hover:text-signal transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/guides/what-changed-may-2026"
            className="text-ink hover:text-signal transition-colors"
          >
            Guides
          </Link>
        </nav>
      </div>
    </header>
  );
}
