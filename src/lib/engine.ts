import { INTEGRITY_SIGNALS } from "@/data/scenario";

export type Decision = {
  signalId: string;
  optionId: string;
  timestamp: number; // seconds elapsed in mission
};

export type PressureResponse = {
  eventId: string;
  responseId: string;
  timestamp: number;
};

export type SessionState = {
  startedAt: number | null; // Date.now()
  decisions: Decision[];
  pressureResponses: PressureResponse[];
  currentSignalIndex: number;
  isComplete: boolean;
};

export type ScoreResult = {
  patientRisk: number;       // 0–100 (higher = better = lower risk)
  evidenceDefensibility: number; // 0–100
  gmpAlignment: number;      // 0–100
  overallScore: number;      // 0–100
  narrative: string;
  defensibleCount: number;
  totalDecisions: number;
};

export function createInitialSession(): SessionState {
  return {
    startedAt: null,
    decisions: [],
    pressureResponses: [],
    currentSignalIndex: 0,
    isComplete: false,
  };
}

const BASE_SCORE = 50; // starting score for each dimension

export function computeScore(session: SessionState): ScoreResult {
  let patientRisk = BASE_SCORE;
  let evidenceDefensibility = BASE_SCORE;
  let gmpAlignment = BASE_SCORE;
  let defensibleCount = 0;

  for (const decision of session.decisions) {
    const signal = INTEGRITY_SIGNALS.find((s) => s.id === decision.signalId);
    if (!signal) continue;
    const option = signal.options.find((o) => o.id === decision.optionId);
    if (!option) continue;

    patientRisk = clamp(patientRisk + option.scoreImpact.patientRisk, 0, 100);
    evidenceDefensibility = clamp(
      evidenceDefensibility + option.scoreImpact.evidenceDefensibility,
      0,
      100
    );
    gmpAlignment = clamp(gmpAlignment + option.scoreImpact.gmpAlignment, 0, 100);

    if (option.isDefensible) defensibleCount++;
  }

  const overallScore = Math.round(
    (patientRisk * 0.4 + evidenceDefensibility * 0.35 + gmpAlignment * 0.25)
  );

  const narrative = buildNarrative(
    defensibleCount,
    session.decisions.length,
    patientRisk,
    evidenceDefensibility,
    gmpAlignment
  );

  return {
    patientRisk,
    evidenceDefensibility,
    gmpAlignment,
    overallScore,
    narrative,
    defensibleCount,
    totalDecisions: session.decisions.length,
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function buildNarrative(
  defensibleCount: number,
  total: number,
  patientRisk: number,
  evidenceDefensibility: number,
  gmpAlignment: number
): string {
  if (defensibleCount === total) {
    return "Every decision in this session was inspection-defensible. You protected the evidence chain and maintained patient safety as the primary priority under significant time and social pressure.";
  }

  if (defensibleCount >= total * 0.67) {
    if (evidenceDefensibility < 50) {
      return "Most decisions were defensible, but evidence traceability gaps were not fully resolved. An inspector reviewing this batch record would identify missing documentation as a data integrity concern.";
    }
    return "Strong overall performance. Most decisions prioritized evidence protection and patient safety. One or more decisions under pressure created a compliance gap that would require justification during inspection.";
  }

  if (patientRisk < 40) {
    return "The decisions made in this session created measurable patient risk exposure. When release pressure overrides evidence requirements, patient safety is the ultimate cost. These decisions would require significant remediation during inspection.";
  }

  return "Multiple compliance gaps were opened during this session. Pressure from production, social influence, and leadership authority affected decision quality. This is the pattern that leads to real data integrity failures — and why this training exists.";
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return "Defensible";
  if (score >= 60) return "At Risk";
  return "Compromised";
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-teal";
  if (score >= 60) return "text-amber";
  return "text-red";
}

export function getScoreBorderColor(score: number): string {
  if (score >= 80) return "border-teal";
  if (score >= 60) return "border-amber";
  return "border-red";
}
