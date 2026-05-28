import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Renters Hub",
  description:
    "Why Renters Hub exists, who's behind it, and how the guides and tools on this site are made and updated.",
};

export default function Page() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 pt-12 sm:pt-16 pb-12">
      <nav className="meta-lowercase text-mute mb-8">
        <Link href="/" className="hover:text-brick">
          Front
        </Link>{" "}
        / <span className="text-ink">About</span>
      </nav>

      <header className="mb-10 pb-10 border-b-2 border-ink">
        <p className="meta text-brick mb-4">Colophon</p>
        <h1 className="display-bold text-4xl sm:text-6xl leading-[1.02] tracking-tight">
          A pamphlet, not a platform.
        </h1>
        <div className="meta text-mute mt-7 flex flex-wrap gap-x-4 gap-y-1">
          <span>Last reviewed 27 May 2026</span>
        </div>
      </header>

      <div className="prose">
        <p className="drop-cap">
          Renters Hub is an independent, free publication that helps private
          renters in England understand and exercise their rights under the
          Renters&apos; Rights Act 2025. Not a law firm. Not a letting agent.
          Not a tenancy management product. A pamphlet.
        </p>

        <h2 data-num="1">Why this exists</h2>
        <p>
          I moved back to the UK in the spring of 2026, the same month the
          Renters&apos; Rights Act came into force. As I was setting up a
          new tenancy, I tried to find one clean resource that would tell me
          plainly whether a rent increase notice I&apos;d been shown was
          actually valid.
        </p>
        <p>
          What I found was a mess. Law firm landing pages trying to sell me
          a consultation. Charity guides written for the old regime and not
          updated. A government information sheet that raised more
          questions than it answered. And half a dozen Reddit threads where
          people were giving each other good-faith but legally incorrect
          advice.
        </p>
        <p>
          The Act is supposed to give 11 million renters real, enforceable
          rights. The system only works if people know what those rights
          actually are. This is my contribution to making that happen.
        </p>

        <h2 data-num="2">What this is, and what it isn&apos;t</h2>
        <p>
          <strong>What this is:</strong> plain-English guides to the new
          law, free browser-only tools that check specific things against
          the rules, and clear pointers to the people who can actually help
          when you need real advice.
        </p>
        <p>
          <strong>What this isn&apos;t:</strong> a law firm, a letting
          agent, a tenancy management platform, a directory of solicitors,
          or a source of legal advice. If you need someone to give you a
          binding legal opinion on your situation, you need a solicitor —
          not a website.
        </p>

        <h2 data-num="3">How the guides are made</h2>
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
          , and the implementation guidance published on GOV.UK. Every
          guide carries the date it was last reviewed and lists its
          sources.
        </p>
        <p>
          I update the guides when the law changes, when new secondary
          legislation is published, or when readers point out errors. The
          government&apos;s own implementation roadmap currently lists at
          least 12 separate sets of regulations still to come, so
          there&apos;s ongoing work here for the foreseeable future.
        </p>

        <h2 data-num="4">The tools</h2>
        <p>
          The free tools on this site — currently the{" "}
          <a href="/rent-increase-check">Section 13 rent increase check</a>{" "}
          — implement the procedural rules from the Act as pure logic. They
          run entirely in your browser. The figures you enter aren&apos;t
          sent to our servers and aren&apos;t stored anywhere. There&apos;s
          nothing to sign up for and nothing to download.
        </p>

        <h2 data-num="5">Principles</h2>
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
            ads, no third-party scripts. One essential cookie remembers
            that you dismissed the banner.
          </li>
          <li>
            <strong>Plain-English.</strong> No jargon, no Latin, no
            legalese unless we explain what it means.
          </li>
          <li>
            <strong>Honest about limits.</strong> I tell you when something
            is information rather than advice, and point you to Shelter,
            Citizens Advice, or a solicitor when you need someone who can
            actually pick up the phone.
          </li>
        </ul>

        <h2 data-num="6">Who pays for this</h2>
        <p>
          For now, no one. I&apos;m running this on a personal Vercel free
          tier and writing the content in spare evenings. At some point I
          may place a small number of unobtrusive ads through Google
          AdSense, or add affiliate links for tenant-friendly services I
          genuinely use. If I do that, it will be declared on the relevant
          pages.
        </p>
        <p>
          What I won&apos;t do: sell tenant data, run scammy &quot;rent-better&quot;
          courses, or push you toward landlord-funded services dressed up
          as tenant tools.
        </p>

        <h2 data-num="7">Get in touch</h2>
        <p>
          Spotted a mistake, want to suggest a tool, or have a question
          that isn&apos;t covered in a guide? Use the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
