"use client";

import { m } from "framer-motion";

const fakeRow = (color: string, w = "70%", opacity = 0.4) => (
  <div
    className="h-1.5 rounded"
    style={{ background: color, width: w, opacity }}
  />
);

export function KovaListingMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      {/* Property card */}
      <div
        className="rounded-xl p-4 border"
        style={{ background: "#0D1F38", borderColor: "rgba(14,165,233,0.2)" }}
      >
        <div className="flex items-center justify-between">
          <div
            className="rounded-md h-14 w-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(14,165,233,0.05))",
            }}
          />
          <span
            className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(14,165,233,0.15)",
              color: "#BAE6FD",
              border: "1px solid rgba(14,165,233,0.3)",
            }}
          >
            94% MATCH
          </span>
        </div>
        <div className="mt-3 space-y-1.5">
          {fakeRow("#0EA5E9", "65%", 0.5)}
          {fakeRow("#0EA5E9", "40%", 0.25)}
        </div>
        <div className="text-[#BAE6FD] text-sm font-semibold mt-2">$485,000</div>
      </div>

      {/* Pipeline strip */}
      <div className="mt-3 flex gap-2">
        {[
          { label: "New", count: 4 },
          { label: "Contact", count: 3 },
          { label: "Matched", count: 3, hot: true },
          { label: "Offer", count: 2 },
        ].map((p) => (
          <div
            key={p.label}
            className="flex-1 rounded-md py-1.5 text-center border text-[9px]"
            style={{
              background: p.hot ? "rgba(14,165,233,0.1)" : "#0a0a0a",
              borderColor: p.hot
                ? "rgba(14,165,233,0.3)"
                : "rgba(255,255,255,0.03)",
              color: p.hot ? "#BAE6FD" : "#444",
            }}
          >
            <div className="font-semibold">{p.count}</div>
            <div className="opacity-70 mt-0.5 tracking-widest uppercase">
              {p.label}
            </div>
          </div>
        ))}
      </div>

      {/* Emails sent */}
      <div className="mt-3 flex items-center gap-2 text-[10px] text-[#888]">
        <span className="text-emerald-400">✓</span>
        <span>47 automated follow-ups sent this week</span>
      </div>
    </div>
  );
}

export function SeroListingMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Appointment calendar */}
      <div
        className="rounded-xl p-3 border"
        style={{ background: "#071F15", borderColor: "rgba(16,185,129,0.2)" }}
      >
        <div className="text-[9px] text-[#A7F3D0] tracking-widest uppercase mb-2 opacity-70">
          Today
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => {
            const filled = [0, 2, 3, 5].includes(i);
            const flagged = i === 4;
            return (
              <div
                key={i}
                className="h-6 rounded text-[8px] flex items-center justify-center"
                style={{
                  background: filled
                    ? "rgba(16,185,129,0.18)"
                    : flagged
                    ? "rgba(245,158,11,0.18)"
                    : "rgba(255,255,255,0.02)",
                  color: filled ? "#A7F3D0" : flagged ? "#FDE68A" : "#333",
                }}
              >
                {9 + i}
              </div>
            );
          })}
        </div>
      </div>

      {/* AI processing */}
      <div className="mt-3 flex items-center gap-3 text-[10px]">
        <span className="relative flex h-1.5 w-1.5">
          <m.span
            className="absolute inline-flex h-full w-full rounded-full"
            style={{ background: "#10B981" }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span
            className="relative h-1.5 w-1.5 rounded-full"
            style={{ background: "#10B981" }}
          />
        </span>
        <span className="text-[#A7F3D0] flex-1">
          AI intake processing: 4 records...
        </span>
      </div>

      {/* Phone outline */}
      <div className="mt-3 flex justify-center">
        <div
          className="rounded-2xl border-2 p-3 w-32"
          style={{
            borderColor: "rgba(16,185,129,0.2)",
            background: "#051A12",
          }}
        >
          <div className="text-[8px] text-[#A7F3D0] opacity-70">
            Patient summary
          </div>
          <div className="mt-2 space-y-1">
            {fakeRow("#10B981", "85%", 0.4)}
            {fakeRow("#10B981", "60%", 0.25)}
            {fakeRow("#10B981", "70%", 0.3)}
          </div>
          <div
            className="mt-2 inline-block text-[7px] tracking-widest uppercase px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(16,185,129,0.15)",
              color: "#A7F3D0",
            }}
          >
            Priority: Normal
          </div>
        </div>
      </div>
    </div>
  );
}

