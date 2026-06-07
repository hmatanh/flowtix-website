"use client";

/**
 * Kova V2 — CRM / Inbox
 *
 * Three-pane layout:
 *   - Left: inbox of conversations with status dots and previews
 *   - Center: thread with this lead — agent + AI messages, status timeline
 *   - Right: AI suggestion rail with drafted replies and lead profile
 */

import { m } from "framer-motion";
import {
  IconSearch,
  IconChevronDown,
  IconSparkles,
  IconCircleCheck,
  IconBolt,
  IconCalendarStats,
  IconFileText,
  IconPaperclip,
  IconMail,
} from "@tabler/icons-react";

const THREADS = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    color: "#0EA5E9",
    snippet: "Yes — Saturday at 11am works. Could we also see…",
    when: "2m",
    unread: true,
    status: "hot",
  },
  {
    name: "Jonathan Cole",
    initials: "JC",
    color: "#10B981",
    snippet: "Thanks for the new options. The Chelsea unit looks…",
    when: "14m",
    unread: true,
    status: "matched",
  },
  {
    name: "Emma Reyes",
    initials: "ER",
    color: "#8B5CF6",
    snippet: "What's the parking situation at 55 Charles?",
    when: "1h",
    status: "matched",
  },
  {
    name: "Naomi Bauer",
    initials: "NB",
    color: "#F97316",
    snippet: "I'm still thinking through the timing on Tribeca…",
    when: "3h",
    status: "cold",
  },
  {
    name: "Marcus Liu",
    initials: "ML",
    color: "#F59E0B",
    snippet: "Offer submitted — counter at $1.62M I think we…",
    when: "Yesterday",
    status: "offer",
  },
  {
    name: "Tariq Hassan",
    initials: "TH",
    color: "#EC4899",
    snippet: "Saw the report you sent. Few questions before…",
    when: "Yesterday",
    status: "matched",
  },
  {
    name: "Priya Naidu",
    initials: "PN",
    color: "#06B6D4",
    snippet: "Locked in! Looking forward to Saturday.",
    when: "Mon",
    status: "showing",
  },
];

const STATUS_COLOR: Record<string, string> = {
  hot: "#0EA5E9",
  matched: "#10B981",
  cold: "#94A3B8",
  offer: "#F59E0B",
  showing: "#8B5CF6",
};

const MESSAGES: {
  role: "agent" | "client" | "ai";
  body: string;
  when: string;
  attachment?: string;
}[] = [
  {
    role: "client",
    body: "Hi Sarah — saw the alert for 201 W 21st. Looks great. Could we schedule a viewing?",
    when: "9:42 am",
  },
  {
    role: "ai",
    body:
      "Hi Sarah — yes, the seller's broker is open Saturday morning. Would 11am or 12:30pm work? I can also send over a 1-pager with comps in Chelsea for context.",
    when: "9:43 am",
    attachment: "Chelsea_comps_Aug2025.pdf",
  },
  {
    role: "client",
    body: "Yes — Saturday at 11am works. Could we also see one of the Tribeca options that day?",
    when: "9:46 am",
  },
];

const LEAD_PROFILE = {
  budget: "$1.6 – 2.1M",
  pref: "2BR · Chelsea / W Village · pre-war",
  saved: 7,
  views: 23,
  firstContact: "Aug 4, 2025",
  source: "Instagram ad",
};

const TIMELINE = [
  { label: "Lead captured", date: "Aug 4", done: true },
  { label: "AI scored 94%", date: "Aug 12", done: true, ai: true },
  { label: "Match sent", date: "Aug 12", done: true, ai: true },
  { label: "Reply received", date: "Aug 12", done: true },
  { label: "Showing booked", date: "Pending", done: false },
];

