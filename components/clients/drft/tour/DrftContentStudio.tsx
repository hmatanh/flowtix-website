"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconRobot,
  IconLoader2,
  IconCheck,
  IconCopy,
  IconBookmark,
  IconRefresh,
  IconStar,
  IconStarFilled,
  IconSparkles,
} from "@tabler/icons-react";
import {
  ORANGE,
  TEXT_BRAND,
  TEXT_DIM,
  TEXT_FAINT,
  SURFACE,
  SURFACE_CARD,
  SHELL,
  BORDER,
  BORDER_HARD,
} from "./_shared";

type ContentType = "instagram" | "email" | "adcopy" | "product" | "story";

const TYPES: { id: ContentType; label: string }[] = [
  { id: "instagram", label: "Instagram Post" },
  { id: "email", label: "Email Campaign" },
  { id: "adcopy", label: "Ad Copy" },
  { id: "product", label: "Product Description" },
  { id: "story", label: "Story Script" },
];

const PLACEHOLDERS: Record<ContentType, string> = {
  instagram:
    "New Trail Series jacket drop, Navy Blue. Target: outdoor adventurers 25–40. Tone: bold, authentic, no marketing-speak…",
  email:
    "Abandoned cart for Trail Jacket, send 2h after cart abandonment, include urgency, no discount…",
  adcopy:
    "Facebook ad for Trail Series launch, awareness campaign, target males 22–38 in urban centers…",
  product:
    "Trail Series Jacket — water-resistant, packable, 4 colorways, $189. Bold but informative.",
  story:
    "Instagram Stories for the Trail Series launch, 5 frames, swipe-up to shop the Navy colorway…",
};

const TONES = ["Bold & Authentic", "Playful", "Technical"] as const;
const LENGTHS = ["Short", "Medium", "Long"] as const;
const PLATFORMS = ["Feed Post", "Reel Caption", "Story"] as const;

type Variant = { body: string; hashtags?: string; chars?: string };

const VARIANTS: Record<ContentType, Variant[]> = {
  instagram: [
    {
      body:
        "Some gear looks good in photos. This one looks better in the wild. 🏔️\n\nIntroducing Trail Series in Navy — built for the mountain, made for the city. Water-resistant, packable, built to outlast whatever you throw at it.\n\nDrop is live. Link in bio.",
      hashtags: "#DRFT #TrailSeries #NavyDrop #OutdoorGear #BuiltForIt #PackableJacket",
      chars: "287 / 2,200",
    },
    {
      body:
        "The jacket your weekend adventures have been waiting for is finally here.\n\nNavy. Compact. Water-resistant. Designed to disappear into your pack and show up when the sky doesn't cooperate.\n\nLink in bio — color #2 of 4 is live.",
      hashtags: "#DRFT #TrailSeries #NavyBlue #AdventureGear #Outdoors",
      chars: "263 / 2,200",
    },
    {
      body:
        "We tested this for 18 months. 3 washes. 2 mountains. 1 city.\n\nThe Trail Series Jacket in Navy is now live — and we mean it when we say it earns its place in your closet.\n\nLink in bio.",
      hashtags: "#DRFT #TrailSeries #FieldTested #NavyDrop #OutdoorEssentials",
      chars: "238 / 2,200",
    },
  ],
  email: [
    {
      body:
        "Subject: You left something behind. 🧥\n\nHey {first_name} —\n\nThe Trail Series jacket in Size M is still in your cart. We can hold it for you a little longer, but stock is moving fast and the Navy colorway is down to its last few.\n\nFinish your order today and we'll ship it within 24 hours.\n\n[ Complete Your Order → ]",
    },
    {
      body:
        "Subject: Your Trail Series is calling.\n\n{first_name}, the jacket in your cart is the most-loved color we've made in a year.\n\n→ Trail Series Jacket — Navy Blue — $189\n→ Free shipping on orders over $150\n→ Only 3 left in your size\n\nGrab it before someone else does.",
    },
    {
      body:
        "Subject: One question.\n\n{first_name} — was it the size, the color, or just timing?\n\nLet us know and we'll help you find the right one. Or finish what you started:\n\n→ Trail Series Jacket — Navy — Size M — $189\n[ Complete Your Order → ]",
    },
  ],
  adcopy: [
    {
      body:
        "Headline: Built for the trail. Tested in the city.\n\nPrimary text: The Trail Series Jacket is what happens when 18 months of field-testing collides with 0 corners cut. Water-resistant, packable, 4 colorways.\n\nCTA: Shop the drop",
    },
    {
      body:
        "Headline: Your new favorite jacket is also your most reliable one.\n\nPrimary text: Wind, rain, weekend hikes, Tuesday meetings — the Trail Series doesn't care which. Drop is live.\n\nCTA: See the gear",
    },
    {
      body:
        "Headline: We made it. The wild approved it.\n\nPrimary text: Trail Series Jacket. Trail-tested. City-approved. Made for the kind of weather that doesn't ask permission.\n\nCTA: Shop now",
    },
  ],
  product: [
    {
      body:
        "Trail Series Jacket — Navy Blue\n\nOur most-requested jacket in the most-requested color. Water-resistant 3-layer shell, packable to the size of a paperback, with the kind of cuffs and zippers that actually outlast a season.\n\n• 100% recycled face fabric\n• Underarm vents for full-day wear\n• Pack-down stuff sack included\n• 4 colorways — Navy, Black, Olive, Burnt Orange\n\nBuilt for the trail. Tested in the city.",
    },
    {
      body:
        "The Trail Series Jacket is the jacket we always wanted to make. Light enough to forget you're wearing it. Tough enough to keep wearing it when the weather turns. We over-engineered the parts that matter and trimmed away everything that didn't.\n\nWater-resistant · Packable · 4 colorways · $189",
    },
    {
      body:
        "If your weekend plans involve weather, this is the jacket. If they don't, it'll still be the most comfortable thing in your closet.\n\nWaterproof to 10,000mm. Packs into its own pocket. Comes in four colors that actually look good. Backed by our no-questions repair guarantee.",
    },
  ],
  story: [
    {
      body:
        "Slide 1: TRAIL SERIES — full bleed product shot in Navy\nSlide 2: Stat card — 18mo field-tested · 4 colorways · packable\nSlide 3: Lifestyle shot — talent wearing jacket against rain backdrop\nSlide 4: Detail shot — close-up on stitch + zipper detail\nSlide 5: Drop card — \"4 colors · live now\" · swipe-up to shop",
    },
    {
      body:
        "Slide 1: Hook — \"We tested this for 18 months. Here's what happened.\"\nSlide 2: Mountain B-roll with stat overlay\nSlide 3: Customer quote pull\nSlide 4: Product hero — Navy front\nSlide 5: Swipe-up — \"Drop is live\"",
    },
    {
      body:
        "Slide 1: Color reveal — \"Color #2 is here\"\nSlide 2: Behind the scenes — design table shot\nSlide 3: Detail — color swatch + stitch\nSlide 4: Customer mirror selfie testimonial\nSlide 5: Tap to shop the Navy drop",
    },
  ],
};

