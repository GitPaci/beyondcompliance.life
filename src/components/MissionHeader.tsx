"use client";

import { useEffect, useState } from "react";
import { BATCH_CONTEXT, INTEGRITY_SIGNALS } from "@/data/scenario";
import IntegrityMeter from "@/components/IntegrityMeter";
import { useSession } from "@/lib/SessionContext";

const MISSION_DURATION = 720; // 12 minutes in seconds

type Props = {
  onPressureEvent: (eventId: string) => void;
};

export default function MissionHeader({ onPressureEvent }: Props) {
  const { session, score, startSession } = useSession();
  const [elapsed, setElapsed] = useState(0);
  const [firedEvents, setFiredEvents] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!session.startedAt) {
      startSession();
    }
  }, [session.startedAt, startSession]);

  useEffect(() => {
    if (!session.startedAt) return;
    const interval = setInterval(() => {
      const secs = Math.floor((Date.now() - session.startedAt!) / 1000);
      setElapsed(secs);

      // Import pressure events dynamically to avoid circular dep
      import("@/data/scenario").then(({ PRESSURE_EVENTS }) => {
        for (const event of PRESSURE_EVENTS) {
          if (secs >= event.triggerSeconds && !firedEvents.has(event.id)) {
            setFiredEvents((prev) => new Set(prev).add(event.id));
            onPressureEvent(event.id);
          }
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [session.startedAt, firedEvents, onPressureEvent]);

  const remaining = Math.max(MISSION_DURATION - elapsed, 0);
  const mins = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const secs = (remaining % 60).toString().padStart(2, "0");

  const progress = session.currentSignalIndex / INTEGRITY_SIGNALS.length;
  const progressPct = `${Math.round(progress * 100)}%`;

  return (
    <header className="sticky top-0 z-40 bg-slate border-b border-graphite">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Batch context */}
        <div className="flex items-center gap-6">
          <div>
            <p className="text-caption text-text-secondary uppercase tracking-widest">
              Batch ID
            </p>
            <p className="text-h4 font-mono text-text-primary">
              {BATCH_CONTEXT.batchId}
            </p>
          </div>
          <div className="hidden md:block h-8 w-px bg-graphite" />
          <div className="hidden md:block">
            <p className="text-caption text-text-secondary uppercase tracking-widest">
              Product
            </p>
            <p className="text-caption text-text-primary">
              {BATCH_CONTEXT.product}
            </p>
          </div>
          <div className="hidden lg:block h-8 w-px bg-graphite" />
          <div className="hidden lg:block">
            <p className="text-caption text-text-secondary uppercase tracking-widest">
              Stage
            </p>
            <p className="text-caption text-text-primary">
              {BATCH_CONTEXT.stage}
            </p>
          </div>
        </div>

        {/* Right: Timer + Integrity */}
        <div className="flex items-center gap-6">
          <IntegrityMeter score={score.overallScore} size="sm" />
          <div className="h-8 w-px bg-graphite" />
          <div className="text-right">
            <p className="text-caption text-text-secondary uppercase tracking-widest">
              Time Remaining
            </p>
            <p
              className={`text-h4 font-mono font-semibold ${
                remaining <= 120 ? "text-red" : "text-text-primary"
              }`}
            >
              {mins}:{secs}
            </p>
          </div>
        </div>
      </div>

      {/* Signal progress bar */}
      <div className="h-0.5 bg-graphite">
        <div
          className="h-full bg-teal transition-all duration-500"
          style={{ width: progressPct }}
        />
      </div>
    </header>
  );
}
