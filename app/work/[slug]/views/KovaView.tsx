"use client";

/**
 * Kova case study - Archetype A · Narrative Product Dossier
 *
 * Inspired by Linear's customer pages and Vercel's editorial case studies.
 * No more shared ProjectPageLayout. Brand sky-blue washes the entire
 * viewport. Product UI shots run full-bleed at native density (mobile
 * pans horizontally). Annotations sit BELOW each screen as a numbered
 * card grid - never floating over the artwork.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { MetricStrip } from "@/components/case-study/MetricStrip";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { DeliverablesList } from "@/components/case-study/DeliverablesList";
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
      {/* 1 - HERO */}
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

      {/* 2 - METRIC STRIP */}
      <MetricStrip
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
        metrics={[
          { value: "4 min", label: "Avg lead response", detail: "from 4 hours" },
          { value: "3×", label: "Property matches per agent", detail: "vs manual" },
          { value: "47/wk", label: "Automated follow-ups", detail: "drafted in agent voice" },
        ]}
      />

      {/* 3 - HERO ARTIFACT (already mobile-responsive - no scroll needed) */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The matching moment"
        caption="A new listing hits the MLS. In 2.1 seconds, every active buyer is scored against it, the highest match is surfaced, and a personalised reply is drafted in the agent's voice."
        enableMobileScroll={false}
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 4 - CHALLENGE - opinion-as-heading */}
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
          needed feeding every Sunday night. Buyers who didn&apos;t get a
          reply in four hours quietly went somewhere else.
        </p>
      </StorySection>

      {/* 5 - BEFORE / AFTER (already responsive - disable scroll) */}
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
        enableMobileScroll={false}
      >
        <BeforeAfter />
      </AnnotatedScreen>

      {/* 6 - SOLUTION - opinion-as-heading */}
      <StorySection
        accentRGB={KOVA_RGB}
        eyebrow="The solution"
        heading={
          <>
            We didn&apos;t replace the agents.
            <br className="hidden lg:inline" /> We replaced their{" "}
            <span style={{ color: KOVA_PRIMARY }}>worst spreadsheet.</span>
          </>
        }
      >
        <p>
          Every new lead now lands in one calm inbox. Claude scores it against
          the entire active book of buyers, ranks the top matches by likelihood
          to close, and drafts a follow-up in the responsible agent&apos;s
          tone of voice - pulled from their last eighty conversations.
        </p>
        <p>
          The agent reviews the draft, edits one line if it needs editing,
          and sends. By the time most competing offices have triaged the lead,
          Kova has already booked the showing.
        </p>
      </StorySection>

      {/* 7 - DASHBOARD SHOT */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="What every agent opens at 9am"
        caption="One screen consolidates the four moments that matter: hot matches waiting on a reply, pipeline progression, AI suggestions queued for review, live team activity."
        annotations={[
          {
            number: "01",
            eyebrow: "Hot column",
            body: "Buyers above 80% match score pulse softly in the pipeline until the responsible agent has acted.",
          },
          {
            number: "02",
            eyebrow: "AI panel",
            body: "Three actions, ranked by impact, drafted in the agent's tone. Each shows the AI's reasoning before it sends.",
          },
          {
            number: "03",
            eyebrow: "Live activity",
            body: "AI events are tagged in blue so the team can audit exactly what was sent on their behalf and when.",
          },
        ]}
      >
        <ScreenDashboard />
      </AnnotatedScreen>

      {/* 8 - A QUIET QUOTE */}
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

      {/* 9 - MATCHING SHOT */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The engine, opened up"
        caption="Each match is scored against the listing on four criteria - budget alignment, neighbourhood preference, property attributes, and buyer activity recency."
        annotations={[
          {
            number: "01",
            eyebrow: "Listing snapshot",
            body: "Schema-extracted from the MLS feed the instant the listing goes live. No manual entry, no copy-paste.",
          },
          {
            number: "02",
            eyebrow: "Top match",
            body: "Always surfaces the buyer most likely to close - never just the most recently active in the database.",
          },
          {
            number: "03",
            eyebrow: "Stated reasons",
            body: "Every score is auditable. Agents and brokers can challenge the AI's logic on any individual match.",
          },
        ]}
      >
        <ScreenMatching />
      </AnnotatedScreen>

      {/* 10 - CRM shot */}
      <AnnotatedScreen
        accentRGB={KOVA_RGB}
        eyebrow="The conversation, after the match"
        caption="Inbox, thread, lead history and AI-drafted replies on one canvas. Agents never lose context, and every AI action is logged."
        annotations={[
          {
            number: "01",
            eyebrow: "One inbox",
            body: "Email, WhatsApp, Instagram and form replies all consolidate here - no more switching tabs.",
          },
          {
            number: "02",
            eyebrow: "AI draft, sent by Sarah",
            body: "Composed in the agent's tone of voice. Every send is reviewed by the agent before it leaves the office.",
          },
          {
            number: "03",
            eyebrow: "Auditable timeline",
            body: "AI-initiated events are tagged so brokers can see exactly what the system did, when, and for whom.",
          },
        ]}
      >
        <ScreenCRM />
      </AnnotatedScreen>

      {/* 11 - A SECOND QUOTE */}
      <PullQuote
        accentColor={KOVA_PRIMARY}
        accentRGB={KOVA_RGB}
        name="David Kim"
        role="Senior Agent · Moran Realty Group"
        variant="subtle"
      >
        The first month, I kept editing every AI draft. By the second month I
        was sending them without changes. By the third I forgot it was an AI.
        That&apos;s when I knew it had become part of how I work.
      </PullQuote>

      {/* 11.5 - DELIVERABLES */}
      <DeliverablesList
        accentRGB={KOVA_RGB}
        eyebrow="What we built"
        heading="One inbox, one engine, one source of truth."
        items={[
          {
            number: "01",
            title: "Unified lead inbox",
            body: "Email, WhatsApp, Instagram and form replies in one calm thread.",
          },
          {
            number: "02",
            title: "AI buyer-listing matcher",
            body: "Scores every active buyer against every new MLS listing in seconds.",
          },
          {
            number: "03",
            title: "Tone-of-voice reply drafting",
            body: "Follow-ups composed in each agent's voice, reviewed before send.",
          },
          {
            number: "04",
            title: "Agent dashboard",
            body: "Hot matches, pipeline progression and AI suggestions on one screen.",
          },
          {
            number: "05",
            title: "Auditable activity log",
            body: "Every AI-initiated action tagged so brokers can see exactly what shipped.",
          },
        ]}
      />

      {/* 12 - Closing argument */}
      <StorySection
        accentRGB={KOVA_RGB}
        eyebrow="What changed"
        heading={
          <>
            A twelve-person office that{" "}
            <span style={{ color: KOVA_PRIMARY }}>responds like fifty</span> -
            without hiring a single new agent.
          </>
        }
      >
        <p>
          Six months after launch, response times are down 92%, every lead
          gets a reply within minutes regardless of which channel it came
          through, and the partners no longer spend Sunday nights staging the
          week ahead.
        </p>
        <p>
          The system stays out of the way. Agents say they noticed they
          stopped being tired before they noticed they were responding faster.
        </p>
      </StorySection>

      {/* 13 - FOOTER strip */}
      <CaseFooter project={project} />
    </main>
  );
}
