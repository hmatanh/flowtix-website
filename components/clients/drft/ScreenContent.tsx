import {
  IconBrandInstagram,
  IconMail,
  IconTag,
  IconAd,
  IconBook,
  IconRobot,
  IconCheck,
  IconRefresh,
} from "@tabler/icons-react";

/* ============================================================
   DRFT — AI Content Studio
   Brand voice-trained content generation. Outputs panel.
   ============================================================ */

const TYPES = [
  { icon: IconTag, label: "Product copy", count: 24 },
  { icon: IconBrandInstagram, label: "Social", count: 47, active: true },
  { icon: IconMail, label: "Email", count: 12 },
  { icon: IconAd, label: "Ad copy", count: 8 },
  { icon: IconBook, label: "Stories", count: 5 },
];

const VOICE_RULES = [
  "Confident, never cocky",
  "Outdoor first, lifestyle second",
  "Short. Direct.",
  "Warm orange palette",
  "Never use: 'cutting-edge', 'game-changing'",
];

const OUTPUT_HEADLINE = "Trail Series Jacket — built for distance, dressed for the city.";
const OUTPUT_BODY = `Tested across 1,400 miles of trail and a hundred unplanned coffees. The shell sheds rain. The lining moves with you. Wear it where you intend to be — anywhere.

Four colorways. Sustainable shell. Ships free over $100.`;

const VARIANTS = [
  { label: "Punchy", text: "Built for the trail. Dressed for the city. The jacket that goes both ways." },
  { label: "Editorial", text: "Some pieces ask you to choose. This one doesn't." },
  { label: "Direct", text: "Trail-tested. City-ready. $189." },
];

