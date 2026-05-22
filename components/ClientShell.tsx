"use client";

import { ReactNode, useEffect, useState } from "react";
import { Loader } from "./Loader";
import { Cursor } from "./Cursor";

export function ClientShell({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Cursor />
      {mounted && !loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div
        className="min-h-screen flex flex-col"
        style={{
          opacity: loaded || !mounted ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      >
        {children}
      </div>
    </>
  );
}
