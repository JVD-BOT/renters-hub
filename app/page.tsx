import Link from "next/link";

export default function FrontPage() {
  return (
    <>
      <Cover />
      <ContentsRule />
      <Contents />
      <Tool />
      <Editorial />
      <Why />
    </>
  );
}

/* The front page — set like a publication cover, not a SaaS hero */
function Cover() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
        <div>
          <p className="meta text-brick mb-5">Vol. I · Issue 001 · May 2026</p>

          <h2 className="display-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.94] tracking-tight max-w-4xl">
            Renting in England has just been{" "}
            <span className="display-italic font-normal text-brick">rewritten</span>
            .
          </h2>

          <p className="lede mt-8 max-w-2xl text-ink-soft">
            On 1 May 2026 the Renters&apos; Rights Act came into force. Eleven
            million private renters now have rights they didn&apos;t have a
            month ago. This is a pamphlet about what those rights are, what
            they mean, and how to use them.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-start">
            <Link href="/rent-increase-check" className="btn-primary">
              Check a rent increase →
            </Link>
            <Link href="/guides/what-changed-may-2026" className="btn-secondary">
              Read what changed
            </Link>
          </div>
        </div>

        {/* Front-page facts box — like a newspaper sidebar */}
        <aside className="hidden lg:block border-l-2 border-ink pl-6 max-w-[18rem]">
          <p className="meta text-brick mb-3">By the numbers</p>
          <dl className="space-y-4">
            <FactRow figure="11M" label="private renters in England" />
            <FactRow figure="30" label="grounds for possession (was 21)" />
            <FactRow figure="0" label="Section 21 evictions from 1 May" />
            <FactRow figure="12mo" label="minimum between rent rises" />
          </dl>
        </aside>
      </div>

      {/* Mobile facts strip */}
      <div className="lg:hidden mt-10 border-t border-ink pt-6 grid grid-cols-2 gap-x-6 gap-y-4">
        <FactRow figure="11M" label="private renters in England" />
        <FactRow figure="30" label="grounds for possession" />
        <FactRow figure="0" label="Section 21 evictions" />
        <FactRow figure="12mo" label="minimum between rises" />
      </div>
    </section>
  );
}

function FactRow({ figure, label }: { figure: string; label: string }) {
  return (
    <div>
      <p className="display-bold text-3xl text-ink leading-none">{figure}</p>
      <p className="text-xs text-mute mt-1.5 leading-snug">{label}</p>
    </div>
  );
}

function ContentsRule() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="rule-thick" />
    </div>
  );
}

