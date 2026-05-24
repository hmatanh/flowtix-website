"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconLoader2,
  IconCircle,
  IconFileText,
  IconDownload,
  IconSend,
  IconPencil,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";
import {
  VIOLET,
  VIOLET_SOFT,
  SHELL,
  SURFACE,
  SURFACE_CARD,
  BORDER,
  BORDER_SOFT,
  TEXT,
  TEXT_DIM,
  TEXT_FAINT,
} from "./_shared";

type Step = 1 | 2 | 3;

type SectionId = "summary" | "approach" | "deliverables" | "investment" | "timeline" | "nextsteps";

const SECTIONS: { id: SectionId; num: string; label: string; words: number }[] = [
  { id: "summary",      num: "01", label: "Executive Summary",     words: 156 },
  { id: "approach",     num: "02", label: "Our Strategic Approach", words: 312 },
  { id: "deliverables", num: "03", label: "Campaign Deliverables",  words: 287 },
  { id: "timeline",     num: "04", label: "Timeline & Milestones",  words: 198 },
  { id: "investment",   num: "05", label: "Investment",             words: 145 },
  { id: "nextsteps",    num: "06", label: "Next Steps",             words: 89 },
];

const GEN_STEPS = [
  "Analyzing brief",
  "Industry research",
  "Defining scope",
  "Strategic approach",
  "Deliverables & timeline",
  "Investment breakdown",
];

const INDUSTRIES = [
  "Food & Beverage",
  "Fashion & Apparel",
  "Tech & SaaS",
  "Health & Wellness",
  "Real Estate",
  "Finance",
  "E-commerce",
  "Agency",
  "Other",
];

const PROJECT_TYPES = [
  "Brand Campaign",
  "Social Media",
  "Performance Marketing",
  "Brand Strategy",
  "Content Creation",
  "Full Retainer",
];

const BUDGETS = ["< $3K", "$3–5K", "$5–10K", "$10–20K", "$20K+"];

