import {
  IconRobot,
  IconFilter,
  IconSearch,
  IconCalendar,
  IconPhone,
  IconMail,
  IconArrowUpRight,
  IconDots,
} from "@tabler/icons-react";

/* ============================================================
   KOVA — Lead CRM (kanban-style pipeline)
   ============================================================ */

const PIPELINE = [
  {
    stage: "New leads",
    count: 8,
    accent: "#0EA5E9",
    deals: [
      { name: "Marcus T.", source: "Website form", budget: "$450k–550k", hot: true, time: "12m" },
      { name: "Aisha K.", source: "Zillow referral", budget: "$300k", hot: false, time: "1h" },
      { name: "James W.", source: "AI auto-reply", budget: "$700k+", hot: true, time: "3h" },
    ],
  },
  {
    stage: "Viewing booked",
    count: 6,
    accent: "#F59E0B",
    deals: [
      { name: "Dana R.", source: "Elm Court 4B", budget: "Tue 14:00", hot: false, time: "Today" },
      { name: "Tom S.", source: "Hawthorn 12", budget: "Wed 11:30", hot: false, time: "Tomorrow" },
      { name: "Mia L.", source: "Lakeside Loft", budget: "Thu 15:00", hot: true, time: "Thu" },
    ],
  },
  {
    stage: "Offer stage",
    count: 4,
    accent: "#10B981",
    deals: [
      { name: "Robert F.", source: "Elm Court 4B", budget: "$475k offer", hot: true, time: "2h" },
      { name: "Linda P.", source: "Cedar Loft 2A", budget: "$310k offer", hot: false, time: "1d" },
    ],
  },
];

export function ScreenCRM() {
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
        <div className="flex items-center gap-3">
          <span className="text-white text-[13px] font-bold tracking-tight">
            Lead Pipeline
          </span>
          <span
            className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(14,165,233,0.10)",
              color: "#7dd3fc",
              border: "1px solid rgba(14,165,233,0.20)",
            }}
          >
            18 active
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] border"
            style={{
              background: "rgba(13,31,56,0.6)",
              color: "#7ab3d0",
              borderColor: "rgba(14,165,233,0.10)",
            }}
          >
            <IconSearch size={10} stroke={1.5} />
            <span>Search</span>
          </div>
          <div
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-medium border"
            style={{
              background: "rgba(14,165,233,0.10)",
              color: "#0EA5E9",
              borderColor: "rgba(14,165,233,0.25)",
            }}
          >
            <IconFilter size={10} stroke={1.5} />
            <span>3 filters</span>
          </div>
        </div>
      </div>

      <main className="relative flex-1 p-3 overflow-hidden grid grid-cols-3 gap-2.5 min-h-0">
        {PIPELINE.map((col) => (
          <section
            key={col.stage}
            className="rounded-xl p-2.5 border flex flex-col min-h-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,31,56,0.92) 0%, rgba(12,26,46,0.6) 100%)",
              borderColor: "rgba(14,165,233,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: col.accent,
                    boxShadow: `0 0 4px ${col.accent}`,
                  }}
                />
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: col.accent }}
                >
                  {col.stage}
                </span>
              </div>
              <span
                className="text-[9px] font-bold tabular-nums px-1.5 py-0.5 rounded"
                style={{
                  background: `rgba(${
                    col.accent === "#0EA5E9"
                      ? "14,165,233"
                      : col.accent === "#F59E0B"
                      ? "245,158,11"
                      : "16,185,129"
                  },0.10)`,
                  color: col.accent,
                }}
              >
                {col.count}
              </span>
            </div>

            <div className="space-y-1.5 overflow-hidden">
              {col.deals.map((d) => (
                <article
                  key={d.name}
                  className="relative rounded-lg p-2 border"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(12,26,46,0.7) 0%, rgba(8,18,32,0.4) 100%)",
                    borderColor: "rgba(14,165,233,0.08)",
                  }}
                >
                  {d.hot && (
                    <div
                      aria-hidden="true"
                      className="absolute top-2 right-2 inline-flex items-center gap-0.5 text-[7px] font-bold px-1 py-0 rounded font-mono"
                      style={{
                        background: "rgba(239,68,68,0.18)",
                        color: "#FCA5A5",
                        border: "1px solid rgba(239,68,68,0.30)",
                      }}
                    >
                      HOT
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-md shrink-0 inline-flex items-center justify-center text-[8px] font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, #0EA5E9 0%, #0284c7 100%)",
                        color: "#001824",
                      }}
                    >
                      {d.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div className="text-white text-[10px] font-semibold truncate">
                      {d.name}
                    </div>
                  </div>
                  <div className="text-[8px] mt-1.5" style={{ color: "#7ab3d0" }}>
                    {d.source}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span
                      className="text-[9px] font-mono tabular-nums"
                      style={{ color: "#0EA5E9" }}
                    >
                      {d.budget}
                    </span>
                    <span
                      className="text-[8px]"
                      style={{ color: "#3a5a7a" }}
                    >
                      {d.time}
                    </span>
                  </div>

                  <div className="mt-1.5 pt-1.5 border-t flex items-center gap-1" style={{ borderColor: "rgba(14,165,233,0.06)" }}>
                    <button
                      className="inline-flex items-center justify-center w-5 h-5 rounded"
                      style={{
                        background: "rgba(14,165,233,0.08)",
                        color: "#7dd3fc",
                      }}
                      aria-label="Email"
                    >
                      <IconMail size={9} stroke={1.5} />
                    </button>
                    <button
                      className="inline-flex items-center justify-center w-5 h-5 rounded"
                      style={{
                        background: "rgba(14,165,233,0.08)",
                        color: "#7dd3fc",
                      }}
                      aria-label="Call"
                    >
                      <IconPhone size={9} stroke={1.5} />
                    </button>
                    <button
                      className="inline-flex items-center justify-center w-5 h-5 rounded"
                      style={{
                        background: "rgba(14,165,233,0.08)",
                        color: "#7dd3fc",
                      }}
                      aria-label="Book viewing"
                    >
                      <IconCalendar size={9} stroke={1.5} />
                    </button>
                    <span
                      className="ml-auto inline-flex items-center gap-0.5 text-[8px] font-medium px-1 py-0 rounded"
                      style={{
                        background: "rgba(16,185,129,0.10)",
                        color: "#34D399",
                      }}
                    >
                      <IconRobot size={8} stroke={2} />
                      AI ✓
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
