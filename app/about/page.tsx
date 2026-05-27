import type { Metadata } from "next";
import Link from "next/link";
import { Shield, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Renters Hub",
  description:
    "Why Renters Hub exists, who's behind it, and how the guides and tools on this site are made and updated.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
      <nav className="text-sm text-mute mb-5">
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>{" "}
        <span aria-hidden className="mx-1">›</span> About
      </nav>

      <header className="mb-10">
        <p className="kicker mb-3">About</p>
        <h1 className="display text-4xl sm:text-5xl leading-tight tracking-tight">
          Built by a renter,{" "}
          <span className="display-italic">for renters.</span>
        </h1>
      </header>

      <div className="prose">
        <p className="lede">
          Renters Hub is an independent, free site that helps private renters
          in England understand and exercise their rights under the
          Renters&apos; Rights Act 2025.
        </p>

        <h2>Why this exists</h2>
        <p>
          I moved back to the UK in the spring of 2026, the same month the
          Renters&apos; Rights Act came into force. As I was setting up a new
          tenancy, I tried to find a single, clean resource that would tell me
          plainly whether a rent increase notice I&apos;d been shown was
          actually valid.
        </p>
        <p>
          What I found was a mess. Law firm landing pages that wanted to sell
          me a consultation. Charity guides that had been written for the old
          regime and not updated. A government information sheet that raised
          more questions than it answered. And a half-dozen Reddit threads
          where people were giving each other genuinely incorrect advice in
          good faith.
        </p>
        <p>
          The Act is supposed to give 11 million renters in England real,
          enforceable rights. But the system only works if people know what
          their rights actually are. Renters Hub is my small attempt to
          contribute something useful to that.
        </p>

        <h2>What this is, and what it isn&apos;t</h2>
        <p>
          <strong>What this is:</strong> plain-English guides to the new law,
          free interactive tools that check specific things against the rules,
          and clear pointers to the people who can actually help when you need
          real advice.
        </p>
        <p>
          <strong>What this isn&apos;t:</strong> a law firm, a letting agent,
          a tenancy management platform, a directory of solicitors, or a
          source of legal advice. If you need someone to give you a binding
          legal opinion on your situation, you need a solicitor — not a
          website.
        </p>

        <h2>How the guides are made</h2>
        <p>
          Every guide is written from primary sources: the Act itself on{" "}
          <a
            href="https://www.legislation.gov.uk/ukpga/2025/26/contents"
            target="_blank"
            rel="noopener noreferrer"
          >
            legislation.gov.uk
          </a>
          , the government&apos;s official{" "}
          <a
            href="https://assets.publishing.service.gov.uk/media/69bc04b8f7b1c24d8e23ce60/The_Renters__Rights_Act_Information_Sheet_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Sheet 2026
          </a>
          , and the implementation guidance published on GOV.UK. Every guide
          carries the date it was last reviewed and a Sources section listing
          what it draws on.
        </p>
        <p>
          I update the guides when the law changes, when new secondary
          legislation is published, or when readers point out errors. The
          government&apos;s own implementation roadmap currently lists at
          least 12 separate sets of regulations still to come, so there&apos;s
          ongoing work here for the foreseeable future.
        </p>

        <h2>The tools</h2>
        <p>
          The free tools on this site — currently the{" "}
          <a href="/rent-increase-check">Section 13 rent increase check</a> —
          implement the procedural rules from the Act as pure logic. They run
          entirely in your browser. The figures you enter aren&apos;t sent to
          our servers and aren&apos;t stored anywhere. There&apos;s nothing
          to sign up for and nothing to download.
        </p>

        <h2>Principles</h2>
        <ul>
          <li>
            <strong>Free.</strong> No paywall, no premium tier, no
            &quot;upgrade for the answer&quot;.
          </li>
          <li>
            <strong>Independent.</strong> Not affiliated with any landlord
            body, letting agency, law firm, or political organisation.
          </li>
          <li>
            <strong>Privacy-first.</strong> No tracking, no analytics, no
            ads, no third-party scripts. One essential cookie remembers that
            you dismissed the banner.
          </li>
          <li>
            <strong>Plain-English.</strong> No jargon, no Latin, no legalese
            unless we explain what it means.
          </li>
          <li>
            <strong>Honest about limits.</strong> We tell you when something
            is information rather than advice, and we point you to Shelter,
            Citizens Advice, or a solicitor when you need someone who can
            actually pick up the phone.
          </li>
        </ul>

        <h2>Who pays for this</h2>
        <p>
          For now, no one. I&apos;m running this on a personal Vercel free
          tier and writing the content in spare evenings. At some point I may
          place a small number of unobtrusive ads through Google AdSense or
          add affiliate links for tenant-friendly services I genuinely use
          (deposit alternatives, rent protection). If I do that, it will be
          declared on the relevant pages.
        </p>
        <p>
          What I won&apos;t do: sell tenant data, run scammy
          &quot;rent-better&quot; courses, or push you toward landlord-funded
          services dressed up as tenant tools.
        </p>

        <h2>Get in touch</h2>
        <p>
          Spotted a mistake, want to suggest a tool, or have a question that
          isn&apos;t covered in a guide? Email{" "}
          <a href="mailto:hello@renters-hub.vercel.app">
            hello@renters-hub.vercel.app
          </a>{" "}
          (proper domain coming soon) or use the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        <div className="card">
          <Shield className="w-5 h-5 text-signal mb-3" />
          <p className="font-medium mb-1">Privacy first</p>
          <p className="text-sm text-mute leading-relaxed">
            No tracking, no analytics, no ads. One essential cookie. Read the{" "}
            <Link href="/privacy" className="text-signal underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="card">
          <BookOpen className="w-5 h-5 text-signal mb-3" />
          <p className="font-medium mb-1">Sourced and dated</p>
          <p className="text-sm text-mute leading-relaxed">
            Every guide cites primary sources and shows when it was last
            reviewed. Browse the{" "}
            <Link href="/guides" className="text-signal underline underline-offset-2">
              full guides index
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
