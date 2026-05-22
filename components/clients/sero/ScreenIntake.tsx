import { IconRobot, IconCheck, IconLoader2, IconAlertTriangle } from "@tabler/icons-react";

const FORM = [
  {
    q: "What brings you in today?",
    a: "i have been having really bad back pain for about 3 days now, it started in my lower back and now goes down my left leg sometimes, it hurts more when i sit for long periods",
  },
  { q: "Pain level (1–10):", a: "7" },
  { q: "Previous conditions:", a: "None that I know of" },
  { q: "Current medications:", a: "Ibuprofen 400mg as needed" },
  { q: "Allergies:", a: "Penicillin" },
];

const STEPS = [
  { label: "Extracted key complaints", done: true },
  { label: "Identified urgency level", done: true },
  { label: "Generating recommendations", done: false },
];

const FLAGS = [
  "Possible L4/L5 radiculopathy — consider imaging if no improvement",
  "Penicillin allergy — note before any prescriptions",
  "NSAIDs already self-medicating",
];

const ACTIONS = ["Physio referral", "Pain assessment scale", "Schedule 2-week follow-up"];

export function ScreenIntake() {
  return (
    <div className="w-full h-full flex" style={{ background: "#051A12" }}>
      {/* Left — raw intake */}
      <div className="w-[38%] p-3 overflow-hidden">
        <div
          className="rounded-md p-3 border h-full overflow-hidden flex flex-col"
          style={{
            background: "#071F15",
            borderColor: "rgba(16,185,129,0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-[10px] font-semibold">
              Patient Intake — Raw
            </span>
            <span className="text-[8px]" style={{ color: "#2d6b52" }}>
              09:38 AM
            </span>
          </div>
          <div className="text-[8px] mt-0.5" style={{ color: "#2d6b52" }}>
            Submitted by Patient #2847
          </div>
          <div className="mt-3 space-y-2.5 overflow-hidden">
            {FORM.map((f, i) => (
              <div key={i}>
                <div className="text-[8px] uppercase tracking-wider" style={{ color: "#2d6b52" }}>
                  Q · {f.q}
                </div>
                <div className="text-[9px] mt-0.5 leading-snug" style={{ color: "#4a6b5a" }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center — processing */}
      <div
        className="w-[24%] p-3 flex flex-col items-center justify-center text-center"
        style={{ background: "#040E0A" }}
      >
        <IconRobot size={20} stroke={1.5} color="#10B981" />
        <div
          className="text-[9px] uppercase tracking-widest mt-2"
          style={{ color: "#34D399" }}
        >
          AI Processing
        </div>
        <div className="text-[8px] mt-0.5" style={{ color: "#2d6b52" }}>
          4.2s elapsed
        </div>

        <div className="mt-4 space-y-2 w-full max-w-[180px]">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="rounded-md px-2 py-1.5 flex items-center gap-1.5 text-[9px]"
              style={{
                background: s.done ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.1)",
                color: s.done ? "#A7F3D0" : "#FCD34D",
              }}
            >
              {s.done ? (
                <IconCheck size={10} stroke={2.5} />
              ) : (
                <IconLoader2 size={10} stroke={2} />
              )}
              <span className="leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — AI summary */}
      <div className="flex-1 p-3 overflow-hidden">
        <div
          className="rounded-md p-3 border h-full overflow-hidden flex flex-col"
          style={{
            background: "#0A2018",
            borderColor: "rgba(16,185,129,0.3)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-[10px] font-semibold">
              AI Summary — Ready for Review
            </span>
            <span className="text-[8px]" style={{ color: "#34D399" }}>
              Processed in 4.2s
            </span>
          </div>

          <div className="mt-2.5 space-y-2 overflow-hidden">
            <div>
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#34D399" }}>
                Chief Complaint
              </div>
              <div className="text-[10px] text-white mt-0.5 leading-snug">
                Lower back pain with left leg radiation, 3-day onset
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-[8px] uppercase tracking-wider" style={{ color: "#2d6b52" }}>
                  Urgency
                </div>
                <span
                  className="inline-block mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-semibold"
                  style={{ background: "rgba(16,185,129,0.18)", color: "#34D399" }}
                >
                  Routine
                </span>
              </div>
              <div>
                <div className="text-[8px] uppercase tracking-wider" style={{ color: "#2d6b52" }}>
                  Appt length
                </div>
                <div className="text-[10px] text-white mt-0.5">20 minutes</div>
              </div>
            </div>

            <div>
              <div
                className="text-[8px] uppercase tracking-wider inline-flex items-center gap-1"
                style={{ color: "#FCD34D" }}
              >
                <IconAlertTriangle size={9} stroke={2} />
                AI Flags
              </div>
              <ul className="mt-1 space-y-1">
                {FLAGS.map((f, i) => (
                  <li
                    key={i}
                    className="text-[9px] leading-snug flex items-start gap-1"
                    style={{ color: "#A7F3D0" }}
                  >
                    <span style={{ color: "#FCD34D" }}>•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#2d6b52" }}>
                Suggested actions
              </div>
              <ul className="mt-1 space-y-0.5">
                {ACTIONS.map((a) => (
                  <li
                    key={a}
                    className="text-[9px] leading-snug flex items-center gap-1.5"
                    style={{ color: "#A7F3D0" }}
                  >
                    <IconCheck size={9} stroke={2.5} color="#10B981" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-2 flex gap-1.5">
            <button
              className="flex-1 rounded text-[9px] py-1.5 font-semibold"
              style={{ background: "#10B981", color: "#000" }}
            >
              Approve & Save
            </button>
            <button
              className="flex-1 rounded text-[9px] py-1.5 font-semibold border"
              style={{
                borderColor: "rgba(16,185,129,0.3)",
                color: "#A7F3D0",
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
