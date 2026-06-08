"use client";

/**
 * Drft V2 - AI Content Engine
 *
 * The founder's writing-room. A brief on the left (product name, voice
 * sliders, style tags); ten generated description variations on the right
 * as small editorial cards, with the founder having picked one.
 */

import { m } from "framer-motion";
import {
  IconSparkles,
  IconCircleCheck,
  IconArrowRight,
  IconRefresh,
} from "@tabler/icons-react";

const VARIATIONS = [
  {
    tag: "Quiet · long-form",
    body:
      "Heavy moleskin twill. Cut for layering. The Field Overcoat is the one you reach for when the season turns.",
    chosen: true,
  },
  {
    tag: "Punchy · short",
    body:
      "580gsm twill. Eight-button storm placket. Built for the morning the temperature drops.",
  },
  {
    tag: "Tactile · specs",
    body:
      "Moleskin. 580gsm. Hand-bartacked. Throat-latch. Patch pockets. Made in Porto in heavy stock that softens with the seasons.",
  },
  {
    tag: "Warm · personal",
    body:
      "A heavyweight overcoat for the kind of week where you leave the house at sunrise and don't come back until dark.",
  },
  {
    tag: "Honest · plain",
    body:
      "A working overcoat. Twill so heavy it stands on its own. Twin patch pockets. The same coat your grandfather had, cut for now.",
  },
  {
    tag: "Sales · urgency",
    body:
      "Field Overcoat is back in stock at $189 - down from $260. Bracken sold through three times. This is the last drop until autumn.",
  },
];

