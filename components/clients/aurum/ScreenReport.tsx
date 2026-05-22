import { IconRobot } from "@tabler/icons-react";
import { AurumMark } from "@/components/projects/BrandMarks";

const REPORTS = [
  { client: "J. ●●●●●●●", quarter: "Q1 2025", status: "done", active: true },
  { client: "S. ●●●●●●●●", quarter: "Q1 2025", status: "pending" },
  { client: "M. ●●●●", quarter: "Q1 2025", status: "done" },
  { client: "T. ●●●●●", quarter: "Q1 2025", status: "done" },
  { client: "K. ●●●●●●●", quarter: "Annual", status: "pending" },
];

function statusPill(status: string, active: boolean) {
  if (active) return { bg: "rgba(217,119,6,0.25)", text: "#FBBF24", label: "Active" };
  if (status === "done") return { bg: "rgba(16,185,129,0.18)", text: "#34D399", label: "Delivered ✓" };
  return { bg: "rgba(245,158,11,0.15)", text: "#FCD34D", label: "Pending review" };
}

export function ScreenReport() {
  return (
    <div className="w-full h-full flex" style={{ background: "#120D04" }}>
      {/* Sidebar — report list */}
      <aside
        className="w-48 sm:w-56 border-r p-3 overflow-hidden"
        style={{
          background: "#0F0903",
          borderColor: "rgba(217,119,6,0.15)",
        }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <AurumMark size={14} />
          <span
            className="text-[10px] font-semibold tracking-[0.2em]"
            style={{ color: "#D97706" }}
          >
            AURUM
          </span>
        </div>
        <div className="text-[9px] uppercase tracking-widest" style={{ color: "#6b4f1a" }}>
          Q1 2025 Reports
        </div>
        <div className="mt-2 space-y-1.5">
          {REPORTS.map((r) => {
            const p = statusPill(r.status, r.active ?? false);
            return (
              <div
                key={r.client}
                className="rounded-md p-2 border"
                style={{
                  background: "#1A1206",
                  borderColor: r.active
                    ? "rgba(217,119,6,0.4)"
                    : "rgba(217,119,6,0.1)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px] font-medium tracking-wide"
                    style={{ color: "#FDE68A" }}
                  >
                    {r.client}
                  </span>
                  <IconRobot size={9} stroke={1.5} color="#D97706" />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[8px]" style={{ color: "#6b4f1a" }}>
                    {r.quarter}
                  </span>
                  <span
                    className="text-[7px] px-1.5 py-0.5 rounded font-semibold"
                    style={{ background: p.bg, color: p.text }}
                  >
                    {p.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[8px] mt-3 leading-tight" style={{ color: "#6b4f1a" }}>
          Generated automatically every quarter. Delivered before your client asks.
        </div>
      </aside>

      {/* Preview area */}
      <main
        className="flex-1 flex items-center justify-center p-6"
        style={{
          background:
            "radial-gradient(ellipse at center, #1A1206, #120D04 70%)",
        }}
      >
        <div className="flex flex-col items-center">
          {/* PDF report card */}
          <div
            className="rounded-md w-44 sm:w-48 aspect-[210/297] relative overflow-hidden border"
            style={{
              background: "#1A1206",
              borderColor: "rgba(217,119,6,0.3)",
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0px, transparent 6px, rgba(217,119,6,0.025) 6px, rgba(217,119,6,0.025) 8px)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Top gold band */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #D97706, transparent)",
              }}
            />

            <div className="p-5 h-full flex flex-col items-center text-center">
              <div className="mt-4">
                <AurumMark size={36} />
              </div>
              <div
                className="font-semibold tracking-[0.25em] text-sm mt-3"
                style={{ color: "#D97706" }}
              >
                AURUM
              </div>
              <div
                className="h-px w-12 mt-3"
                style={{ background: "rgba(217,119,6,0.5)" }}
              />

              <div
                className="font-serif italic mt-6 text-[11px] leading-tight"
                style={{ color: "#FDE68A" }}
              >
                Portfolio
                <br />
                Intelligence Report
              </div>
              <div className="text-[8px] mt-2" style={{ color: "#8B6A2A" }}>
                First Quarter 2025
              </div>

              <div
                className="h-px w-12 mt-3"
                style={{ background: "rgba(217,119,6,0.5)" }}
              />

              <div
                className="text-[8px] italic mt-3 leading-tight"
                style={{ color: "#FDE68A", opacity: 0.85 }}
              >
                Prepared for
                <br />
                ██████ ██████████
              </div>
              <div className="text-[7px] mt-2 font-mono" style={{ color: "#6b4f1a" }}>
                Account ●●●●●●●7842
              </div>
              <div className="text-[7px] mt-1" style={{ color: "#6b4f1a" }}>
                Advisor · Marcus Osei
              </div>

              <div className="mt-auto pt-3 w-full">
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(217,119,6,0.25)" }}
                />
                <div
                  className="text-[6px] mt-1.5 tracking-widest uppercase"
                  style={{ color: "#6b4f1a" }}
                >
                  Confidential · Private Wealth
                </div>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="text-center mt-4">
            <div className="text-[10px]" style={{ color: "#8B6A2A" }}>
              12 pages · Generated in 8 seconds · Auto-delivered
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
