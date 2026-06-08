"use client";

/**
 * Aurum V2 - Confidential Client Portal
 *
 * The single screen a Henderson opens to see where things stand. Calm,
 * editorial, members-club. No noise. One performance number, one note
 * from the advisor, one report ready to read.
 */

import { m } from "framer-motion";
import {
  IconCircleCheck,
  IconDownload,
  IconMessage,
  IconLock,
  IconArrowUpRight,
} from "@tabler/icons-react";

export function ScreenPortal() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #1A1206 0%, #0A0701 100%)",
        color: "#F5EBD2",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      {/* Quiet amber glow top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(217,119,6,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative h-full flex flex-col">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-12 py-5 border-b"
          style={{ borderColor: "rgba(217,119,6,0.08)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-sm"
              style={{
                background: "linear-gradient(135deg,#D97706 0%,#78350F 100%)",
              }}
            >
              <span className="text-white text-[11px] font-serif italic font-bold">
                A
              </span>
            </span>
            <span className="font-serif-editorial text-white text-[13px] tracking-tight">
              Aurum Private
            </span>
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <span className="text-[#8C6B3A]">Portfolio</span>
            <span className="text-[#8C6B3A]">Documents</span>
            <span className="text-[#FCD34D]">Communications</span>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-full"
              style={{
                background: "rgba(217,119,6,0.06)",
                border: "1px solid rgba(217,119,6,0.18)",
                color: "#FCD34D",
              }}
            >
              <IconLock size={10} stroke={1.5} />
              Encrypted
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 grid grid-cols-[1fr_320px] overflow-hidden">
          {/* Left: portfolio + note */}
          <div className="px-12 py-10 overflow-hidden">
            <div className="text-[#8C6B3A] text-[10px] tracking-[0.28em] uppercase mb-4">
              Good morning, James
            </div>
            <h1
              className="font-serif-editorial text-white tracking-tight"
              style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.05 }}
            >
              Your portfolio is up{" "}
              <span style={{ color: "#FCD34D" }}>+11.4%</span> for the year.
            </h1>
            <p
              className="text-[#A98046] font-serif-editorial italic mt-5"
              style={{ fontSize: 16, lineHeight: 1.55 }}
            >
              Ahead of the blended benchmark by 1.8 percentage points. Quiet
              year on the strategy. Your Q4 report is below - Eitan walked
              through it on Tuesday.
            </p>

            {/* Quiet performance card */}
            <div
              className="mt-10 rounded-sm grid grid-cols-3 gap-px overflow-hidden"
              style={{
                background: "rgba(217,119,6,0.06)",
              }}
            >
              {[
                { k: "Year to date", v: "+11.4%", trend: "+1.8 vs bench" },
                { k: "12-month", v: "+13.2%", trend: "annualised" },
                { k: "Mandate floor", v: "+5.0%", trend: "10-year" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="px-6 py-5"
                  style={{ background: "#0F0902" }}
                >
                  <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-2">
                    {c.k}
                  </div>
                  <div
                    className="font-serif-editorial text-white tabular-nums tracking-tight"
                    style={{ fontSize: 30, fontWeight: 400 }}
                  >
                    {c.v}
                  </div>
                  <div className="text-[#A98046] text-[10.5px] italic mt-1">
                    {c.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Advisor note */}
            <div className="mt-10">
              <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-3">
                A note from your advisor
              </div>
              <div
                className="rounded-sm p-7"
                style={{
                  background: "#160F04",
                  border: "1px solid rgba(217,119,6,0.10)",
                  borderLeft: "2px solid #D97706",
                }}
              >
                <p
                  className="text-[#F5EBD2] font-serif-editorial italic leading-relaxed"
                  style={{ fontSize: 16 }}
                >
                  &ldquo;The portfolio did what it&apos;s meant to do this year
                  - participate in equity strength while the bond floor held.
                  We didn&apos;t change the mandate and we don&apos;t plan to.
                  The new year&apos;s commentary covers our forward read in
                  more depth.&rdquo;
                </p>
                <div className="flex items-center justify-between mt-5">
                  <div className="text-[#A98046] text-[12px] italic">
                    - Eitan Shaked, Managing Partner
                  </div>
                  <span
                    className="text-[11px] inline-flex items-center gap-1.5"
                    style={{ color: "#FCD34D" }}
                  >
                    <IconMessage size={11} stroke={1.5} />
                    Reply privately
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right rail: Q4 report */}
          <aside
            className="border-l px-7 py-10 overflow-hidden flex flex-col"
            style={{
              borderColor: "rgba(217,119,6,0.10)",
              background: "rgba(10,7,1,0.6)",
            }}
          >
            <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-3">
              New report
            </div>

            {/* Mini cover */}
            <m.div
              className="rounded-sm overflow-hidden mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #F5EFE3 0%, #EBE0C6 100%)",
                aspectRatio: "4/5.2",
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.5), 0 2px 0 rgba(217,119,6,0.40)",
              }}
              initial={{ y: 10, opacity: 0, rotate: -1.5 }}
              whileInView={{ y: 0, opacity: 1, rotate: -1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-5 h-full flex flex-col">
                <div className="text-[#A87B3A] text-[8.5px] tracking-[0.28em] uppercase">
                  Aurum Private · Confidential
                </div>
                <div
                  className="font-serif-editorial mt-3 leading-tight tracking-tight text-[#3A2B0E]"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                  }}
                >
                  Q4 2024
                  <br />
                  Portfolio Review
                </div>
                <div
                  className="font-serif-editorial italic mt-2 text-[#8C6B3A]"
                  style={{ fontSize: 11 }}
                >
                  Henderson Family Trust
                </div>
                <div
                  aria-hidden="true"
                  className="mt-auto h-px"
                  style={{ background: "rgba(217,119,6,0.40)" }}
                />
                <div className="mt-3 text-[#A87B3A] text-[8.5px] italic">
                  - 14 pages -
                </div>
              </div>
            </m.div>

            <div className="text-[#F5EBD2] text-[12px] font-medium tracking-tight mb-1">
              Q4 2024 Portfolio Review
            </div>
            <div className="text-[#A98046] text-[10.5px]">
              Delivered Jan 14 · Signed by Eitan
            </div>

            <div className="mt-5 space-y-2">
              <div
                className="rounded-sm px-3 py-2.5 inline-flex items-center justify-between gap-2 text-[11.5px] font-medium"
                style={{
                  background: "linear-gradient(135deg, #D97706, #B45309)",
                  color: "#1A1206",
                }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <IconDownload size={11} stroke={2} />
                  Read · 14 pages
                </span>
                <IconArrowUpRight size={11} stroke={2.5} />
              </div>
              <div
                className="rounded-sm px-3 py-2.5 inline-flex items-center gap-1.5 text-[11.5px]"
                style={{
                  color: "#FCD34D",
                  border: "1px solid rgba(217,119,6,0.25)",
                  background: "transparent",
                }}
              >
                Download PDF
              </div>
            </div>

            <div
              className="mt-7 pt-5 border-t"
              style={{ borderColor: "rgba(217,119,6,0.10)" }}
            >
              <div className="text-[#8C6B3A] text-[9.5px] tracking-[0.22em] uppercase mb-3">
                History
              </div>
              <div className="space-y-2.5 text-[11px]">
                {[
                  { q: "Q3 2024", read: true },
                  { q: "Q2 2024", read: true },
                  { q: "Q1 2024", read: true },
                ].map((r) => (
                  <div
                    key={r.q}
                    className="flex items-center gap-2 text-[#A98046]"
                  >
                    <IconCircleCheck
                      size={9}
                      stroke={2}
                      style={{ color: "rgba(217,119,6,0.45)" }}
                    />
                    <span className="flex-1">{r.q}</span>
                    <span className="text-[#5B4830] text-[10px]">Archive</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
