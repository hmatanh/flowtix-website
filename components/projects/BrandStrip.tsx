"use client";

import { useState } from "react";
import { m } from "framer-motion";
import type { Project } from "@/lib/projects";

/**
 * Compact horizontal brand strip — replaces the full-section brand identity
 * with a single tight row: logo & tagline · colors · typography · one brand word.
 *
 * Stacks vertically on mobile.
 */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const BRAND_WORDS: Record<string, string> = {
  kova: "Trustworthy",
  sero: "Caring",
  aurum: "Prestige",
  drft: "Kinetic",
  linx: "Intelligent",
};

const BRAND_TAGLINES: Record<string, string> = {
  kova: "Real estate, calmly intelligent.",
  sero: "Healthcare that feels human.",
  aurum: "Private wealth, quiet luxury.",
  drft: "Gear that earns its place.",
  linx: "The agency operating system.",
};

export function BrandStrip({ project }: { project: Project }) {
  const b = project.brand;
  const word = BRAND_WORDS[project.slug] ?? "Distinct";
  const tagline = BRAND_TAGLINES[project.slug] ?? project.description;

  const swatches = [
    { hex: b.primary, name: "Primary" },
    { hex: b.card, name: "Surface" },
    { hex: b.dark, name: "Deep" },
    { hex: `rgba(${b.accentRGB},0.18)`, name: "Glow" },
  ];

  return (
    <section
      className="section-contain w-full py-12 sm:py-16 px-6 md:px-10 xl:px-12"
      style={{ background: b.dark }}
    >
      <div className="max-w-7xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#0D0D0D",
            border: `1px solid ${b.border}`,
            boxShadow: `0 30px 80px -40px rgba(${b.accentRGB},0.45)`,
          }}
        >
          {/* Desktop: 4-segment horizontal row */}
          <div
            className="hidden md:grid items-center gap-0 px-6 lg:px-8 py-5"
            style={{ gridTemplateColumns: "1.2fr auto 1.1fr auto 1fr auto 1fr" }}
          >
            <Segment>
              <SegmentLabel color={b.primary}>{project.name}</SegmentLabel>
              <div className="text-[11px] mt-1" style={{ color: "#444" }}>
                {tagline}
              </div>
            </Segment>

            <Divider />

            <Segment>
              <SegmentLabel color={b.primary}>Brand Colors</SegmentLabel>
              <div className="flex gap-1.5 mt-2">
                {swatches.map((s, i) => (
                  <Swatch key={i} hex={s.hex} name={s.name} value={s.hex} />
                ))}
              </div>
            </Segment>

            <Divider />

            <Segment>
              <SegmentLabel color={b.primary}>Typeface</SegmentLabel>
              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className="text-lg font-black leading-none"
                  style={{ color: b.textOnBrand }}
                >
                  Aa
                </span>
                <span className="text-sm" style={{ color: "#666" }}>
                  Inter · Bold
                </span>
              </div>
            </Segment>

            <Divider />

            <Segment>
              <SegmentLabel color={b.primary}>Brand Word</SegmentLabel>
              <div className="relative h-10 mt-0.5 overflow-hidden">
                <span
                  className="absolute inset-0 font-black tracking-tight pointer-events-none select-none"
                  style={{
                    color: `rgba(${b.accentRGB},0.10)`,
                    fontSize: 36,
                    lineHeight: 1,
                  }}
                >
                  {word}
                </span>
                <span
                  className="absolute inset-0 flex items-center text-sm font-medium"
                  style={{ color: b.primary }}
                >
                  {word}
                </span>
              </div>
            </Segment>
          </div>

          {/* Mobile: stacked rows */}
          <div className="md:hidden">
            <MobileRow>
              <SegmentLabel color={b.primary}>{project.name}</SegmentLabel>
              <div className="text-xs mt-1" style={{ color: "#555" }}>
                {tagline}
              </div>
            </MobileRow>
            <MobileRow border>
              <SegmentLabel color={b.primary}>Brand Colors</SegmentLabel>
              <div className="flex gap-2 mt-2.5">
                {swatches.map((s, i) => (
                  <Swatch key={i} hex={s.hex} name={s.name} value={s.hex} bigger />
                ))}
              </div>
            </MobileRow>
            <MobileRow border>
              <SegmentLabel color={b.primary}>Typeface</SegmentLabel>
              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className="text-2xl font-black leading-none"
                  style={{ color: b.textOnBrand }}
                >
                  Aa
                </span>
                <span className="text-sm" style={{ color: "#666" }}>
                  Inter · Bold
                </span>
              </div>
            </MobileRow>
            <MobileRow border>
              <SegmentLabel color={b.primary}>Brand Word</SegmentLabel>
              <div className="relative h-12 mt-1 overflow-hidden">
                <span
                  className="absolute inset-0 font-black tracking-tight pointer-events-none select-none"
                  style={{
                    color: `rgba(${b.accentRGB},0.10)`,
                    fontSize: 44,
                    lineHeight: 1.1,
                  }}
                >
                  {word}
                </span>
                <span
                  className="absolute inset-0 flex items-center text-base font-medium"
                  style={{ color: b.primary }}
                >
                  {word}
                </span>
              </div>
            </MobileRow>
          </div>
        </m.div>
      </div>
    </section>
  );
}

function Segment({ children }: { children: React.ReactNode }) {
  return <div className="px-4">{children}</div>;
}

function Divider() {
  return <span className="block w-px h-12" style={{ background: "#1a1a1a" }} />;
}

function MobileRow({ children, border }: { children: React.ReactNode; border?: boolean }) {
  return (
    <div
      className={`px-5 py-3 ${border ? "border-t" : ""}`}
      style={{ borderColor: "#1a1a1a" }}
    >
      {children}
    </div>
  );
}

function SegmentLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="text-[10px] uppercase tracking-[0.2em] font-medium"
      style={{ color }}
    >
      {children}
    </div>
  );
}

function Swatch({
  hex,
  name,
  value,
  bigger,
}: {
  hex: string;
  name: string;
  value: string;
  bigger?: boolean;
}) {
  const [show, setShow] = useState(false);
  const size = bigger ? 32 : 28;
  const display = value.length > 14 ? value.slice(0, 14) + "…" : value;
  return (
    <button
      type="button"
      className="relative rounded-full transition-transform hover:scale-110"
      style={{
        width: size,
        height: size,
        background: hex,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      aria-label={`${name} ${display}`}
    >
      {show && (
        <span
          className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap rounded px-2 py-0.5 text-[9px] font-mono pointer-events-none"
          style={{ background: "#000", color: "#fff", border: "1px solid #222" }}
        >
          {display}
        </span>
      )}
    </button>
  );
}
