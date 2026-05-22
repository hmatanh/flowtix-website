"use client";

/**
 * Three deeply-crafted editorial sections for each project page:
 *
 *   1) ProjectArchitecture — the actual system flow: inputs → AI → orchestration → output
 *   2) ProjectAIAgents     — the specific AI agents we built, with role, model, capabilities, integrations
 *   3) ProjectTechStack    — the categorized stack: AI / Web / Data / Infra
 *
 * These sit between "What we built" visuals and the impact numbers, so clients
 * can see the depth of the engineering before they see the outcomes.
 */

import { m } from "framer-motion";
import {
  IconArrowRight,
  IconArrowDown,
  IconCpu,
  IconRobot,
  IconBuildingFactory2,
  IconRouteSquare,
  IconBoxMultiple,
  IconCheck,
  IconCircleDot,
  IconStack2,
  IconCloudCog,
  IconDatabase,
  IconLayoutDashboard,
  IconSparkles,
} from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import type { ArchNode, AIAgent, StackCategory } from "@/lib/project-technical";
import { FadeIn } from "@/components/animations/FadeIn";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* =========================================================================
   Helpers
   ========================================================================= */

function nodeIcon(kind: ArchNode["kind"]) {
  const props = { size: 18, stroke: 1.7 };
  switch (kind) {
    case "input":
      return <IconBoxMultiple {...props} />;
    case "ai":
      return <IconRobot {...props} />;
    case "system":
      return <IconRouteSquare {...props} />;
    case "output":
      return <IconLayoutDashboard {...props} />;
  }
}

function categoryIcon(label: string) {
  const props = { size: 18, stroke: 1.7 };
  const l = label.toLowerCase();
  if (l.includes("ai")) return <IconCpu {...props} />;
  if (l.includes("data") || l.includes("automation") || l.includes("workflow") || l.includes("content"))
    return <IconDatabase {...props} />;
  if (l.includes("web") || l.includes("ui") || l.includes("pdf") || l.includes("mobile") || l.includes("store") || l.includes("email"))
    return <IconLayoutDashboard {...props} />;
  if (l.includes("infra") || l.includes("compliance")) return <IconCloudCog {...props} />;
  return <IconStack2 {...props} />;
}

function nodeKindLabel(kind: ArchNode["kind"]) {
  switch (kind) {
    case "input":
      return "Input";
    case "ai":
      return "AI";
    case "system":
      return "System";
    case "output":
      return "Output";
  }
}

/* =========================================================================
   1) ProjectArchitecture — the system flow
   ========================================================================= */

