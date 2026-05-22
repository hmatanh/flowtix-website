import {
  IconRobot,
  IconEdit,
  IconFilter,
  IconMapPin,
  IconHomeFilled,
  IconBath,
  IconBed,
  IconRulerMeasure,
  IconHeart,
  IconArrowsExchange,
} from "@tabler/icons-react";

/* ============================================================
   KOVA — AI Matching screen
   Buyer profile + AI-matched listings with score viz
   ============================================================ */

const BUYER = {
  name: "Marcus Thompson",
  budget: "$450k – $550k",
  timeline: "Move-in by August",
  pref: "Quiet street, walkable, modern build",
};

const TAGS_MUST = ["Parking", "Elevator", "Balcony"];
const TAGS_NICE = ["South facing", "Renovated kitchen", "Storage"];
const TAGS_NO = ["Ground floor", "Highway adjacent"];

const PROPERTY_VISUALS = [
  "linear-gradient(135deg, #5a93b8 0%, #2a5a78 60%, #0c2030 100%)",
  "linear-gradient(135deg, #7c4a2e 0%, #c08660 35%, #4a2a18 100%)",
  "linear-gradient(135deg, #6a9a82 0%, #4a7a62 50%, #1a3022 100%)",
];

const MATCHES = [
  {
    name: "Elm Court, Unit 4B",
    meta: "3 bed · 2 bath · 92m²",
    location: "Westside · 8 min walk to tram",
    price: "$485,000",
    score: 94,
    insights: [
      { ok: true, text: "Parking ✓ · Elevator ✓ · Balcony ✓" },
      { ok: true, text: "South facing · renovated kitchen" },
      { ok: true, text: "Quiet street · walkable" },
    ],
    visual: PROPERTY_VISUALS[0],
  },
  {
    name: "Hawthorn Terrace 12",
    meta: "4 bed · 3 bath · 140m²",
    location: "Midtown · Mixed-use street",
    price: "$612,000",
    score: 78,
    insights: [
      { ok: true, text: "Parking ✓ · Elevator ✓ · Balcony ✓" },
      { ok: false, text: "Above budget by $62k" },
      { ok: true, text: "Larger than required · 4 bed" },
    ],
    visual: PROPERTY_VISUALS[1],
  },
  {
    name: "Lakeside Loft 3A",
    meta: "2 bed · 1 bath · 78m²",
    location: "Lakeshore · 5 min walk to lake",
    price: "$398,000",
    score: 71,
    insights: [
      { ok: true, text: "Within budget · $50k below" },
      { ok: false, text: "No elevator · 3rd floor walkup" },
      { ok: true, text: "Quiet · lakefront · renovated" },
    ],
    visual: PROPERTY_VISUALS[2],
  },
];

function ScoreRing({ score }: { score: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 90 ? "#10B981" : score >= 75 ? "#0EA5E9" : "#F59E0B";
  return (
    <div className="relative shrink-0" style={{ width: 44, height: 44 }}>
      <svg width="44" height="44" className="-rotate-90" aria-hidden="true">
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
        />
      </svg>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ color }}
      >
        <span className="text-[11px] font-bold leading-none tabular-nums">
          {score}
        </span>
        <span className="text-[6px] uppercase tracking-wider mt-0.5">
          MATCH
        </span>
      </div>
    </div>
  );
}

