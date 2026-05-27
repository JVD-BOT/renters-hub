import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Renters Hub.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="text-sm text-mute mb-4">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden>›</span> Contact
      </nav>

      <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
        Contact
      </h1>

      <div className="prose mt-8">
        <p>
          Got a question, spotted a mistake, or want to suggest a tool we
          should build next? Drop us a line.
        </p>
        <p>
          <a
            href="mailto:hello@rentershub.uk"
            className="inline-flex items-center gap-2 text-signal text-lg"
          >
            <Mail className="w-5 h-5" />
            hello@rentershub.uk
          </a>
        </p>
        <p className="text-sm text-mute">
          We&apos;re a tiny team — please give us a couple of days. For urgent
          housing problems, contact{" "}
          <a
            href="https://england.shelter.org.uk/get_help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Shelter
          </a>{" "}
          (0808 800 4444) or{" "}
          <a
            href="https://www.citizensadvice.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Citizens Advice
          </a>
          .
        </p>
      </div>
    </article>
  );
}
