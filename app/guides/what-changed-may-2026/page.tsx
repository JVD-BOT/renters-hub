import type { Metadata } from "next";
import { GuideLayout } from "@/components/guide-layout";

export const metadata: Metadata = {
  title: "What changed on 1 May 2026 — the Renters' Rights Act explained",
  description:
    "Plain-English overview of the Renters' Rights Act 2025: what came into force on 1 May 2026, what it means for tenants in England, and what's still being phased in.",
};

export default function Page() {
  return (
    <GuideLayout
      number="01"
      category="Essay"
      title="What changed on 1 May 2026"
      intro="The Renters' Rights Act 2025 is the biggest reform of private renting in nearly 40 years. The bulk of it came into force on 1 May 2026. Here's what changed, what it means in practice, and what's still being phased in."
      readTime="8 min"
    >
      <p className="drop-cap">
        The Renters&apos; Rights Act 2025 received Royal Assent on 27 October
        2025. The government confirmed in November that the bulk of it would
        commence on Friday 1 May 2026, with further provisions phased in over
        the following years. If you rent privately in England, almost
        everything below now applies to your tenancy — whether your contract
        was signed before or after 1 May 2026, and even if no one&apos;s told
        you about it.
      </p>

      <p>
        I&apos;ve tried to focus on the changes that actually matter day to
        day, not every legal subtlety. For the full picture, the Act itself
        is on{" "}
        <a
          href="https://www.legislation.gov.uk/ukpga/2025/26/contents"
          target="_blank"
          rel="noopener noreferrer"
        >
          legislation.gov.uk
        </a>{" "}
        and the government&apos;s{" "}
        <a
          href="https://assets.publishing.service.gov.uk/media/69bc04b8f7b1c24d8e23ce60/The_Renters__Rights_Act_Information_Sheet_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Information Sheet 2026
        </a>{" "}
        is the plain-English summary your landlord is required to give you by
        31 May 2026.
      </p>

      <h2 id="section-21" data-num="1">Section 21 is gone</h2>
      <p>
        The single biggest change is the abolition of Section&nbsp;21 — the
        notice landlords used to evict tenants without giving any reason.
        From 1 May 2026, no landlord in England can serve a new Section 21
        notice. To end your tenancy, they have to use a Section&nbsp;8 notice
        and prove a specific legal ground from the updated Schedule&nbsp;2 of
        the Housing Act 1988.
      </p>
      <p>
        There are 30 grounds in total, split into mandatory grounds (where the
        court <em>must</em> grant possession if the ground is proved) and
        discretionary grounds (where the court decides whether it&apos;s
        reasonable). Some grounds have got more demanding under the Act —
        notably Ground&nbsp;8 (rent arrears), which now requires three months
        of arrears instead of two, with a four-week notice period instead of
        two weeks.
      </p>
      <div className="note">
        <span className="note-label">Transition rule</span>
        If your landlord served a valid Section&nbsp;21 notice before 1 May
        2026, it remains valid — but they have to bring possession
        proceedings before the earlier of (a) six months from the date of the
        notice, or (b) 31 July 2026. After that, the notice expires.
      </div>

      <h2 id="periodic" data-num="2">Every tenancy is now periodic</h2>
      <p>
        Fixed-term assured shorthold tenancies have been abolished. On 1 May
        2026, every existing assured tenancy and assured shorthold tenancy
        automatically converted into an <strong>assured periodic tenancy</strong>{" "}
        — a rolling tenancy with no fixed end date.
      </p>
      <p>
        You don&apos;t need a new contract for this to happen. The conversion
        was automatic in law. If you&apos;re still inside what was supposed
        to be a fixed term, your fixed term ended on 1 May 2026 and
        you&apos;re now on a periodic tenancy under the same other terms.
      </p>
      <p>
        Practical effect: you can give two months&apos; written notice to
        leave at any point. No early-termination fees, no break clauses, no
        being trapped until the &quot;next renewal&quot;. The flexibility now
        sits with you, not the landlord.
      </p>

      <h2 id="rent-increases" data-num="3">Rent increases must go through Section 13</h2>
      <p>
        From 1 May 2026, the only legal way for a landlord to increase rent
        on an assured tenancy is by serving a Section&nbsp;13 notice on the
        new prescribed <strong>Form&nbsp;4A</strong>. Any rent review clause
        written into your tenancy agreement is no longer enforceable. A
        landlord cannot raise the rent by sending a letter, an email, a text,
        or pointing at a clause in the contract.
      </p>
      <p>
        Three rules every increase must follow: at least 12 months between
        increases, at least two months&apos; notice between the form being
        served and the new rent date, and the notice must be on the official
        Form&nbsp;4A.
      </p>
      <blockquote>
        The tribunal can no longer set the rent higher than your landlord
        proposed. Under the old rules, it could. The deterrent is gone.
      </blockquote>
      <p>
        If you think the proposed rent exceeds market rate, you can challenge
        it for free at the First-tier Tribunal (Property Chamber) before the
        new rent date. The tribunal can also defer the increase by up to two
        more months if paying immediately would cause undue hardship.
      </p>
      <p>
        We have a full guide on{" "}
        <a href="/guides/rent-increases">how rent increases work now</a> and a
        free <a href="/rent-increase-check">tool to check a notice you&apos;ve received</a>.
      </p>

      <h2 id="pets" data-num="4">You can request a pet</h2>
      <p>
        Tenants now have a statutory right to request permission to keep a
        pet in the property. The landlord must consider the request
        reasonably and can only refuse on reasonable grounds. Blanket
        &quot;no pets&quot; clauses in tenancy agreements are no longer
        enforceable.
      </p>
      <p>
        Landlords are allowed to require pet insurance as a condition of
        permission. If a landlord refuses unreasonably, the tenant can
        challenge the decision.
      </p>

      <h2 id="bidding" data-num="5">No more rental bidding wars</h2>
      <p>
        Landlords and letting agents must advertise a specific rent and
        cannot accept or invite offers above the advertised amount. The Act
        also caps rent in advance: <strong>no more than one month&apos;s rent</strong>{" "}
        can be required upfront when a new tenancy is granted.
      </p>
      <p>
        This was a direct response to the bidding-war culture that took hold
        in high-demand cities like London and Bristol over the last few years.
      </p>

      <h2 id="discrimination" data-num="6">Discrimination is now banned</h2>
      <p>
        It is now unlawful for landlords or letting agents in England to
        refuse a tenancy because:
      </p>
      <ul>
        <li>The prospective tenant receives benefits (the &quot;No DSS&quot; or &quot;No housing benefit&quot; refusal)</li>
        <li>The prospective tenant has children</li>
      </ul>
      <p>
        The Act also requires private rented homes to meet the Decent Homes
        Standard for the first time. Awaab&apos;s Law — named after Awaab
        Ishak, the toddler who died in 2020 from prolonged exposure to mould
        — applies to private rentals too, setting statutory time limits for
        landlords to respond to and remedy serious health hazards.
      </p>

      <h2 id="info-sheet" data-num="7">The Information Sheet deadline</h2>
      <p>
        Landlords with existing tenants had to provide the official{" "}
        <strong>Renters&apos; Rights Act Information Sheet 2026</strong> to
        every named tenant by 31 May 2026. Tenants on verbal-only tenancies
        had to be given a written statement of the main tenancy terms by the
        same date.
      </p>
      <p>
        Failure to provide either is a civil offence, with a fine of up to
        £7,000 for a first offence and up to £40,000 for a repeat. If you
        didn&apos;t receive one by 31 May 2026, that&apos;s a potential
        compliance issue worth raising — though it won&apos;t affect your
        underlying rights.
      </p>

      <h2 id="protected-period" data-num="8">The 12-month Initial Protected Period</h2>
      <p>
        For the first 12 months from 1 May 2026, your landlord cannot use the
        new <strong>Ground 1</strong> (intending to occupy the property
        themselves or moving in a close family member) or{" "}
        <strong>Ground 1A</strong> (intending to sell the property) to evict
        you. These two grounds are otherwise mandatory — meaning the court
        must grant possession if proved — and Ground&nbsp;1A is brand new in
        the Act.
      </p>
      <p>
        The protected period is a recognition that the system needs time to
        bed in. It also means landlords cannot use the new grounds as a
        de-facto Section 21 replacement during the transition.
      </p>

      <h2 id="phasing" data-num="9">What&apos;s still coming</h2>
      <p>
        Phase&nbsp;1 — the tenancy reforms above — went live on 1 May 2026.
        Several other provisions are being phased in over the next few years.
        The headline ones:
      </p>
      <ul>
        <li>
          <strong>Late 2026</strong> — Private Rented Sector Database goes
          live regionally, with full national rollout in 2027. Landlords will
          have to register themselves and their properties.
        </li>
        <li>
          <strong>2028</strong> — Landlord Ombudsman scheme begins, giving
          tenants a free route to escalate disputes without going to court.
        </li>
        <li>
          <strong>1 October 2030</strong> — Minimum Energy Performance
          Certificate (EPC) rating of C for all new tenancies, and from 2033
          for existing ones.
        </li>
        <li>
          <strong>2035</strong> — Final phase. The government&apos;s
          implementation roadmap currently lists at least 12 separate sets of
          secondary legislation still to be published.
        </li>
      </ul>
      <p>
        We&apos;ll update this piece as each phase comes into force.
      </p>

      <h2 id="next" data-num="10">Where to next</h2>
      <p>
        If you&apos;re dealing with something specific, jump straight to it:
      </p>
      <ul>
        <li>
          <a href="/rent-increase-check">Check whether a rent increase notice is valid</a>
        </li>
        <li>
          <a href="/guides/rent-increases">How rent increases work now</a>
        </li>
        <li>
          <a href="/guides/section-13-notice">Section 13 notices, decoded</a>
        </li>
      </ul>
      <p>
        If you can&apos;t find what you&apos;re looking for and you need
        actual advice on your situation, contact{" "}
        <a
          href="https://england.shelter.org.uk/get_help"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shelter
        </a>{" "}
        or{" "}
        <a
          href="https://www.citizensadvice.org.uk/housing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Citizens Advice
        </a>
        .
      </p>
    </GuideLayout>
  );
}
