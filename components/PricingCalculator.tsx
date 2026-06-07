"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconBolt,
  IconBuilding,
  IconBuildingFactory2,
  IconCpu,
  IconPalette,
  IconCode,
  IconStack2,
  IconUser,
  IconUsers,
  IconUsersGroup,
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconRefresh,
} from "@tabler/icons-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type NeedId = "ai" | "automation" | "design" | "web" | "multiple";
type SizeId = "solo" | "small" | "mid" | "large";
type TimelineId = "asap" | "weeks" | "months" | "flex";

const NEEDS: { id: NeedId; label: string; Icon: typeof IconCpu }[] = [
  { id: "ai", label: "AI System", Icon: IconCpu },
  { id: "automation", label: "Automation", Icon: IconBolt },
  { id: "design", label: "Design & Brand", Icon: IconPalette },
  { id: "web", label: "Web Development", Icon: IconCode },
  { id: "multiple", label: "Multiple", Icon: IconStack2 },
];

const SIZES: { id: SizeId; label: string; Icon: typeof IconUser }[] = [
  { id: "solo", label: "Solo", Icon: IconUser },
  { id: "small", label: "2–10 people", Icon: IconUsers },
  { id: "mid", label: "11–50 people", Icon: IconUsersGroup },
  { id: "large", label: "50+ people", Icon: IconBuildingFactory2 },
];

const TIMELINES: { id: TimelineId; label: string; Icon: typeof IconBolt }[] = [
  { id: "asap", label: "ASAP", Icon: IconBolt },
  { id: "weeks", label: "2–4 weeks", Icon: IconClock },
  { id: "months", label: "1–3 months", Icon: IconCalendar },
  { id: "flex", label: "Flexible", Icon: IconBuilding },
];

// Coarse base ranges by need (USD, thousand)
const BASE: Record<NeedId, [number, number]> = {
  ai: [12, 35],
  automation: [6, 18],
  design: [8, 22],
  web: [10, 28],
  multiple: [18, 55],
};

// Multipliers by team size
const SIZE_MULT: Record<SizeId, number> = {
  solo: 0.85,
  small: 1.0,
  mid: 1.25,
  large: 1.6,
};

// Multipliers / surcharge for timeline
const TIME_MULT: Record<TimelineId, number> = {
  asap: 1.25,
  weeks: 1.05,
  months: 1.0,
  flex: 0.95,
};

function range(need: NeedId, size: SizeId, time: TimelineId): [number, number] {
  const [lo, hi] = BASE[need];
  const m = SIZE_MULT[size] * TIME_MULT[time];
  return [Math.round(lo * m), Math.round(hi * m)];
}

