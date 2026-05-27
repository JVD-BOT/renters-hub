import Link from "next/link";
import { ArrowRight, FileText, Scale, Calendar, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChangeStrip />
      <ToolFeature />
      <Guides />
      <Why />
      <ClosingNote />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-glow grain relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="inline-flex items-center gap-2 bg-signal-soft text-signal-deep px-3 py-1.5 rounded-full text-xs font-medium mb-9">
          <Sparkles className="w-3.5 h-3.5" />
          Renters&apos; Rights Act in force from 1 May 2026
        </div>

        <h1 className="display text-[2.5rem] leading-[1.05] sm:text-7xl sm:leading-[1.02] tracking-tight max-w-3xl">
          Renting changed.{" "}
          <span className="display-italic text-signal">Know what you&apos;re owed.</span>
        </h1>

        <p className="text-lg sm:text-xl text-mute mt-7 max-w-2xl leading-relaxed">
          Plain-English tools and guides for the 11&nbsp;million private renters
          in England navigating the biggest rental reform in nearly 40 years.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <Link href="/rent-increase-check" className="btn-primary group">
            Check a rent increase
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/guides/what-changed-may-2026" className="btn-secondary group">
            Read what changed
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChangeStrip() {
  const stats = [
    { value: "11M", label: "Private renters in England" },
    { value: "30", label: "Section 8 grounds for possession" },
    { value: "0", label: "Section 21 evictions from 1 May" },
    { value: "12mo", label: "Minimum between rent rises" },
  ];

  return (
    <section className="border-y border-hairline bg-paper-soft">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-2">
        {stats.map((s) => (
          <div key={s.label} className="text-left sm:text-center">
            <div className="display text-3xl sm:text-4xl text-ink">{s.value}</div>
            <div className="text-xs text-mute mt-1 leading-snug max-w-[14ch] sm:max-w-none sm:mx-auto">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolFeature() {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="kicker mb-3">Hero tool</p>
          <h2 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
            Has your rent gone up?{" "}
            <span className="display-italic">Check the notice first.</span>
          </h2>
          <p className="text-mute mt-5 leading-relaxed text-lg">
            Rent increases on assured tenancies now have to come through Section
            13 — on the official Form 4A, with at least two months&apos; notice,
            and not within 12 months of the last increase. We&apos;ll tell you
            in about a minute whether yours follows the rules.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/rent-increase-check"
              className="btn-primary group"
              style={{ background: "var(--signal)" }}
            >
              Open the tool
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/guides/section-13-notice" className="btn-secondary group">
              How Section 13 works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="bg-paper border border-hairline rounded-2xl p-6 shadow-[0_1px_2px_rgba(13,13,18,0.03)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-signal-soft opacity-60 blur-2xl pointer-events-none" />
          <p className="kicker mb-4">What the tool checks</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-signal-soft text-signal-deep flex items-center justify-center text-xs font-semibold shrink-0">1</span>
              <span>At least 12 months since the last rent increase or tenancy start</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-signal-soft text-signal-deep flex items-center justify-center text-xs font-semibold shrink-0">2</span>
              <span>At least two months between the notice and the new rent date</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-signal-soft text-signal-deep flex items-center justify-center text-xs font-semibold shrink-0">3</span>
              <span>Served on the prescribed Form 4A, not a letter or rent review clause</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-signal-soft text-signal-deep flex items-center justify-center text-xs font-semibold shrink-0">4</span>
              <span>How the proposed rent compares to typical market levels</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Guides() {
  const items = [
    {
      href: "/guides/what-changed-may-2026",
      icon: Calendar,
      title: "What changed on 1 May 2026",
      blurb:
        "Section 21 gone. Tenancies periodic. Pets, deposits, bidding wars, the lot — in plain English.",
      readTime: "8 min read",
    },
    {
      href: "/guides/rent-increases",
      icon: Scale,
      title: "How rent increases work now",
      blurb:
        "Once a year, two months' notice, Form 4A only. What a valid increase looks like and how to challenge one that isn't.",
      readTime: "7 min read",
    },
    {
      href: "/guides/section-13-notice",
      icon: FileText,
      title: "Section 13 notices, decoded",
      blurb:
        "Every required field on Form 4A, the three dates that matter, and what the tribunal can and can't do.",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="guides" className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="kicker mb-3">Start here</p>
          <h2 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
            The three guides{" "}
            <span className="display-italic">every renter needs.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="card group flex flex-col">
              <it.icon className="w-6 h-6 text-signal mb-5" />
              <h3 className="font-semibold text-lg leading-snug mb-2">
                {it.title}
              </h3>
              <p className="text-sm text-mute leading-relaxed flex-1">
                {it.blurb}
              </p>
              <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between text-xs text-mute">
                <span>{it.readTime}</span>
                <span className="inline-flex items-center gap-1 text-signal font-medium group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-paper-soft border-y border-hairline">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          <div>
            <p className="kicker mb-3">Why this exists</p>
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Built by a renter,{" "}
              <span className="display-italic">for renters.</span>
            </h2>
          </div>
          <div className="text-mute leading-relaxed text-lg space-y-5">
            <p>
              I moved back to the UK in spring 2026, right as the Renters&apos;
              Rights Act came into force. I tried to find a single, clean tool
              that would tell me whether a Section 13 notice was legitimate.
              Instead I found law firm landing pages, charity guides written
              before the Act passed, and a government information sheet that
              raised more questions than it answered.
            </p>
            <p>
              So I built one. Renters Hub is independent, free, and points you
              to{" "}
              <a
                href="https://england.shelter.org.uk/get_help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-2"
              >
                Shelter
              </a>{" "}
              and{" "}
              <a
                href="https://www.citizensadvice.org.uk/housing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-2"
              >
                Citizens Advice
              </a>{" "}
              for help that needs a human. Every guide cites primary sources
              and shows when it was last reviewed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingNote() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-28 text-center">
      <ShieldCheck className="w-8 h-8 text-signal mx-auto mb-6" />
      <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
        Plain English. Primary sources.{" "}
        <span className="display-italic">No ads, no funnels.</span>
      </h2>
      <p className="text-mute mt-5 leading-relaxed text-lg max-w-xl mx-auto">
        We don&apos;t collect your personal data. We don&apos;t sell anything.
        We won&apos;t put you in front of a paywall to read what you&apos;re
        entitled to.
      </p>
      <div className="mt-8">
        <Link href="/rent-increase-check" className="btn-primary group">
          Start with the rent check
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
