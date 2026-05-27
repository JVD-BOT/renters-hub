"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  validateRentIncrease,
  ValidationResult,
  type FlagItem,
} from "@/lib/rra-logic";

const TODAY = new Date().toISOString().slice(0, 10);

export function RentIncreaseTool() {
  const [result, setResult] = useState<ValidationResult | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const input = {
      currentRent: Number(fd.get("currentRent")),
      proposedRent: Number(fd.get("proposedRent")),
      lastIncreaseOrStart: String(fd.get("lastIncreaseOrStart")),
      noticeServed: String(fd.get("noticeServed")),
      proposedStart: String(fd.get("proposedStart")),
      isForm4A: fd.get("isForm4A") as "yes" | "no" | "unknown",
      postcode: String(fd.get("postcode") || "") || undefined,
    };
    const r = validateRentIncrease(input);
    setResult(r);
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-10">
        <Section num="i" title="The rent figures" sub="What it is now, and what your landlord wants it to become.">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Current monthly rent (£)" name="currentRent" type="number" step="0.01" min="0" required placeholder="e.g. 1450" />
            <Field label="Proposed new monthly rent (£)" name="proposedRent" type="number" step="0.01" min="0" required placeholder="e.g. 1600" />
          </div>
        </Section>

        <Section num="ii" title="The dates" sub="These three dates determine whether the notice follows Section 13.">
          <div className="space-y-5">
            <Field
              label="Date of your last rent increase, or your tenancy start"
              name="lastIncreaseOrStart"
              type="date"
              required
              max={TODAY}
              helper="The 12-month rule runs from whichever of these is most recent."
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Date you received the Section 13 notice" name="noticeServed" type="date" required helper="Often called Form 4A." />
              <Field label="Date the new rent is proposed to start" name="proposedStart" type="date" required helper="This will be on the notice itself." />
            </div>
          </div>
        </Section>

        <Section num="iii" title="The form" sub="From 1 May 2026, only Form 4A is valid. Anything else won't do.">
          <label htmlFor="isForm4A" className="block text-sm font-medium mb-2 text-ink">
            Was the notice on the official Form 4A?
          </label>
          <select
            id="isForm4A"
            name="isForm4A"
            required
            defaultValue="unknown"
            className="w-full bg-paper border border-rule rounded-none px-4 py-3 text-ink focus:border-brick outline-none transition-colors appearance-none cursor-pointer"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23181612' d='M3 6l5 5 5-5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "16px", paddingRight: "2.75rem" }}
          >
            <option value="yes">Yes — it&apos;s the official Form 4A</option>
            <option value="no">No — it&apos;s a letter, email, or rent review clause</option>
            <option value="unknown">I&apos;m not sure</option>
          </select>
        </Section>

        <Section num="iv" title="Optional context" sub="Not stored, just used to give better local context.">
          <Field
            label="UK postcode"
            name="postcode"
            type="text"
            placeholder="e.g. SL1 2AB"
            helper="Stays in your browser. We don't see it."
          />
        </Section>

        <div className="pt-4 border-t-2 border-ink">
          <button type="submit" className="btn-primary">
            Run the check →
          </button>
          <p className="meta-lowercase text-mute mt-5">
            All checks happen in your browser. We never see the figures you enter.
          </p>
        </div>
      </form>

      {result && (
        <div id="result" className="mt-16 fade-in scroll-mt-24">
          <ResultPanel result={result} />
        </div>
      )}
    </div>
  );
}

