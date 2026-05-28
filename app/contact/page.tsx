import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Renters Hub — questions, corrections, suggestions, or feedback.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-12">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <span className="text-ink">Contact</span>
      </nav>

      <header className="mb-10 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-4">Correspondence</p>
        <h1 className="display-bold text-4xl sm:text-6xl leading-[1.02] tracking-tight">
          Get in touch.
        </h1>
        <p className="lede text-ink-soft mt-6 leading-snug">
          Questions, corrections, suggestions, or feedback — all welcome.
          One person reads everything; please be patient if it takes a few
          days.
        </p>
      </header>

      <div className="space-y-8">
        <section>
          <p className="meta text-brick mb-3">Email</p>
          <a
            href="mailto:hello@rentershub.co.uk"
            className="display text-2xl text-ink underline underline-offset-4 decoration-brick decoration-2 hover:bg-brick-soft"
          >
            hello@rentershub.co.uk
          </a>
          <p className="text-ink-soft mt-3 leading-relaxed">
            Best for: corrections, content suggestions, partnership
            enquiries, anything that needs a written reply.
          </p>
        </section>

        <div className="rule-thin" />

        <section>
          <p className="meta text-brick mb-3">Found an error?</p>
          <p className="text-ink leading-relaxed">
            If a guide says something that contradicts current GOV.UK
            guidance or the Act itself, please tell us. Include the URL of
            the page, the specific sentence, and a link to the source you
            think is correct. We&apos;ll review and update within a few
            days.
          </p>
        </section>

        <div className="rule-thin" />

        <section className="bg-paper-deep border-l-2 border-brick p-5 sm:p-6">
          <p className="meta text-brick mb-3">In a housing crisis?</p>
          <p className="text-ink leading-relaxed">
            We can&apos;t give you legal advice or help with your specific
            situation. If you&apos;re facing eviction, harassment, illegal
            rent demands, or an emergency repair issue, you need someone
            who can actually pick up the phone. Try the{" "}
            <a
              href="tel:08088004444"
              className="text-brick underline underline-offset-2"
            >
              Shelter helpline on 0808 800 4444
            </a>{" "}
            or{" "}
            <a
              href="https://www.citizensadvice.org.uk/about-us/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brick underline underline-offset-2"
            >
              Citizens Advice
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
