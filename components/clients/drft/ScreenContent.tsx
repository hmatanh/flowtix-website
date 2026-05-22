import { IconBrandInstagram, IconMail, IconTag, IconAd, IconBook } from "@tabler/icons-react";

const TYPES = [
  { icon: IconBrandInstagram, label: "Instagram Post", active: true },
  { icon: IconMail, label: "Email Campaign" },
  { icon: IconTag, label: "Product Description" },
  { icon: IconAd, label: "Ad Copy" },
  { icon: IconBook, label: "Story Script" },
];

export function ScreenContent() {
  return (
    <div className="w-full h-full flex" style={{ background: "#120A02" }}>
      {/* Top bar */}
      <aside
        className="w-44 sm:w-48 border-r p-3 flex flex-col overflow-hidden"
        style={{
          background: "#0F0902",
          borderColor: "rgba(249,115,22,0.12)",
        }}
      >
        <div
          className="flex items-center gap-1.5 mb-3"
          style={{ color: "#F97316" }}
        >
          <span
            className="font-black italic tracking-tighter"
            style={{ fontSize: 16, transform: "skewX(-6deg)", display: "inline-block" }}
          >
            DRFT
          </span>
          <span className="text-[8px] uppercase tracking-widest" style={{ color: "#8B5E2A" }}>
            · Studio
          </span>
        </div>
        <div className="text-[8px] uppercase tracking-wider mb-2" style={{ color: "#8B5E2A" }}>
          Content Type
        </div>
        <div className="space-y-1">
          {TYPES.map((t) => (
            <div
              key={t.label}
              className="px-2 py-1.5 rounded-md flex items-center gap-1.5 text-[9px]"
              style={
                t.active
                  ? {
                      background: "rgba(249,115,22,0.18)",
                      color: "#F97316",
                      borderLeft: "2px solid #F97316",
                    }
                  : { color: "#8B5E2A" }
              }
            >
              <t.icon size={11} stroke={1.5} />
              {t.label}
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 p-3 overflow-hidden">
        {/* Input */}
        <div
          className="rounded-md p-3 border flex flex-col overflow-hidden"
          style={{
            background: "#1A0F04",
            borderColor: "rgba(249,115,22,0.15)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#8B5E2A" }}
          >
            What&apos;s this post about?
          </div>
          <div
            className="rounded-md p-2.5 text-[9px] leading-snug border flex-1 overflow-hidden"
            style={{
              background: "#0F0902",
              borderColor: "rgba(249,115,22,0.15)",
              color: "#FED7AA",
            }}
          >
            We&apos;re launching the new Trail Series jacket in Navy Blue.
            Target: outdoor adventurers, 25–40. Tone: bold and authentic.
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {["Instagram", "Product launch", "Outdoor", "Trail Series"].map(
              (t) => (
                <span
                  key={t}
                  className="text-[8px] px-1.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(249,115,22,0.15)",
                    color: "#F97316",
                  }}
                >
                  {t}
                </span>
              )
            )}
          </div>
          <button
            className="mt-3 rounded text-[10px] font-bold py-2 text-center"
            style={{ background: "#F97316", color: "#000" }}
          >
            Generate →
          </button>
          <div className="text-[8px] mt-1.5 text-center" style={{ color: "#8B5E2A" }}>
            Last gen: 3.2s · On-brand match: 96%
          </div>
        </div>

        {/* Output */}
        <div
          className="rounded-md p-3 border flex flex-col overflow-hidden"
          style={{
            background: "#1A0F04",
            borderColor: "rgba(249,115,22,0.15)",
          }}
        >
          <div
            className="text-[8px] uppercase tracking-wider mb-2"
            style={{ color: "#F97316" }}
          >
            📸 Instagram Caption
          </div>
          <div className="text-[10px] text-white leading-relaxed">
            Some gear looks good in photos. This one looks better in the wild. 🏔️
            <br />
            <br />
            Introducing the Trail Series in Navy Blue — built for the mountain,
            made for the city. Water-resistant, packable, and built to outlast
            the trail.
            <br />
            <br />
            Drop is live. Link in bio.
          </div>
          <div
            className="text-[9px] mt-2 break-all leading-relaxed"
            style={{ color: "#F97316" }}
          >
            #DRFT #TrailSeries #OutdoorGear #NewDrop #BuiltForIt
          </div>
          <div
            className="text-[8px] mt-2 pt-2 border-t"
            style={{ color: "#8B5E2A", borderColor: "rgba(249,115,22,0.1)" }}
          >
            Character count: 267 / 2,200
          </div>
          <div className="flex gap-1 mt-2">
            {["Copy", "Regenerate", "Save to Library"].map((b, i) => (
              <span
                key={b}
                className="text-[8px] px-2 py-1 rounded inline-flex items-center"
                style={
                  i === 0
                    ? { background: "#F97316", color: "#000" }
                    : {
                        border: "1px solid rgba(249,115,22,0.3)",
                        color: "#FED7AA",
                      }
                }
              >
                {b}
              </span>
            ))}
          </div>
          <div
            className="mt-2 text-[8px]"
            style={{ color: "#8B5E2A" }}
          >
            2 more variants generated · Expand →
          </div>
        </div>
      </div>
    </div>
  );
}
