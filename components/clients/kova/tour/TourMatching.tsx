"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconRobot,
  IconAdjustments,
  IconX,
} from "@tabler/icons-react";

const BLUE = "#0EA5E9";

const BUDGETS = ["$300–400K", "$400–550K", "$550–750K"];
const AREAS = ["City Center", "Riverside", "Northside"];

type Feature = { id: string; label: string; checked: boolean };

const INITIAL_FEATURES: Feature[] = [
  { id: "parking", label: "Parking", checked: true },
  { id: "elevator", label: "Elevator", checked: true },
  { id: "balcony", label: "Balcony", checked: false },
  { id: "garden", label: "Garden", checked: false },
];

const PROPERTIES = [
  { id: "p1", name: "Elm Court 4B", beds: "3 bed · 2 bath", price: "$485,000", score: 94 },
  { id: "p2", name: "Riverside Loft 12", beds: "2 bed · 2 bath", price: "$520,000", score: 87 },
  { id: "p3", name: "Park Manor 308", beds: "3 bed · 2 bath", price: "$495,000", score: 82 },
  { id: "p4", name: "Maple Heights 7C", beds: "2 bed · 1 bath", price: "$415,000", score: 76 },
  { id: "p5", name: "Garden Walk 19", beds: "3 bed · 2 bath", price: "$540,000", score: 71 },
  { id: "p6", name: "Oak Plaza 22", beds: "2 bed · 2 bath", price: "$455,000", score: 68 },
];

function scoreColor(score: number) {
  if (score >= 90) return "#10B981";
  if (score >= 80) return BLUE;
  if (score >= 70) return "#F59E0B";
  return "#4a7a9b";
}

