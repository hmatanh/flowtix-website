"use client";

import { m } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { FadeIn } from "./animations/FadeIn";

const EASE = [0.16, 1, 0.3, 1] as const;

const TOOLS = [
  { initial: "CRM", name: "CRM" },
  { initial: "✉", name: "Email" },
  { initial: "S", name: "Spreadsheets" },
  { initial: "📅", name: "Calendar" },
  { initial: "#", name: "Slack" },
  { initial: "F", name: "Forms" },
];

const OUTPUTS = [
  "AI Reports",
  "Smart Follow-ups",
  "Auto Content",
  "AI Assistant",
  "Live Analytics",
];

export function IntelligenceStack() {
  return (
    <section className="relative section-contain py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <span className="section-number" aria-hidden="true">
        02
      </span>

      <div className="relative max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-label text-[#333] text-center mb-4">
            The Stack
          </div>
          <h2 className="text-h2 gradient-text text-center max-w-2xl mx-auto">
            We connect everything. We make it intelligent.
          </h2>
          <p className="text-[#666] text-base md:text-[17px] text-center mt-4 max-w-xl mx-auto leading-relaxed">
            The intelligence layer that sits between your existing tools and
            turns them into a system that thinks.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
          {/* LEFT: existing tools */}
          <div className="relative flex flex-col gap-3 order-1 lg:order-none">
            <div className="text-label text-[#222] mb-1">Disconnected</div>
            {TOOLS.map((t, i) => (
              <m.div
                key={t.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                className="bg-[#0a0a0a] border border-[#0f0f0f] rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <span className="w-7 h-7 rounded-md bg-[#111] border border-[#1a1a1a] inline-flex items-center justify-center text-[#666] text-xs">
                  {t.initial}
                </span>
                <span className="text-[#888] text-sm">{t.name}</span>
                <span className="ml-auto text-[#222] text-[10px] uppercase tracking-widest">
                  isolated
                </span>
              </m.div>
            ))}
          </div>

          {/* CENTER: Flowtix core */}
          <div className="flex flex-col items-center relative py-4 order-2 lg:order-none">
            {/* Connection paths (desktop only) */}
            <svg
              className="hidden lg:block absolute -left-[100%] top-0 bottom-0 pointer-events-none"
              width="100%"
              height="100%"
              viewBox="0 0 200 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {TOOLS.map((_, i) => {
                const y = ((i + 0.5) / TOOLS.length) * 600;
                return (
                  <m.line
                    key={i}
                    x1="0"
                    y1={y}
                    x2="200"
                    y2="300"
                    stroke="rgba(59,130,246,0.25)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.2 + i * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </svg>
            <svg
              className="hidden lg:block absolute -right-[100%] top-0 bottom-0 pointer-events-none"
              width="100%"
              height="100%"
              viewBox="0 0 200 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {OUTPUTS.map((_, i) => {
                const y = ((i + 0.5) / OUTPUTS.length) * 600;
                return (
                  <m.line
                    key={i}
                    x1="0"
                    y1="300"
                    x2="200"
                    y2={y}
                    stroke="rgba(59,130,246,0.35)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.9 + i * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </svg>

            <m.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative bg-[#0D0D0D] border border-blue-500/30 rounded-2xl p-7 inline-flex flex-col items-center gap-3"
              style={{ boxShadow: "0 0 60px rgba(59,130,246,0.12)" }}
            >
              {/* Orbiting dots */}
              <div className="absolute inset-0 pointer-events-none">
                {[0, 1, 2].map((i) => (
                  <m.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
                    style={{
                      transformOrigin: "0 0",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 6 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className="absolute w-1.5 h-1.5 rounded-full bg-blue-500"
                      style={{
                        left: `${40 + i * 8}px`,
                        top: `-${0.75}px`,
                        opacity: 0.5,
                      }}
                    />
                  </m.div>
                ))}
              </div>
              <Logo size={48} href={null} animated={false} />
              <div className="text-[10px] tracking-widest uppercase text-blue-400">
                Intelligence Layer
              </div>
            </m.div>
          </div>

          {/* RIGHT: outputs */}
          <div className="flex flex-col gap-3 order-3 lg:order-none">
            <div className="text-label text-[#222] mb-1 lg:text-right">
              Intelligent
            </div>
            {OUTPUTS.map((o, i) => (
              <m.div
                key={o}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 1.1 + i * 0.1,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="bg-[#0a0a0a] border border-[#0f0f0f] rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <span className="w-7 h-7 rounded-md border border-blue-500/40 bg-blue-500/10 inline-flex items-center justify-center shrink-0">
                  <IconCheck
                    size={12}
                    stroke={2.5}
                    className="text-blue-400"
                  />
                </span>
                <span className="text-[#888] text-sm">{o}</span>
                <span className="ml-auto text-blue-400 text-[10px] uppercase tracking-widest">
                  live
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