export function ScreenCRM() {
  return (
    <div
      className="relative w-full font-sans select-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(180deg, #050B14 0%, #02060B 100%)",
        color: "#cfe8fd",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        aspectRatio: "1600/1000",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "300px 1fr 320px" }}>
        {/* LEFT — Inbox */}
        <aside className="border-r overflow-hidden flex flex-col" style={{ borderColor: "#0E2236", background: "#020608" }}>
          <div className="px-4 py-3.5 border-b" style={{ borderColor: "#0E2236" }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white text-[13px] font-semibold tracking-tight">Inbox</span>
              <span className="text-[#5681AB] text-[10.5px] ml-auto">
                <span className="text-white">12</span> unread
              </span>
            </div>
            <div
              className="flex items-center gap-2 rounded-md px-2.5 py-1.5"
              style={{
                background: "#02060B",
                border: "1px solid #0E2236",
              }}
            >
              <IconSearch size={11} stroke={1.6} className="text-[#3E6080]" />
              <span className="text-[#3E6080] text-[11px] flex-1">Search clients…</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {["All", "Hot", "Matched", "Showing", "Offer"].map((t, i) => (
                <span
                  key={t}
                  className="text-[10.5px] px-2 py-1 rounded-md"
                  style={
                    i === 0
                      ? {
                          background: "rgba(255,255,255,0.06)",
                          color: "#9DB5CC",
                        }
                      : {
                          color: "#5681AB",
                        }
                  }
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {THREADS.map((t, i) => (
              <div
                key={t.name}
                className={`px-4 py-3 border-b cursor-pointer ${i === 0 ? "bg-[rgba(14,165,233,0.04)]" : ""}`}
                style={{
                  borderColor: "#0A1A2A",
                  boxShadow: i === 0 ? "inset 2px 0 0 #0EA5E9" : undefined,
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-[11px] font-semibold shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}aa 100%)`,
                    }}
                  >
                    {t.initials}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[12px] truncate ${i === 0 ? "text-white font-semibold" : "text-[#cfe8fd]"}`}>
                        {t.name}
                      </span>
                      <span
                        className="ml-auto text-[9.5px]"
                        style={{ color: t.unread ? "#7DD3FC" : "#3E6080" }}
                      >
                        {t.when}
                      </span>
                    </div>
                    <div className="text-[#7CA0C2] text-[10.5px] truncate mt-0.5">{t.snippet}</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: STATUS_COLOR[t.status] ?? "#5681AB" }}
                      />
                      <span className="text-[9.5px] text-[#5681AB] uppercase tracking-[0.15em]">
                        {t.status}
                      </span>
                      {t.unread && (
                        <span
                          className="ml-auto text-[9.5px] tabular-nums px-1.5 py-0.5 rounded font-semibold"
                          style={{ background: "#0EA5E9", color: "#02060B" }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER — Thread */}
        <section className="overflow-hidden flex flex-col">
          {/* Thread header */}
          <header
            className="flex items-center gap-3 px-6 py-3.5 border-b"
            style={{ borderColor: "#0E2236", background: "#040A12" }}
          >
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-[12px] font-semibold"
              style={{
                background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
              }}
            >
              SM
            </span>
            <div>
              <div className="text-white text-[13.5px] font-semibold tracking-tight">Sarah Mitchell</div>
              <div className="text-[#7CA0C2] text-[10.5px] inline-flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active 2m ago · Tier-1 lead
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {[IconBolt, IconCalendarStats, IconFileText].map((Icon, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon size={12} stroke={1.6} className="text-[#9DB5CC]" />
                </span>
              ))}
            </div>
          </header>

          {/* AI status */}
          <div
            className="px-6 py-2 border-b flex items-center gap-2.5"
            style={{
              borderColor: "#0E2236",
              background:
                "linear-gradient(90deg, rgba(14,165,233,0.04) 0%, transparent 60%)",
            }}
          >
            <m.span
              className="inline-flex items-center justify-center w-4 h-4 rounded"
              style={{ background: "rgba(14,165,233,0.15)" }}
              animate={{ boxShadow: ["0 0 0 rgba(14,165,233,0)", "0 0 8px rgba(14,165,233,0.45)", "0 0 0 rgba(14,165,233,0)"] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <IconSparkles size={9} stroke={1.8} className="text-sky-300" />
            </m.span>
            <span className="text-[#9DB5CC] text-[11px]">
              Claude generated 2 reply options · trained on your last 80 conversations
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 px-6 py-5 overflow-hidden flex flex-col gap-4">
            {MESSAGES.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "client" ? "" : "justify-end"}`}
              >
                <div
                  className="max-w-[80%] rounded-2xl px-4 py-3"
                  style={
                    msg.role === "client"
                      ? {
                          background: "#0A1622",
                          border: "1px solid #0E2236",
                          borderTopLeftRadius: 6,
                        }
                      : msg.role === "ai"
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(14,165,233,0.06) 100%)",
                          border: "1px solid rgba(14,165,233,0.30)",
                          borderTopRightRadius: 6,
                        }
                      : {
                          background: "#0EA5E9",
                          color: "#02060B",
                          borderTopRightRadius: 6,
                        }
                  }
                >
                  {msg.role === "ai" && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <IconSparkles size={10} stroke={2} className="text-sky-300" />
                      <span className="text-[9.5px] uppercase tracking-[0.18em] font-semibold text-sky-300">
                        AI draft · sent by Sarah Moran
                      </span>
                    </div>
                  )}
                  <div
                    className="text-[12.5px] leading-relaxed"
                    style={{
                      color: msg.role === "agent" ? "#02060B" : "#dbeafe",
                    }}
                  >
                    {msg.body}
                  </div>
                  {msg.attachment && (
                    <div className="mt-2.5 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md" style={{ background: "rgba(2,6,11,0.4)", border: "1px solid rgba(14,165,233,0.20)" }}>
                      <IconPaperclip size={10} stroke={1.8} className="text-sky-300" />
                      <span className="text-[10.5px] text-sky-200">{msg.attachment}</span>
                      <span className="text-[9.5px] text-[#5681AB]">324 KB</span>
                    </div>
                  )}
                  <div className="text-[9.5px] mt-1.5 opacity-60">{msg.when}</div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div className="flex">
              <div
                className="rounded-2xl px-4 py-3 inline-flex items-center gap-1.5"
                style={{
                  background: "#0A1622",
                  border: "1px solid #0E2236",
                  borderTopLeftRadius: 6,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <m.span
                    key={i}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#7CA0C2]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="border-t px-5 py-3" style={{ borderColor: "#0E2236", background: "#020608" }}>
            <div className="flex items-center gap-2 mb-2.5">
              {[
                "Confirm Sat 11am ✓",
                "Add Tribeca options",
                "Send full comps PDF",
                "Ask budget flex",
              ].map((s, i) => (
                <span
                  key={s}
                  className="text-[10px] px-2.5 py-1 rounded-full inline-flex items-center gap-1"
                  style={{
                    background:
                      i === 0
                        ? "rgba(14,165,233,0.12)"
                        : "rgba(255,255,255,0.04)",
                    border:
                      i === 0
                        ? "1px solid rgba(14,165,233,0.30)"
                        : "1px solid rgba(255,255,255,0.06)",
                    color: i === 0 ? "#7DD3FC" : "#9DB5CC",
                  }}
                >
                  <IconSparkles size={9} stroke={1.8} />
                  {s}
                </span>
              ))}
            </div>
            <div
              className="rounded-lg px-3.5 py-2.5 flex items-center"
              style={{
                background: "#040A12",
                border: "1px solid #0E2236",
              }}
            >
              <span className="text-[#5681AB] text-[12px] flex-1">
                Reply to Sarah… (Tab to insert AI draft)
              </span>
              <span
                className="text-[10.5px] px-3 py-1.5 rounded-md font-semibold inline-flex items-center gap-1.5"
                style={{
                  background: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                  color: "#02060B",
                }}
              >
                <IconMail size={10} stroke={2.2} />
                Send
              </span>
            </div>
          </div>
        </section>

        {/* RIGHT — Lead profile + timeline */}
        <aside
          className="border-l overflow-hidden flex flex-col"
          style={{ borderColor: "#0E2236", background: "#020608" }}
        >
          <div className="px-4 py-3.5 border-b" style={{ borderColor: "#0E2236" }}>
            <div className="text-[#3E6080] text-[9.5px] tracking-[0.22em] uppercase mb-3">
              Lead profile
            </div>
            <div className="space-y-2.5 text-[11.5px]">
              {[
                { k: "Budget", v: LEAD_PROFILE.budget },
                { k: "Preference", v: LEAD_PROFILE.pref },
                { k: "Saved homes", v: `${LEAD_PROFILE.saved}` },
                { k: "Views", v: `${LEAD_PROFILE.views}` },
                { k: "First contact", v: LEAD_PROFILE.firstContact },
                { k: "Source", v: LEAD_PROFILE.source },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline gap-3">
                  <span className="text-[#5681AB] w-24 shrink-0">{row.k}</span>
                  <span className="text-white truncate">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-3.5 border-b flex-1" style={{ borderColor: "#0E2236" }}>
            <div className="text-[#3E6080] text-[9.5px] tracking-[0.22em] uppercase mb-3">
              Timeline
            </div>
            <div className="space-y-3 relative">
              <span
                className="absolute left-[7px] top-1 bottom-1 w-px"
                style={{ background: "#0E2236" }}
                aria-hidden="true"
              />
              {TIMELINE.map((t, i) => (
                <div key={i} className="flex items-center gap-3 relative">
                  <span
                    className="relative inline-flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                    style={{
                      background: t.done ? (t.ai ? "rgba(14,165,233,0.18)" : "rgba(16,185,129,0.18)") : "#0E2236",
                      border: t.done ? (t.ai ? "1px solid #0EA5E9" : "1px solid #10B981") : "1px solid #1A2E44",
                    }}
                  >
                    {t.done && (
                      <IconCircleCheck
                        size={9}
                        stroke={2.5}
                        style={{ color: t.ai ? "#0EA5E9" : "#10B981" }}
                      />
                    )}
                  </span>
                  <div className="flex-1">
                    <div
                      className="text-[11.5px]"
                      style={{ color: t.done ? "#dbeafe" : "#5681AB" }}
                    >
                      {t.label}
                    </div>
                    <div className="text-[#5681AB] text-[10px] mt-0.5">{t.date}</div>
                  </div>
                  {t.ai && (
                    <IconSparkles size={9} stroke={2} className="text-sky-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
