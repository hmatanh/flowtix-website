import { IconRobot } from "@tabler/icons-react";
import { LinxMark } from "@/components/projects/BrandMarks";

const STATS = [
  { label: "Active Clients", value: "23", note: "+3 this quarter" },
  { label: "Proposals Sent", value: "7", note: "5 accepted (71%)" },
  { label: "Reports Generated", value: "23/23", note: "All auto-sent ✓" },
  { label: "Hours Saved (MTD)", value: "87h", note: "AI proposal 43h · Reports 44h" },
];

const CLIENTS = [
  { name: "Brew Republic", monthly: "$9,500", next: "Jun 1", actions: 3, status: "active" },
  { name: "NordFlex", monthly: "$12,000", next: "Jun 3", actions: 5, status: "active" },
  { name: "Starfall Drinks", monthly: "$7,000", next: "Jun 1", actions: 2, status: "active" },
  { name: "Pavilion Co.", monthly: "$8,500", next: "Jun 5", actions: 4, status: "review" },
  { name: "Lumen Studios", monthly: "$11,200", next: "Jun 2", actions: 6, status: "active" },
  { name: "Origin Brand", monthly: "$6,800", next: "Jun 4", actions: 2, status: "active" },
  { name: "Halcyon Coffee", monthly: "$5,400", next: "Jun 6", actions: 1, status: "active" },
  { name: "Ridge Outdoor", monthly: "$8,900", next: "Jun 8", actions: 3, status: "review" },
];

const AUTOMATION = [
  { title: "Reports sent", value: "4", detail: "Brew Republic, NordFlex, Starfall, Lumen" },
  { title: "Proposals generated", value: "1", detail: "Ridge Outdoor" },
  { title: "Brief intakes processed", value: "2", detail: "2 in review, 0 pending" },
];

export function ScreenDashboard() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#0C0814" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{
          background: "#12102A",
          borderColor: "rgba(139,92,246,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <LinxMark color="#8B5CF6" />
          <span
            className="font-black text-[12px]"
            style={{ color: "#8B5CF6" }}
          >
            LINX Studio
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px]" style={{ color: "#9b8ab4" }}>
            Wed, May 14
          </span>
          <span
            className="text-[9px] px-2 py-1 rounded-full"
            style={{
              background: "rgba(139,92,246,0.18)",
              color: "#A78BFA",
            }}
          >
            23 active clients
          </span>
          <div
            className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[9px] font-semibold"
            style={{ background: "#8B5CF6", color: "#fff" }}
          >
            PN
          </div>
        </div>
      </div>

      <main className="flex-1 px-4 py-3 overflow-hidden flex flex-col">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-md p-2.5 border"
              style={{
                background: "#12102A",
                borderColor: "rgba(139,92,246,0.15)",
              }}
            >
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#6b4a8a" }}>
                {s.label}
              </div>
              <div className="text-white text-lg font-bold leading-tight mt-0.5">
                {s.value}
              </div>
              <div className="text-[8px] mt-0.5" style={{ color: "#A78BFA" }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Clients table */}
        <div
          className="mt-3 rounded-md border overflow-hidden flex-1 min-h-0 flex flex-col"
          style={{
            background: "#12102A",
            borderColor: "rgba(139,92,246,0.15)",
          }}
        >
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-white text-[10px] font-semibold">Active Clients</span>
            <span className="text-[8px]" style={{ color: "#6b4a8a" }}>
              Showing 8 of 23
            </span>
          </div>
          <div className="px-3 grid grid-cols-[2fr_1fr_1fr_1fr_1.2fr] gap-2 py-1.5 text-[8px] uppercase tracking-wider border-t border-b"
            style={{
              color: "#6b4a8a",
              borderColor: "rgba(139,92,246,0.08)",
            }}>
            <span>Client</span>
            <span>Status</span>
            <span>Monthly</span>
            <span>Next Report</span>
            <span>AI Actions</span>
          </div>
          <div className="flex-1 overflow-hidden">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="px-3 grid grid-cols-[2fr_1fr_1fr_1fr_1.2fr] gap-2 py-1.5 text-[9px] border-b"
                style={{ borderColor: "rgba(139,92,246,0.06)", color: "#DDD6FE" }}
              >
                <span className="truncate">{c.name}</span>
                <span className="inline-flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      background:
                        c.status === "active" ? "#10B981" : "#F59E0B",
                    }}
                  />
                  <span style={{ color: "#9b8ab4" }}>
                    {c.status === "active" ? "Active" : "Review"}
                  </span>
                </span>
                <span style={{ color: "#A78BFA" }}>{c.monthly}</span>
                <span style={{ color: "#9b8ab4" }}>{c.next}</span>
                <span
                  className="inline-flex items-center gap-1"
                  style={{ color: "#A78BFA" }}
                >
                  <IconRobot size={9} stroke={1.5} />
                  {c.actions} automations
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Automation activity */}
        <div className="mt-3">
          <div
            className="text-[9px] uppercase tracking-wider mb-1.5"
            style={{ color: "#6b4a8a" }}
          >
            Automation Activity Today
          </div>
          <div className="grid grid-cols-3 gap-2">
            {AUTOMATION.map((a) => (
              <div
                key={a.title}
                className="rounded-md p-2.5 border"
                style={{
                  background: "#12102A",
                  borderColor: "rgba(139,92,246,0.15)",
                }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[8px]" style={{ color: "#6b4a8a" }}>
                    {a.title}
                  </span>
                  <span className="text-white text-sm font-bold">{a.value}</span>
                </div>
                <div
                  className="text-[8px] mt-1 leading-tight truncate"
                  style={{ color: "#9b8ab4" }}
                >
                  {a.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
