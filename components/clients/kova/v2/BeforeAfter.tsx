"use client";

/**
 * Kova V2 — Before / After Architecture
 *
 * Documentary architecture diagram. Left = chaos: 6 disconnected tools,
 * leads bleeding between them. Right = system: single inbound funnel with
 * AI scoring routing each lead to the right place.
 *
 * Inspired by Vercel's Sonos case study before/after diagram pattern.
 */

import { m } from "framer-motion";
import {
  IconMail,
  IconBrandWhatsapp,
  IconForms,
  IconBrandFacebook,
  IconBrandInstagram,
  IconFile,
  IconBolt,
  IconUsers,
  IconCheck,
  IconX,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

const BEFORE_SOURCES = [
  { icon: IconForms, label: "Web form" },
  { icon: IconBrandWhatsapp, label: "WhatsApp", color: "#10B981" },
  { icon: IconMail, label: "Email" },
  { icon: IconBrandFacebook, label: "Facebook ads", color: "#1877F2" },
  { icon: IconBrandInstagram, label: "Instagram DMs", color: "#E4405F" },
  { icon: IconFile, label: "Walk-ins" },
];

const BEFORE_TOOLS = ["HubSpot", "Pipedrive", "Sheets", "Drive folder", "WhatsApp groups", "Sticky notes"];

const AFTER_OUTCOMES = [
  { label: "Hot match", color: "#0EA5E9", count: 6 },
  { label: "Pipeline", color: "#10B981", count: 18 },
  { label: "Cold list", color: "#94A3B8", count: 11 },
];

export function BeforeAfter() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #050B14 0%, #02060B 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "16/9",
        borderRadius: 16,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative h-full grid grid-cols-2">
        {/* BEFORE side */}
        <div
          className="relative p-8 border-r flex flex-col"
          style={{
            borderColor: "rgba(255,255,255,0.04)",
            background: "linear-gradient(180deg, rgba(239,68,68,0.04) 0%, transparent 100%)",
          }}
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
          <div className="text-white text-[18px] font-bold tracking-tight leading-tight">
            Six unconnected inputs.
            <br />
            Twelve agents guessing.
          </div>
          <div className="text-[#7CA0C2] text-[11px] mt-1.5 leading-relaxed max-w-xs">
            Leads landed in six different places. No one knew who saw what.
          </div>

          {/* Sources flowing into chaos */}
          <div className="flex-1 mt-6 flex flex-col gap-2.5">
            <div className="text-[#5681AB] text-[9.5px] tracking-[0.18em] uppercase">
              Sources
            </div>
            <div className="grid grid-cols-3 gap-1.5">
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
                    <span className="text-[10px] text-[#9DB5CC] truncate">{s.label}</span>
                  </div>
                );
              })}
            </div>

            {/* tangled arrows visualization */}
            <div className="text-[#5681AB] text-[9.5px] tracking-[0.18em] uppercase mt-3">
              Routed into
            </div>
            <div className="relative h-12 rounded-md" style={{
              background: "linear-gradient(135deg, rgba(239,68,68,0.04), transparent)",
              border: "1px dashed rgba(239,68,68,0.20)",
            }}>
              <svg viewBox="0 0 200 30" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {[
                  "M5 5 Q60 5 90 15 T180 8",
                  "M5 15 Q40 15 80 22 T195 12",
                  "M5 25 Q70 25 100 8 T190 22",
                  "M5 8 Q90 28 120 5 T195 18",
                  "M5 22 Q50 5 110 25 T180 15",
                  "M5 12 Q100 22 140 12 T195 8",
                ].map((d, i) => (
                  <m.path
                    key={i}
                    d={d}
                    stroke="rgba(248,113,113,0.45)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeInOut" }}
                  />
                ))}
              </svg>
            </div>

            <div className="text-[#5681AB] text-[9.5px] tracking-[0.18em] uppercase mt-3">
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

          {/* Bottom stats */}
          <div className="mt-5 pt-4 border-t grid grid-cols-3 gap-2" style={{ borderColor: "rgba(239,68,68,0.15)" }}>
            <div>
              <div className="text-red-300 text-[18px] font-black tabular-nums">4h</div>
              <div className="text-[#7CA0C2] text-[9.5px] mt-0.5 uppercase tracking-[0.16em]">Avg response</div>
            </div>
            <div>
              <div className="text-red-300 text-[18px] font-black tabular-nums">18%</div>
              <div className="text-[#7CA0C2] text-[9.5px] mt-0.5 uppercase tracking-[0.16em]">Conversion</div>
            </div>
            <div>
              <div className="text-red-300 text-[18px] font-black tabular-nums">23</div>
              <div className="text-[#7CA0C2] text-[9.5px] mt-0.5 uppercase tracking-[0.16em]">Hrs/wk admin</div>
            </div>
          </div>
        </div>

        {/* AFTER side */}
        <div
          className="relative p-8 flex flex-col"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,165,233,0.06) 0%, transparent 100%)",
          }}
        >
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
          <div className="text-white text-[18px] font-bold tracking-tight leading-tight">
            One inbox. One AI.
            <br />
            One source of truth.
          </div>
          <div className="text-[#7CA0C2] text-[11px] mt-1.5 leading-relaxed max-w-xs">
            Every lead, every channel, scored and routed in seconds.
          </div>

          {/* Funnel */}
          <div className="flex-1 mt-6 flex flex-col gap-2.5">
            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase">
              Sources
            </div>
            <div className="grid grid-cols-3 gap-1.5">
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
                    <span className="text-[10px] text-sky-200 truncate">{s.label}</span>
                  </div>
                );
              })}
            </div>

            {/* AI router */}
            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase mt-3">
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
                  background:
                    "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
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
                <div className="text-[#7DD3FC] text-[11px] font-semibold tabular-nums">2.1s</div>
                <div className="text-sky-200/60 text-[9px] uppercase tracking-[0.18em]">latency</div>
              </div>
            </m.div>

            {/* Outcomes — three buckets */}
            <div className="text-sky-300/70 text-[9.5px] tracking-[0.18em] uppercase mt-3">
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
                      style={{ background: o.color, boxShadow: `0 0 6px ${o.color}66` }}
                    />
                    <span className="text-[10px] text-[#9DB5CC]">{o.label}</span>
                  </div>
                  <div
                    className="text-[20px] font-black tabular-nums"
                    style={{ color: o.color }}
                  >
                    {o.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="mt-5 pt-4 border-t grid grid-cols-3 gap-2" style={{ borderColor: "rgba(14,165,233,0.15)" }}>
            {[
              { v: "4 min", l: "Avg response" },
              { v: "47%", l: "Conversion" },
              { v: "0 hrs", l: "Wkly admin" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[18px] font-black tabular-nums" style={{
                  background: "linear-gradient(135deg, #7DD3FC, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {s.v}
                </div>
                <div className="text-[#7CA0C2] text-[9.5px] mt-0.5 uppercase tracking-[0.16em]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered arrow between */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <m.span
            className="inline-flex items-center justify-center w-12 h-12 rounded-full"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
              boxShadow: "0 12px 28px rgba(14,165,233,0.45)",
              border: "3px solid #02060B",
            }}
            animate={{ x: [-2, 4, -2] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <IconArrowRight size={18} stroke={2.5} className="text-white" />
          </m.span>
        </div>
      </div>
    </div>
  );
}

void IconBolt;
void IconUsers;