export function ScreenMatching() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(14,165,233,0.10), transparent 60%), linear-gradient(180deg, #0A1628 0%, #06101D 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: -40,
          right: -40,
          width: 240,
          height: 240,
          background: "radial-gradient(circle, rgba(14,165,233,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(12,26,46,0.85)",
          borderColor: "rgba(14,165,233,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="inline-flex items-center justify-center w-6 h-6 rounded-md"
            style={{
              background: "rgba(14,165,233,0.15)",
              border: "1px solid rgba(14,165,233,0.25)",
            }}
          >
            <IconRobot size={12} stroke={1.5} color="#0EA5E9" />
          </div>
          <span className="text-white text-[13px] font-bold tracking-tight">
            AI Matching
          </span>
          <span
            className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(14,165,233,0.10)",
              color: "#7dd3fc",
              border: "1px solid rgba(14,165,233,0.20)",
            }}
          >
            Live
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="text-[8px] inline-flex items-center gap-1"
            style={{ color: "#10B981" }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
            />
            Re-scoring every 10 min
          </span>
        </div>
      </div>

      <main className="relative flex-1 p-3 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2.5 overflow-hidden min-h-0">
        {/* Buyer profile */}
        <aside
          className="rounded-xl p-3 border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,31,56,0.92) 0%, rgba(12,26,46,0.6) 100%)",
            borderColor: "rgba(14,165,233,0.12)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284c7 100%)",
                  color: "#001824",
                }}
              >
                MT
              </div>
              <div>
                <div className="text-white text-[11px] font-semibold">
                  {BUYER.name}
                </div>
                <div className="text-[8px]" style={{ color: "#7ab3d0" }}>
                  Active buyer · 17 properties seen
                </div>
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center w-5 h-5 rounded"
              style={{
                background: "rgba(14,165,233,0.10)",
                color: "#7dd3fc",
              }}
            >
              <IconEdit size={10} stroke={1.5} />
            </button>
          </div>

          <div className="space-y-2 text-[9px]">
            <div className="rounded-md p-2" style={{ background: "rgba(12,26,46,0.6)" }}>
              <div className="text-[7px] uppercase tracking-wider" style={{ color: "#5a7a9a" }}>
                Budget
              </div>
              <div className="text-white font-mono tabular-nums mt-0.5">
                {BUYER.budget}
              </div>
            </div>
            <div className="rounded-md p-2" style={{ background: "rgba(12,26,46,0.6)" }}>
              <div className="text-[7px] uppercase tracking-wider" style={{ color: "#5a7a9a" }}>
                Timeline
              </div>
              <div className="text-white mt-0.5">{BUYER.timeline}</div>
            </div>
            <div className="rounded-md p-2" style={{ background: "rgba(12,26,46,0.6)" }}>
              <div className="text-[7px] uppercase tracking-wider" style={{ color: "#5a7a9a" }}>
                Preferences
              </div>
              <div className="text-white mt-0.5">{BUYER.pref}</div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(14,165,233,0.08)" }}>
            <div className="text-[8px] uppercase tracking-wider mb-1.5" style={{ color: "#5a7a9a" }}>
              Must have
            </div>
            <div className="flex flex-wrap gap-1">
              {TAGS_MUST.map((t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#34D399",
                    border: "1px solid rgba(16,185,129,0.25)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              className="text-[8px] uppercase tracking-wider mt-2 mb-1.5"
              style={{ color: "#5a7a9a" }}
            >
              Nice to have
            </div>
            <div className="flex flex-wrap gap-1">
              {TAGS_NICE.map((t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(14,165,233,0.08)",
                    color: "#7dd3fc",
                    border: "1px solid rgba(14,165,233,0.18)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div
              className="text-[8px] uppercase tracking-wider mt-2 mb-1.5"
              style={{ color: "#5a7a9a" }}
            >
              Avoid
            </div>
            <div className="flex flex-wrap gap-1">
              {TAGS_NO.map((t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    color: "#FCA5A5",
                    border: "1px solid rgba(239,68,68,0.18)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Matches */}
        <section className="space-y-2 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-white text-[11px] font-semibold tracking-tight">
              3 properties matched · ranked
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-medium border"
                style={{
                  background: "rgba(14,165,233,0.10)",
                  color: "#0EA5E9",
                  borderColor: "rgba(14,165,233,0.25)",
                }}
              >
                <IconFilter size={9} stroke={1.5} />
                Auto-filter
              </span>
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-medium"
                style={{
                  background: "rgba(14,165,233,0.05)",
                  color: "#7ab3d0",
                }}
              >
                <IconArrowsExchange size={9} stroke={1.5} />
                Compare
              </span>
            </div>
          </div>

          {MATCHES.map((m) => (
            <article
              key={m.name}
              className="rounded-xl p-2.5 border relative flex gap-2.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,31,56,0.92) 0%, rgba(12,26,46,0.6) 100%)",
                borderColor: "rgba(14,165,233,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Property visual */}
              <div
                className="w-16 h-20 rounded-md shrink-0 relative overflow-hidden"
                style={{ background: m.visual }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                  }}
                />
                <IconHomeFilled
                  size={14}
                  className="absolute bottom-1 right-1 opacity-50"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-white text-[11px] font-semibold truncate">
                      {m.name}
                    </div>
                    <div
                      className="text-[8px] inline-flex items-center gap-1 mt-0.5"
                      style={{ color: "#7ab3d0" }}
                    >
                      <IconMapPin size={8} stroke={1.5} />
                      {m.location}
                    </div>
                  </div>
                  <ScoreRing score={m.score} />
                </div>

                <div
                  className="text-[10px] font-bold tabular-nums mt-1"
                  style={{ color: "#0EA5E9" }}
                >
                  {m.price}
                </div>

                {/* Insights */}
                <div className="mt-1.5 space-y-0.5">
                  {m.insights.map((ins, i) => (
                    <div
                      key={i}
                      className="text-[9px] inline-flex items-start gap-1.5"
                      style={{ color: ins.ok ? "#cce5f5" : "#FCA5A5" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0 mt-1.5"
                        style={{
                          background: ins.ok ? "#10B981" : "#EF4444",
                        }}
                      />
                      <span>{ins.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-2 pt-1.5 border-t" style={{ borderColor: "rgba(14,165,233,0.06)" }}>
                  <button
                    className="text-[8px] font-medium px-1.5 py-0.5 rounded inline-flex items-center gap-0.5"
                    style={{
                      background: "rgba(14,165,233,0.12)",
                      color: "#0EA5E9",
                      border: "1px solid rgba(14,165,233,0.25)",
                    }}
                  >
                    <IconRobot size={8} stroke={2} />
                    Send to Marcus
                  </button>
                  <span
                    className="text-[8px]"
                    style={{ color: "#5a7a9a" }}
                  >
                    or
                  </span>
                  <button
                    className="text-[8px] font-medium px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(14,165,233,0.06)", color: "#7ab3d0" }}
                  >
                    Book viewing
                  </button>
                  <button
                    className="ml-auto inline-flex items-center justify-center w-5 h-5 rounded"
                    style={{
                      background: "rgba(14,165,233,0.06)",
                      color: "#7ab3d0",
                    }}
                  >
                    <IconHeart size={9} stroke={1.5} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
