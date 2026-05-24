"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconLoader2,
  IconCircle,
  IconChevronDown,
  IconX,
  IconFileText,
  IconSparkles,
} from "@tabler/icons-react";
import {
  GOLD,
  GOLD_SOFT,
  GOLD_DEEP,
  BORDER,
  BORDER_SOFT,
  SURFACE,
  SURFACE_DEEP,
  CLIENTS,
  findClient,
} from "./_shared";
import { PerformanceChart } from "./PerformanceChart";

const STEPS = [
  "Retrieving portfolio data",
  "Analyzing performance",
  "Generating commentary",
  "Writing analysis",
  "Applying formatting",
];

type ReportType = "quarterly" | "annual" | "adhoc";

const REPORT_TYPES: { id: ReportType; label: string }[] = [
  { id: "quarterly", label: "Quarterly Review" },
  { id: "annual", label: "Annual Report" },
  { id: "adhoc", label: "Ad-Hoc Analysis" },
];

const PERIODS = ["Q2 2025", "Q1 2025", "Q4 2024", "Custom range"];

const SECTIONS: { id: string; label: string; on: boolean }[] = [
  { id: "perf", label: "Portfolio Performance Summary", on: true },
  { id: "alloc", label: "Asset Allocation Review", on: true },
  { id: "market", label: "Market Context & Commentary", on: true },
  { id: "holdings", label: "Individual Holdings Analysis", on: true },
  { id: "bench", label: "Benchmark Comparison", on: true },
  { id: "tax", label: "Tax Optimization Notes", on: false },
];

