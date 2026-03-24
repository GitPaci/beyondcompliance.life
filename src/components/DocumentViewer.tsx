"use client";

import { useState } from "react";
import { EVIDENCE_DOCUMENTS, EvidenceDocument } from "@/data/scenario";

type Props = {
  activeDocumentId?: string;
  highlightedAnomalyLine?: number;
};

export default function DocumentViewer({
  activeDocumentId,
  highlightedAnomalyLine,
}: Props) {
  const [selectedDocId, setSelectedDocId] = useState(
    activeDocumentId ?? EVIDENCE_DOCUMENTS[0].id
  );

  const selectedDoc: EvidenceDocument =
    EVIDENCE_DOCUMENTS.find((d) => d.id === selectedDocId) ??
    EVIDENCE_DOCUMENTS[0];

  const anomalyLines = new Set(
    selectedDoc.anomalies.map((a) => a.lineIndex)
  );

  const typeLabel: Record<EvidenceDocument["type"], string> = {
    "batch-record": "Batch Record",
    "lab-log": "Lab Log",
    "deviation-report": "Deviation",
    "sign-off-sheet": "Sign-Off",
  };

  return (
    <div className="flex flex-col h-full bg-slate rounded-lg overflow-hidden border border-graphite">
      {/* Document tabs */}
      <div className="flex overflow-x-auto border-b border-graphite bg-navy shrink-0">
        {EVIDENCE_DOCUMENTS.map((doc) => (
          <button
            key={doc.id}
            onClick={() => setSelectedDocId(doc.id)}
            className={`shrink-0 px-4 py-3 text-caption border-r border-graphite transition-colors duration-150 text-left ${
              selectedDocId === doc.id
                ? "bg-slate text-text-primary border-b-2 border-b-teal"
                : "text-text-secondary hover:text-text-primary hover:bg-graphite"
            }`}
          >
            <span className="block text-xs text-text-disabled uppercase tracking-wider mb-0.5">
              {typeLabel[doc.type]}
            </span>
            <span className="block font-medium truncate max-w-[140px]">
              {doc.title}
            </span>
          </button>
        ))}
      </div>

      {/* Document metadata */}
      <div className="px-6 py-3 border-b border-graphite bg-graphite shrink-0">
        <div className="flex flex-wrap gap-6 text-caption text-text-secondary">
          <span>
            <span className="text-text-disabled uppercase tracking-wider mr-1">
              Batch:
            </span>
            {selectedDoc.batchId}
          </span>
          <span>
            <span className="text-text-disabled uppercase tracking-wider mr-1">
              Date:
            </span>
            {selectedDoc.date}
          </span>
          <span>
            <span className="text-text-disabled uppercase tracking-wider mr-1">
              Author:
            </span>
            {selectedDoc.author}
          </span>
        </div>
      </div>

      {/* Document content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="font-mono text-mono-md space-y-1">
          {selectedDoc.content.map((line, i) => {
            const isAnomaly = anomalyLines.has(i);
            const isHighlighted = highlightedAnomalyLine === i;
            return (
              <div key={i}>
                <div
                  className={`px-3 py-1 rounded transition-colors duration-200 ${
                    isHighlighted
                      ? "bg-red/10 border-l-2 border-red"
                      : isAnomaly
                      ? "bg-amber/5 border-l-2 border-amber"
                      : "border-l-2 border-transparent"
                  }`}
                >
                  <span
                    className={
                      line === "—"
                        ? "text-text-disabled"
                        : isHighlighted
                        ? "text-text-primary"
                        : isAnomaly
                        ? "text-amber"
                        : "text-text-primary"
                    }
                  >
                    {line === "—" ? (
                      <hr className="border-graphite my-1" />
                    ) : (
                      line
                    )}
                  </span>
                </div>
                {isAnomaly && (
                  <div className="mx-3 mb-2 mt-1 px-3 py-2 bg-amber/10 rounded text-caption text-amber border border-amber/20">
                    <span className="font-semibold uppercase tracking-wider text-xs mr-2">
                      Integrity Signal:
                    </span>
                    {selectedDoc.anomalies.find((a) => a.lineIndex === i)?.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {selectedDoc.anomalies.length === 0 && (
          <p className="mt-6 text-caption text-text-disabled italic">
            No integrity signals identified in this document.
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-2 border-t border-graphite bg-navy shrink-0">
        <p className="text-caption text-text-disabled">
          {selectedDoc.anomalies.length > 0
            ? `${selectedDoc.anomalies.length} integrity signal${selectedDoc.anomalies.length > 1 ? "s" : ""} flagged in this document.`
            : "Awaiting integrity signal review."}
        </p>
      </div>
    </div>
  );
}
