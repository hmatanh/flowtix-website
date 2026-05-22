import { IconRobot, IconEdit, IconFilter } from "@tabler/icons-react";

const TAGS_MUST = ["Parking", "Elevator", "Balcony"];
const TAGS_NO = ["Ground floor", "No natural light"];

const PROPERTIES = [
  { name: "Elm Court 4B", area: "Riverside", price: "$485,000", score: 94, tier: "high" },
  { name: "Hawthorn 12", area: "Center", price: "$612,000", score: 87, tier: "mid" },
  { name: "Bay View 7C", area: "Riverside", price: "$540,000", score: 82, tier: "mid" },
  { name: "Park Lane 18", area: "Center", price: "$498,000", score: 76, tier: "low" },
  { name: "Oak Vista 21", area: "Riverside", price: "$425,000", score: 71, tier: "low" },
  { name: "Linden Sq 4", area: "Center", price: "$455,000", score: 68, tier: "low" },
];

function scoreColor(tier: string) {
  if (tier === "high") return { bg: "rgba(16,185,129,0.25)", text: "#34D399" };
  if (tier === "mid") return { bg: "rgba(14,165,233,0.25)", text: "#7dd3fc" };
  return { bg: "rgba(245,158,11,0.25)", text: "#fbbf24" };
}

export function ScreenMatching() {
  return (
    <div className="w-full h-full flex" style={{ background: "#0A1628" }}>
      {/* Left — client profile */}
      <aside
        className="w-44 sm:w-52 border-r p-3 sm:p-4 flex flex-col overflow-hidden"
        style={{ background: "#080F1C", borderColor: "rgba(14,165,233,0.15)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-white text-[10px] font-semibold">Client Profile</span>
          <IconEdit size={11} stroke={1.5} color="#4a6b8a" />
        </div>

        <div
          className="mt-3 rounded-md p-2.5"
          style={{ background: "#0D1F38" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[9px] font-bold"
              style={{ background: "#0EA5E9", color: "#000" }}
            >
              RK
            </div>
            <div className="min-w-0">
              <div className="text-white text-[10px] font-semibold truncate">
                Rachel Kim
              </div>
              <div className="text-[8px]" style={{ color: "#4a6b8a" }}>
                Active buyer
              </div>
            </div>
          </div>
          <div className="text-[8px] mt-2" style={{ color: "#7ab3d0" }}>
            Budget: $400–550K
          </div>
        </div>

        <div className="mt-3 space-y-2 text-[9px] overflow-hidden">
          {[
            { label: "Type", value: "Apartment, Penthouse" },
            { label: "Bedrooms", value: "3+" },
            { label: "Area", value: "City Center, Riverside" },
          ].map((f) => (
            <div key={f.label}>
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#2a4a6a" }}>
                {f.label}
              </div>
              <div className="text-[#7ab3d0] leading-tight">{f.value}</div>
            </div>
          ))}

          <div>
            <div className="text-[8px] uppercase tracking-wider mb-1" style={{ color: "#2a4a6a" }}>
              Must have
            </div>
            <div className="flex flex-wrap gap-1">
              {TAGS_MUST.map((t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    color: "#34D399",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[8px] uppercase tracking-wider mb-1" style={{ color: "#2a4a6a" }}>
              Deal-breakers
            </div>
            <div className="flex flex-wrap gap-1">
              {TAGS_NO.map((t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(244,63,94,0.12)",
                    color: "#fda4af",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-auto rounded-md p-2 flex items-start gap-1.5"
          style={{ background: "rgba(14,165,233,0.15)" }}
        >
          <IconRobot size={11} stroke={1.5} color="#0EA5E9" className="mt-0.5" />
          <span className="text-[8px] leading-tight" style={{ color: "#7dd3fc" }}>
            AI learned 12 preferences from 3 viewings
          </span>
        </div>
      </aside>

      {/* Right — matches */}
      <div className="flex-1 p-3 sm:p-4 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="text-white text-sm font-semibold">23 matches found</div>
            <div className="text-[9px]" style={{ color: "#4a6b8a" }}>
              For Rachel Kim · Updated 4 min ago
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {["Score: High→Low", "Type", "Price"].map((f) => (
              <span
                key={f}
                className="text-[8px] px-2 py-1 rounded inline-flex items-center gap-1"
                style={{
                  background: "#0D1F38",
                  color: "#7ab3d0",
                  border: "1px solid rgba(14,165,233,0.15)",
                }}
              >
                <IconFilter size={9} stroke={1.5} />
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 flex-1 min-h-0">
          {PROPERTIES.map((p) => {
            const c = scoreColor(p.tier);
            return (
              <div
                key={p.name}
                className="rounded-md overflow-hidden border flex flex-col"
                style={{
                  background: "#0D1F38",
                  borderColor: "rgba(14,165,233,0.15)",
                }}
              >
                <div
                  className="relative aspect-[16/9]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(14,165,233,0.05))",
                  }}
                >
                  <span
                    className="absolute top-1.5 right-1.5 text-[8px] font-bold px-1.5 py-0.5 rounded-full backdrop-blur"
                    style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}
                  >
                    {p.score}%
                  </span>
                </div>
                <div className="p-2 flex-1">
                  <div className="text-white text-[10px] font-medium truncate">
                    {p.name}
                  </div>
                  <div className="text-[8px]" style={{ color: "#4a6b8a" }}>
                    3 bed · 2 bath · {p.area}
                  </div>
                  <div
                    className="text-[10px] font-semibold mt-1"
                    style={{ color: c.text }}
                  >
                    {p.price}
                  </div>
                  <div className="text-[8px] mt-1" style={{ color: "#0EA5E9" }}>
                    Schedule Viewing →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