export function ScreenContent() {
  return (
    <div
      className="w-full h-full flex flex-col relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% -10%, rgba(220, 38, 38,0.10), transparent 60%), linear-gradient(180deg, #1A0707 0%, #06030B 100%)",
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
          background: "radial-gradient(circle, rgba(220, 38, 38,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-4 py-2.5 border-b backdrop-blur-sm"
        style={{
          background: "rgba(18,10,2,0.85)",
          borderColor: "rgba(220, 38, 38,0.18)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="font-black italic tracking-tighter text-white"
            style={{ fontSize: 18, transform: "skewX(-6deg)", display: "inline-block" }}
          >
            DRFT
          </span>
          <span className="text-white text-[12px] font-semibold tracking-tight">
            / Content Studio
          </span>
          <span
            className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium inline-flex items-center gap-1"
            style={{
              background: "rgba(220, 38, 38,0.12)",
              color: "#FECACA",
              border: "1px solid rgba(220, 38, 38,0.25)",
            }}
          >
            <IconRobot size={9} stroke={2} />
            Brand-voice trained
          </span>
        </div>
      </div>

      <main className="relative flex-1 grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-2.5 p-3 overflow-hidden min-h-0">
        {/* Sidebar */}
        <aside
          className="rounded-xl p-2.5 border flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,10,2,0.92) 0%, rgba(12,8,2,0.6) 100%)",
            borderColor: "rgba(220, 38, 38,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#8B5E2A" }}
          >
            Content types
          </div>
          <div className="space-y-0.5">
            {TYPES.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] transition-colors"
                  style={
                    t.active
                      ? {
                          background:
                            "linear-gradient(90deg, rgba(220, 38, 38,0.18), rgba(220, 38, 38,0.06))",
                          color: "#DC2626",
                          border: "1px solid rgba(220, 38, 38,0.25)",
                        }
                      : { color: "#8B5E2A" }
                  }
                >
                  <Icon size={11} stroke={1.5} />
                  <span className="flex-1 font-medium">{t.label}</span>
                  <span
                    className="text-[8px] font-mono tabular-nums px-1 py-0 rounded"
                    style={{
                      background: t.active
                        ? "rgba(220, 38, 38,0.18)"
                        : "rgba(139,94,42,0.10)",
                      color: t.active ? "#DC2626" : "#8B5E2A",
                    }}
                  >
                    {t.count}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="mt-4 pt-3 border-t"
            style={{ borderColor: "rgba(220, 38, 38,0.10)" }}
          >
            <div
              className="text-[8px] uppercase tracking-wider mb-2"
              style={{ color: "#8B5E2A" }}
            >
              Brand voice
            </div>
            <ul className="space-y-1">
              {VOICE_RULES.map((r, i) => (
                <li
                  key={i}
                  className="text-[9px] flex items-start gap-1.5"
                  style={{ color: "#FECACA" }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0 mt-1.5"
                    style={{ background: "#DC2626" }}
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Output canvas */}
        <section className="rounded-xl p-3 border flex flex-col min-h-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,10,2,0.92) 0%, rgba(12,8,2,0.6) 100%)",
            borderColor: "rgba(220, 38, 38,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Prompt strip */}
          <div
            className="rounded-md p-2 border flex items-center gap-2 text-[9px]"
            style={{
              background: "rgba(12,8,2,0.6)",
              borderColor: "rgba(220, 38, 38,0.10)",
            }}
          >
            <IconRobot size={11} stroke={1.5} style={{ color: "#DC2626" }} />
            <span style={{ color: "#FECACA" }}>
              Generate launch caption for{" "}
              <span style={{ color: "#DC2626", fontWeight: 600 }}>
                Trail Series Jacket
              </span>{" "}
              · IG feed · launch tone
            </span>
            <span
              className="ml-auto text-[8px] font-mono inline-flex items-center gap-1"
              style={{ color: "#8B5E2A" }}
            >
              <IconCheck size={8} stroke={2.5} style={{ color: "#10B981" }} />
              On-brand ✓
            </span>
          </div>

          {/* Generated content card */}
          <div
            className="mt-2.5 rounded-lg p-3 border flex-1 min-h-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(220, 38, 38,0.06) 0%, rgba(20,12,4,0.6) 100%)",
              borderColor: "rgba(220, 38, 38,0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[8px] uppercase tracking-wider font-medium"
                style={{ color: "#DC2626" }}
              >
                Generated · IG feed
              </span>
              <button
                className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(220, 38, 38,0.10)",
                  color: "#FECACA",
                }}
              >
                <IconRefresh size={9} stroke={1.5} />
                Regenerate
              </button>
            </div>
            <h3
              className="text-white font-bold tracking-tight text-[14px] leading-tight"
            >
              {OUTPUT_HEADLINE}
            </h3>
            <p
              className="text-[11px] leading-relaxed mt-2 whitespace-pre-line"
              style={{ color: "#FECACA" }}
            >
              {OUTPUT_BODY}
            </p>
            <div className="mt-3 pt-2.5 border-t flex items-center gap-2 flex-wrap" style={{ borderColor: "rgba(220, 38, 38,0.10)" }}>
              <span
                className="text-[8px] uppercase tracking-wider"
                style={{ color: "#8B5E2A" }}
              >
                Tags
              </span>
              {["#TrailSeries", "#NewDrop", "#DRFT", "#OutdoorLife"].map((t) => (
                <span
                  key={t}
                  className="text-[9px] px-1.5 py-0.5 rounded font-mono"
                  style={{
                    background: "rgba(220, 38, 38,0.08)",
                    color: "#FECACA",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Variants */}
          <div className="mt-2.5">
            <div className="text-[8px] uppercase tracking-wider mb-1.5" style={{ color: "#8B5E2A" }}>
              Alternates
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
              {VARIANTS.map((v) => (
                <div
                  key={v.label}
                  className="rounded-md p-2 border"
                  style={{
                    background: "rgba(12,8,2,0.5)",
                    borderColor: "rgba(220, 38, 38,0.10)",
                  }}
                >
                  <div
                    className="text-[8px] font-medium uppercase tracking-wider mb-1"
                    style={{ color: "#DC2626" }}
                  >
                    {v.label}
                  </div>
                  <p className="text-[9px] leading-snug" style={{ color: "#FECACA" }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
