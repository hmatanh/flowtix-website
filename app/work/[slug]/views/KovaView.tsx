"use client";

/**
 * Kova case study — Archetype A · Narrative Product Dossier
 *
 * Inspired by Linear's customer pages and Vercel's editorial case studies.
 * No more shared ProjectPageLayout: this is its own composition. Brand
 * sky-blue washes the entire viewport; product UI shots run full-bleed,
 * not in laptop frames; sections lead with arguments, not labels.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { MetricStrip } from "@/components/case-study/MetricStrip";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { CaseFooter } from "@/components/case-study/CaseFooter";

import { ScreenDashboard } from "@/components/clients/kova/v2/ScreenDashboard";
import { ScreenMatching } from "@/components/clients/kova/v2/ScreenMatching";
import { ScreenCRM } from "@/components/clients/kova/v2/ScreenCRM";
import { HeroArtifact } from "@/components/clients/kova/v2/HeroArtifact";
import { BeforeAfter } from "@/components/clients/kova/v2/BeforeAfter";

const KOVA_RGB = "14, 165, 233";
const KOVA_PRIMARY = "#0EA5E9";

export function KovaView({ project }: { project: Project }) {
  return (
    <main>
      {/* 1 — HERO */}
      <CaseHero
        eyebrow="Real estate · CRM"
        year={project.year}
        serviceTags={["Brand", "AI Matching", "CRM Automation", "Web"]}
        headline={
          <>
            How we turned <span style={{ color: KOVA_PRIMARY }}>12 agents</span>{" "}
            into a team that responds like fifty.
          </>
        }
        primaryMetric="Lead response time: 4 hours → 4 minutes"
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
      />

      {/* 2 — METRIC STRIP */}
      <MetricStrip
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
        metrics={[
          { value: "4 min", label: "Avg lead response", detail: "from 4 hours" },
          { value: "3×", label: "Property matches per agent", detail: "vs manual" },
          { value: "47/wk", label: "Automated follow-ups", detail: "drafted in agent voice" },
        ]}
      />

      {/* 3 — HERO ARTIFACT (the signature image) */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The matching moment"
        caption="A new listing hits the MLS. In 2.1 seconds, every active buyer is scored against it, the highest match is surfaced, and a personalised reply is drafted in the agent's voice."
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 4 — CHALLENGE — opinion-as-heading */}
      <StorySection
        accentRGB={KOVA_RGB}
        eyebrow="The challenge"
        heading={
          <>
            Twelve agents drowning in unanswered leads,
            <br className="hidden lg:inline" /> kept alive by Post-it notes.
          </>
        }
      >
        <p>
          When we met Moran Realty Group, the team handled almost every
          conversation across six different inboxes. Leads from the website
          went to a HubSpot account three people checked. Instagram DMs went
          to one phone. WhatsApp inquiries went to a shared group. Same-day
          showings were tracked on a whiteboard.
        </p>
        <p>
          The work was good. The system holding it together was a fire that
          needed feeding every Sunday night. Buyers who didn't get a reply in
          four hours quietly went somewhere else.
        </p>
      </StorySection>

      {/* 5 — BEFORE / AFTER architecture diagram */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="System architecture"
        caption={
          <>
            <span className="text-white">Before:</span> six inbound channels,
            six tools, twelve agents guessing who saw what.{" "}
            <span className="text-white">After:</span> one inbox, one AI
            matcher, one source of truth.
          </>
        }
      >
        <BeforeAfter />
      </AnnotatedScreen>

      {/* 6 — SOLUTION — opinion-as-heading */}
      <StorySection
        accentRGB={KOVA_RGB}
        eyebrow="The solution"
        heading={
          <>
            We didn't replace the agents.
            <br className="hidden lg:inline" /> We replaced their{" "}
            <span style={{ color: KOVA_PRIMARY }}>worst spreadsheet.</span>
          </>
        }
      >
        <p>
          Every new lead now lands in one calm inbox. Claude scores it against
          the entire active book of buyers, ranks the top matches by likelihood
          to close, and drafts a follow-up in the responsible agent's tone of
          voice — pulled from their last eighty conversations.
        </p>
        <p>
          The agent reviews the draft, edits one line if it needs editing,
          and sends. By the time most competing offices have triaged the
          lead, Kova has already booked the showing.
        </p>
      </StorySection>

      {/* 7 — DASHBOARD SHOT — full-bleed, no frame */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="What every agent opens at 9am"
        caption="One screen consolidates the four moments that matter: hot matches waiting on a reply, pipeline progression, AI suggestions queued for review, live team activity."
        annotations={[
          {
            from: { x: 24, y: 52 },
            text: { x: 4, y: 40 },
            side: "left",
            eyebrow: "Hot column",
            body: "Buyers above 80% match score pulse softly until the agent has acted.",
          },
          {
            from: { x: 78, y: 28 },
            text: { x: 96, y: 24 },
            side: "right",
            eyebrow: "AI panel",
            body: "Three actions, ranked by impact, drafted in the agent's tone.",
          },
          {
            from: { x: 78, y: 78 },
            text: { x: 96, y: 80 },
            side: "right",
            eyebrow: "Live activity",
            body: "AI events tagged in blue so agents can audit what was sent on their behalf.",
          },
        ]}
      >
        <ScreenDashboard />
      </AnnotatedScreen>

      {/* 8 — A QUIET QUOTE */}
      <PullQuote
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
        name="Sarah Moran"
        role="Founder · Moran Realty Group"
        variant="deep"
      >
        I open one screen in the morning. Every buyer that needs me is at the
        top. The rest of the office is doing the same thing. We respond
        faster, and we feel calmer, at the same time.
      </PullQuote>

      {/* 9 — MATCHING SHOT — full-bleed with annotation */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The engine, opened up"
        caption="Each match is scored against the listing on four criteria — budget alignment, neighbourhood preference, property attributes, and buyer activity recency."
        annotations={[
          {
            from: { x: 22, y: 50 },
            text: { x: 4, y: 70 },
            side: "left",
            eyebrow: "Listing snapshot",
            body: "Schema-extracted from the MLS feed the instant the listing goes live.",
          },
          {
            from: { x: 78, y: 35 },
            text: { x: 96, y: 22 },
            side: "right",
            eyebrow: "Top match",
            body: "Always surfaces the buyer most likely to close — never just the most recent.",
          },
          {
            from: { x: 72, y: 65 },
            text: { x: 96, y: 60 },
            side: "right",
            eyebrow: "Stated reasons",
            body: "Every score is auditable. Agents and brokers can challenge the AI's logic.",
          },
        ]}
      >
        <ScreenMatching />
      </AnnotatedScreen>

      {/* 10 — CRM shot */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The conversation, after the match"
        caption="Inbox, thread, lead history and AI-drafted replies on one canvas. Agents never lose context, and every AI action is logged."
        annotations={[
          {
            from: { x: 12, y: 28 },
            text: { x: 4, y: 16 },
            side: "left",
            eyebrow: "One inbox",
            body: "Email, WhatsApp, Instagram and form replies all consolidate here.",
          },
          {
            from: { x: 50, y: 50 },
            text: { x: 50, y: 8 },
            side: "right",
            eyebrow: "AI draft, sent by Sarah",
            body: "Composed in the agent's tone. Every send is reviewed before it leaves.",
          },
          {
            from: { x: 88, y: 60 },
            text: { x: 96, y: 60 },
            side: "right",
            eyebrow: "Auditable timeline",
            body: "AI-initiated events are tagged so brokers can see exactly what the system did and when.",
          },
        ]}
      >
        <ScreenCRM />
      </AnnotatedScreen>

      {/* 11 — A SECOND QUOTE (multi-stakeholder per Linear) */}
      <PullQuote
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
        name="David Kim"
        role="Senior Agent · Moran Realty Group"
        variant="subtle"
      >
        The first month, I kept editing every AI draft. By the second month I
        was sending them without changes. By the third I forgot it was an
        AI. That&apos;s when I knew it had become part of how I work.
      </PullQuote>

      {/* 12 — Closing argument */}
      <StorySection
        accentRGB={KOVA_RGB}
        eyebrow="What changed"
        heading={
          <>
            A twelve-person office that{" "}
            <span style={{ color: KOVA_PRIMARY }}>responds like fifty</span> —
            without hiring a single new agent.
          </>
        }
      >
        <p>
          Six months after launch, response times are down 92%, every lead
          gets a reply within minutes regardless of which channel it came
          through, and the partners no longer spend Sunday nights staging
          the week ahead.
        </p>
        <p>
          The system stays out of the way. Agents say they noticed they
          stopped being tired before they noticed they were responding
          faster.
        </p>
      </StorySection>

      {/* 13 — FOOTER strip */}
      <CaseFooter project={project} />
    </main>
  );
}
