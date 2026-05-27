import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "Section 13 notices, decoded — Form 4A explained",
  description:
    "Plain-English breakdown of Form 4A, the only valid form for a rent increase on an assured tenancy in England under the Renters' Rights Act 2025. Every required field, the dates that matter, and where notices go wrong.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Section 13 notices, decoded"
      intro="A Section 13 notice, served on the new Form 4A, is now the only legal way for a landlord to increase rent on an assured tenancy in England. If you've received one, here's how to read it field by field."
      readTime="6 min read"
    >
      <p>
        Section&nbsp;13 of the Housing Act 1988, as amended by the
        Renters&apos; Rights Act 2025, sets out the procedure for increasing
        rent on an assured tenancy. The amendments commenced on 1 May 2026.
        From that date, Form&nbsp;4A is the only prescribed form for a
        Section&nbsp;13 notice. The old Form&nbsp;4 is no longer valid for
        any notice served on or after 1 May 2026.
      </p>
      <p>
        I&apos;ve walked through every required field below using the
        official form published on{" "}
        <a
          href="https://www.gov.uk/government/publications/form-4a-notice-of-rent-increase"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK
        </a>
        . If anything on the notice you&apos;ve received looks different from
        what I describe, that&apos;s a flag worth checking.
      </p>

      <h2 id="what-it-looks-like">What a valid Section 13 notice looks like</h2>
      <p>
        A correctly completed Form&nbsp;4A must include all of the following.
        These aren&apos;t my opinion — they&apos;re prescribed by the Assured
        Tenancies and Agricultural Occupancies (Forms) (England) Regulations,
        as amended by the Renters&apos; Rights Act 2025.
      </p>
      <ul>
        <li>
          <strong>The address of the property</strong> the tenancy relates to,
          including the postcode
        </li>
        <li>
          <strong>The name of the landlord</strong> (the person legally
          entitled to receive the rent — not always the agent)
        </li>
        <li>
          <strong>The name of the tenant or tenants</strong> on the tenancy
          agreement
        </li>
        <li>
          <strong>The existing rent</strong>, including the period (e.g. £1,450
          per calendar month)
        </li>
        <li>
          <strong>The proposed new rent</strong>, including the period
        </li>
        <li>
          <strong>The date the new rent is proposed to take effect</strong>
        </li>
        <li>
          <strong>A statement informing the tenant of the right to apply to
          the First-tier Tribunal</strong> to challenge the proposed rent
        </li>
        <li>
          <strong>The landlord&apos;s signature</strong> and the date the notice
          was signed
        </li>
      </ul>
      <p>
        Any letter, email, or text message — however detailed — that
        isn&apos;t on the prescribed Form 4A does not satisfy the
        Section&nbsp;13 requirement. The notice has to be on the form.
      </p>

      <h2 id="three-dates">The three dates that matter</h2>
      <p>
        Section 13 stands or falls on three dates. If you only check one
        thing on the form, check these.
      </p>
      <h3>Date 1: When was the notice served?</h3>
      <p>
        This is the date the notice was given to you, not the date written on
        the form itself. If it was posted, served by first class post is
        deemed served two working days after posting. If it was hand-delivered
        or emailed, it&apos;s served on the day you received it.
      </p>
      <h3>Date 2: When did your last rent increase take effect?</h3>
      <p>
        If you&apos;ve never had a rent increase, this is the date your
        tenancy began. Either way, this is the date the 12-month clock starts
        running from.
      </p>
      <h3>Date 3: When does the new rent take effect?</h3>
      <p>
        Written on the notice. This is the date the increased rent starts being
        payable, assuming the notice is valid and you don&apos;t challenge it.
      </p>
      <div className="callout">
        <strong>The two checks to do:</strong>
        <br />
        Date&nbsp;3 minus Date&nbsp;1 must be at least 60 days (two months).
        <br />
        Date&nbsp;3 minus Date&nbsp;2 must be at least 12 months.
        <br />
        Fail either and the notice is invalid.
      </div>

      <h2 id="defects">Where notices go wrong</h2>
      <p>
        The most common defects I&apos;ve seen since the Act commenced, in
        roughly the order they come up:
      </p>
      <ul>
        <li>
          <strong>Wrong form.</strong> The notice is on Form 4 (the old form),
          a generic letter, or a custom landlord-drafted document. Form 4A is
          the only valid form. Anything else fails on this point alone.
        </li>
        <li>
          <strong>Insufficient notice.</strong> The landlord gives one
          month&apos;s notice (the pre-2026 minimum) instead of two. Notice
          period doubled under the Act and a lot of landlords haven&apos;t
          caught up.
        </li>
        <li>
          <strong>Within 12 months of the last increase.</strong> Landlord
          tries to increase rent twice in a calendar year, or increases rent
          within the first 12 months of the tenancy.
        </li>
        <li>
          <strong>Missing the right-to-challenge statement.</strong> The form
          must include the statement informing you of your right to apply to
          the First-tier Tribunal. A notice missing this is defective.
        </li>
        <li>
          <strong>Served on the wrong tenant.</strong> If your tenancy is in
          joint names, the notice has to be served on all named tenants. A
          notice served on one tenant only is defective for joint tenancies.
        </li>
        <li>
          <strong>Missing the landlord&apos;s signature</strong> or the date
          the notice was signed.
        </li>
      </ul>
      <p>
        Any single one of these can invalidate the notice. The check is
        binary: either the notice is procedurally compliant or it isn&apos;t.
      </p>

      <h2 id="do-nothing">If you do nothing</h2>
      <p>
        If a notice is procedurally valid and you take no action before the
        proposed start date, the new rent becomes payable on that date. Doing
        nothing is acceptance.
      </p>
      <p>
        Your landlord doesn&apos;t need to chase you, ask you to confirm, or
        send a follow-up. The notice is self-executing. The first sign you
        accepted the increase will be your next rent payment.
      </p>
      <p>
        If a notice is <em>not</em> valid and you take no action, the new
        rent doesn&apos;t become payable — but in practice it&apos;s sensible
        to write to your landlord pointing out the defect, so there&apos;s no
        confusion about what you owe and no risk of accidentally
        underpaying.
      </p>

      <h2 id="refer-tribunal">How to refer to the First-tier Tribunal</h2>
      <p>
        If you want to challenge the proposed rent, you can refer the notice
        to the First-tier Tribunal (Property Chamber). The route is
        straightforward:
      </p>
      <ol>
        <li>
          Apply online via the GOV.UK{" "}
          <a
            href="https://www.gov.uk/housing-tribunals/apply-to-tribunal"
            target="_blank"
            rel="noopener noreferrer"
          >
            housing tribunals service
          </a>
          .
        </li>
        <li>
          Submit your application before the proposed start date on the
          notice. Miss this date and you lose the right to challenge.
        </li>
        <li>
          No fee for tenants. The application costs you nothing.
        </li>
        <li>
          Provide evidence of comparable market rents — Rightmove and Zoopla
          screenshots, ideally five comparable properties from your
          postcode.
        </li>
        <li>
          Most cases are decided on paper without a hearing. If a hearing is
          listed, it&apos;s usually by video. You don&apos;t need a solicitor.
        </li>
      </ol>
      <p>
        Decisions normally come within a few weeks of the application being
        accepted. While the case is pending, you keep paying the current rent.
      </p>

      <h2 id="tribunal-powers">What the tribunal can decide</h2>
      <p>
        The tribunal&apos;s powers were significantly rebalanced toward
        tenants under the Renters&apos; Rights Act 2025. Three things it can do:
      </p>
      <ul>
        <li>
          <strong>Confirm the landlord&apos;s proposed rent</strong> if it
          finds the figure is no higher than market rent.
        </li>
        <li>
          <strong>Set a lower figure</strong> if it finds the proposed rent
          exceeds market rent. The new rent takes effect from the date of the
          tribunal&apos;s decision — not the original proposed date.
        </li>
        <li>
          <strong>Defer the increase by up to two more months</strong> if it
          finds paying the new rent immediately would cause you undue
          hardship.
        </li>
      </ul>
      <p>
        What the tribunal can <em>not</em> do, which is the key change from
        the old regime: <strong>it cannot set the rent higher than the
        landlord proposed</strong>. Under the old rules, if the tribunal
        determined market rent was £1,800 and the landlord had only asked for
        £1,650, the rent went to £1,800. From 1 May 2026, the worst-case
        outcome of a tribunal challenge is the rent stays where the landlord
        proposed it.
      </p>
      <p>
        This change exists specifically to encourage tenants to challenge
        notices they think are above market rent without fear of an even
        bigger increase. If you have any reasonable grounds to think the
        proposed rent is too high, the downside of challenging is now
        negligible.
      </p>

      <h2 id="next">Where to next</h2>
      <p>
        For the broader picture on how rent increases work,{" "}
        <a href="/guides/rent-increases">read our main rent increase guide</a>.
        If you want to run a specific notice against all of the above rules,{" "}
        <a href="/rent-increase-check">use our free Section 13 check</a> — it
        takes about a minute, runs entirely in your browser, and we never see
        the figures you enter.
      </p>
    </GuideLayout>
  );
}
