"use client";

/**
 * Sero V2 - Mobile patient intake
 *
 * Three iPhone-style frames laid out side-by-side at desktop; stacked
 * vertically on mobile. Each shows a different moment of the patient
 * intake flow: welcome → adaptive question → summary submitted.
 *
 * Used as the supporting "documentary" visual in the Sero story.
 */

import { m } from "framer-motion";
import {
  IconCircleCheck,
  IconChevronRight,
  IconMoonStars,
  IconHeartbeat,
} from "@tabler/icons-react";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto rounded-[36px] p-2"
      style={{
        width: "min(240px, 100%)",
        background: "linear-gradient(180deg, #0c2317 0%, #08180F 100%)",
        border: "1px solid rgba(16,185,129,0.18)",
        boxShadow:
          "0 25px 50px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)",
      }}
    >
      {/* Notch */}
      <span
        className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10"
        style={{ background: "#020A06" }}
      />
      <div
        className="rounded-[30px] overflow-hidden relative"
        style={{
          background: "linear-gradient(180deg, #FAF7F0 0%, #F1EBDD 100%)",
          aspectRatio: "9/19.5",
        }}
      >
        {children}
      </div>
      {/* Home bar */}
      <span
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
        style={{ background: "rgba(16,185,129,0.25)" }}
      />
    </div>
  );
}

