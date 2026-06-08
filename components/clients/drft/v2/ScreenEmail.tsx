"use client";

/**
 * Drft V2 - Email Flow Builder
 *
 * A visual flow on the left (5 connected nodes - trigger, two emails,
 * wait, branch); a single email preview on the right, with three KPIs
 * pinned across the top of the canvas.
 */

import { m } from "framer-motion";
import {
  IconBolt,
  IconMail,
  IconClock,
  IconGitFork,
  IconSparkles,
  IconCircleCheck,
} from "@tabler/icons-react";

const STATS = [
  { label: "Open rate", value: "47.3%", trend: "+12.1", positive: true },
  { label: "Click rate", value: "8.4%", trend: "+3.2", positive: true },
  { label: "Revenue / send", value: "$4.20", trend: "+1.10", positive: true },
];

function FlowNode({
  icon,
  title,
  detail,
  active = false,
  color = "#A98046",
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  active?: boolean;
  color?: string;
}) {
  return (
    <div
      className="rounded-lg px-4 py-3 flex items-center gap-3 relative"
      style={{
        background: active
          ? "linear-gradient(135deg, rgba(220, 38, 38,0.16) 0%, rgba(220, 38, 38,0.04) 100%)"
          : "#1F0808",
        border: active
          ? "1.5px solid #DC2626"
          : "1px solid rgba(220, 38, 38,0.12)",
        boxShadow: active
          ? "0 8px 20px rgba(220, 38, 38,0.20)"
          : undefined,
      }}
    >
      <span
        className="inline-flex items-center justify-center w-9 h-9 rounded shrink-0"
        style={{
          background: active
            ? "linear-gradient(135deg, #DC2626, #991B1B)"
            : "rgba(220, 38, 38,0.10)",
          color: active ? "#1F0808" : color,
        }}
      >
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-white text-[12px] font-semibold tracking-tight">
          {title}
        </div>
        <div className="text-[#A98046] text-[10.5px] mt-0.5">{detail}</div>
      </div>
      {active && (
        <span
          className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] font-bold px-1.5 py-0.5 rounded"
          style={{ background: "#DC2626", color: "#1F0808" }}
        >
          Live
        </span>
      )}
    </div>
  );
}

