import Link from "next/link";
import { ArrowRight, FileText, Scale, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolsStrip />
      <Guides />
      <ClosingNote />
    </>
  );
}

function Hero() {
  return (
    <section className="grain relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="inline-flex items-center gap-2 bg-signal-soft text-signal px-3 py-1.5 rounded-full text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" aria-hidden />
          Live: Renters&apos; Rights Act in force from 1 May 2026
        </div>

        <h1 className="display text-5xl sm:text-7xl leading-[1.05] tracking-tight max-w-3xl">
          Renting changed.{" "}
          <span className="display-italic text-signal">Know what you&apos;re owed.</span>
        </h1>

        <p className="text-lg sm:text-xl text-mute mt-7 max-w-2xl leading-relaxed">
          Free, plain-English tools and guides for the 11&nbsp;million private
          renters in England navigating the biggest rental reform in nearly 40
          years.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <Link
            href="/rent-increase-check"
            className="group bg-ink text-paper px-6 py-3.5 rounded-md font-medium hover:bg-signal transition-colors inline-flex items-center gap-2"
          >
            Check a rent increase
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/guides/what-changed-may-2026"
            className="px-6 py-3.5 rounded-md font-medium text-ink hover:text-signal transition-colors inline-flex items-center gap-2"
          >
            What changed on 1 May
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />
    </section>
  );
}

function ToolsStrip() {
  return (
    <section className="border-y border-hairline bg-paper-soft/50">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute mb-3">
          Hero tool
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight">
              Has your rent gone up?{" "}
              <span className="display-italic">Check the notice first.</span>
            </h2>
            <p className="text-mute mt-4 leading-relaxed">
              Rent increases on assured tenancies must now go through
              Section&nbsp;13 — not a rent review clause, not a letter, not a
              text message. We&apos;ll tell you in 30 seconds whether yours
              follows the rules.
            </p>
          </div>
          <Link
            href="/rent-increase-check"
            className="group bg-signal text-paper px-6 py-3.5 rounded-md font-medium hover:bg-ink transition-colors inline-flex items-center gap-2 shrink-0"
          >
            Open the tool
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
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
        "Section 21 is gone. Tenancies are now periodic. Pets, rent increases, deposits — the lot, in plain English.",
    },
    {
      href: "/guides/rent-increases",
      icon: Scale,
      title: "How rent increases work now",
      blurb:
        "Once a year, with two months' notice, on the right form. What a valid increase looks like and how to challenge one that isn't.",
    },
    {
      href: "/guides/section-13-notice",
      icon: FileText,
      title: "Section 13 notices, decoded",
      blurb:
        "Form 4A is now the only valid mechanism. We walk through every field, what it means, and where things can go wrong.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute mb-3">
        Start here
      </p>
      <h2 className="display text-3xl sm:text-4xl leading-tight tracking-tight max-w-xl">
        The three guides{" "}
        <span className="display-italic">every renter needs.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="group block bg-paper-soft hover:bg-signal-soft border border-hairline rounded-xl p-7 transition-colors"
          >
            <it.icon className="w-6 h-6 text-signal mb-5" />
            <h3 className="font-semibold text-lg leading-snug mb-2">
              {it.title}
            </h3>
            <p className="text-sm text-mute leading-relaxed">{it.blurb}</p>
            <span className="inline-flex items-center gap-1 text-signal text-sm font-medium mt-4 group-hover:gap-2 transition-all">
              Read the guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ClosingNote() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
        <h2 className="display text-2xl sm:text-3xl leading-tight tracking-tight">
          We&apos;re renters too.
        </h2>
        <p className="text-mute mt-4 leading-relaxed">
          Renters Hub is independent, free to use, and made for England. We
          point you toward{" "}
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
          for the things we can&apos;t help with. Nothing here is legal advice.
        </p>
      </div>
    </section>
  );
}
