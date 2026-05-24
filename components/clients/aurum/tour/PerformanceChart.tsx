"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import {
  GOLD,
  GOLD_DEEP,
  CHART_SERIES,
  PERIOD_LABELS,
  type ChartPeriod,
} from "./_shared";

/**
 * SVG performance chart used by Dashboard, Client Portal, and the report preview.
 * Smooth cubic bezier path + amber gradient fill + animated path-length on
 * period change.
 */

type Props = {
  period: ChartPeriod;
  baseValue: number; // dollar amount that the curve normalizes to (the "1.0" point)
  height?: number;
  compact?: boolean;
};

const PAD_L = 30;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 22;

/** Build a smooth cubic-bezier path through points */
function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M${points[0].x},${points[0].y}`;
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const midX = (p0.x + p1.x) / 2;
    d += ` C${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
  }
  return d;
}

export function PerformanceChart({ period, baseValue, height = 144, compact = false }: Props) {
  const data = CHART_SERIES[period];
  const labels = PERIOD_LABELS[period];

  const { pathLine, pathArea, dotX, dotY, yLabels, viewW, viewH } = useMemo(() => {
    const w = 600;
    const h = height;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const innerW = w - PAD_L - PAD_R;
    const innerH = h - PAD_T - PAD_B;

    const points = data.map((v, i) => {
      const x = PAD_L + (i / (data.length - 1)) * innerW;
      const y = PAD_T + innerH * (1 - (v - min) / range);
      return { x, y };
    });

    const line = smoothPath(points);
    const last = points[points.length - 1];
    const first = points[0];
    const area = `${line} L${last.x},${PAD_T + innerH} L${first.x},${PAD_T + innerH} Z`;

    // Y labels (3 stops: low, mid, high)
    const fmt = (v: number) => {
      const dollars = baseValue * v;
      if (dollars >= 1_000_000) return `$${(dollars / 1_000_000).toFixed(2)}M`;
      if (dollars >= 1_000) return `$${(dollars / 1_000).toFixed(0)}K`;
      return `$${dollars.toFixed(0)}`;
    };
    const yLabels = [max, (max + min) / 2, min].map((v, i) => ({
      label: fmt(v),
      y: PAD_T + innerH * (i / 2),
    }));

    return {
      pathLine: line,
      pathArea: area,
      dotX: last.x,
      dotY: last.y,
      yLabels,
      viewW: w,
      viewH: h,
    };
  }, [data, baseValue, height]);

  return (
    <div className="relative w-full" style={{ height }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="none"
        className="block"
      >
        <defs>
          <linearGradient id="aurumGoldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.22" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal grid */}
        {yLabels.map((row, i) => (
          <line
            key={i}
            x1={PAD_L}
            y1={row.y}
            x2={viewW - PAD_R}
            y2={row.y}
            stroke="rgba(42,29,6,0.45)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        ))}

        {/* area fill */}
        <m.path
          key={`area-${period}`}
          d={pathArea}
          fill="url(#aurumGoldGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* line */}
        <m.path
          key={`line-${period}`}
          d={pathLine}
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* current value dot */}
        <circle
          cx={dotX}
          cy={dotY}
          r="6"
          fill={GOLD}
          opacity="0.18"
        />
        <circle cx={dotX} cy={dotY} r="3.5" fill={GOLD} />
      </svg>

      {/* Y-axis labels (left) */}
      {!compact && (
        <div className="absolute left-0 top-0 h-full pointer-events-none">
          {yLabels.map((row, i) => (
            <div
              key={i}
              className="absolute font-mono"
              style={{
                top: `${(row.y / viewH) * 100}%`,
                transform: "translateY(-50%)",
                color: GOLD_DEEP,
                fontSize: 9,
                lineHeight: 1,
              }}
            >
              {row.label}
            </div>
          ))}
        </div>
      )}

      {/* X-axis labels */}
      {!compact && (
        <div
          className="absolute left-0 right-0 flex justify-between font-mono pointer-events-none"
          style={{
            paddingLeft: `${(PAD_L / viewW) * 100}%`,
            paddingRight: `${(PAD_R / viewW) * 100}%`,
            bottom: 2,
            color: GOLD_DEEP,
            fontSize: 9,
          }}
        >
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}
