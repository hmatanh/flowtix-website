"use client";

/**
 * AccessibilityWidget — a small "Display preferences" panel.
 *
 * NOT an accessibility overlay. The real accessibility of this site
 * lives in the code: semantic HTML, heading hierarchy, ARIA labels,
 * focus states, color contrast, keyboard navigation, scaled-to-fit
 * mockups, etc. This widget gives visitors OPTIONAL UI controls on
 * top of that — text size, high contrast, reduced motion. Saved per
 * device in localStorage.
 *
 * Why we built it rather than installing an overlay vendor
 * (AccessiBe / UserWay / EqualWeb / Recite Me): the accessibility
 * community has documented in detail that overlays interfere with
 * assistive tech and create rather than reduce legal liability
 * (see overlayfactsheet.com). A small first-party preference panel
 * carries none of those harms, costs ~3 KB, and matches the
 * Flowtix design language exactly.
 */

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { IconAccessible } from "@tabler/icons-react";

const AccessibilityPanel = dynamic(
  () =>
    import("./AccessibilityPanel").then((m) => ({
      default: m.AccessibilityPanel,
    })),
  { ssr: false }
);

const STORAGE_KEY = "flowtix-a11y-prefs";
const VERSION = 1;

type FontScale = 1 | 1.1 | 1.25;

type Prefs = {
  fontScale: FontScale;
  highContrast: boolean;
  reducedMotion: boolean;
};

const DEFAULT_PREFS: Prefs = {
  fontScale: 1,
  highContrast: false,
  reducedMotion: false,
};

function applyPrefs(prefs: Prefs): void {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.classList.toggle("a11y-text-large", prefs.fontScale === 1.1);
  html.classList.toggle("a11y-text-xl", prefs.fontScale === 1.25);
  html.classList.toggle("a11y-high-contrast", prefs.highContrast);
  html.classList.toggle("a11y-reduced-motion", prefs.reducedMotion);
}

function readPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== VERSION) return DEFAULT_PREFS;
    return { ...DEFAULT_PREFS, ...parsed.prefs };
  } catch {
    return DEFAULT_PREFS;
  }
}

