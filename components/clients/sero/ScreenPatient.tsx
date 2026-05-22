import { IconRobot, IconBell } from "@tabler/icons-react";
import { SeroMark } from "@/components/projects/BrandMarks";

const STATS = [
  { label: "Today's Appointments", value: "8", note: "2 urgent, 6 routine" },
  { label: "Intake Queue", value: "3", note: "AI processed · Ready" },
  { label: "Avg. Wait Time", value: "4 min", note: "↓ 18 min vs last week" },
  { label: "No-Shows (MTD)", value: "2.1%", note: "↓ 41% vs last month" },
];

const INTAKES = [
  {
    id: "#2847",
    priority: "Routine",
    color: "#10B981",
    bg: "rgba(16,185,129,0.18)",
    complaint: "Lower back pain, onset 3 days ago, radiating to left leg",
    suggest: "Physio referral · Imaging not urgent",
  },
  {
    id: "#2848",
    priority: "Priority",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.18)",
    complaint: "Persistent cough, 2 weeks, mild fever",
    suggest: "Chest X-ray · Consider antibiotics",
  },
  {
    id: "#2849",
    priority: "Routine",
    color: "#10B981",
    bg: "rgba(16,185,129,0.18)",
    complaint: "Annual checkup, no current symptoms",
    suggest: "Standard panel · Blood work",
  },
];

const SCHEDULE = [
  { time: "09:00", patient: "Patient #2844", type: "General checkup", state: "confirmed" },
  { time: "09:20", patient: "Patient #2845", type: "Follow-up", state: "confirmed" },
  { time: "09:40", patient: "", type: "Available slot", state: "open" },
  { time: "10:00", patient: "Patient #2846", type: "New patient intake", state: "pending" },
  { time: "10:20", patient: "Patient #2847", type: "AI: New intake", state: "ai" },
  { time: "10:40", patient: "Patient #2848", type: "Priority consult", state: "priority" },
  { time: "11:00", patient: "Patient #2849", type: "Annual physical", state: "confirmed" },
];

function slotColor(state: string) {
  if (state === "confirmed") return { bg: "rgba(16,185,129,0.15)", text: "#A7F3D0", label: "✓ Confirmed" };
  if (state === "pending") return { bg: "rgba(245,158,11,0.15)", text: "#FCD34D", label: "⏳ Pending" };
  if (state === "ai") return { bg: "rgba(16,185,129,0.25)", text: "#34D399", label: "🤖 AI prepped" };
  if (state === "priority") return { bg: "rgba(244,63,94,0.12)", text: "#fda4af", label: "⚠ Priority" };
  return { bg: "rgba(255,255,255,0.02)", text: "#445", label: "Open" };
}

export function ScreenPatient() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#051A12" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ background: "#071F15", borderColor: "rgba(16,185,129,0.15)" }}
      >
        <div className="flex items-center gap-2">
          <SeroMark size={18} />
          <span className="font-bold text-[12px]" style={{ color: "#10B981" }}>
            serō
          </span>
        </div>
        <div className="hidden sm:block text-[10px]" style={{ color: "#2d6b52" }}>
          Dr. Ames Vidal · General Practice
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] px-2 py-1 rounded-full"
            style={{
              background: "rgba(16,185,129,0.15)",
              color: "#34D399",
            }}
          >
            Today: 8
          </span>
          <IconBell size={11} stroke={1.5} color="#2d6b52" />
        </div>
      </div>

      <main className="flex-1 p-3 sm:p-4 overflow-hidden flex flex-col">
        <div>
          <div className="text-[10px]" style={{ color: "#2d6b52" }}>
            Wednesday, May 14
          </div>
          <div className="text-white text-sm font-medium mt-1">
            You have 3 patients to review and 8 appointments today.
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-md p-2.5 border"
              style={{ background: "#071F15", borderColor: "rgba(16,185,129,0.15)" }}
            >
              <div className="text-[8px]" style={{ color: "#2d6b52" }}>
                {s.label}
              </div>
              <div className="text-white text-base font-bold leading-tight mt-0.5">
                {s.value}
              </div>
              <div className="text-[8px] mt-0.5" style={{ color: "#34D399" }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-3 mt-3 flex-1 min-h-0">
          {/* Intake queue */}
          <div
            className="rounded-md p-3 border overflow-hidden flex flex-col"
            style={{ background: "#071F15", borderColor: "rgba(16,185,129,0.15)" }}
          >
            <div className="flex items-center gap-1.5">
              <IconRobot size={11} stroke={1.5} color="#10B981" />
              <span className="text-white text-[10px] font-semibold">
                AI Intake Queue
              </span>
              <span className="ml-auto text-[8px]" style={{ color: "#2d6b52" }}>
                3 ready for review
              </span>
            </div>
            <div className="mt-2 space-y-1.5 overflow-hidden">
              {INTAKES.map((p) => (
                <div
                  key={p.id}
                  className="rounded-md p-2 border"
                  style={{
                    background: "#0A2018",
                    borderColor: "rgba(16,185,129,0.1)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-[10px] font-medium">
                      Patient {p.id}
                    </span>
                    <span
                      className="text-[8px] px-1.5 py-0.5 rounded font-semibold"
                      style={{ background: p.bg, color: p.color }}
                    >
                      {p.priority}
                    </span>
                  </div>
                  <div
                    className="rounded p-1.5 mt-1.5"
                    style={{ background: "#051A12" }}
                  >
                    <div className="text-[7px] uppercase tracking-wider" style={{ color: "#2d6b52" }}>
                      Chief complaint
                    </div>
                    <div className="text-[9px] mt-0.5 leading-tight" style={{ color: "#A7F3D0" }}>
                      {p.complaint}
                    </div>
                    <div className="text-[7px] uppercase tracking-wider mt-1.5" style={{ color: "#2d6b52" }}>
                      AI suggests
                    </div>
                    <div className="text-[9px] mt-0.5 leading-tight" style={{ color: "#34D399" }}>
                      {p.suggest}
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-1.5 mt-1.5">
                    <span
                      className="text-[8px] px-2 py-0.5 rounded"
                      style={{
                        border: "1px solid rgba(16,185,129,0.3)",
                        color: "#34D399",
                      }}
                    >
                      Review →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's schedule */}
          <div
            className="rounded-md p-3 border overflow-hidden flex flex-col"
            style={{ background: "#071F15", borderColor: "rgba(16,185,129,0.15)" }}
          >
            <div className="text-white text-[10px] font-semibold">
              Today&apos;s Schedule
            </div>
            <ul className="mt-2 space-y-1">
              {SCHEDULE.map((s) => {
                const c = slotColor(s.state);
                return (
                  <li
                    key={s.time}
                    className="rounded p-1.5 flex items-center gap-2 text-[9px]"
                    style={{ background: c.bg }}
                  >
                    <span
                      className="font-mono shrink-0"
                      style={{ color: "#A7F3D0", width: 32 }}
                    >
                      {s.time}
                    </span>
                    <span className="flex-1 truncate" style={{ color: "#A7F3D0" }}>
                      {s.patient ? `${s.patient} · ${s.type}` : s.type}
                    </span>
                    <span className="text-[8px] shrink-0" style={{ color: c.text }}>
                      {c.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