/* Contents — like a magazine TOC, not a card grid */
function Contents() {
  const entries = [
    {
      num: "01",
      href: "/guides/what-changed-may-2026",
      title: "What changed on 1 May 2026",
      blurb:
        "A complete walk-through of the Act: Section 21 abolished, periodic tenancies for everyone, pet rights, the bidding-war ban, and what's still being phased in through 2035.",
      meta: "Essay · 8 min",
    },
    {
      num: "02",
      href: "/guides/rent-increases",
      title: "How rent increases work now",
      blurb:
        "Only one route to a valid increase, and three changes that genuinely shift the balance toward tenants — including a tribunal that can no longer raise your rent above the figure your landlord asked for.",
      meta: "Essay · 7 min",
    },
    {
      num: "03",
      href: "/guides/section-13-notice",
      title: "Section 13 notices, decoded",
      blurb:
        "Field-by-field analysis of Form 4A — every required entry, the two date checks that catch most defective notices, and step-by-step how to refer a notice to the First-tier Tribunal.",
      meta: "Reference · 6 min",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-20">
      <div className="mb-10 sm:mb-14">
        <p className="meta text-brick mb-3">Inside this issue</p>
        <h2 className="display text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl leading-tight">
          Three guides every renter should read first.
        </h2>
      </div>

      <ol className="divide-y divide-rule">
        {entries.map((e) => (
          <li key={e.href}>
            <Link
              href={e.href}
              className="group block py-7 sm:py-9 grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-10 items-baseline hover:bg-paper-deep/50 -mx-3 sm:-mx-6 px-3 sm:px-6 transition-colors"
            >
              <span className="display-bold text-4xl sm:text-6xl text-brick tabular-nums leading-none">
                {e.num}
              </span>
              <div>
                <h3 className="display text-2xl sm:text-3xl font-semibold leading-tight group-hover:underline underline-offset-4 decoration-2 decoration-brick">
                  {e.title}
                </h3>
                <p className="text-ink-soft mt-3 max-w-2xl leading-relaxed">
                  {e.blurb}
                </p>
                <p className="meta text-mute mt-4">{e.meta}</p>
              </div>
              <span className="display-bold text-2xl sm:text-3xl text-ink hidden sm:block">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* Tool — presented as a featured artifact, not a glossy product card */
function Tool() {
  return (
    <section className="relative">
      <div className="bg-ink text-paper py-16 sm:py-24 relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="meta text-rust mb-4">Featured · The instrument</p>
            <h2 className="display text-4xl sm:text-6xl leading-[0.98] tracking-tight">
              Has your rent gone up?{" "}
              <span className="display-italic font-normal">
                Run the notice first.
              </span>
            </h2>
            <p className="text-paper-deep mt-7 leading-relaxed text-lg max-w-xl">
              A free, browser-only check against the new Section 13 rules. The
              figures you enter never leave your machine. About a minute.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-5 items-start">
              <Link
                href="/rent-increase-check"
                className="inline-flex items-center gap-2 bg-paper text-ink px-5 py-3 font-medium hover:bg-brick hover:text-paper transition-colors"
                style={{ borderRadius: "1px" }}
              >
                Open the tool →
              </Link>
              <Link
                href="/guides/section-13-notice"
                className="inline-flex items-center gap-2 text-paper border-b border-paper pb-1 hover:text-rust hover:border-rust transition-colors"
              >
                How Section 13 works
              </Link>
            </div>
          </div>

          {/* What it checks — set as a printed receipt */}
          <div className="border-l-2 border-paper pl-6 lg:pl-8">
            <p className="meta text-rust mb-4">Checks performed</p>
            <ol className="space-y-3 text-paper">
              <CheckRow num="i." text="At least 12 months since the last increase" />
              <CheckRow num="ii." text="At least two months' notice before the new rent date" />
              <CheckRow num="iii." text="Served on Form 4A, not a letter or a clause" />
              <CheckRow num="iv." text="How the figure compares to typical market rents" />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckRow({ num, text }: { num: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="meta-lowercase text-rust shrink-0 pt-0.5">{num}</span>
      <span className="leading-snug">{text}</span>
    </li>
  );
}

/* Editorial — first-person reason for the site */
function Editorial() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-28">
      <p className="meta text-brick mb-5">Editorial</p>
      <h2 className="display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
        I tried to find a single clean tool, and there wasn&apos;t one.
      </h2>
      <div className="mt-8 prose">
        <p className="drop-cap">
          I moved back to the UK in spring 2026, the same month the
          Renters&apos; Rights Act came into force. As I was setting up a new
          tenancy, I tried to find one resource that would tell me plainly
          whether a Section 13 notice was valid or not.
        </p>
        <p>
          What I found instead: law firm landing pages selling consultations,
          charity guides written for the old regime and not yet updated, a
          government information sheet that raised more questions than it
          answered, and half a dozen Reddit threads where people were giving
          each other good-faith but legally incorrect advice.
        </p>
        <p>
          The Act gives 11 million renters real, enforceable rights. The
          system only works if people know what those rights actually are.
          This is my contribution to making that happen.
        </p>
      </div>
    </section>
  );
}

/* Why — closing argument */
function Why() {
  return (
    <section className="bg-paper-deep border-y-2 border-ink relative z-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24 text-center">
        <p className="meta text-brick mb-5">The promise</p>
        <h2 className="display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl mx-auto">
          Plain English. Primary sources. No funnels.{" "}
          <span className="display-italic font-normal">No paywall.</span>
        </h2>
        <p className="text-ink-soft mt-7 leading-relaxed text-lg max-w-xl mx-auto">
          You shouldn&apos;t have to pay or hand over your email address to
          read what the law already says you&apos;re entitled to.
        </p>
        <div className="mt-10">
          <Link href="/rent-increase-check" className="btn-primary">
            Start with the rent check →
          </Link>
        </div>
      </div>
    </section>
  );
}
