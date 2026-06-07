"use client";

import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { AurumDashboard } from "@/components/clients/aurum/tour/AurumDashboard";
import { AurumReportGenerator } from "@/components/clients/aurum/tour/AurumReportGenerator";
import { AurumClientPortal } from "@/components/clients/aurum/tour/AurumClientPortal";
import { AurumMarketIntel } from "@/components/clients/aurum/tour/AurumMarketIntel";
import { MobileTourNav, MobileTourArrows } from "@/components/clients/MobileTourNav";

const GOLD = "#D97706";
const BORDER = "#2A1D06";
const BORDER_SOFT = "#1A1206";
const SURFACE = "#1A1206";
const SHELL = "#0A0602";

type TabId = "dashboard" | "report" | "portal" | "market";

const TABS: { id: TabId; label: string }[] = [
  { id: "dashboard", label: "Advisor Dashboard" },
  { id: "report", label: "AI Report Generator" },
  { id: "portal", label: "Client Portal" },
  { id: "market", label: "Market Intelligence" },
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
      style={{ background: SHELL, borderColor: BORDER_SOFT }}
    >
      {/* Atmospheric gold glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(900px 460px at 50% -10%, rgba(217,119,6,0.10), transparent 60%)",
        }}
      />
      {/* Subtle gold corner accents */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-10 w-px h-24 hidden lg:block"
        style={{ background: `linear-gradient(180deg, ${GOLD}, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 left-10 w-24 h-px hidden lg:block"
        style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-px h-24 hidden lg:block"
        style={{ background: `linear-gradient(0deg, ${GOLD}, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-24 h-px hidden lg:block"
        style={{ background: `linear-gradient(-90deg, ${GOLD}, transparent)` }}
      />

      <div className="relative">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase font-medium"
              style={{ color: GOLD }}
            >
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }}
              />
              Interactive Demo
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
              />
            </span>
            <h2
              className="text-white font-black tracking-tight mt-4"
              style={{ fontSize: "clamp(28px, 4.8vw, 44px)", lineHeight: 1.1 }}
            >
              Step inside the AURUM platform.
            </h2>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: "#8B6A2A" }}
            >
              The same system Marcus uses every morning. Click through every
              screen — exactly as built.
            </p>
          </div>
        </FadeIn>

        {/* Tabs — desktop only */}
        <div className="desktop-only page-container mb-5">
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className="rounded-xl px-4 py-2.5 text-xs font-medium border transition-colors"
                  style={{
                    background: isActive ? "rgba(217,119,6,0.10)" : "transparent",
                    borderColor: isActive ? "rgba(217,119,6,0.4)" : BORDER,
                    color: isActive ? GOLD : "#8B6A2A",
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
        <div className="page-container mb-3">
          <MobileTourNav labels={labels} index={index} setIndex={setIndex} accentColor={GOLD} swipeContainerRef={swipeRef} />
        </div>

        {/* Browser Frame */}
        <div className="page-container">
          {/* Chrome bar — desktop */}
          <div
            className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <div
              className="flex-1 mx-2 rounded-lg px-3 py-1.5 flex items-center justify-center gap-2"
              style={{ background: SHELL }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4z"
                  fill="none"
                  stroke="#4a3010"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-[#4a3010] text-[11px] font-mono">
                portal.aurum-wealth.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold relative"
                style={{ background: "rgba(217,119,6,0.18)", color: GOLD }}
              >
                MO
                <span
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                  style={{ background: "#34D399", boxShadow: "0 0 4px #34D399" }}
                />
              </span>
            </div>
          </div>

          {/* Mobile header bar */}
          <div
            className="sm:hidden flex items-center justify-center py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              AURUM · Private Wealth
            </span>
          </div>

          {/* Screen area */}
          <div
            ref={swipeRef}
            className="rounded-b-2xl border border-t-0 overflow-hidden relative"
            style={{ background: SHELL, borderColor: BORDER }}
          >
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {active === "dashboard" && <AurumDashboard />}
                {active === "report" && <AurumReportGenerator />}
                {active === "portal" && <AurumClientPortal />}
                {active === "market" && <AurumMarketIntel />}
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile prev/next arrows */}
        <div className="page-container">
          <MobileTourArrows labels={labels} index={index} setIndex={setIndex} accentColor={GOLD} />
        </div>
      </div>
    </section>
  );
}
