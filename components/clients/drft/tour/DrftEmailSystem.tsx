"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconMail,
  IconAdjustmentsHorizontal,
  IconLayout,
  IconUsers,
  IconChartBar,
  IconDeviceDesktop,
  IconDeviceMobile,
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
} from "./_shared";
import { ProductSilhouette } from "./ProductSilhouette";

type CampaignId = "abandoned_cart" | "welcome_series" | "trail_launch" | "restock";

const CAMPAIGNS: {
  id: CampaignId;
  name: string;
  type: "Automation" | "Campaign";
  openRate: string;
  sent: string;
  active: boolean;
}[] = [
  { id: "abandoned_cart", name: "Abandoned Cart Recovery", type: "Automation", openRate: "34.2%", sent: "1,847 sent", active: true },
  { id: "welcome_series", name: "New Subscriber Welcome", type: "Automation", openRate: "41.8%", sent: "312 sent", active: true },
  { id: "trail_launch", name: "Trail Series Launch", type: "Campaign", openRate: "28.4%", sent: "4,521 sent", active: false },
  { id: "restock", name: "Restock Alert — Black", type: "Campaign", openRate: "52.1%", sent: "892 sent", active: false },
];

const NAV = [
  { id: "campaigns", label: "Campaigns", Icon: IconMail },
  { id: "automations", label: "Automations", Icon: IconAdjustmentsHorizontal },
  { id: "templates", label: "Templates", Icon: IconLayout },
  { id: "subscribers", label: "Subscribers", Icon: IconUsers },
  { id: "analytics", label: "Analytics", Icon: IconChartBar },
];

