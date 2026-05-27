import type { Metadata } from "next";
import Link from "next/link";
import { RentIncreaseTool } from "@/components/rent-increase-tool";

export const metadata: Metadata = {
  title: "Check your Section 13 rent increase notice",
  description:
    "Free tool for tenants in England. Check whether your landlord's Section 13 rent increase notice follows the rules under the Renters' Rights Act 2025.",
  openGraph: {
    title: "Check your Section 13 rent increase notice · Renters Hub",
    description:
      "Free tool for tenants in England. Check whether your Section 13 rent increase notice follows the rules.",
  },
};

export default function RentIncreaseCheckPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16">
      <nav className="text-sm text-mute mb-4">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden>›</span> Rent increase check
      </nav>

      <header className="mb-10">
        <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
          Check your rent <span className="display-italic">increase</span> notice
        </h1>
        <p className="text-lg text-mute mt-4 leading-relaxed">
          Has your landlord asked for more rent? Enter the details from your
          Section&nbsp;13 notice and we&apos;ll tell you whether it follows the
          rules under the Renters&apos; Rights Act 2025.
        </p>
      </header>

      <div className="border-t border-hairline pt-10">
        <RentIncreaseTool />
      </div>

      <section className="mt-16 border-t border-hairline pt-10 prose">
        <h2>How the check works</h2>
        <p>
          A landlord increasing rent on an assured tenancy in England must do
          three things at once: serve the notice on the official Form&nbsp;4A,
          give you at least two months between serving the notice and the new
          rent taking effect, and wait at least 12 months from the last
          increase. The tool runs all three checks on the dates you enter and
          tells you which rules look right and which look like a problem.
        </p>
        <p>
          A fourth check is informational only: if the percentage increase is
          large, we&apos;ll flag it so you can decide whether to compare against
          local market rents before accepting. The legal test for challenge is
          open-market rent, not a fixed percentage.
        </p>
        <p>
          For the full plain-English explanation, see our guide:{" "}
          <Link href="/guides/section-13-notice">
            How Section 13 notices work
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