export function ScreenMobile() {
  return (
    <div
      className="relative w-full font-sans select-none overflow-hidden"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(16,185,129,0.10) 0%, transparent 60%), linear-gradient(180deg, #051E15 0%, #03110A 100%)",
        color: "#E6F4EC",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        borderRadius: 16,
      }}
    >
      <div className="relative px-5 sm:px-10 py-8 sm:py-14">
        {/* Top label */}
        <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-md"
              style={{
                background: "linear-gradient(135deg,#10B981 0%,#047857 100%)",
              }}
            >
              <span className="text-white text-[12px] font-serif italic">s</span>
            </span>
            <span className="text-white text-[12px] sm:text-[13px] font-medium tracking-tight">
              Patient intake · iOS / Android
            </span>
          </div>
          <span className="text-[#5EAD8E] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase">
            Adaptive · 4–7 min avg
          </span>
        </div>

        {/* 3 phones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 items-stretch">
          {/* Phone 1 - Welcome */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <PhoneFrame>
              <div className="absolute inset-0 flex flex-col">
                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-4 py-2 text-[8px] tabular-nums"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  <span>9:42</span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-1.5 rounded-sm bg-[#0a0a0a]/40" />
                  </span>
                </div>

                <div className="flex-1 px-5 pt-6 pb-5 flex flex-col">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
                    style={{
                      background: "linear-gradient(135deg, #047857, #10B981)",
                    }}
                  >
                    <span className="text-white text-[24px] font-serif italic leading-none">
                      s
                    </span>
                  </span>

                  <div className="text-[#1F2D26] text-[9.5px] tracking-[0.22em] uppercase mb-3">
                    Welcome
                  </div>

                  <h3
                    className="text-[#0a1c14] tracking-tight"
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    Let&apos;s set up your first session with Dr. Bar-On.
                  </h3>

                  <p
                    className="text-[#3A5048] mt-3 leading-[1.55]"
                    style={{ fontSize: 11 }}
                  >
                    A short, kind questionnaire. About 6 minutes. You can
                    pause at any time and pick up where you left off.
                  </p>

                  <div className="mt-auto space-y-2">
                    <div
                      className="rounded-xl py-3 text-center text-white text-[12px] font-medium"
                      style={{
                        background: "linear-gradient(135deg,#10B981,#047857)",
                      }}
                    >
                      Begin
                    </div>
                    <div
                      className="rounded-xl py-3 text-center text-[#3A5048] text-[11px]"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(16,185,129,0.30)",
                      }}
                    >
                      I&apos;ll do this later
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-[#9FCEB9] text-[11px] text-center mt-4 tracking-tight">
              Step 1 - invitation by SMS
            </p>
          </m.div>

          {/* Phone 2 - Adaptive question */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PhoneFrame>
              <div className="absolute inset-0 flex flex-col">
                <div
                  className="flex items-center justify-between px-4 py-2 text-[8px] tabular-nums"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  <span>9:46</span>
                  <span className="w-3 h-1.5 rounded-sm bg-[#0a0a0a]/40" />
                </div>

                {/* Progress */}
                <div className="px-5 pt-1">
                  <div className="flex items-center justify-between text-[#3A5048] text-[8px] mb-1.5">
                    <span className="uppercase tracking-[0.18em]">Q 12 / 24</span>
                    <span>50%</span>
                  </div>
                  <div
                    className="w-full h-1 rounded-full overflow-hidden"
                    style={{ background: "rgba(16,185,129,0.15)" }}
                  >
                    <m.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #10B981, #047857)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>

                <div className="flex-1 px-5 pt-5 pb-5 flex flex-col">
                  <div className="flex items-center gap-1.5 mb-3 text-[#047857] text-[8.5px] tracking-[0.22em] uppercase">
                    <IconMoonStars size={9} stroke={1.5} />
                    Sleep section
                  </div>

                  <h3
                    className="text-[#0a1c14] tracking-tight"
                    style={{
                      fontSize: 17,
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    In the last two weeks, how often did you wake up worrying
                    about the next day?
                  </h3>

                  <div className="mt-5 space-y-2.5">
                    {[
                      { label: "Not at all", picked: false },
                      { label: "A few times", picked: false },
                      { label: "Most nights", picked: true },
                      { label: "Every night", picked: false },
                    ].map((opt) => (
                      <div
                        key={opt.label}
                        className="rounded-xl px-3.5 py-3 flex items-center justify-between text-[12px]"
                        style={{
                          background: opt.picked
                            ? "linear-gradient(135deg, rgba(16,185,129,0.20), rgba(16,185,129,0.05))"
                            : "rgba(16,185,129,0.04)",
                          border: opt.picked
                            ? "1.5px solid #10B981"
                            : "1px solid rgba(16,185,129,0.18)",
                          color: opt.picked ? "#0a3a25" : "#2A3F37",
                          fontWeight: opt.picked ? 600 : 400,
                        }}
                      >
                        {opt.label}
                        {opt.picked && (
                          <IconCircleCheck size={13} stroke={2} className="text-[#10B981]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <div
                      className="rounded-xl py-3 text-center text-white text-[12px] font-medium inline-flex items-center justify-center gap-1.5 w-full"
                      style={{
                        background: "linear-gradient(135deg,#10B981,#047857)",
                      }}
                    >
                      Continue
                      <IconChevronRight size={12} stroke={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-[#9FCEB9] text-[11px] text-center mt-4 tracking-tight">
              Step 2 - questions adapt to answers
            </p>
          </m.div>

          {/* Phone 3 - Submitted */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PhoneFrame>
              <div className="absolute inset-0 flex flex-col">
                <div
                  className="flex items-center justify-between px-4 py-2 text-[8px] tabular-nums"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  <span>9:54</span>
                  <span className="w-3 h-1.5 rounded-sm bg-[#0a0a0a]/40" />
                </div>

                <div className="flex-1 px-5 pt-12 pb-5 flex flex-col items-center text-center">
                  <m.span
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 16,
                      delay: 0.4,
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #10B981, #047857)",
                      boxShadow: "0 12px 32px rgba(16,185,129,0.35)",
                    }}
                  >
                    <IconCircleCheck size={28} stroke={2} className="text-white" />
                  </m.span>

                  <h3
                    className="text-[#0a1c14] tracking-tight"
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    Thank you, Sarah.
                  </h3>

                  <p
                    className="text-[#3A5048] mt-3 leading-[1.55]"
                    style={{ fontSize: 11.5 }}
                  >
                    Your intake is with Dr. Bar-On. You&apos;ll get a confirmation
                    by SMS once she&apos;s reviewed it - usually within a few hours.
                  </p>

                  <div
                    className="mt-7 w-full p-4 rounded-xl text-left"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.20)",
                    }}
                  >
                    <div className="text-[#047857] text-[8.5px] tracking-[0.22em] uppercase mb-2 inline-flex items-center gap-1.5">
                      <IconHeartbeat size={9} stroke={1.8} />
                      Next step
                    </div>
                    <div className="text-[#0a3a25] text-[11.5px] leading-snug font-medium">
                      A short pre-session sleep diary will arrive Sunday evening.
                    </div>
                  </div>

                  <div className="mt-auto" />
                </div>
              </div>
            </PhoneFrame>
            <p className="text-[#9FCEB9] text-[11px] text-center mt-4 tracking-tight">
              Step 3 - handed to the clinician
            </p>
          </m.div>
        </div>
      </div>
    </div>
  );
}
