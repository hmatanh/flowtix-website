"use client";

import { useState, useEffect, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconArrowRight,
  IconMail,
  IconCalendar,
  IconFileDescription,
  IconChevronLeft,
  IconChevronRight,
  IconVideo,
} from "@tabler/icons-react";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { FormConsent } from "@/components/FormConsent";
import { FormGDPR } from "@/components/FormGDPR";
import {
  sanitizeInput,
  sanitizeEmail,
  sanitizePhone,
  validateForm,
} from "@/lib/sanitize";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const interests = ["Automation", "AI Agents", "Internal Tools", "MVP / Product", "Web Development", "Design & Brand", "Other"];

const countryCodes = ["+1", "+44", "+972", "+49", "+33", "+61", "+91"];

const fieldClass =
  "bg-[#0D0D0D] border border-[#1a1a1a] text-white px-4 py-3.5 rounded-xl w-full mb-4 outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 placeholder-[#888]";

const headlineWords = [
  "Let’s",
  "figure",
  "out",
  "if",
  "we’re",
  "the",
  "right",
  "fit.",
];

const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    n: "01",
    icon: IconMail,
    title: "We review your message",
    text: "Usually within 24 hours.",
  },
  {
    n: "02",
    icon: IconCalendar,
    title: "We schedule a strategy call",
    text: "Free 30-minute conversation.",
  },
  {
    n: "03",
    icon: IconFileDescription,
    title: "We send you a clear proposal",
    text: "With scope, timeline, and pricing.",
  },
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const TIME_SLOTS = ["9:00 AM CET", "10:00 AM CET", "2:00 PM CET", "3:00 PM CET", "4:00 PM CET"];

/* ───────────────────────────────────────────────────────────────
   Booking-details modal
   ─────────────────────────────────────────────────────────────
   Opens after the user has chosen a date + time. Collects name,
   email, phone, and the topic they want to discuss. Submits to
   Web3Forms — which routes the inquiry to office@flowtix.ai and
   auto-responds to the customer under the Flowtix brand.

   ⚙ Setup (one-time, by the site owner):
     1. Free account at https://web3forms.com
     2. Confirm receiving email = office@flowtix.ai
     3. Copy the access key
     4. Add to Vercel project env vars:
          NEXT_PUBLIC_WEB3FORMS_KEY=<your_access_key>
     5. Redeploy.
   Without a key the form falls back to a mailto: handoff so the
   page never errors silently on the customer.
*/

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type BookingDetails = {
  name: string;
  email: string;
  phone: string;
  topic: string;
};

