import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "How rent increases work after 1 May 2026",
  description:
    "Plain-English guide to how landlords must increase rent under the Renters' Rights Act 2025. Includes the 12-month rule, two months' notice, Form 4A, and tribunal challenges.",
};

export default function Page() {
  return (
    <GuideLayout
      title="How rent increases work now"
      intro="As of 1 May 2026, every rent increase on an assured tenancy in England must follow the Section 13 process. This guide walks through what that means."
    >
      <h2>The three rules every increase must follow</h2>
      <p>
        [Placeholder — explain the three core requirements: (1) once per
        12-month period maximum, (2) at least two months&apos; notice between
        the date the notice is served and the date the new rent takes effect,
        (3) the notice must be on the official Form&nbsp;4A.]
      </p>

      <h2>Rent review clauses no longer work</h2>
      <p>
        [Placeholder — explain that any rent review clause in a tenancy
        agreement is unenforceable for assured tenancies. The only valid route
        is Section 13 / Form 4A.]
      </p>

      <h2>What &quot;market rent&quot; actually means</h2>
      <p>
        [Placeholder — the legal test for whether an increase is challengeable
        at tribunal is whether the proposed rent exceeds open-market rent for
        the property. Not a fixed percentage. Explain how to research market
        rent: Rightmove, Zoopla, ONS Private Rental Market Statistics.]
      </p>

      <h2>How to challenge an increase</h2>
      <p>
        [Placeholder — refer the notice to the First-tier Tribunal (Property
        Chamber) before the proposed start date. No fee for tenants. The
        tribunal will determine the market rent. Important note: the tribunal
        can set the rent at the same level as the landlord proposed, or higher,
        if market rent has risen.]
      </p>

      <h2>What happens if the rules aren&apos;t followed</h2>
      <p>
        [Placeholder — explain that a procedurally defective notice is invalid
        and the rent stays at the current level. The landlord can serve a new
        notice that follows the rules.]
      </p>

      <h2>Common mistakes landlords make</h2>
      <p>
        [Placeholder — using a letter instead of Form 4A, giving less than two
        months&apos; notice, increasing within 12 months of the last increase,
        invoking a rent review clause from the tenancy agreement.]
      </p>
    </GuideLayout>
  );
}
