"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

type Item = {
  id: string;
  dot: string;
  text: string;
  ageMs: number;
};

const TEMPLATES: { dot: string; text: string }[] = [
  { dot: "#10b981", text: "New strategy call booked" },
  { dot: "#3B82F6", text: "AI system deployed for client" },
  { dot: "#a855f7", text: "Automation workflow activated" },
  { dot: "#FB7185", text: "Brand identity delivered" },
  { dot: "#FBBF24", text: "New project inquiry received" },
  { dot: "#22D3EE", text: "Blog post published" },
  { dot: "#34D399", text: "Client report automated" },
];

const MAX_ITEMS = 5;
const TICK_MS = 4000;

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function formatAge(ms: number) {
  const s = Math.floor(ms / 1000);
  if (s < 5) return "just now";
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h`;
}

export function LiveActivityFeed() {
  const [items, setItems] = useState<Item[]>(() =>
    TEMPLATES.slice(0, 4).map((t, i) => ({
      id: uid(),
      dot: t.dot,
      text: t.text,
      ageMs: (i + 1) * 60_000,
    }))
  );

  useEffect(() => {
    let cursor = 4;
    const t = setInterval(() => {
      const tpl = TEMPLATES[cursor % TEMPLATES.length];
      cursor++;
      setItems((prev) => {
        const next: Item[] = [
          { id: uid(), dot: tpl.dot, text: tpl.text, ageMs: 0 },
          ...prev.map((p) => ({ ...p, ageMs: p.ageMs + TICK_MS })),
        ];
        return next.slice(0, MAX_ITEMS);
      });
    }, TICK_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-5 w-full max-w-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[#1a1a1a]">
        <span className="text-white text-xs font-semibold tracking-tight">
          Live Activity
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>
      <ul className="mt-2 relative overflow-hidden">
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <m.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3 py-2.5 border-b border-[#0a0a0a] last:border-b-0"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: item.dot }}
              />
              <span className="text-[#888] text-xs flex-1">{item.text}</span>
              <span className="text-[#333] text-[10px] shrink-0">
                {formatAge(item.ageMs)}
              </span>
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