function BookingDetailsModal({
  open,
  onClose,
  selectedDay,
  selectedTime,
  monthLabel,
  year,
  onConfirmed,
}: {
  open: boolean;
  onClose: () => void;
  selectedDay: number | null;
  selectedTime: string | null;
  monthLabel: string;
  year: number;
  onConfirmed: () => void;
}) {
  const [details, setDetails] = useState<BookingDetails>({
    name: "",
    email: "",
    phone: "",
    topic: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // Body scroll lock + ESC to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, submitting]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setError(null);
      setDone(false);
    }
  }, [open]);

  const whenLabel =
    selectedDay && selectedTime
      ? `${monthLabel.split(" ")[0]} ${selectedDay}, ${year} at ${selectedTime}`
      : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const name = sanitizeInput(details.name).trim();
    const email = sanitizeEmail(details.email).trim();
    const phone = details.phone.trim() ? sanitizePhone(details.phone) : "";
    const topic = sanitizeInput(details.topic).trim();

    if (!name || name.length < 2)
      return setError("Please tell us your name.");
    if (!/^\S+@\S+\.\S+$/.test(email))
      return setError("Please use a valid email so we can send the invite.");
    if (!topic || topic.length < 4)
      return setError("A sentence about what you'd like to discuss helps us prepare.");

    setSubmitting(true);

    const message =
      `New strategy-call booking from the Flowtix website.\n\n` +
      `When:     ${whenLabel}\n` +
      `Name:     ${name}\n` +
      `Email:    ${email}\n` +
      `Phone:    ${phone || "—"}\n\n` +
      `What they want to discuss:\n${topic}\n`;

    const autoResponse =
      `Hi ${name.split(" ")[0]},\n\n` +
      `Thanks for booking a call with Flowtix — we've received your request.\n\n` +
      `📅  ${whenLabel}\n` +
      `🎥  30-minute video call\n\n` +
      `We'll review the details you sent and confirm with a calendar invite ` +
      `within a few hours (usually faster on weekdays). If you need to ` +
      `reach us in the meantime, reply to this email or write to ` +
      `office@flowtix.ai — we read every message.\n\n` +
      `Looking forward to talking,\n` +
      `The Flowtix team\n` +
      `flowtix.ai · office@flowtix.ai`;

    // No access key configured → graceful mailto fallback
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(
        `[Flowtix] Call booking · ${name} · ${whenLabel}`
      );
      const body = encodeURIComponent(message);
      window.location.href = `mailto:office@flowtix.ai?subject=${subject}&body=${body}`;
      setDone(true);
      setSubmitting(false);
      setTimeout(() => {
        onConfirmed();
        onClose();
      }, 1800);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          // Routing
          subject: `[Flowtix] Call booking · ${name} · ${whenLabel}`,
          from_name: "Flowtix Booking",
          replyto: email,
          // Body
          name,
          email,
          phone: phone || "Not provided",
          when: whenLabel,
          topic,
          message,
          // Customer auto-reply (Flowtix branded)
          _autoresponse: autoResponse,
          _autoresponse_subject: `Your Flowtix call · ${whenLabel}`,
          // UX
          botcheck: "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) {
        throw new Error(data?.message || "Could not send. Please try again.");
      }
      setDone(true);
      setSubmitting(false);
      setTimeout(() => {
        onConfirmed();
        onClose();
      }, 1800);
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? `${err.message} If it persists, email office@flowtix.ai directly.`
          : "Could not send. Please email office@flowtix.ai directly."
      );
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[140] flex items-end sm:items-center justify-center"
          style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(10px)" }}
          onClick={() => !submitting && onClose()}
        >
          <m.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full sm:max-w-md mx-0 sm:mx-4 rounded-t-3xl sm:rounded-2xl border bg-[#0A0A0A] max-h-[95vh] overflow-y-auto"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.65)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 flex items-start justify-between gap-3 px-5 sm:px-7 pt-5 sm:pt-7 pb-4 border-b"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, #0D0D0D 0%, rgba(13,13,13,0.92) 100%)",
              }}
            >
              <div className="flex-1">
                <div className="text-blue-400 text-[10px] tracking-[0.22em] uppercase font-semibold">
                  Confirming your call
                </div>
                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight mt-1.5 leading-tight">
                  {whenLabel || "Strategy call"}
                </h3>
                <div className="text-[#888] text-[12px] mt-1">
                  30-minute video call · free
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                aria-label="Close"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#1a1a1a] text-[#aaa] hover:text-white hover:border-[#333] transition-colors disabled:opacity-40"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <AnimatePresence mode="wait">
              {done ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-5 sm:px-7 py-12 sm:py-14 text-center"
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.35)",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 11.5L9 15.5L17 7"
                        stroke="#10B981"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white text-[19px] font-semibold tracking-tight">
                    You&apos;re booked in.
                  </h4>
                  <p className="text-[#aaa] text-[14px] mt-3 max-w-sm mx-auto leading-relaxed">
                    A confirmation email is on its way. We&apos;ll send the
                    calendar invite to{" "}
                    <span className="text-white">{details.email}</span> within
                    a few hours.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="px-5 sm:px-7 pt-5 pb-6 sm:pb-7"
                >
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[#888] text-[11px] uppercase tracking-[0.18em] mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        value={details.name}
                        onChange={(e) =>
                          setDetails({ ...details, name: e.target.value })
                        }
                        disabled={submitting}
                        className={fieldClass + " !mb-0"}
                        placeholder="Daniel Cohen"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888] text-[11px] uppercase tracking-[0.18em] mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={details.email}
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
                        disabled={submitting}
                        className={fieldClass + " !mb-0"}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888] text-[11px] uppercase tracking-[0.18em] mb-1.5">
                        Phone <span className="text-[#444]">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={details.phone}
                        onChange={(e) =>
                          setDetails({ ...details, phone: e.target.value })
                        }
                        disabled={submitting}
                        className={fieldClass + " !mb-0"}
                        placeholder="+1 555 0100"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888] text-[11px] uppercase tracking-[0.18em] mb-1.5">
                        What do you want to talk about?
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={details.topic}
                        onChange={(e) =>
                          setDetails({ ...details, topic: e.target.value })
                        }
                        disabled={submitting}
                        className={fieldClass + " !mb-0 resize-none"}
                        placeholder="The system you're trying to ship, the bottleneck you'd like to fix, or the brand you want to launch."
                      />
                    </div>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mt-4 text-rose-300/90 text-[12.5px] leading-relaxed bg-rose-950/30 border border-rose-900/40 rounded-lg px-3.5 py-2.5"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-xl text-[14px] font-semibold hover:bg-[#eee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            opacity="0.25"
                          />
                          <path
                            d="M12 2a10 10 0 0 1 10 10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Confirm booking
                        <IconArrowRight size={14} stroke={2.4} />
                      </>
                    )}
                  </button>

                  <p className="text-[#444] text-[11px] mt-4 text-center leading-relaxed">
                    By confirming you agree to receive a calendar invite
                    and a follow-up email from Flowtix.
                  </p>
                </m.form>
              )}
            </AnimatePresence>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

