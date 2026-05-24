"use client";

import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { LinxProposalAI } from "@/components/clients/linx/tour/LinxProposalAI";
import { LinxDashboard } from "@/components/clients/linx/tour/LinxDashboard";
import { LinxClientReports } from "@/components/clients/linx/tour/LinxClientReports";
import { LinxBriefIntake } from "@/components/clients/linx/tour/LinxBriefIntake";
import { MobileTourNav, MobileTourArrows } from "@/components/clients/MobileTourNav";

const VIOLET = "#8B5CF6";
const BORDER = "#1A1535";
const SURFACE = "#0C0814";
const SHELL = "#080612";

type TabId = "proposal" | "dashboard" | "reports" | "intake";

const TABS: { id: TabId; label: string; url: string }[] = [
  { id: "proposal", label: "Proposal AI", url: "studio.linx.agency/proposals" },
  { id: "dashboard", label: "Agency Dashboard", url: "studio.linx.agency" },
  { id: "reports", label: "Client Reports", url: "studio.linx.agency/reports" },
  { id: "intake", label: "Brief Intake", url: "brief.linx.agency" },
];

export function InteractiveTour() {
  const [active, setActive] = useState<TabId>("proposal");
  const url = TABS.find((t) => t.id === active)?.url ?? "studio.linx.agency";
  const swipeRef = useRef<HTMLDivElement>(null);
  const labels = TABS.map((t) => t.label);
  const index = TABS.findIndex((t) => t.id === active);
  const setIndex = (i: number) => setActive(TABS[i].id);

  return (
    <section
      className="section-contain py-24 sm:py-32 border-y px-6 md:px-10 xl:px-12 relative overflow-hidden"
      style={{ background: SHELL, borderColor: BORDER }}
    >
      {/* atmospheric violet */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(900px 460px at 50% -10%, rgba(139,92,246,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ color: VIOLET }}
            >
              <span className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${VIOLET})` }} />
              Interactive Demo
              <span className="h-px w-8" style={{ background: `linear-gradient(90deg, ${VIOLET}, transparent)` }} />
            </span>
            <h2
              className="text-white font-black tracking-tight mt-4"
              style={{ fontSize: "clamp(28px, 4.8vw, 44px)", lineHeight: 1.1 }}
            >
              The LINX operating system.
            </h2>
            <p className="text-base leading-relaxed mt-4" style={{ color: "#6b5a8a" }}>
              The proposal tool. The dashboard. The report engine. 87 hours saved per month — click through exactly how.
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
                    background: isActive ? "rgba(139,92,246,0.12)" : "transparent",
                    borderColor: isActive ? "rgba(139,92,246,0.4)" : BORDER,
                    color: isActive ? VIOLET : "#6b5a8a",
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
          <MobileTourNav labels={labels} index={index} setIndex={setIndex} accentColor={VIOLET} swipeContainerRef={swipeRef} />
        </div>

        {/* Browser frame */}
        <div className="max-w-5xl mx-auto">
          <div
            className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <div className="flex-1 mx-2 rounded-lg px-3 py-1.5 flex items-center justify-center gap-2" style={{ background: SHELL }}>
              <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4z" fill="none" stroke="#3a2a6a" strokeWidth="1.5" />
              </svg>
              <span className="text-[11px] font-mono" style={{ color: "#3a2a6a" }}>
                {url}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold relative"
                style={{ background: "rgba(139,92,246,0.18)", color: VIOLET }}
              >
                PN
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full" style={{ background: "#34D399", boxShadow: "0 0 4px #34D399" }} />
              </span>
            </div>
          </div>

          <div
            className="sm:hidden flex items-center justify-center gap-2 py-3 rounded-t-2xl border border-b-0"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: VIOLET }}>
              LINX
            </span>
            <span className="block w-1 h-1 rounded-full" style={{ background: VIOLET }} />
            <span className="text-[10px]" style={{ color: "#6b5a8a" }}>
              Studio
            </span>
          </div>

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
                {active === "proposal" && <LinxProposalAI />}
                {active === "dashboard" && <LinxDashboard />}
                {active === "reports" && <LinxClientReports />}
                {active === "intake" && <LinxBriefIntake />}
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MobileTourArrows labels={labels} index={index} setIndex={setIndex} accentColor={VIOLET} />
        </div>
      </div>
    </section>
  );
}
