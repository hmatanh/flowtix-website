"use client";

import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { DrftStore } from "@/components/clients/drft/tour/DrftStore";
import { DrftContentStudio } from "@/components/clients/drft/tour/DrftContentStudio";
import { DrftEmailSystem } from "@/components/clients/drft/tour/DrftEmailSystem";
import { DrftAnalytics } from "@/components/clients/drft/tour/DrftAnalytics";
import { MobileTourNav, MobileTourArrows } from "@/components/clients/MobileTourNav";

const ORANGE = "#F97316";
const BORDER = "#1A0F04";
const BORDER_HARD = "#2A1505";
const SURFACE = "#120A02";
const SHELL = "#0A0602";

type TabId = "store" | "studio" | "email" | "perf";

const TABS: { id: TabId; label: string; url: string }[] = [
  { id: "store", label: "Shopify Store", url: "drft.com" },
  { id: "studio", label: "AI Content Studio", url: "studio.drft.com" },
  { id: "email", label: "Email System", url: "email.drft.com" },
  { id: "perf", label: "Performance", url: "studio.drft.com/analytics" },
];

export function InteractiveTour() {
  const [active, setActive] = useState<TabId>("store");
  const url = TABS.find((t) => t.id === active)?.url ?? "drft.com";
  const swipeRef = useRef<HTMLDivElement>(null);
  const labels = TABS.map((t) => t.label);
  const index = TABS.findIndex((t) => t.id === active);
  const setIndex = (i: number) => setActive(TABS[i].id);

  return (
    <section
      className="section-contain py-24 sm:py-32 border-y px-6 md:px-10 xl:px-12 relative overflow-hidden"
      style={{ background: SHELL, borderColor: BORDER }}
    >
      {/* atmospheric orange wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(800px 420px at 50% -10%, rgba(249,115,22,0.10), transparent 60%)",
        }}
      />
      {/* corner accents */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-10 hidden lg:block"
        style={{
          width: 24,
          height: 24,
          borderTop: `2px solid ${ORANGE}`,
          borderLeft: `2px solid ${ORANGE}`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 hidden lg:block"
        style={{
          width: 24,
          height: 24,
          borderBottom: `2px solid ${ORANGE}`,
          borderRight: `2px solid ${ORANGE}`,
        }}
      />

      <div className="relative">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ color: ORANGE }}
            >
              <span className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${ORANGE})` }} />
              Interactive Demo
              <span className="h-px w-8" style={{ background: `linear-gradient(90deg, ${ORANGE}, transparent)` }} />
            </span>
            <h2
              className="text-white font-black italic tracking-tight mt-4"
              style={{
                fontSize: "clamp(28px, 5vw, 46px)",
                lineHeight: 1.05,
                transform: "skewX(-2deg)",
                transformOrigin: "center",
                display: "inline-block",
              }}
            >
              The DRFT platform. Live.
            </h2>
            <p className="text-base leading-relaxed mt-4" style={{ color: "#8B5E2A" }}>
              The store, the AI content engine, the email system. Everything we
              built — click through it yourself.
            </p>
          </div>
        </FadeIn>

        {/* Tabs — desktop only */}
        <div className="desktop-only max-w-5xl mx-auto mb-5">
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
                    background: isActive ? "rgba(249,115,22,0.12)" : "transparent",
                    borderColor: isActive ? "rgba(249,115,22,0.4)" : BORDER_HARD,
                    color: isActive ? ORANGE : "#8B5E2A",
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
          <MobileTourNav labels={labels} index={index} setIndex={setIndex} accentColor={ORANGE} swipeContainerRef={swipeRef} />
        </div>

        {/* Browser frame */}
        <div className="max-w-5xl mx-auto">
          <div
            className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER_HARD }}
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
                  stroke="#4a2808"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-[11px] font-mono" style={{ color: "#4a2808" }}>
                {url}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold relative"
                style={{ background: "rgba(249,115,22,0.18)", color: ORANGE }}
              >
                DR
                <span
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                  style={{ background: "#34D399", boxShadow: "0 0 4px #34D399" }}
                />
              </span>
            </div>
          </div>

          <div
            className="sm:hidden flex items-center justify-center py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER_HARD }}
          >
            <span className="text-[11px] font-black italic" style={{ color: ORANGE }}>
              DRFT
            </span>
          </div>

          <div
            ref={swipeRef}
            className="rounded-b-2xl border border-t-0 overflow-hidden relative"
            style={{ background: SHELL, borderColor: BORDER_HARD }}
          >
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {active === "store" && <DrftStore />}
                {active === "studio" && <DrftContentStudio />}
                {active === "email" && <DrftEmailSystem />}
                {active === "perf" && <DrftAnalytics />}
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MobileTourArrows labels={labels} index={index} setIndex={setIndex} accentColor={ORANGE} />
        </div>
      </div>
    </section>
  );
}
