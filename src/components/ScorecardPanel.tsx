"use client";

import Link from "next/link";
import { ScoreResult, getScoreLabel, getScoreColor, getScoreBorderColor } from "@/lib/engine";
import { BATCH_CONTEXT } from "@/data/scenario";

type MetricCard = {
  label: string;
  score: number;
  description: string;
};

type Props = {
  result: ScoreResult;
};

export default function ScorecardPanel({ result }: Props) {
  const metrics: MetricCard[] = [
    {
      label: "Patient Risk Exposure",
      score: result.patientRisk,
      description:
        "Reflects how well your decisions protected patient safety throughout the evidence chain.",
    },
    {
      label: "Evidence Chain Strength",
      score: result.evidenceDefensibility,
      description:
        "Measures the completeness and traceability of documentation required for a defensible batch record.",
    },
    {
      label: "GMP Alignment",
      score: result.gmpAlignment,
      description:
        "Evaluates how consistently your actions aligned with ALCOA+ principles and site SOPs.",
    },
    {
      label: "Decision Defensibility",
      score: result.overallScore,
      description:
        "Overall inspection readiness signal — would your decisions hold up under regulatory scrutiny?",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-slide-up">
      {/* Header */}
      <div className="mb-8">
        <p className="text-caption text-text-disabled uppercase tracking-widest mb-2">
          Mission Complete — {BATCH_CONTEXT.batchId}
        </p>
        <h1 className="text-h2 font-semibold text-text-primary mb-2">
          Integrity Scorecard
        </h1>
        <p className="text-body text-text-secondary">
          {result.defensibleCount} of {result.totalDecisions} decisions were
          inspection-defensible.
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={`bg-slate rounded-lg border-l-4 p-5 ${getScoreBorderColor(m.score)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-caption text-text-disabled uppercase tracking-wider">
                {m.label}
              </p>
              <span
                className={`text-h3 font-semibold font-mono ${getScoreColor(m.score)}`}
              >
                {m.score}
              </span>
            </div>
            <div className="h-1 bg-graphite rounded-full mb-3">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${m.score}%`,
                  backgroundColor:
                    m.score >= 80
                      ? "#19E3B1"
                      : m.score >= 60
                      ? "#F5A524"
                      : "#E5484D",
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-caption text-text-secondary">{m.description}</p>
              <span
                className={`ml-3 shrink-0 text-caption font-semibold ${getScoreColor(m.score)}`}
              >
                {getScoreLabel(m.score)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Behavioral insight */}
      <div className="bg-graphite rounded-lg p-6 mb-6 border border-slate">
        <p className="text-caption text-text-disabled uppercase tracking-wider mb-3">
          Behavioral insight
        </p>
        <p className="text-body text-text-secondary leading-relaxed">
          {result.narrative}
        </p>
      </div>

      {/* Reflection prompt */}
      <div className="bg-slate rounded-lg p-6 mb-8 border border-graphite">
        <p className="text-caption text-text-disabled uppercase tracking-wider mb-2">
          Reflection
        </p>
        <p className="text-body text-text-primary font-medium">
          What would you do differently if faced with the same pressure events?
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/mission"
          className="flex-1 text-center py-3 px-6 rounded font-semibold text-body bg-graphite text-text-primary hover:bg-slate border border-text-disabled transition-all duration-150"
        >
          Run Again
        </Link>
        <Link
          href="/leadership"
          className="flex-1 text-center py-3 px-6 rounded font-semibold text-body bg-teal text-navy hover:bg-teal/90 transition-all duration-150"
        >
          Share with Leadership
        </Link>
      </div>
    </div>
  );
}
