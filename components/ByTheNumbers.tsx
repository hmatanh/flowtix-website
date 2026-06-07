"use client";

import { m } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  IconRocket,
  IconBolt,
  IconClock,
  IconTrendingUp,
  IconCircleCheck,
} from "@tabler/icons-react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const NUMBERS = [
  {
    size: "large" as const,
    value: 10,
    suffix: "+",
    label: "Years of design expertise applied to AI",
    Icon: IconRocket,
  },
  {
    size: "large" as const,
    value: 50,
    suffix: "+",
    label: "Systems shipped and running",
    Icon: IconBolt,
  },
  {
    size: "medium" as const,
    value: 48,
    suffix: "h",
    label: "Average kickoff-to-deployment",
    Icon: IconClock,
  },
  {
    size: "medium" as const,
    value: 3,
    suffix: "×",
    label: "Average ROI reported by clients",
    Icon: IconTrendingUp,
  },
  {
    size: "wide" as const,
    value: 100,
    suffix: "%",
    label: "Of projects delivered on time",
    Icon: IconCircleCheck,
  },
];

export function ByTheNumbers() {
  return (
    <section className="section-contain relative py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 70%)",
        }}
      />

      <div className="relative page-container">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-[#222] text-[10px] tracking-widest uppercase section-label">
              By the numbers
            </div>
            <h2
              className="font-black tracking-tight text-white text-center mt-5 leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            >
              The Flowtix story —{" "}
              <span className="gradient-text-blue">in five numbers.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Asymmetric grid: 2 large + 2 medium + 1 wide */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4">
          {NUMBERS.map((n, i) => {
            const Icon = n.Icon;
            const colSpan =
              n.size === "large"
                ? "sm:col-span-2"
                : n.size === "medium"
                ? "sm:col-span-2"
                : "sm:col-span-4";
            const rowSpan = n.size === "large" ? "sm:row-span-1" : "";
            const valueSize =
              n.size === "wide"
                ? "clamp(48px, 9vw, 88px)"
                : n.size === "large"
                ? "clamp(40px, 7vw, 72px)"
                : "clamp(32px, 5vw, 52px)";

            return (
              <m.div
                key={n.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                className={`relative rounded-3xl border bg-[#0A0A0A] p-6 sm:p-8 overflow-hidden ${colSpan} ${rowSpan}`}
                style={{ borderColor: "#1a1a1a" }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-40 h-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)",
                    filter: "blur(28px)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
                      style={{
                        background: "rgba(59,130,246,0.10)",
                        color: "#60a5fa",
                        border: "1px solid rgba(59,130,246,0.22)",
                      }}
                    >
                      <Icon size={16} stroke={1.7} />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#333]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className="font-black gradient-text-blue leading-none"
                    style={{ fontSize: valueSize }}
                  >
                    <AnimatedCounter value={n.value} />
                    <span>{n.suffix}</span>
                  </div>
                  <div className="text-[#666] text-sm mt-3 leading-relaxed max-w-sm">
                    {n.label}
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
