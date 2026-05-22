"use client";

import { ReactNode, useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconX, IconArrowsMaximize } from "@tabler/icons-react";

export type Screenshot = {
  id: string;
  title: string;
  description: string;
  type: "desktop" | "mobile";
  url?: string;
  component: ReactNode;
};

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-2 sm:p-3 border"
      style={{
        background: "#1a1a1a",
        borderColor: "#222",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
      }}
    >
      <div className="bg-[#111] rounded-xl mb-2 px-3 py-2.5 flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 bg-[#0a0a0a] rounded-md px-3 py-1 mx-2 text-[#333] text-[11px] font-mono truncate text-center">
          {url}
        </div>
        <div className="w-5 h-5 rounded-full bg-[#222]" />
      </div>
      <div className="rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-56 sm:w-64 mx-auto rounded-[44px] p-3 border"
      style={{
        background: "#1a1a1a",
        borderColor: "#222",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
      }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-20" />
      <div className="rounded-[34px] overflow-hidden relative">{children}</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#333]" />
    </div>
  );
}

function ScreenshotCard({
  screenshot,
  onClick,
  size = "default",
}: {
  screenshot: Screenshot;
  onClick: () => void;
  size?: "default" | "featured";
}) {
  return (
    <div className={size === "featured" ? "lg:col-span-2" : ""}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Expand ${screenshot.title}`}
        className="group block w-full text-left transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
      >
        <div className="relative">
          {screenshot.type === "desktop" ? (
            <BrowserFrame url={screenshot.url ?? "app.example.com"}>
              <div className="aspect-[16/10] overflow-hidden">
                {screenshot.component}
              </div>
            </BrowserFrame>
          ) : (
            <PhoneFrame>
              <div className="aspect-[9/19.5] overflow-hidden">
                {screenshot.component}
              </div>
            </PhoneFrame>
          )}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 text-white">
            <IconArrowsMaximize size={14} stroke={1.5} />
          </div>
        </div>
      </button>
      <div className="mt-4">
        <div className="text-white text-sm font-semibold tracking-tight">
          {screenshot.title}
        </div>
        <div className="text-[#444] text-xs mt-1 leading-relaxed">
          {screenshot.description}
        </div>
      </div>
    </div>
  );
}

export function ScreenshotGallery({
  screenshots,
  accentColor = "#3B82F6",
  clientName = "",
}: {
  screenshots: Screenshot[];
  accentColor?: string;
  clientName?: string;
}) {
  const [active, setActive] = useState<Screenshot | null>(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  if (screenshots.length === 0) return null;

  const [featured, ...rest] = screenshots;

  return (
    <>
      <div>
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <div>
            <div
              className="text-[10px] tracking-widest uppercase mb-2"
              style={{ color: accentColor, opacity: 0.7 }}
            >
              Design Work
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {clientName ? `Inside ${clientName}` : "The screens we built"}
            </h2>
          </div>
          <span
            className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              color: accentColor,
              border: `1px solid ${accentColor}33`,
              background: `${accentColor}0d`,
            }}
          >
            {screenshots.length} screens
          </span>
        </div>

        {/* Featured */}
        <ScreenshotCard
          screenshot={featured}
          onClick={() => setActive(featured)}
          size="featured"
        />

        {/* Grid */}
        {rest.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {rest.map((s) => (
              <ScreenshotCard
                key={s.id}
                screenshot={s}
                onClick={() => setActive(s)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[#111] border border-[#222] hover:bg-[#1a1a1a] inline-flex items-center justify-center text-white z-[10000]"
            >
              <IconX size={18} stroke={1.5} />
            </button>

            <m.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full ${
                active.type === "mobile"
                  ? "max-w-md"
                  : "max-w-[90vw] lg:max-w-6xl"
              }`}
            >
              {active.type === "desktop" ? (
                <BrowserFrame url={active.url ?? "app.example.com"}>
                  <div className="aspect-[16/10] overflow-hidden">
                    {active.component}
                  </div>
                </BrowserFrame>
              ) : (
                <PhoneFrame>
                  <div className="aspect-[9/19.5] overflow-hidden">
                    {active.component}
                  </div>
                </PhoneFrame>
              )}
              <div className="mt-6 max-w-2xl mx-auto text-center">
                <div className="text-white text-lg font-semibold tracking-tight">
                  {active.title}
                </div>
                <div className="text-[#666] text-sm mt-2 leading-relaxed">
                  {active.description}
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
