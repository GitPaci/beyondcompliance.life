"use client";

import { useState } from "react";
import { INTEGRITY_SIGNALS } from "@/data/scenario";
import { useSession } from "@/lib/SessionContext";

type Props = {
  onComplete: () => void;
};

export default function ActionPanel({ onComplete }: Props) {
  const { session, recordDecision, advanceSignal } = useSession();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [consequence, setConsequence] = useState<string | null>(null);

  const currentSignal = INTEGRITY_SIGNALS[session.currentSignalIndex];

  if (!currentSignal) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
          <span className="text-teal text-2xl">✓</span>
        </div>
        <h3 className="text-h4 font-semibold text-text-primary mb-2">
          All signals reviewed
        </h3>
        <p className="text-body text-text-secondary mb-6">
          You have addressed all integrity challenges in this batch record.
          Proceed to your scorecard.
        </p>
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-teal text-navy font-semibold rounded text-body transition-all duration-150 hover:bg-teal/90"
        >
          View Integrity Scorecard
        </button>
      </div>
    );
  }

  const handleConfirm = () => {
    if (!selectedOptionId) return;
    const option = currentSignal.options.find((o) => o.id === selectedOptionId);
    if (!option) return;

    recordDecision({ signalId: currentSignal.id, optionId: selectedOptionId });
    setConsequence(option.consequence);
    setConfirmed(true);
  };

  const handleNext = () => {
    advanceSignal();
    setSelectedOptionId(null);
    setConfirmed(false);
    setConsequence(null);
  };

  return (
    <div className="flex flex-col h-full bg-slate rounded-lg border border-graphite overflow-hidden">
      {/* Signal header */}
      <div className="px-6 py-4 border-b border-graphite bg-navy shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase tracking-widest text-text-disabled">
            Signal {session.currentSignalIndex + 1} of {INTEGRITY_SIGNALS.length}
          </span>
        </div>
        <h2 className="text-h4 font-semibold text-amber">
          {currentSignal.title}
        </h2>
      </div>

      {/* Signal description */}
      <div className="px-6 py-4 border-b border-graphite shrink-0">
        <p className="text-body text-text-secondary leading-relaxed">
          {currentSignal.description}
        </p>
      </div>

      {/* Options */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {!confirmed ? (
          <>
            <p className="text-caption text-text-disabled uppercase tracking-wider mb-4">
              Select your action
            </p>
            {currentSignal.options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOptionId(option.id)}
                className={`w-full text-left px-4 py-4 rounded border transition-all duration-200 ${
                  selectedOptionId === option.id
                    ? "border-teal bg-teal/10 text-text-primary"
                    : "border-graphite hover:border-text-disabled bg-graphite/30 text-text-secondary hover:text-text-primary"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-150 ${
                      selectedOptionId === option.id
                        ? "border-teal bg-teal"
                        : "border-text-disabled"
                    }`}
                  >
                    {selectedOptionId === option.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-navy" />
                    )}
                  </div>
                  <span className="text-body">{option.label}</span>
                </div>
              </button>
            ))}
          </>
        ) : (
          <div className="animate-slide-up">
            <p className="text-caption text-text-disabled uppercase tracking-wider mb-3">
              Decision recorded
            </p>
            <div className="px-4 py-4 rounded border border-graphite bg-graphite/30 mb-4">
              <p className="text-caption text-text-disabled mb-1">Your decision:</p>
              <p className="text-body text-text-primary">
                {currentSignal.options.find((o) => o.id === selectedOptionId)?.label}
              </p>
            </div>
            <div className="px-4 py-4 rounded border border-graphite bg-navy">
              <p className="text-caption text-text-disabled uppercase tracking-wider mb-2">
                System response
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                {consequence}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer action */}
      <div className="px-6 py-4 border-t border-graphite bg-navy shrink-0">
        {!confirmed ? (
          <button
            onClick={handleConfirm}
            disabled={!selectedOptionId}
            className={`w-full py-3 rounded font-semibold text-body transition-all duration-150 ${
              selectedOptionId
                ? "bg-teal text-navy hover:bg-teal/90"
                : "bg-graphite text-text-disabled cursor-not-allowed"
            }`}
          >
            Confirm Decision
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded font-semibold text-body bg-graphite text-text-primary hover:bg-slate border border-text-disabled transition-all duration-150"
          >
            {session.currentSignalIndex + 1 < INTEGRITY_SIGNALS.length
              ? "Continue to Next Signal"
              : "Review Complete — View Scorecard"}
          </button>
        )}
      </div>
    </div>
  );
}
