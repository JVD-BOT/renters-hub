/**
 * Section 13 rent increase validation logic.
 *
 * Implements the rules in the Housing Act 1988 (s.13) as amended by the
 * Renters' Rights Act 2025, commenced 1 May 2026 in England.
 *
 * Key rules encoded here:
 *  - Rent can be increased at most once per 12-month period.
 *  - At least 2 months' notice must be given before the new rent takes effect.
 *  - Form 4A is now the only valid mechanism. Rent review clauses in
 *    tenancy agreements are no longer enforceable for assured tenancies.
 *  - The tribunal test is "open market rent", not a fixed percentage.
 *    Significant percentage increases are flagged as informational only.
 *
 * NOT legal advice. For specific situations users should contact Shelter,
 * Citizens Advice, or a solicitor.
 */

export type Verdict = "green" | "amber" | "red";

export type Severity = "info" | "amber" | "red";

export interface FlagItem {
  severity: Severity;
  title: string;
  detail: string;
}

export interface ValidationInput {
  currentRent: number;
  proposedRent: number;
  lastIncreaseOrStart: string; // ISO date string (yyyy-mm-dd)
  noticeServed: string;
  proposedStart: string;
  isForm4A: "yes" | "no" | "unknown";
  postcode?: string;
}

export interface ValidationResult {
  verdict: Verdict;
  flags: FlagItem[];
  summary: string;
  percentageIncrease: number;
}

function diffInDays(a: Date, b: Date): number {
  const ms = a.getTime() - b.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function diffInMonths(a: Date, b: Date): number {
  // Calendar-month difference, fractional. Returns months from b to a.
  const years = a.getFullYear() - b.getFullYear();
  const months = a.getMonth() - b.getMonth();
  const dayFraction = (a.getDate() - b.getDate()) / 30;
  return years * 12 + months + dayFraction;
}

function escalate(current: Verdict, incoming: Severity): Verdict {
  if (incoming === "red") return "red";
  if (incoming === "amber") return current === "red" ? "red" : "amber";
  return current; // info doesn't escalate
}

export function validateRentIncrease(input: ValidationInput): ValidationResult {
  const flags: FlagItem[] = [];
  let verdict: Verdict = "green";

  const lastIncrease = new Date(input.lastIncreaseOrStart);
  const noticeServed = new Date(input.noticeServed);
  const proposedStart = new Date(input.proposedStart);

  const percentageIncrease =
    input.currentRent > 0
      ? ((input.proposedRent - input.currentRent) / input.currentRent) * 100
      : 0;

  // CHECK 1 — 12-month rule
  const monthsSinceLast = diffInMonths(proposedStart, lastIncrease);
  if (monthsSinceLast < 12) {
    const monthsShort = (12 - monthsSinceLast).toFixed(1);
    flags.push({
      severity: "red",
      title: "Less than 12 months since the last increase",
      detail: `Rent can only be increased once every 12 months. Your last increase (or tenancy start) was around ${monthsSinceLast.toFixed(
        1
      )} months before the proposed start date — about ${monthsShort} months too soon. The notice is likely invalid for this reason alone.`,
    });
    verdict = escalate(verdict, "red");
  }

  // CHECK 2 — at least 2 months' notice
  const daysNotice = diffInDays(proposedStart, noticeServed);
  if (daysNotice < 60) {
    flags.push({
      severity: "red",
      title: "Less than two months' notice",
      detail: `A Section 13 notice must give at least two months between the date it is served and the date the new rent takes effect. Your notice gives ${daysNotice} days. The notice is likely invalid.`,
    });
    verdict = escalate(verdict, "red");
  }

  // CHECK 3 — Form 4A
  if (input.isForm4A === "no") {
    flags.push({
      severity: "amber",
      title: "Notice may not be on Form 4A",
      detail:
        "From 1 May 2026, Form 4A is the only valid mechanism for increasing rent on an assured tenancy in England. Rent review clauses written into tenancy agreements are no longer enforceable. If the notice is not on Form 4A, it is likely invalid.",
    });
    verdict = escalate(verdict, "amber");
  } else if (input.isForm4A === "unknown") {
    flags.push({
      severity: "amber",
      title: "Confirm the notice is on Form 4A",
      detail:
        "Ask your landlord to confirm the rent increase was served on the official Form 4A. Any other method — including rent review clauses in your tenancy agreement — is no longer valid for assured tenancies.",
    });
    verdict = escalate(verdict, "amber");
  }

  // CHECK 4 — significant increase (informational only, never escalates)
  if (percentageIncrease > 10) {
    flags.push({
      severity: "info",
      title: `Significant increase of ${percentageIncrease.toFixed(1)}%`,
      detail:
        "The legal test for challenging a rent increase is whether the proposed rent exceeds open-market rent for your property — not a fixed percentage. Compare against current listings for similar properties in your postcode on Rightmove or Zoopla before deciding whether to refer the notice to the First-tier Tribunal.",
    });
  }

  // Compose summary
  const summary = composeSummary(verdict, flags, percentageIncrease);

  return {
    verdict,
    flags,
    summary,
    percentageIncrease,
  };
}

function composeSummary(
  verdict: Verdict,
  flags: FlagItem[],
  percentageIncrease: number
): string {
  if (verdict === "red") {
    return `Based on what you've entered, this rent increase notice has serious issues and is likely challengeable. A ${percentageIncrease.toFixed(
      1
    )}% increase has been proposed, but the procedural rules around it appear not to have been followed.`;
  }
  if (verdict === "amber") {
    if (flags.length === 1 && flags[0].severity === "info") {
      return `The notice appears procedurally compliant. The proposed ${percentageIncrease.toFixed(
        1
      )}% increase is significant — review carefully before deciding whether to accept or challenge.`;
    }
    return `The notice may be procedurally compliant but there are points to review before deciding whether to accept or challenge.`;
  }
  return `Based on what you've entered, this rent increase notice appears procedurally compliant — the 12-month rule has been followed, you've been given the required two months' notice, and the form appears correct.`;
}
