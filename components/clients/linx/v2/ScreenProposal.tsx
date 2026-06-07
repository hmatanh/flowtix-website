"use client";

/**
 * Linx V2 — AI Proposal Engine
 *
 * The studio's writing room. Brief input on the left, a 12-page proposal
 * being assembled on the right, with an AI sidekick on the far right
 * giving editorial nudges. Reads like a writer's workshop, not a sales
 * configurator.
 */

import { m } from "framer-motion";
import {
  IconFileText,
  IconSparkles,
  IconCircleCheck,
  IconClock,
  IconChevronRight,
} from "@tabler/icons-react";

const SECTIONS = [
  { name: "Cover", words: 0, done: true },
  { name: "Brief restated", words: 240, done: true },
  { name: "Strategic thesis", words: 410, done: true, active: true },
  { name: "Approach", words: 590, done: false },
  { name: "Scope & phases", words: 0, done: false },
  { name: "Deliverables", words: 0, done: false },
  { name: "Timeline", words: 0, done: false },
  { name: "Pricing", words: 0, done: false },
  { name: "Team", words: 0, done: false },
];

export function ScreenProposal() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #14101F 0%, #0A0814 100%)",
        color: "#E6E0F4",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "240px 1fr 300px" }}>
        {/* LEFT — Outline */}
        <aside
          className="border-r overflow-hidden flex flex-col"
          style={{ borderColor: "rgba(139,92,246,0.10)", background: "#0F0B1F" }}
        >
          <div
            className="px-5 py-4 border-b"
            style={{ borderColor: "rgba(139,92,246,0.10)" }}
          >
            <div className="text-[#9180B5] text-[9.5px] tracking-[0.22em] uppercase mb-1">
              Proposal
            </div>
            <div className="text-white text-[13px] font-semibold tracking-tight">
              Marlow + Co · Brand & Site
            </div>
            <div className="text-[#7A6BA0] text-[10.5px] mt-0.5 inline-flex items-center gap-1">
              <IconClock size={9} stroke={1.5} />
              Drafting · 38% complete
            </div>
          </div>

          <nav className="flex-1 py-3 px-2 space-y-1 overflow-hidden">
            {SECTIONS.map((s, i) => (
              <div
                key={s.name}
                className="grid grid-cols-[18px_1fr_auto] gap-2 items-center px-2.5 py-2 rounded-md text-[11.5px]"
                style={
                  s.active
                    ? {
                        background: "rgba(139,92,246,0.08)",
                        boxShadow: "inset 2px 0 0 #8B5CF6",
                        color: "#DDD6FE",
                      }
                    : { color: s.done ? "#9180B5" : "#5A4D7A" }
                }
              >
                <span
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                  style={{
                    background: s.done ? "rgba(139,92,246,0.18)" : "transparent",
                    border: s.done
                      ? "1px solid rgba(139,92,246,0.30)"
                      : "1px solid rgba(139,92,246,0.12)",
                  }}
                >
                  {s.done && (
                    <IconCircleCheck size={10} stroke={2.5} className="text-violet-300" />
                  )}
                </span>
                <span className="font-mono text-[9.5px] text-[#7A6BA0] tabular-nums w-4 shrink-0 col-start-1 row-start-1 hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{s.name}</span>
                <span className="text-[#5A4D7A] text-[9.5px] tabular-nums">
                  {s.words || "—"}
                </span>
              </div>
            ))}
          </nav>

          <div
            className="px-4 py-3 border-t flex items-center justify-between"
            style={{ borderColor: "rgba(139,92,246,0.10)" }}
          >
            <div>
              <div className="text-[#9180B5] text-[9px] tracking-[0.18em] uppercase">
                Total
              </div>
              <div className="text-white text-[12px] font-medium">1,240 words</div>
            </div>
            <span
              className="text-[10px] px-2.5 py-1 rounded-md font-medium"
              style={{
                background: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
                color: "#0A0814",
              }}
            >
              Preview PDF
            </span>
          </div>
        </aside>

        {/* CENTER — Editor */}
        <main className="overflow-hidden flex flex-col">
          {/* Top bar */}
          <div
            className="px-7 py-3 flex items-center justify-between border-b text-[11px]"
            style={{ borderColor: "rgba(139,92,246,0.10)", background: "#0F0B1F" }}
          >
            <div className="flex items-center gap-2 text-[#9180B5]">
              <IconFileText size={11} stroke={1.5} />
              <span>Section 3 — Strategic thesis</span>
              <span className="text-[#5A4D7A]">·</span>
              <span>page 3 of 12</span>
            </div>
            <div className="flex items-center gap-2 text-[10.5px]">
              <span className="text-[#7A6BA0]">Saved · 24s ago</span>
              <span
                className="inline-flex items-center gap-1 px-2 py-1 rounded"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  color: "#DDD6FE",
                  border: "1px solid rgba(139,92,246,0.18)",
                }}
              >
                <IconSparkles size={9} stroke={1.8} />
                AI v2
              </span>
              <span
                className="px-3 py-1 rounded text-[10.5px] font-medium"
                style={{
                  background: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
                  color: "#0A0814",
                }}
              >
                Approve section
              </span>
            </div>
          </div>

          {/* Document */}
          <div
            className="flex-1 overflow-hidden px-10 py-8"
            style={{ background: "#0A0814" }}
          >
            {/* Page header */}
            <div className="mb-7 flex items-end justify-between">
              <div>
                <div className="text-[#9180B5] text-[9.5px] tracking-[0.24em] uppercase mb-3">
                  Linx Studio · Confidential
                </div>
                <h2
                  className="text-white tracking-tight"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  The strategic thesis
                </h2>
                <div className="text-[#9180B5] text-[11px] italic mt-1">
                  For Marlow + Co · Q1 2025
                </div>
              </div>
              <div
                className="text-right text-[#7A6BA0] italic"
                style={{ fontSize: 11 }}
              >
                — page 3 of 12 —
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p
                  className="text-[#E6E0F4] leading-relaxed"
                  style={{ fontSize: 13.5 }}
                >
                  <span
                    className="font-bold mr-1.5 mt-1 float-left leading-none"
                    style={{
                      fontSize: 48,
                      color: "#8B5CF6",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    M
                  </span>
                  arlow stopped looking like a young firm three years ago. The
                  brand it walks around in still does. The work this proposal
                  outlines closes that gap — not by softening the message, but
                  by giving it the surface it deserves.
                </p>

                <p
                  className="text-[#E6E0F4] leading-relaxed mt-4"
                  style={{ fontSize: 13.5 }}
                >
                  We treat the proposal as the deliverable, not the deck. Each
                  section of this document corresponds to a workstream you can
                  choose to commission separately or run together — the brand,
                  the site, and the editorial system that keeps both alive.
                </p>

                <p
                  className="text-[#E6E0F4] leading-relaxed mt-4"
                  style={{ fontSize: 13.5 }}
                >
                  The strongest brand we&apos;ve built this year began with a
                  client who said,{" "}
                  <span
                    className="italic font-medium"
                    style={{ color: "#DDD6FE" }}
                  >
                    &ldquo;we&apos;re not trying to be cool, we&apos;re trying
                    to be trusted.&rdquo;
                  </span>{" "}
                  We&apos;re hoping to hear something like that from you in
                  the kickoff.
                </p>
              </div>

              <div>
                {/* Annotated callout */}
                <div
                  className="rounded p-4 mb-5"
                  style={{
                    background: "rgba(139,92,246,0.06)",
                    border: "1px solid rgba(139,92,246,0.20)",
                  }}
                >
                  <div className="text-[#DDD6FE] text-[9.5px] tracking-[0.18em] uppercase mb-2 font-semibold">
                    Three angles we'll explore
                  </div>
                  <ol className="space-y-2 text-[#E6E0F4] text-[12px] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] tabular-nums font-mono">
                        01
                      </span>
                      <span>
                        The version where Marlow leans further into legacy and
                        owns the words &ldquo;heritage&rdquo; and
                        &ldquo;continuity&rdquo;.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] tabular-nums font-mono">
                        02
                      </span>
                      <span>
                        The version where Marlow steps closer to its
                        practitioners and shows the people doing the work.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A78BFA] tabular-nums font-mono">
                        03
                      </span>
                      <span>
                        The version where Marlow speaks to the next-generation
                        client — younger founders, family offices in transition.
                      </span>
                    </li>
                  </ol>
                </div>

                <div
                  className="text-[#9180B5] italic"
                  style={{ fontSize: 12, lineHeight: 1.55 }}
                >
                  &ldquo;You only need one of these to ring true. We&apos;ll
                  present all three at the kickoff and decide together.&rdquo;
                </div>

                <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: "rgba(139,92,246,0.15)" }}>
                  <span className="text-[#7A6BA0] italic text-[11px]">
                    Drafted by Linx AI · reviewed by Iris Chen
                  </span>
                  <span
                    className="text-[#DDD6FE] inline-flex items-center gap-1 text-[11px]"
                  >
                    Continue
                    <IconChevronRight size={10} stroke={2} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT — AI nudges */}
        <aside
          className="border-l overflow-hidden flex flex-col"
          style={{ borderColor: "rgba(139,92,246,0.10)", background: "#0F0B1F" }}
        >
          <div
            className="px-5 py-3.5 border-b flex items-center gap-2"
            style={{ borderColor: "rgba(139,92,246,0.10)" }}
          >
            <m.span
              className="inline-flex items-center justify-center w-5 h-5 rounded"
              style={{
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.30)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 10px rgba(139,92,246,0.5)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <IconSparkles size={10} stroke={1.8} className="text-violet-300" />
            </m.span>
            <span className="text-white text-[12px] font-medium tracking-tight">
              Editorial nudges
            </span>
            <span className="text-[#9180B5] text-[9.5px] tracking-[0.18em] uppercase ml-auto">
              4 open
            </span>
          </div>

          <div className="flex-1 overflow-hidden px-4 py-4 space-y-3">
            {[
              {
                tag: "Voice",
                title: "Less &lsquo;we believe&rsquo;",
                body:
                  "Linx proposals in the last year used &ldquo;we believe&rdquo; 2.4× more than your style guide allows. Tightening to &ldquo;our take&rdquo;.",
                action: "Apply",
              },
              {
                tag: "Structure",
                title: "Move pricing earlier",
                body:
                  "Of seven proposals that landed this year, six surfaced pricing before page 8. Yours sits on page 10.",
              },
              {
                tag: "Story",
                title: "Reference Heyworth case",
                body:
                  "The Heyworth brand piece is the closest analog. Adding a one-line callout to it.",
              },
              {
                tag: "Number",
                title: "Round $48,300 → $48k",
                body:
                  "Linx convention is round figures in proposals, exact figures only in SOWs.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded p-3"
                style={{
                  background: "rgba(139,92,246,0.04)",
                  border: "1px solid rgba(139,92,246,0.12)",
                }}
              >
                <div className="text-[#DDD6FE] text-[9px] tracking-[0.18em] uppercase mb-1.5 font-semibold">
                  {s.tag}
                </div>
                <div
                  className="text-white text-[11.5px] font-medium leading-tight mb-1.5"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <div className="text-[#9180B5] text-[10.5px] leading-snug">
                  {s.body}
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded font-medium"
                    style={{
                      background: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
                      color: "#0A0814",
                    }}
                  >
                    Apply
                  </span>
                  <span className="text-[#7A6BA0] text-[10px]">Skip</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
