"use client";

import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TourDashboard } from "@/components/clients/kova/tour/TourDashboard";
import { TourMatching } from "@/components/clients/kova/tour/TourMatching";
import { TourPipeline } from "@/components/clients/kova/tour/TourPipeline";
import { TourAutomations } from "@/components/clients/kova/tour/TourAutomations";
import { MobileTourNav, MobileTourArrows } from "@/components/clients/MobileTourNav";

const BLUE = "#0EA5E9";

type TabId = "dashboard" | "matching" | "pipeline" | "automations";

const TABS: { id: TabId; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "matching", label: "AI Matching" },
  { id: "pipeline", label: "CRM Pipeline" },
  { id: "automations", label: "AI Automations" },
];

export function InteractiveTour() {
  const [active, setActive] = useState<TabId>("dashboard");
  const swipeRef = useRef<HTMLDivElement>(null);
  const labels = TABS.map((t) => t.label);
  const index = TABS.findIndex((t) => t.id === active);
  const setIndex = (i: number) => setActive(TABS[i].id);

  return (
    <section
      className="section-contain py-24 sm:py-32 border-y px-6 md:px-10 xl:px-12 relative overflow-hidden"
      style={{ background: "#040D18", borderColor: "#0D2A45" }}
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 0%, rgba(14,165,233,0.08), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ color: BLUE }}
            >
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${BLUE})` }}
              />
              Interactive Demo
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${BLUE}, transparent)` }}
              />
            </span>
            <h2
              className="text-white font-black tracking-tight mt-4"
              style={{ fontSize: "clamp(28px, 4.8vw, 44px)", lineHeight: 1.1 }}
            >
              Explore the KOVA platform.
            </h2>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: "#4a7a9b" }}
            >
              Click through the actual system we built. Every screen, every
              interaction — real.
            </p>
          </div>
        </FadeIn>

        {/* Tabs — desktop only; mobile uses MobileTourNav */}
        <div className="desktop-only max-w-5xl mx-auto mb-5">
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className="rounded-xl px-4 py-2.5 text-xs font-medium border whitespace-nowrap transition-colors"
                  style={{
                    background: isActive ? "rgba(14,165,233,0.10)" : "transparent",
                    borderColor: isActive ? "rgba(14,165,233,0.35)" : "#0D2A45",
                    color: isActive ? BLUE : "#4a7a9b",
                  }}
                  aria-pressed={isActive}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile nav header */}
        <div className="max-w-5xl mx-auto mb-3">
          <MobileTourNav labels={labels} index={index} setIndex={setIndex} accentColor={BLUE} swipeContainerRef={swipeRef} />
        </div>

        {/* Browser Frame */}
        <div className="max-w-5xl mx-auto">
          {/* Chrome bar — desktop */}
          <div
            className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-t-2xl border border-b-0"
            style={{ background: "#0D1F38", borderColor: "#0D2A45" }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <div
              className="flex-1 mx-2 rounded-lg px-3 py-1.5 flex items-center justify-center gap-2"
              style={{ background: "#080F1C" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4z"
                  fill="none"
                  stroke="#1a3a52"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-[#1a3a52] text-[11px] font-mono">app.kova.io</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold relative"
                style={{ background: "rgba(14,165,233,0.18)", color: BLUE }}
              >
                SM
                <span
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                  style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
                />
              </span>
            </div>
          </div>

          {/* Mobile header bar */}
          <div
            className="sm:hidden flex items-center justify-center py-3 rounded-t-2xl border border-b-0"
            style={{ background: "#0D1F38", borderColor: "#0D2A45" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" fill={BLUE} />
            </svg>
            <span
              className="ml-2 text-[11px] font-bold uppercase tracking-wider"
              style={{ color: BLUE }}
            >
              KOVA Platform
            </span>
          </div>

          {/* Screen area */}
          <div
            ref={swipeRef}
            className="rounded-b-2xl border border-t-0 overflow-hidden relative"
            style={{ background: "#0A1628", borderColor: "#0D2A45" }}
          >
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {active === "dashboard" && <TourDashboard />}
                {active === "matching" && <TourMatching />}
                {active === "pipeline" && <TourPipeline />}
                {active === "automations" && <TourAutomations />}
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile prev/next arrows + counter */}
        <div className="max-w-5xl mx-auto">
          <MobileTourArrows labels={labels} index={index} setIndex={setIndex} accentColor={BLUE} />
        </div>
      </div>
    </section>
  );
}
