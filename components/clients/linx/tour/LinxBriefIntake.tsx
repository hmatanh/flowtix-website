"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconCheck,
  IconLoader2,
  IconCircle,
  IconRobot,
  IconClipboardList,
} from "@tabler/icons-react";
import {
  VIOLET,
  SHELL,
  SURFACE,
  SURFACE_CARD,
  BORDER,
  TEXT,
  TEXT_DIM,
  TEXT_FAINT,
} from "./_shared";

const PROCESSING_STEPS = [
  "Reading brief",
  "Identifying objectives",
  "Mapping audience insights",
  "Defining creative direction",
  "Generating strategy",
  "Writing clarifying questions",
];

type OutputTab = "brief" | "strategy" | "questions";

const CHANNELS = ["Instagram", "Facebook", "TikTok", "LinkedIn", "Email", "Paid Ads"];
const SELECTED_CHANNELS = new Set(["Instagram", "TikTok", "Email", "Paid Ads"]);

const BUDGETS = ["< $3K", "$3–5K", "$5–10K", "$10–20K", "$20K+"];

export function LinxBriefIntake() {
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);
  const [outputReady, setOutputReady] = useState(false);
  const [tab, setTab] = useState<OutputTab>("brief");
  const [toast, setToast] = useState<string | null>(null);

  // Editable form (pre-filled with sample data)
  const [clientName, setClientName] = useState("Brew Republic");
  const [objective, setObjective] = useState(
    "We're launching our craft lager 'Coastal Gold' and need to build brand awareness among 25–40 urban professionals in Portland and Seattle.",
  );
  const [audience, setAudience] = useState("Urban professionals 25–40, beer enthusiasts, Pacific Northwest");
  const [selectedChannels, setSelectedChannels] = useState<Set<string>>(SELECTED_CHANNELS);
  const [timeline, setTimeline] = useState("12 weeks (recommended)");
  const [budget, setBudget] = useState("$5–10K");
  const [hasGuidelines, setHasGuidelines] = useState<"yes" | "no">("yes");
  const [notes, setNotes] = useState(
    "We had a bad experience with a previous agency that didn't understand our brand tone. We're casual, honest, never corporate.",
  );

  function toggleChannel(c: string) {
    setSelectedChannels((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }

  useEffect(() => {
    if (!processing) return;
    const timers: number[] = [];
    PROCESSING_STEPS.forEach((_, i) => {
      timers.push(window.setTimeout(() => setProcessStep(i + 1), 450 * (i + 1)));
    });
    timers.push(
      window.setTimeout(() => {
        setProcessing(false);
        setOutputReady(true);
      }, 2800),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [processing]);

  function submit() {
    setSubmitted(true);
    setProcessing(true);
    setProcessStep(0);
    setOutputReady(false);
  }

  function reset() {
    setSubmitted(false);
    setProcessing(false);
    setOutputReady(false);
    setProcessStep(0);
  }

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2500);
  }

  // Fields are "complete" because pre-filled
  const fieldsComplete = [clientName, objective, audience, selectedChannels.size, timeline, budget, hasGuidelines, notes].every(
    (v) => (typeof v === "number" ? v > 0 : !!v),
  );

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[600px] flex flex-col lg:flex-row" style={{ background: SHELL }}>
      {/* LEFT — form */}
      <aside
        className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r overflow-y-auto"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div className="px-5 pt-5 pb-4 border-b" style={{ borderColor: BORDER }}>
          <div className="text-white text-sm font-semibold">New Project Brief</div>
          <div className="text-[10px] mt-0.5" style={{ color: TEXT_DIM }}>
            Shared link · Client fills this in
          </div>
          <div
            className="rounded-lg px-3 py-1.5 mt-2 text-[10px] font-mono"
            style={{ background: SURFACE_CARD, color: TEXT_DIM }}
          >
            brief.linx.agency/submit
          </div>
        </div>

        <div className="px-5 py-4 space-y-4">
          <FormField label="Client / Brand Name" filled={!!clientName.trim()}>
            <input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white text-xs outline-none"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
            />
          </FormField>

          <FormField label="What do you want to achieve?" filled={!!objective.trim()}>
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white text-xs leading-relaxed outline-none resize-none"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}`, minHeight: 60 }}
            />
          </FormField>

          <FormField label="Target Audience" filled={!!audience.trim()}>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white text-xs outline-none"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
            />
          </FormField>

          <FormField label="Key Channels" filled={selectedChannels.size > 0}>
            <div className="flex flex-wrap gap-1.5">
              {CHANNELS.map((c) => {
                const active = selectedChannels.has(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleChannel(c)}
                    className="rounded-full px-2.5 py-1 text-[10px] border inline-flex items-center gap-1"
                    style={{
                      background: active ? "rgba(139,92,246,0.15)" : "transparent",
                      borderColor: active ? "rgba(139,92,246,0.4)" : BORDER,
                      color: active ? "#fff" : TEXT_DIM,
                    }}
                  >
                    {active && <IconCheck size={9} stroke={3} style={{ color: VIOLET }} />}
                    {c}
                  </button>
                );
              })}
            </div>
          </FormField>

          <FormField label="Campaign Timeline" filled={!!timeline}>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white text-xs outline-none appearance-none cursor-pointer"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}` }}
            >
              {["4 weeks", "8 weeks", "12 weeks (recommended)", "6 months", "Ongoing"].map((o) => (
                <option key={o} value={o} style={{ background: SURFACE }}>
                  {o}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Approx. Monthly Budget" filled={!!budget}>
            <div className="flex flex-wrap gap-1.5">
              {BUDGETS.map((b) => {
                const active = budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className="rounded-full px-2.5 py-1 text-[10px] border"
                    style={{
                      background: active ? "rgba(139,92,246,0.15)" : "transparent",
                      borderColor: active ? "rgba(139,92,246,0.4)" : BORDER,
                      color: active ? VIOLET : TEXT_DIM,
                    }}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </FormField>

          <FormField label="Brand Guidelines Available?" filled={!!hasGuidelines}>
            <div className="flex gap-2">
              {(["yes", "no"] as const).map((v) => {
                const active = hasGuidelines === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setHasGuidelines(v)}
                    className="rounded-lg px-3 py-1.5 text-[11px] border"
                    style={{
                      background: active ? "rgba(139,92,246,0.10)" : "transparent",
                      borderColor: active ? "rgba(139,92,246,0.4)" : BORDER,
                      color: active ? "#fff" : TEXT_DIM,
                    }}
                  >
                    {v === "yes" ? "Yes" : "No"}
                  </button>
                );
              })}
            </div>
          </FormField>

          <FormField label="Anything else we should know?" filled={!!notes.trim()}>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-white text-xs leading-relaxed outline-none resize-none"
              style={{ background: SURFACE_CARD, border: `1px solid ${BORDER}`, minHeight: 64 }}
            />
          </FormField>

          {!submitted ? (
            <button
              type="button"
              onClick={submit}
              disabled={!fieldsComplete}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white disabled:cursor-not-allowed"
              style={{ background: fieldsComplete ? VIOLET : SURFACE_CARD }}
            >
              Submit Brief →
            </button>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="w-full py-3 rounded-xl text-xs"
              style={{ border: `1px solid ${BORDER}`, color: TEXT }}
            >
              Submit another brief
            </button>
          )}
        </div>
      </aside>

      {/* RIGHT — output */}
      <section className="flex-1 overflow-y-auto" style={{ background: SHELL }}>
        <AnimatePresence mode="wait">
          {!submitted && (
            <m.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center px-5 py-10 h-full min-h-[280px]"
            >
              <IconClipboardList size={48} stroke={0.8} style={{ color: SURFACE_CARD }} />
              <div className="text-sm mt-4" style={{ color: TEXT_FAINT }}>
                Waiting for brief submission…
              </div>
              <div className="grid grid-cols-3 gap-2 mt-7 max-w-md w-full opacity-20">
                {["Structured Brief", "Creative Strategy", "Clarifying Questions"].map((l) => (
                  <div
                    key={l}
                    className="rounded-xl p-3 text-center text-xs"
                    style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT_FAINT }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </m.div>
          )}

          {processing && (
            <m.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-5 py-8 text-center"
            >
              <div className="text-sm font-semibold inline-flex items-center gap-2" style={{ color: VIOLET }}>
                <IconRobot size={14} />
                AI Processing Your Brief…
              </div>

              <div className="max-w-xs mx-auto mt-6 space-y-2.5 text-left">
                {PROCESSING_STEPS.map((step, i) => {
                  const past = i < processStep;
                  const current = i === processStep;
                  return (
                    <m.div
                      key={step}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: i <= processStep ? 1 : 0.35, x: 0 }}
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
                        {past ? (
                          <IconCheck size={10} stroke={3} />
                        ) : current ? (
                          <IconLoader2 size={10} className="animate-spin" />
                        ) : (
                          <IconCircle size={6} stroke={2} />
                        )}
                      </span>
                      <span className="text-[12px] flex-1" style={{ color: current ? "#fff" : past ? TEXT : TEXT_FAINT }}>
                        {step}
                      </span>
                    </m.div>
                  );
                })}
              </div>

              <div className="text-[10px] mt-6" style={{ color: TEXT_DIM }}>
                Processing typically completes in 2–3 seconds.
              </div>
            </m.div>
          )}

          {outputReady && (
            <m.div
              key="ready"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex border-b px-5 overflow-x-auto" style={{ borderColor: BORDER }}>
                {(["brief", "strategy", "questions"] as OutputTab[]).map((id) => {
                  const active = tab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTab(id)}
                      className="py-3 px-3 text-xs whitespace-nowrap font-medium transition-colors"
                      style={{
                        color: active ? VIOLET : TEXT_DIM,
                        borderBottom: active ? `2px solid ${VIOLET}` : "2px solid transparent",
                      }}
                    >
                      {id === "brief"
                        ? "Structured Brief"
                        : id === "strategy"
                        ? "Creative Strategy"
                        : "Clarifying Questions"}
                    </button>
                  );
                })}
              </div>
              <div className="text-[10px] px-5 pt-3" style={{ color: TEXT_DIM }}>
                Generated in 2.8 seconds
              </div>

              <div className="px-5 py-4">
                {tab === "brief" && <StructuredBrief clientName={clientName} audience={audience} channels={Array.from(selectedChannels)} timeline={timeline} budget={budget} notes={notes} />}
                {tab === "strategy" && <CreativeStrategy />}
                {tab === "questions" && <ClarifyingQuestions onSend={() => showToast("8 questions sent to client@brewrepublic.com")} />}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </section>

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

function FormField({ label, filled, children }: { label: string; filled: boolean; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] uppercase tracking-wider" style={{ color: TEXT_DIM }}>
          {label}
        </span>
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{ background: filled ? VIOLET : BORDER }}
        />
      </div>
      {children}
    </div>
  );
}

function StructuredBrief({
  clientName,
  audience,
  channels,
  timeline,
  budget,
  notes,
}: {
  clientName: string;
  audience: string;
  channels: string[];
  timeline: string;
  budget: string;
  notes: string;
}) {
  const rows = [
    ["Client", clientName],
    ["Campaign", "Product Launch — Coastal Gold Craft Lager"],
    ["Duration", timeline],
    ["Budget", `${budget}/month`],
    ["Primary Channels", channels.join(", ")],
    ["Audience", audience],
  ];
  return (
    <div>
      <div className="text-[10px] tracking-widest uppercase" style={{ color: VIOLET }}>
        Project Overview
      </div>
      <div className="h-px mb-3" style={{ background: `${VIOLET}33` }} />
      <div className="rounded-xl overflow-hidden" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
        {rows.map(([k, v], i) => (
          <div
            key={k}
            className="grid grid-cols-[120px_1fr] gap-3 px-4 py-2.5 border-b last:border-b-0"
            style={{ borderColor: SHELL }}
          >
            <span className="text-[10px]" style={{ color: TEXT_DIM }}>
              {k}
            </span>
            <span className="text-xs text-white">{v}</span>
          </div>
        ))}
      </div>

      <div className="text-[10px] tracking-widest uppercase mt-5" style={{ color: VIOLET }}>
        Campaign Objective
      </div>
      <div className="h-px mb-3" style={{ background: `${VIOLET}33` }} />
      <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
        Build brand awareness for Coastal Gold among urban professionals in Portland and Seattle, establishing {clientName} as the craft beer for people who take their weekends seriously.
      </p>

      <div className="rounded-xl p-3 mt-3" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider" style={{ color: VIOLET }}>
          <IconRobot size={11} />
          AI Interpretation
        </div>
        <p className="text-[11px] leading-relaxed mt-1.5" style={{ color: TEXT }}>
          Client uses casual, authentic language. Notes mention a bad past experience with corporate-sounding agencies. Tone must be direct, honest, never clever-for-clever's-sake.
        </p>
        {notes && (
          <div className="text-[10px] mt-2 italic" style={{ color: TEXT_DIM }}>
            "{notes.slice(0, 110)}{notes.length > 110 ? "…" : ""}"
          </div>
        )}
      </div>

      <div className="text-[10px] tracking-widest uppercase mt-5" style={{ color: VIOLET }}>
        Audience Insights
      </div>
      <div className="h-px mb-3" style={{ background: `${VIOLET}33` }} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          { emoji: "👋", label: "Dislikes", value: "Corporate marketing" },
          { emoji: "🍺", label: "Values", value: "Authenticity + quality" },
          { emoji: "📱", label: "Platforms", value: "Instagram + TikTok" },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-xl p-3 text-center"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="text-base">{c.emoji}</div>
            <div className="text-[10px] mt-1" style={{ color: TEXT_DIM }}>
              {c.label}
            </div>
            <div className="text-[11px] mt-0.5 text-white">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreativeStrategy() {
  return (
    <div>
      <div className="text-[10px] tracking-widest uppercase" style={{ color: VIOLET }}>
        AI Strategic Direction
      </div>
      <div className="text-[10px] mb-3" style={{ color: TEXT_DIM }}>
        Based on 847 similar campaigns
      </div>
      <div className="space-y-3">
        {[
          { n: "01", title: "Authentic Moments", body: "Content should capture real people enjoying Coastal Gold in real Pacific Northwest settings. No studio. No models. Real locations, real light, real reactions." },
          { n: "02", title: "The Craft Story", body: "Short-form video (15–30s) showing the brewing process, founder story, and ingredients. TikTok-native format with Instagram Reels repurposing." },
          { n: "03", title: "Community First", body: "Build community before pushing purchase. Month 1–4: awareness. Month 5–8: engagement. Month 9–12: conversion." },
        ].map((p) => (
          <div
            key={p.n}
            className="rounded-xl p-4"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono" style={{ color: VIOLET }}>
                {p.n}
              </span>
              <span className="text-white text-sm font-bold">{p.title}</span>
            </div>
            <p className="text-xs leading-relaxed mt-2" style={{ color: TEXT }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
      <div className="text-xs mt-4" style={{ color: VIOLET }}>
        Confidence score: 94%
        <span className="ml-2" style={{ color: TEXT_DIM }}>
          Based on 23 similar F&amp;B campaigns in our database
        </span>
      </div>
    </div>
  );
}

function ClarifyingQuestions({ onSend }: { onSend: () => void }) {
  const questions = [
    "What's the key difference between Coastal Gold and competitors?",
    "Is there a launch event we should build content around?",
    "Do you have existing brand photography assets?",
    "What's been done in marketing before? What worked / didn't?",
    "Are there any brand partnerships or collaborations?",
    "What's the distribution — online, bars, retail, all three?",
    "Is there a budget split between paid and organic content?",
    "Who needs to approve content on your side?",
  ];
  return (
    <div>
      <div className="text-xs mb-1" style={{ color: TEXT }}>
        8 questions to complete the brief
      </div>
      <div className="text-[10px] mb-3" style={{ color: TEXT_DIM }}>
        AI identified these gaps to ensure the best possible campaign
      </div>
      <div className="space-y-2">
        {questions.map((q, i) => (
          <div
            key={q}
            className="rounded-xl p-3 flex items-start gap-3"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <span className="text-xs font-mono shrink-0" style={{ color: VIOLET }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-white leading-relaxed">{q}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onSend}
        className="w-full py-3 rounded-xl text-sm font-bold text-white mt-4"
        style={{ background: VIOLET }}
      >
        Send Questions to Client
      </button>
    </div>
  );
}
