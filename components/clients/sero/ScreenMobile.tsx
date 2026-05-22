import {
  IconHome,
  IconCalendar,
  IconUser,
  IconHeart,
  IconChevronRight,
  IconStethoscope,
  IconBell,
} from "@tabler/icons-react";

/* ============================================================
   SERŌ — Patient Mobile App
   Calm, breathable health UI: rounded soft surfaces,
   appointment hero card, wellness metrics, action list.
   ============================================================ */

export function ScreenMobile() {
  return (
    <div
      className="w-full h-full flex flex-col relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.10), transparent 60%), linear-gradient(180deg, #051A12 0%, #03100B 100%)",
      }}
    >
      {/* Status bar */}
      <div
        className="relative flex items-center justify-between px-4 py-2 text-[9px] font-medium"
        style={{ color: "#a7d5c0" }}
      >
        <span className="font-mono tabular-nums">09:42</span>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded-sm bg-current opacity-80" />
          <span className="w-3 h-1.5 rounded-sm bg-current opacity-60" />
          <span className="w-4 h-2 rounded-sm border border-current relative">
            <span className="absolute inset-0.5 rounded-[1px]" style={{ background: "#34D399", width: "85%" }} />
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="relative px-5 pt-1 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-wider" style={{ color: "#7ab8a0" }}>
              Good morning
            </div>
            <div className="text-white text-lg font-semibold tracking-tight mt-0.5">
              Anna
            </div>
          </div>
          <div className="relative">
            <div
              className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[11px] font-semibold"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                color: "#021a0f",
              }}
            >
              AS
            </div>
            <span
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full inline-flex items-center justify-center text-[7px] font-bold"
              style={{ background: "#F59E0B", color: "#1a0e02" }}
            >
              2
            </span>
          </div>
        </div>
      </div>

      <main className="relative flex-1 px-5 space-y-3 overflow-hidden">
        {/* Hero appointment card */}
        <div
          className="rounded-2xl p-4 border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(5,26,18,0.6) 60%)",
            borderColor: "rgba(16,185,129,0.30)",
            boxShadow: "0 20px 40px rgba(16,185,129,0.10)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-8 -right-8 w-32 h-32 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.25), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span
                className="text-[9px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "#6ee7b7" }}
              >
                Next appointment
              </span>
              <span className="text-[9px] font-mono" style={{ color: "#6ee7b7" }}>
                Today · 14:00
              </span>
            </div>
            <h2 className="text-white text-lg font-semibold tracking-tight mt-2">
              Dr. Murray
            </h2>
            <p className="text-[11px] mt-0.5" style={{ color: "#a7d5c0" }}>
              Follow-up consultation · 30 min
            </p>

            <div className="mt-3 flex items-center gap-2 pt-3 border-t" style={{ borderColor: "rgba(16,185,129,0.18)" }}>
              <div
                className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #10B981, #047857)",
                  color: "#021a0f",
                }}
              >
                DM
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-white font-medium">
                  Sun Clinic · Floor 3
                </div>
                <div className="text-[9px]" style={{ color: "#7ab8a0" }}>
                  Arrive 10 min early
                </div>
              </div>
              <button
                className="text-[10px] font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1"
                style={{
                  background: "#10B981",
                  color: "#021a0f",
                  boxShadow: "0 0 12px rgba(16,185,129,0.4)",
                }}
              >
                Check in
                <IconChevronRight size={10} stroke={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: IconCalendar, label: "Book", color: "#10B981" },
            { icon: IconStethoscope, label: "Symptoms", color: "#6ee7b7" },
            { icon: IconHeart, label: "Refills", color: "#34D399" },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <button
                key={a.label}
                className="rounded-xl py-3 border flex flex-col items-center gap-1 transition-colors"
                style={{
                  background: "rgba(7,31,21,0.7)",
                  borderColor: "rgba(16,185,129,0.15)",
                }}
              >
                <Icon size={16} stroke={1.5} style={{ color: a.color }} />
                <span className="text-[10px] font-medium" style={{ color: "#e0f5e9" }}>
                  {a.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Wellness summary */}
        <div
          className="rounded-xl p-3 border"
          style={{
            background: "rgba(7,31,21,0.7)",
            borderColor: "rgba(16,185,129,0.12)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-[11px] font-semibold tracking-tight">
              This week
            </span>
            <span className="text-[9px]" style={{ color: "#7ab8a0" }}>
              View report
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Sleep", value: "7.2h", trend: "+12%", color: "#34D399" },
              { label: "Steps", value: "8.4k", trend: "+3%", color: "#10B981" },
              { label: "Active min", value: "42", trend: "stable", color: "#6ee7b7" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-white text-sm font-bold tabular-nums">
                  {m.value}
                </div>
                <div className="text-[8px]" style={{ color: "#7ab8a0" }}>
                  {m.label}
                </div>
                <div className="text-[8px] mt-0.5" style={{ color: m.color }}>
                  {m.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div
          className="rounded-xl p-3 border"
          style={{
            background: "rgba(7,31,21,0.7)",
            borderColor: "rgba(16,185,129,0.12)",
          }}
        >
          <div className="text-white text-[11px] font-semibold tracking-tight mb-2">
            Latest from Dr. Murray
          </div>
          <div
            className="rounded-lg p-2.5 border"
            style={{
              background: "rgba(16,185,129,0.08)",
              borderColor: "rgba(16,185,129,0.20)",
            }}
          >
            <p className="text-[10px] leading-relaxed" style={{ color: "#cce5d5" }}>
              <span style={{ color: "#10B981", fontWeight: 600 }}>
                Lab results in.
              </span>{" "}
              All within normal range. We&apos;ll discuss specifics at today&apos;s
              visit. No action needed.
            </p>
            <div className="text-[8px] mt-1.5 font-mono" style={{ color: "#7ab8a0" }}>
              2 hours ago
            </div>
          </div>
        </div>
      </main>

      {/* Bottom nav */}
      <nav
        className="relative grid grid-cols-4 gap-1 px-5 py-3 border-t"
        style={{
          background: "rgba(7,31,21,0.85)",
          borderColor: "rgba(16,185,129,0.12)",
          paddingBottom: "max(12px, env(safe-area-inset-bottom))",
        }}
      >
        {[
          { icon: IconHome, label: "Home", active: true },
          { icon: IconCalendar, label: "Appts" },
          { icon: IconHeart, label: "Health" },
          { icon: IconUser, label: "Profile" },
        ].map((n) => {
          const Icon = n.icon;
          return (
            <button
              key={n.label}
              className="flex flex-col items-center gap-1"
              style={{ color: n.active ? "#10B981" : "#5a8a7a" }}
            >
              <Icon size={16} stroke={n.active ? 2 : 1.5} />
              <span className="text-[8px] font-medium">{n.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
