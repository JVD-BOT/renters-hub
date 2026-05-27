import type { Metadata } from "next";
import Link from "next/link";
import { RentIncreaseTool } from "@/components/rent-increase-tool";
import { Lock, Zap, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Section 13 rent increase check",
  description:
    "Free tool for tenants in England. Check whether a Section 13 rent increase notice on Form 4A follows the rules under the Renters' Rights Act 2025. Runs in your browser — figures are never sent to a server.",
  openGraph: {
    title: "Check your Section 13 rent increase notice · Renters Hub",
    description:
      "Free tool for tenants in England. Run a notice against the new Section 13 rules in about a minute.",
  },
};

export default function RentIncreaseCheckPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
      <nav className="text-sm text-mute mb-5">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span>{" "}
        <Link href="/rent-increase-check" className="hover:text-ink transition-colors">
          Tools
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span>{" "}
        <span className="text-ink">Rent increase check</span>
      </nav>

      <header className="mb-10">
        <p className="kicker mb-3">Hero tool</p>
        <h1 className="display text-4xl sm:text-5xl leading-[1.1] tracking-tight">
          Check your rent{" "}
          <span className="display-italic">increase notice</span>
        </h1>
        <p className="lede text-lg sm:text-xl text-mute mt-5 leading-relaxed font-light">
          Has your landlord asked for more rent? Enter the details from your
          Section&nbsp;13 notice and we&apos;ll tell you whether it follows
          the rules under the Renters&apos; Rights Act 2025.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-7">
          <Pill icon={Zap} label="~1 minute" />
          <Pill icon={Lock} label="Runs locally" />
          <Pill icon={Eye} label="No tracking" />
        </div>
      </header>

      <div className="border-t border-hairline pt-10">
        <RentIncreaseTool />
      </div>

      <section className="mt-16 border-t border-hairline pt-10 prose">
        <h2>How the check works</h2>
        <p>
          A landlord increasing rent on an assured tenancy in England must do
          three things at once: serve the notice on the official Form 4A,
          give you at least two months between serving the notice and the new
          rent taking effect, and wait at least 12 months from the last
          increase (or your tenancy start). The tool runs all three checks on
          the dates you enter and tells you which look right and which look
          like a problem.
        </p>
        <p>
          A fourth check is informational only: if the percentage increase is
          significant, we&apos;ll flag it so you can decide whether to
          compare against local market rents before accepting. The legal test
          for challenge is open-market rent, not a fixed percentage.
        </p>
        <p>
          For the full plain-English explanation of how Section 13 works,
          read our guide:{" "}
          <Link href="/guides/section-13-notice">
            Section 13 notices, decoded
          </Link>
          .
        </p>
      </section>
    </article>
  );
}

function Pill({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 bg-paper-soft border border-hairline rounded-md py-2.5 text-xs text-mute">
      <Icon className="w-3.5 h-3.5 text-signal" />
      <span>{label}</span>
    </div>
  );
}
