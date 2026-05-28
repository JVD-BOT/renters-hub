import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Renters Hub handles your data. Spoiler: we don't collect any.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-12">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <span className="text-ink">Privacy</span>
      </nav>

      <header className="mb-10 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-4">Notice · Last updated 27 May 2026</p>
        <h1 className="display-bold text-4xl sm:text-6xl leading-[1.02] tracking-tight">
          What we collect.
        </h1>
        <p className="display-italic text-4xl sm:text-5xl text-brick mt-2">Nothing.</p>
      </header>

      <div className="prose">
        <h2 data-num="1">What we collect</h2>
        <p>
          Nothing. Renters Hub doesn&apos;t require you to sign up, hand
          over personal details, or create an account. The tools on this
          site run entirely in your browser — the figures you enter (rent
          amounts, dates, postcode) are never sent to our servers and are
          not stored anywhere.
        </p>

        <h2 data-num="2">Cookies</h2>
        <p>
          We use a single essential cookie (technically, a localStorage
          entry called <code>rh-cookie-accepted</code>) to remember that
          you&apos;ve dismissed the cookie banner. That&apos;s the entirety
          of our cookie policy.
        </p>
        <p>We don&apos;t use:</p>
        <ul>
          <li>Google Analytics or any other analytics service</li>
          <li>Advertising or marketing cookies</li>
          <li>Third-party tracking scripts</li>
          <li>Pixel tags or web beacons</li>
          <li>Session recording or heatmap tools</li>
          <li>Social media trackers</li>
        </ul>

        <h2 data-num="3">Server logs</h2>
        <p>
          Our hosting provider (Vercel) keeps standard server logs of HTTP
          requests for security and reliability purposes. These contain IP
          addresses and request paths and are retained in line with{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel&apos;s privacy policy
          </a>
          . We do not use these logs for analytics, profiling, or
          advertising.
        </p>

        <h2 data-num="4">If we ever add advertising</h2>
        <p>
          To be transparent: we may at some point in the future add a small
          number of unobtrusive ads via Google AdSense to help cover hosting
          and domain costs. If that happens, this page will be updated to
          explain exactly what AdSense collects, you&apos;ll see a clear
          notice on the site, and the cookie banner will be updated to give
          you a meaningful choice about ad cookies.
        </p>
        <p>
          We will never sell tenant data. We will never pass information
          you enter into the tools to advertisers or anyone else.
        </p>

        <h2 data-num="5">Your rights under UK GDPR</h2>
        <p>
          Because we don&apos;t collect personal data, there&apos;s nothing
          for you to access, correct, or delete from our records. The
          Vercel server logs above contain IP addresses and are processed
          under Vercel&apos;s privacy policy; for requests relating to
          those contact{" "}
          <a href="https://vercel.com/help" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>{" "}
          directly.
        </p>
        <p>
          For anything else, contact us via the{" "}
          <Link href="/contact">contact page</Link>.
        </p>

        <h2 data-num="6">Changes to this policy</h2>
        <p>
          If we change how this site handles data, we&apos;ll update this
          page and the &quot;Last updated&quot; date at the top. We
          won&apos;t retroactively reduce your privacy without flagging it
          prominently on the front page first.
        </p>
      </div>
    </article>
  );
}