export function ScreenEmail() {
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
      <div className="absolute inset-0 flex flex-col">
        {/* Top stats strip */}
        <div
          className="grid grid-cols-3 gap-px"
          style={{ background: "rgba(220, 38, 38,0.10)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="px-6 py-4"
              style={{ background: "#0F0902" }}
            >
              <div className="text-[#A98046] text-[9.5px] tracking-[0.22em] uppercase mb-1">
                {s.label}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-black tabular-nums" style={{ fontSize: 22 }}>
                  {s.value}
                </span>
                <span
                  className="text-[10.5px] tabular-nums"
                  style={{ color: s.positive ? "#84CC16" : "#FECACA" }}
                >
                  {s.positive ? "▲" : "▼"} {s.trend}
                </span>
              </div>
              <div className="text-[#7C5A2A] text-[10px] mt-1">
                vs Klaviyo benchmark
              </div>
            </div>
          ))}
        </div>

        {/* Body - split */}
        <div className="flex-1 grid grid-cols-[1fr_380px] overflow-hidden">
          {/* LEFT - Flow */}
          <div className="overflow-hidden px-9 py-7">
            {/* Header */}
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-[#A98046] text-[9.5px] tracking-[0.22em] uppercase mb-1">
                  Flow · Cart abandon · v3
                </div>
                <h2
                  className="text-white tracking-tight"
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  When a buyer leaves a coat in the bag.
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[10.5px] px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1"
                  style={{
                    background: "rgba(132,204,22,0.10)",
                    color: "#84CC16",
                    border: "1px solid rgba(132,204,22,0.30)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  Running
                </span>
                <span
                  className="text-[10.5px] px-2.5 py-1 rounded-full text-[#FECACA]"
                  style={{ border: "1px solid rgba(220, 38, 38,0.20)" }}
                >
                  Last 30 days
                </span>
              </div>
            </div>

            {/* Flow chain */}
            <div className="flex flex-col gap-2.5 max-w-md">
              <FlowNode
                icon={<IconBolt size={14} stroke={1.8} />}
                title="Trigger"
                detail="Cart with > $120 of value, no checkout in 45 min"
              />
              {/* connector */}
              <div className="ml-[28px] h-3 w-px" style={{ background: "rgba(220, 38, 38,0.25)" }} />
              <FlowNode
                icon={<IconMail size={14} stroke={1.8} />}
                title="Email 1 - Soft reminder"
                detail="Subject: It's still in your bag"
                active
              />
              <div className="ml-[28px] h-3 w-px" style={{ background: "rgba(220, 38, 38,0.25)" }} />
              <FlowNode
                icon={<IconClock size={14} stroke={1.8} />}
                title="Wait · 48 hours"
                detail="Skip if customer has placed any order in this period"
              />
              <div className="ml-[28px] h-3 w-px" style={{ background: "rgba(220, 38, 38,0.25)" }} />
              <FlowNode
                icon={<IconGitFork size={14} stroke={1.8} />}
                title="Branch - by value"
                detail="≥ $180 → handwritten reply · &lt; $180 → standard"
              />
              <div className="ml-[28px] h-3 w-px" style={{ background: "rgba(220, 38, 38,0.25)" }} />
              <FlowNode
                icon={<IconMail size={14} stroke={1.8} />}
                title="Email 2 - Reply or save"
                detail="Subject: Two ways to keep this one"
              />
            </div>

            {/* AI note */}
            <div
              className="mt-7 rounded-lg p-4 max-w-md inline-flex items-start gap-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220, 38, 38,0.06) 0%, transparent 100%)",
                border: "1px solid rgba(220, 38, 38,0.18)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded shrink-0"
                style={{
                  background: "rgba(220, 38, 38,0.12)",
                  border: "1px solid rgba(220, 38, 38,0.25)",
                }}
              >
                <IconSparkles size={12} stroke={1.8} className="text-amber-200" />
              </span>
              <div>
                <div className="text-white text-[12px] font-medium mb-1">
                  AI suggestion · tighten subject
                </div>
                <p className="text-[#A98046] text-[11px] leading-relaxed">
                  &ldquo;It&apos;s still in your bag&rdquo; outperforms &ldquo;Don&apos;t forget&rdquo;
                  in the workwear vertical by 14% on opens. Want to A/B it?
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - Email preview */}
          <aside
            className="border-l overflow-hidden flex flex-col"
            style={{
              background: "#0F0902",
              borderColor: "rgba(220, 38, 38,0.10)",
            }}
          >
            <div
              className="px-5 py-3 border-b flex items-center justify-between"
              style={{ borderColor: "rgba(220, 38, 38,0.10)" }}
            >
              <div className="text-[#A98046] text-[9.5px] tracking-[0.22em] uppercase">
                Preview · Email 1
              </div>
              <div className="text-[#FECACA] text-[10.5px]">Mobile · iOS</div>
            </div>

            {/* Email body */}
            <div className="flex-1 overflow-hidden p-5">
              <div
                className="rounded-md overflow-hidden"
                style={{
                  background: "#FBF6EA",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
                }}
              >
                {/* Email header */}
                <div className="px-4 pt-4 pb-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <div className="text-[#7C5A2A] text-[8px] uppercase tracking-[0.22em]">
                    From DRFT
                  </div>
                  <div className="text-[#1F0808] text-[12px] font-semibold mt-1 tracking-tight">
                    It&apos;s still in your bag.
                  </div>
                </div>

                {/* Logo */}
                <div className="px-4 py-4 text-center">
                  <div
                    className="inline-block text-[#1F0808] tracking-[0.16em]"
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                    }}
                  >
                    DRFT<span style={{ color: "#DC2626" }}>*</span>
                  </div>
                </div>

                {/* Product card */}
                <div className="px-4">
                  <div
                    className="rounded h-24 relative overflow-hidden mb-3 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)",
                    }}
                  >
                    <svg viewBox="0 0 100 140" className="h-[88%]">
                      <path
                        d="M 30 30 L 40 15 L 60 15 L 70 30 L 84 38 L 84 110 L 78 130 L 22 130 L 16 110 L 16 38 Z"
                        fill="rgba(0,0,0,0.55)"
                        stroke="#1F0808"
                        strokeWidth="1.4"
                      />
                      <line x1="50" y1="25" x2="50" y2="130" stroke="#1F0808" strokeWidth="0.8" />
                    </svg>
                  </div>

                  <div className="text-[#1F0808] text-[11px] font-semibold">
                    Field Overcoat · Bracken · M
                  </div>
                  <div className="text-[#7C5A2A] text-[10px] tabular-nums">
                    $189 · last 3 in stock
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 py-4">
                  <p className="text-[#1F0808] text-[11px] leading-relaxed">
                    Hello there. The coat is still on hold for you. We&apos;ve
                    only got three left in your size in the Bracken colourway -
                    if it&apos;s the one, now is the moment.
                  </p>
                </div>

                {/* CTA */}
                <div className="px-4 pb-5">
                  <div
                    className="text-center py-2.5 rounded text-[11px] font-bold tracking-[0.12em] uppercase"
                    style={{
                      background: "#1F0808",
                      color: "#DC2626",
                    }}
                  >
                    Finish my order →
                  </div>
                  <div className="text-center text-[#7C5A2A] text-[9px] mt-2">
                    Or save the coat for later
                  </div>
                </div>
              </div>

              {/* Sent count */}
              <div className="mt-4 flex items-center justify-between text-[10px] text-[#A98046]">
                <span className="inline-flex items-center gap-1.5">
                  <IconCircleCheck size={10} stroke={2} className="text-lime-400" />
                  Sent 1,840 times this month
                </span>
                <span>Edit copy</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
