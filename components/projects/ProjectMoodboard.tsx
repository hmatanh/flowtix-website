"use client";

import { m } from "framer-motion";
import type { Project } from "@/lib/projects";

/* ============================================================
   PROJECT MOODBOARD
   A per-project visual moments grid. Each project gets a unique
   composition of "imagery" suggested through gradients and
   geometric overlays - no external photos, no copyright issues,
   no brand-flat sameness.
   ============================================================ */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type MoodTile = {
  label: string;
  caption: string;
  visual: string; // CSS background
  decoration?: "grid" | "rings" | "lines" | "dots" | "topo";
  span?: "small" | "wide" | "tall";
};

const KOVA_MOODBOARD: MoodTile[] = [
  {
    label: "Townhouse · Westside",
    caption: "Brick · 3-bed · 92m²",
    visual: "linear-gradient(135deg, #7c4a2e 0%, #c08660 35%, #4a2a18 100%)",
    decoration: "grid",
    span: "wide",
  },
  {
    label: "Glass loft · Midtown",
    caption: "Modern · 2-bed · 78m²",
    visual: "linear-gradient(160deg, #1a3a52 0%, #5a93b8 40%, #0c2030 100%)",
    decoration: "lines",
  },
  {
    label: "Lake property",
    caption: "Cottage · 4-bed · 140m²",
    visual: "linear-gradient(150deg, #2a4a3a 0%, #6a9a82 40%, #1a3022 100%)",
    decoration: "grid",
  },
  {
    label: "Penthouse view",
    caption: "Skyline · 3-bed · 110m²",
    visual: "linear-gradient(180deg, #2a4a6a 0%, #5a93b8 30%, #f5b577 90%)",
    decoration: "lines",
    span: "wide",
  },
];

const SERO_MOODBOARD: MoodTile[] = [
  {
    label: "Calm clinic light",
    caption: "Morning patient flow",
    visual:
      "linear-gradient(135deg, #051a12 0%, #1a4a3a 40%, #6a9a82 90%)",
    decoration: "rings",
    span: "wide",
  },
  {
    label: "Waiting space",
    caption: "Designed for ease",
    visual:
      "linear-gradient(160deg, #e6f4ed 0%, #b8d8c8 50%, #6a9a82 100%)",
    decoration: "dots",
  },
  {
    label: "Care moment",
    caption: "Practitioner ↔ patient",
    visual:
      "linear-gradient(150deg, #1a4a3a 0%, #2c6a4a 40%, #051a12 100%)",
    decoration: "rings",
  },
  {
    label: "Recovery + rest",
    caption: "What happens after",
    visual:
      "linear-gradient(180deg, #d8e8e0 0%, #8aa896 50%, #051a12 100%)",
    decoration: "dots",
    span: "wide",
  },
];

const AURUM_MOODBOARD: MoodTile[] = [
  {
    label: "Portfolio in motion",
    caption: "YTD performance · +11.7%",
    visual:
      "linear-gradient(135deg, #1a0e02 0%, #4a2a08 40%, #8a5a18 70%, #F59E0B 100%)",
    decoration: "lines",
    span: "wide",
  },
  {
    label: "Asset allocation",
    caption: "Balanced · gold tier",
    visual:
      "linear-gradient(160deg, #2a1a08 0%, #6a4a18 50%, #C2841C 100%)",
    decoration: "lines",
  },
  {
    label: "Quarterly review",
    caption: "Editorial · printed",
    visual:
      "linear-gradient(140deg, #f5ecda 0%, #d4b88a 50%, #8a5a2a 100%)",
    decoration: "lines",
  },
  {
    label: "Generational wealth",
    caption: "The long horizon",
    visual:
      "linear-gradient(180deg, #1a0e02 0%, #2a1a08 30%, #F59E0B 100%)",
    decoration: "dots",
    span: "wide",
  },
];

