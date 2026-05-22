import {
  IconLayoutDashboard,
  IconMapSearch,
  IconUsers,
  IconRobot,
  IconChartLine,
  IconSettings,
  IconSearch,
  IconBell,
} from "@tabler/icons-react";
import { KovaMark } from "@/components/projects/BrandMarks";

const NAV = [
  { icon: IconLayoutDashboard, label: "Dashboard", active: true },
  { icon: IconMapSearch, label: "Properties" },
  { icon: IconUsers, label: "Clients" },
  { icon: IconRobot, label: "AI Matching" },
  { icon: IconChartLine, label: "Analytics" },
  { icon: IconSettings, label: "Settings" },
];

const STATS = [
  { label: "Active Listings", value: "47", trend: "↑ 12 this week" },
  { label: "Matched Leads", value: "23", trend: "↑ 9 new overnight" },
  { label: "Viewings Today", value: "6", trend: "2 confirmed, 4 pending" },
  { label: "Pipeline Value", value: "$4.2M", trend: "↑ $340K this month" },
];

const MATCHES = [
  { name: "Elm Court, Unit 4B", meta: "3 bed · 2 bath · 92m²", price: "$485,000", score: "94%", tier: "high" },
  { name: "Hawthorn Terrace 12", meta: "4 bed · 3 bath · 140m²", price: "$612,000", score: "87%", tier: "mid" },
  { name: "Lakeside Loft 3A", meta: "2 bed · 1 bath · 78m²", price: "$398,000", score: "76%", tier: "low" },
];

const ACTIVITY = [
  { color: "#10B981", text: "Email sent to Marcus T.", time: "2 min ago" },
  { color: "#0EA5E9", text: "Property matched to 3 clients", time: "15 min ago" },
  { color: "#10B981", text: "Viewing confirmed — 14:00", time: "1 hr ago" },
  { color: "#F59E0B", text: "Follow-up scheduled", time: "2 hr ago" },
  { color: "#10B981", text: "New lead auto-responded", time: "3 hr ago" },
];

export function ScreenDashboard() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#0A1628" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "#0C1A2E", borderColor: "rgba(14,165,233,0.15)" }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <KovaMark size={18} />
          <span
            className="font-bold tracking-tight text-[13px]"
            style={{ color: "#0EA5E9" }}
          >
            kova
          </span>
        </div>
        <div
          className="hidden sm:flex items-center gap-2 flex-1 max-w-md mx-4 px-3 py-1 rounded-md text-[10px]"
          style={{ background: "#0D1F38", color: "#4a6b8a" }}
        >
          <IconSearch size={11} stroke={1.5} />
          Search properties, clients, areas...
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <IconBell size={12} stroke={1.5} color="#4a6b8a" />
          <div
            className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[9px] font-semibold"
            style={{ background: "#0EA5E9", color: "#000" }}
          >
            SM
          </div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <aside
          className="w-32 sm:w-36 border-r p-2.5 flex flex-col"
          style={{ background: "#080F1C", borderColor: "rgba(14,165,233,0.15)" }}
        >
          <div className="space-y-0.5">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[9px]"
                style={
                  item.active
                    ? {
                        background: "rgba(14,165,233,0.12)",
                        color: "#0EA5E9",
                        borderLeft: "2px solid #0EA5E9",
                      }
                    : { color: "#4a6b8a" }
                }
              >
                <item.icon size={11} stroke={1.5} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div
            className="mt-auto pt-3 border-t flex items-center gap-2"
            style={{ borderColor: "rgba(14,165,233,0.1)" }}
          >
            <div
              className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[8px] font-bold relative"
              style={{ background: "#0EA5E9", color: "#000" }}
            >
              SM
              <span
                className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                style={{ background: "#10B981", border: "1px solid #080F1C" }}
              />
            </div>
            <div className="min-w-0">
              <div className="text-white text-[9px] truncate">Sarah Moran</div>
              <div className="text-[8px]" style={{ color: "#4a6b8a" }}>
                Senior Agent
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-3 sm:p-4 overflow-hidden">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h1 className="text-white text-sm font-bold">Good morning, Sarah 👋</h1>
            <span className="text-[9px]" style={{ color: "#4a6b8a" }}>
              Wed, May 14 · 9 properties matched overnight
            </span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-md p-2.5 border"
                style={{ background: "#0D1F38", borderColor: "rgba(14,165,233,0.15)" }}
              >
                <div className="text-[8px]" style={{ color: "#4a6b8a" }}>
                  {s.label}
                </div>
                <div className="text-white text-lg font-bold leading-tight mt-0.5">
                  {s.value}
                </div>
                <div className="text-[8px] mt-0.5" style={{ color: "#0EA5E9" }}>
                  {s.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Two-column row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3 mt-3 flex-1 min-h-0">
            <div
              className="rounded-md p-3 border"
              style={{ background: "#0D1F38", borderColor: "rgba(14,165,233,0.15)" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <IconRobot size={11} stroke={1.5} color="#0EA5E9" />
                  <span className="text-white text-[10px] font-semibold">
                    AI Matches (Last 24h)
                  </span>
                </div>
                <span className="text-[9px]" style={{ color: "#0EA5E9" }}>
                  View 23 →
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                {MATCHES.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-md p-2 flex items-center gap-2.5"
                    style={{ background: "#0C1A2E" }}
                  >
                    <div className="relative shrink-0">
                      <div
                        className="w-9 h-9 rounded-md"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(14,165,233,0.35), rgba(14,165,233,0.08))",
                        }}
                      />
                      <span
                        className="absolute -top-0.5 -right-0.5 text-[7px] font-bold px-1 rounded-sm"
                        style={{ background: "#0EA5E9", color: "#000" }}
                      >
                        AI
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-[10px] font-medium truncate">
                        {m.name}
                      </div>
                      <div className="text-[8px]" style={{ color: "#4a6b8a" }}>
                        {m.meta}
                      </div>
                      <div className="text-[10px] font-semibold" style={{ color: "#0EA5E9" }}>
                        {m.price}
                      </div>
                    </div>
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
                      style={
                        m.tier === "high"
                          ? { background: "rgba(16,185,129,0.18)", color: "#34D399" }
                          : m.tier === "mid"
                          ? { background: "rgba(14,165,233,0.18)", color: "#7dd3fc" }
                          : { background: "rgba(245,158,11,0.18)", color: "#fbbf24" }
                      }
                    >
                      {m.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-md p-3 border"
              style={{ background: "#0D1F38", borderColor: "rgba(14,165,233,0.15)" }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <IconRobot size={11} stroke={1.5} color="#0EA5E9" />
                <span className="text-white text-[10px] font-semibold">
                  Automated Actions
                </span>
              </div>
              <ul>
                {ACTIVITY.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 py-1 border-b last:border-0"
                    style={{ borderColor: "rgba(14,165,233,0.08)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: a.color }}
                    />
                    <span className="text-[9px] flex-1 truncate" style={{ color: "#7ab3d0" }}>
                      {a.text}
                    </span>
                    <span className="text-[8px] shrink-0" style={{ color: "#2a4a6a" }}>
                      {a.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
