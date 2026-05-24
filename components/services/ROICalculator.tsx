"use client";

import { useMemo, useState } from "react";
import { m } from "framer-motion";
import {
  IconTrendingUp,
  IconCoin,
  IconClock,
  IconUsers,
} from "@tabler/icons-react";

type Preset = {
  slug: string;
  // Default values
  hours: number; // hours per week saved
  rate: number; // $/hour cost of human time
  people: number; // people impacted
  // Min/max for sliders
  hoursRange: [number, number];
  rateRange: [number, number];
  peopleRange: [number, number];
  // Copy
  headline: string;
  hint: string;
};

const PRESETS: Record<string, Preset> = {
  "ai-systems": {
    slug: "ai-systems",
    hours: 12,
    rate: 65,
    people: 8,
    hoursRange: [2, 40],
    rateRange: [25, 200],
    peopleRange: [1, 100],
    headline: "What an AI system returns to your team.",
    hint: "Hours each person reclaims per week when AI handles the repetitive work.",
  },
  automation: {
    slug: "automation",
    hours: 8,
    rate: 50,
    people: 12,
    hoursRange: [1, 30],
    rateRange: [20, 150],
    peopleRange: [1, 200],
    headline: "What automation costs vs. what it returns.",
    hint: "Hours of manual work the automation removes from each team member per week.",
  },
  "ai-sales": {
    slug: "ai-sales",
    hours: 10,
    rate: 80,
    people: 5,
    hoursRange: [2, 30],
    rateRange: [40, 250],
    peopleRange: [1, 50],
    headline: "What sales AI returns to your reps.",
    hint: "Hours each rep gets back per week — admin, CRM updates, proposals.",
  },
};

export function ROICalculator({ slug }: { slug: string }) {
  const preset = PRESETS[slug];
  const [hours, setHours] = useState<number>(preset?.hours ?? 10);
  const [rate, setRate] = useState<number>(preset?.rate ?? 60);
  const [people, setPeople] = useState<number>(preset?.people ?? 5);

  const result = useMemo(() => {
    const weekly = hours * rate * people;
    const monthly = weekly * 4.3;
    const annual = weekly * 52;
    return { weekly, monthly, annual };
  }, [hours, rate, people]);

  if (!preset) return null;

  return (
    <section className="section-contain py-20 sm:py-28 px-6 md:px-10 xl:px-12 border-y border-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-blue-400 text-[11px] tracking-[0.22em] uppercase mb-3 font-medium">
            ROI Calculator
          </div>
          <h2
            className="font-black tracking-tight text-white"
            style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
          >
            {preset.headline}
          </h2>
          <p className="text-[#666] text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            {preset.hint}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* Controls */}
          <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-3xl p-5 sm:p-7">
            <Field
              Icon={IconClock}
              label="Hours saved per person, per week"
              value={`${hours}h`}
              min={preset.hoursRange[0]}
              max={preset.hoursRange[1]}
              raw={hours}
              onChange={setHours}
            />
            <Field
              Icon={IconCoin}
              label="Cost of that person's time"
              value={`$${rate}/h`}
              min={preset.rateRange[0]}
              max={preset.rateRange[1]}
              raw={rate}
              onChange={setRate}
            />
            <Field
              Icon={IconUsers}
              label="People impacted"
              value={`${people}`}
              min={preset.peopleRange[0]}
              max={preset.peopleRange[1]}
              raw={people}
              onChange={setPeople}
            />
          </div>

          {/* Result */}
          <div
            className="relative rounded-3xl p-5 sm:p-7 overflow-hidden border"
            style={{
              background:
                "linear-gradient(160deg, #0A0A0A 0%, #050505 100%)",
              borderColor: "rgba(59,130,246,0.18)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
                filter: "blur(36px)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
                <IconTrendingUp size={12} stroke={2} />
                Estimated savings
              </div>

              <ResultRow label="Per week" value={result.weekly} highlight />
              <ResultRow label="Per month" value={result.monthly} />
              <ResultRow label="Per year" value={result.annual} large />

              <p className="text-[#555] text-xs mt-5 leading-relaxed">
                Rough estimate based on the values above. Your real return
                depends on the system's adoption rate and the complexity of the
                work it replaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  Icon,
  label,
  value,
  min,
  max,
  raw,
  onChange,
}: {
  Icon: typeof IconClock;
  label: string;
  value: string;
  min: number;
  max: number;
  raw: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
            style={{
              background: "rgba(59,130,246,0.08)",
              color: "#60a5fa",
              border: "1px solid rgba(59,130,246,0.18)",
            }}
          >
            <Icon size={13} stroke={1.8} />
          </span>
          <span className="text-[#888] text-xs">{label}</span>
        </div>
        <span className="text-white font-mono font-semibold text-sm tabular-nums">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
        aria-label={label}
      />
      <style jsx>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #3b82f6 0%,
            #3b82f6
              ${((raw - min) / (max - min)) * 100}%,
            #1a1a1a ${((raw - min) / (max - min)) * 100}%,
            #1a1a1a 100%
          );
          cursor: pointer;
          outline: none;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          cursor: pointer;
        }
        .roi-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          cursor: pointer;
          border-width: 2px;
        }
      `}</style>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  large,
}: {
  label: string;
  value: number;
  highlight?: boolean;
  large?: boolean;
}) {
  return (
    <div
      className="flex items-baseline justify-between py-3 border-b border-[#1a1a1a] last:border-0"
    >
      <span className="text-[#666] text-sm">{label}</span>
      <m.span
        key={value}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="font-black tabular-nums"
        style={{
          color: highlight || large ? "#60a5fa" : "#fff",
          fontSize: large ? "clamp(32px, 5.5vw, 48px)" : highlight ? "clamp(20px, 2.8vw, 26px)" : "clamp(18px, 2.4vw, 22px)",
          lineHeight: 1.05,
        }}
      >
        ${Math.round(value).toLocaleString()}
      </m.span>
    </div>
  );
}