export function DrftEmailSystem() {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignId>("abandoned_cart");
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  const c = CAMPAIGNS.find((c) => c.id === selectedCampaign)!;

  return (
    <div className="h-full min-h-[420px] sm:min-h-[560px] flex" style={{ background: SHELL }}>
      {/* Sidebar — desktop */}
      <aside className="hidden md:flex flex-col w-44 py-4 border-r shrink-0" style={{ background: SHELL, borderColor: BORDER }}>
        <div className="text-[9px] uppercase tracking-wider px-4 mb-3" style={{ color: TEXT_DIM }}>
          Email System
        </div>
        {NAV.map(({ id, label, Icon }, i) => {
          const active = i === 0;
          return (
            <button
              key={id}
              type="button"
              className="flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors text-left"
              style={{
                background: active ? "rgba(220, 38, 38,0.10)" : "transparent",
                color: active ? ORANGE : TEXT_FAINT,
                borderRight: active ? `2px solid ${ORANGE}` : "2px solid transparent",
              }}
            >
              <Icon size={13} stroke={1.7} />
              {label}
            </button>
          );
        })}
        <div className="mt-auto mx-3 rounded-xl p-3" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <div className="text-[9px] uppercase" style={{ color: TEXT_FAINT }}>
            This month
          </div>
          <div className="text-white text-sm font-bold mt-1">1,847 sent</div>
          <div className="text-[10px] mt-0.5" style={{ color: ORANGE }}>
            34.2% avg open
          </div>
        </div>
      </aside>

      {/* Mobile horizontal nav */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-10 flex justify-around py-2 border-b" style={{ background: SHELL, borderColor: BORDER }}>
        {NAV.map(({ id, label, Icon }, i) => {
          const active = i === 0;
          return (
            <button
              key={id}
              type="button"
              aria-label={label}
              className="p-2"
              style={{ color: active ? ORANGE : TEXT_FAINT }}
            >
              <Icon size={14} stroke={1.8} />
            </button>
          );
        })}
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden md:pt-0 pt-12">
        {/* Campaign list */}
        <div className="border-b" style={{ borderColor: BORDER }}>
          <div className="text-white text-xs font-semibold px-5 pt-4 pb-3">Active Campaigns</div>
          <div>
            {CAMPAIGNS.map((c) => {
              const active = selectedCampaign === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCampaign(c.id)}
                  className="w-full text-left px-5 py-3 flex items-center justify-between gap-3 transition-colors border-b last:border-b-0"
                  style={{
                    background: active ? SURFACE : "transparent",
                    borderColor: SHELL,
                  }}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-white text-xs font-medium truncate">{c.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[9px] uppercase tracking-wider rounded px-1.5 py-0.5"
                        style={{
                          background: SURFACE,
                          color: c.type === "Automation" ? ORANGE : TEXT_BRAND,
                        }}
                      >
                        {c.type}
                      </span>
                      <span
                        className="block w-1.5 h-1.5 rounded-full"
                        style={{
                          background: c.active ? "#34D399" : TEXT_FAINT,
                          boxShadow: c.active ? "0 0 4px #34D399" : "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold tabular-nums" style={{ color: ORANGE }}>
                      {c.openRate}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: TEXT_FAINT }}>
                      {c.sent}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Email preview */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
            <div className="text-white text-xs font-semibold truncate">Preview: {c.name}</div>
            <div className="flex gap-1 rounded-lg p-0.5" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                aria-label="Desktop preview"
                className="rounded-md px-2 py-1"
                style={{
                  background: device === "desktop" ? "rgba(220, 38, 38,0.10)" : "transparent",
                  color: device === "desktop" ? ORANGE : TEXT_DIM,
                }}
              >
                <IconDeviceDesktop size={12} stroke={1.8} />
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                aria-label="Mobile preview"
                className="rounded-md px-2 py-1"
                style={{
                  background: device === "mobile" ? "rgba(220, 38, 38,0.10)" : "transparent",
                  color: device === "mobile" ? ORANGE : TEXT_DIM,
                }}
              >
                <IconDeviceMobile size={12} stroke={1.8} />
              </button>
            </div>
          </div>

          {/* Email render */}
          <AnimatePresence mode="wait">
            <m.div
              key={selectedCampaign + device}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EmailPreview campaignId={selectedCampaign} mobile={device === "mobile"} />
            </m.div>
          </AnimatePresence>

          {/* Metrics */}
          <div className="mt-5 pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: BORDER }}>
            <Metric label={`Sent: ${c.sent.replace(" sent", "")}`} value="" />
            <Metric label="Opened" value={c.openRate} accent />
            <Metric label="Clicked" value="8.1%" accent />
            <Metric label="Recovered" value="$2,268" emerald />
          </div>
        </div>
      </main>
    </div>
  );
}

function Metric({ label, value, accent, emerald }: { label: string; value: string; accent?: boolean; emerald?: boolean }) {
  return (
    <div
      className="rounded-lg px-3 py-1.5 text-[10px] flex items-center gap-1"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        color: emerald ? "#34D399" : accent ? ORANGE : "#fff",
      }}
    >
      <span style={{ color: TEXT_DIM }}>{label}</span>
      {value && <span className="font-semibold tabular-nums">{value}</span>}
    </div>
  );
}

function EmailPreview({ campaignId, mobile }: { campaignId: CampaignId; mobile: boolean }) {
  const wrapper = (children: React.ReactNode) => (
    <div
      className="rounded-xl overflow-hidden mx-auto"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        width: mobile ? "min(260px, 100%)" : "100%",
      }}
    >
      {children}
    </div>
  );

  if (campaignId === "abandoned_cart") {
    return (
      <>
        <div className="mb-3">
          <div className="text-[10px]" style={{ color: TEXT_DIM }}>
            <span className="font-semibold text-white">Subject:</span> You left something behind. 🧥
          </div>
          <div className="text-[10px] mt-1" style={{ color: TEXT_FAINT }}>
            Preview: The Trail Series jacket in your size is still available…
          </div>
        </div>
        {wrapper(
          <>
            <div className="px-6 py-4 text-center" style={{ background: SHELL }}>
              <span className="text-white text-lg font-black italic">DRFT</span>
            </div>
            <div className="h-24 flex items-center justify-center relative" style={{ background: SURFACE_CARD }}>
              <ProductSilhouette kind="jacket" colorId="navy" size="sm" />
              <div
                className="absolute bottom-2 left-0 right-0 text-center text-[10px] tracking-wider"
                style={{ color: TEXT_BRAND }}
              >
                TRAIL SERIES · NAVY BLUE
              </div>
            </div>
            <div className="px-5 py-5">
              <div className="text-white text-base font-black text-center">You almost had it.</div>
              <p className="text-xs text-center mt-2 leading-relaxed" style={{ color: TEXT_BRAND }}>
                The Trail Series jacket in your size is still available — but we can't hold it forever.
              </p>
              <div
                className="rounded-xl p-3 mt-4 flex items-center gap-3"
                style={{ background: SHELL }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: SURFACE_CARD }}>
                  <ProductSilhouette kind="jacket" colorId="navy" size="sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs font-bold truncate">Trail Series Jacket</div>
                  <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                    Size M · Navy Blue
                  </div>
                </div>
                <div className="text-xs font-bold shrink-0" style={{ color: ORANGE }}>
                  $189.00
                </div>
              </div>
              <div className="text-center text-xs font-semibold mt-3" style={{ color: ORANGE }}>
                ⚡ Only 3 left in your size
              </div>
              <div
                className="mt-4 py-3 rounded-xl text-center text-sm font-black text-black"
                style={{ background: ORANGE }}
              >
                COMPLETE YOUR ORDER →
              </div>
              <div className="text-[10px] text-center mt-3" style={{ color: TEXT_FAINT }}>
                Orders ship within 24 hours.
              </div>
            </div>
            <div
              className="px-6 py-3 text-center text-[9px] border-t"
              style={{ background: SHELL, borderColor: BORDER, color: BORDER }}
            >
              Unsubscribe · View in browser · DRFT · Portland, OR
            </div>
          </>,
        )}
      </>
    );
  }

  if (campaignId === "welcome_series") {
    return (
      <>
        <div className="mb-3 text-[10px]" style={{ color: TEXT_DIM }}>
          <span className="font-semibold text-white">Subject:</span> Welcome to the DRFT — here's 10% off.
        </div>
        {wrapper(
          <>
            <div className="px-6 py-4 text-center" style={{ background: SHELL }}>
              <span className="text-white text-lg font-black italic">DRFT</span>
            </div>
            <div className="px-5 py-5">
              <div className="text-white text-base font-black text-center">Welcome to the DRFT.</div>
              <p className="text-xs text-center mt-2 leading-relaxed" style={{ color: TEXT_BRAND }}>
                We make gear that earns its place. As a thank-you for joining: 10% off your first order.
              </p>
              <div
                className="mt-4 py-3 rounded-xl text-center text-sm font-black text-black"
                style={{ background: ORANGE }}
              >
                CLAIM 10% OFF →
              </div>
            </div>
          </>,
        )}
      </>
    );
  }

  if (campaignId === "trail_launch") {
    return (
      <>
        <div className="mb-3 text-[10px]" style={{ color: TEXT_DIM }}>
          <span className="font-semibold text-white">Subject:</span> Trail Series — live now.
        </div>
        {wrapper(
          <>
            <div className="px-6 py-4 text-center" style={{ background: SHELL }}>
              <span className="text-white text-lg font-black italic">DRFT</span>
            </div>
            <div className="h-24 flex items-center justify-center" style={{ background: SURFACE_CARD }}>
              <ProductSilhouette kind="jacket" colorId="orange" size="md" />
            </div>
            <div className="px-5 py-5">
              <div className="text-white text-base font-black text-center">The wait is over.</div>
              <p className="text-xs text-center mt-2 leading-relaxed" style={{ color: TEXT_BRAND }}>
                Trail Series in 4 colorways. Water-resistant. Packable. Built to last.
              </p>
              <div className="mt-4 py-3 rounded-xl text-center text-sm font-black text-black" style={{ background: ORANGE }}>
                SHOP THE DROP →
              </div>
            </div>
          </>,
        )}
      </>
    );
  }

  // restock
  return (
    <>
      <div className="mb-3 text-[10px]" style={{ color: TEXT_DIM }}>
        <span className="font-semibold text-white">Subject:</span> Trail Series — Black is back.
      </div>
      {wrapper(
        <>
          <div className="px-6 py-4 text-center" style={{ background: SHELL }}>
            <span className="text-white text-lg font-black italic">DRFT</span>
          </div>
          <div className="h-24 flex items-center justify-center" style={{ background: SURFACE_CARD }}>
            <ProductSilhouette kind="jacket" colorId="black" size="md" />
          </div>
          <div className="px-5 py-5">
            <div className="text-white text-base font-black text-center">You waitlisted. We delivered.</div>
            <p className="text-xs text-center mt-2 leading-relaxed" style={{ color: TEXT_BRAND }}>
              Trail Series in Black is back in stock. Limited quantities — first in, first out.
            </p>
            <div className="mt-4 py-3 rounded-xl text-center text-sm font-black text-black" style={{ background: ORANGE }}>
              SHOP NOW →
            </div>
          </div>
        </>,
      )}
    </>
  );
}
