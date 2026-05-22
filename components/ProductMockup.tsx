"use client";

import { m } from "framer-motion";

function DiamondMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 1L31 16L16 31L1 16L16 1Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 8L24 16L16 24L8 16L16 8Z"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="16" cy="16" r="1.5" fill="rgba(59,130,246,0.8)" />
    </svg>
  );
}

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto h-[340px]">
      {/* Card 1 — back */}
      <m.div
        initial={{ opacity: 0, y: 20, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 bg-[#111] border border-[#1a1a1a] rounded-xl p-4 -rotate-6"
        style={{ zIndex: 1 }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[#666] text-[10px] tracking-wider uppercase">
            Social Post · Instagram
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 bg-[#1a1a1a] rounded w-3/4" />
          <div className="h-1.5 bg-[#1a1a1a] rounded w-full" />
          <div className="h-1.5 bg-[#1a1a1a] rounded w-1/2" />
        </div>
      </m.div>

      {/* Card 2 — middle */}
      <m.div
        initial={{ opacity: 0, y: 20, rotate: 4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute top-14 left-0 right-0 bg-[#111] border border-[#1a1a1a] rounded-xl p-4 rotate-2"
        style={{ zIndex: 2 }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[#666] text-[10px] tracking-wider uppercase">
            Email Campaign
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 bg-[#1a1a1a] rounded w-2/3" />
          <div className="h-1.5 bg-[#1a1a1a] rounded w-full" />
          <div className="h-1.5 bg-[#1a1a1a] rounded w-5/6" />
          <div className="h-1.5 bg-[#1a1a1a] rounded w-1/3" />
        </div>
      </m.div>

      {/* Card 3 — front */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute top-32 left-0 right-0 bg-[#0D0D0D] border border-[#222] rounded-xl p-4"
        style={{
          zIndex: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex items-center gap-2">
          <DiamondMark size={14} />
          <span className="text-white text-[10px] font-semibold">
            flowtix brain
          </span>
          <span className="ml-auto text-[#3B82F6] text-[9px] tracking-wider uppercase">
            Generating
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 bg-[#222] rounded w-full" />
          <div className="h-1.5 bg-[#222] rounded w-4/5" />
          <div className="h-1.5 bg-[#222] rounded w-2/3" />
        </div>
        <div className="mt-3 flex items-center gap-1">
          <span
            className="typing-dot w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="typing-dot w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="typing-dot w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </m.div>
    </div>
  );
}
