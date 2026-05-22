"use client";

import { m } from "framer-motion";
import type { ComponentType } from "react";
import type { IconProps } from "@tabler/icons-react";
import Link from "next/link";

/* ============================================================
   SERVICE VISUAL CARD
   Per-service unique visual card. Color-themed per service number.
   Richer than a flat icon-in-a-box — adds depth, brand glow,
   floating accents, animated background pattern.
   ============================================================ */

// Color palette per service number — gives each service a subtle visual
// signature beyond the global Flowtix blue.
const SERVICE_COLORS: Record<string, { primary: string; rgb: string; deco: "grid" | "rings" | "dots" | "lines" | "waves" }> = {
  "01": { primary: "#3B82F6", rgb: "59,130,246", deco: "rings" }, // AI Systems
  "02": { primary: "#10B981", rgb: "16,185,129", deco: "waves" }, // Automation
  "03": { primary: "#EC4899", rgb: "236,72,153", deco: "dots" }, // Design
  "04": { primary: "#8B5CF6", rgb: "139,92,246", deco: "grid" }, // Brand
  "05": { primary: "#F59E0B", rgb: "245,158,11", deco: "lines" }, // Web Dev
  "06": { primary: "#06B6D4", rgb: "6,182,212", deco: "rings" }, // AI Chatbots
  "07": { primary: "#A855F7", rgb: "168,85,247", deco: "dots" }, // Analytics
  "08": { primary: "#EF4444", rgb: "239,68,68", deco: "waves" }, // AI Content
  "09": { primary: "#14B8A6", rgb: "20,184,166", deco: "grid" }, // Consulting
  "10": { primary: "#F97316", rgb: "249,115,22", deco: "lines" }, // Training
};

function GridDeco({ rgb }: { rgb: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 40 + 20}
          y1={0}
          x2={i * 40 + 20}
          y2={160}
          stroke={`rgba(${rgb},0.08)`}
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * 40 + 20}
          x2={200}
          y2={i * 40 + 20}
          stroke={`rgba(${rgb},0.08)`}
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

function RingsDeco({ rgb }: { rgb: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[20, 40, 60, 80].map((r) => (
        <m.circle
          key={r}
          cx={100}
          cy={80}
          r={r}
          fill="none"
          stroke={`rgba(${rgb},0.15)`}
          strokeWidth="0.5"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: r * 0.005, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  );
}

function DotsDeco({ rgb }: { rgb: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(rgba(${rgb},0.18) 1px, transparent 1px)`,
        backgroundSize: "18px 18px",
        backgroundPosition: "9px 9px",
      }}
    />
  );
}

function LinesDeco({ rgb }: { rgb: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[40, 60, 80, 100, 120].map((y, i) => (
        <line
          key={y}
          x1={20}
          y1={y}
          x2={180}
          y2={y}
          stroke={`rgba(${rgb},${0.04 + i * 0.04})`}
          strokeWidth="0.6"
        />
      ))}
    </svg>
  );
}

function WavesDeco({ rgb }: { rgb: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[60, 80, 100].map((y, i) => (
        <path
          key={y}
          d={`M 0 ${y} Q 50 ${y - 12} 100 ${y} T 200 ${y}`}
          fill="none"
          stroke={`rgba(${rgb},${0.15 - i * 0.04})`}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

type Props = {
  number: string;
  title: string;
  short: string;
  href: string;
  icon: ComponentType<IconProps>;
};

export function ServiceVisual({ number, title, short, href, icon: Icon }: Props) {
  const color = SERVICE_COLORS[number] ?? SERVICE_COLORS["01"];
  const { primary, rgb, deco } = color;

  return (
    <Link
      href={href}
      className="group block relative rounded-2xl aspect-[5/4] overflow-hidden border transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, rgba(${rgb},0.04) 0%, #0a0a0a 60%)`,
        borderColor: "#1a1a1a",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${rgb},0.40)`;
        e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(${rgb},0.10)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1a1a1a";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Brand-color radial */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none opacity-100 group-hover:opacity-150 transition-opacity"
        style={{
          top: "-20%",
          right: "-20%",
          width: "80%",
          height: "80%",
          background: `radial-gradient(circle, rgba(${rgb},0.20), transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Decoration overlay */}
      {deco === "grid" && <GridDeco rgb={rgb} />}
      {deco === "rings" && <RingsDeco rgb={rgb} />}
      {deco === "dots" && <DotsDeco rgb={rgb} />}
      {deco === "lines" && <LinesDeco rgb={rgb} />}
      {deco === "waves" && <WavesDeco rgb={rgb} />}

      {/* Service number (large, ghosted, top-right) */}
      <div
        className="absolute top-5 right-5 text-[10px] font-mono tracking-wider"
        style={{ color: `rgba(${rgb},0.6)` }}
      >
        / {number}
      </div>

      {/* Service icon — centered, large, in brand-tinted frame */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-10">
        <m.div
          className="relative inline-flex items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-105"
          style={{
            width: 80,
            height: 80,
            background: `rgba(${rgb},0.08)`,
            borderColor: `rgba(${rgb},0.25)`,
            boxShadow: `0 0 30px rgba(${rgb},0.15)`,
          }}
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle, rgba(${rgb},0.18), transparent 70%)`,
              opacity: 0.7,
            }}
          />
          <Icon
            size={36}
            stroke={1.5}
            className="relative transition-colors duration-300"
            style={{ color: primary }}
          />
          {/* Corner accent dots */}
          <span
            className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full"
            style={{ background: primary, boxShadow: `0 0 6px ${primary}` }}
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full opacity-50"
            style={{ background: primary }}
            aria-hidden="true"
          />
        </m.div>

        {/* Service title hint */}
        <div
          className="mt-6 text-center"
          style={{ color: primary }}
        >
          <div className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-80">
            Service {number}
          </div>
          <div
            className="text-sm sm:text-base font-semibold mt-1.5 max-w-[200px]"
            style={{ color: "#ffffff", opacity: 0.95 }}
          >
            {title.split(" & ")[0]}
          </div>
        </div>
      </div>

      {/* Bottom highlight gradient line on hover */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
        }}
      />
    </Link>
  );
}

// Export color helper for use elsewhere
export function getServiceColor(number: string) {
  return SERVICE_COLORS[number] ?? SERVICE_COLORS["01"];
}
