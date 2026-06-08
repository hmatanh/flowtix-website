"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "flowtix-cookie-consent";
/** Bump this when consent terms change - old consents become "not decided". */
const CONSENT_VERSION = 1;
/** Re-ask after this many days even if user already chose. */
const CONSENT_TTL_DAYS = 365;
/** Custom event other components can dispatch to re-open the banner. */
const REOPEN_EVENT = "flowtix:reopen-cookie-banner";

type StoredConsent = {
  value: "accepted" | "declined";
  version: number;
  ts: number;
};

function readConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      parsed &&
      (parsed.value === "accepted" || parsed.value === "declined") &&
      typeof parsed.version === "number" &&
      typeof parsed.ts === "number" &&
      parsed.version === CONSENT_VERSION &&
      Date.now() - parsed.ts < CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000
    ) {
      return parsed as StoredConsent;
    }
    return null;
  } catch {
    return null;
  }
}

function writeConsent(value: "accepted" | "declined") {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, version: CONSENT_VERSION, ts: Date.now() })
    );
  } catch {}
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Effectively first-paint reveal - matters the moment any tracker is added.
    const t = setTimeout(() => {
      if (!readConsent()) setVisible(true);
    }, 1800);
    // Allow Footer's "Cookie preferences" link to re-open this banner.
    const reopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(REOPEN_EVENT, reopen);
    };
  }, []);

  // No Escape-to-dismiss - EDPB guidance: a dismiss-without-choice is not
  // a valid consent decision. The user must Accept or Decline explicitly.

  function accept() {
    writeConsent("accepted");
    setVisible(false);
  }

  function decline() {
    writeConsent("declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-40 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm z-[9997] safe-area-bottom"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#111] border border-[#1a1a1a] flex items-center justify-center text-[10px]">
                🍪
              </div>
              <span className="text-white text-sm font-semibold">
                Cookie Notice
              </span>
            </div>
            <p className="text-[#888] text-xs leading-relaxed mb-4">
              We use essential cookies only - no tracking, no advertising. See
              our{" "}
              <Link
                href="/privacy"
                className="text-[#3B82F6] hover:text-blue-400 underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            {/* Equal-weight buttons - no dark-pattern primary, per EDPB Guidelines 03/2022. */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={accept}
                className="flex-1 border border-[#1f1f1f] bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:border-[#3a3a3a] hover:bg-[#161616] transition-colors min-h-[44px]"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={decline}
                className="flex-1 border border-[#1f1f1f] bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:border-[#3a3a3a] hover:bg-[#161616] transition-colors min-h-[44px]"
              >
                Decline
              </button>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Programmatically re-open the cookie banner. Use to wire a
 * "Cookie preferences" link in the footer so users can withdraw
 * consent per GDPR Art. 7(3).
 */
export function reopenCookieBanner() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
  }
}
