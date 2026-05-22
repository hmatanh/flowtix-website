import {
  IconStar,
  IconArrowBack,
  IconArchive,
  IconFlag,
  IconArrowRight,
} from "@tabler/icons-react";

/* ============================================================
   DRFT — Email Campaign (welcome series, AI-personalized)
   ============================================================ */

const TIMELINE = [
  { day: "Day 0", subject: "Welcome to the drift.", state: "delivered" },
  { day: "Day 2", subject: "Built for distance. (here's how)", state: "delivered" },
  { day: "Day 5", subject: "Your first 10% — on us", state: "scheduled" },
  { day: "Day 10", subject: "What everyone's wearing this week", state: "scheduled" },
];

export function ScreenEmail() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(249,115,22,0.10), transparent 60%), linear-gradient(180deg, #120A02 0%, #06030B 100%)",
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
          background: "radial-gradient(circle, rgba(249,115,22,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Inbox-like top bar */}
      <div
        className="relative flex items-center justify-between px-4 py-2 border-b backdrop-blur-sm"
        style={{
          background: "rgba(18,10,2,0.85)",
          borderColor: "rgba(249,115,22,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <IconArrowBack size={11} stroke={1.5} style={{ color: "#8B5E2A" }} />
          <span className="text-[10px]" style={{ color: "#8B5E2A" }}>
            Inbox · DRFT
          </span>
        </div>
        <div className="flex items-center gap-2 text-[9px]" style={{ color: "#8B5E2A" }}>
          <IconStar size={11} stroke={1.5} />
          <IconArchive size={11} stroke={1.5} />
          <IconFlag size={11} stroke={1.5} />
        </div>
      </div>

      <main className="relative flex-1 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-2.5 p-3 overflow-hidden min-h-0">
        {/* Email body */}
        <article
          className="rounded-xl overflow-hidden border flex flex-col min-h-0"
          style={{
            background: "#1f1408",
            borderColor: "rgba(249,115,22,0.20)",
          }}
        >
          {/* Header strip */}
          <div
            className="px-4 py-2.5 border-b flex items-center justify-between"
            style={{
              background:
                "linear-gradient(90deg, rgba(249,115,22,0.10), rgba(20,12,4,0.4))",
              borderColor: "rgba(249,115,22,0.10)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[10px] font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
                  color: "#1a0a02",
                }}
              >
                D
              </div>
              <div>
                <div className="text-[10px] text-white font-semibold">
                  DRFT
                </div>
                <div className="text-[8px]" style={{ color: "#8B5E2A" }}>
                  hello@drft.studio · 2 min ago
                </div>
              </div>
            </div>
            <span
              className="text-[8px] font-mono px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(249,115,22,0.10)",
                color: "#FED7AA",
              }}
            >
              Day 0 · Welcome
            </span>
          </div>

          {/* Subject */}
          <div className="px-5 pt-4">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
            >
              Welcome to the drift.
            </h2>
          </div>

          {/* Hero image */}
          <div
            className="mx-5 mt-3 rounded-lg overflow-hidden relative"
            style={{
              height: 110,
              background:
                "linear-gradient(135deg, #c25420 0%, #5e2a10 60%, #2a140a 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(255,200,150,0.35), transparent 50%), radial-gradient(circle at 70% 80%, rgba(50,20,5,0.6), transparent 50%)",
              }}
            />
            <div className="absolute bottom-2 left-3">
              <span
                className="text-[9px] uppercase tracking-[0.3em] font-medium"
                style={{ color: "#FED7AA" }}
              >
                Vol. 03 · Spring
              </span>
              <div
                className="text-white font-black italic tracking-tighter"
                style={{
                  fontSize: 20,
                  transform: "skewX(-6deg)",
                  display: "inline-block",
                }}
              >
                DRFT
              </div>
            </div>
          </div>

          {/* Body text */}
          <div className="px-5 py-4 flex-1 min-h-0 overflow-hidden">
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: "#FED7AA" }}
            >
              Hey friend,
            </p>
            <p
              className="text-[11px] leading-relaxed mt-2"
              style={{ color: "#FED7AA" }}
            >
              You found us. Welcome.
            </p>
            <p
              className="text-[11px] leading-relaxed mt-2"
              style={{ color: "#FED7AA" }}
            >
              DRFT makes outdoor gear that doesn&apos;t look like outdoor gear. Built
              to move with you — trail, train, anywhere in between.
            </p>
            <p
              className="text-[11px] leading-relaxed mt-2"
              style={{ color: "#FED7AA" }}
            >
              Here&apos;s a code to start with:{" "}
              <span
                className="font-mono font-bold px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(249,115,22,0.18)",
                  color: "#F97316",
                }}
              >
                WELCOME10
              </span>{" "}
              · 10% off your first piece.
            </p>

            {/* CTA */}
            <button
              className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold px-4 py-2 rounded-full"
              style={{
                background: "#F97316",
                color: "#1a0a02",
                boxShadow: "0 0 20px rgba(249,115,22,0.4)",
              }}
            >
              Shop the drop
              <IconArrowRight size={11} stroke={2.5} />
            </button>

            <p
              className="text-[10px] mt-3 italic"
              style={{ color: "#8B5E2A" }}
            >
              See you on the trail.
              <br />— Jake &amp; the DRFT crew
            </p>
          </div>
        </article>

        {/* Timeline sidebar */}
        <aside
          className="rounded-xl p-3 border flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,10,2,0.92) 0%, rgba(12,8,2,0.6) 100%)",
            borderColor: "rgba(249,115,22,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#8B5E2A" }}
          >
            Sequence · 4 emails
          </div>

          <ul className="relative space-y-2.5">
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(249,115,22,0.30), rgba(249,115,22,0.05))",
              }}
            />
            {TIMELINE.map((t, i) => (
              <li key={i} className="relative flex items-start gap-2">
                <div
                  className="relative z-10 shrink-0 w-3.5 h-3.5 rounded-full"
                  style={{
                    background:
                      t.state === "delivered" ? "#10B981" : "#1f1408",
                    border:
                      t.state === "delivered"
                        ? "none"
                        : "1.5px solid rgba(249,115,22,0.5)",
                    boxShadow:
                      t.state === "delivered"
                        ? "0 0 6px rgba(16,185,129,0.5)"
                        : undefined,
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[9px] font-mono"
                    style={{ color: "#8B5E2A" }}
                  >
                    {t.day}
                  </div>
                  <div
                    className="text-[10px] font-medium mt-0.5 truncate"
                    style={{ color: i === 0 ? "#F97316" : "#FED7AA" }}
                  >
                    {t.subject}
                  </div>
                  <div
                    className="text-[8px] mt-0.5"
                    style={{
                      color:
                        t.state === "delivered" ? "#10B981" : "#8B5E2A",
                    }}
                  >
                    {t.state === "delivered" ? "✓ Delivered" : "Scheduled"}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div
            className="mt-auto pt-3 rounded-md p-2"
            style={{ background: "rgba(12,8,2,0.5)" }}
          >
            <div
              className="text-[8px] uppercase tracking-wider mb-1.5"
              style={{ color: "#8B5E2A" }}
            >
              Performance
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-white text-sm font-bold tabular-nums">
                  34%
                </div>
                <div className="text-[8px]" style={{ color: "#8B5E2A" }}>
                  Open rate
                </div>
              </div>
              <div>
                <div className="text-white text-sm font-bold tabular-nums">
                  8.2%
                </div>
                <div className="text-[8px]" style={{ color: "#8B5E2A" }}>
                  CTR
                </div>
              </div>
            </div>
            <div className="text-[8px] mt-1.5" style={{ color: "#F97316" }}>
              Both vs industry avg 19% · 2.3%
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