export function TourMatching() {
  const [budget, setBudget] = useState("$400–550K");
  const [area, setArea] = useState("Riverside");
  const [features, setFeatures] = useState<Feature[]>(INITIAL_FEATURES);
  const [matching, setMatching] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggleFeature(id: string) {
    setFeatures((prev) => prev.map((f) => (f.id === id ? { ...f, checked: !f.checked } : f)));
  }

  const PROGRESS_STEPS = ["Checking pricing...", "Scoring locations...", "Applying preferences..."];

  function runMatch() {
    setShowResults(false);
    setMatching(true);
    setProgress(0);
    setSelected(null);
    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;
      if (step >= PROGRESS_STEPS.length) {
        window.clearInterval(interval);
        return;
      }
      setProgress(step);
    }, 600);
    window.setTimeout(() => {
      window.clearInterval(interval);
      setMatching(false);
      setShowResults(true);
      setProgress(0);
    }, 1800);
  }

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  const filters = (
    <>
      <div className="text-white text-sm font-semibold">Client: Rachel Kim</div>
      <div className="text-[10px] mt-1" style={{ color: BLUE }}>
        Active buyer
      </div>

      <FilterGroup label="Budget">
        {BUDGETS.map((b) => (
          <Pill key={b} active={budget === b} onClick={() => setBudget(b)}>
            {b}
          </Pill>
        ))}
      </FilterGroup>

      <FilterGroup label="Location">
        {AREAS.map((a) => (
          <Pill key={a} active={area === a} onClick={() => setArea(a)}>
            {a}
          </Pill>
        ))}
      </FilterGroup>

      <FilterGroup label="Must Include">
        {features.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => toggleFeature(f.id)}
            className="flex items-center gap-2 text-[11px] mb-1.5 w-full"
            style={{ color: f.checked ? "#fff" : "#4a7a9b" }}
          >
            <span
              className="w-4 h-4 rounded border flex items-center justify-center transition-colors"
              style={{
                borderColor: f.checked ? BLUE : "#0D2A45",
                background: f.checked ? "rgba(14,165,233,0.18)" : "transparent",
              }}
            >
              {f.checked && <IconCheck size={10} stroke={3} style={{ color: BLUE }} />}
            </span>
            {f.label}
          </button>
        ))}
      </FilterGroup>

      <button
        type="button"
        onClick={runMatch}
        disabled={matching}
        className="mt-6 w-full text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
        style={{ background: BLUE }}
      >
        <IconRobot size={14} stroke={2} />
        Run AI Match
      </button>

      <div
        className="rounded-xl p-3 mt-4 text-[10px] leading-relaxed"
        style={{
          background: "rgba(14,165,233,0.05)",
          borderWidth: 1,
          borderColor: "#0D2A45",
          borderStyle: "solid",
          color: "#4a7a9b",
        }}
      >
        AI learned <span style={{ color: "#fff" }}>12 preferences</span> from 3 viewings.
      </div>
    </>
  );

  return (
    <div className="flex h-full min-h-[420px] sm:min-h-[520px] relative">
      {/* Filters — desktop */}
      <aside className="hidden md:flex flex-col w-[38%] bg-[#080F1C] border-r border-[#0D2A45] p-5 overflow-y-auto">
        {filters}
      </aside>

      {/* Mobile filter toggle */}
      <button
        type="button"
        onClick={() => setFiltersOpen(true)}
        className="md:hidden absolute top-3 left-3 z-20 bg-[#0D1F38] border border-[#0D2A45] rounded-lg px-3 py-1.5 text-[11px] text-white flex items-center gap-1.5 shadow-lg"
      >
        <IconAdjustments size={12} />
        Filter
      </button>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {filtersOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute inset-0 bg-black/70 z-30 flex"
            onClick={() => setFiltersOpen(false)}
          >
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: [0.21, 0.47, 0.32, 0.98], duration: 0.25 }}
              className="bg-[#080F1C] border-r border-[#0D2A45] p-5 w-[82%] max-w-[300px] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-white text-xs font-semibold uppercase tracking-wider">
                  Filters
                </div>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="text-[#4a7a9b]"
                  aria-label="Close filters"
                >
                  <IconX size={16} />
                </button>
              </div>
              {filters}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <section className="flex-1 bg-[#0A1628] p-3 sm:p-5 overflow-y-auto relative">
        <div className="mt-7 sm:mt-0">
          <div className="text-white text-sm font-semibold">
            {showResults ? "23 properties matched" : "Running AI match..."}
          </div>
          <div className="text-[#4a7a9b] text-[10px] mt-0.5">
            Sorted by AI compatibility score
          </div>
        </div>

        <AnimatePresence mode="wait">
          {matching ? (
            <m.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4"
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#0D1F38] border border-[#0D2A45] rounded-xl overflow-hidden animate-pulse"
                  style={{ height: 140 }}
                />
              ))}
              <div className="col-span-full text-center mt-2">
                <div className="inline-flex items-center gap-2 text-[11px]" style={{ color: BLUE }}>
                  <IconRobot size={14} className="animate-pulse" />
                  {PROGRESS_STEPS[Math.min(progress, PROGRESS_STEPS.length - 1)]}
                </div>
              </div>
            </m.div>
          ) : showResults ? (
            <m.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4"
            >
              {PROPERTIES.map((p, i) => {
                const isSelected = selected === p.id;
                return (
                  <m.button
                    key={p.id}
                    type="button"
                    onClick={() => setSelected(isSelected ? null : p.id)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="text-left bg-[#0D1F38] rounded-xl overflow-hidden border transition-colors"
                    style={{
                      borderColor: isSelected ? "rgba(14,165,233,0.5)" : "#0D2A45",
                      background: isSelected ? "#0C1A2E" : "#0D1F38",
                    }}
                  >
                    <div
                      className="relative h-20 sm:h-24 overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(to top, #0D2A45 0%, #0A1628 100%)",
                      }}
                    >
                      {/* Building silhouette */}
                      <div className="absolute inset-x-2 bottom-0 flex gap-1 items-end">
                        {[40, 60, 30, 70, 45, 55, 35].map((h, idx) => (
                          <div
                            key={idx}
                            className="flex-1 rounded-t-sm"
                            style={{
                              height: `${h}%`,
                              background: `rgba(14,165,233,${0.06 + (idx % 3) * 0.04})`,
                            }}
                          />
                        ))}
                      </div>
                      {/* Window dots */}
                      <div className="absolute inset-3 grid grid-cols-6 gap-1 pointer-events-none opacity-40">
                        {Array.from({ length: 12 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="block w-1 h-1 rounded-sm"
                            style={{
                              background: idx % 3 === 0 ? BLUE : "transparent",
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="absolute top-2 right-2 backdrop-blur rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{
                          background: "rgba(0,0,0,0.7)",
                          color: scoreColor(p.score),
                        }}
                      >
                        {p.score}%
                      </span>
                    </div>
                    <div className="p-3">
                      <div className="text-white text-xs font-semibold">{p.name}</div>
                      <div className="text-[#4a7a9b] text-[10px]">{p.beds}</div>
                      <div className="text-xs font-bold mt-1" style={{ color: BLUE }}>
                        {p.price}
                      </div>

                      <AnimatePresence>
                        {isSelected && (
                          <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="text-[10px] mt-2.5 mb-1.5 text-[#4a7a9b]">
                              Why AI recommended this:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {["In budget ✓", `${area} ✓`, "Elevator ✓"].map((r) => (
                                <span
                                  key={r}
                                  className="bg-[#0A1628] rounded px-2 py-0.5 text-[10px]"
                                  style={{ color: "#4a7a9b" }}
                                >
                                  {r}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-1.5 mt-2.5">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast("Viewing scheduled for Thu 14:00");
                                }}
                                className="text-white text-[10px] px-2.5 py-1.5 rounded-lg"
                                style={{ background: BLUE }}
                              >
                                Schedule Viewing →
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast("Saved to favorites");
                                }}
                                className="border text-[10px] px-2.5 py-1.5 rounded-lg"
                                style={{ borderColor: "#0D2A45", color: "#4a7a9b" }}
                              >
                                Save →
                              </button>
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </m.button>
                );
              })}
            </m.div>
          ) : null}
        </AnimatePresence>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-[#0C1A2E] border rounded-xl px-3.5 py-2 text-emerald-400 text-[11px] font-medium flex items-center gap-2 shadow-2xl z-10"
              style={{ borderColor: "rgba(16,185,129,0.4)" }}
            >
              <IconCheck size={12} stroke={3} />
              {toast}
            </m.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="text-[10px] uppercase tracking-wider text-[#2a5a7a]">{label}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-2.5 py-1 text-[10px] border transition-colors"
      style={{
        background: active ? "rgba(14,165,233,0.10)" : "transparent",
        borderColor: active ? "rgba(14,165,233,0.35)" : "#0D2A45",
        color: active ? BLUE : "#2a5a7a",
      }}
    >
      {children}
    </button>
  );
}
