import {
  IconRobot,
  IconCheck,
  IconLoader2,
  IconAlertTriangle,
  IconClipboardCheck,
  IconBolt,
  IconArrowRight,
} from "@tabler/icons-react";

/* ============================================================
   SERŌ — AI Intake Workflow
   Split-view: raw patient submission ↔ AI-generated structured chart.
   ============================================================ */

const RAW = [
  { label: "Chief complaint", value: "Lower back pain, 3 days, sharp, radiating down left leg" },
  { label: "Onset", value: "Tuesday morning after gardening" },
  { label: "Severity", value: "6/10, worse when sitting" },
  { label: "Medications", value: "Ibuprofen 400mg, twice daily, since Wednesday" },
  { label: "Prior episodes", value: "Yes, 2 years ago — resolved in 2 weeks" },
];

const AI_OUTPUT = [
  { check: true, text: "Mechanical lumbar strain — consistent with acute presentation" },
  { check: true, text: "No red flags identified · no neurological deficit reported" },
  { check: true, text: "Radiculopathy possible · L5 distribution (left)" },
  { check: false, text: "Imaging not urgent at this stage (NICE guidance)" },
  { check: true, text: "Physio referral indicated · conservative management first" },
];

export function ScreenIntake() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(16,185,129,0.10), transparent 60%), linear-gradient(180deg, #051A12 0%, #03100B 100%)",
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
          background: "radial-gradient(circle, rgba(16,185,129,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(7,31,21,0.85)",
          borderColor: "rgba(16,185,129,0.15)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-mono"
            style={{ color: "#7ab8a0" }}
          >
            #2847
          </span>
          <span className="text-white text-[13px] font-bold tracking-tight">
            Patient Intake
          </span>
          <span
            className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium inline-flex items-center gap-1"
            style={{
              background: "rgba(16,185,129,0.10)",
              color: "#6ee7b7",
              border: "1px solid rgba(16,185,129,0.20)",
            }}
          >
            <IconLoader2 size={9} stroke={2} className="animate-spin" />
            AI processing
          </span>
        </div>
        <span
          className="text-[9px] inline-flex items-center gap-1.5 font-mono"
          style={{ color: "#6ee7b7" }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "#10B981", boxShadow: "0 0 4px #10B981" }}
          />
          HIPAA · encrypted
        </span>
      </div>

      <main className="relative flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2.5 p-3 overflow-hidden min-h-0">
        {/* Raw patient input */}
        <section
          className="rounded-xl p-3 border relative overflow-hidden flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,31,21,0.92) 0%, rgba(5,26,18,0.6) 100%)",
            borderColor: "rgba(16,185,129,0.12)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5">
              <div
                className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                style={{
                  background: "rgba(122,184,160,0.15)",
                  border: "1px solid rgba(122,184,160,0.25)",
                }}
              >
                <IconClipboardCheck size={10} stroke={1.5} color="#7ab8a0" />
              </div>
              <span className="text-white text-[11px] font-semibold tracking-tight">
                Patient input
              </span>
              <span
                className="text-[8px] uppercase tracking-wider"
                style={{ color: "#5a8a7a" }}
              >
                Submitted 09:38
              </span>
            </div>
          </div>

          <div className="space-y-1.5 overflow-hidden">
            {RAW.map((f) => (
              <div
                key={f.label}
                className="rounded-md p-2 border"
                style={{
                  background: "rgba(3,16,11,0.5)",
                  borderColor: "rgba(16,185,129,0.06)",
                }}
              >
                <div
                  className="text-[8px] uppercase tracking-wider"
                  style={{ color: "#5a8a7a" }}
                >
                  {f.label}
                </div>
                <div className="text-[10px] mt-0.5 leading-snug" style={{ color: "#e0f5e9" }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>

          {/* Connection arrow indicator */}
          <div
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #10B981 0%, #047857 100%)",
              boxShadow: "0 0 20px rgba(16,185,129,0.5)",
            }}
            aria-hidden="true"
          >
            <IconArrowRight size={12} stroke={2.5} color="#021a0f" />
          </div>
        </section>

        {/* AI output */}
        <section
          className="rounded-xl p-3 border relative overflow-hidden flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,31,21,0.92) 0%, rgba(5,26,18,0.6) 100%)",
            borderColor: "rgba(16,185,129,0.22)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 24px rgba(16,185,129,0.10)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.25), transparent 70%)",
              filter: "blur(10px)",
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                  style={{
                    background: "rgba(16,185,129,0.18)",
                    border: "1px solid rgba(16,185,129,0.30)",
                  }}
                >
                  <IconRobot size={10} stroke={1.5} color="#10B981" />
                </div>
                <span className="text-white text-[11px] font-semibold tracking-tight">
                  AI assessment
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="text-[8px]"
                  style={{ color: "#5a8a7a" }}
                >
                  Conf.
                </span>
                <span
                  className="text-[10px] font-bold tabular-nums"
                  style={{ color: "#34D399" }}
                >
                  91%
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              {AI_OUTPUT.map((o, i) => (
                <div
                  key={i}
                  className="rounded-md p-2 border flex items-start gap-2"
                  style={{
                    background: "rgba(3,16,11,0.5)",
                    borderColor: o.check
                      ? "rgba(16,185,129,0.18)"
                      : "rgba(245,158,11,0.18)",
                  }}
                >
                  <div
                    className="shrink-0 w-4 h-4 rounded-full inline-flex items-center justify-center mt-0.5"
                    style={{
                      background: o.check
                        ? "rgba(16,185,129,0.18)"
                        : "rgba(245,158,11,0.18)",
                      border: `1px solid ${
                        o.check
                          ? "rgba(16,185,129,0.30)"
                          : "rgba(245,158,11,0.30)"
                      }`,
                    }}
                  >
                    {o.check ? (
                      <IconCheck size={8} stroke={2.5} color="#10B981" />
                    ) : (
                      <IconAlertTriangle size={8} stroke={2} color="#F59E0B" />
                    )}
                  </div>
                  <p className="text-[10px] leading-snug" style={{ color: "#e0f5e9" }}>
                    {o.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-2.5 border-t" style={{ borderColor: "rgba(16,185,129,0.10)" }}>
              <div
                className="text-[8px] uppercase tracking-wider mb-2"
                style={{ color: "#7ab8a0" }}
              >
                Suggested actions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Physio referral",
                  "Pain mgmt protocol",
                  "Re-eval in 2 weeks",
                ].map((a) => (
                  <span
                    key={a}
                    className="text-[9px] font-medium px-2 py-1 rounded-md inline-flex items-center gap-1"
                    style={{
                      background: "rgba(16,185,129,0.10)",
                      color: "#6ee7b7",
                      border: "1px solid rgba(16,185,129,0.22)",
                    }}
                  >
                    <IconBolt size={8} stroke={2} />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinician CTA */}
            <button
              className="w-full mt-3 inline-flex items-center justify-center gap-1.5 text-[10px] font-semibold py-2 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                color: "#021a0f",
                boxShadow: "0 0 16px rgba(16,185,129,0.30)",
              }}
            >
              Clinician sign-off
              <IconArrowRight size={11} stroke={2.5} />
            </button>
            <div
              className="text-[8px] mt-1.5 text-center"
              style={{ color: "#5a8a7a" }}
            >
              Always reviewed by a clinician before any action
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
