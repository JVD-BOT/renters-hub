import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "Section 13 notices, decoded",
  description:
    "Plain-English breakdown of Form 4A — the only valid form for a rent increase on an assured tenancy in England under the Renters' Rights Act 2025.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Section 13 notices, decoded"
      intro="A Section 13 notice — served on Form 4A — is now the only valid way for a landlord to increase rent on an assured tenancy in England. Here's how to read one."
    >
      <h2>What a valid Section 13 notice looks like</h2>
      <p>
        [Placeholder — the official Form 4A has prescribed fields. Walk through
        each: landlord name and address, tenant name and address, property
        address, current rent, proposed new rent, date new rent takes effect,
        signature, date served.]
      </p>

      <h2>The dates that matter</h2>
      <p>
        [Placeholder — three dates to check: (1) the date the notice was served
        on you, (2) the date your last rent increase took effect, (3) the date
        the new rent is proposed to start. The gap between (1) and (3) must be
        at least two months. The gap between (2) and (3) must be at least 12
        months.]
      </p>

      <h2>Where notices go wrong</h2>
      <p>
        [Placeholder — common defects: wrong form, wrong dates, missing
        signature, served on the wrong tenant, served too soon after the last
        increase, less than two months&apos; notice.]
      </p>

      <h2>If you do nothing</h2>
      <p>
        [Placeholder — explain that if the notice is procedurally valid and you
        take no action before the proposed start date, the new rent becomes
        payable on that date. Doing nothing is acceptance.]
      </p>

      <h2>How to refer to the tribunal</h2>
      <p>
        [Placeholder — the First-tier Tribunal (Property Chamber) hears Section
        13 challenges. The application form is online at gov.uk. There is no
        fee for tenants. The hearing is usually by paper or video. Decisions
        normally come within a few weeks.]
      </p>

      <h2>What the tribunal can decide</h2>
      <p>
        [Placeholder — the tribunal can confirm the landlord&apos;s proposed
        rent, set a lower figure, or — and this surprises some tenants — set a
        higher figure if open-market rent has risen above the proposed amount.
        Always research market rent before applying.]
      </p>
    </GuideLayout>
  );
}
