"use client";

import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Loader is dynamically imported so its JS doesn't sit in the main bundle.
// It's only needed for the first visit of a session (we skip on subsequent
// navigations using sessionStorage).
const Loader = dynamic(
  () => import("./Loader").then((m) => ({ default: m.Loader })),
  { ssr: false }
);

const SESSION_KEY = "flowtix-loaded";

export function ClientShell({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Skip the loader if already shown this session — instant content on
    // repeat visits and internal navigations.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) {
      setLoaded(true);
    } else {
      setShouldLoad(true);
    }
  }, []);

  function handleComplete() {
    setLoaded(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable — fine
    }
  }

  return (
    <>
      {mounted && shouldLoad && !loaded && (
        <Loader onComplete={handleComplete} />
      )}
      <div
        className="min-h-screen flex flex-col"
        style={{
          opacity: loaded || !mounted ? 1 : 0,
          transition: "opacity 0.05s",
        }}
      >
        {children}
      </div>
    </>
  );
}
