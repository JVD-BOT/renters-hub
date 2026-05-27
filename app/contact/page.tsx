import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Renters Hub — questions, corrections, suggestions, or feedback.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
      <nav className="text-sm text-mute mb-5">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span> Contact
      </nav>

      <header className="mb-8">
        <p className="kicker mb-3">Contact</p>
        <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
          Get in touch
        </h1>
        <p className="lede text-lg text-mute mt-5 leading-relaxed">
          Questions, corrections, suggestions, or feedback — all welcome.
          One person reads everything; please be patient if it takes a few
          days.
        </p>
      </header>

      <div className="space-y-4">
        <a
          href="mailto:hello@renters-hub.vercel.app"
          className="card block group"
        >
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-signal shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-semibold text-lg mb-1 group-hover:text-signal transition-colors">
                Email us
              </p>
              <p className="text-sm text-mute">hello@renters-hub.vercel.app</p>
              <p className="text-sm text-mute mt-2">
                Best for: corrections, content suggestions, partnership
                enquiries, anything that needs a written reply.
              </p>
            </div>
          </div>
        </a>

        <div className="card">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-6 h-6 text-signal shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-semibold text-lg mb-1">Found an error?</p>
              <p className="text-sm text-mute">
                If a guide says something that contradicts current GOV.UK
                guidance or the Act itself, please tell us. Include the URL of
                the page, the specific sentence, and a link to the source you
                think is correct. We&apos;ll review and update within a few
                days.
              </p>
            </div>
          </div>
        </div>

        <div className="card border-amber/40 bg-amber-soft">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-semibold text-lg mb-1">In a housing crisis?</p>
              <p className="text-sm text-ink leading-relaxed">
                We can&apos;t give you legal advice or help with your specific
                situation. If you&apos;re facing eviction, harassment, illegal
                rent demands, or an emergency repair issue, you need someone
                who can actually pick up the phone. Try the{" "}
                <a
                  href="tel:08088004444"
                  className="text-signal underline underline-offset-2"
                >
                  Shelter helpline on 0808 800 4444
                </a>
                {" "}or{" "}
                <a
                  href="https://www.citizensadvice.org.uk/about-us/contact-us/contact-us/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal underline underline-offset-2"
                >
                  Citizens Advice
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
