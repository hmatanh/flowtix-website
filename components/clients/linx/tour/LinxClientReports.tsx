"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconLoader2,
  IconClock,
  IconArrowLeft,
  IconDownload,
  IconSend,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  VIOLET,
  VIOLET_SOFT,
  SHELL,
  SURFACE,
  SURFACE_CARD,
  BORDER,
  TEXT,
  TEXT_DIM,
  TEXT_FAINT,
  CLIENTS,
  findClient,
} from "./_shared";

type ReportStatus = "sent" | "generating" | "due";

export function LinxClientReports() {
  const [selectedClient, setSelectedClient] = useState("brew");
  const [month, setMonth] = useState("May 2025");
  const [reportsState, setReportsState] = useState<Record<string, ReportStatus>>(() =>
    CLIENTS.reduce((acc, c, i) => ({ ...acc, [c.id]: i < 6 ? "sent" : i === 6 ? "generating" : "due" }), {}),
  );
  const [previewMode, setPreviewMode] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const client = findClient(selectedClient);
  const clientStatus = reportsState[client.id];

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  function generateReport() {
    setGenerating(true);
    setReportsState((prev) => ({ ...prev, [client.id]: "generating" }));
    window.setTimeout(() => {
      setReportsState((prev) => ({ ...prev, [client.id]: "sent" }));
      setGenerating(false);
      showToast("Report generated & sent");
    }, 2500);
  }

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[600px] flex" style={{ background: SHELL }}>
      {/* Mobile dropdown shown above main */}
      <div className="md:hidden absolute top-3 left-3 right-3 z-10">
        <select
          value={selectedClient}
          onChange={(e) => {
            setSelectedClient(e.target.value);
            setPreviewMode(false);
          }}
          className="w-full rounded-xl px-3 py-2 text-xs text-white outline-none appearance-none cursor-pointer"
          style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
        >
          {CLIENTS.map((c) => (
            <option key={c.id} value={c.id} style={{ background: SURFACE }}>
              {c.name} · May 2025
            </option>
          ))}
        </select>
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-52 py-5 border-r shrink-0" style={{ background: SURFACE, borderColor: BORDER }}>
        <div className="text-[9px] uppercase tracking-wider px-4 mb-3" style={{ color: TEXT_DIM }}>
          Client Reports
        </div>

        <div className="px-4 mb-4 relative">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="appearance-none w-full text-xs text-white px-3 py-2 pr-7 rounded-lg outline-none cursor-pointer"
            style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
          >
            {["May 2025", "April 2025", "March 2025", "All Reports"].map((m) => (
              <option key={m} value={m} style={{ background: SURFACE }}>
                {m}
              </option>
            ))}
          </select>
          <IconChevronDown size={11} className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: VIOLET }} />
        </div>

        <div className="text-[9px] uppercase tracking-wider px-4 mb-2" style={{ color: TEXT_DIM }}>
          Reports this month
        </div>
        <div className="flex-1 overflow-y-auto">
          {CLIENTS.map((c) => {
            const active = selectedClient === c.id;
            const status = reportsState[c.id];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSelectedClient(c.id);
                  setPreviewMode(false);
                }}
                className="w-full text-left px-4 py-3 flex items-center justify-between gap-2 transition-colors border-l-2"
                style={{
                  background: active ? SURFACE_CARD : "transparent",
                  borderLeftColor: active ? VIOLET : "transparent",
                }}
              >
                <div className="min-w-0">
                  <div className="text-white text-xs font-medium truncate">{c.name}</div>
                  <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                    {c.pages ?? 8} pages
                  </div>
                </div>
                <StatusBadge status={status} />
              </button>
            );
          })}
        </div>

        <div className="border-t mt-4 pt-4 px-4" style={{ borderColor: BORDER }}>
          <div className="text-sm font-black" style={{ color: VIOLET }}>
            23/23 sent
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: TEXT_DIM }}>
            Reports auto-sent this month
          </div>
          <div className="text-[10px] mt-1" style={{ color: "#34D399" }}>
            0 hours of manual work
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto md:pt-0 pt-14" style={{ background: SHELL }}>
        <AnimatePresence mode="wait">
          {!previewMode ? (
            <m.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Status header */}
              <div className="px-5 pt-5 pb-4 border-b" style={{ borderColor: BORDER }}>
                <div className="text-white text-sm font-semibold">{month} Report · {client.name}</div>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                  {clientStatus === "sent" && (
                    <>
                      <span className="inline-flex items-center gap-1" style={{ color: "#34D399" }}>
                        <IconCheck size={11} stroke={3} /> Generated: May 1 at 00:00
                      </span>
                      <span className="inline-flex items-center gap-1" style={{ color: "#34D399" }}>
                        <IconCheck size={11} stroke={3} /> Sent: May 1 at 08:00
                      </span>
                      <span style={{ color: VIOLET }}>
                        Opened by client: May 1 at 09:14
                      </span>
                    </>
                  )}
                  {clientStatus === "generating" && (
                    <span className="inline-flex items-center gap-1.5" style={{ color: VIOLET }}>
                      <IconLoader2 size={11} className="animate-spin" /> Generating…
                    </span>
                  )}
                  {clientStatus === "due" && (
                    <span className="inline-flex items-center gap-1" style={{ color: TEXT_DIM }}>
                      <IconClock size={11} /> Due May 31
                    </span>
                  )}
                </div>
                <div className="text-[10px] mt-1" style={{ color: TEXT_DIM }}>
                  Auto-generated by AI in 3.2 seconds
                </div>
              </div>

              {/* Report preview */}
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-wider mb-3" style={{ color: TEXT_DIM }}>
                  Preview
                </div>
                <ReportThumb client={client.name} month={month} />

                <div className="flex flex-wrap gap-2.5 justify-center mt-5">
                  <button
                    type="button"
                    onClick={() => setPreviewMode(true)}
                    className="rounded-xl px-5 py-2.5 text-xs font-bold text-white inline-flex items-center gap-2"
                    style={{ background: VIOLET }}
                  >
                    Preview Full Report
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast("PDF downloaded")}
                    className="rounded-xl px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT }}
                  >
                    <IconDownload size={12} />
                    Download PDF
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast(`Re-sent to ${client.name.toLowerCase().replace(/\s+/g, "")}@…`)}
                    className="rounded-xl px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT }}
                  >
                    <IconSend size={12} />
                    Resend
                  </button>
                </div>

                <div className="text-center mt-5">
                  <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                    Need a report for a different period?
                  </div>
                  <button
                    type="button"
                    onClick={generateReport}
                    disabled={generating}
                    className="text-xs cursor-pointer mt-1 inline-flex items-center gap-1.5 hover:underline disabled:opacity-60"
                    style={{ color: VIOLET }}
                  >
                    {generating ? (
                      <>
                        <IconLoader2 size={11} className="animate-spin" />
                        Generating…
                      </>
                    ) : (
                      "Generate Report"
                    )}
                  </button>
                </div>
              </div>
            </m.div>
          ) : (
            <m.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-5">
              <button
                type="button"
                onClick={() => setPreviewMode(false)}
                className="text-xs inline-flex items-center gap-1 mb-4"
                style={{ color: TEXT }}
              >
                <IconArrowLeft size={11} stroke={2} />
                Back to List
              </button>

              <div className="space-y-4 max-w-xl mx-auto">
                <ReportThumb client={client.name} month={month} large />

                <PageDivider label="Page 2 · Executive Summary" />
                <ReportPage>
                  <SectionHeading>Executive Summary</SectionHeading>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT }}>
                    {client.name}'s campaign delivered strong results this month, with engagement rates climbing
                    18% and brand mentions up 312 versus April. The Coastal Gold launch content set new highs
                    for the account on both Instagram and TikTok.
                  </p>
                  <p className="text-xs leading-relaxed mt-2" style={{ color: TEXT }}>
                    Below, the full performance breakdown plus AI-generated recommendations for next month's
                    creative direction and channel mix.
                  </p>
                  <div
                    className="rounded-xl p-3 mt-3"
                    style={{ background: SHELL, borderLeft: `2px solid ${VIOLET}` }}
                  >
                    <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: VIOLET }}>
                      Key wins
                    </div>
                    <ul className="space-y-1 text-[11px]" style={{ color: TEXT }}>
                      <li>• 847K total impressions (+42% MoM)</li>
                      <li>• 4.2% engagement rate (industry: 1.8%)</li>
                      <li>• 312 new brand mentions across platforms</li>
                    </ul>
                  </div>
                </ReportPage>

                <PageDivider label="Page 3 · Campaign Metrics" />
                <ReportPage>
                  <SectionHeading>Campaign Metrics</SectionHeading>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { label: "Impressions", value: "847K", delta: "+42%" },
                      { label: "Engagement Rate", value: "4.2%", delta: "+0.8%" },
                      { label: "Brand Mentions", value: "+312", delta: "vs Apr" },
                      { label: "Avg Watch Time", value: "8.2s", delta: "+1.4s" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-3"
                        style={{ background: SHELL, border: `1px solid ${BORDER}` }}
                      >
                        <div className="text-[9px] uppercase tracking-wider" style={{ color: TEXT_DIM }}>
                          {m.label}
                        </div>
                        <div className="text-base font-black tabular-nums mt-0.5 text-white">{m.value}</div>
                        <div className="text-[10px]" style={{ color: VIOLET }}>
                          {m.delta}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-16">
                    <MiniLineChart />
                  </div>
                </ReportPage>

                <PageDivider label="Page 4 · Next Month Strategy" />
                <ReportPage>
                  <SectionHeading>Next Month Strategy</SectionHeading>
                  <div className="text-[10px] mb-3" style={{ color: TEXT_DIM }}>
                    AI-recommended based on this month's data
                  </div>
                  {[
                    "Double down on TikTok — engagement is 2.4× higher than Instagram for this brand voice.",
                    "Shift $1,200 from paid awareness ads to creator partnerships (3 micro-influencer slots).",
                    "Launch the founder-story video series on May 18 to maintain awareness momentum.",
                  ].map((rec, i) => (
                    <div key={i} className="flex gap-3 py-2 border-b last:border-b-0" style={{ borderColor: SHELL }}>
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-xs font-bold shrink-0"
                        style={{ background: "rgba(139,92,246,0.18)", color: VIOLET }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[11.5px] leading-relaxed" style={{ color: TEXT }}>
                        {rec}
                      </span>
                    </div>
                  ))}
                </ReportPage>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {toast && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl z-10"
            style={{ background: SURFACE_CARD, border: `1px solid rgba(52,211,153,0.4)`, color: "#34D399" }}
          >
            <IconCheck size={12} stroke={3} />
            {toast}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }: { status: ReportStatus }) {
  if (status === "sent") {
    return (
      <span className="rounded-full px-2 py-0.5 text-[9px] inline-flex items-center gap-1" style={{ background: "rgba(16,185,129,0.18)", color: "#34D399" }}>
        <IconCheck size={9} stroke={3} /> Sent
      </span>
    );
  }
  if (status === "generating") {
    return (
      <span className="rounded-full px-2 py-0.5 text-[9px] inline-flex items-center gap-1" style={{ background: "rgba(139,92,246,0.18)", color: VIOLET }}>
        <IconLoader2 size={9} className="animate-spin" /> Gen…
      </span>
    );
  }
  return (
    <span className="text-[9px] inline-flex items-center gap-1" style={{ color: TEXT_DIM }}>
      <IconClock size={9} /> Due
    </span>
  );
}

function ReportThumb({ client, month, large }: { client: string; month: string; large?: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden mx-auto"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        maxWidth: large ? "100%" : 320,
      }}
    >
      <div className="h-2" style={{ background: `linear-gradient(90deg, ${VIOLET}, ${VIOLET_SOFT}, ${VIOLET})` }} />
      <div className="p-6 sm:p-8 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-[11px] font-black tracking-[0.2em]" style={{ color: VIOLET }}>
            LINX
          </span>
          <span className="block w-1 h-1 rounded-full" style={{ background: VIOLET }} />
          <span className="block w-1 h-1 rounded-full" style={{ background: VIOLET, opacity: 0.6 }} />
        </div>
        <div className="h-px mx-auto my-3" style={{ width: 60, background: `${VIOLET}33` }} />
        <div className="text-white text-[11px] tracking-[0.2em] uppercase">Monthly Performance Report</div>
        <div className="text-sm mt-1" style={{ color: TEXT }}>
          {month}
        </div>
        <div className="h-px mx-auto my-3" style={{ width: 60, background: `${VIOLET}33` }} />
        <div className="text-white text-base font-black mt-2">{client}</div>
        <div className="text-xs mt-0.5" style={{ color: TEXT }}>
          Brand Campaign · Month 3
        </div>
        <div className="text-[10px] mt-1" style={{ color: TEXT_DIM }}>
          Account: Priya Nair · LINX Agency
        </div>
      </div>
      <div className="text-center py-3 text-[9px] tracking-wider" style={{ background: SURFACE_CARD, color: TEXT_FAINT }}>
        GENERATED BY AI · AUTO-DELIVERED · LINX.AGENCY
      </div>
    </div>
  );
}

function ReportPage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderTop: `3px solid ${VIOLET}`,
      }}
    >
      {children}
    </div>
  );
}

function PageDivider({ label }: { label: string }) {
  return (
    <div className="text-center text-[10px] tracking-wider" style={{ color: TEXT_FAINT }}>
      — {label} —
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-[10px] tracking-widest uppercase mb-1" style={{ color: VIOLET }}>
        {children}
      </div>
      <div className="h-px mb-4" style={{ background: `${VIOLET}33` }} />
    </>
  );
}

function MiniLineChart() {
  const points = [10, 14, 13, 18, 22, 20, 24, 27, 25, 29, 32, 35];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - ((p - min) / range) * 90;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="linxChartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={VIOLET} stopOpacity="0.3" />
          <stop offset="100%" stopColor={VIOLET} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L100,100 L0,100 Z`} fill="url(#linxChartGrad)" />
      <m.path
        d={path}
        fill="none"
        stroke={VIOLET}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </svg>
  );
}
