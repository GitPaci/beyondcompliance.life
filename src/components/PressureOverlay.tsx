"use client";

import { PRESSURE_EVENTS } from "@/data/scenario";
import { useSession } from "@/lib/SessionContext";

type Props = {
  eventId: string;
  onDismiss: () => void;
};

const typeIcon: Record<string, string> = {
  email: "✉",
  im: "💬",
  call: "📞",
};

const toneLabel: Record<string, string> = {
  urgent: "URGENT",
  social: "MESSAGE",
  authoritative: "VOICEMAIL",
};

export default function PressureOverlay({ eventId, onDismiss }: Props) {
  const { recordPressureResponse } = useSession();
  const event = PRESSURE_EVENTS.find((e) => e.id === eventId);

  if (!event) return null;

  const handleResponse = (responseId: string) => {
    recordPressureResponse({ eventId: event.id, responseId });
    onDismiss();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg mx-4 bg-slate border border-amber/40 rounded-lg shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-graphite bg-amber/5">
          <span className="text-2xl">{typeIcon[event.type]}</span>
          <div className="flex-1">
            <span className="text-xs text-amber uppercase tracking-widest font-semibold">
              {toneLabel[event.emotionalTone]} — {event.type.toUpperCase()}
            </span>
            <p className="text-body font-semibold text-text-primary mt-0.5">
              {event.sender}
            </p>
          </div>
          <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
        </div>

        {/* Subject */}
        <div className="px-6 py-3 border-b border-graphite">
          <p className="text-caption text-text-disabled uppercase tracking-wider mb-1">
            Subject
          </p>
          <p className="text-body text-text-primary font-medium">{event.subject}</p>
        </div>

        {/* Body */}
        <div className="px-6 py-5 border-b border-graphite">
          <p className="text-body text-text-secondary leading-relaxed">{event.body}</p>
        </div>

        {/* Response options */}
        <div className="px-6 py-4">
          <p className="text-caption text-text-disabled uppercase tracking-wider mb-3">
            Your response — required
          </p>
          <div className="space-y-2">
            {event.responseOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleResponse(opt.id)}
                className="w-full text-left px-4 py-3 rounded border border-graphite bg-graphite/40 text-text-secondary hover:border-teal hover:text-text-primary hover:bg-teal/5 transition-all duration-150 text-body"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-4">
          <p className="text-caption text-text-disabled italic">
            You must respond before continuing the review.
          </p>
        </div>
      </div>
    </div>
  );
}
