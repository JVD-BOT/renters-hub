import type { Metadata } from "next";
import Link from "next/link";
import { RentIncreaseTool } from "@/components/rent-increase-tool";

export const metadata: Metadata = {
  title: "Rent increase check",
  description:
    "Free tool for tenants in England. Check whether a Section 13 rent increase notice on Form 4A follows the rules under the Renters' Rights Act 2025. Runs in your browser — figures are never sent to a server.",
};

export default function ToolPage() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-12">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <Link href="/rent-increase-check" className="hover:text-brick">Tools</Link> /{" "}
        <span className="text-ink">Rent check</span>
      </nav>

      <header className="mb-10 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-4">Instrument · No. 001</p>
        <h1 className="display-bold text-4xl sm:text-6xl leading-[1.02] tracking-tight">
          Check your rent{" "}
          <span className="display-italic font-normal">increase notice.</span>
        </h1>
        <p className="lede text-ink-soft mt-6 leading-snug">
          Has your landlord asked for more rent? Enter the details from your
          Section&nbsp;13 notice and we&apos;ll tell you whether it follows
          the rules under the Renters&apos; Rights Act 2025.
        </p>

        <div className="meta text-mute mt-7 flex flex-wrap gap-x-5 gap-y-1">
          <span>About 1 minute</span>
          <span>· Runs locally</span>
          <span>· No tracking</span>
        </div>
      </header>

      <RentIncreaseTool />

      <section className="mt-16 pt-8 border-t-2 border-ink prose">
        <p className="meta text-brick mb-4 not-prose">Methodology</p>
        <h2 data-num="1" className="!mt-0">How the check works</h2>
        <p>
          A landlord increasing rent on an assured tenancy in England must
          do three things at once: serve the notice on the official Form 4A,
          give you at least two months between serving the notice and the
          new rent taking effect, and wait at least 12 months from the last
          increase (or your tenancy start). The tool runs all three checks
          on the dates you enter and tells you which look right and which
          look like a problem.
        </p>
        <p>
          A fourth check is informational only: if the percentage increase
          is significant, we&apos;ll flag it so you can decide whether to
          compare against local market rents before accepting. The legal
          test for challenge is open-market rent, not a fixed percentage.
        </p>
        <p>
          For the full plain-English explanation of how Section 13 works,
          read{" "}
          <Link href="/guides/section-13-notice">
            Section 13 notices, decoded
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
