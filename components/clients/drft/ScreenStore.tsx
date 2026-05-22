import { IconSearch, IconHeart, IconShoppingBag } from "@tabler/icons-react";

const PRODUCTS = [
  { name: "Trail Series Jacket", meta: "4 colors", price: "$189", badge: "NEW" },
  { name: "Ridge Pant", meta: "2 colors", price: "$148" },
  { name: "Cascade Hoodie", meta: "3 colors", price: "$98", badge: "🔥 SELLING FAST" },
  { name: "Drift Tee", meta: "5 colors", price: "$48" },
];

export function ScreenStore() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: "#120A02" }}>
      {/* Top nav */}
      <div
        className="flex items-center justify-between px-5 py-3 shrink-0"
        style={{ background: "#120A02" }}
      >
        <span
          className="font-black italic tracking-tighter text-white"
          style={{ fontSize: 22, transform: "skewX(-6deg)", display: "inline-block" }}
        >
          DRFT
        </span>
        <div
          className="hidden md:flex items-center gap-4 text-[9px] tracking-[0.18em] uppercase"
          style={{ color: "#8B5E2A" }}
        >
          <span>Shop</span>
          <span>Collections</span>
          <span>Stories</span>
          <span>About</span>
        </div>
        <div className="flex items-center gap-2.5">
          <IconSearch size={12} stroke={1.5} color="#8B5E2A" />
          <IconHeart size={12} stroke={1.5} color="#8B5E2A" />
          <div className="relative">
            <IconShoppingBag size={12} stroke={1.5} color="#8B5E2A" />
            <span
              className="absolute -top-2 -right-2 text-[8px] font-bold w-3.5 h-3.5 rounded-full inline-flex items-center justify-center"
              style={{ background: "#F97316", color: "#000" }}
            >
              2
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative px-5 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center overflow-hidden"
        style={{ background: "#1A0F04" }}
      >
        <div>
          <div
            className="text-[9px] tracking-[0.3em] uppercase"
            style={{ color: "#F97316" }}
          >
            New Season
          </div>
          <div
            className="font-black uppercase text-white mt-2 leading-[0.92]"
            style={{
              fontSize: "clamp(20px, 3.5vw, 36px)",
              letterSpacing: "-0.04em",
            }}
          >
            Gear that
            <br />
            moves with
            <br />
            you.
          </div>
          <div className="text-[10px] mt-2 max-w-xs" style={{ color: "#8B5E2A" }}>
            Built for the outdoors. Designed for everywhere else.
          </div>
          <div className="flex gap-2 mt-3">
            <button
              className="text-[10px] font-bold px-4 py-2 inline-flex items-center gap-1"
              style={{ background: "#F97316", color: "#000" }}
            >
              SHOP NOW →
            </button>
            <button
              className="text-[10px] px-4 py-2 border"
              style={{
                borderColor: "rgba(249,115,22,0.3)",
                color: "#8B5E2A",
              }}
            >
              OUR STORY
            </button>
          </div>
        </div>
        <div className="relative h-24 md:h-32 flex items-center justify-center">
          <div
            className="rounded-[50%] w-24 h-32 md:w-32 md:h-40"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.8), rgba(249,115,22,0.15) 60%, rgba(120,53,15,0.4))",
              boxShadow:
                "0 25px 60px rgba(249,115,22,0.3), inset -8px -12px 20px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>

      {/* Featured grid */}
      <div className="px-5 py-3 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-white text-[11px] font-black tracking-wider uppercase">
            Featured Gear
          </span>
          <span className="text-[9px]" style={{ color: "#F97316" }}>
            View All →
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 flex-1 min-h-0">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="rounded-md overflow-hidden border flex flex-col"
              style={{
                background: "#1A0F04",
                borderColor: "rgba(249,115,22,0.12)",
              }}
            >
              <div
                className="relative aspect-square flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(249,115,22,0.25), rgba(249,115,22,0.04))",
                }}
              >
                {p.badge && (
                  <span
                    className="absolute top-1.5 left-1.5 text-[7px] font-bold px-1.5 py-0.5"
                    style={{
                      background: p.badge === "NEW" ? "#F97316" : "#000",
                      color: p.badge === "NEW" ? "#000" : "#F97316",
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                <div
                  className="rounded w-1/2 h-2/3 opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249,115,22,0.6), rgba(120,53,15,0.3))",
                  }}
                />
              </div>
              <div className="p-2">
                <div className="text-white text-[10px] font-bold truncate">
                  {p.name}
                </div>
                <div className="text-[8px]" style={{ color: "#8B5E2A" }}>
                  Water-resistant · {p.meta}
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span
                    className="text-[10px] font-black"
                    style={{ color: "#F97316" }}
                  >
                    {p.price}
                  </span>
                  <span className="text-[8px]" style={{ color: "#8B5E2A" }}>
                    Add →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
