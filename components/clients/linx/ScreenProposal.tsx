import { IconRobot, IconCheck, IconArrowRight, IconClock } from "@tabler/icons-react";
import { LinxMark } from "@/components/projects/BrandMarks";

/* ============================================================
   LINX — AI Proposal Generator
   Brief inputs ↔ Generated proposal preview
   ============================================================ */

const BRIEF = [
  { label: "Client", value: "Ridge Outdoor" },
  { label: "Budget signal", value: "$8–12k / month" },
  { label: "Industry", value: "DTC outdoor apparel" },
  { label: "Stated need", value: "Performance ads + social content + monthly reporting" },
  { label: "Timeline", value: "Start within 3 weeks" },
];

const STEPS = [
  { ok: true, text: "Analyzed brief · 40+ past proposals reviewed" },
  { ok: true, text: "Matched scope to similar accounts (Brew Republic, NordFlex)" },
  { ok: true, text: "Generated proposal in LINX house voice" },
  { ok: true, text: "Compliance + service agreement attached" },
  { ok: false, text: "Awaiting Priya review" },
];

export function ScreenProposal() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(139,92,246,0.10), transparent 60%), linear-gradient(180deg, #0C0814 0%, #050308 100%)",
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
          background: "radial-gradient(circle, rgba(139,92,246,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(18,14,30,0.85)",
          borderColor: "rgba(139,92,246,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <LinxMark size={18} />
          <span className="text-white text-[13px] font-bold tracking-tight">
            Proposal · Ridge Outdoor
          </span>
          <span
            className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium inline-flex items-center gap-1"
            style={{
              background: "rgba(139,92,246,0.12)",
              color: "#C4B5FD",
              border: "1px solid rgba(139,92,246,0.25)",
            }}
          >
            <IconRobot size={9} stroke={2} />
            AI · trained on 40+ proposals
          </span>
        </div>
        <span
          className="text-[9px] inline-flex items-center gap-1 font-mono"
          style={{ color: "#A78BFA" }}
        >
          <IconClock size={9} stroke={1.5} />
          38 min to draft · 8h saved
        </span>
      </div>

      <main className="relative flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2.5 p-3 overflow-hidden min-h-0">
        {/* Brief + steps */}
        <aside
          className="rounded-xl p-3 border flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,14,30,0.92) 0%, rgba(12,8,20,0.6) 100%)",
            borderColor: "rgba(139,92,246,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#7c6f9a" }}
          >
            Client brief
          </div>
          <div className="space-y-1.5">
            {BRIEF.map((b) => (
              <div
                key={b.label}
                className="rounded-md p-2"
                style={{ background: "rgba(12,8,20,0.6)" }}
              >
                <div
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#7c6f9a" }}
                >
                  {b.label}
                </div>
                <div
                  className="text-[10px] mt-0.5"
                  style={{ color: "#e5dcf8" }}
                >
                  {b.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(139,92,246,0.10)" }}>
            <div
              className="text-[8px] uppercase tracking-wider mb-2"
              style={{ color: "#7c6f9a" }}
            >
              AI generation steps
            </div>
            <ul className="space-y-1.5">
              {STEPS.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-[9px]">
                  <div
                    className="shrink-0 w-3.5 h-3.5 rounded-full inline-flex items-center justify-center mt-0.5"
                    style={{
                      background: s.ok
                        ? "rgba(16,185,129,0.18)"
                        : "rgba(139,92,246,0.18)",
                      border: `1px solid ${
                        s.ok
                          ? "rgba(16,185,129,0.30)"
                          : "rgba(139,92,246,0.30)"
                      }`,
                    }}
                  >
                    {s.ok ? (
                      <IconCheck size={7} stroke={2.5} color="#34D399" />
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-current" style={{ color: "#A78BFA" }} />
                    )}
                  </div>
                  <span style={{ color: s.ok ? "#cfc8e0" : "#A78BFA" }}>
                    {s.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Generated proposal */}
        <article
          className="rounded-xl border overflow-hidden flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,242,250,0.97) 0%, rgba(230,220,245,0.92) 100%)",
            borderColor: "rgba(139,92,246,0.25)",
            color: "#1f1438",
          }}
        >
          <div
            className="px-4 py-2 border-b flex items-center justify-between"
            style={{ borderColor: "rgba(31,20,56,0.15)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                }}
              />
              <span
                className="font-bold tracking-tight text-[12px]"
                style={{ color: "#6D28D9" }}
              >
                linx
              </span>
              <span className="text-[8px] font-mono" style={{ color: "#5a5070" }}>
                / studio
              </span>
            </div>
            <span
              className="text-[8px] font-mono uppercase tracking-wider"
              style={{ color: "#5a5070" }}
            >
              Draft proposal · v1
            </span>
          </div>

          <div className="px-5 py-4 flex-1 overflow-hidden">
            <p
              className="text-[9px] uppercase tracking-[0.25em] mb-1"
              style={{ color: "#6D28D9" }}
            >
              Proposal · Ridge Outdoor
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(16px, 2.2vw, 24px)",
                color: "#1f1438",
              }}
            >
              A growth partnership that compounds.
            </h2>

            <p
              className="text-[10px] leading-relaxed mt-3"
              style={{ color: "#2a1f44" }}
            >
              You&apos;re looking for a partner who treats your brand like its own.
              Here&apos;s how we&apos;d work with Ridge Outdoor.
            </p>

            <div className="mt-3">
              <div
                className="text-[8px] uppercase tracking-wider mb-2"
                style={{ color: "#5a5070" }}
              >
                Scope · monthly retainer
              </div>
              <div
                className="rounded-lg border p-3 grid grid-cols-3 gap-3"
                style={{
                  background: "rgba(139,92,246,0.06)",
                  borderColor: "rgba(139,92,246,0.25)",
                }}
              >
                <div>
                  <div className="text-[9px]" style={{ color: "#5a5070" }}>
                    Performance ads
                  </div>
                  <div className="text-base font-bold mt-0.5" style={{ color: "#1f1438" }}>
                    $4,500
                  </div>
                </div>
                <div>
                  <div className="text-[9px]" style={{ color: "#5a5070" }}>
                    Social content
                  </div>
                  <div className="text-base font-bold mt-0.5" style={{ color: "#1f1438" }}>
                    $3,200
                  </div>
                </div>
                <div>
                  <div className="text-[9px]" style={{ color: "#5a5070" }}>
                    Reporting + strategy
                  </div>
                  <div className="text-base font-bold mt-0.5" style={{ color: "#1f1438" }}>
                    $1,200
                  </div>
                </div>
              </div>
              <div
                className="mt-2 px-3 py-2 rounded-md flex items-center justify-between"
                style={{
                  background: "rgba(139,92,246,0.10)",
                  border: "1px solid rgba(139,92,246,0.30)",
                }}
              >
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: "#5b21b6" }}
                >
                  Monthly total
                </span>
                <span
                  className="text-base font-bold tabular-nums"
                  style={{ color: "#6D28D9" }}
                >
                  $8,900 / mo
                </span>
              </div>
            </div>

            <p className="text-[9px] mt-3" style={{ color: "#5a5070" }}>
              90-day commitment · 30 days written notice · co-owned creative
            </p>
          </div>

          {/* Footer */}
          <div
            className="px-5 py-2.5 border-t flex items-center justify-between"
            style={{
              background: "rgba(139,92,246,0.06)",
              borderColor: "rgba(31,20,56,0.10)",
            }}
          >
            <span className="text-[9px] font-mono" style={{ color: "#5a5070" }}>
              Drafted by AI · reviewed by Priya before send
            </span>
            <button
              className="text-[9px] font-semibold px-3 py-1.5 rounded-md inline-flex items-center gap-1"
              style={{
                background:
                  "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                color: "#ffffff",
                boxShadow: "0 0 16px rgba(139,92,246,0.30)",
              }}
            >
              Send to Ridge
              <IconArrowRight size={10} stroke={2.5} />
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
