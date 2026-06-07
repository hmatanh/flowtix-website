"use client";

import { m } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

export function Availability() {
  return (
    <section className="section-contain py-16">
      <div className="page-container">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
          <div className="animated-border-card">
            <div className="px-8 py-10 text-center">
              <div className="inline-flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-white text-lg font-semibold tracking-tight">
                  Currently available for new projects
                </span>
              </div>
              <p className="text-[#888] text-sm mt-4 max-w-lg mx-auto leading-relaxed">
                We take on a limited number of projects each quarter to ensure
                quality. Typical wait time for new clients: 1–2 weeks.
              </p>
              <div className="mt-8 max-w-md mx-auto text-left">
                <div className="text-[#333] text-[10px] tracking-widest uppercase mb-2">
                  Q3 2026 capacity
                </div>
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-full h-2 overflow-hidden">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="h-full rounded-full bg-emerald-500"
                  />
                </div>
                <div className="flex justify-between mt-2 text-[#6a6a6a] text-[10px]">
                  <span>3 spots left</span>
                  <span>65% full</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