function CalendarBooking() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Derive month/year on render — calendar uses the user's current month.
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const monthLabel = `${MONTH_NAMES[month]} ${year}`;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  function isAvailable(d: number) {
    const weekday = new Date(year, month, d).getDay();
    const isWeekend = weekday === 0 || weekday === 6;
    const cellDate = new Date(year, month, d);
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isPast = cellDate < todayDate;
    return !isWeekend && !isPast;
  }

  function handleContinue() {
    if (selectedDay && selectedTime) setModalOpen(true);
  }

  return (
    <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-white text-xl font-semibold tracking-tight">
            Book a Strategy Call
          </h3>
          <div className="text-[#888] text-sm mt-1.5 flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <IconCalendar size={13} stroke={1.5} aria-hidden="true" className="text-[#555]" />
              30 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconVideo size={13} stroke={1.5} aria-hidden="true" className="text-[#555]" />
              Video call
            </span>
            <span className="text-emerald-400">Free</span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {confirmed ? (
          <m.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-10 text-center"
          >
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.35)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <path
                  d="M5 11.5L9 15.5L17 7"
                  stroke="#10B981"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-emerald-300 text-sm font-semibold tracking-tight">
              Booking confirmed
            </div>
            <div className="text-white text-lg mt-3">
              {MONTH_NAMES[month]} {selectedDay}, {year} at {selectedTime}
            </div>
            <div className="text-[#888] text-sm mt-3 max-w-md mx-auto leading-relaxed">
              We&apos;ve sent a confirmation to your inbox and notified
              the team. A calendar invite from{" "}
              <a
                href="mailto:office@flowtix.ai"
                className="text-blue-400 hover:text-blue-300"
              >
                office@flowtix.ai
              </a>{" "}
              follows within a few hours.
            </div>
            <button
              type="button"
              onClick={() => {
                setConfirmed(false);
                setSelectedDay(null);
                setSelectedTime(null);
              }}
              className="text-[#555] text-xs mt-6 hover:text-white transition-colors"
            >
              Pick a different time
            </button>
          </m.div>
        ) : (
          <m.div
            key="picker"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                disabled
                className="w-11 h-11 inline-flex items-center justify-center text-[#222] cursor-not-allowed"
                aria-label="Previous month"
              >
                <IconChevronLeft size={16} stroke={1.5} />
              </button>
              <div className="text-white text-sm font-semibold tracking-tight">
                {monthLabel}
              </div>
              <button
                type="button"
                disabled
                className="w-11 h-11 inline-flex items-center justify-center text-[#222] cursor-not-allowed"
                aria-label="Next month"
              >
                <IconChevronRight size={16} stroke={1.5} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-1.5 text-[10px] text-[#555] uppercase tracking-wider text-center">
              {DAYS_OF_WEEK.map((d) => (
                <div key={d} className="py-1">
                  {d}
                </div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1.5">
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`pre-${i}`} className="aspect-square" aria-hidden="true" />
              ))}
              {days.map((d) => {
                const available = isAvailable(d);
                const selected = selectedDay === d;
                const isToday = d === today;
                return (
                  <button
                    key={d}
                    type="button"
                    disabled={!available}
                    onClick={() => {
                      setSelectedDay(d);
                      setSelectedTime(null);
                    }}
                    className={[
                      "aspect-square inline-flex items-center justify-center text-sm rounded-lg transition-all relative min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px]",
                      available
                        ? selected
                          ? "bg-[#111] border border-blue-500/50 text-white shadow-[0_0_18px_rgba(59,130,246,0.15)]"
                          : "bg-[#111] border border-[#222] text-[#cccccc] hover:border-blue-500/50"
                        : "border border-transparent text-[#222] cursor-not-allowed",
                    ].join(" ")}
                  >
                    {d}
                    {isToday && available && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
              {Array.from({
                length: (7 - ((startOffset + daysInMonth) % 7)) % 7,
              }).map((_, i) => (
                <div
                  key={`post-${i}`}
                  className="aspect-square"
                  aria-hidden="true"
                />
              ))}
            </div>

            <AnimatePresence>
              {selectedDay && (
                <m.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 text-label text-[#555]">
                    Available times · {MONTH_NAMES[month]} {selectedDay}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TIME_SLOTS.map((t) => {
                      const selected = selectedTime === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`border rounded-lg px-4 py-2 text-sm cursor-pointer transition-all min-h-[44px] ${
                            selected
                              ? "border-blue-500/60 text-white bg-blue-500/5"
                              : "border-[#1a1a1a] text-[#6a6a6a] hover:border-blue-500/50 hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-[#444] text-xs leading-relaxed">
                {selectedDay && selectedTime
                  ? "One more step — share a few details about your call."
                  : "Pick a day and time to continue."}
              </p>
              <m.button
                type="button"
                disabled={!selectedDay || !selectedTime}
                onClick={handleContinue}
                whileHover={
                  selectedDay && selectedTime ? { scale: 1.02 } : undefined
                }
                whileTap={
                  selectedDay && selectedTime ? { scale: 0.98 } : undefined
                }
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  selectedDay && selectedTime
                    ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                    : "bg-[#0a0a0a] text-[#333] cursor-not-allowed"
                }`}
              >
                Continue
                <IconArrowRight size={14} stroke={2} aria-hidden="true" />
              </m.button>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <BookingDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedDay={selectedDay}
        selectedTime={selectedTime}
        monthLabel={monthLabel}
        year={year}
        onConfirmed={() => setConfirmed(true)}
      />
    </div>
  );
}

const RATE_LIMIT_KEY = "flowtix-contact-attempts";
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function FieldWrap({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-error={error ? "true" : "false"}>
      {children}
      {error && (
        <p
          role="alert"
          aria-live="polite"
          className="text-rose-400/80 text-xs -mt-2 mb-3 px-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimited, setRateLimited] = useState(false);

  function recordAttempt(): boolean {
    try {
      const raw = sessionStorage.getItem(RATE_LIMIT_KEY);
      const now = Date.now();
      const arr: number[] = raw ? JSON.parse(raw) : [];
      const recent = arr.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      recent.push(now);
      sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
      return recent.length <= RATE_LIMIT_MAX;
    } catch {
      return true;
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const { valid, errors: validationErrors } = validateForm({
      name,
      company,
      email,
      phone,
      service,
      message,
      agreed,
    });

    if (!valid) {
      setErrors(validationErrors);
      requestAnimationFrame(() => {
        const firstError = document.querySelector("[data-error='true']");
        if (firstError instanceof HTMLElement) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      return;
    }

    if (!recordAttempt()) {
      setRateLimited(true);
      setErrors({
        form: "Too many attempts. Please wait a few minutes and try again.",
      });
      return;
    }

    setErrors({});

    const cleanName = name.trim().slice(0, 2000);
    const cleanCompany = company.trim().slice(0, 2000);
    const cleanEmail = sanitizeEmail(email);
    const cleanPhone = sanitizePhone(`${countryCode} ${phone}`);
    const cleanService = service.trim().slice(0, 2000);
    const cleanMessage = message.trim().slice(0, 2000);

    const subject = encodeURIComponent(
      `[Flowtix] New inquiry from ${cleanName}`
    );
    const body = encodeURIComponent(
      `Name: ${cleanName}\n` +
        `Company: ${cleanCompany || "—"}\n` +
        `Email: ${cleanEmail}\n` +
        `Phone: ${phone ? cleanPhone : "Not provided"}\n` +
        `Service: ${cleanService}\n\n` +
        `Message:\n${cleanMessage}`
    );

    setSubmitted(true);
    try {
      window.location.href = `mailto:office@flowtix.ai?subject=${subject}&body=${body}`;
    } catch {}
  }

  return (
    <>
      <section className="relative py-20 sm:py-24 lg:py-32 text-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
          }}
        />

        <div className="relative page-container">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-6 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-blue-400 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium">
                Available · Response in 24h
              </span>
            </div>
          </FadeIn>
          <h1
            className="font-black tracking-tighter text-white leading-[1.02] sm:leading-[0.95]"
            style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
          >
            <m.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
            >
              {headlineWords.map((w, i) => (
                <m.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </m.span>
              ))}
            </m.span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="text-[#aaa] mt-6 sm:mt-7 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65] sm:leading-relaxed px-2">
              Not every project is right for us — and we&apos;d rather tell you
              that upfront than take your money and underdeliver. Book 30
              minutes and let&apos;s be honest.
            </p>
          </FadeIn>

          {/* Trust trio */}
          <FadeIn delay={0.7}>
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 max-w-md sm:max-w-lg mx-auto">
              {[
                { value: "30 min", label: "Strategy call" },
                { value: "24h", label: "Response time" },
                { value: "Free", label: "No commitment" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="rounded-xl border border-[#1a1a1a] bg-[#080808] p-3 sm:p-4 text-center"
                >
                  <div className="text-white font-bold tabular-nums tracking-tight text-base sm:text-lg">
                    {t.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888] mt-1">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-16">
        <div className="page-container grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          <FadeIn direction="right">
            <AnimatePresence mode="wait">
              {submitted ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#0D0D0D] border border-blue-500/50 rounded-xl p-8 text-white"
                >
                  <div className="text-[#3B82F6] text-sm font-semibold mb-2">
                    ✓ Message received
                  </div>
                  <div className="text-lg">
                    We’ll be in touch within 24 hours.
                  </div>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  {/* Honeypot — bots fill this, humans don't */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="website">Leave this empty</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <FieldWrap error={errors.name}>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      aria-label="Name"
                      aria-invalid={errors.name ? "true" : "false"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ fontSize: "16px" }}
                      className={fieldClass}
                    />
                  </FieldWrap>

                  <input
                    type="text"
                    placeholder="Company"
                    aria-label="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ fontSize: "16px" }}
                    className={fieldClass}
                  />

                  <FieldWrap error={errors.email}>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                      aria-invalid={errors.email ? "true" : "false"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ fontSize: "16px" }}
                      className={fieldClass}
                    />
                  </FieldWrap>

                  <div className="flex gap-3 mb-4">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      aria-label="Country code"
                      style={{ fontSize: "16px" }}
                      className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl px-4 py-3.5 text-[#cccccc] w-28 focus:outline-none focus:border-blue-500/50 transition-all duration-300 cursor-pointer min-h-[44px]"
                    >
                      {countryCodes.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone number (optional)"
                      aria-label="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ fontSize: "16px" }}
                      className="flex-1 bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl px-4 py-3.5 text-white placeholder-[#888] focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 min-h-[44px]"
                    />
                  </div>

                  <FieldWrap error={errors.service}>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      aria-label="What are you looking for?"
                      aria-invalid={errors.service ? "true" : "false"}
                      style={{ fontSize: "16px" }}
                      className={`${fieldClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        What are you looking for?
                      </option>
                      {interests.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </FieldWrap>

                  <FieldWrap error={errors.message}>
                    <textarea
                      rows={4}
                      placeholder="Tell us more..."
                      aria-label="Message"
                      aria-invalid={errors.message ? "true" : "false"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ fontSize: "16px" }}
                      className={`${fieldClass} resize-none`}
                    />
                  </FieldWrap>

                  <div className="mt-2 mb-5">
                    <FormGDPR />
                  </div>

                  <div className="mb-6">
                    <FormConsent
                      checked={agreed}
                      onChange={setAgreed}
                      error={errors.agreed}
                    />
                  </div>

                  {errors.form && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="mb-4 text-rose-400/80 text-sm"
                    >
                      {errors.form}
                    </div>
                  )}

                  <div className="relative inline-block w-full">
                    <span
                      className="absolute inset-0 rounded-xl bg-white opacity-20 animate-ping pointer-events-none"
                      style={{ animationDuration: "2s" }}
                      aria-hidden="true"
                    />
                    <m.button
                      type="submit"
                      disabled={rateLimited}
                      whileHover={
                        rateLimited
                          ? undefined
                          : {
                              scale: 1.01,
                              boxShadow: "0 0 30px rgba(255,255,255,0.15)",
                            }
                      }
                      whileTap={rateLimited ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.15 }}
                      className="relative bg-white text-black px-6 py-3.5 rounded-xl font-semibold w-full hover:bg-[#eee] transition-colors inline-flex items-center justify-center gap-2 min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      Send Message
                      <IconArrowRight size={16} stroke={2} aria-hidden="true" />
                    </m.button>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div>
              <div className="text-label text-[#333] mb-2">Direct</div>
              <a
                href="mailto:office@flowtix.ai"
                className="animated-link text-xl gradient-text-blue inline-block font-semibold"
              >
                office@flowtix.ai
              </a>
              <div className="text-[#888] text-sm mt-2">
                Response time: Within 24 hours
              </div>

              <div className="border-t border-[#1a1a1a] my-10" />

              <div className="text-label text-[#333] mb-5">
                What happens next
              </div>
              <StaggerContainer className="space-y-5" stagger={0.12}>
                {steps.map((s) => (
                  <StaggerItem key={s.n}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full border border-[#222] bg-[#0a0a0a] inline-flex items-center justify-center shrink-0">
                        <s.icon
                          size={14}
                          stroke={1.5}
                          className="text-blue-400"
                        />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">
                          <span className="text-[#333] text-[10px] font-mono mr-2">
                            {s.n}
                          </span>
                          {s.title}
                        </div>
                        <div className="text-[#888] text-sm mt-1">{s.text}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Calendar booking */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="page-container">
          <FadeIn>
            <div className="text-label text-[#333] mb-3">Prefer to schedule</div>
            <h2 className="text-h2 gradient-text mb-8">
              Or pick a time directly.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CalendarBooking />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
