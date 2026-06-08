"use client";

/**
 * Kova V2 — AI Matching engine
 *
 * The "specimen" screen for the case study. Shows:
 *   - Left: incoming listing with property card (rendered as schematic), key
 *     attributes (price, sqft, beds, neighborhood, features)
 *   - Right: ranked list of buyer matches with score + reasons + last activity
 *   - AI scoring panel at the top with model name and confidence
 */

import { m } from "framer-motion";
import {
  IconHome,
  IconBed,
  IconRulerMeasure,
  IconMapPin,
  IconStar,
  IconChevronRight,
  IconSparkles,
  IconMail,
  IconCircleCheck,
  IconClock,
} from "@tabler/icons-react";

const LISTING = {
  address: "201 W 21st Street, Apt 7G",
  hood: "Chelsea, Manhattan",
  price: "$1,850,000",
  beds: 2,
  baths: 2,
  sqft: 1320,
  daysOnMarket: 0,
  pricePerSqft: 1401,
  features: ["Pre-war building", "Doorman", "Open kitchen", "South-facing"],
};

const MATCHES = [
  {
    name: "Sarah Mitchell",
    score: 94,
    initials: "SM",
    color: "#0EA5E9",
    budget: "$1.6 – 2.1M",
    pref: "2BR · Chelsea / W Village · pre-war",
    reasons: ["Budget alignment", "Neighborhood preference (3 saved)", "Pre-war filter matched"],
    last: "Viewed similar 2 days ago",
    status: "hot",
  },
  {
    name: "Jonathan Cole",
    score: 91,
    initials: "JC",
    color: "#10B981",
    budget: "$1.8 – 2.3M",
    pref: "2BR · S-facing · doorman",
    reasons: ["Doorman requirement matched", "Light preference (S-facing)", "1320sqft inside range"],
    last: "Saved 3 in Chelsea",
    status: "hot",
  },
  {
    name: "Emma Reyes",
    score: 88,
    initials: "ER",
    color: "#8B5CF6",
    budget: "$1.5 – 2.0M",
    pref: "2BR · open kitchen",
    reasons: ["Open kitchen filter", "Budget ceiling close", "Recently active"],
    last: "Clicked saved search yesterday",
  },
  {
    name: "Marcus Liu",
    score: 76,
    initials: "ML",
    color: "#F97316",
    budget: "$1.5 – 1.9M",
    pref: "2BR · West Village preferred",
    reasons: ["Bedroom count match", "Adjacent neighborhood", "Slightly above price ceiling"],
    last: "Opened follow-up email 1h ago",
  },
];

