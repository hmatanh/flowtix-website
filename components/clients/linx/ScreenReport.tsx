import { LinxMark } from "@/components/projects/BrandMarks";
import { IconArrowUpRight, IconRobot } from "@tabler/icons-react";

/* ============================================================
   LINX — AI Monthly Campaign Report
   Branded PDF preview with charts
   ============================================================ */

const METRICS = [
  { label: "Spend", value: "$28,450", delta: "+12%", positive: true },
  { label: "Conversions", value: "1,247", delta: "+47%", positive: true },
  { label: "CPA", value: "$22.81", delta: "-18%", positive: true },
  { label: "ROAS", value: "4.2×", delta: "+34%", positive: true },
];

const CHANNELS = [
  { name: "Meta", spend: 12400, conversions: 612, color: "#8B5CF6" },
  { name: "Google", spend: 9800, conversions: 421, color: "#A78BFA" },
  { name: "TikTok", spend: 4250, conversions: 168, color: "#C4B5FD" },
  { name: "Email", spend: 2000, conversions: 46, color: "#6D28D9" },
];

export function ScreenReport() {
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
          <span className="text-white text-[12px] font-semibold tracking-tight">
            Brew Republic · April 2025
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
            Auto-generated
          </span>
        </div>
        <span className="text-[9px] font-mono" style={{ color: "#A78BFA" }}>
          Delivered May 1 · 08:00
        </span>
      </div>

      <main className="relative flex-1 p-3 overflow-hidden">
        {/* Report document */}
        <div
          className="rounded-xl border overflow-hidden h-full flex flex-col"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,242,250,0.97) 0%, rgba(230,220,245,0.92) 100%)",
            borderColor: "rgba(139,92,246,0.25)",
            color: "#1f1438",
          }}
        >
          {/* Letterhead */}
          <div
            className="px-5 py-3 border-b flex items-center justify-between"
            style={{ borderColor: "rgba(31,20,56,0.15)" }}
          >
            <div className="flex items-center gap-2">
              <LinxMark size={18} />
              <span
                className="font-bold tracking-tight text-[13px]"
                style={{ color: "#6D28D9" }}
              >
                linx
              </span>
              <span className="text-[8px] font-mono" style={{ color: "#5a5070" }}>
                · monthly performance
              </span>
            </div>
            <span
              className="text-[9px] font-mono uppercase tracking-[0.2em]"
              style={{ color: "#5a5070" }}
            >
              CONFIDENTIAL
            </span>
          </div>

          <div className="px-5 py-4 flex-1 overflow-hidden">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(16px, 2.4vw, 22px)",
                color: "#1f1438",
              }}
            >
              Brew Republic · April 2025
            </h2>
            <p className="text-[10px] mt-1" style={{ color: "#5a5070" }}>
              Strongest month yet. ROAS up <strong style={{ color: "#6D28D9" }}>34%</strong> on a 12% spend increase.
            </p>

            {/* Metric grid */}
            <div className="mt-3 grid grid-cols-4 gap-2">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-md p-2 border"
                  style={{
                    background: "rgba(139,92,246,0.06)",
                    borderColor: "rgba(139,92,246,0.20)",
                  }}
                >
                  <div
                    className="text-[8px] uppercase tracking-wider"
                    style={{ color: "#5a5070" }}
                  >
                    {m.label}
                  </div>
                  <div className="text-base font-bold tabular-nums mt-0.5" style={{ color: "#1f1438" }}>
                    {m.value}
                  </div>
                  <div
                    className="text-[9px] mt-0.5 inline-flex items-center gap-0.5 font-medium"
                    style={{ color: m.positive ? "#059669" : "#DC2626" }}
                  >
                    <IconArrowUpRight size={8} stroke={2.5} />
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Channel breakdown */}
            <div className="mt-3">
              <div
                className="text-[8px] uppercase tracking-wider mb-1.5"
                style={{ color: "#5a5070" }}
              >
                Channel breakdown
              </div>
              <div className="space-y-1.5">
                {CHANNELS.map((c) => {
                  const totalSpend = CHANNELS.reduce(
                    (acc, ch) => acc + ch.spend,
                    0
                  );
                  const pct = (c.spend / totalSpend) * 100;
                  return (
                    <div key={c.name} className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: "#1f1438", width: 60 }}
                      >
                        {c.name}
                      </span>
                      <div
                        className="flex-1 h-2 rounded-full overflow-hidden"
                        style={{ background: "rgba(139,92,246,0.10)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: c.color,
                          }}
                        />
                      </div>
                      <span
                        className="text-[9px] font-mono tabular-nums shrink-0"
                        style={{ color: "#5a5070", width: 56 }}
                      >
                        ${c.spend.toLocaleString()}
                      </span>
                      <span
                        className="text-[9px] font-bold tabular-nums shrink-0"
                        style={{ color: "#6D28D9", width: 36 }}
                      >
                        {c.conversions}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Insight box */}
            <div
              className="mt-3 rounded-md p-3 border"
              style={{
                background: "rgba(139,92,246,0.10)",
                borderColor: "rgba(139,92,246,0.30)",
              }}
            >
              <div
                className="text-[9px] uppercase tracking-wider font-bold mb-1"
                style={{ color: "#6D28D9" }}
              >
                AI insight · what to do next
              </div>
              <p className="text-[10px] leading-snug" style={{ color: "#1f1438" }}>
                Meta CPC is at its 3-month low. Shift{" "}
                <strong style={{ color: "#6D28D9" }}>$1,800</strong> from Google
                Brand search to Meta retargeting for May. Projected lift:{" "}
                <strong style={{ color: "#059669" }}>+22 conversions</strong>.
              </p>
            </div>
          </div>

          <div
            className="px-5 py-2.5 border-t flex items-center justify-between"
            style={{
              background: "rgba(139,92,246,0.06)",
              borderColor: "rgba(31,20,56,0.10)",
            }}
          >
            <span className="text-[9px] font-mono" style={{ color: "#5a5070" }}>
              Generated by Linx AI · pulls from Meta, Google, GA4, Klaviyo
            </span>
            <span
              className="text-[9px] font-medium"
              style={{ color: "#6D28D9" }}
            >
              Page 1 of 4
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
