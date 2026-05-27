import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-hairline bg-paper sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Renters Hub home"
        >
          <span
            className="relative inline-block w-2.5 h-2.5 rounded-full bg-signal"
            aria-hidden
          >
            <span className="absolute inset-0 rounded-full bg-signal pulse-soft" aria-hidden />
          </span>
          <span className="display text-xl tracking-tight">Renters Hub</span>
        </Link>
        <nav className="flex items-center gap-7 text-[15px]">
          <Link
            href="/rent-increase-check"
            className="text-ink hover:text-signal transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/guides"
            className="text-ink hover:text-signal transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="text-mute hover:text-signal transition-colors hidden sm:inline"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