export function AurumListingMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto" aria-hidden="true">
      {/* Chart card */}
      <div
        className="rounded-xl p-4 border"
        style={{ background: "#1A1206", borderColor: "rgba(217,119,6,0.2)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#FDE68A] text-[10px] tracking-widest uppercase opacity-70">
            Portfolio
          </span>
          <span className="text-[#FDE68A] text-[10px] font-semibold">
            +12.4%
          </span>
        </div>
        <svg width="100%" height="48" viewBox="0 0 200 48" className="block">
          <path
            d="M 0 36 Q 30 28 50 30 T 100 20 T 160 14 T 200 8"
            stroke="#D97706"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="200" cy="8" r="2.5" fill="#D97706" />
        </svg>
      </div>

      {/* Report cover */}
      <div
        className="mt-3 rounded-md border aspect-[4/3] p-3 flex flex-col justify-between"
        style={{ background: "#120D04", borderColor: "rgba(217,119,6,0.2)" }}
      >
        <div>
          <div
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "#FDE68A", opacity: 0.7 }}
          >
            Q4 2024
          </div>
          <div
            className="text-base mt-1 font-serif italic"
            style={{ color: "#FDE68A" }}
          >
            Portfolio Intelligence
          </div>
        </div>
        <div className="text-[9px] text-[#D97706] opacity-60 tracking-wider">
          — Aurum Confidential —
        </div>
      </div>

      {/* Client list */}
      <div className="mt-3 space-y-1.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-[10px]"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D97706", opacity: 0.6 }}
              />
              <span className="text-[#888]">Client {String(i + 1).padStart(2, "0")}</span>
            </div>
            <span className="text-[#FDE68A] opacity-70">
              ${(2.4 - i * 0.4).toFixed(1)}M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DrftListingMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      {/* Product hero */}
      <div
        className="rounded-xl p-5 border flex items-center justify-between"
        style={{ background: "#1A0F04", borderColor: "rgba(249,115,22,0.2)" }}
      >
        <div className="flex-1">
          <div
            className="inline-block text-[9px] tracking-widest uppercase px-2 py-0.5 rounded mb-2"
            style={{
              background: "rgba(249,115,22,0.15)",
              color: "#FED7AA",
            }}
          >
            New Drop
          </div>
          <div className="space-y-1">
            {fakeRow("#F97316", "70%", 0.5)}
            {fakeRow("#F97316", "50%", 0.3)}
          </div>
        </div>
        <div
          className="w-20 h-20 rounded-full ml-3"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.6), rgba(249,115,22,0.05))",
          }}
        />
      </div>

      {/* Email metric */}
      <div className="mt-3 flex items-center justify-between text-[10px]">
        <span className="text-[#888]">Email open rate</span>
        <span className="text-[#F97316] font-semibold">34.2%</span>
      </div>

      {/* IG grid */}
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded"
            style={{
              background: `linear-gradient(135deg, rgba(249,115,22,${
                0.25 + (i % 3) * 0.08
              }), rgba(249,115,22,0.05))`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function LinxListingMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      {/* Proposal generator */}
      <div
        className="rounded-xl p-4 border"
        style={{ background: "#120E1E", borderColor: "rgba(139,92,246,0.2)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-[#DDD6FE] opacity-70 tracking-widest uppercase">
            Proposal AI
          </span>
          <span className="text-[10px] text-[#DDD6FE]">78%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
          <m.div
            className="h-full rounded-full"
            style={{ background: "#8B5CF6" }}
            initial={{ width: "0%" }}
            whileInView={{ width: "78%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
        <div className="text-[#888] text-[10px] mt-2">
          Brief entered → Generating proposal…
        </div>
      </div>

      {/* Status row */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div
          className="rounded-md p-3 border"
          style={{
            background: "#0a0a0a",
            borderColor: "rgba(139,92,246,0.15)",
          }}
        >
          <div className="text-[9px] tracking-widest uppercase text-[#DDD6FE] opacity-60">
            Active clients
          </div>
          <div className="text-white text-base font-semibold mt-1">23</div>
        </div>
        <div
          className="rounded-md p-3 border"
          style={{
            background: "#0a0a0a",
            borderColor: "rgba(139,92,246,0.15)",
          }}
        >
          <div className="text-[9px] tracking-widest uppercase text-[#DDD6FE] opacity-60">
            Reports
          </div>
          <div className="text-emerald-400 text-base font-semibold mt-1">
            4/4 ✓
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListingMockup({ slug }: { slug: string }) {
  switch (slug) {
    case "kova":
      return <KovaListingMockup />;
    case "sero":
      return <SeroListingMockup />;
    case "aurum":
      return <AurumListingMockup />;
    case "drft":
      return <DrftListingMockup />;
    case "linx":
      return <LinxListingMockup />;
    default:
      return null;
  }
}
