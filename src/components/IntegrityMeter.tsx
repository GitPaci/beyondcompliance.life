"use client";

import { getScoreLabel } from "@/lib/engine";

type Props = {
  score: number; // 0–100
  size?: "sm" | "md";
};

export default function IntegrityMeter({ score, size = "md" }: Props) {
  const label = getScoreLabel(score);
  const color =
    score >= 80 ? "#19E3B1" : score >= 60 ? "#F5A524" : "#E5484D";

  const barWidth = `${score}%`;
  const isSmall = size === "sm";

  return (
    <div className={`flex items-center gap-${isSmall ? "2" : "3"}`}>
      <div
        className={`relative bg-graphite rounded-full overflow-hidden ${
          isSmall ? "w-20 h-1.5" : "w-28 h-2"
        }`}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{ width: barWidth, backgroundColor: color }}
        />
      </div>
      <span
        className={`font-mono font-medium tracking-wide ${
          isSmall ? "text-xs" : "text-caption"
        }`}
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
