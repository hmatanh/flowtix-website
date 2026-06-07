import {
  IconSearch,
  IconHeart,
  IconShoppingBag,
  IconStar,
  IconStarFilled,
  IconArrowRight,
  IconTruckDelivery,
} from "@tabler/icons-react";

/* ============================================================
   DRFT — Storefront
   Premium outdoor DTC brand: warm amber palette, hero
   imagery (suggested via gradients), product cards, social
   proof, ratings.
   ============================================================ */

const PRODUCT_VISUALS = [
  "linear-gradient(135deg, #c25420 0%, #5e2a10 60%, #2a140a 100%)",
  "linear-gradient(160deg, #7c8a5c 0%, #4a5238 50%, #2a3022 100%)",
  "linear-gradient(140deg, #c4a374 0%, #8a6a44 55%, #4a3624 100%)",
  "linear-gradient(150deg, #4a4e54 0%, #2c2f33 50%, #18191b 100%)",
];

const PRODUCTS = [
  {
    name: "Trail Series Jacket",
    meta: "4 colors · weatherproof",
    price: "$189",
    badge: "NEW",
    badgeColor: "#DC2626",
    rating: 4.8,
    reviews: 142,
    visual: PRODUCT_VISUALS[0],
  },
  {
    name: "Ridge Pant",
    meta: "2 colors · stretch shell",
    price: "$148",
    badge: null,
    badgeColor: "",
    rating: 4.7,
    reviews: 86,
    visual: PRODUCT_VISUALS[1],
  },
  {
    name: "Cascade Hoodie",
    meta: "3 colors · midweight",
    price: "$98",
    badge: "SELLING FAST",
    badgeColor: "#EF4444",
    rating: 4.9,
    reviews: 218,
    visual: PRODUCT_VISUALS[2],
  },
  {
    name: "Drift Tee",
    meta: "5 colors · organic cotton",
    price: "$48",
    badge: null,
    badgeColor: "",
    rating: 4.6,
    reviews: 312,
    visual: PRODUCT_VISUALS[3],
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <div className="inline-flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) =>
        i < full ? (
          <IconStarFilled key={i} size={8} style={{ color: "#DC2626" }} aria-hidden="true" />
        ) : (
          <IconStar key={i} size={8} style={{ color: "rgba(254,215,170,0.30)" }} aria-hidden="true" />
        )
      )}
    </div>
  );
}

