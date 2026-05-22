"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IconSend, IconRefresh } from "@tabler/icons-react";
import { Logo } from "./Logo";

type Role = "user" | "ai";
type Message = {
  id: string;
  role: Role;
  full: string;
  content: string;
  typing: boolean;
};

const TYPEWRITER_MS = 16;

const DEMO_SCRIPT: { role: Role; text: string; delay: number }[] = [
  {
    role: "ai",
    delay: 1200,
    text: "Hello! I’m the Flowtix assistant. What kind of AI system can we build for your business?",
  },
  {
    role: "user",
    delay: 2200,
    text: "We’re a marketing agency and spend too much time on client reports",
  },
  {
    role: "ai",
    delay: 1500,
    text: "Perfect use case. A custom AI reporting system typically saves agencies 8–12 hours per week. We’d connect to your data sources, train it on your report templates, and have it generating client-ready reports automatically.\n\nWant me to estimate the build timeline for your team size?",
  },
  {
    role: "user",
    delay: 2000,
    text: "Yes, we have 8 people",
  },
  {
    role: "ai",
    delay: 1500,
    text: "For an 8-person agency, here’s what we’d build:\n\n✓ Automated report generation (4–6 hrs saved/week)\n✓ Client portal with live data\n✓ Slack notifications when reports are ready\n✓ White-label dashboard your clients log into\n\nBuild time: ~3 weeks. Setup: from $4,500.\nReady to book a discovery call? →",
  },
];