export function ScreenContent() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #1F0808 0%, #0A0701 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "320px 1fr" }}>
        {/* LEFT - Brief */}
        <aside
          className="border-r overflow-hidden flex flex-col"
          style={{
            background: "#0F0902",
            borderColor: "rgba(220, 38, 38,0.10)",
          }}
        >
          <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(220, 38, 38,0.10)" }}>
            <div className="text-[#A98046] text-[9.5px] tracking-[0.22em] uppercase mb-1">
              Brief
            </div>
            <div className="text-white text-[14px] font-semibold tracking-tight">
              Field Overcoat · description
            </div>
            <div className="text-[#A98046] text-[10.5px] mt-0.5">
              Drafting · 09:14 am
            </div>
          </div>

          <div className="flex-1 px-6 py-5 space-y-5 overflow-hidden">
            {/* Product field */}
            <div>
              <div className="text-[#A98046] text-[9px] tracking-[0.18em] uppercase mb-1.5">
                Product
              </div>
              <div
                className="rounded px-3 py-2.5 text-white text-[12px]"
                style={{
                  background: "#1F0808",
                  border: "1px solid rgba(220, 38, 38,0.18)",
                }}
              >
                Field Overcoat · Bracken
              </div>
            </div>

            {/* Channel */}
            <div>
              <div className="text-[#A98046] text-[9px] tracking-[0.18em] uppercase mb-1.5">
                Channel
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {["Product page", "Email", "Instagram"].map((c, i) => (
                  <span
                    key={c}
                    className="text-[10.5px] py-1.5 rounded text-center"
                    style={
                      i === 0
                        ? {
                            background: "#DC2626",
                            color: "#1F0808",
                            fontWeight: 600,
                          }
                        : {
                            border: "1px solid rgba(220, 38, 38,0.18)",
                            color: "#A98046",
                          }
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Voice slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#A98046] text-[9px] tracking-[0.18em] uppercase">
                  Voice
                </div>
                <div className="text-[#FECACA] text-[10.5px]">
                  Honest · 70%
                </div>
              </div>
              <div className="flex items-center gap-3 text-[9.5px] text-[#A98046] uppercase tracking-[0.18em]">
                <span>Honest</span>
                <div
                  className="flex-1 relative h-1 rounded-full"
                  style={{ background: "rgba(220, 38, 38,0.10)" }}
                >
                  <m.div
                    className="absolute left-0 top-0 bottom-0 rounded-full"
                    style={{ background: "#DC2626" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: "70%", width: 11, height: 11, marginLeft: -5.5 }}
                  >
                    <span
                      className="block w-full h-full rounded-full"
                      style={{
                        background: "#DC2626",
                        border: "2px solid #1F0808",
                        boxShadow: "0 0 0 2px rgba(220, 38, 38,0.30)",
                      }}
                    />
                  </span>
                </div>
                <span>Polished</span>
              </div>
            </div>

            {/* Length */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#A98046] text-[9px] tracking-[0.18em] uppercase">
                  Length
                </div>
                <div className="text-[#FECACA] text-[10.5px]">3 sentences</div>
              </div>
              <div className="flex items-center gap-1.5">
                {["1", "2", "3", "4", "5", "6"].map((n, i) => (
                  <span
                    key={n}
                    className="flex-1 text-center py-1 text-[10px] rounded"
                    style={
                      i === 2
                        ? {
                            background: "#DC2626",
                            color: "#1F0808",
                            fontWeight: 600,
                          }
                        : {
                            background: "rgba(220, 38, 38,0.06)",
                            color: "#A98046",
                          }
                    }
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Style tags */}
            <div>
              <div className="text-[#A98046] text-[9px] tracking-[0.18em] uppercase mb-2">
                Style tags
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Workwear", "Heavyweight", "Cold weather", "Layering", "Story-led", "Specs"].map(
                  (t, i) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 rounded-full"
                      style={
                        i < 3
                          ? {
                              background: "rgba(220, 38, 38,0.10)",
                              color: "#FECACA",
                              border: "1px solid rgba(220, 38, 38,0.25)",
                            }
                          : {
                              border: "1px dashed rgba(220, 38, 38,0.20)",
                              color: "#A98046",
                            }
                      }
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Generate */}
          <div className="px-6 py-4 border-t" style={{ borderColor: "rgba(220, 38, 38,0.10)" }}>
            <div
              className="rounded-md text-center py-3 text-[12px] font-black tracking-[0.06em] uppercase inline-flex items-center justify-center gap-2 w-full"
              style={{
                background: "linear-gradient(135deg, #DC2626, #991B1B)",
                color: "#1F0808",
                boxShadow: "0 8px 20px rgba(220, 38, 38,0.30)",
              }}
            >
              <IconSparkles size={13} stroke={2.4} />
              Generate · 6 takes
            </div>
            <div className="text-[#7C5A2A] text-[10px] text-center mt-2">
              Reads the last 80 product descriptions for tone.
            </div>
          </div>
        </aside>

        {/* RIGHT - Output */}
        <main className="overflow-hidden flex flex-col">
          {/* AI status */}
          <div
            className="px-9 py-3 border-b flex items-center gap-2.5 text-[11px]"
            style={{
              borderColor: "rgba(220, 38, 38,0.10)",
              background:
                "linear-gradient(90deg, rgba(220, 38, 38,0.04) 0%, transparent 60%)",
            }}
          >
            <m.span
              className="inline-flex items-center justify-center w-5 h-5 rounded"
              style={{ background: "rgba(220, 38, 38,0.18)" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(220, 38, 38,0)",
                  "0 0 12px rgba(220, 38, 38,0.45)",
                  "0 0 0 rgba(220, 38, 38,0)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <IconSparkles size={10} stroke={1.8} style={{ color: "#FECACA" }} />
            </m.span>
            <span className="text-white font-medium">
              Six descriptions generated · 11 seconds
            </span>
            <span className="text-[#A98046] ml-auto inline-flex items-center gap-1.5">
              <IconRefresh size={10} stroke={1.5} />
              Regenerate
            </span>
          </div>

          <div className="flex-1 overflow-hidden px-9 py-6">
            <div className="text-[#A98046] text-[9.5px] tracking-[0.22em] uppercase mb-4">
              Pick one · founder approval
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {VARIATIONS.map((v, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 + i * 0.04,
                  }}
                  className="rounded p-4 relative"
                  style={
                    v.chosen
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(220, 38, 38,0.14) 0%, rgba(220, 38, 38,0.04) 60%, #1F0808 100%)",
                          border: "1.5px solid #DC2626",
                          boxShadow:
                            "0 8px 20px rgba(220, 38, 38,0.18), inset 0 1px 0 rgba(220, 38, 38,0.20)",
                        }
                      : {
                          background: "#1F0808",
                          border: "1px solid rgba(220, 38, 38,0.10)",
                        }
                  }
                >
                  {v.chosen && (
                    <div
                      className="absolute -top-2 -right-2 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] font-bold px-2 py-1 rounded"
                      style={{
                        background: "#DC2626",
                        color: "#1F0808",
                        boxShadow: "0 4px 12px rgba(220, 38, 38,0.40)",
                      }}
                    >
                      <IconCircleCheck size={9} stroke={2.5} />
                      Picked
                    </div>
                  )}
                  <div className="text-[9.5px] uppercase tracking-[0.18em] font-semibold mb-2"
                    style={{ color: v.chosen ? "#FECACA" : "#A98046" }}
                  >
                    {v.tag}
                  </div>
                  <p
                    className="leading-[1.55]"
                    style={{
                      color: v.chosen ? "#F5EBD2" : "#A98046",
                      fontSize: 12.5,
                    }}
                  >
                    {v.body}
                  </p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div
            className="border-t px-9 py-3 flex items-center justify-between"
            style={{
              borderColor: "rgba(220, 38, 38,0.10)",
              background: "#0F0902",
            }}
          >
            <div className="text-[#A98046] text-[10.5px]">
              Picked &ldquo;Quiet · long-form&rdquo; · pushed live to product
              page · 2 min ago
            </div>
            <span className="inline-flex items-center gap-1.5 text-[#FECACA] text-[11px]">
              View on shop
              <IconArrowRight size={11} stroke={2} />
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
