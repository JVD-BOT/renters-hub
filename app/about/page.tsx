import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Renters Hub",
  description:
    "Why Renters Hub exists and who's behind it.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="text-sm text-mute mb-4">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden>›</span> About
      </nav>

      <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
        About Renters Hub
      </h1>

      <div className="prose mt-8">
        <p>
          [Placeholder — Jon to write the real about content. Suggested
          structure: who you are (designer, recently moved back to London),
          why you built this (couldn&apos;t find a tool that just told you yes
          or no when the Act came in), and what Renters Hub is and isn&apos;t.]
        </p>
        <p>
          [Optional second paragraph — the principles: free, ad-supported,
          independent, not a law firm, not selling anything, always points to
          Shelter and Citizens Advice for help that needs a human.]
        </p>
      </div>
    </article>
  );
}
