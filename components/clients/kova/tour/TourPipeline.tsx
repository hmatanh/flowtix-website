"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconRobot, IconPlus, IconCheck, IconChevronDown } from "@tabler/icons-react";

const BLUE = "#0EA5E9";

type Deal = {
  id: string;
  name: string;
  property: string;
  price: string;
  initials: string;
  auto?: boolean;
  lastContact?: string;
};

type ColumnId = "newLead" | "contacted" | "viewing" | "offer" | "closed";

type Column = {
  id: ColumnId;
  title: string;
  color: string;
  deals: Deal[];
};

const COLUMNS: Column[] = [
  {
    id: "newLead",
    title: "New Leads",
    color: "rgba(14,165,233,0.5)",
    deals: [
      { id: "n1", name: "Rachel K.", property: "Riverside Apt", price: "$485K", initials: "RK", auto: true, lastContact: "2 days ago" },
      { id: "n2", name: "Marcus T.", property: "City Loft", price: "$520K", initials: "MT", auto: true, lastContact: "1 day ago" },
      { id: "n3", name: "Anna L.", property: "Park Manor", price: "$415K", initials: "AL", lastContact: "3 hrs ago" },
      { id: "n4", name: "David S.", property: "Garden Walk", price: "$365K", initials: "DS", lastContact: "1 hr ago" },
    ],
  },
  {
    id: "contacted",
    title: "Contacted",
    color: "rgba(56,189,248,0.3)",
    deals: [
      { id: "c1", name: "Lior B.", property: "Maple Heights", price: "$540K", initials: "LB", auto: true, lastContact: "Today" },
      { id: "c2", name: "Sara W.", property: "Oak Plaza", price: "$455K", initials: "SW", lastContact: "Yesterday" },
      { id: "c3", name: "Tom R.", property: "Riverside 12", price: "$610K", initials: "TR", lastContact: "Today" },
    ],
  },
  {
    id: "viewing",
    title: "Viewing",
    color: "rgba(245,158,11,0.3)",
    deals: [
      { id: "v1", name: "Eli M.", property: "Elm Court 4B", price: "$485K", initials: "EM", auto: true, lastContact: "Today" },
      { id: "v2", name: "Noa K.", property: "Park 308", price: "$495K", initials: "NK", lastContact: "Yesterday" },
    ],
  },
  {
    id: "offer",
    title: "Offer",
    color: "rgba(16,185,129,0.3)",
    deals: [
      { id: "o1", name: "Ben H.", property: "Garden Walk 19", price: "$540K", initials: "BH", auto: true, lastContact: "Today" },
      { id: "o2", name: "Maya T.", property: "Maple 7C", price: "$415K", initials: "MT", lastContact: "Today" },
    ],
  },
  {
    id: "closed",
    title: "Closed",
    color: "rgba(16,185,129,0.6)",
    deals: [
      { id: "cl1", name: "Yossi A.", property: "Oak Plaza 22", price: "$455K", initials: "YA", lastContact: "Last week" },
    ],
  },
];

function totalValue(deals: Deal[]): string {
  const total = deals.reduce((s, d) => {
    const n = parseInt(d.price.replace(/[^0-9]/g, ""), 10);
    return s + n;
  }, 0);
  if (total >= 1000) return `$${(total / 1000).toFixed(1)}M`;
  return `$${total}K`;
}

export function TourPipeline() {
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  return (
    <div className="flex flex-col h-full min-h-[420px] sm:min-h-[520px] bg-[#0A1628]">
      {/* Header */}
      <header className="px-4 sm:px-5 pt-4 pb-3 bg-[#0A1628] border-b border-[#0D2A45] flex items-start sm:items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="text-white text-sm font-semibold">CRM Pipeline</div>
          <div className="text-[#4a7a9b] text-[10px] mt-0.5">
            47 active deals · $4.2M total value
          </div>
        </div>
        <div className="flex gap-1.5">
          <FilterPill label="All Agents" />
          <FilterPill label="This Month" />
        </div>
      </header>

      {/* Swipe hint */}
      <div className="px-4 pt-2 text-[10px] text-[#1a3a52] flex items-center gap-1 sm:hidden">
        <span>⟵</span> Swipe columns <span>⟶</span>
      </div>

      {/* Board */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-3 sm:p-4">
        <div className="flex gap-3 min-h-full">
          {COLUMNS.map((col) => (
            <div
              key={col.id}
              className="flex-shrink-0 w-44 sm:w-52 bg-[#080F1C] rounded-xl p-3"
              style={{
                borderTop: `2px solid ${col.color}`,
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white text-xs font-semibold">
                    {col.title}{" "}
                    <span className="ml-0.5" style={{ color: BLUE }}>
                      ({col.deals.length})
                    </span>
                  </div>
                  <div className="text-[#4a7a9b] text-[10px] mt-0.5">
                    {totalValue(col.deals)}
                  </div>
                </div>
                <button
                  type="button"
                  className="border rounded px-1.5 py-0.5 text-[#2a5a7a] hover:text-[#4a7a9b]"
                  style={{ borderColor: "#0D2A45" }}
                  onClick={() => showToast("New deal — opens form")}
                  aria-label="Add deal"
                >
                  <IconPlus size={10} stroke={2.5} />
                </button>
              </div>

              <div className="mt-3 space-y-2">
                {col.deals.map((deal) => {
                  const isSelected = selectedDeal === deal.id;
                  return (
                    <m.div
                      key={deal.id}
                      layout
                      className="bg-[#0D1F38] rounded-xl p-2.5 cursor-pointer border transition-colors"
                      style={{
                        borderColor: isSelected ? "rgba(14,165,233,0.4)" : "#0D2A45",
                      }}
                      onClick={() => setSelectedDeal(isSelected ? null : deal.id)}
                    >
                      <div className="text-white text-xs font-semibold">{deal.name}</div>
                      <div className="text-[#4a7a9b] text-[10px]">{deal.property}</div>
                      <div className="text-[10px] font-bold mt-1" style={{ color: BLUE }}>
                        {deal.price}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span
                          className="w-5 h-5 bg-[#0A1628] rounded-full text-[8px] flex items-center justify-center"
                          style={{ color: "#4a7a9b" }}
                        >
                          {deal.initials}
                        </span>
                        {deal.auto && (
                          <span className="flex items-center gap-1 text-[8px]" style={{ color: BLUE }}>
                            <IconRobot size={10} />
                            Auto
                          </span>
                        )}
                      </div>

                      <AnimatePresence>
                        {isSelected && (
                          <m.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="text-[10px] mt-2 text-[#2a5a7a]">
                              Last contact: {deal.lastContact}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast("AI email sent!");
                                }}
                                className="text-white text-[9px] px-2 py-1 rounded-lg font-medium"
                                style={{ background: BLUE }}
                              >
                                Send follow-up
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast("Viewing scheduled");
                                }}
                                className="border text-[9px] px-2 py-1 rounded-lg"
                                style={{ borderColor: "#0D2A45", color: "#4a7a9b" }}
                              >
                                Schedule viewing
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  showToast("Moved to Offer →");
                                }}
                                className="border text-[9px] px-2 py-1 rounded-lg"
                                style={{ borderColor: "#0D2A45", color: "#4a7a9b" }}
                              >
                                Move to Offer →
                              </button>
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </m.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="border rounded-full px-2.5 py-1 text-[10px] flex items-center gap-1"
      style={{ borderColor: "#0D2A45", color: "#4a7a9b" }}
    >
      {label}
      <IconChevronDown size={10} />
    </button>
  );
}