export function ScreenStore() {
  return (
    <div
      className="w-full h-full flex flex-col overflow-hidden relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(220, 38, 38,0.10), transparent 60%), linear-gradient(180deg, #1A0707 0%, #06030B 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -40,
          right: -40,
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(220, 38, 38,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative text-center py-1.5 text-[9px] tracking-[0.2em] uppercase font-medium border-b"
        style={{
          background:
            "linear-gradient(90deg, rgba(220, 38, 38,0.10), rgba(220, 38, 38,0.05), rgba(220, 38, 38,0.10))",
          color: "#FECACA",
          borderColor: "rgba(220, 38, 38,0.18)",
        }}
      >
        Free shipping over $100 · Spring drop now live →
      </div>

      <div
        className="relative flex items-center justify-between px-5 py-3 shrink-0 border-b backdrop-blur-sm"
        style={{
          background: "rgba(18,10,2,0.8)",
          borderColor: "rgba(220, 38, 38,0.12)",
        }}
      >
        <span
          className="font-black italic tracking-tighter text-white"
          style={{
            fontSize: 22,
            transform: "skewX(-6deg)",
            display: "inline-block",
            textShadow: "0 0 20px rgba(220, 38, 38,0.4)",
          }}
        >
          DRFT
        </span>
        <div
          className="hidden md:flex items-center gap-5 text-[10px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "#FECACA" }}
        >
          <span>Shop</span>
          <span>Collections</span>
          <span>Stories</span>
          <span>About</span>
        </div>
        <div className="flex items-center gap-3.5">
          <IconSearch size={14} stroke={1.5} style={{ color: "#FECACA" }} />
          <IconHeart size={14} stroke={1.5} style={{ color: "#FECACA" }} />
          <div className="relative">
            <IconShoppingBag size={14} stroke={1.5} style={{ color: "#FECACA" }} />
            <span
              className="absolute -top-2 -right-2 text-[7px] font-bold rounded-full w-3.5 h-3.5 inline-flex items-center justify-center"
              style={{ background: "#DC2626", color: "#1a0a02" }}
            >
              2
            </span>
          </div>
        </div>
      </div>

      <div
        className="relative px-5 py-4 border-b overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(220, 38, 38,0.08) 0%, rgba(20,12,4,0.6) 60%, rgba(8,5,2,1) 100%)",
          borderColor: "rgba(220, 38, 38,0.10)",
        }}
      >
        <div className="relative flex items-end justify-between gap-3">
          <div>
            <div
              className="text-[9px] uppercase tracking-[0.3em] mb-2"
              style={{ color: "#DC2626" }}
            >
              Spring Drop · Vol. 03
            </div>
            <div
              className="font-black tracking-tighter text-white leading-none"
              style={{
                fontSize: "clamp(20px, 3vw, 32px)",
                textShadow: "0 0 24px rgba(220, 38, 38,0.3)",
              }}
            >
              Gear that moves
              <br />
              with you.
            </div>
            <button
              className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "#DC2626",
                color: "#1a0a02",
                boxShadow: "0 0 20px rgba(220, 38, 38,0.3)",
              }}
            >
              Shop the drop
              <IconArrowRight size={10} stroke={2.5} />
            </button>
          </div>
          <div
            className="hidden sm:block w-32 h-20 rounded-lg relative overflow-hidden shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #c25420 0%, #5e2a10 60%, #2a140a 100%)",
              border: "1px solid rgba(220, 38, 38,0.20)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(255,200,150,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(50,20,5,0.6), transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>

      <main className="relative flex-1 px-5 py-4 overflow-hidden">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <div className="text-[9px] uppercase tracking-widest" style={{ color: "#8B5E2A" }}>
              Featured
            </div>
            <h2 className="text-white text-base font-bold tracking-tight">
              Built for the trail
            </h2>
          </div>
          <span
            className="text-[9px] inline-flex items-center gap-1 font-medium"
            style={{ color: "#DC2626" }}
          >
            View all 24 →
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="relative group rounded-lg overflow-hidden border"
              style={{
                background: "rgba(20,12,4,0.5)",
                borderColor: "rgba(220, 38, 38,0.10)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: p.visual }}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,220,180,0.25), transparent 50%)",
                  }}
                />
                {p.badge && (
                  <span
                    className="absolute top-1.5 left-1.5 text-[7px] font-bold tracking-[0.15em] px-1.5 py-0.5 rounded font-mono"
                    style={{
                      background: p.badgeColor,
                      color: "#1a0a02",
                      boxShadow: `0 0 8px ${p.badgeColor}66`,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                <button
                  className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full inline-flex items-center justify-center"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(4px)",
                  }}
                  aria-label="Save"
                >
                  <IconHeart size={9} stroke={1.5} style={{ color: "#FECACA" }} />
                </button>
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          i === 0 ? "#DC2626" : i === 1 ? "#92400E" : "#FECACA",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-2">
                <div className="flex items-center justify-between gap-1">
                  <div className="text-white text-[10px] font-semibold tracking-tight truncate">
                    {p.name}
                  </div>
                  <div className="text-[10px] font-bold tabular-nums shrink-0" style={{ color: "#DC2626" }}>
                    {p.price}
                  </div>
                </div>
                <div className="text-[8px] mt-0.5" style={{ color: "#8B5E2A" }}>
                  {p.meta}
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1">
                    <Stars rating={p.rating} />
                    <span className="text-[8px] font-mono" style={{ color: "#8B5E2A" }}>
                      ({p.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-3 rounded-lg border px-3 py-2 flex items-center justify-between gap-3 flex-wrap"
          style={{
            background:
              "linear-gradient(90deg, rgba(220, 38, 38,0.06), rgba(20,12,4,0.4))",
            borderColor: "rgba(220, 38, 38,0.10)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <IconTruckDelivery size={11} stroke={1.5} style={{ color: "#DC2626" }} />
            <span className="text-[9px] font-medium" style={{ color: "#FECACA" }}>
              Free shipping over $100
            </span>
          </div>
          <span className="text-[9px]" style={{ color: "#8B5E2A" }}>·</span>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
            />
            <span className="text-[9px] font-medium" style={{ color: "#FECACA" }}>
              In stock · Ships 24h
            </span>
          </div>
          <span className="text-[9px]" style={{ color: "#8B5E2A" }}>·</span>
          <div className="flex items-center gap-1.5">
            <Stars rating={4.8} />
            <span className="text-[9px] font-medium" style={{ color: "#FECACA" }}>
              4.8 · 758 reviews
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
