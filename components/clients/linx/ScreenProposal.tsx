import { IconRobot, IconCheck } from "@tabler/icons-react";
import { LinxMark } from "@/components/projects/BrandMarks";

const SECTIONS = [
  "Executive Summary",
  "Campaign Objectives",
  "Brand Audit",
  "Strategy & Approach",
  "Scope & Deliverables",
  "Timeline (6 weeks)",
  "Team & Roles",
  "Investment ($9,500/mo)",
];

export function ScreenProposal() {
  return (
    <div className="w-full h-full flex" style={{ background: "#0C0814" }}>
      {/* Left — input */}
      <div
        className="w-[38%] p-3 border-r overflow-hidden flex flex-col"
        style={{
          background: "#12102A",
          borderColor: "rgba(139,92,246,0.15)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-white text-[10px] font-semibold">New Proposal</span>
          <span
            className="inline-flex items-center gap-1 text-[8px] px-1.5 py-0.5 rounded-full font-semibold"
            style={{
              background: "rgba(139,92,246,0.18)",
              color: "#A78BFA",
            }}
          >
            <IconRobot size={9} stroke={1.5} />
            AI-Powered
          </span>
        </div>

        <div className="mt-3 space-y-2 overflow-hidden">
          {[
            { label: "Client Name", value: "Brew Republic" },
            { label: "Industry", value: "Food & Beverage" },
            { label: "Project Type", value: "Brand Campaign + Social" },
            { label: "Monthly Budget", value: "$8,000 – $12,000" },
            { label: "Timeline", value: "6 weeks" },
          ].map((f) => (
            <div key={f.label}>
              <div className="text-[8px] uppercase tracking-wider" style={{ color: "#6b4a8a" }}>
                {f.label}
              </div>
              <div
                className="text-[10px] mt-0.5 px-2 py-1 rounded border"
                style={{
                  background: "#0C0814",
                  color: "#DDD6FE",
                  borderColor: "rgba(139,92,246,0.15)",
                }}
              >
                {f.value}
              </div>
            </div>
          ))}

          <div>
            <div className="text-[8px] uppercase tracking-wider mb-1" style={{ color: "#6b4a8a" }}>
              Campaign Goal
            </div>
            <div
              className="text-[9px] leading-snug px-2 py-1.5 rounded border"
              style={{
                background: "#0C0814",
                color: "#DDD6FE",
                borderColor: "rgba(139,92,246,0.15)",
              }}
            >
              Drive awareness for new product launch
            </div>
          </div>

          <div>
            <div className="text-[8px] uppercase tracking-wider mb-1" style={{ color: "#6b4a8a" }}>
              Tone
            </div>
            <div className="flex gap-1">
              {["Professional", "Creative", "Bold"].map((t) => (
                <span
                  key={t}
                  className="flex-1 text-center text-[8px] py-1 rounded"
                  style={
                    t === "Bold"
                      ? { background: "#8B5CF6", color: "#fff" }
                      : {
                          background: "#0C0814",
                          color: "#9b8ab4",
                          border: "1px solid rgba(139,92,246,0.12)",
                        }
                  }
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          className="mt-auto rounded-md py-2.5 text-[10px] font-bold"
          style={{ background: "#8B5CF6", color: "#fff" }}
        >
          Generate Proposal →
        </button>
        <div
          className="text-[8px] mt-1.5 text-center"
          style={{ color: "#6b4a8a" }}
        >
          ⚡ Usually takes 45 seconds
        </div>
      </div>

      {/* Right — output */}
      <div className="flex-1 p-3 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-[10px] font-semibold">
            Proposal Preview
          </span>
          <span className="text-[9px]" style={{ color: "#6b4a8a" }}>
            Generated in 52 seconds
          </span>
        </div>

        <div
          className="rounded-2xl p-4 sm:p-5 border flex-1 overflow-hidden"
          style={{
            background: "#12102A",
            borderColor: "rgba(139,92,246,0.2)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LinxMark color="#8B5CF6" />
              <span
                className="font-black text-[12px]"
                style={{ color: "#8B5CF6" }}
              >
                LINX
              </span>
            </div>
            <span
              className="text-[8px] uppercase tracking-widest"
              style={{ color: "#A78BFA" }}
            >
              Strategic Proposal
            </span>
          </div>
          <div
            className="text-[11px] mt-3 font-semibold"
            style={{ color: "#DDD6FE" }}
          >
            Brew Republic · Campaign Proposal · May 2025
          </div>
          <div
            className="h-px my-3"
            style={{ background: "rgba(139,92,246,0.3)" }}
          />

          <div
            className="text-[10px] font-semibold text-white"
          >
            Executive Summary
          </div>
          <p
            className="text-[9px] leading-relaxed mt-1"
            style={{ color: "#9b8ab4" }}
          >
            Brew Republic is launching a new cold brew line. We propose a 6-week
            integrated campaign to drive launch awareness across Instagram,
            TikTok, and email — combining short-form video, founder-led
            storytelling, and a hyper-targeted paid layer.
          </p>

          <div className="text-[10px] font-semibold text-white mt-3">
            What we&apos;ll build
          </div>
          <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1">
            {SECTIONS.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-1 text-[9px]"
                style={{ color: "#9b8ab4" }}
              >
                <IconCheck size={8} stroke={2.5} color="#A78BFA" />
                <span className="truncate">{s}</span>
              </li>
            ))}
          </ul>

          <div className="text-[10px] font-semibold text-white mt-3">
            Investment
          </div>
          <table className="w-full mt-1 text-[9px]">
            <thead>
              <tr style={{ color: "#6b4a8a" }}>
                <th className="text-left font-normal">Service</th>
                <th className="text-right font-normal">Month 1</th>
                <th className="text-right font-normal">Ongoing</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Brand & Strategy", "$3,500", "$1,200"],
                ["Content Production", "$3,000", "$2,800"],
                ["Paid Media Mgmt", "$3,000", "$2,500"],
              ].map((r) => (
                <tr
                  key={r[0]}
                  style={{
                    borderTop: "1px solid rgba(139,92,246,0.08)",
                  }}
                >
                  <td className="py-0.5" style={{ color: "#DDD6FE" }}>
                    {r[0]}
                  </td>
                  <td className="py-0.5 text-right" style={{ color: "#9b8ab4" }}>
                    {r[1]}
                  </td>
                  <td className="py-0.5 text-right" style={{ color: "#9b8ab4" }}>
                    {r[2]}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  className="pt-1 font-semibold text-white"
                  style={{ borderTop: "1px solid #8B5CF6" }}
                >
                  Total
                </td>
                <td
                  className="pt-1 text-right font-semibold"
                  style={{ color: "#A78BFA", borderTop: "1px solid #8B5CF6" }}
                >
                  $9,500
                </td>
                <td
                  className="pt-1 text-right"
                  style={{ color: "#A78BFA", borderTop: "1px solid #8B5CF6" }}
                >
                  $6,500
                </td>
              </tr>
            </tbody>
          </table>

          <button
            className="w-full mt-3 rounded text-[10px] font-bold py-2"
            style={{ background: "#8B5CF6", color: "#fff" }}
          >
            Accept Proposal →
          </button>
        </div>
      </div>
    </div>
  );
}
