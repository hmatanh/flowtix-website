import { LinxMark } from "@/components/projects/BrandMarks";

const METRICS = [
  { label: "Impressions", value: "847K", trend: "↑ 23%" },
  { label: "Engagements", value: "42.1K", trend: "↑ 31%" },
  { label: "Conversions", value: "1,284", trend: "↑ 18%" },
];

const BARS = [55, 72, 68, 88, 74, 92, 85];

export function ScreenReport() {
  return (
    <div className="w-full h-full flex" style={{ background: "#0C0814" }}>
      {/* Left — list of reports */}
      <aside
        className="w-44 sm:w-48 border-r p-3 overflow-hidden"
        style={{
          background: "#0a0612",
          borderColor: "rgba(139,92,246,0.15)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <LinxMark color="#8B5CF6" />
          <span
            className="font-black text-[11px]"
            style={{ color: "#8B5CF6" }}
          >
            LINX
          </span>
        </div>
        <div className="text-[8px] uppercase tracking-wider mb-2" style={{ color: "#6b4a8a" }}>
          May 2025 Reports
        </div>
        <div className="space-y-1.5">
          {[
            { name: "Brew Republic", status: "active" },
            { name: "NordFlex", status: "sent" },
            { name: "Starfall Drinks", status: "sent" },
            { name: "Pavilion Co.", status: "scheduled" },
            { name: "Lumen Studios", status: "sent" },
          ].map((r, i) => (
            <div
              key={r.name}
              className="rounded p-2 border text-[9px]"
              style={
                r.status === "active"
                  ? {
                      background: "#12102A",
                      borderColor: "rgba(139,92,246,0.5)",
                      borderLeft: "2px solid #8B5CF6",
                    }
                  : {
                      background: "#12102A",
                      borderColor: "rgba(139,92,246,0.1)",
                    }
              }
            >
              <div className="text-white font-medium truncate">{r.name}</div>
              <div
                className="text-[8px] mt-0.5"
                style={{
                  color:
                    r.status === "sent"
                      ? "#34D399"
                      : r.status === "scheduled"
                      ? "#FCD34D"
                      : "#A78BFA",
                }}
              >
                {r.status === "sent"
                  ? "✓ Delivered"
                  : r.status === "scheduled"
                  ? "⏳ Scheduled"
                  : "📄 Active"}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Preview */}
      <main
        className="flex-1 p-4 overflow-hidden flex flex-col items-center"
        style={{
          background:
            "radial-gradient(ellipse at top, #12102A, #0C0814 70%)",
        }}
      >
        {/* PDF preview */}
        <div
          className="rounded-md w-40 sm:w-44 aspect-[210/297] border overflow-hidden relative"
          style={{
            background: "#12102A",
            borderColor: "rgba(139,92,246,0.3)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="h-2 w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #8B5CF6 50%, transparent)",
            }}
          />
          <div className="p-3 h-full flex flex-col items-center text-center">
            <div className="mt-3 flex items-center gap-1.5">
              <LinxMark color="#8B5CF6" />
              <span
                className="font-black text-[10px]"
                style={{ color: "#8B5CF6" }}
              >
                LINX
              </span>
            </div>
            <div
              className="h-px w-10 mt-3"
              style={{ background: "rgba(139,92,246,0.5)" }}
            />
            <div
              className="text-[8px] uppercase tracking-widest mt-3 font-semibold"
              style={{ color: "#DDD6FE" }}
            >
              Monthly Performance
              <br />
              Report
            </div>
            <div className="text-[8px] mt-1.5" style={{ color: "#9b8ab4" }}>
              May 2025
            </div>
            <div
              className="h-px w-10 mt-3"
              style={{ background: "rgba(139,92,246,0.5)" }}
            />
            <div className="text-[8px] mt-3" style={{ color: "#DDD6FE", opacity: 0.85 }}>
              Prepared for
              <br />
              <span className="font-semibold">BREW REPUBLIC</span>
            </div>
            <div className="text-[7px] mt-1" style={{ color: "#9b8ab4" }}>
              Campaign: Brand Awareness Q2
            </div>
            <div className="text-[7px] mt-0.5" style={{ color: "#9b8ab4" }}>
              Account Manager · Priya Nair
            </div>
            <div className="mt-auto pb-2 w-full">
              <div
                className="rounded-sm py-1.5 text-[6px] tracking-[0.2em] uppercase"
                style={{
                  background: "#1A1535",
                  color: "#6b4a8a",
                }}
              >
                Generated by AI · Auto-delivered · LINX.AGENCY
              </div>
            </div>
          </div>
        </div>

        {/* Inline metrics card */}
        <div
          className="mt-4 rounded-md p-3 border w-full max-w-md"
          style={{
            background: "#12102A",
            borderColor: "rgba(139,92,246,0.15)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#A78BFA" }}
          >
            Page 2 · Campaign Summary
          </div>
          <div className="grid grid-cols-3 gap-2">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-[8px]" style={{ color: "#6b4a8a" }}>
                  {m.label}
                </div>
                <div className="text-white text-[14px] font-bold">{m.value}</div>
                <div className="text-[8px]" style={{ color: "#A78BFA" }}>
                  {m.trend}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-10 mt-3">
            {BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: "#8B5CF6",
                  opacity: 0.3 + h / 200,
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="text-[8px] mt-3 text-center"
          style={{ color: "#6b4a8a" }}
        >
          8 pages · Generated automatically · Delivered May 1 at 08:00 AM
        </div>
      </main>
    </div>
  );
}
