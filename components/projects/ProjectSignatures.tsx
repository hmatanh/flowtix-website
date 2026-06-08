"use client";

import { m } from "framer-motion";

/* ============================================================
   PROJECT SIGNATURES
   Per-project decorative SVG patterns that give each case study
   page its own visual character - beyond just brand color.
   Each pattern is placed as a subtle background flourish in the hero.
   ============================================================ */

type Props = { className?: string };

// KOVA - property map grid with pins
export function KovaSignature({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kova-sig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Map grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 50}
          y1={0}
          x2={i * 50}
          y2={200}
          stroke="rgba(14,165,233,0.06)"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * 50}
          x2={400}
          y2={i * 50}
          stroke="rgba(14,165,233,0.06)"
          strokeWidth="0.5"
        />
      ))}
      {/* Road curve */}
      <path
        d="M 0 130 Q 100 80 200 110 T 400 60"
        stroke="rgba(14,165,233,0.18)"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Property pins */}
      {[
        { x: 90, y: 80, primary: true },
        { x: 180, y: 130, primary: false },
        { x: 290, y: 90, primary: false },
        { x: 340, y: 50, primary: true },
      ].map((p, i) => (
        <m.g
          key={i}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
        >
          <circle
            cx={p.x}
            cy={p.y}
            r={p.primary ? 5 : 3}
            fill="#0EA5E9"
            opacity={p.primary ? 0.9 : 0.5}
          />
          <circle
            cx={p.x}
            cy={p.y}
            r={p.primary ? 10 : 6}
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="0.5"
            opacity={0.3}
          />
        </m.g>
      ))}
    </svg>
  );
}

// SERŌ - calm concentric breathing circles
export function SeroSignature({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {[100, 80, 60, 40, 20].map((r, i) => (
        <m.circle
          key={r}
          cx={320}
          cy={100}
          r={r}
          fill="none"
          stroke="#10B981"
          strokeWidth="0.6"
          strokeOpacity={0.12 + (5 - i) * 0.04}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: [0.7, 1.02, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
      {/* Heartbeat line */}
      <m.path
        d="M 20 100 L 70 100 L 80 80 L 90 130 L 100 100 L 280 100"
        stroke="#10B981"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}

// AURUM - editorial gold lines (article rule + corner brackets)
export function AurumSignature({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Top-right bracket */}
      <m.g
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <line
          x1={380}
          y1={20}
          x2={380}
          y2={60}
          stroke="#F59E0B"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <line
          x1={340}
          y1={20}
          x2={380}
          y2={20}
          stroke="#F59E0B"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </m.g>
      {/* Bottom-left bracket */}
      <m.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <line
          x1={20}
          y1={140}
          x2={20}
          y2={180}
          stroke="#F59E0B"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <line
          x1={20}
          y1={180}
          x2={60}
          y2={180}
          stroke="#F59E0B"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </m.g>
      {/* Editorial horizontal rule */}
      <m.line
        x1={60}
        y1={100}
        x2={340}
        y2={100}
        stroke="#F59E0B"
        strokeWidth="0.5"
        strokeOpacity="0.18"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      {/* Decorative dots on rule */}
      {[120, 200, 280].map((x) => (
        <circle
          key={x}
          cx={x}
          cy={100}
          r={1.5}
          fill="#F59E0B"
          opacity={0.4}
        />
      ))}
    </svg>
  );
}

// DRFT - bold topography contour lines
export function DrftSignature({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Topo contour lines */}
      {[
        "M 0 80 Q 60 70 120 85 T 240 75 T 400 90",
        "M 0 100 Q 60 90 120 105 T 240 95 T 400 110",
        "M 0 120 Q 60 110 120 125 T 240 115 T 400 130",
        "M 0 140 Q 60 130 120 145 T 240 135 T 400 150",
        "M 0 160 Q 60 150 120 165 T 240 155 T 400 170",
      ].map((d, i) => (
        <m.path
          key={i}
          d={d}
          stroke="#DC2626"
          strokeWidth="0.8"
          strokeOpacity={0.04 + i * 0.04}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}
      {/* Coordinate marker */}
      <m.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <circle cx={320} cy={110} r="3" fill="#DC2626" />
        <line
          x1={320}
          y1={105}
          x2={320}
          y2={90}
          stroke="#DC2626"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />
        <line
          x1={325}
          y1={110}
          x2={340}
          y2={110}
          stroke="#DC2626"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />
      </m.g>
    </svg>
  );
}

// LINX - constellation of nodes connected by thin lines
export function LinxSignature({ className = "" }: Props) {
  const nodes = [
    { x: 60, y: 60 },
    { x: 140, y: 90 },
    { x: 220, y: 50 },
    { x: 290, y: 110 },
    { x: 360, y: 70 },
    { x: 200, y: 150 },
    { x: 100, y: 140 },
    { x: 320, y: 160 },
  ];
  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 6],
    [3, 5],
    [3, 7],
    [5, 7],
  ];
  return (
    <svg
      viewBox="0 0 400 200"
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {connections.map(([a, b], i) => (
        <m.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#8B5CF6"
          strokeWidth="0.6"
          strokeOpacity="0.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
        />
      ))}
      {nodes.map((n, i) => (
        <m.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + i * 0.06,
            ease: "backOut",
          }}
        >
          <circle cx={n.x} cy={n.y} r={2} fill="#8B5CF6" opacity={0.7} />
          <circle
            cx={n.x}
            cy={n.y}
            r={5}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="0.5"
            opacity={0.3}
          />
        </m.g>
      ))}
    </svg>
  );
}

export function ProjectSignature({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case "kova":
      return <KovaSignature className={className} />;
    case "sero":
      return <SeroSignature className={className} />;
    case "aurum":
      return <AurumSignature className={className} />;
    case "drft":
      return <DrftSignature className={className} />;
    case "linx":
      return <LinxSignature className={className} />;
    default:
      return null;
  }
}
