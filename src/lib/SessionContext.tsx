"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import {
  SessionState,
  Decision,
  PressureResponse,
  createInitialSession,
  computeScore,
  ScoreResult,
} from "@/lib/engine";

type SessionContextType = {
  session: SessionState;
  score: ScoreResult;
  startSession: () => void;
  recordDecision: (decision: Omit<Decision, "timestamp">) => void;
  recordPressureResponse: (response: Omit<PressureResponse, "timestamp">) => void;
  advanceSignal: () => void;
  completeSession: () => void;
  resetSession: () => void;
  elapsedSeconds: () => number;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<SessionState>(createInitialSession());

  const elapsedSeconds = useCallback(() => {
    if (!session.startedAt) return 0;
    return Math.floor((Date.now() - session.startedAt) / 1000);
  }, [session.startedAt]);

  const score = computeScore(session);

  const startSession = useCallback(() => {
    setSession((prev) => ({ ...prev, startedAt: Date.now() }));
  }, []);

  const recordDecision = useCallback(
    (decision: Omit<Decision, "timestamp">) => {
      setSession((prev) => ({
        ...prev,
        decisions: [
          ...prev.decisions,
          { ...decision, timestamp: elapsedSeconds() },
        ],
      }));
    },
    [elapsedSeconds]
  );

  const recordPressureResponse = useCallback(
    (response: Omit<PressureResponse, "timestamp">) => {
      setSession((prev) => ({
        ...prev,
        pressureResponses: [
          ...prev.pressureResponses,
          { ...response, timestamp: elapsedSeconds() },
        ],
      }));
    },
    [elapsedSeconds]
  );

  const advanceSignal = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      currentSignalIndex: prev.currentSignalIndex + 1,
    }));
  }, []);

  const completeSession = useCallback(() => {
    setSession((prev) => ({ ...prev, isComplete: true }));
  }, []);

  const resetSession = useCallback(() => {
    setSession(createInitialSession());
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        score,
        startSession,
        recordDecision,
        recordPressureResponse,
        advanceSignal,
        completeSession,
        resetSession,
        elapsedSeconds,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextType {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}
