"use client";

/**
 * Kova V2 — Hero Artifact
 *
 * The close-up "specimen page" view of the AI matching engine. On desktop:
 * three columns side by side (listing → reasoning → matched buyer). On
 * tablet and mobile: a vertical stack with the reasoning arrow rotated to
 * point downward between the two cards.
 *
 * Backgrounds are smooth gradients only — no grid patterns, no noise.
 */

import { m } from "framer-motion";
import {
  IconSparkles,
  IconCircleCheck,
  IconMapPin,
  IconCalendar,
  IconArrowDown,
  IconArrowRight,
} from "@tabler/icons-react";

export function HeroArtifact() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.16) 0%, transparent 60%), linear-gradient(135deg, #03101F 0%, #02060B 60%, #050B14 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      {/* Smooth ambient glow — no grid pattern */}
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[80%] h-[60%] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[40%] h-[40%] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative px-6 sm:px-10 py-8 sm:py-10">
        {/* Top label */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2">
            <m.span
              className="inline-flex items-center justify-center w-7 h-7 rounded-md"
              style={{
                background: "rgba(14,165,233,0.18)",
                border: "1px solid rgba(14,165,233,0.40)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(14,165,233,0)",
                  "0 0 16px rgba(14,165,233,0.6)",
                  "0 0 0 rgba(14,165,233,0)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <IconSparkles size={13} stroke={1.8} className="text-sky-300" />
            </m.span>
            <span className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight">
              Match scored in 2.1 seconds
            </span>
            <span className="text-[#5681AB] text-[11px]">·</span>
            <span className="text-[#7DD3FC] text-[11px] sm:text-[12px] tabular-nums">
              94% confidence
            </span>
          </div>
          <span className="text-[#3E6080] text-[10px] tracking-[0.22em] uppercase">
            Kova · Matching v3.2
          </span>
        </div>

        {/* Center stage — three columns on lg+, stacked below */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 items-stretch lg:items-center">
          {/* Listing card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-2xl overflow-hidden mx-auto w-full max-w-sm lg:max-w-none"
            style={{
              background: "#040A12",
              border: "1px solid #0E2236",
              boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="relative h-36 sm:h-40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.30) 0%, rgba(14,165,233,0.06) 50%, rgba(2,6,11,0.9) 100%)",
              }}
            >
              <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: 14,
                      background:
                        i === 4
                          ? "rgba(255,255,255,0.22)"
                          : "rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
              <div
                className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 rounded text-sky-200"
                style={{
                  background: "rgba(2,6,11,0.7)",
                  backdropFilter: "blur(4px)",
                }}
              >
                NEW
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="text-white text-[15px] sm:text-base font-semibold tracking-tight leading-snug">
                201 W 21st, Apt 7G
              </div>
              <div className="text-[#7CA0C2] text-[11px] mt-0.5 inline-flex items-center gap-1">
                <IconMapPin size={10} stroke={1.5} />
                Chelsea, Manhattan
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                {[
                  ["Beds", "2"],
                  ["Bath", "2"],
                  ["SQFT", "1,320"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded px-1.5 py-2"
                    style={{
                      background: "#02060B",
                      border: "1px solid #0E2236",
                    }}
                  >
                    <div className="text-[#5681AB] text-[8.5px] uppercase tracking-[0.16em]">
                      {k}
                    </div>
                    <div className="text-white text-[11px] font-semibold mt-0.5 tabular-nums">
                      {v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-[#7CA0C2] text-[9.5px] uppercase tracking-[0.16em]">
                  Price
                </span>
                <span className="text-white text-[19px] sm:text-[20px] font-black tracking-tight tabular-nums">
                  $1,850,000
                </span>
              </div>
            </div>
          </m.div>

          {/* AI reasoning column */}
          <div className="flex flex-col items-center gap-3 w-full lg:max-w-[240px]">
            <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-sky-300">
              AI reasoning
            </div>
            <div className="w-full space-y-1.5 max-w-xs lg:max-w-none">
              {[
                { tag: "Budget", body: "1.85M within Sarah's range" },
                { tag: "Hood", body: "3 saved in Chelsea" },
                { tag: "Type", body: "Pre-war matched" },
                { tag: "Size", body: "1,320 sqft is ideal" },
              ].map((r, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded"
                  style={{
                    background: "rgba(14,165,233,0.05)",
                    border: "1px solid rgba(14,165,233,0.15)",
                  }}
                >
                  <IconCircleCheck
                    size={11}
                    stroke={2}
                    className="text-sky-300 shrink-0"
                  />
                  <span className="text-[9px] uppercase tracking-[0.16em] text-sky-300/70 w-12 shrink-0">
                    {r.tag}
                  </span>
                  <span className="text-[11px] text-[#cfe8fd] flex-1">
                    {r.body}
                  </span>
                </m.div>
              ))}
            </div>
            <m.span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full mt-1"
              style={{
                background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                boxShadow: "0 6px 16px rgba(14,165,233,0.40)",
              }}
              animate={{
                x: [0, 6, 0],
                y: [0, 0, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Right arrow on lg+, down arrow on mobile/tablet */}
              <span className="hidden lg:inline-flex">
                <IconArrowRight size={14} stroke={2.5} className="text-white" />
              </span>
              <span className="lg:hidden inline-flex">
                <IconArrowDown size={14} stroke={2.5} className="text-white" />
              </span>
            </m.span>
          </div>

          {/* Lead card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-2xl overflow-hidden relative mx-auto w-full max-w-sm lg:max-w-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.02) 60%, #040A12 100%)",
              border: "1px solid rgba(14,165,233,0.30)",
              boxShadow:
                "0 16px 40px rgba(14,165,233,0.18), 0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-12 w-40 h-40 pointer-events-none rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(14,165,233,0.30), transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-sky-300">
                  Top match
                </span>
                <span
                  className="text-[9.5px] inline-flex items-center gap-1 px-1.5 py-0.5 rounded font-semibold"
                  style={{
                    background: "#0EA5E9",
                    color: "#02060B",
                  }}
                >
                  HOT
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl text-white text-[15px] font-bold shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                  }}
                >
                  SM
                  <m.span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{
                      background: "#10B981",
                      border: "2px solid #02060B",
                    }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </span>
                <div>
                  <div className="text-white text-[15px] sm:text-base font-semibold tracking-tight">
                    Sarah Mitchell
                  </div>
                  <div className="text-[#7CA0C2] text-[10.5px] mt-0.5">
                    Active 2 minutes ago
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#7CA0C2]">Budget</span>
                  <span className="text-white tabular-nums">$1.6M – 2.1M</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#7CA0C2]">Saved homes</span>
                  <span className="text-white tabular-nums">7</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#7CA0C2]">Last activity</span>
                  <span className="text-white">Today, 9:18am</span>
                </div>
              </div>

              <div
                className="mt-4 pt-4 border-t"
                style={{ borderColor: "rgba(14,165,233,0.18)" }}
              >
                <div className="text-[#9DB5CC] text-[9.5px] tracking-[0.18em] uppercase mb-1.5">
                  Match score
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className="text-[40px] sm:text-[44px] font-black tabular-nums tracking-tight leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg,#7DD3FC,#0EA5E9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    94<span className="text-[18px] opacity-80">%</span>
                  </span>
                  <span
                    className="text-[10px] px-2.5 py-1.5 rounded-md font-semibold inline-flex items-center gap-1.5 shrink-0"
                    style={{ background: "#0EA5E9", color: "#02060B" }}
                  >
                    <IconCalendar size={10} stroke={2.5} />
                    Book showing
                  </span>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t flex items-center justify-between flex-wrap gap-3"
          style={{ borderColor: "rgba(14,165,233,0.10)" }}
        >
          <span className="text-[#5681AB] text-[10.5px] sm:text-[11px]">
            Trained on 42 buyer profiles · refreshed daily at 4:00 am
          </span>
          <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px]">
            <span className="text-[#7CA0C2]">Routed to</span>
            <span className="inline-flex items-center gap-1.5">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                }}
              >
                SM
              </span>
              <span className="text-white">Sarah Moran</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
