"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, Info, ChevronDown } from "lucide-react";
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
    // Scroll to result
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Current monthly rent (£)" name="currentRent" type="number" step="0.01" min="0" required placeholder="e.g. 1450" />
          <Field label="Proposed new monthly rent (£)" name="proposedRent" type="number" step="0.01" min="0" required placeholder="e.g. 1600" />
        </div>
        <Field
          label="Date of your last rent increase, or your tenancy start date if you've never had one"
          name="lastIncreaseOrStart"
          type="date"
          required
          max={TODAY}
          helper="The 12-month rule runs from whichever is most recent."
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

        <div>
          <label className="block text-sm font-medium mb-2">
            Was the notice on the official Form 4A?
          </label>
          <div className="relative">
            <select
              name="isForm4A"
              required
              defaultValue="unknown"
              className="w-full appearance-none bg-paper-soft border border-hairline rounded-md px-4 py-3 pr-10 text-ink focus:border-signal focus:bg-paper outline-none transition-colors"
            >
              <option value="yes">Yes — it&apos;s the official Form 4A</option>
              <option value="no">No — it&apos;s a letter or a rent review clause</option>
              <option value="unknown">I&apos;m not sure</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute pointer-events-none" />
          </div>
          <p className="text-xs text-mute mt-1.5">
            Rent review clauses in tenancy agreements are no longer valid for assured tenancies as of 1 May 2026.
          </p>
        </div>

        <Field
          label="UK postcode (optional)"
          name="postcode"
          type="text"
          placeholder="e.g. SL1 2AB"
          helper="Used only to give context on local rent levels. Not stored."
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="group bg-ink text-paper px-6 py-3.5 rounded-md font-medium hover:bg-signal transition-colors inline-flex items-center gap-2 disabled:opacity-50"
          >
            Check my notice
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-xs text-mute mt-3">
            All checks happen in your browser. We don&apos;t store the figures you enter.
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
        className="w-full bg-paper-soft border border-hairline rounded-md px-4 py-3 text-ink focus:border-signal focus:bg-paper outline-none transition-colors placeholder:text-mute/60"
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
    <div className={`rounded-xl border ${verdictMeta.border} ${verdictMeta.bg} p-6 sm:p-8`}>
      <div className="flex items-center gap-3 mb-4">
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${verdictMeta.pill}`}>
          <VerdictIcon className="w-4 h-4" />
          {verdictMeta.label}
        </span>
      </div>

      <p className="text-lg leading-relaxed mb-6">{result.summary}</p>

      {result.flags.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
            What we flagged
          </h3>
          <ul className="space-y-3">
            {result.flags.map((flag, i) => (
              <FlagRow key={i} flag={flag} />
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-hairline pt-5 space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-mute">
          What you can do
        </h3>
        {result.verdict === "red" || result.verdict === "amber" ? (
          <p>
            If you want to challenge, you can refer the notice to the{" "}
            <a
              href="https://www.gov.uk/housing-tribunals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              First-tier Tribunal (Property Chamber)
            </a>{" "}
            before the proposed start date. There is no fee for tenants. Read
            our guide:{" "}
            <Link href="/guides/section-13-notice" className="text-signal underline underline-offset-2">
              How Section 13 notices work
            </Link>
            .
          </p>
        ) : (
          <p>
            The notice appears to follow the rules. You can still refer it to
            the{" "}
            <a
              href="https://www.gov.uk/housing-tribunals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline underline-offset-2"
            >
              First-tier Tribunal
            </a>{" "}
            if you believe the proposed rent exceeds open-market rent for your
            property. There is no fee for tenants.
          </p>
        )}
      </div>

      <div className="border-t border-hairline mt-6 pt-5">
        <p className="text-xs text-mute leading-relaxed">
          This tool provides information only and is not legal advice. The validation
          covers the main procedural rules in Section 13 of the Housing Act 1988 as
          amended by the Renters&apos; Rights Act 2025. For advice on your specific
          situation, contact{" "}
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