function findResponse(text: string): string {
  const t = text.toLowerCase();
  if (/(sales|leads|crm)/.test(t)) {
    return "Sales automation is one of our most popular systems. We build AI that follows up with leads instantly, scores prospects automatically, and generates personalized outreach. A typical setup saves 10+ hours/week and improves close rates by 25–40%.";
  }
  if (/(website|web|site)/.test(t)) {
    return "We build premium Next.js websites with world-class design — like the one you’re looking at right now. Most sites go live in 2–3 weeks. What kind of business is the site for?";
  }
  if (/(design|brand|logo)/.test(t)) {
    return "10+ years of brand and UI/UX design. We create full brand identities, design systems, and product interfaces. What stage is your brand at?";
  }
  if (/(price|cost|how much|budget)/.test(t)) {
    return "Projects start from $3,000 for focused builds and scale with complexity. Every project gets a fixed-price proposal upfront — no hourly billing, no surprises. What are you looking to build?";
  }
  if (/(time|how long|timeline|when)/.test(t)) {
    return "Most systems go from kickoff to live in 2–4 weeks. Complex multi-integration builds take 6–8 weeks. We’ve never missed a delivery date.";
  }
  return "That sounds like something we can help with. Can you tell me a bit more about your business and the specific problem you want to solve? The more specific you are, the better I can map out a solution.";
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function HeroAIDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [demoComplete, setDemoComplete] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef(false);

  // Auto-scroll on new messages
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, typingIndicator]);

  // Auto-play demo on mount
  useEffect(() => {
    let mounted = true;
    cancelRef.current = false;

    async function delay(ms: number) {
      return new Promise<void>((resolve) => {
        const t = setTimeout(() => resolve(), ms);
        return t;
      });
    }

    async function addMessage(role: Role, text: string) {
      const id = uid();
      if (role === "ai") {
        setTypingIndicator(true);
        await delay(1100);
        if (!mounted || cancelRef.current) return;
        setTypingIndicator(false);
      }
      setMessages((prev) => [
        ...prev,
        { id, role, full: text, content: "", typing: true },
      ]);

      // Typewriter
      let i = 0;
      while (i < text.length) {
        if (!mounted || cancelRef.current) return;
        i++;
        await delay(TYPEWRITER_MS);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === id ? { ...m, content: text.slice(0, i) } : m
          )
        );
      }
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, typing: false } : m))
      );
    }

    async function runDemo() {
      for (const step of DEMO_SCRIPT) {
        await delay(step.delay);
        if (!mounted || cancelRef.current) return;
        await addMessage(step.role, step.text);
      }
      if (!mounted || cancelRef.current) return;
      setDemoComplete(true);
    }
    runDemo();

    return () => {
      mounted = false;
      cancelRef.current = true;
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || !demoComplete) return;
    const text = input.trim();
    setInput("");

    const userId = uid();
    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", full: text, content: text, typing: false },
    ]);

    setTypingIndicator(true);
    await new Promise((r) => setTimeout(r, 900));
    setTypingIndicator(false);

    const reply = findResponse(text);
    const aiId = uid();
    setMessages((prev) => [
      ...prev,
      { id: aiId, role: "ai", full: reply, content: "", typing: true },
    ]);

    let i = 0;
    while (i < reply.length) {
      i++;
      await new Promise((r) => setTimeout(r, TYPEWRITER_MS));
      setMessages((prev) =>
        prev.map((m) => (m.id === aiId ? { ...m, content: reply.slice(0, i) } : m))
      );
    }
    setMessages((prev) =>
      prev.map((m) => (m.id === aiId ? { ...m, typing: false } : m))
    );
  }

  function replay() {
    cancelRef.current = true;
    setMessages([]);
    setTypingIndicator(false);
    setDemoComplete(false);
    setTimeout(() => {
      cancelRef.current = false;
      // re-trigger by remount via key — simpler: re-run inline
      // (the auto-play effect only runs once on mount, so we re-run manually here)
      runManualReplay();
    }, 60);
  }

  async function runManualReplay() {
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const addMessageLocal = async (role: Role, text: string) => {
      const id = uid();
      if (role === "ai") {
        setTypingIndicator(true);
        await wait(1100);
        setTypingIndicator(false);
      }
      setMessages((prev) => [
        ...prev,
        { id, role, full: text, content: "", typing: true },
      ]);
      let i = 0;
      while (i < text.length) {
        if (cancelRef.current) return;
        i++;
        await wait(TYPEWRITER_MS);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === id ? { ...m, content: text.slice(0, i) } : m
          )
        );
      }
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, typing: false } : m))
      );
    };
    for (const step of DEMO_SCRIPT) {
      await wait(step.delay);
      if (cancelRef.current) return;
      await addMessageLocal(step.role, step.text);
    }
    setDemoComplete(true);
  }

  return (
    <div className="relative bg-[#0D0D0D] border border-[#1a1a1a] rounded-2xl overflow-hidden w-full max-w-xl glow-blue-strong">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent pointer-events-none" />

      {/* Chrome */}
      <div className="bg-[#111] border-b border-[#1a1a1a] px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-[#0a0a0a] rounded px-3 py-1 text-[#444] text-[10px] font-mono truncate text-center">
          chat.flowtix.ai
        </div>
        <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#222] shrink-0" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <Logo size={18} href={null} />
          <span className="text-[#444] text-[10px]">· Assistant</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Online
        </div>
      </div>

      {/* Chat */}
      <div
        ref={scrollRef}
        className="h-[340px] overflow-y-auto px-4 py-3 space-y-3 no-scrollbar"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <m.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={
                msg.role === "user" ? "flex flex-col items-end" : "flex flex-col"
              }
            >
              <div className="text-[9px] text-[#333] mb-1 tracking-wide uppercase">
                {msg.role === "user" ? "You" : "flowtix"}
              </div>
              <div
                className={
                  msg.role === "user"
                    ? "max-w-[80%] bg-[#1a1a1a] text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 whitespace-pre-line"
                    : "max-w-[85%] bg-[#111] border border-[#1a1a1a] text-[#cccccc] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 whitespace-pre-line"
                }
              >
                {msg.content}
                {msg.typing && (
                  <span
                    className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
                    style={{
                      background: msg.role === "user" ? "#fff" : "#3B82F6",
                      animation: "caretBlink 1s infinite",
                    }}
                  />
                )}
              </div>
            </m.div>
          ))}
          {typingIndicator && (
            <m.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <div className="text-[9px] text-[#333] mb-1 tracking-wide uppercase">
                flowtix
              </div>
              <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl rounded-tl-sm px-4 py-3 inline-flex items-center gap-1 w-fit">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] typing-dot"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-[#1a1a1a] p-3 flex items-center gap-2 bg-[#0a0a0a]"
      >
        <div className="flex-1 bg-[#111] border border-[#1a1a1a] rounded-xl px-3 py-2 flex items-center gap-2 focus-within:border-blue-500/40 transition-colors">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              demoComplete
                ? "Ask about AI systems, automation, or design…"
                : "Watching the demo…"
            }
            disabled={!demoComplete}
            aria-label="Ask the Flowtix assistant"
            className="flex-1 bg-transparent outline-none text-white text-sm placeholder-[#333] disabled:cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          disabled={!demoComplete || !input.trim()}
          aria-label="Send message"
          className="bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#1a1a1a] disabled:cursor-not-allowed text-white rounded-lg p-2.5 transition-colors"
        >
          <IconSend size={14} stroke={2} />
        </button>
      </form>

      {/* Replay */}
      {demoComplete && (
        <m.button
          type="button"
          onClick={replay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-16 right-3 text-[#222] hover:text-[#666] text-[10px] inline-flex items-center gap-1 transition-colors"
        >
          <IconRefresh size={11} stroke={1.5} />
          Replay demo
        </m.button>
      )}
    </div>
  );
}