export function ScreenMatching() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #050B14 0%, #02060B 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Topbar */}
        <header
          className="flex items-center gap-3 px-6 py-3 border-b"
          style={{ background: "#040A12", borderColor: "#0E2236" }}
        >
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-md"
            style={{
              background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
            }}
          >
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
              <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="white" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="text-white text-[12.5px] font-medium">AI Matching</span>
          <span className="text-[#5681AB] text-[11px]">/</span>
          <span className="text-[#9DB5CC] text-[11px]">New listing intake</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10.5px] text-[#7DD3FC] px-2 py-1 rounded" style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.20)" }}>
            <m.span
              className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Live · MLS sync
          </span>
        </header>

        {/* AI status bar */}
        <div
          className="flex items-center gap-3 px-6 py-2.5 border-b text-[11px]"
          style={{
            background: "linear-gradient(90deg, rgba(14,165,233,0.06) 0%, transparent 60%)",
            borderColor: "#0E2236",
          }}
        >
          <m.span
            className="inline-flex items-center justify-center w-5 h-5 rounded"
            style={{
              background: "rgba(14,165,233,0.15)",
              border: "1px solid rgba(14,165,233,0.30)",
            }}
            animate={{ boxShadow: ["0 0 0 rgba(14,165,233,0)", "0 0 10px rgba(14,165,233,0.5)", "0 0 0 rgba(14,165,233,0)"] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <IconSparkles size={11} stroke={1.8} className="text-sky-300" />
          </m.span>
          <span className="text-white font-medium">Claude · matching against 42 active buyer profiles</span>
          <span className="text-[#5681AB]">→</span>
          <span className="text-[#7DD3FC] tabular-nums">12 candidates scored</span>
          <span className="text-[#5681AB]">·</span>
          <span className="text-[#7DD3FC] tabular-nums">4 above 75% threshold</span>
          <span className="text-[#5681AB]">·</span>
          <span className="text-[#7DD3FC]">avg latency 2.1s</span>
        </div>

        {/* Main split */}
        <div className="flex-1 grid grid-cols-[420px_1fr] overflow-hidden">
          {/* LEFT: incoming listing */}
          <div className="border-r p-5 overflow-hidden flex flex-col gap-3.5" style={{ borderColor: "#0E2236" }}>
            <div className="flex items-center justify-between">
              <span className="text-[#3E6080] text-[10px] tracking-[0.22em] uppercase">
                Incoming · 9:42 am
              </span>
              <span
                className="inline-flex items-center gap-1 text-[9.5px] text-[#7DD3FC] px-1.5 py-0.5 rounded"
                style={{ background: "rgba(14,165,233,0.10)" }}
              >
                <IconClock size={9} stroke={1.8} />
                12s in queue
              </span>
            </div>

            {/* Property "photo" — schematic gradient */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.30) 0%, rgba(14,165,233,0.06) 50%, rgba(2,6,11,0.9) 100%)",
                border: "1px solid #0E2236",
              }}
            >
              {/* "windows" */}
              <div className="absolute bottom-3 left-3 right-3 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: 16,
                      background: i === 3 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)",
                    }}
                  />
                ))}
              </div>
              <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded text-[9.5px] font-semibold tracking-[0.16em] uppercase" style={{ background: "rgba(2,6,11,0.7)", color: "#7DD3FC", backdropFilter: "blur(4px)" }}>
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Listed today
              </div>
            </div>

            {/* Listing details */}
            <div>
              <div className="text-white text-[14px] font-semibold tracking-tight leading-snug">
                {LISTING.address}
              </div>
              <div className="text-[#7CA0C2] text-[11.5px] mt-1 inline-flex items-center gap-1">
                <IconMapPin size={11} stroke={1.5} className="text-[#5681AB]" />
                {LISTING.hood}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: IconBed, label: "Beds", value: `${LISTING.beds}` },
                { icon: IconHome, label: "Baths", value: `${LISTING.baths}` },
                { icon: IconRulerMeasure, label: "SQFT", value: LISTING.sqft.toLocaleString() },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="rounded-md px-2.5 py-2"
                    style={{ background: "#040A12", border: "1px solid #0E2236" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon size={11} stroke={1.6} className="text-[#5681AB]" />
                      <span className="text-[#5681AB] text-[9.5px] tracking-[0.16em] uppercase">{s.label}</span>
                    </div>
                    <div className="text-white text-[13px] font-semibold mt-0.5 tabular-nums">{s.value}</div>
                  </div>
                );
              })}
            </div>

            <div
              className="rounded-md p-3 flex items-baseline justify-between"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.02) 100%)",
                border: "1px solid rgba(14,165,233,0.20)",
              }}
            >
              <div>
                <div className="text-[#7CA0C2] text-[10px] tracking-[0.16em] uppercase">List price</div>
                <div className="text-white text-[20px] font-black tracking-tight tabular-nums mt-0.5">
                  {LISTING.price}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#7CA0C2] text-[10px] tracking-[0.16em] uppercase">$/SQFT</div>
                <div className="text-[#7DD3FC] text-[13px] font-semibold tabular-nums mt-0.5">
                  ${LISTING.pricePerSqft.toLocaleString()}
                </div>
              </div>
            </div>

            <div>
              <div className="text-[#3E6080] text-[10px] tracking-[0.16em] uppercase mb-2">Features</div>
              <div className="flex flex-wrap gap-1.5">
                {LISTING.features.map((f) => (
                  <span
                    key={f}
                    className="text-[10.5px] px-2 py-1 rounded"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "#9DB5CC",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: matches */}
          <div className="overflow-hidden flex flex-col">
            <div
              className="px-6 py-3 flex items-center justify-between border-b"
              style={{ borderColor: "#0E2236" }}
            >
              <div>
                <div className="text-white text-[13px] font-medium tracking-tight">
                  Ranked matches
                </div>
                <div className="text-[#7CA0C2] text-[10.5px] mt-0.5">
                  4 buyers above the 75% threshold · sorted by score
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10.5px]">
                <span className="text-[#7CA0C2]">Threshold</span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 rounded font-medium text-[#7DD3FC]"
                  style={{ background: "rgba(14,165,233,0.10)", border: "1px solid rgba(14,165,233,0.25)" }}
                >
                  75% ↑
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              {MATCHES.map((b) => (
                <div
                  key={b.name}
                  className="border-b px-6 py-3.5"
                  style={{ borderColor: "#0E2236" }}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-[12px] font-semibold shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${b.color} 0%, ${b.color}aa 100%)`,
                      }}
                    >
                      {b.initials}
                      {b.status === "hot" && (
                        <m.span
                          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                          style={{ background: "#0EA5E9", border: "2px solid #02060B" }}
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        />
                      )}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-[13px] font-medium tracking-tight">{b.name}</span>
                        {b.status === "hot" && (
                          <span
                            className="text-[9px] tracking-[0.22em] uppercase font-semibold px-1.5 py-0.5 rounded"
                            style={{ background: "#0EA5E9", color: "#02060B" }}
                          >
                            Hot
                          </span>
                        )}
                      </div>
                      <div className="text-[#7CA0C2] text-[11px]">{b.pref}</div>
                      <div className="text-[#5681AB] text-[10.5px] mt-0.5 tabular-nums">
                        Budget {b.budget} · {b.last}
                      </div>

                      {/* Reasons */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {b.reasons.map((r, i) => (
                          <span
                            key={i}
                            className="text-[10px] inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
                            style={{
                              background: "rgba(16,185,129,0.06)",
                              border: "1px solid rgba(16,185,129,0.18)",
                              color: "#6EE7B7",
                            }}
                          >
                            <IconCircleCheck size={9} stroke={2} />
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div
                        className="inline-flex items-baseline gap-1 text-[18px] font-black tabular-nums tracking-tight"
                        style={{
                          color: b.score >= 90 ? "#0EA5E9" : b.score >= 80 ? "#7DD3FC" : "#9DB5CC",
                        }}
                      >
                        {b.score}
                        <span className="text-[11px] font-medium opacity-60">%</span>
                      </div>
                      {/* Mini score bar */}
                      <div
                        className="h-1 w-24 rounded-full overflow-hidden"
                        style={{ background: "#0E2236" }}
                      >
                        <m.span
                          className="block h-full"
                          style={{
                            background:
                              b.score >= 90
                                ? "linear-gradient(90deg,#0EA5E9,#7DD3FC)"
                                : "linear-gradient(90deg,#7CA0C2,#9DB5CC)",
                            width: `${b.score}%`,
                            transformOrigin: "left",
                          }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <button
                        className="text-[10px] px-2 py-1 rounded inline-flex items-center gap-1 font-medium"
                        style={{
                          background:
                            b.status === "hot"
                              ? "#0EA5E9"
                              : "rgba(255,255,255,0.04)",
                          color: b.status === "hot" ? "#02060B" : "#9DB5CC",
                          border:
                            b.status === "hot"
                              ? "none"
                              : "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <IconMail size={9} stroke={2} />
                        Send draft
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

void IconStar;
void IconChevronRight;
