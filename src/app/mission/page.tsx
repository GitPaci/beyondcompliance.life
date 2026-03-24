"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import MissionHeader from "@/components/MissionHeader";
import DocumentViewer from "@/components/DocumentViewer";
import ActionPanel from "@/components/ActionPanel";
import PressureOverlay from "@/components/PressureOverlay";
import { INTEGRITY_SIGNALS } from "@/data/scenario";
import { useSession } from "@/lib/SessionContext";

export default function MissionPage() {
  const router = useRouter();
  const { session, completeSession } = useSession();
  const [activePressureEventId, setActivePressureEventId] = useState<string | null>(null);

  const handlePressureEvent = useCallback((eventId: string) => {
    setActivePressureEventId(eventId);
  }, []);

  const handleDismissOverlay = useCallback(() => {
    setActivePressureEventId(null);
  }, []);

  const handleMissionComplete = () => {
    completeSession();
    router.push("/mission/complete");
  };

  const currentSignal = INTEGRITY_SIGNALS[session.currentSignalIndex];
  const activeDocId = currentSignal?.documentRef;

  return (
    <div className="flex flex-col h-screen bg-navy overflow-hidden">
      <MissionHeader onPressureEvent={handlePressureEvent} />

      {/* Mission briefing banner (first visit) */}
      {session.currentSignalIndex === 0 && session.decisions.length === 0 && (
        <div className="px-6 py-3 bg-graphite/60 border-b border-graphite shrink-0">
          <p className="text-caption text-text-secondary">
            <span className="text-teal font-semibold">Mission briefing: </span>
            Batch {" "}
            <span className="font-mono text-text-primary">BC-2024-0847</span>{" "}
            (Cardivax 40mg Tablets) is pending final release. Review the
            evidence documents and respond to each integrity signal. Your
            decisions will be evaluated for inspection defensibility.
          </p>
        </div>
      )}

      {/* Main layout */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-0">
        {/* Document viewer — 60% on desktop */}
        <div className="flex-1 md:w-[60%] overflow-hidden p-4 md:pl-6 md:pr-3 md:py-6">
          <DocumentViewer activeDocumentId={activeDocId} />
        </div>

        {/* Action panel — 40% on desktop */}
        <div className="h-[45vh] md:h-auto md:w-[40%] overflow-hidden p-4 md:pr-6 md:pl-3 md:py-6">
          <ActionPanel onComplete={handleMissionComplete} />
        </div>
      </div>

      {/* Pressure overlay */}
      {activePressureEventId && (
        <PressureOverlay
          eventId={activePressureEventId}
          onDismiss={handleDismissOverlay}
        />
      )}
    </div>
  );
}
