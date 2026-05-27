import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "What changed on 1 May 2026",
  description:
    "Plain-English overview of the Renters' Rights Act 2025 — what came into force on 1 May 2026 and what it means for tenants in England.",
};

export default function Page() {
  return (
    <GuideLayout
      title="What changed on 1 May 2026"
      intro="The Renters' Rights Act 2025 commenced on 1 May 2026 and is the biggest reform of the private rented sector in nearly 40 years. Here's what changed in plain English."
    >
      <h2>Section 21 is gone</h2>
      <p>
        [Placeholder — write 3–4 sentences explaining the end of no-fault
        eviction, what landlords now have to use instead (Section 8 grounds),
        and what this means in practical terms for tenants.]
      </p>
      <p>
        [Second paragraph — note the transitional rules for any Section 21
        notice served before 1 May, and the deadline by which proceedings must
        be started.]
      </p>

      <h2>All tenancies are now periodic</h2>
      <p>
        [Placeholder — explain that fixed-term assured shorthold tenancies are
        abolished and every assured tenancy is now periodic from day one.
        Mention that existing fixed-term tenancies were automatically converted
        on 1 May 2026.]
      </p>
      <p>
        [Second paragraph — what this means practically: two months&apos; notice
        from tenant to end the tenancy, no early-termination fees, rent
        increases must follow Section 13.]
      </p>

      <h2>Rent increases must follow Section 13</h2>
      <p>
        [Placeholder — once-a-year rule, two months&apos; notice, Form 4A, and
        the tribunal route. Link to the dedicated Section 13 guide.]
      </p>

      <h2>You can request a pet</h2>
      <p>
        [Placeholder — tenants now have the right to request a pet, and
        landlords must consider it reasonably. They can refuse only on
        reasonable grounds. Landlords can require pet insurance.]
      </p>

      <h2>No more rental bidding wars</h2>
      <p>
        [Placeholder — landlords and agents must advertise a specific rent and
        cannot accept offers above it. No more than one month&apos;s rent in
        advance can be required.]
      </p>

      <h2>Discrimination is now banned</h2>
      <p>
        [Placeholder — landlords and agents cannot refuse tenants because they
        receive benefits or have children. Decent Homes Standard now applies to
        private rentals. Awaab&apos;s Law sets response times for hazards.]
      </p>
    </GuideLayout>
  );
}
