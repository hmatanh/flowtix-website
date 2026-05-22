import {
  IconDownload,
  IconCalendar,
  IconShieldCheck,
  IconArrowUpRight,
  IconMail,
  IconLockSquare,
} from "@tabler/icons-react";
import { AurumMark } from "@/components/projects/BrandMarks";

/* ============================================================
   AURUM — Client Portal (private banking experience)
   Editorial feel: serif touches, generous whitespace, refined dividers.
   ============================================================ */

const HOLDINGS = [
  { class: "Equities", value: "$1,664k", pct: 52.4, return: "+13.2%", color: "#F59E0B" },
  { class: "Fixed Income", value: "$889k", pct: 28.0, return: "+5.8%", color: "#D97706" },
  { class: "Alternatives", value: "$381k", pct: 12.0, return: "+9.4%", color: "#FBBF24" },
  { class: "Cash & Equivalents", value: "$240k", pct: 7.6, return: "+0.3%", color: "#92400E" },
];

const DOCS = [
  { name: "Q1 2025 Portfolio Review", date: "Apr 5", new: true },
  { name: "Annual Tax Summary 2024", date: "Mar 18", new: false },
  { name: "Investment Policy Statement", date: "Jan 12", new: false },
];

export function ScreenPortal() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(245,158,11,0.10), transparent 60%), linear-gradient(180deg, #0E0A04 0%, #06030B 100%)",
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
          background: "radial-gradient(circle, rgba(245,158,11,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-3 border-b backdrop-blur-sm"
        style={{
          background: "rgba(20,14,5,0.85)",
          borderColor: "rgba(245,158,11,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <AurumMark size={20} />
          <span
            className="font-bold tracking-[0.2em] text-[13px]"
            style={{ color: "#F59E0B" }}
          >
            AURUM
          </span>
          <span
            className="text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded font-medium"
            style={{
              background: "rgba(245,158,11,0.10)",
              color: "#FBBF24",
              border: "1px solid rgba(245,158,11,0.22)",
            }}
          >
            Private
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] inline-flex items-center gap-1.5 font-mono"
            style={{ color: "#FBBF24" }}
          >
            <IconLockSquare size={9} stroke={1.5} />
            Secure session
          </span>
        </div>
      </div>

      <main className="relative flex-1 p-4 overflow-hidden">
        {/* Greeting */}
        <div className="mb-4">
          <div className="text-[9px] uppercase tracking-[0.25em]" style={{ color: "#A89968" }}>
            Welcome back
          </div>
          <h1 className="text-white text-xl font-semibold tracking-tight mt-1">
            Mr. Marcus Chen
          </h1>
          <p className="text-[11px] mt-1" style={{ color: "#A89968" }}>
            Portfolio as of <span style={{ color: "#FBBF24" }}>May 14, 2025 · 09:42 EST</span>
          </p>
        </div>

        {/* Hero number */}
        <div
          className="rounded-2xl p-5 border relative overflow-hidden mb-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,14,5,0.95) 0%, rgba(15,10,3,0.7) 100%)",
            borderColor: "rgba(245,158,11,0.22)",
            boxShadow: "0 20px 40px rgba(245,158,11,0.06)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.20), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 items-end">
            <div>
              <div
                className="text-[9px] uppercase tracking-[0.25em] mb-2"
                style={{ color: "#A89968" }}
              >
                Total portfolio value
              </div>
              <div
                className="font-bold text-white tabular-nums tracking-tighter leading-none"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  textShadow: "0 0 24px rgba(245,158,11,0.25)",
                }}
              >
                $3,174,521.46
              </div>
              <div
                className="text-[11px] mt-2 inline-flex items-center gap-2"
                style={{ color: "#FBBF24" }}
              >
                <IconArrowUpRight size={12} stroke={2.5} />
                <span className="font-mono tabular-nums">+$74,168.22</span>
                <span style={{ color: "#A89968" }}>this month · +2.4%</span>
              </div>
            </div>
            <div
              className="rounded-lg border p-3"
              style={{
                background: "rgba(10,7,2,0.4)",
                borderColor: "rgba(245,158,11,0.10)",
              }}
            >
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#A89968" }}>
                YTD return
              </div>
              <div className="text-white text-xl font-bold tabular-nums mt-0.5">
                +11.7%
              </div>
              <div className="text-[9px] mt-0.5" style={{ color: "#A89968" }}>
                vs benchmark{" "}
                <span style={{ color: "#FBBF24" }} className="tabular-nums">
                  +8.2%
                </span>
              </div>
              <div className="text-[8px] mt-1.5" style={{ color: "#FBBF24" }}>
                +3.5 pp alpha
              </div>
            </div>
          </div>
        </div>

        {/* Holdings + Docs */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-2.5">
          <div
            className="rounded-xl p-3 border"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
              borderColor: "rgba(245,158,11,0.15)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-[11px] font-semibold tracking-tight">
                Holdings
              </span>
              <span className="text-[9px]" style={{ color: "#A89968" }}>
                4 asset classes
              </span>
            </div>
            <div className="space-y-1.5">
              {HOLDINGS.map((h) => (
                <div
                  key={h.class}
                  className="rounded-md p-2 flex items-center gap-3"
                  style={{ background: "rgba(10,7,2,0.4)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: h.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-1">
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: "#e6c98e" }}
                      >
                        {h.class}
                      </span>
                      <span
                        className="text-[10px] font-mono tabular-nums"
                        style={{ color: "#FBBF24" }}
                      >
                        {h.value}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(245,158,11,0.06)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${h.pct}%`,
                          background: h.color,
                        }}
                      />
                    </div>
                  </div>
                  <span
                    className="text-[9px] font-mono shrink-0 tabular-nums"
                    style={{ color: "#34D399" }}
                  >
                    {h.return}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl p-3 border"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,14,5,0.92) 0%, rgba(15,10,3,0.6) 100%)",
              borderColor: "rgba(245,158,11,0.15)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-[11px] font-semibold tracking-tight">
                Documents
              </span>
              <IconCalendar size={10} stroke={1.5} color="#A89968" />
            </div>
            <ul className="space-y-1">
              {DOCS.map((d) => (
                <li
                  key={d.name}
                  className="rounded-md px-2 py-1.5 flex items-center gap-2"
                  style={{ background: "rgba(10,7,2,0.4)" }}
                >
                  <IconDownload
                    size={10}
                    stroke={1.5}
                    style={{ color: "#FBBF24" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] text-white font-medium truncate">
                        {d.name}
                      </span>
                      {d.new && (
                        <span
                          className="text-[7px] font-bold px-1 rounded font-mono"
                          style={{
                            background: "#F59E0B",
                            color: "#1a0e02",
                          }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="text-[8px]" style={{ color: "#A89968" }}>
                      {d.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              className="w-full mt-2.5 inline-flex items-center justify-center gap-1.5 text-[9px] font-semibold py-1.5 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(245,158,11,0.08))",
                color: "#F59E0B",
                border: "1px solid rgba(245,158,11,0.30)",
              }}
            >
              <IconMail size={10} stroke={1.5} />
              Message Eduard, your advisor
            </button>
          </div>
        </div>

        {/* Trust footer */}
        <div
          className="mt-3 rounded-md p-2.5 flex items-center gap-2 border"
          style={{
            background: "rgba(10,7,2,0.4)",
            borderColor: "rgba(245,158,11,0.08)",
          }}
        >
          <IconShieldCheck size={12} stroke={1.5} style={{ color: "#34D399" }} />
          <span className="text-[9px]" style={{ color: "#A89968" }}>
            SOC 2 Type II certified · End-to-end encrypted · GDPR &amp; FINRA compliant
          </span>
        </div>
      </main>
    </div>
  );
}