export function PricingCalculator() {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState<NeedId | null>(null);
  const [size, setSize] = useState<SizeId | null>(null);
  const [timeline, setTimeline] = useState<TimelineId | null>(null);

  function reset() {
    setStep(1);
    setNeed(null);
    setSize(null);
    setTimeline(null);
  }

  function progress(s: number): number {
    if (s === 1) return need ? 33 : 0;
    if (s === 2) return size ? 66 : 33;
    if (s === 3) return timeline ? 100 : 66;
    return 100;
  }

  const showResult = step === 4 && need && size && timeline;
  const result = showResult ? range(need!, size!, timeline!) : null;

  return (
    <section className="section-contain relative py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative page-container">
        <div className="text-center mb-10">
          <div className="text-[#222] text-[10px] tracking-widest uppercase section-label">
            Pricing
          </div>
          <h2
            className="font-black tracking-tight text-white text-center mt-5 leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Estimate your project in{" "}
            <span className="gradient-text-blue">30 seconds.</span>
          </h2>
          <p className="text-[#6a6a6a] text-center mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Three quick questions — and a budget range you can actually plan
            against.
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full bg-[#0D0D0D] border border-[#1a1a1a] overflow-hidden mb-8">
          <m.div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
            initial={false}
            animate={{ width: `${progress(step)}%` }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </div>

        <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-3xl p-5 sm:p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <StepCard
                key="step1"
                stepNumber={1}
                title="What do you need?"
              >
                <Grid>
                  {NEEDS.map((n) => (
                    <ChoiceCard
                      key={n.id}
                      Icon={n.Icon}
                      label={n.label}
                      active={need === n.id}
                      onClick={() => {
                        setNeed(n.id);
                        window.setTimeout(() => setStep(2), 250);
                      }}
                    />
                  ))}
                </Grid>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard key="step2" stepNumber={2} title="Team size?">
                <Grid>
                  {SIZES.map((s) => (
                    <ChoiceCard
                      key={s.id}
                      Icon={s.Icon}
                      label={s.label}
                      active={size === s.id}
                      onClick={() => {
                        setSize(s.id);
                        window.setTimeout(() => setStep(3), 250);
                      }}
                    />
                  ))}
                </Grid>
                <BackButton onClick={() => setStep(1)} />
              </StepCard>
            )}

            {step === 3 && (
              <StepCard key="step3" stepNumber={3} title="Timeline?">
                <Grid>
                  {TIMELINES.map((t) => (
                    <ChoiceCard
                      key={t.id}
                      Icon={t.Icon}
                      label={t.label}
                      active={timeline === t.id}
                      onClick={() => {
                        setTimeline(t.id);
                        window.setTimeout(() => setStep(4), 250);
                      }}
                    />
                  ))}
                </Grid>
                <BackButton onClick={() => setStep(2)} />
              </StepCard>
            )}

            {showResult && result && (
              <m.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="text-center">
                  <div className="text-[#888] text-[10px] uppercase tracking-[0.2em] mb-2">
                    Estimated range
                  </div>
                  <div className="text-white font-black tracking-tight leading-[1.05]" style={{ fontSize: "clamp(40px, 7vw, 72px)" }}>
                    <span className="gradient-text-blue">${result[0]}K</span>
                    <span className="text-[#555] mx-3 sm:mx-4">–</span>
                    <span className="gradient-text-blue">${result[1]}K</span>
                  </div>
                  <p className="text-[#6a6a6a] text-sm mt-5 max-w-md mx-auto leading-relaxed">
                    This is an estimate based on similar projects. Every project
                    gets a precise, fixed-price proposal after our 30-minute
                    strategy call.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 justify-center mt-7">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors min-h-[48px]"
                    >
                      Get an exact quote
                      <IconArrowRight
                        size={14}
                        stroke={2.5}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center justify-center gap-2 border border-[#1a1a1a] text-[#aaa] text-sm px-6 py-3.5 rounded-xl hover:border-[#2a2a2a] hover:text-white transition-colors min-h-[48px]"
                    >
                      <IconRefresh size={14} stroke={1.7} />
                      Start over
                    </button>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  stepNumber,
  title,
  children,
}: {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <m.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="text-blue-400 text-[10px] font-mono tracking-[0.2em]">
          STEP {stepNumber} / 3
        </span>
        <span className="flex-1 h-px bg-[#1a1a1a]" />
      </div>
      <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-5">
        {title}
      </h3>
      {children}
    </m.div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{children}</div>
  );
}

function ChoiceCard({
  Icon,
  label,
  active,
  onClick,
}: {
  Icon: typeof IconCpu;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-3 text-left rounded-2xl border bg-[#0D0D0D] hover:bg-[#111] p-4 transition-colors min-h-[60px]"
      style={{
        borderColor: active ? "rgba(59,130,246,0.5)" : "#1a1a1a",
        background: active ? "rgba(59,130,246,0.06)" : "#0D0D0D",
      }}
      aria-pressed={active}
    >
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
        style={{
          background: active ? "rgba(59,130,246,0.18)" : "#0A0A0A",
          color: active ? "#60a5fa" : "#666",
          border: `1px solid ${active ? "rgba(59,130,246,0.3)" : "#1a1a1a"}`,
        }}
      >
        <Icon size={18} stroke={1.7} />
      </span>
      <span className="text-sm font-medium" style={{ color: active ? "#fff" : "#aaa" }}>
        {label}
      </span>
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[#6a6a6a] text-xs mt-5 hover:text-[#aaa] transition-colors inline-flex items-center gap-1"
    >
      ← Back
    </button>
  );
}