export function ProjectArchitecture({
  project,
  summary,
  nodes,
}: {
  project: Project;
  summary: string;
  nodes: ArchNode[];
}) {
  const b = project.brand;

  return (
    <section className="section-contain py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#0a0a0a] relative overflow-hidden">
      {/* Soft atmosphere */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${b.accentRGB},0.07), transparent 65%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase mb-5 tracking-[0.22em]"
              style={{ color: b.primary }}
            >
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${b.primary})` }}
              />
              Solution Architecture
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${b.primary}, transparent)` }}
              />
            </div>
            <h2
              className="text-white font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4.8vw, 48px)", lineHeight: 1.08 }}
            >
              How the system actually runs.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: b.textOnBrand, opacity: 0.78 }}
            >
              {summary}
            </p>
          </div>
        </FadeIn>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Continuous flow line behind nodes */}
            <div
              aria-hidden="true"
              className="absolute left-[6%] right-[6%] top-1/2 -translate-y-1/2 h-px pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(${b.accentRGB},0.45), rgba(${b.accentRGB},0.45), transparent)`,
              }}
            />
            <div className="grid grid-cols-5 gap-3 relative">
              {nodes.map((node, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                  className="relative"
                >
                  <ArchNodeCard node={node} brand={b} index={i} total={nodes.length} />
                  {i < nodes.length - 1 && (
                    <m.div
                      aria-hidden="true"
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.08 + 0.25, duration: 0.4, ease: EASE }}
                      className="absolute top-1/2 -right-3 -translate-y-1/2 z-10"
                      style={{ color: b.primary }}
                    >
                      <IconArrowRight size={20} stroke={2.4} />
                    </m.div>
                  )}
                </m.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile + tablet vertical flow */}
        <div className="lg:hidden">
          <div className="relative space-y-3 max-w-md mx-auto">
            {nodes.map((node, i) => (
              <div key={i}>
                <m.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
                >
                  <ArchNodeCard node={node} brand={b} index={i} total={nodes.length} />
                </m.div>
                {i < nodes.length - 1 && (
                  <m.div
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.06 + 0.2, duration: 0.3 }}
                    className="flex justify-center my-2"
                    style={{ color: b.primary }}
                  >
                    <IconArrowDown size={20} stroke={2.4} />
                  </m.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchNodeCard({
  node,
  brand,
  index,
  total,
}: {
  node: ArchNode;
  brand: Project["brand"];
  index: number;
  total: number;
}) {
  const isAI = node.kind === "ai";
  const kindBg =
    node.kind === "ai"
      ? `rgba(${brand.accentRGB},0.14)`
      : node.kind === "input"
      ? `rgba(${brand.accentRGB},0.06)`
      : node.kind === "output"
      ? `rgba(${brand.accentRGB},0.10)`
      : `rgba(${brand.accentRGB},0.05)`;
  const kindBorder =
    node.kind === "ai"
      ? `rgba(${brand.accentRGB},0.45)`
      : `rgba(${brand.accentRGB},0.22)`;

  return (
    <div
      className="relative rounded-2xl p-4 sm:p-5 h-full text-left overflow-hidden"
      style={{
        background: brand.card,
        border: `1px solid ${kindBorder}`,
        boxShadow: isAI
          ? `0 0 0 1px rgba(${brand.accentRGB},0.18), 0 20px 60px -30px rgba(${brand.accentRGB},0.45)`
          : `0 14px 40px -28px rgba(0,0,0,0.6)`,
      }}
    >
      {isAI && (
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-32 h-32 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${brand.accentRGB},0.3), transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
      )}
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
            style={{
              background: kindBg,
              color: brand.primary,
              border: `1px solid ${kindBorder}`,
            }}
          >
            {nodeIcon(node.kind)}
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.18em] font-mono"
            style={{ color: brand.primary, opacity: isAI ? 1 : 0.55 }}
          >
            {nodeKindLabel(node.kind)} · {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
        <div
          className="font-semibold text-base sm:text-[17px] leading-snug tracking-tight"
          style={{ color: "#fff" }}
        >
          {node.label}
        </div>
        <div
          className="text-[12.5px] sm:text-sm mt-1.5 leading-snug"
          style={{ color: brand.textOnBrand, opacity: 0.62 }}
        >
          {node.sub}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2) ProjectAIAgents — the agents we deployed
   ========================================================================= */

export function ProjectAIAgents({
  project,
  agents,
}: {
  project: Project;
  agents: AIAgent[];
}) {
  const b = project.brand;

  return (
    <section className="section-contain py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#0a0a0a] relative overflow-hidden">
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${b.accentRGB},0.06), transparent 65%)`,
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${b.accentRGB},0.05), transparent 65%)`,
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase mb-5 tracking-[0.22em]"
              style={{ color: b.primary }}
            >
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${b.primary})` }}
              />
              AI Agents Deployed
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${b.primary}, transparent)` }}
              />
            </div>
            <h2
              className="text-white font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4.8vw, 48px)", lineHeight: 1.08 }}
            >
              The agents working in production.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: b.textOnBrand, opacity: 0.75 }}
            >
              Each one purpose-built — narrow role, clear refusal contract, audit
              log on every output. Humans approve the irreversible moves.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {agents.map((agent, i) => (
            <m.div
              key={agent.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
              className="relative rounded-3xl p-6 sm:p-7 lg:p-8 h-full flex flex-col overflow-hidden group"
              style={{
                background: b.card,
                border: `1px solid ${b.border}`,
                boxShadow: `0 22px 70px -34px rgba(${b.accentRGB},0.35)`,
              }}
            >
              {/* Corner glow */}
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-44 h-44 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle, rgba(${b.accentRGB},0.18), transparent 70%)`,
                  filter: "blur(28px)",
                }}
              />

              <div className="relative">
                {/* Agent header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-mono px-2.5 py-1 rounded-full"
                    style={{
                      color: b.primary,
                      background: `rgba(${b.accentRGB},0.1)`,
                      border: `1px solid rgba(${b.accentRGB},0.3)`,
                    }}
                  >
                    <IconSparkles size={11} />
                    Agent {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                    style={{
                      background: `rgba(${b.accentRGB},0.12)`,
                      color: b.primary,
                      border: `1px solid rgba(${b.accentRGB},0.3)`,
                    }}
                  >
                    <IconRobot size={18} stroke={1.7} />
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-white font-black tracking-tight mb-2"
                  style={{ fontSize: "clamp(22px, 2.6vw, 26px)", lineHeight: 1.15 }}
                >
                  {agent.name}
                </h3>

                {/* Model badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono mb-4 px-2.5 py-1 rounded-md"
                  style={{
                    color: b.textOnBrand,
                    background: `rgba(${b.accentRGB},0.05)`,
                    border: `1px solid rgba(${b.accentRGB},0.18)`,
                  }}
                >
                  <IconCpu size={12} />
                  {agent.model}
                </div>

                {/* Role description */}
                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-5"
                  style={{ color: b.textOnBrand, opacity: 0.82 }}
                >
                  {agent.role}
                </p>

                {/* Capabilities */}
                <div className="mb-5">
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] mb-3 font-mono"
                    style={{ color: b.primary, opacity: 0.7 }}
                  >
                    Capabilities
                  </div>
                  <ul className="space-y-2">
                    {agent.capabilities.map((cap, ci) => (
                      <li key={ci} className="flex gap-2 items-start text-[13.5px] leading-snug">
                        <span
                          className="mt-0.5 shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full"
                          style={{
                            background: `rgba(${b.accentRGB},0.16)`,
                            color: b.primary,
                          }}
                        >
                          <IconCheck size={10} stroke={3} />
                        </span>
                        <span style={{ color: b.textOnBrand, opacity: 0.85 }}>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integration points */}
                <div className="mt-auto pt-5 border-t" style={{ borderColor: b.border }}>
                  <div
                    className="text-[10px] uppercase tracking-[0.2em] mb-2.5 font-mono"
                    style={{ color: b.primary, opacity: 0.7 }}
                  >
                    Integration points
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.integrationPoints.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md font-mono"
                        style={{
                          color: b.textOnBrand,
                          background: `rgba(${b.accentRGB},0.06)`,
                          border: `1px solid rgba(${b.accentRGB},0.16)`,
                        }}
                      >
                        <IconCircleDot size={9} stroke={2.5} />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3) ProjectTechStack — categorized stack
   ========================================================================= */

export function ProjectTechStack({
  project,
  stack,
}: {
  project: Project;
  stack: StackCategory[];
}) {
  const b = project.brand;

  return (
    <section className="section-contain py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#0a0a0a] relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(${b.accentRGB},0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase mb-5 tracking-[0.22em]"
              style={{ color: b.primary }}
            >
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${b.primary})` }}
              />
              The Stack
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${b.primary}, transparent)` }}
              />
            </div>
            <h2
              className="text-white font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4.8vw, 48px)", lineHeight: 1.08 }}
            >
              Every layer, picked for a reason.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: b.textOnBrand, opacity: 0.75 }}
            >
              No fashionable choices, no resume-driven tools. Each piece earns
              its place by what it does for the client in production.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {stack.map((cat, i) => (
            <m.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
              className="relative rounded-3xl p-6 sm:p-7 lg:p-8 overflow-hidden"
              style={{
                background: b.card,
                border: `1px solid ${b.border}`,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -left-16 w-40 h-40 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(${b.accentRGB},0.14), transparent 70%)`,
                  filter: "blur(28px)",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                    style={{
                      background: `rgba(${b.accentRGB},0.12)`,
                      color: b.primary,
                      border: `1px solid rgba(${b.accentRGB},0.3)`,
                    }}
                  >
                    {categoryIcon(cat.label)}
                  </span>
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.22em] font-mono mb-0.5"
                      style={{ color: b.primary, opacity: 0.75 }}
                    >
                      {String(i + 1).padStart(2, "0")} · Layer
                    </div>
                    <h3
                      className="text-white font-bold tracking-tight"
                      style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                    >
                      {cat.label}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-5"
                  style={{ color: b.textOnBrand, opacity: 0.78 }}
                >
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-lg font-mono"
                      style={{
                        color: "#fff",
                        background: `linear-gradient(135deg, rgba(${b.accentRGB},0.14), rgba(${b.accentRGB},0.05))`,
                        border: `1px solid rgba(${b.accentRGB},0.28)`,
                      }}
                    >
                      <IconBuildingFactory2 size={11} stroke={2} style={{ color: b.primary }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