export function LinxProposalAI() {
  const [step, setStep] = useState<Step>(1);
  const [clientName, setClientName] = useState("");
  const [industry, setIndustry] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [goal, setGoal] = useState("");
  const [genStep, setGenStep] = useState(0);
  const [section, setSection] = useState<SectionId>("summary");
  const [editing, setEditing] = useState(false);
  const [sectionDraft, setSectionDraft] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const canGenerate = clientName.trim() && industry && projectType;

  function reset() {
    setStep(1);
    setClientName("");
    setIndustry("");
    setProjectType("");
    setBudget("");
    setGoal("");
    setGenStep(0);
    setSection("summary");
    setEditing(false);
    setWordCount(0);
    setTimer(0);
  }

  function useSampleBrief() {
    setClientName("Brew Republic");
    setIndustry("Food & Beverage");
    setProjectType("Brand Campaign");
    setBudget("$5–10K");
    setGoal(
      "Drive brand awareness for their new craft lager 'Coastal Gold' launch, targeting 25–40 urban professionals in Portland & Seattle.",
    );
  }

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2500);
  }

  function generate() {
    if (!canGenerate) return;
    setStep(2);
    setGenStep(0);
    setWordCount(0);
    setTimer(0);
  }

  // Step animation + word counter
  useEffect(() => {
    if (step !== 2) return;
    const stepTimers: number[] = [];
    GEN_STEPS.forEach((_, i) => {
      stepTimers.push(window.setTimeout(() => setGenStep(i + 1), 700 * (i + 1)));
    });
    stepTimers.push(
      window.setTimeout(() => {
        setStep(3);
        setWordCount(1847);
        setTimer(44);
      }, 4400),
    );

    // word ticker
    let w = 0;
    const wordInterval = window.setInterval(() => {
      w += 60;
      if (w >= 1847) {
        w = 1847;
        window.clearInterval(wordInterval);
      }
      setWordCount(w);
    }, 110);

    // timer
    let t = 0;
    const timerInterval = window.setInterval(() => {
      t += 1;
      if (t >= 44) {
        t = 44;
        window.clearInterval(timerInterval);
      }
      setTimer(t);
    }, 100);

    return () => {
      stepTimers.forEach((tt) => window.clearTimeout(tt));
      window.clearInterval(wordInterval);
      window.clearInterval(timerInterval);
    };
  }, [step]);

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[600px] flex flex-col" style={{ background: SHELL }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-5 py-3.5 border-b shrink-0"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-bold">LINX</span>
          <span className="block w-1.5 h-1.5 rounded-full" style={{ background: VIOLET }} />
          <span className="text-sm ml-2" style={{ color: TEXT }}>
            Proposal AI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="text-xs rounded-lg px-3 py-1.5"
            style={{ border: `1px solid ${BORDER}`, color: TEXT }}
          >
            New Proposal
          </button>
          <span className="text-xs hidden sm:inline" style={{ color: TEXT_DIM }}>
            History
          </span>
        </div>
      </header>

      {/* ==== STEP 1: INPUT ==== */}
      {step === 1 && (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <aside
            className="w-full lg:w-[45%] p-5 lg:p-6 border-b lg:border-b-0 lg:border-r overflow-y-auto"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <div className="text-white text-sm font-semibold">New Proposal Brief</div>
            <div className="text-[10px] mt-1 mb-5" style={{ color: TEXT_DIM }}>
              The more detail you give, the better the output.
            </div>

            <Label>Client Name</Label>
            <input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="e.g. Brew Republic"
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none"
              style={{
                background: SURFACE_CARD,
                border: `1px solid ${BORDER}`,
              }}
            />

            <Label>Industry</Label>
            <Select
              value={industry}
              onChange={setIndustry}
              options={["", ...INDUSTRIES]}
              placeholder="Select..."
            />

            <Label>Project Type</Label>
            <div className="grid grid-cols-2 gap-2">
              {PROJECT_TYPES.map((t) => {
                const active = projectType === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setProjectType(t)}
                    className="rounded-xl p-2.5 text-xs text-left transition-colors"
                    style={{
                      background: active ? SURFACE_CARD : SHELL,
                      border: `1px solid ${active ? "rgba(139,92,246,0.4)" : BORDER}`,
                      color: active ? "#fff" : TEXT,
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <Label>Monthly Budget</Label>
            <div className="flex flex-wrap gap-1.5">
              {BUDGETS.map((b) => {
                const active = budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className="rounded-full px-3 py-1 text-[11px] border"
                    style={{
                      background: active ? "rgba(139,92,246,0.10)" : "transparent",
                      borderColor: active ? "rgba(139,92,246,0.35)" : BORDER,
                      color: active ? VIOLET : TEXT_DIM,
                    }}
                  >
                    {b}
                  </button>
                );
              })}
            </div>

            <Label>Campaign Goal</Label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="What does the client want to achieve? Be specific…"
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none"
              style={{
                background: SURFACE_CARD,
                border: `1px solid ${BORDER}`,
                minHeight: 88,
              }}
            />

            <button
              type="button"
              onClick={generate}
              disabled={!canGenerate}
              className="mt-6 w-full py-3.5 rounded-xl text-sm font-bold text-white transition-colors disabled:cursor-not-allowed"
              style={{
                background: canGenerate ? VIOLET : SURFACE_CARD,
                color: canGenerate ? "#fff" : TEXT_FAINT,
              }}
            >
              Generate Proposal →
            </button>

            <div className="text-center mt-3 text-[10px]" style={{ color: TEXT_DIM }}>
              Not sure what to write?{" "}
              <button type="button" onClick={useSampleBrief} className="hover:underline" style={{ color: VIOLET }}>
                Use sample brief
              </button>
            </div>
          </aside>

          <section className="hidden lg:flex flex-1 p-6 items-center justify-center" style={{ background: SHELL }}>
            <div className="text-center max-w-xs">
              <IconFileText size={56} stroke={0.8} style={{ color: SURFACE_CARD }} />
              <div className="text-sm mt-4" style={{ color: TEXT_FAINT }}>
                Your proposal appears here.
              </div>
              <div className="text-xs mt-1" style={{ color: BORDER_SOFT }}>
                Fill in the brief →
              </div>

              {/* Faded example */}
              <div
                className="mt-8 rounded-2xl p-4 opacity-30"
                style={{ background: SURFACE, border: `1px solid ${BORDER}`, filter: "blur(0.5px)" }}
              >
                <div className="text-[10px] tracking-widest uppercase" style={{ color: VIOLET }}>
                  Example Output
                </div>
                <div className="space-y-2 mt-3">
                  <div className="h-2 rounded w-3/4 mx-auto" style={{ background: BORDER }} />
                  <div className="h-2 rounded w-full" style={{ background: BORDER }} />
                  <div className="h-2 rounded w-5/6" style={{ background: BORDER }} />
                  <div className="h-2 rounded w-2/3 mx-auto" style={{ background: BORDER }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==== STEP 2: GENERATING ==== */}
      {step === 2 && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
          {/* Premium spinner */}
          <div className="relative" style={{ width: 64, height: 64 }}>
            {[0, 1, 2, 3].map((i) => (
              <m.span
                key={i}
                className="absolute inset-0 rounded-full"
                style={{
                  border: `2px solid transparent`,
                  borderTopColor: VIOLET,
                  borderRightColor: i === 0 || i === 2 ? VIOLET_SOFT : "transparent",
                  opacity: 0.4 + i * 0.2,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6 - i * 0.25, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          <div className="text-white text-sm font-semibold mt-6">
            Generating proposal for {clientName || "client"}…
          </div>

          <div className="max-w-xs w-full mt-7 space-y-2.5">
            {GEN_STEPS.map((label, i) => {
              const past = i < genStep;
              const current = i === genStep;
              return (
                <m.div
                  key={label}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: i <= genStep ? 1 : 0.35, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                    style={{
                      background: past ? VIOLET : current ? "rgba(139,92,246,0.15)" : "transparent",
                      border: `1px solid ${past || current ? "rgba(139,92,246,0.5)" : BORDER}`,
                      color: past ? "#fff" : VIOLET,
                    }}
                  >
                    {past ? <IconCheck size={10} stroke={3} /> : current ? <IconLoader2 size={10} className="animate-spin" /> : <IconCircle size={6} stroke={2} />}
                  </span>
                  <span className="text-[12px] text-left flex-1" style={{ color: current ? "#fff" : past ? TEXT : TEXT_FAINT }}>
                    {label}
                  </span>
                </m.div>
              );
            })}
          </div>

          <div className="mt-7 flex items-center gap-6">
            <div>
              <div className="font-black tabular-nums" style={{ color: VIOLET, fontSize: 26 }}>
                {wordCount.toLocaleString()}
              </div>
              <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                words written
              </div>
            </div>
            <span className="w-px h-10" style={{ background: BORDER }} />
            <div>
              <div className="font-mono font-bold text-white tabular-nums" style={{ fontSize: 22 }}>
                0:{String(timer).padStart(2, "0")}
              </div>
              <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                vs. 7.5h manually
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==== STEP 3: PROPOSAL READY ==== */}
      {step === 3 && (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left nav */}
          <aside
            className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r flex flex-col"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <div className="px-5 pt-5">
              <div className="text-xs font-semibold inline-flex items-center gap-1.5" style={{ color: "#34D399" }}>
                <IconCheck size={12} stroke={3} />
                Proposal Generated
              </div>
              <div className="text-[10px] mt-1" style={{ color: TEXT_DIM }}>
                {wordCount.toLocaleString()} words · {timer} seconds · On-brand: 97%
              </div>

              <div
                className="rounded-xl p-3 mt-4"
                style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="text-white text-sm font-bold truncate">{clientName}</div>
                <div className="text-xs mt-0.5" style={{ color: TEXT }}>
                  {industry} · {projectType}
                </div>
                <div className="text-xs mt-0.5" style={{ color: VIOLET }}>
                  {budget || "Budget TBD"} / month
                </div>
              </div>

              <div className="text-[9px] uppercase tracking-wider mt-5 mb-2" style={{ color: TEXT_DIM }}>
                Sections
              </div>
            </div>

            <div className="flex-1 lg:overflow-y-auto overflow-x-auto lg:overflow-x-visible">
              <div className="flex lg:flex-col min-w-max lg:min-w-0">
                {SECTIONS.map((s) => {
                  const active = section === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setSection(s.id);
                        setEditing(false);
                      }}
                      className="px-5 py-2.5 flex items-center justify-between gap-3 text-left transition-colors shrink-0"
                      style={{
                        background: active ? SURFACE_CARD : "transparent",
                        borderLeft: active ? `2px solid ${VIOLET}` : "2px solid transparent",
                        color: active ? "#fff" : TEXT_DIM,
                      }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[9px] font-mono shrink-0" style={{ color: VIOLET }}>
                          {s.num}
                        </span>
                        <span className="text-xs truncate">{s.label}</span>
                      </div>
                      <span className="text-[9px] shrink-0" style={{ color: TEXT_FAINT }}>
                        {s.words}w
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="px-5 pt-2 pb-5 mt-auto border-t" style={{ borderColor: BORDER }}>
              <button
                type="button"
                onClick={() => showToast(`Sent to ${clientName || "client"}`)}
                className="w-full py-3 rounded-xl text-sm font-bold text-white inline-flex items-center gap-2 justify-center"
                style={{ background: VIOLET }}
              >
                <IconSend size={13} />
                Send to Client
              </button>
              <button
                type="button"
                onClick={() => showToast("PDF downloaded")}
                className="w-full py-2.5 rounded-xl text-sm mt-2 inline-flex items-center gap-2 justify-center"
                style={{ border: `1px solid ${BORDER}`, color: TEXT }}
              >
                <IconDownload size={13} />
                Export PDF
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditing(true);
                  setSectionDraft(""); // textarea starts empty for "AI rewrite"
                }}
                className="text-[10px] text-center w-full mt-2 inline-flex items-center justify-center gap-1"
                style={{ color: TEXT_DIM }}
              >
                <IconPencil size={10} /> Edit Proposal
              </button>
            </div>
          </aside>

          {/* Right content */}
          <section className="flex-1 overflow-y-auto p-5 sm:p-7" style={{ background: SHELL }}>
            {/* Letterhead */}
            <div className="flex items-center justify-between border-b pb-3 mb-5" style={{ borderColor: BORDER }}>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: VIOLET }}>
                LINX
              </span>
              <span className="text-[10px]" style={{ color: TEXT_DIM }}>
                May 14, 2025 · STRATEGIC PROPOSAL
              </span>
            </div>

            <AnimatePresence mode="wait">
              <m.div
                key={section + (editing ? "-edit" : "")}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {editing ? (
                  <EditMode
                    section={SECTIONS.find((s) => s.id === section)!}
                    draft={sectionDraft}
                    onDraft={setSectionDraft}
                    onSave={() => {
                      setEditing(false);
                      showToast("Section updated");
                    }}
                    onCancel={() => setEditing(false)}
                  />
                ) : (
                  <SectionContent
                    section={section}
                    clientName={clientName || "the client"}
                    industry={industry || "your category"}
                    projectType={projectType || "campaign"}
                    goal={goal || "your objective"}
                    budget={budget || "the agreed budget"}
                  />
                )}
              </m.div>
            </AnimatePresence>
          </section>
        </div>
      )}

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl"
            style={{
              background: SURFACE_CARD,
              border: `1px solid rgba(52,211,153,0.4)`,
              color: "#34D399",
            }}
          >
            <IconCheck size={12} stroke={3} />
            {toast}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============ Helpers ============ */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-wider mt-4 mb-1.5" style={{ color: TEXT_DIM }}>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none appearance-none cursor-pointer"
      style={{
        background: SURFACE_CARD,
        border: `1px solid ${BORDER}`,
      }}
    >
      {options.map((o) =>
        o === "" ? (
          <option key="placeholder" value="" style={{ background: SURFACE }}>
            {placeholder ?? "Select..."}
          </option>
        ) : (
          <option key={o} value={o} style={{ background: SURFACE }}>
            {o}
          </option>
        ),
      )}
    </select>
  );
}

function EditMode({
  section,
  draft,
  onDraft,
  onSave,
  onCancel,
}: {
  section: typeof SECTIONS[number];
  draft: string;
  onDraft: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.2em] uppercase mb-2 flex items-center gap-2" style={{ color: VIOLET }}>
        Editing · {section.label}
      </div>
      <textarea
        value={draft}
        onChange={(e) => onDraft(e.target.value)}
        placeholder={`Rewrite the ${section.label.toLowerCase()} in your own words…`}
        className="w-full p-4 rounded-2xl text-white text-sm leading-relaxed outline-none resize-none"
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          minHeight: 220,
        }}
      />
      <div className="flex gap-2 mt-3">
        <button
          type="button"
          onClick={onSave}
          className="px-4 py-2 rounded-xl text-xs font-bold text-white"
          style={{ background: VIOLET }}
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-xl text-xs"
          style={{ border: `1px solid ${BORDER}`, color: TEXT }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function SectionContent({
  section,
  clientName,
  industry,
  projectType,
  goal,
  budget,
}: {
  section: SectionId;
  clientName: string;
  industry: string;
  projectType: string;
  goal: string;
  budget: string;
}) {
  const heading = (num: string, label: string) => (
    <div className="flex items-center gap-3 border-b pb-3 mb-4" style={{ borderColor: BORDER }}>
      <span className="text-xs font-mono" style={{ color: VIOLET }}>
        {num} /
      </span>
      <h3 className="text-white text-base sm:text-lg font-black">{label}</h3>
    </div>
  );

  if (section === "summary") {
    return (
      <div>
        {heading("01", "Executive Summary")}
        <p className="text-sm leading-[1.75]" style={{ color: TEXT }}>
          LINX is pleased to present this strategic proposal to <span style={{ color: "#fff" }}>{clientName}</span>. Following our discovery conversation, we have developed a comprehensive <span style={{ color: "#fff" }}>{projectType}</span> strategy designed to achieve your core objective of <span style={{ color: "#fff" }}>{goal}</span>.
        </p>
        <p className="text-sm leading-[1.75] mt-3" style={{ color: TEXT }}>
          Our recommended approach centers on three core pillars: establishing a distinctive brand voice in the {industry} category, creating content that converts awareness to advocacy, and building measurement systems that demonstrate clear ROI.
        </p>
        <p className="text-sm leading-[1.75] mt-3" style={{ color: TEXT }}>
          This proposal outlines a {budget} monthly investment with a projected 12-week delivery timeline, inclusive of all creative, strategy, and management costs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-6">
          {[
            { n: "01", label: "Brand Voice" },
            { n: "02", label: "Content Reach" },
            { n: "03", label: "Measurable ROI" },
          ].map((p) => (
            <div
              key={p.n}
              className="rounded-xl p-4 text-center"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
            >
              <div className="text-lg font-black" style={{ color: VIOLET }}>
                {p.n}
              </div>
              <div className="text-[10px] mt-1" style={{ color: TEXT }}>
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "approach") {
    return (
      <div>
        {heading("02", "Our Strategic Approach")}
        <p className="text-sm leading-[1.75]" style={{ color: TEXT }}>
          We don't believe in templates. Every account we work with gets a strategy built around their specific market position, audience, and operational reality.
        </p>
        <p className="text-sm leading-[1.75] mt-3" style={{ color: TEXT }}>
          For {clientName}, that means three distinct phases — Discover, Create, Scale — each with measurable outputs and clear review gates. We build the strategy in week one, run a tight production cycle through weeks 3–8, and shift to optimization once the data starts coming in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-6">
          {["Discover", "Create", "Scale"].map((p, i) => (
            <div key={p} className="relative">
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="text-[9px] tracking-widest uppercase" style={{ color: VIOLET }}>
                  Phase {i + 1}
                </div>
                <div className="text-white text-sm font-bold mt-1">{p}</div>
              </div>
              {i < 2 && (
                <IconArrowRight
                  size={14}
                  stroke={2}
                  className="hidden sm:block absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                  style={{ color: VIOLET }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "deliverables") {
    const rows = [
      { name: "Brand Strategy Document", qty: "1", format: "PDF" },
      { name: "Monthly Content Calendar", qty: "12 weeks", format: "Notion" },
      { name: "Social Media Assets", qty: "40 posts", format: "Figma + files" },
      { name: "Campaign Copy", qty: "All channels", format: "Google Docs" },
      { name: "Monthly Performance Report", qty: "AI-generated", format: "PDF" },
      { name: "End-of-Campaign Analysis", qty: "1", format: "Presentation" },
    ];
    return (
      <div>
        {heading("03", "Campaign Deliverables")}
        <div className="rounded-2xl overflow-hidden" style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}>
          {rows.map((r, i) => (
            <div
              key={r.name}
              className={`grid grid-cols-[auto_2fr_1fr_1fr] gap-3 items-center px-4 py-3 ${
                i < rows.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: SHELL }}
            >
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{ background: "rgba(139,92,246,0.18)", color: VIOLET }}
              >
                <IconCheck size={10} stroke={3} />
              </span>
              <span className="text-white text-xs font-medium truncate">{r.name}</span>
              <span className="text-[11px]" style={{ color: TEXT }}>
                {r.qty}
              </span>
              <span className="text-[11px] text-right" style={{ color: TEXT_DIM }}>
                {r.format}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "timeline") {
    const phases = [
      { range: "Weeks 1–2", title: "Discovery & Strategy", tasks: ["Discovery interviews", "Audit + competitor analysis", "Strategy document"] },
      { range: "Weeks 3–8", title: "Creation & Launch", tasks: ["Content production", "Campaign launch", "Weekly check-ins"] },
      { range: "Weeks 9–12", title: "Optimization & Scale", tasks: ["Performance reviews", "A/B test winners", "Final reporting"] },
    ];
    return (
      <div>
        {heading("04", "Timeline & Milestones")}
        <div className="space-y-3">
          {phases.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span
                className="block w-1 rounded-full shrink-0"
                style={{ background: i === 0 ? VIOLET : "rgba(139,92,246,0.3)" }}
              />
              <div className="flex-1">
                <div className="text-[10px] tracking-widest uppercase" style={{ color: VIOLET }}>
                  {p.range}
                </div>
                <div className="text-white text-sm font-bold mt-1">{p.title}</div>
                <ul className="mt-2 space-y-1">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[12px]" style={{ color: TEXT }}>
                      <span className="block w-1 h-1 rounded-full" style={{ background: VIOLET }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "investment") {
    const rows = [
      { name: "Strategy & Planning", amount: "$1,500", note: "Included" },
      { name: "Content Creation", amount: "$3,200", note: "40 assets" },
      { name: "Campaign Management", amount: "$2,000", note: "All channels" },
      { name: "Reporting & Analytics", amount: "$800", note: "AI-automated" },
    ];
    return (
      <div>
        {heading("05", "Investment")}
        <div className="rounded-2xl overflow-hidden" style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}>
          <div
            className="grid grid-cols-[1.6fr_1fr_1fr] gap-3 px-5 py-3 text-[10px] uppercase tracking-wider"
            style={{ background: SURFACE, color: TEXT_DIM }}
          >
            <span>Service</span>
            <span>Monthly</span>
            <span>Notes</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.6fr_1fr_1fr] gap-3 px-5 py-3 border-b"
              style={{ borderColor: SHELL }}
            >
              <span className="text-xs text-white">{r.name}</span>
              <span className="text-xs font-bold tabular-nums" style={{ color: VIOLET }}>
                {r.amount}
              </span>
              <span className="text-[11px]" style={{ color: TEXT }}>
                {r.note}
              </span>
            </div>
          ))}
          <div
            className="grid grid-cols-[1.6fr_1fr_1fr] gap-3 px-5 py-4 items-center"
            style={{ background: SURFACE_CARD }}
          >
            <span className="text-[10px] tracking-widest uppercase text-white">Monthly Investment</span>
            <span className="text-base font-black tabular-nums" style={{ color: VIOLET }}>
              {budget}
            </span>
            <span className="text-[10px]" style={{ color: TEXT_DIM }}>
              Excluding ad spend
            </span>
          </div>
        </div>
        <div className="text-center mt-3 text-[10px]" style={{ color: TEXT_DIM }}>
          Flexible terms · Cancel with 30 days notice · Setup in week 1
        </div>
      </div>
    );
  }

  // nextsteps
  return (
    <div>
      {heading("06", "Next Steps")}
      <div className="space-y-2.5">
        {[
          "Review this proposal",
          "Book a 30-min call to discuss",
          "Sign & we start Week 1",
        ].map((s, i) => (
          <div
            key={s}
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-mono text-xs font-bold"
              style={{ background: "rgba(139,92,246,0.18)", color: VIOLET }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-white mt-1">{s}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <div className="text-white text-sm font-semibold mb-3">Ready to start?</div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white"
          style={{ background: VIOLET }}
        >
          Book a Call <IconArrowRight size={13} stroke={2.5} />
        </button>
      </div>
    </div>
  );
}
