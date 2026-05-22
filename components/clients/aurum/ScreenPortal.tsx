import { IconDownload, IconCalendar } from "@tabler/icons-react";
import { AurumMark } from "@/components/projects/BrandMarks";

const DOCS = [
  { name: "Q1 2025 Report", date: "May 1, 2025" },
  { name: "Annual Review 2024", date: "Jan 15, 2025" },
  { name: "Tax Summary 2024", date: "Feb 3, 2025" },
  { name: "Q4 2024 Report", date: "Jan 8, 2025" },
];

export function ScreenPortal() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#120D04" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{
          background: "#1A1206",
          borderColor: "rgba(217,119,6,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <AurumMark size={18} />
          <span
            className="font-semibold tracking-[0.2em] text-[12px]"
            style={{ color: "#D97706" }}
          >
            AURUM
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px]" style={{ color: "#8B6A2A" }}>
            Welcome back, Jonathan
          </span>
          <div
            className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[9px] font-semibold"
            style={{
              background: "#1A1206",
              color: "#D97706",
              border: "1px solid rgba(217,119,6,0.3)",
            }}
          >
            JA
          </div>
        </div>
      </div>

      <main className="flex-1 px-5 py-4 overflow-hidden flex flex-col gap-3">
        {/* Hero card */}
        <div
          className="rounded-2xl p-6 border relative overflow-hidden"
          style={{
            background: "#1A1206",
            borderColor: "rgba(217,119,6,0.2)",
          }}
        >
          <div
            className="absolute -right-12 -top-12 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217,119,6,0.15), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative">
            <div
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "#D97706" }}
            >
              Total Portfolio Value
            </div>
            <div
              className="font-black mt-1 tracking-tight leading-none"
              style={{ color: "#fff", fontSize: 42 }}
            >
              $2,467,320
            </div>
            <div className="text-[10px] mt-2" style={{ color: "#8B6A2A" }}>
              as of May 14, 2025 · 09:42 AM
            </div>
            <div
              className="text-[10px] font-semibold mt-2"
              style={{ color: "#D97706" }}
            >
              ↑ $54,280 this month (2.25%)
            </div>
          </div>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            {
              label: "Asset Allocation",
              value: "65 / 25 / 10",
              note: "Growth · Fixed · Cash",
            },
            {
              label: "YTD Return",
              value: "11.7%",
              note: "vs. target 9%",
            },
            {
              label: "Next Review",
              value: "June 3",
              note: "with Marcus Osei",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-md p-2.5 border"
              style={{
                background: "#1A1206",
                borderColor: "rgba(217,119,6,0.15)",
              }}
            >
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#6b4f1a" }}>
                {s.label}
              </div>
              <div className="text-white text-sm font-bold mt-0.5">{s.value}</div>
              <div className="text-[8px] mt-0.5" style={{ color: "#D97706" }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div
          className="rounded-md p-3 border flex-1 overflow-hidden flex flex-col"
          style={{
            background: "#1A1206",
            borderColor: "rgba(217,119,6,0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-[10px] font-semibold">
              My Documents
            </span>
            <span className="text-[8px]" style={{ color: "#8B6A2A" }}>
              4 documents
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            {DOCS.map((d) => (
              <div
                key={d.name}
                className="flex items-center justify-between py-1.5 px-2 rounded text-[9px] border"
                style={{
                  background: "#120D04",
                  borderColor: "rgba(217,119,6,0.08)",
                }}
              >
                <div>
                  <div className="text-white">{d.name}</div>
                  <div className="text-[8px]" style={{ color: "#6b4f1a" }}>
                    {d.date}
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-[8px]"
                  style={{ color: "#D97706" }}
                >
                  <IconDownload size={9} stroke={1.5} />
                  Download PDF
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="rounded-md p-3 flex items-center justify-between"
          style={{
            background: "rgba(217,119,6,0.08)",
            border: "1px solid rgba(217,119,6,0.15)",
          }}
        >
          <div>
            <div className="text-white text-[10px] font-semibold">
              Schedule a meeting with Marcus
            </div>
            <div className="text-[8px]" style={{ color: "#8B6A2A" }}>
              Next available · June 3, 2025
            </div>
          </div>
          <button
            className="text-[9px] px-3 py-1.5 rounded inline-flex items-center gap-1 font-semibold"
            style={{ background: "#D97706", color: "#000" }}
          >
            <IconCalendar size={10} stroke={2} />
            Book
          </button>
        </div>
      </main>
    </div>
  );
}
