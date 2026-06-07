"use client";

/**
 * Kova V2 — Before / After Architecture
 *
 * Documentary architecture diagram. Two columns on lg+, vertical stack on
 * mobile with a horizontal divider arrow between them. Pure radial-gradient
 * backgrounds — no grid pattern, no noise.
 */

import { m } from "framer-motion";
import {
  IconMail,
  IconBrandWhatsapp,
  IconForms,
  IconBrandFacebook,
  IconBrandInstagram,
  IconFile,
  IconCheck,
  IconX,
  IconArrowRight,
  IconArrowDown,
  IconSparkles,
} from "@tabler/icons-react";

const BEFORE_SOURCES = [
  { icon: IconForms, label: "Web form" },
  { icon: IconBrandWhatsapp, label: "WhatsApp", color: "#10B981" },
  { icon: IconMail, label: "Email" },
  { icon: IconBrandFacebook, label: "Facebook", color: "#1877F2" },
  { icon: IconBrandInstagram, label: "Instagram", color: "#E4405F" },
  { icon: IconFile, label: "Walk-ins" },
];

const BEFORE_TOOLS = [
  "HubSpot",
  "Pipedrive",
  "Sheets",
  "Drive folder",
  "WhatsApp groups",
  "Sticky notes",
];

const AFTER_OUTCOMES = [
  { label: "Hot match", color: "#0EA5E9", count: 6 },
  { label: "Pipeline", color: "#10B981", count: 18 },
  { label: "Cold list", color: "#94A3B8", count: 11 },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function BeforeAfter() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 25% 50%, rgba(239,68,68,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 75% 50%, rgba(14,165,233,0.06) 0%, transparent 70%), linear-gradient(180deg, #050B14 0%, #02060B 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* BEFORE side */}
        <div
          className="relative p-6 sm:p-8 lg:border-r flex flex-col"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-md"
              style={{
                background: "rgba(239,68,68,0.15)",
                color: "#F87171",
              }}
            >
              <IconX size={11} stroke={2.5} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-red-400">
              Before
            </span>
          </div>
          <div className="text-white text-[18px] sm:text-[20px] font-bold tracking-tight leading-tight">
            Six unconnected inputs.
            <br />
            Twelve agents guessing.
          </div>
          <div className="text-[#7CA0C2] text-[11px] sm:text-[12px] mt-2 leading-relaxed">
            Leads landed in six different places. No one knew who saw what.
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <div className="text-[#5681AB] text-[9.5px] tracking-[0.18em] uppercase">
              Sources
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {BEFORE_SOURCES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon
                      size={11}
                      stroke={1.5}
                      style={{ color: s.color ?? "#7CA0C2" }}
                    />
                    <span className="text-[10px] text-[#9DB5CC] truncate">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-[#5681AB] text-[9.5px] tracking-[0.18em] uppercase mt-2">
              Six disconnected tools
            </div>
            <div className="flex flex-wrap gap-1.5">
              {BEFORE_TOOLS.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-1 rounded"
                  style={{
                    background: "rgba(239,68,68,0.06)",
                    border: "1px dashed rgba(239,68,68,0.25)",
                    color: "#FCA5A5",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className="mt-6 pt-5 border-t grid grid-cols-3 gap-3"
            style={{ borderColor: "rgba(239,68,68,0.15)" }}
          >
            {[
              { v: "4h", l: "Avg response" },
              { v: "18%", l: "Conversion" },
              { v: "23", l: "Hrs/wk admin" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-red-300 text-[20px] sm:text-[22px] font-black tabular-nums leading-none">
                  {s.v}
                </div>
                <div className="text-[#7CA0C2] text-[9.5px] mt-2 uppercase tracking-[0.16em] leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AFTER side */}
        <div className="relative p-6 sm:p-8 flex flex-col border-t lg:border-t-0" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-md"
              style={{
                background: "rgba(14,165,233,0.15)",
                color: "#7DD3FC",
              }}
            >
              <IconCheck size={11} stroke={2.5} />
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-sky-300">
              After
            </span>
          </div>
          <div className="text-white text-[18px] sm:text-[20px] font-bold tracking-tight leading-tight">
            One inbox. One AI.
            <br />
            One source of truth.
          </div>
          <div className="text-[#7CA0C2] text-[11px] sm:text-[12px] mt-2 leading-relaxed">
            Every lead, every channel, scored and routed in seconds.
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase">
              Sources
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {BEFORE_SOURCES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
                    style={{
                      background: "rgba(14,165,233,0.04)",
                      border: "1px solid rgba(14,165,233,0.15)",
                    }}
                  >
                    <Icon size={11} stroke={1.5} style={{ color: "#7DD3FC" }} />
                    <span className="text-[10px] text-sky-200 truncate">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase mt-2">
              Routed through
            </div>
            <m.div
              className="rounded-lg px-4 py-3 flex items-center gap-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.04) 100%)",
                border: "1px solid rgba(14,165,233,0.35)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(14,165,233,0)",
                  "0 0 24px rgba(14,165,233,0.30)",
                  "0 0 0 rgba(14,165,233,0)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style={{
                  background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                }}
              >
                <IconSparkles size={16} stroke={1.8} className="text-white" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-white text-[13px] font-semibold tracking-tight">
                  Kova AI Matcher
                </div>
                <div className="text-sky-200/70 text-[10.5px] mt-0.5">
                  Scores · routes · drafts · in 2.1s
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#7DD3FC] text-[11px] font-semibold tabular-nums">
                  2.1s
                </div>
                <div className="text-sky-200/60 text-[9px] uppercase tracking-[0.18em]">
                  latency
                </div>
              </div>
            </m.div>

            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase mt-2">
              Routed to agent
            </div>
            <div className="grid grid-cols-3 gap-2">
              {AFTER_OUTCOMES.map((o) => (
                <div
                  key={o.label}
                  className="rounded-md p-2.5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${o.color}25`,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{
                        background: o.color,
                        boxShadow: `0 0 6px ${o.color}66`,
                      }}
                    />
                    <span className="text-[10px] text-[#9DB5CC]">{o.label}</span>
                  </div>
                  <div
                    className="text-[20px] sm:text-[22px] font-black tabular-nums leading-none"
                    style={{ color: o.color }}
                  >
                    {o.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-6 pt-5 border-t grid grid-cols-3 gap-3"
            style={{ borderColor: "rgba(14,165,233,0.15)" }}
          >
            {[
              { v: "4 min", l: "Avg response" },
              { v: "47%", l: "Conversion" },
              { v: "0 hrs", l: "Wkly admin" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-[20px] sm:text-[22px] font-black tabular-nums leading-none"
                  style={{
                    background: "linear-gradient(135deg, #7DD3FC, #0EA5E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.v}
                </div>
                <div className="text-[#7CA0C2] text-[9.5px] mt-2 uppercase tracking-[0.16em] leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered transition arrow */}
        {/* On lg+: horizontal arrow between columns. On mobile: rendered as a divider chip in flow. */}
        <m.span
          className="hidden lg:inline-flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
            boxShadow: "0 12px 28px rgba(14,165,233,0.45)",
            border: "3px solid #02060B",
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          <m.span
            className="inline-flex"
            animate={{ x: [-2, 4, -2] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <IconArrowRight size={20} stroke={2.5} className="text-white" />
          </m.span>
        </m.span>

        {/*
         * Mobile/tablet horizontal divider arrow. Positioned at vertical
         * center of the grid container — which lands cleanly between the two
         * stacked rows since both sides have similar content density.
         */}
        <m.span
          className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full pointer-events-none z-10"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
            boxShadow: "0 8px 20px rgba(14,165,233,0.45)",
            border: "3px solid #02060B",
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          <IconArrowDown size={16} stroke={2.5} className="text-white" />
        </m.span>
      </div>
    </div>
  );
}