export function DrftContentStudio() {
  const [type, setType] = useState<ContentType>("instagram");
  const [brief, setBrief] = useState("");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Bold & Authentic");
  const [platform, setPlatform] = useState<(typeof PLATFORMS)[number]>("Feed Post");
  const [length, setLength] = useState<(typeof LENGTHS)[number]>("Medium");
  const [cta, setCta] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<ContentType | null>(null);
  const [variant, setVariant] = useState(0);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [rating, setRating] = useState(0);
  const [genStatus, setGenStatus] = useState(0);

  // Set placeholder default brief when type changes
  useEffect(() => {
    setResult(null);
    setVariant(0);
  }, [type]);

  function generate() {
    setGenerating(true);
    setResult(null);
    setGenStatus(0);
    window.setTimeout(() => setGenStatus(1), 800);
    window.setTimeout(() => setGenStatus(2), 1500);
    window.setTimeout(() => {
      setGenerating(false);
      setResult(type);
      setVariant(0);
    }, 2200);
  }

  function copyContent() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function saveContent() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[560px] flex flex-col" style={{ background: SHELL }}>
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3.5 border-b shrink-0" style={{ background: SURFACE, borderColor: BORDER }}>
        <div className="flex items-center gap-3">
          <span className="text-white text-base font-black italic">DRFT</span>
          <span className="text-sm" style={{ color: TEXT_DIM }}>
            Content Studio
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px]"
          style={{
            background: "rgba(220, 38, 38,0.10)",
            border: `1px solid rgba(220, 38, 38,0.25)`,
            color: ORANGE,
          }}
        >
          <IconSparkles size={10} />
          AI-Powered
        </span>
      </header>

      {/* Content type tabs */}
      <div className="border-b shrink-0 overflow-x-auto" style={{ background: SURFACE, borderColor: BORDER }}>
        <div className="flex gap-1 px-5 py-2 min-w-max">
          {TYPES.map((t) => {
            const active = type === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                className="px-3 py-2 text-xs whitespace-nowrap font-medium transition-colors"
                style={{
                  background: active ? "rgba(220, 38, 38,0.08)" : "transparent",
                  borderBottom: active ? `2px solid ${ORANGE}` : "2px solid transparent",
                  color: active ? ORANGE : TEXT_DIM,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Input */}
        <aside className="w-full lg:w-[42%] p-5 border-b lg:border-b-0 lg:border-r overflow-y-auto" style={{ background: SHELL, borderColor: BORDER }}>
          <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: TEXT_DIM }}>
            Brief
          </div>
          <textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            placeholder={PLACEHOLDERS[type]}
            className="w-full rounded-xl p-3.5 text-white text-sm leading-relaxed resize-none outline-none focus:border-red-500/30"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              minHeight: 112,
            }}
          />

          <Label>Tone</Label>
          <Pills options={TONES as unknown as string[]} value={tone} onChange={(v) => setTone(v as typeof tone)} />

          {type === "instagram" && (
            <>
              <Label>Platform</Label>
              <Pills options={PLATFORMS as unknown as string[]} value={platform} onChange={(v) => setPlatform(v as typeof platform)} />
            </>
          )}

          <Label>Length</Label>
          <Pills options={LENGTHS as unknown as string[]} value={length} onChange={(v) => setLength(v as typeof length)} />

          <div className="mt-4 flex items-center justify-between rounded-xl px-3 py-2.5" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <span className="text-xs" style={{ color: TEXT_BRAND }}>
              Include CTA
            </span>
            <Toggle on={cta} onChange={setCta} />
          </div>

          <div
            className="rounded-xl p-3 mt-4"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2">
              <IconRobot size={14} style={{ color: ORANGE }} />
              <span className="text-xs" style={{ color: TEXT_BRAND }}>
                Trained on 847 DRFT assets
              </span>
            </div>
            <div className="text-[10px] mt-1" style={{ color: ORANGE }}>
              Brand match: 96%
            </div>
          </div>

          <button
            type="button"
            onClick={generate}
            disabled={generating}
            className="mt-5 w-full py-3.5 rounded-xl text-sm font-black text-black transition-colors disabled:cursor-not-allowed"
            style={{ background: generating ? "#7c3a00" : ORANGE }}
          >
            {generating ? (
              <span className="inline-flex items-center gap-2 justify-center">
                <IconLoader2 size={14} className="animate-spin" />
                Generating…
              </span>
            ) : result ? (
              "Generate again →"
            ) : (
              "GENERATE CONTENT →"
            )}
          </button>
        </aside>

        {/* Output */}
        <section className="flex-1 p-5 overflow-y-auto" style={{ background: SHELL }}>
          <AnimatePresence mode="wait">
            {!generating && !result && (
              <m.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center h-full min-h-[260px]">
                <IconRobot size={48} stroke={1} style={{ color: BORDER_HARD }} />
                <div className="text-sm mt-4" style={{ color: BORDER_HARD }}>
                  Your content appears here.
                </div>
                <div className="text-xs mt-1" style={{ color: TEXT_FAINT }}>
                  Fill the brief and click Generate.
                </div>
              </m.div>
            )}

            {generating && (
              <m.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-2">
                <div className="text-xs text-center" style={{ color: TEXT_BRAND }}>
                  Generating 3 variants…
                </div>
                <div className="mt-4 space-y-3">
                  {[0, 1, 2].map((i) => (
                    <ShimmerBlock key={i} delay={i * 0.15} lines={3 - (i % 2)} />
                  ))}
                </div>
                <div className="text-[10px] text-center mt-4" style={{ color: TEXT_FAINT }}>
                  {genStatus === 0
                    ? "Reading brand voice spec…"
                    : genStatus === 1
                    ? "Applying DRFT tone…"
                    : "Checking brand voice match…"}
                </div>
              </m.div>
            )}

            {result && (
              <m.div key={`result-${result}-${variant}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="text-xs" style={{ color: TEXT_BRAND }}>
                    3 variants generated · Brand match: 96%
                  </div>
                  <div className="text-[10px]" style={{ color: TEXT_FAINT }}>
                    Generated in 2.1s
                  </div>
                </div>

                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {[0, 1, 2].map((v) => {
                    const active = variant === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVariant(v)}
                        className="rounded-lg px-3 py-1.5 text-[11px] font-medium border"
                        style={{
                          background: active ? "rgba(220, 38, 38,0.10)" : "transparent",
                          borderColor: active ? "rgba(220, 38, 38,0.35)" : BORDER,
                          color: active ? ORANGE : TEXT_DIM,
                        }}
                      >
                        Variant {v + 1}
                      </button>
                    );
                  })}
                </div>

                <div
                  className="rounded-2xl p-5 mt-3"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="text-[9px] uppercase tracking-wider mb-3" style={{ color: TEXT_DIM }}>
                    {result === "instagram"
                      ? "📸 Instagram Caption"
                      : result === "email"
                      ? "📧 Email"
                      : result === "adcopy"
                      ? "🎯 Ad Copy"
                      : result === "product"
                      ? "🏷️ Product Description"
                      : "📱 Story Script"}
                  </div>
                  <pre
                    className="text-white text-[12.5px] leading-relaxed whitespace-pre-wrap font-sans"
                    style={{ fontFamily: "inherit" }}
                  >
                    {VARIANTS[result][variant].body}
                  </pre>
                  {VARIANTS[result][variant].hashtags && (
                    <div className="text-xs mt-3" style={{ color: ORANGE }}>
                      {VARIANTS[result][variant].hashtags}
                    </div>
                  )}
                  {VARIANTS[result][variant].chars && (
                    <div className="text-[10px] mt-2" style={{ color: TEXT_DIM }}>
                      {VARIANTS[result][variant].chars}
                    </div>
                  )}
                </div>

                {/* Action row */}
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  <ActionButton onClick={copyContent} active={copied}>
                    {copied ? <><IconCheck size={11} stroke={3} /> Copied</> : <><IconCopy size={11} /> Copy</>}
                  </ActionButton>
                  <ActionButton onClick={saveContent} active={saved}>
                    {saved ? <><IconCheck size={11} stroke={3} /> Saved</> : <><IconBookmark size={11} /> Save</>}
                  </ActionButton>
                  <button
                    type="button"
                    onClick={generate}
                    className="text-xs inline-flex items-center gap-1"
                    style={{ color: ORANGE }}
                  >
                    <IconRefresh size={11} /> Regenerate
                  </button>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="text-[10px]" style={{ color: TEXT_FAINT }}>
                      Rate:
                    </span>
                    {[1, 2, 3, 4, 5].map((s) => {
                      const filled = s <= rating;
                      const Icon = filled ? IconStarFilled : IconStar;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setRating(s)}
                          aria-label={`Rate ${s}`}
                          style={{ color: filled ? ORANGE : TEXT_FAINT }}
                        >
                          <Icon size={12} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Brand score */}
                <div
                  className="mt-4 rounded-xl p-3"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                >
                  <div className="text-[9px] uppercase tracking-wider mb-2" style={{ color: TEXT_DIM }}>
                    Brand Voice Analysis
                  </div>
                  <ScoreRow label="Tone match" pct={96} color="#34D399" />
                  <ScoreRow label="Style consistency" pct={94} color="#34D399" />
                  <ScoreRow label="CTA strength" pct={91} color={ORANGE} />
                  <ScoreRow label="Audience fit" pct={89} color={ORANGE} />
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-wider mt-4 mb-1.5" style={{ color: TEXT_DIM }}>
      {children}
    </div>
  );
}

function Pills({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className="rounded-full px-3 py-1 text-[11px] border"
            style={{
              background: active ? "rgba(220, 38, 38,0.10)" : "transparent",
              borderColor: active ? "rgba(220, 38, 38,0.35)" : BORDER,
              color: active ? ORANGE : TEXT_DIM,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!on)}
      className="relative w-9 h-5 rounded-full"
      style={{ background: on ? ORANGE : BORDER }}
      aria-pressed={on}
    >
      <span
        className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform"
        style={{ transform: on ? "translateX(16px)" : "translateX(0)" }}
      />
    </button>
  );
}

function ShimmerBlock({ delay, lines }: { delay: number; lines: number }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="rounded-xl p-3"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {Array.from({ length: lines + 2 }).map((_, i) => (
        <div
          key={i}
          className="h-3 rounded mt-2 first:mt-0 overflow-hidden relative"
          style={{ background: SURFACE_CARD, width: `${60 + Math.random() * 30}%` }}
        >
          <m.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(220, 38, 38,0.18), transparent)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          />
        </div>
      ))}
    </m.div>
  );
}

function ActionButton({ onClick, active, children }: { onClick: () => void; active?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] border transition-colors"
      style={{
        background: active ? "rgba(16,185,129,0.10)" : "transparent",
        borderColor: active ? "rgba(16,185,129,0.4)" : BORDER,
        color: active ? "#34D399" : TEXT_DIM,
      }}
    >
      {children}
    </button>
  );
}

function ScoreRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="mt-1.5">
      <div className="flex items-center justify-between text-[10px]">
        <span style={{ color: TEXT_BRAND }}>{label}</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div className="h-0.5 rounded mt-1" style={{ background: SURFACE_CARD }}>
        <m.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}
