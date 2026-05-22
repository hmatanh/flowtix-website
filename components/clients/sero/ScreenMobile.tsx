import {
  IconHome,
  IconCalendar,
  IconFolders,
  IconUser,
  IconPill,
  IconMessages,
} from "@tabler/icons-react";
import { SeroMark } from "@/components/projects/BrandMarks";

export function ScreenMobile() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#051A12" }}>
      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 pt-6 pb-1 text-white text-[10px] font-semibold"
        style={{ background: "#051A12" }}
      >
        <span>9:41</span>
        <span className="text-[10px]">●●●●● 5G</span>
      </div>

      {/* Header */}
      <div className="text-center px-4 mt-4">
        <div className="inline-flex items-center gap-2">
          <SeroMark size={20} />
          <span className="font-bold text-base" style={{ color: "#10B981" }}>
            serō
          </span>
        </div>
        <div className="text-[10px] mt-1" style={{ color: "#2d6b52" }}>
          Your health, simplified
        </div>
      </div>

      {/* Hero card */}
      <div
        className="mx-4 mt-5 rounded-2xl p-4 text-white relative overflow-hidden"
        style={{ background: "#10B981" }}
      >
        <div className="text-[9px] uppercase tracking-widest opacity-75">
          Your next appointment
        </div>
        <div className="text-base font-bold mt-1">Dr. Ames Vidal</div>
        <div className="text-[10px] opacity-80">General Practice</div>
        <div className="text-sm font-semibold mt-3">Tomorrow · 10:00 AM</div>
        <div className="text-[9px] opacity-80">15 Riverside Medical Ctr</div>
        <button
          className="w-full rounded-lg py-2 text-[10px] font-semibold mt-3"
          style={{ background: "#fff", color: "#065F46" }}
        >
          Add to Calendar
        </button>
        <div
          className="absolute -right-6 -top-6 w-20 h-20 rounded-full opacity-20"
          style={{ background: "white" }}
        />
      </div>

      {/* Quick actions */}
      <div className="mx-4 mt-4 grid grid-cols-2 gap-2">
        {[
          { icon: IconFolders, label: "My Records" },
          { icon: IconCalendar, label: "Book" },
          { icon: IconPill, label: "Prescriptions" },
          { icon: IconMessages, label: "Messages" },
        ].map((q) => (
          <div
            key={q.label}
            className="rounded-xl p-3 border flex flex-col gap-1"
            style={{
              background: "#071F15",
              borderColor: "rgba(16,185,129,0.15)",
            }}
          >
            <q.icon size={14} stroke={1.5} color="#10B981" />
            <span className="text-[10px]" style={{ color: "#A7F3D0" }}>
              {q.label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent */}
      <div className="mx-4 mt-4 flex-1 overflow-hidden">
        <div
          className="text-[9px] uppercase tracking-wider mb-2"
          style={{ color: "#2d6b52" }}
        >
          Recent
        </div>
        <ul className="space-y-2">
          {[
            { dot: "#10B981", text: "Intake form processed by AI", date: "Yesterday" },
            { dot: "#3B82F6", text: "Dr. Vidal added a note", date: "3 days ago" },
            { dot: "#F59E0B", text: "Prescription renewed", date: "Last week" },
          ].map((r) => (
            <li
              key={r.text}
              className="flex items-center gap-2 py-1.5 border-b"
              style={{ borderColor: "rgba(16,185,129,0.08)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: r.dot }}
              />
              <span className="text-[10px] flex-1 truncate" style={{ color: "#A7F3D0" }}>
                {r.text}
              </span>
              <span className="text-[8px]" style={{ color: "#2d6b52" }}>
                {r.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-around py-3 border-t"
        style={{
          background: "#071F15",
          borderColor: "rgba(16,185,129,0.15)",
        }}
      >
        {[
          { icon: IconHome, label: "Home", active: true },
          { icon: IconCalendar, label: "Appts" },
          { icon: IconFolders, label: "Records" },
          { icon: IconUser, label: "Profile" },
        ].map((n) => (
          <div key={n.label} className="flex flex-col items-center gap-0.5">
            <n.icon
              size={16}
              stroke={1.5}
              color={n.active ? "#10B981" : "#2d6b52"}
            />
            <span
              className="text-[8px]"
              style={{ color: n.active ? "#10B981" : "#2d6b52" }}
            >
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