function Section({ num, title, sub, children }: { num: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-5 pb-3 border-b border-rule">
        <span className="meta-lowercase text-brick">{num}.</span>
        <div>
          <h2 className="display text-xl font-semibold leading-tight">{title}</h2>
          <p className="text-sm text-mute mt-1">{sub}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function Field(props: { label: string; name: string; type: string; required?: boolean; step?: string; min?: string; max?: string; placeholder?: string; helper?: string }) {
  const { label, name, helper, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...rest}
        className="w-full bg-paper border border-rule rounded-none px-4 py-3 text-ink focus:border-brick outline-none transition-colors placeholder:text-mute-soft"
      />
      {helper && <p className="text-xs text-mute mt-1.5">{helper}</p>}
    </div>
  );
}

function ResultPanel({ result }: { result: ValidationResult }) {
  const verdictMeta = {
    green: { label: "Notice appears compliant", bg: "bg-positive-soft", border: "border-positive", accent: "text-positive" },
    amber: { label: "Review carefully", bg: "bg-warn-soft", border: "border-warn", accent: "text-warn" },
    red: { label: "Likely challengeable", bg: "bg-danger-soft", border: "border-danger", accent: "text-danger" },
  }[result.verdict];

  return (
    <div className={`border-l-[6px] ${verdictMeta.border} ${verdictMeta.bg} px-6 py-7 sm:px-8 sm:py-9`}>
      <p className={`meta ${verdictMeta.accent} mb-4`}>The verdict</p>
      <h2 className="display-bold text-3xl sm:text-4xl leading-tight tracking-tight mb-5">
        {verdictMeta.label}
      </h2>
      <p className="text-lg text-ink leading-relaxed mb-7">{result.summary}</p>

      {result.flags.length > 0 && (
        <section className="mb-7">
          <p className="meta text-mute mb-4">What we flagged</p>
          <ul className="space-y-4">
            {result.flags.map((flag, i) => (
              <FlagRow key={i} flag={flag} />
            ))}
          </ul>
        </section>
      )}

      <div className="border-t border-rule pt-5 space-y-3">
        <p className="meta text-mute mb-1">What you can do</p>
        {result.verdict === "red" || result.verdict === "amber" ? (
          <>
            <p className="leading-relaxed">
              If you want to challenge, you can refer the notice to the{" "}
              <a
                href="https://www.gov.uk/housing-tribunals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brick underline underline-offset-2"
              >
                First-tier Tribunal (Property Chamber)
              </a>{" "}
              before the proposed start date. No fee for tenants, most cases
              decided on paper.
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Worth knowing:</strong> from 1 May 2026, the tribunal
              cannot set the rent higher than your landlord proposed. The
              worst case is the rent stays where the notice says.
            </p>
            <p className="text-sm leading-relaxed">
              For the full guide, read{" "}
              <Link href="/guides/section-13-notice" className="text-brick underline underline-offset-2">
                Section 13 notices, decoded
              </Link>
              .
            </p>
          </>
        ) : (
          <p className="leading-relaxed">
            The notice appears to follow the procedural rules. You can
            still refer it to the{" "}
            <a
              href="https://www.gov.uk/housing-tribunals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brick underline underline-offset-2"
            >
              First-tier Tribunal
            </a>{" "}
            if you think the proposed rent exceeds open-market rent for
            your property. From 1 May 2026 the tribunal can&apos;t set the
            rent higher than your landlord proposed, so challenging carries
            no downside risk.
          </p>
        )}
      </div>

      <p className="text-xs text-mute leading-relaxed mt-7 pt-5 border-t border-rule">
        Information only, not legal advice. For advice on your specific
        situation, contact{" "}
        <a
          href="https://england.shelter.org.uk/get_help"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brick underline underline-offset-2"
        >
          Shelter
        </a>{" "}
        or{" "}
        <a
          href="https://www.citizensadvice.org.uk/housing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brick underline underline-offset-2"
        >
          Citizens Advice
        </a>
        .
      </p>
    </div>
  );
}

function FlagRow({ flag }: { flag: FlagItem }) {
  const sevMap = {
    red: { mark: "✗", color: "text-danger" },
    amber: { mark: "!", color: "text-warn" },
    info: { mark: "i", color: "text-brick" },
  };
  const { mark, color } = sevMap[flag.severity];

  return (
    <li className="flex gap-4">
      <span className={`display-bold text-xl ${color} shrink-0 leading-tight w-5`}>
        {mark}
      </span>
      <div className="flex-1">
        <p className="font-semibold text-ink">{flag.title}</p>
        <p className="text-mute mt-1 leading-relaxed text-sm">{flag.detail}</p>
      </div>
    </li>
  );
}
