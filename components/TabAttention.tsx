"use client";

import { useEffect } from "react";

const AWAY_TITLE = "👋 Welcome back — Flowtix AI";

export function TabAttention() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.title;

    function onVisibility() {
      if (document.hidden) {
        document.title = AWAY_TITLE;
      } else {
        document.title = original;
      }
    }

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.title = original;
    };
  }, []);

  return null;
}
