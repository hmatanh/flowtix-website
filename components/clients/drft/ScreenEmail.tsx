import { IconStar, IconArrowBack } from "@tabler/icons-react";

export function ScreenEmail() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#0a0a0a" }}>
      {/* Mail app header */}
      <div className="px-3 pt-6 pb-2 flex items-center justify-between bg-[#0a0a0a]">
        <IconArrowBack size={14} stroke={1.5} color="#666" />
        <div className="flex items-center gap-2 text-[#666]">
          <IconStar size={12} stroke={1.5} />
        </div>
      </div>

      {/* Email meta */}
      <div className="px-3 pb-2 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full inline-flex items-center justify-center font-black italic text-[10px]"
            style={{
              background: "#F97316",
              color: "#000",
              transform: "skewX(-6deg)",
            }}
          >
            D
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-[10px] font-semibold">DRFT</div>
            <div className="text-[8px] text-[#666] truncate">
              hello@drft.com · to you
            </div>
          </div>
          <span className="text-[8px] text-[#444]">Today, 14:32</span>
        </div>
        <div className="text-white text-[11px] font-bold mt-2 leading-tight">
          You left something behind. 🧥
        </div>
        <div className="text-[8px] text-[#555] mt-0.5 truncate">
          The Trail Series jacket you viewed is still available...
        </div>
      </div>

      {/* Email body */}
      <div className="flex-1 overflow-hidden" style={{ background: "#120A02" }}>
        <div className="px-4 py-4 text-center">
          <span
            className="font-black italic tracking-tighter text-white inline-block"
            style={{ fontSize: 20, transform: "skewX(-6deg)" }}
          >
            DRFT
          </span>
        </div>

        {/* Hero */}
        <div
          className="mx-3 rounded-lg h-28 flex items-center justify-center relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249,115,22,0.25), rgba(249,115,22,0.04))",
          }}
        >
          <div
            className="rounded w-12 h-16 opacity-70"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.7), rgba(120,53,15,0.4))",
            }}
          />
          <span
            className="absolute bottom-2 text-[8px] tracking-[0.3em] uppercase font-bold"
            style={{ color: "#F97316" }}
          >
            Still waiting for you
          </span>
        </div>

        {/* Body */}
        <div className="px-4 py-4 text-center">
          <div className="text-white text-base font-bold leading-tight">
            You almost had it.
          </div>
          <div className="text-[9px] mt-2 leading-relaxed" style={{ color: "#8B5E2A" }}>
            The Trail Series jacket in your size is still available.
          </div>

          {/* Product card */}
          <div
            className="mt-3 rounded-md p-2.5 border flex items-center gap-2 text-left"
            style={{
              background: "#1A0F04",
              borderColor: "rgba(249,115,22,0.2)",
            }}
          >
            <div
              className="w-8 h-10 rounded shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.5), rgba(120,53,15,0.3))",
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-white text-[9px] font-bold">
                Trail Series · Olive · XL
              </div>
              <div className="text-[9px] font-black" style={{ color: "#F97316" }}>
                $189
              </div>
              <div className="text-[8px]" style={{ color: "#F59E0B" }}>
                Only 3 left
              </div>
            </div>
          </div>

          <button
            className="w-full text-[10px] font-bold py-3 mt-3 inline-flex items-center justify-center gap-1"
            style={{ background: "#F97316", color: "#000" }}
          >
            COMPLETE YOUR ORDER →
          </button>

          <div
            className="text-[8px] mt-3 leading-relaxed"
            style={{ color: "#8B5E2A" }}
          >
            Orders ship within 24 hours.
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-4 pb-3 pt-2 border-t"
          style={{ borderColor: "rgba(249,115,22,0.08)" }}
        >
          <div className="text-[7px] text-center" style={{ color: "#4a3018" }}>
            Unsubscribe · drft.com · 123 Trail Rd
          </div>
        </div>
      </div>

      {/* Campaign metrics */}
      <div
        className="px-3 py-2 flex items-center justify-around text-[8px] border-t"
        style={{ background: "#0a0a0a", borderColor: "#1a1a1a", color: "#8B5E2A" }}
      >
        <span>1,847 sent</span>
        <span>·</span>
        <span style={{ color: "#F97316" }} className="font-semibold">
          34.2% open
        </span>
        <span>·</span>
        <span>8.1% click</span>
        <span>·</span>
        <span>12 orders</span>
      </div>
    </div>
  );
}
