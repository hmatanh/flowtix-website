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

      {open && (
        <AccessibilityPanel
          prefs={prefs}
          setPrefs={setPrefs}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