function writePrefs(prefs: Prefs): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: VERSION, prefs })
    );
  } catch {}
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = readPrefs();
    setPrefs(stored);
    applyPrefs(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyPrefs(prefs);
    writePrefs(prefs);
  }, [prefs, mounted]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const reset = useCallback(() => setPrefs(DEFAULT_PREFS), []);
  const setScale = useCallback(
    (next: FontScale) => setPrefs((p) => ({ ...p, fontScale: next })),
    []
  );

  if (!mounted) return null;

  return (
    <>
      {/* Floating trigger — bottom-left to avoid BackToTop (bottom-right) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Display preferences"
        aria-expanded={open}
        aria-controls="flowtix-a11y-panel"
        className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-[9996] inline-flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
        style={{
          background: "rgba(13,13,13,0.85)",
          borderColor: "rgba(255,255,255,0.10)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
        }}
      >
        <IconAccessible size={20} stroke={1.8} className="text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            id="flowtix-a11y-panel"
            role="dialog"
            aria-label="Display preferences"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed bottom-40 md:bottom-20 left-4 md:left-6 z-[9999] w-[290px] max-w-[calc(100vw-2rem)] rounded-2xl border bg-[#0D0D0D] p-5"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.65)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className="text-white text-[13px] font-semibold tracking-tight">
                  Display preferences
                </div>
                <div className="text-[#888] text-[10.5px] mt-0.5 leading-snug">
                  Saved on this device
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close display preferences"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[#aaa] hover:text-white hover:bg-white/5 transition-colors -mt-1 -mr-1 shrink-0"
              >
                <IconX size={13} stroke={2.2} />
              </button>
            </div>

            {/* Text size */}
            <div className="flex items-center justify-between gap-3 py-2">
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <span className="text-[#888] text-[10.5px] font-mono tabular-nums mt-0.5">
                  Aa
                </span>
                <div className="min-w-0">
                  <div className="text-white text-[12px] font-medium leading-tight">
                    Text size
                  </div>
                  <div className="text-[#888] text-[10px] mt-0.5">
                    {prefs.fontScale === 1
                      ? "Default"
                      : prefs.fontScale === 1.1
                      ? "Large"
                      : "Extra large"}
                  </div>
                </div>
              </div>
              <div
                className="inline-flex items-center gap-0.5 rounded-lg border p-0.5 shrink-0"
                style={{
                  borderColor: "rgba(255,255,255,0.10)",
                  background: "#080808",
                }}
              >
                <button
                  type="button"
                  aria-label="Decrease text size"
                  disabled={prefs.fontScale === 1}
                  onClick={() =>
                    setScale(prefs.fontScale === 1.25 ? 1.1 : 1)
                  }
                  className="inline-flex items-center justify-center w-7 h-7 rounded text-[#aaa] hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <IconMinus size={11} stroke={2.4} />
                </button>
                <span className="text-white text-[10.5px] font-mono tabular-nums w-7 text-center">
                  {Math.round(prefs.fontScale * 100)}%
                </span>
                <button
                  type="button"
                  aria-label="Increase text size"
                  disabled={prefs.fontScale === 1.25}
                  onClick={() =>
                    setScale(prefs.fontScale === 1 ? 1.1 : 1.25)
                  }
                  className="inline-flex items-center justify-center w-7 h-7 rounded text-[#aaa] hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <IconPlus size={11} stroke={2.4} />
                </button>
              </div>
            </div>

            <Divider />

            <Toggle
              icon={<IconContrast size={13} stroke={1.8} />}
              label="High contrast"
              hint="Boosts text + border contrast"
              checked={prefs.highContrast}
              onChange={(v) =>
                setPrefs((p) => ({ ...p, highContrast: v }))
              }
            />

            <Divider />

            <Toggle
              icon={<IconHandStop size={13} stroke={1.8} />}
              label="Reduce motion"
              hint="Pauses entrance + scroll animations"
              checked={prefs.reducedMotion}
              onChange={(v) =>
                setPrefs((p) => ({ ...p, reducedMotion: v }))
              }
            />

            {/* Reset */}
            <button
              type="button"
              onClick={reset}
              className="mt-5 w-full inline-flex items-center justify-center gap-1.5 text-[#888] hover:text-white text-[11px] py-2 rounded-lg border border-[#1a1a1a] hover:border-[#2a2a2a] hover:bg-white/[0.02] transition-colors"
            >
              <IconRefresh size={11} stroke={2.2} />
              Reset to defaults
            </button>

            <p className="text-[#555] text-[10px] mt-4 leading-relaxed">
              Optional preferences — the site is built to meet WCAG 2.1
              AA by default. See our{" "}
              <a
                href="/accessibility"
                className="text-[#888] underline decoration-[#333] underline-offset-2 hover:text-white"
              >
                Accessibility Statement
              </a>
              .
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full my-1"
      style={{ background: "rgba(255,255,255,0.06)" }}
    />
  );
}

function Toggle({
  icon,
  label,
  hint,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  hint: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex items-start gap-2.5 min-w-0 flex-1">
        <span className="text-[#888] mt-0.5 shrink-0" aria-hidden="true">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-white text-[12px] font-medium leading-tight">
            {label}
          </div>
          <div className="text-[#888] text-[10px] mt-0.5 leading-snug">
            {hint}
          </div>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="relative inline-flex items-center w-9 h-5 rounded-full transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
        style={{ background: checked ? "#3B82F6" : "#1f1f1f" }}
      >
        <span
          aria-hidden="true"
          className="block w-3.5 h-3.5 bg-white rounded-full transition-transform"
          style={{ transform: checked ? "translateX(18px)" : "translateX(3px)" }}
        />
      </button>
    </div>
  );
}
