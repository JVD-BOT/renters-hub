import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "How rent increases work after 1 May 2026",
  description:
    "Plain-English guide to how landlords must increase rent on assured tenancies in England under the Renters' Rights Act 2025. The 12-month rule, two months' notice, Form 4A, and how to challenge at the First-tier Tribunal.",
};

export default function Page() {
  return (
    <GuideLayout
      title="How rent increases work now"
      intro="From 1 May 2026, every rent increase on an assured tenancy in England has to follow the Section 13 procedure. That sounds dry, but it's a huge shift in how renting works — and the new rules genuinely favour tenants who know them."
      readTime="7 min read"
    >
      <p>
        Before the Renters&apos; Rights Act, most landlords increased rent in
        one of three ways: a clause in the tenancy agreement that allowed
        annual increases (usually CPI or a fixed percentage), an informal
        agreement at renewal, or a Section 13 notice on the old Form 4. All
        three routes were normal.
      </p>
      <p>
        From 1 May 2026 only the third route survives, and even that has
        changed. The form is new (Form&nbsp;4A, not Form 4), the notice period
        doubled, and the tribunal&apos;s powers were rebalanced toward
        tenants. Here&apos;s how it works now.
      </p>

      <h2 id="three-rules">The three rules every increase must follow</h2>
      <p>
        For a Section 13 rent increase to be valid, three things must all be
        true. Miss any one of them and the notice is procedurally defective.
      </p>

      <h3>1. At least 12 months between increases</h3>
      <p>
        Your landlord can only increase rent once every 12 months. The clock
        starts on whichever is most recent: the last time the rent went up,
        or the start of your tenancy if it&apos;s never been increased. So if
        your tenancy began on 1 January 2026 and your landlord has never
        raised the rent, the earliest the new rent can take effect is 1
        January 2027.
      </p>

      <h3>2. At least two months&apos; notice</h3>
      <p>
        The minimum notice period under the new Act is two months between the
        date the Form&nbsp;4A is served on you and the date the new rent
        takes effect. Under the old rules this was one month for most
        monthly tenancies; the Act doubled it. This gives you a genuine
        window to research market rents and decide whether to challenge.
      </p>

      <h3>3. Served on Form 4A</h3>
      <p>
        Form 4A is the prescribed form for a Section 13 rent increase on an
        assured tenancy in England. A landlord who sends you a letter, an
        email, or their own form — even if it contains all the same
        information — has not served a valid Section 13 notice. The form
        itself is on{" "}
        <a
          href="https://www.gov.uk/government/publications/form-4a-notice-of-rent-increase"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        . The old Form 4 became invalid for any notice served on or after 1
        May 2026.
      </p>
      <div className="callout">
        Use our free <a href="/rent-increase-check">rent increase check tool</a>{" "}
        to run any notice you&apos;ve received against these three rules in
        about a minute. It&apos;s stateless — we don&apos;t see the figures
        you enter.
      </div>

      <h2 id="rent-review">Rent review clauses no longer work</h2>
      <p>
        This is one of the biggest practical changes. Most tenancy agreements
        signed before 1 May 2026 include a clause permitting the landlord to
        increase rent on a fixed schedule, often tied to CPI or a set
        percentage. Under the old system these clauses were enforceable
        contracts.
      </p>
      <p>
        Under the Renters&apos; Rights Act 2025, any contractual term in an
        assured-tenancy agreement that purports to allow a rent increase
        other than through the Section 13 procedure has ceased to have
        effect. Even if your contract says &quot;rent shall increase by 5% on
        each anniversary&quot;, that clause is now legally void. Your
        landlord must use Form 4A or wait.
      </p>

      <h2 id="market-rent">What &quot;market rent&quot; actually means</h2>
      <p>
        The legal test for whether a tribunal will reduce a proposed increase
        is whether the proposed rent exceeds the <strong>open-market rent</strong>{" "}
        for the property. Not a percentage. Not affordability. Not
        comparison to inflation. Market rent.
      </p>
      <p>
        That means a 30% increase on a property that&apos;s deeply
        under-market may be unchallengeable. And a 5% increase on a property
        that&apos;s already at the top of the market <em>may</em> be
        challengeable. The percentage is not the question; comparable rents
        in your area are.
      </p>
      <p>
        How to research market rent for your property:
      </p>
      <ul>
        <li>
          <strong>Rightmove and Zoopla</strong> — search for current listings
          with the same number of bedrooms, similar condition, and a similar
          postcode. Ignore the asking-rent figures and look at what&apos;s
          actually getting let.
        </li>
        <li>
          <strong>The ONS Private Rental Market Statistics</strong> — quarterly
          official figures by region, broken down by property size. Useful
          for a sanity check on the trajectory of rents in your area.
        </li>
        <li>
          <strong>Letting agent valuations</strong> — most agents will give a
          free informal market opinion if you ask. They&apos;re trying to win
          your business, so take it as one data point.
        </li>
      </ul>
      <p>
        If three to five comparable properties in your postcode are renting at
        similar levels to your landlord&apos;s proposed figure, a tribunal
        challenge is unlikely to succeed. If they&apos;re consistently lower,
        you have a real argument.
      </p>

      <h2 id="tribunal">How to challenge an increase at the tribunal</h2>
      <p>
        The First-tier Tribunal (Property Chamber) hears Section 13
        challenges. The route is genuinely accessible: there is no fee for
        tenants, the application is online, and most cases are decided on
        paper without you ever having to attend in person.
      </p>
      <p>
        You must apply before the proposed start date on the notice. If the
        proposed start date passes without you challenging, the new rent
        becomes payable and you can no longer challenge that particular
        increase.
      </p>
      <p>
        The Renters&apos; Rights Act 2025 changed three important things
        about how the tribunal works:
      </p>
      <div className="callout callout-good">
        <strong>The tribunal can no longer set rent higher than your
        landlord proposed.</strong> Under the old rules, the tribunal could
        determine an open-market rent that was higher than the landlord&apos;s
        figure, which scared most tenants out of challenging. That deterrent
        is now gone. The worst case is the rent stays where the landlord
        proposed it. The best case is the tribunal reduces it.
      </div>
      <p>
        <strong>Backdating has been abolished.</strong> Under the old rules,
        if you challenged and the tribunal ruled in the landlord&apos;s
        favour, the new rent was backdated to the original notice date —
        meaning you owed arrears. From 1 May 2026, the new rent (whatever the
        tribunal sets it at) only takes effect from the date of the
        tribunal&apos;s decision.
      </p>
      <p>
        <strong>Hardship deferral.</strong> The tribunal can defer the new
        rent by up to a further two months if paying it immediately would
        cause undue hardship. This is a safety valve for tenants who would
        struggle to absorb even a tribunal-approved increase straight away.
      </p>

      <h2 id="rules-broken">What if the rules aren&apos;t followed</h2>
      <p>
        A procedurally defective notice is invalid. If your landlord served
        the wrong form, gave less than two months&apos; notice, or tried to
        increase within 12 months of the last increase, the notice has no
        legal effect. Your rent stays at the current level.
      </p>
      <p>
        Your landlord can serve a new, valid notice — but they have to start
        the two-month clock again. So a defective notice typically costs the
        landlord two months of the increased rent.
      </p>
      <p>
        You don&apos;t need to <em>do</em> anything to invalidate a defective
        notice. It&apos;s invalid by operation of law. But it&apos;s sensible
        to write to your landlord explaining why the notice doesn&apos;t
        comply, so there&apos;s no confusion about what rent is payable. A
        free template covering this is on our roadmap.
      </p>

      <h2 id="mistakes">Common mistakes landlords are making</h2>
      <p>
        Six months into the new regime, the same defects keep coming up:
      </p>
      <ul>
        <li>
          Using a letter or email instead of Form 4A — the most common error
          we&apos;re seeing
        </li>
        <li>
          Invoking a rent review clause from the original tenancy agreement —
          these no longer have legal effect
        </li>
        <li>
          Giving one month&apos;s notice (the old minimum) instead of two
        </li>
        <li>
          Trying to increase rent within 12 months of the tenancy start or
          last increase
        </li>
        <li>
          Serving the old Form 4 instead of Form 4A — particularly from
          landlords using stationery they bought before May
        </li>
      </ul>
      <p>
        Any of these makes the notice invalid. The rent stays where it is
        until a valid notice is served.
      </p>

      <h2 id="next">Where to next</h2>
      <p>
        If you&apos;ve received a notice and want to check it,{" "}
        <a href="/rent-increase-check">run it through our free tool</a>. For
        more detail on what should be on the form itself, read{" "}
        <a href="/guides/section-13-notice">Section 13 notices, decoded</a>.
        For the wider context on what else changed,{" "}
        <a href="/guides/what-changed-may-2026">
          What changed on 1 May 2026
        </a>
        .
      </p>
    </GuideLayout>
  );
}