const DRFT_MOODBOARD: MoodTile[] = [
  {
    label: "Trail Series · Spring",
    caption: "Drop Vol. 03",
    visual:
      "linear-gradient(135deg, #c25420 0%, #5e2a10 60%, #2a140a 100%)",
    decoration: "topo",
    span: "wide",
  },
  {
    label: "Ridge Pant",
    caption: "Stretch shell · 2 colorways",
    visual:
      "linear-gradient(160deg, #7c8a5c 0%, #4a5238 50%, #2a3022 100%)",
    decoration: "topo",
  },
  {
    label: "Cascade Hoodie",
    caption: "Midweight · best seller",
    visual:
      "linear-gradient(140deg, #c4a374 0%, #8a6a44 55%, #4a3624 100%)",
    decoration: "lines",
  },
  {
    label: "Drift Lifestyle",
    caption: "On the trail, off the grid",
    visual:
      "linear-gradient(180deg, #1a0e02 0%, #8a3a10 40%, #f5a060 100%)",
    decoration: "topo",
    span: "wide",
  },
];

const LINX_MOODBOARD: MoodTile[] = [
  {
    label: "Brew Republic · ID",
    caption: "Coffee · craft DTC",
    visual:
      "linear-gradient(135deg, #c47edb 0%, #6a3b8c 60%, #2a1438 100%)",
    decoration: "dots",
    span: "wide",
  },
  {
    label: "NordFlex · campaign",
    caption: "Performance + brand",
    visual:
      "linear-gradient(160deg, #5fb8e8 0%, #2c5a8a 50%, #0c2440 100%)",
    decoration: "dots",
  },
  {
    label: "Starfall · launch",
    caption: "Drink · seasonal push",
    visual:
      "linear-gradient(140deg, #f4a261 0%, #9c5024 50%, #2a1a08 100%)",
    decoration: "dots",
  },
  {
    label: "Pavilion · rebrand",
    caption: "Hospitality · refresh",
    visual:
      "linear-gradient(180deg, #a7c4a0 0%, #4c7048 50%, #0c1810 100%)",
    decoration: "dots",
    span: "wide",
  },
];

const MOODBOARDS: Record<string, MoodTile[]> = {
  kova: KOVA_MOODBOARD,
  sero: SERO_MOODBOARD,
  aurum: AURUM_MOODBOARD,
  drft: DRFT_MOODBOARD,
  linx: LINX_MOODBOARD,
};

const HEADLINES: Record<string, { kicker: string; title: string; sub: string }> = {
  kova: {
    kicker: "The world we built for",
    title: "Property. People. Place.",
    sub: "Every interface we designed lives in a city of real people moving through real homes. Here&apos;s the world that shaped the work.",
  },
  sero: {
    kicker: "The care we designed for",
    title: "Calm spaces. Calm screens.",
    sub: "A clinic where the software disappears so the conversation can happen. Here&apos;s the world the design serves.",
  },
  aurum: {
    kicker: "The wealth we serve",
    title: "Quiet sophistication. Loud results.",
    sub: "Decades of compounding deserve software that respects it. Here&apos;s the editorial vocabulary we built around.",
  },
  drft: {
    kicker: "The lifestyle we shipped",
    title: "Trail. Train. Anywhere.",
    sub: "Gear designed for people who don&apos;t separate weekday from weekend. Here&apos;s the world the brand lives in.",
  },
  linx: {
    kicker: "The clients we run with",
    title: "23 brands. One creative engine.",
    sub: "Every client gets the same care. Every campaign moves on the same operational backbone. Here&apos;s the constellation we built.",
  },
};

// Decoration overlays
function GridDeco() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  );
}
function RingsDeco({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[15, 25, 35].map((r) => (
        <circle
          key={r}
          cx="78"
          cy="22"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="0.4"
          strokeOpacity="0.45"
        />
      ))}
    </svg>
  );
}
function LinesDeco({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[20, 40, 60, 80].map((y) => (
        <line
          key={y}
          x1="0"
          x2="100"
          y1={y}
          y2={y}
          stroke={color}
          strokeWidth="0.3"
          strokeOpacity="0.3"
        />
      ))}
    </svg>
  );
}
function DotsDeco({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "16px 16px",
      }}
    />
  );
}
function TopoDeco({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {[
        "M 0 50 Q 25 40 50 50 T 100 45",
        "M 0 60 Q 25 50 50 60 T 100 55",
        "M 0 70 Q 25 60 50 70 T 100 65",
        "M 0 80 Q 25 70 50 80 T 100 75",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="0.4"
          strokeOpacity={0.3 - i * 0.05}
        />
      ))}
    </svg>
  );
}

