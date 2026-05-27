"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, Info, ChevronDown, Lock } from "lucide-react";
import {
  validateRentIncrease,
  ValidationResult,
  type FlagItem,
} from "@/lib/rra-logic";

const TODAY = new Date().toISOString().slice(0, 10);

export function RentIncreaseTool() {
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
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
    setSubmitting(false);
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <section>
          <h2 className="display text-xl mb-1">The rent figures</h2>
          <p className="text-sm text-mute mb-5">What it is now, and what your landlord wants it to become.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Current monthly rent (£)" name="currentRent" type="number" step="0.01" min="0" required placeholder="e.g. 1450" />
            <Field label="Proposed new monthly rent (£)" name="proposedRent" type="number" step="0.01" min="0" required placeholder="e.g. 1600" />
          </div>
        </section>

        <section>
          <h2 className="display text-xl mb-1">The dates</h2>
          <p className="text-sm text-mute mb-5">These three dates determine whether the notice follows Section 13.</p>
          <div className="space-y-5">
            <Field
              label="Date of your last rent increase, or your tenancy start if you've never had one"
              name="lastIncreaseOrStart"
              type="date"
              required
              max={TODAY}
              helper="The 12-month rule runs from whichever of these is most recent."
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Date you received the Section 13 notice"
                name="noticeServed"
                type="date"
                required
                helper="Often called Form 4A."
              />
              <Field
                label="Date the new rent is proposed to start"
                name="proposedStart"
                type="date"
                required
                helper="This will be on the notice itself."
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="display text-xl mb-1">The form</h2>
          <p className="text-sm text-mute mb-5">From 1 May 2026, only Form 4A is valid. Anything else won&apos;t do.</p>
          <div>
            <label htmlFor="isForm4A" className="block text-sm font-medium mb-2">
              Was the notice on the official Form 4A?
            </label>
            <div className="relative">
              <select
                id="isForm4A"
                name="isForm4A"
                required
                defaultValue="unknown"
                className="w-full appearance-none bg-paper border border-hairline rounded-md px-4 py-3 pr-10 text-ink focus:border-signal outline-none transition-colors"
              >
                <option value="yes">Yes — it&apos;s the official Form 4A</option>
                <option value="no">No — it&apos;s a letter, email, or rent review clause</option>
                <option value="unknown">I&apos;m not sure</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute pointer-events-none" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="display text-xl mb-1">Optional context</h2>
          <p className="text-sm text-mute mb-5">Not stored, just used to give better local context.</p>
          <Field
            label="UK postcode"
            name="postcode"
            type="text"
            placeholder="e.g. SL1 2AB"
            helper="If you give us a postcode, we&apos;ll mention it in the result. Stays in your browser."
          />
        </section>

        <div className="pt-2 border-t border-hairline">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary group"
          >
            Check my notice
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-xs text-mute mt-4 flex items-center gap-2">
            <Lock className="w-3 h-3" />
            All checks happen in your browser. We never see the figures you enter.
          </p>
        </div>
      </form>

      {result && (
        <div id="result" className="mt-14 fade-up scroll-mt-24">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  step?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  helper?: string;
}) {
  const { label, name, helper, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...rest}
        className="w-full bg-paper border border-hairline rounded-md px-4 py-3 text-ink focus:border-signal outline-none transition-colors placeholder:text-mute-soft"
      />
      {helper && <p className="text-xs text-mute mt-1.5">{helper}</p>}
    </div>
  );
}

function ResultCard({ result }: { result: ValidationResult }) {
  const verdictMeta = {
    green: {
      label: "Notice appears compliant",
      bg: "bg-mint-soft",
      pill: "bg-mint text-ink",
      border: "border-mint",
      icon: CheckCircle2,
    },
    amber: {
      label: "Review carefully",
      bg: "bg-amber-soft",
      pill: "bg-amber text-ink",
      border: "border-amber",
      icon: AlertTriangle,
    },
    red: {
      label: "Likely challengeable",
      bg: "bg-coral-soft",
      pill: "bg-coral text-paper",
      border: "border-coral",
      icon: XCircle,
    },
  }[result.verdict];

  const VerdictIcon = verdictMeta.icon;

  return (
    <div className={`rounded-2xl border ${verdictMeta.border} ${verdictMeta.bg} p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-5">
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${verdictMeta.pill}`}>
          <VerdictIcon className="w-4 h-4" />
          {verdictMeta.label}
        </span>
      </div>

      <p className="text-lg leading-relaxed mb-6">{result.summary}</p>

      {result.flags.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="kicker">What we flagged</h3>
          <ul className="space-y-3">
            {result.flags.map((flag, i) => (
              <FlagRow key={i} flag={flag} />
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-hairline pt-5 space-y-3">
        <h3 className="kicker">What you can do</h3>
        {result.verdict === "red" || result.verdict === "amber" ? (
          <>
            <p className="leading-relaxed">
              If you want to challenge, you can refer the notice to the{" "}
              <a
                href="https://www.gov.uk/housing-tribunals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-2"
              >
                First-tier Tribunal (Property Chamber)
              </a>{" "}
              before the proposed start date. There&apos;s no fee for tenants
              and most cases are decided on paper.
            </p>
            <p className="leading-relaxed text-sm">
              <strong>Worth knowing:</strong> from 1 May 2026, the tribunal
              cannot set the rent higher than your landlord proposed. The
              worst-case outcome is the rent stays where the notice says.
            </p>
            <p className="leading-relaxed text-sm">
              Read the full guide:{" "}
              <Link
                href="/guides/section-13-notice"
                className="text-signal underline underline-offset-2"
              >
                Section 13 notices, decoded
              </Link>
              .
            </p>
          </>
        ) : (
          <p className="leading-relaxed">
            The notice appears to follow the procedural rules. You can still
            refer it to the{" "}
            <a
              href="https://www.gov.uk/housing-tribunals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              First-tier Tribunal
            </a>{" "}
            if you think the proposed rent exceeds open-market rent for your
            property. From 1 May 2026 the tribunal can&apos;t set the rent
            higher than your landlord proposed, so challenging carries no
            downside risk.
          </p>
        )}
      </div>

      <div className="border-t border-hairline mt-6 pt-5">
        <p className="text-xs text-mute leading-relaxed">
          This tool provides information only and is not legal advice. The
          validation covers the main procedural rules in Section 13 of the
          Housing Act 1988 as amended by the Renters&apos; Rights Act 2025
          (commenced 1 May 2026). For advice on your specific situation,
          contact{" "}
          <a
            href="https://england.shelter.org.uk/get_help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Shelter
          </a>
          ,{" "}
          <a
            href="https://www.citizensadvice.org.uk/housing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline underline-offset-2"
          >
            Citizens Advice
          </a>
          , or a solicitor.
        </p>
      </div>
    </div>
  );
}

function FlagRow({ flag }: { flag: FlagItem }) {
  const iconMap = {
    red: { Icon: XCircle, color: "text-coral" },
    amber: { Icon: AlertTriangle, color: "text-amber" },
    info: { Icon: Info, color: "text-signal" },
  };
  const { Icon, color } = iconMap[flag.severity];

  return (
    <li className="flex gap-3">
      <Icon className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
      <div>
        <p className="font-medium">{flag.title}</p>
        <p className="text-mute text-sm mt-0.5 leading-relaxed">{flag.detail}</p>
      </div>
    </li>
  );
}
