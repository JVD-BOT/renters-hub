import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Renters Hub handles your data.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="text-sm text-mute mb-4">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden>›</span> Privacy
      </nav>

      <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
        Privacy
      </h1>
      <p className="text-xs text-mute mt-4 uppercase tracking-wider">
        Last updated: 27 May 2026
      </p>

      <div className="prose mt-8">
        <h2>What we collect</h2>
        <p>
          Nothing. Renters Hub doesn&apos;t require you to sign up or hand
          over personal details. The tools on this site run entirely in your
          browser — the figures you enter (rent amounts, dates, postcode) are
          never sent to our servers and are not stored anywhere.
        </p>

        <h2>Cookies</h2>
        <p>
          We use a single essential cookie (technically, a localStorage entry
          called <code>rh-cookie-accepted</code>) to remember that you&apos;ve
          dismissed the cookie banner. That&apos;s it. No analytics cookies,
          no advertising cookies, no third-party cookies, no tracking pixels.
        </p>

        <h2>Server logs</h2>
        <p>
          Our hosting provider (Vercel) keeps standard server logs of HTTP
          requests for security and reliability purposes. These contain IP
          addresses and request paths and are retained for a short period in
          line with Vercel&apos;s policy. We do not use these logs for
          analytics or advertising.
        </p>

        <h2>Your rights under UK GDPR</h2>
        <p>
          Because we don&apos;t collect personal data, there&apos;s nothing
          for you to access, correct, or delete. If you have a question about
          this, contact us via the{" "}
          <Link href="/contact">contact page</Link>.
        </p>

        <h2>Changes</h2>
        <p>
          If we change how this site handles data, we&apos;ll update this
          page and update the &quot;Last updated&quot; date above.
        </p>
      </div>
    </article>
  );
}
