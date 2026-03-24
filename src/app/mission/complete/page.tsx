"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ScorecardPanel from "@/components/ScorecardPanel";
import { useSession } from "@/lib/SessionContext";

export default function MissionCompletePage() {
  const router = useRouter();
  const { session, score } = useSession();

  // Redirect if mission was not completed properly
  useEffect(() => {
    if (!session.isComplete && session.decisions.length === 0) {
      router.replace("/mission");
    }
  }, [session.isComplete, session.decisions.length, router]);

  if (!session.isComplete && session.decisions.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-navy">
      {/* Minimal nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-graphite">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal" />
          <span className="text-body font-semibold text-text-primary">
            BeyondCompliance.life
          </span>
        </div>
      </nav>

      <ScorecardPanel result={score} />
    </div>
  );
}