export function AurumReportGenerator() {
  const [selectedClient, setSelectedClient] = useState("");
  const [reportType, setReportType] = useState<ReportType>("quarterly");
  const [period, setPeriod] = useState("Q1 2025");
  const [sections, setSections] = useState(SECTIONS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const client = selectedClient ? findClient(selectedClient) : null;

  // Step animation
  useEffect(() => {
    if (!isGenerating) return;
    const timers: number[] = [];
    STEPS.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => setStep(i + 1), 800 * (i + 1)),
      );
    });
    timers.push(
      window.setTimeout(() => {
        setIsGenerating(false);
        setReportReady(true);
      }, 800 * (STEPS.length + 1)),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [isGenerating]);

  function startGenerate() {
    if (!selectedClient || isGenerating) return;
    setReportReady(false);
    setStep(0);
    setIsGenerating(true);
  }

  function reset() {
    setIsGenerating(false);
    setReportReady(false);
    setShowPreview(false);
    setStep(0);
  }

  function toggleSection(id: string) {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, on: !s.on } : s)),
    );
  }

  function sendToClient() {
    setSentNotice(true);
    window.setTimeout(() => setSentNotice(false), 3000);
  }

  const progressPct = isGenerating ? Math.min(100, (step / STEPS.length) * 100) : reportReady ? 100 : 0;

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[560px] flex flex-col lg:flex-row" style={{ background: SURFACE_DEEP }}>
      {/* ============ LEFT — config ============ */}
      <aside
        className="w-full lg:w-[40%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r overflow-y-auto"
        style={{ background: SURFACE, borderColor: BORDER_SOFT }}
      >
        <div className="text-white text-sm font-semibold">AI Report Generator</div>
        <div className="text-[11px] mt-1" style={{ color: GOLD_DEEP }}>
          Select a client and report type. AI handles the rest.
        </div>

        <Label>Client</Label>
        <div className="relative">
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="appearance-none w-full text-white text-xs px-3 py-2.5 rounded-xl outline-none cursor-pointer"
            style={{
              background: SURFACE_DEEP,
              border: `1px solid ${BORDER}`,
            }}
          >
            <option value="" style={{ background: SURFACE }}>
              Select client...
            </option>
            {CLIENTS.map((c) => (
              <option key={c.id} value={c.id} style={{ background: SURFACE }}>
                {c.name} — {c.value}
              </option>
            ))}
          </select>
          <IconChevronDown
            size={12}
            stroke={2}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: GOLD }}
          />
        </div>

        <Label>Report Type</Label>
        <div className="grid grid-cols-3 gap-1.5">
          {REPORT_TYPES.map((t) => {
            const active = reportType === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setReportType(t.id)}
                className="rounded-lg px-2 py-2 text-[10px] font-medium transition-colors"
                style={{
                  background: active ? "rgba(217,119,6,0.10)" : "transparent",
                  border: `1px solid ${active ? "rgba(217,119,6,0.35)" : BORDER}`,
                  color: active ? GOLD : GOLD_SOFT,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <Label>Period</Label>
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none w-full text-white text-xs px-3 py-2.5 rounded-xl outline-none"
            style={{ background: SURFACE_DEEP, border: `1px solid ${BORDER}` }}
          >
            {PERIODS.map((p) => (
              <option key={p} value={p} style={{ background: SURFACE }}>
                {p}
              </option>
            ))}
          </select>
          <IconChevronDown
            size={12}
            stroke={2}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: GOLD }}
          />
        </div>

        <Label>Include Sections</Label>
        <div className="space-y-1.5">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => toggleSection(s.id)}
              className="flex items-center justify-between w-full text-left rounded-lg px-3 py-2 transition-colors"
              style={{
                background: s.on ? "rgba(217,119,6,0.05)" : "transparent",
                border: `1px solid ${BORDER}`,
              }}
            >
              <span className="text-[11px]" style={{ color: s.on ? "#fff" : GOLD_DEEP }}>
                {s.label}
              </span>
              <span
                className="relative inline-block w-7 h-4 rounded-full transition-colors"
                style={{ background: s.on ? GOLD : BORDER }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform"
                  style={{ transform: s.on ? "translateX(12px)" : "translateX(0)" }}
                />
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={startGenerate}
          disabled={!selectedClient || isGenerating}
          className="mt-6 w-full py-3.5 rounded-xl text-sm font-bold transition-colors disabled:cursor-not-allowed"
          style={{
            background: selectedClient && !isGenerating ? GOLD : BORDER_SOFT,
            color: selectedClient && !isGenerating ? "#000" : GOLD_DEEP,
          }}
        >
          {isGenerating ? "Generating…" : reportReady ? "Generate again" : "Generate Report"}
        </button>
      </aside>

      {/* ============ RIGHT — progress / result ============ */}
      <section className="flex-1 p-5 lg:p-6 overflow-y-auto relative" style={{ background: SURFACE_DEEP }}>
        <AnimatePresence mode="wait">
          {/* Idle state — instructions */}
          {!isGenerating && !reportReady && (
            <m.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center h-full min-h-[280px]"
            >
              <IconFileText size={48} stroke={1} style={{ color: GOLD_DEEP }} />
              <div className="mt-4 text-white text-sm font-semibold">
                Pick a client to begin
              </div>
              <div className="mt-1 text-[11px] max-w-xs" style={{ color: GOLD_DEEP }}>
                The AI drafts the entire report in your firm's voice. You review, adjust, and ship.
              </div>
            </m.div>
          )}

          {/* Generating state */}
          {isGenerating && client && (
            <m.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center pt-6"
            >
              <div className="text-white text-sm font-semibold">
                Generating report for {client.name}…
              </div>
              <ProgressCircle pct={progressPct} />

              <div className="mt-6 space-y-2 max-w-xs w-full">
                {STEPS.map((s, i) => {
                  const isPast = i < step;
                  const isActive = i === step;
                  return (
                    <m.div
                      key={s}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: i <= step ? 1 : 0.4, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                        style={{
                          background: isPast ? "rgba(217,119,6,0.18)" : isActive ? "rgba(217,119,6,0.10)" : "transparent",
                          border: `1px solid ${isPast || isActive ? "rgba(217,119,6,0.4)" : BORDER}`,
                          color: isPast || isActive ? GOLD : GOLD_DEEP,
                        }}
                      >
                        {isPast ? (
                          <IconCheck size={10} stroke={3} />
                        ) : isActive ? (
                          <IconLoader2 size={10} className="animate-spin" />
                        ) : (
                          <IconCircle size={6} stroke={2} />
                        )}
                      </span>
                      <span
                        className="text-[11px]"
                        style={{
                          color: isActive ? "#fff" : isPast ? GOLD_SOFT : BORDER,
                        }}
                      >
                        {s}
                      </span>
                    </m.div>
                  );
                })}
              </div>
            </m.div>
          )}

          {/* Ready state */}
          {reportReady && client && !showPreview && (
            <m.div
              key="ready"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center pt-2"
            >
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(217,119,6,0.15)",
                  border: `1px solid rgba(217,119,6,0.4)`,
                  color: GOLD,
                }}
              >
                <IconCheck size={22} stroke={3} />
              </m.div>
              <div className="mt-4 text-white text-base font-bold">
                Report Generated
              </div>
              <div className="mt-1 text-[11px]" style={{ color: GOLD_SOFT }}>
                In 4.2 seconds · 12 pages · Ready to send
              </div>

              <ReportThumbnail client={client.name} period={period} account={client.account} />

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 rounded-xl px-5 py-3 font-bold text-xs"
                  style={{ background: GOLD, color: "#000" }}
                >
                  Preview Report
                </button>
                <button
                  type="button"
                  onClick={sendToClient}
                  className="flex-1 rounded-xl px-5 py-3 text-xs"
                  style={{ border: `1px solid ${BORDER}`, color: GOLD_SOFT }}
                >
                  Send to Client →
                </button>
              </div>

              <button
                type="button"
                onClick={reset}
                className="text-[10px] mt-4 cursor-pointer hover:underline"
                style={{ color: GOLD_DEEP }}
              >
                Generate another report
              </button>
            </m.div>
          )}
        </AnimatePresence>

        {/* Sent notice */}
        <AnimatePresence>
          {sentNotice && client && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-xs rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl"
              style={{
                background: SURFACE,
                border: `1px solid rgba(217,119,6,0.4)`,
                color: GOLD,
              }}
            >
              <IconCheck size={12} stroke={3} />
              Sent to {client.name.split(" ")[0]} — they'll receive it shortly
            </m.div>
          )}
        </AnimatePresence>

        {/* Preview overlay */}
        <AnimatePresence>
          {showPreview && client && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 overflow-y-auto"
              style={{ background: SURFACE_DEEP }}
            >
              <div className="px-5 lg:px-6 pt-4 pb-2 flex items-center justify-between border-b sticky top-0 z-10" style={{ background: SURFACE_DEEP, borderColor: BORDER_SOFT }}>
                <div className="text-white text-sm font-semibold">Report Preview</div>
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="inline-flex items-center gap-1 text-[11px]"
                  style={{ color: GOLD_SOFT }}
                >
                  <IconX size={12} />
                  Close
                </button>
              </div>
              <div className="px-4 sm:px-6 py-6 max-w-lg mx-auto">
                <ReportThumbnail client={client.name} period={period} account={client.account} large />

                <div className="text-center text-[10px] my-6" style={{ color: BORDER }}>
                  — Page 2 —
                </div>

                <div
                  className="rounded-2xl p-5 sm:p-6"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="text-[10px] tracking-widest uppercase" style={{ color: GOLD }}>
                    Executive Summary
                  </div>
                  <div className="h-px mt-2 mb-3" style={{ background: "rgba(217,119,6,0.3)" }} />
                  <p className="text-[11.5px] leading-relaxed" style={{ color: GOLD_SOFT }}>
                    {client.name.split(" ")[0]}'s portfolio delivered strong performance in {period}, returning {client.ytdReturn} against the benchmark's 8.2%. Asset allocation remained within target ranges throughout the quarter, with equity exposure averaging 65%.
                  </p>
                  <p className="text-[11.5px] leading-relaxed mt-3" style={{ color: GOLD_SOFT }}>
                    The advisory team continued to monitor concentration risk in technology holdings, with two tactical rebalancing actions executed during the period to bring exposure in line with the agreed Investment Policy Statement.
                  </p>

                  <div className="mt-5">
                    <PerformanceChart period="YTD" baseValue={Number(client.rawValue.replace(/[^0-9.]/g, ""))} height={88} compact />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {[
                      { label: "Total Return", value: client.ytdReturn, c: "#34D399" },
                      { label: "vs Benchmark", value: client.vsBenchmark, c: client.vsBenchmark.startsWith("+") ? "#34D399" : "#F87171" },
                      { label: "Risk Rating", value: "Moderate", c: GOLD },
                    ].map((k) => (
                      <div
                        key={k.label}
                        className="rounded-xl p-3"
                        style={{ background: SURFACE_DEEP, border: `1px solid ${BORDER}` }}
                      >
                        <div className="text-[9px] uppercase tracking-wider" style={{ color: GOLD_DEEP }}>
                          {k.label}
                        </div>
                        <div className="text-base font-black tabular-nums mt-1" style={{ color: k.c }}>
                          {k.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[10px] uppercase tracking-wider mt-5 mb-1.5"
      style={{ color: GOLD_DEEP }}
    >
      {children}
    </div>
  );
}

function ProgressCircle({ pct }: { pct: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return (
    <div className="relative mt-5" style={{ width: 76, height: 76 }}>
      <svg width="76" height="76" viewBox="0 0 76 76">
        <circle cx="38" cy="38" r={r} stroke={BORDER} strokeWidth="4" fill="none" />
        <circle
          cx="38"
          cy="38"
          r={r}
          stroke={GOLD}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          transform="rotate(-90 38 38)"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm"
        style={{ color: GOLD }}
      >
        {Math.round(pct)}%
      </span>
    </div>
  );
}

function ReportThumbnail({
  client,
  period,
  account,
  large = false,
}: {
  client: string;
  period: string;
  account: string;
  large?: boolean;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden mx-auto mt-5"
      style={{
        background: SURFACE,
        border: `1px solid rgba(217,119,6,0.2)`,
        width: large ? "100%" : 220,
        aspectRatio: "210 / 297",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          height: 3,
        }}
      />
      <div className="pt-6 sm:pt-8 px-6 text-center">
        <div className="text-[11px] tracking-[0.28em] font-semibold" style={{ color: GOLD }}>
          AURUM
        </div>
        <div className="h-px mx-8 my-2.5" style={{ background: "rgba(217,119,6,0.3)" }} />
        <div className="text-[9px] sm:text-[10px] tracking-[0.18em] text-white">
          PORTFOLIO INTELLIGENCE REPORT
        </div>
        <div className="text-[9px] mt-1" style={{ color: GOLD_SOFT }}>
          {period}
        </div>
        <div className="h-px mx-8 my-2.5" style={{ background: "rgba(217,119,6,0.3)" }} />
        <div className="mt-3 sm:mt-5">
          <div className="text-[9px]" style={{ color: GOLD_DEEP }}>
            Prepared for
          </div>
          <div className="text-white text-[12px] font-medium tracking-wide mt-1">
            {client}
          </div>
          <div className="text-[9px] mt-1" style={{ color: GOLD_DEEP }}>
            Account {account}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-1.5" style={{ color: GOLD }}>
          <IconSparkles size={10} />
          <span className="text-[8px] tracking-[0.2em] uppercase">AI-drafted</span>
        </div>
      </div>
      <div
        className="absolute left-0 right-0 text-center text-[7px] tracking-[0.22em] py-2 mt-4"
        style={{
          background: BORDER_SOFT,
          color: BORDER,
          position: "relative",
        }}
      >
        CONFIDENTIAL · PRIVATE WEALTH · AURUM
      </div>
    </div>
  );
}
