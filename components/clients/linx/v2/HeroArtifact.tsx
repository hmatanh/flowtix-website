"use client";

/**
 * Linx V2 — Hero Artifact
 *
 * Pentagram-style identity moment: a printed Linx Studio proposal cover
 * sits tilted on a violet wash next to the system thesis written like a
 * studio manifesto. The artifact says "this is a real studio with real
 * deliverables"; the manifesto says "the system is the studio's edge".
 */

import { m } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroArtifact() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, #2E1065 0%, #4C1D95 45%, #6D28D9 100%)",
        color: "#F5F0FF",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      {/* Subtle radial highlight, no noise to avoid pixelation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 25%, rgba(196,181,253,0.18) 0%, transparent 70%), radial-gradient(50% 40% at 80% 80%, rgba(91,33,182,0.30) 0%, transparent 70%)",
        }}
      />

      {/* Top label bar */}
      <div className="absolute top-0 inset-x-0 px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5">
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded"
            style={{
              background: "linear-gradient(135deg,#A78BFA 0%,#6D28D9 100%)",
            }}
          >
            <svg viewBox="0 0 14 14" width="11" height="11" fill="none">
              <path
                d="M2 11 L2 3 L6 3 L8 7 L12 3"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-violet-100 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase font-bold">
            Linx Studio
          </span>
        </div>
        <span className="text-violet-200/70 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase">
          A consulting practice, augmented
        </span>
      </div>

      <div className="relative pt-14 sm:pt-16 pb-8 sm:pb-12 px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-12 items-center">
          {/* LEFT — printed proposal cover artifact */}
          <m.div
            initial={{ opacity: 0, y: 18, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
            style={{ transformOrigin: "50% 50%" }}
          >
            {/* Drop shadow card behind */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 -bottom-3 rounded-sm"
              style={{
                background: "rgba(20, 10, 40, 0.45)",
                filter: "blur(24px)",
                transform: "translate(8px, 12px)",
              }}
            />
            {/* Cover */}
            <div
              className="relative aspect-[3/4] rounded-sm flex flex-col p-7 sm:p-9 shadow-2xl"
              style={{
                background:
                  "linear-gradient(180deg, #F5EFE2 0%, #ECE3CE 100%)",
                color: "#1A1230",
                fontFamily:
                  "var(--font-tinos, Tinos), 'EB Garamond', ui-serif, Georgia, serif",
              }}
            >
              {/* Top brand row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-sans font-bold"
                  style={{ color: "#5B21B6" }}
                >
                  Linx Studio
                </span>
                <span
                  className="text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans"
                  style={{ color: "#7A6BA0" }}
                >
                  Q1 · 2025
                </span>
              </div>

              {/* Hairline */}
              <div
                aria-hidden="true"
                className="mt-4 h-px w-full"
                style={{ background: "rgba(91,33,182,0.40)" }}
              />

              {/* Title */}
              <div className="mt-auto">
                <div
                  className="text-[9px] sm:text-[10px] tracking-[0.32em] uppercase font-sans font-bold mb-3"
                  style={{ color: "#5B21B6" }}
                >
                  Proposal · prepared for
                </div>
                <h3
                  className="tracking-tight"
                  style={{
                    fontSize: "clamp(28px, 4.5vw, 44px)",
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "#0B0518",
                  }}
                >
                  Marlow
                  <br />
                  <em>+ Co</em>
                </h3>
                <div
                  className="mt-4 text-[11px] sm:text-[12.5px] italic tracking-tight"
                  style={{ color: "#5A4D7A" }}
                >
                  Brand, growth, and the operating
                  <br />
                  rhythm of the next 12 months.
                </div>
              </div>

              {/* Bottom row */}
              <div
                className="mt-6 pt-4 border-t flex items-end justify-between gap-2"
                style={{ borderColor: "rgba(91,33,182,0.30)" }}
              >
                <div>
                  <div
                    className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase font-sans"
                    style={{ color: "#7A6BA0" }}
                  >
                    Partners
                  </div>
                  <div
                    className="text-[10px] sm:text-[11px] mt-0.5 font-sans"
                    style={{ color: "#1A1230" }}
                  >
                    Iris Chen · Lior Mor
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase font-sans"
                    style={{ color: "#7A6BA0" }}
                  >
                    Confidential
                  </div>
                  <div
                    className="text-[10px] sm:text-[11px] mt-0.5 font-sans tabular-nums"
                    style={{ color: "#1A1230" }}
                  >
                    No. 014 / 18
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* RIGHT — manifesto */}
          <m.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div className="text-violet-200/80 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase font-bold mb-5 sm:mb-6">
              The thesis
            </div>
            <h2
              className="text-white tracking-tight"
              style={{
                fontSize: "clamp(28px, 4.6vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              The studio stays small.
              <br />
              <span className="text-violet-300">The system does the scale.</span>
            </h2>
            <p
              className="text-violet-100/80 mt-5 sm:mt-7 leading-relaxed"
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                maxWidth: 540,
              }}
            >
              Linx wanted the rigour of a five-person studio and the throughput
              of fifty. We didn&apos;t hand them a tool — we re-architected
              the studio. Proposals, monthly reports, client briefings and
              the morning brief all flow through one system, drafted by AI
              and signed off by a partner. Nothing leaves the studio without
              a Linx partner&apos;s name on it.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-5 max-w-[540px]">
              {[
                { v: "3 partners", l: "Same headcount" },
                { v: "23 clients", l: "Up from 9" },
                { v: "92% on time", l: "Up from 61%" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-white tabular-nums tracking-tight"
                    style={{
                      fontSize: "clamp(16px, 1.9vw, 22px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="text-violet-200/70 text-[10px] sm:text-[11px] mt-1 leading-tight tracking-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        {/* Bottom signature line */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t flex items-center justify-between flex-wrap gap-2"
             style={{ borderColor: "rgba(196,181,253,0.18)" }}>
          <span className="text-violet-200/80 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-bold">
            One studio · One system · Three partners
          </span>
          <span className="text-violet-200/60 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase italic">
            — A case study, in three movements
          </span>
        </div>
      </div>
    </div>
  );
}
