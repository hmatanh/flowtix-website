"use client";

import { useState, FormEvent } from "react";
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

const interests = [
  "AI System",
  "Automation",
  "Design & Brand",
  "Web Development",
  "AI Consulting",
  "White-label Product",
  "Other",
];

const countryCodes = ["+1", "+44", "+972", "+49", "+33", "+61", "+91"];

const fieldClass =
  "bg-[#0D0D0D] border border-[#1a1a1a] text-white px-4 py-3.5 rounded-xl w-full mb-4 outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 placeholder-[#444]";

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
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
    title: "We schedule a discovery call",
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
const TIME_SLOTS = ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

function CalendarBooking() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

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
    const isPast = d < today;
    return !isWeekend && !isPast;
  }

  function handleContinue() {
    if (selectedDay && selectedTime) setConfirmed(true);
  }

  return (
    <div className="bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-white text-xl font-semibold tracking-tight">
            Book a Free Discovery Call
          </h3>
          <div className="text-[#666] text-sm mt-1.5 flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <IconCalendar size={13} stroke={1.5} aria-hidden="true" className="text-[#444]" />
              30 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconVideo size={13} stroke={1.5} aria-hidden="true" className="text-[#444]" />
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
            <div className="text-[#3B82F6] text-sm font-semibold">
              ✓ Selection saved
            </div>
            <div className="text-white text-lg mt-3">
              {MONTH_NAMES[month]} {selectedDay}, {year} at {selectedTime}
            </div>
            <div className="text-[#666] text-sm mt-3 max-w-md mx-auto">
              Email{" "}
              <a
                href="mailto:office@flowtix.ai"
                className="text-blue-400 hover:text-blue-300"
              >
                office@flowtix.ai
              </a>{" "}
              to confirm. We’ll send a calendar invite within the hour.
            </div>
            <button
              type="button"
              onClick={() => {
                setConfirmed(false);
                setSelectedDay(null);
                setSelectedTime(null);
              }}
              className="text-[#444] text-xs mt-6 hover:text-white transition-colors"
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
                className="w-8 h-8 inline-flex items-center justify-center text-[#222] cursor-not-allowed"
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
                className="w-8 h-8 inline-flex items-center justify-center text-[#222] cursor-not-allowed"
                aria-label="Next month"
              >
                <IconChevronRight size={16} stroke={1.5} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-1.5 text-[10px] text-[#444] uppercase tracking-wider text-center">
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
                      "aspect-square inline-flex items-center justify-center text-sm rounded-lg transition-all relative",
                      available
                        ? selected
                          ? "bg-[#111] border border-blue-500/50 text-white shadow-[0_0_18px_rgba(59,130,246,0.15)]"
                          : "bg-[#111] border border-[#222] text-[#cccccc] hover:border-blue-500/50"
                        : "border border-transparent text-[#222] cursor-not-allowed",
                    ].join(" ")}
                  >
                    {d}
                    {isToday && (
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
                  <div className="mt-8 text-label text-[#444]">
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
                          className={`border rounded-lg px-4 py-2 text-sm cursor-pointer transition-all ${
                            selected
                              ? "border-blue-500/60 text-white bg-blue-500/5"
                              : "border-[#1a1a1a] text-[#555] hover:border-blue-500/50 hover:text-white"
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
              <p className="text-[#333] text-xs">
                Actual booking via{" "}
                <a
                  href="mailto:office@flowtix.ai"
                  className="text-[#666] hover:text-white"
                >
                  office@flowtix.ai
                </a>
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

    if (!recordAttempt()) {
      setRateLimited(true);
      setErrors({
        form: "Too many attempts. Please wait a few minutes and try again.",
      });
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

    setErrors({});

    const cleanName = sanitizeInput(name);
    const cleanCompany = sanitizeInput(company);
    const cleanEmail = sanitizeEmail(email);
    const cleanPhone = sanitizePhone(`${countryCode} ${phone}`);
    const cleanService = sanitizeInput(service);
    const cleanMessage = sanitizeInput(message);

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
      <section className="relative py-20 sm:py-24 lg:py-32 px-6 md:px-10 xl:px-12 text-center overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto">
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
            <p className="text-[#888] mt-6 sm:mt-7 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65] sm:leading-relaxed px-2">
              Not every project is right for us — and we&apos;d rather tell you
              that upfront than take your money and underdeliver. Book 30
              minutes and let&apos;s be honest.
            </p>
          </FadeIn>

          {/* Trust trio */}
          <FadeIn delay={0.7}>
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 max-w-md sm:max-w-lg mx-auto">
              {[
                { value: "30 min", label: "Discovery call" },
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
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#666] mt-1">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
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
                      className="flex-1 bg-[#0D0D0D] border border-[#1a1a1a] rounded-xl px-4 py-3.5 text-white placeholder-[#444] focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 min-h-[44px]"
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
              <div className="text-[#666] text-sm mt-2">
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
                        <div className="text-[#666] text-sm mt-1">{s.text}</div>
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
        <div className="max-w-3xl mx-auto">
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