function Decoration({ kind, color }: { kind?: string; color: string }) {
  if (kind === "grid") return <GridDeco />;
  if (kind === "rings") return <RingsDeco color={color} />;
  if (kind === "lines") return <LinesDeco color={color} />;
  if (kind === "dots") return <DotsDeco color={color} />;
  if (kind === "topo") return <TopoDeco color={color} />;
  return null;
}

export function ProjectMoodboard({ project }: { project: Project }) {
  const tiles = MOODBOARDS[project.slug];
  const head = HEADLINES[project.slug];
  if (!tiles || !head) return null;
  const b = project.brand;

  return (
    <section className="section-contain relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Brand wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 50% 50%, rgba(${b.accentRGB},0.06), transparent 70%)`,
        }}
      />

      <div className="relative page-container">
        {/* Header */}
        <div className="text-center md:text-left mb-12 sm:mb-16 max-w-2xl">
          <div
            className="text-xs uppercase mb-3 tracking-[0.25em] inline-flex items-center gap-2"
            style={{ color: b.primary }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: b.primary }}
            />
            {head.kicker}
          </div>
          <h2
            className="font-black text-white tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(30px, 5.5vw, 56px)" }}
          >
            {head.title}
          </h2>
          <p
            className="mt-5 sm:mt-6 text-[15px] sm:text-lg leading-[1.65]"
            style={{ color: b.textOnBrand, opacity: 0.7 }}
            dangerouslySetInnerHTML={{ __html: head.sub }}
          />
        </div>

        {/* Tile grid - 2 wide + 2 regular = balanced mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {tiles.map((t, i) => {
            const isWide = t.span === "wide";
            return (
              <m.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                className={`relative group rounded-2xl overflow-hidden border ${
                  isWide ? "sm:col-span-2" : ""
                }`}
                style={{
                  borderColor: `rgba(${b.accentRGB},0.18)`,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 60px rgba(${b.accentRGB},0.06)`,
                }}
              >
                {/* Visual layer */}
                <div
                  className="relative aspect-[16/9] sm:aspect-[5/3] overflow-hidden"
                  style={{ background: t.visual }}
                >
                  {/* Decoration overlay */}
                  <Decoration kind={t.decoration} color="rgba(255,255,255,0.5)" />

                  {/* Brand light bleed */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 60% 50% at 30% 30%, rgba(255,255,255,0.20), transparent 60%)`,
                    }}
                  />

                  {/* Bottom darken for legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%)",
                    }}
                  />

                  {/* Corner index */}
                  <div
                    className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid rgba(${b.accentRGB},0.30)`,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: b.primary,
                        boxShadow: `0 0 4px ${b.primary}`,
                      }}
                    />
                    <span
                      className="text-[9px] font-mono tabular-nums"
                      style={{ color: b.textOnBrand }}
                    >
                      0{i + 1} / 0{tiles.length}
                    </span>
                  </div>

                  {/* Brand mark in corner */}
                  <div
                    className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] font-medium"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {project.name}
                  </div>

                  {/* Caption */}
                  <figcaption className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-sm sm:text-base font-semibold tracking-tight">
                      {t.label}
                    </div>
                    <div
                      className="text-[11px] sm:text-xs mt-0.5"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {t.caption}
                    </div>
                  </figcaption>
                </div>
              </m.figure>
            );
          })}
        </div>

        {/* Footer label */}
        <div
          className="mt-6 text-center text-[10px] uppercase tracking-[0.25em]"
          style={{ color: b.textOnBrand, opacity: 0.45 }}
        >
          Visual moments · representative · {project.name}
        </div>
      </div>
    </section>
  );
}
