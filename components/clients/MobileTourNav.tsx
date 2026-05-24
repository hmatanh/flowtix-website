"use client";

import { useEffect, useRef } from "react";

/**
 * MobileTourNav — drop-in mobile navigation header + footer for the
 * interactive tour components.
 *
 * Behaviour:
 * - Renders a dot indicator with the active dot widened (matches brief).
 * - Renders Prev / Next arrow buttons with `<count>/<total>` label.
 * - Wires swipe-left / swipe-right gestures on the screen container
 *   (via the ref) so users can swipe to switch tabs natively.
 *
 * The component is intentionally a thin shell — it does NOT own the active
 * state. The parent owns `index` + `setIndex`, the parent passes the labels.
 * This means each existing tour (KOVA / SERŌ / AURUM / DRFT / LINX) keeps
 * its single source of truth — we just bolt on the mobile gestures + UI.
 */

type Props = {
  labels: string[];
  index: number;
  setIndex: (i: number) => void;
  accentColor: string;
  /** ref to the scroll/swipe container — swipe gestures bind here */
  swipeContainerRef?: React.RefObject<HTMLElement | null>;
};

export function MobileTourNav({ labels, index, setIndex, accentColor, swipeContainerRef }: Props) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  function navigate(delta: number) {
    const next = index + delta;
    if (next < 0 || next >= labels.length) return;
    setIndex(next);
  }

  // Attach swipe handlers to the container
  useEffect(() => {
    const el = swipeContainerRef?.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (startX.current == null || startY.current == null) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX.current;
      const dy = t.clientY - startY.current;
      startX.current = null;
      startY.current = null;
      // Horizontal swipe only — ignore vertical
      if (Math.abs(dy) > Math.abs(dx)) return;
      if (Math.abs(dx) < 60) return;
      if (dx < 0) navigate(1);
      else navigate(-1);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, labels.length, swipeContainerRef]);

  return (
    <div className="mobile-only">
      {/* Top — current label + dot indicator */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span
          className="text-[11px] font-medium uppercase tracking-[0.18em] truncate"
          style={{ color: accentColor }}
        >
          {labels[index]}
        </span>
        <div className="flex gap-1.5 shrink-0">
          {labels.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${labels[i]}`}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === index ? 20 : 6,
                background: i === index ? accentColor : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Bottom arrows + count display — render this BELOW the screen container.
 */
export function MobileTourArrows({
  labels,
  index,
  setIndex,
  accentColor,
}: Props) {
  return (
    <div className="mobile-only flex items-center justify-between mt-4 px-1">
      <button
        type="button"
        onClick={() => index > 0 && setIndex(index - 1)}
        disabled={index === 0}
        className="inline-flex items-center gap-1.5 text-xs disabled:opacity-25 py-3 pr-3"
        style={{ color: accentColor, minHeight: 44 }}
      >
        ← Prev
      </button>
      <span className="text-[11px]" style={{ color: "#444" }}>
        {index + 1} / {labels.length}
      </span>
      <button
        type="button"
        onClick={() => index < labels.length - 1 && setIndex(index + 1)}
        disabled={index === labels.length - 1}
        className="inline-flex items-center gap-1.5 text-xs disabled:opacity-25 py-3 pl-3"
        style={{ color: accentColor, minHeight: 44 }}
      >
        Next →
      </button>
    </div>
  );
}
