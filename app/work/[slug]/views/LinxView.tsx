"use client";

/**
 * Linx case study — Archetype E · Quote + Identity / Rationale
 *
 * Pentagram-style pacing. Rationale-led headlines. The story is told as
 * much by what the partners say as by what we shipped. Cream-paper
 * proposal artifact in the hero, three product surfaces (proposal,
 * dashboard, monthly report) annotated below, and named credit lines —
 * principal authorship visible throughout.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { MetricStrip } from "@/components/case-study/MetricStrip";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { DeliverablesList } from "@/components/case-study/DeliverablesList";
import { CaseFooter } from "@/components/case-study/CaseFooter";

import { ScreenProposal } from "@/components/clients/linx/v2/ScreenProposal";
import { ScreenDashboard } from "@/components/clients/linx/v2/ScreenDashboard";
import { ScreenReport } from "@/components/clients/linx/v2/ScreenReport";
import { HeroArtifact } from "@/components/clients/linx/v2/HeroArtifact";

const LINX_RGB = "139, 92, 246";
const LINX_PRIMARY = "#8B5CF6";

export function LinxView({ project }: { project: Project }) {
  return (
    <main>
      {/* 1 — HERO */}
      <CaseHero
        eyebrow="Consulting · Creative studio"
        year={project.year}
        serviceTags={["System design", "AI workflows", "Studio operations", "Brand voice"]}
        headline={
          <>
            A consulting studio that scaled{" "}
            <span style={{ color: LINX_PRIMARY }}>from 9 to 23 clients</span>{" "}
            without hiring a single person.
          </>
        }
        primaryMetric="Same three partners. 2.5× the roster. Reports out on the first of every month."
        accentColor={LINX_PRIMARY}
        accentRGB={LINX_RGB}
      />

      {/* 2 — METRIC STRIP */}
      <MetricStrip
        accentColor={LINX_PRIMARY}
        accentRGB={LINX_RGB}
        metrics={[
          { value: "9 → 23", label: "Active clients · same team", detail: "12 months later" },
          { value: "8h → 45m", label: "Per proposal", detail: "Drafted, edited, sent" },
          { value: "92%", label: "Reports on time, on the 1st", detail: "Was 61%" },
        ]}
      />

      {/* 3 — HERO ARTIFACT (proposal cover + thesis) */}
      <AnnotatedScreen
        accentRGB={LINX_RGB}
        eyebrow="The thesis"
        caption="A printed proposal cover and the studio manifesto behind every system we built. The artifact is real — pulled from the Marlow + Co engagement."
        enableMobileScroll={false}
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 4 — THE CHALLENGE (rationale-led) */}
      <StorySection
        accentRGB={LINX_RGB}
        eyebrow="The challenge"
        heading={
          <>
            Linx didn&apos;t want to <em>grow</em>. They wanted to{" "}
            <span style={{ color: LINX_PRIMARY }}>stop staying late</span>.
          </>
        }
      >
        <p>
          Linx is the kind of consulting studio that clients fight over —
          three partners, careful work, every deliverable signed by a name.
          That kind of studio has a natural ceiling, and Linx had hit it:
          nine clients, three partners working until midnight three nights
          a week, and a steady stream of inbound they had to politely
          decline.
        </p>
        <p>
          The conventional answer is hire. The conventional answer changes
          the studio. Iris, Lior and Sarah didn&apos;t want partners
          four, five and six — they wanted to keep the studio small and
          let the system carry the rest.
        </p>
      </StorySection>

      {/* 5 — Quote 1: Iris (founder) */}
      <PullQuote
        accentColor={LINX_PRIMARY}
        accentRGB={LINX_RGB}
        name="Iris Chen"
        role="Founding partner · Linx"
        variant="deep"
      >
        I wanted Linx to feel like the studio we&apos;d set out to build, not
        the agency it would become if we hired five more people. Flowtix
        understood that immediately. They didn&apos;t build us a tool —
        they re-architected how the studio writes, ships and signs off.
      </PullQuote>

      {/* 6 — THE APPROACH (rationale) */}
      <StorySection
        accentRGB={LINX_RGB}
        eyebrow="The approach"
        heading={
          <>
            We didn&apos;t replace the writing.{" "}
            <span style={{ color: LINX_PRIMARY }}>We replaced the typing.</span>
          </>
        }
      >
        <p>
          We spent two weeks inside the studio — reading thirty proposals,
          sixty client reports, three years of partner-to-partner email —
          and what came out was a voice model for Linx, not a generic
          writing assistant. The system writes like Lior writes, not like
          ChatGPT writes.
        </p>
        <p>
          Every artifact the studio ships — proposal, monthly report,
          briefing — is drafted by the system to ninety percent, then a
          partner spends thirty minutes on the ten percent that needs
          judgment. That ten percent is now where the partners spend their
          time. Everything else is automated.
        </p>
      </StorySection>

      {/* 7 — PROPOSAL ENGINE */}
      <AnnotatedScreen
        accentRGB={LINX_RGB}
        eyebrow="The proposal engine"
        caption="Brief in, twelve-page proposal out — in the studio's voice, with the studio's structure, signed by a Linx partner inside an hour."
        annotations={[
          {
            number: "01",
            eyebrow: "Outline as a living spine",
            body: "Nine standard sections with word-counts, done-states, and a partner check at every step. The studio's process, externalized.",
          },
          {
            number: "02",
            eyebrow: "The voice is the studio's",
            body: "Trained on the studio's own writing — strategic, restrained, no agency padding. The partner edits, not rewrites.",
          },
          {
            number: "03",
            eyebrow: "Editorial AI, not autocomplete",
            body: "Nudges are critical, not generative. \"Cut three modifiers.\" \"Move pricing earlier.\" \"This number wants rounding.\"",
          },
        ]}
      >
        <ScreenProposal />
      </AnnotatedScreen>

      {/* 8 — STUDIO DASHBOARD */}
      <AnnotatedScreen
        accentRGB={LINX_RGB}
        eyebrow="The studio dashboard"
        caption="The screen the three partners open at 8am. The system has already done the morning: client status, what's flagged, what's queued, who's reviewing what."
        annotations={[
          {
            number: "01",
            eyebrow: "Every client, one screen",
            body: "Roster, returns and status by client — sorted by what wants attention today, not by alphabet.",
          },
          {
            number: "02",
            eyebrow: "Morning brief, drafted",
            body: "A two-sentence partner-voice summary of what changed overnight. Reviewed, not written.",
          },
          {
            number: "03",
            eyebrow: "Today, in studio time",
            body: "Calls, drafts and sign-offs sequenced for the day. AI-drafted items marked, partner-required items flagged.",
          },
        ]}
      >
        <ScreenDashboard />
      </AnnotatedScreen>

      {/* 9 — Quote 2: Lior (partner) */}
      <PullQuote
        accentColor={LINX_PRIMARY}
        accentRGB={LINX_RGB}
        name="Lior Mor"
        role="Partner · Linx"
        variant="subtle"
      >
        I haven&apos;t opened the studio after seven in nine months. The
        first time that happened I assumed something had broken — that
        the system had silently stopped working. It hadn&apos;t. It had
        just stopped requiring me.
      </PullQuote>

      {/* 10 — MONTHLY REPORT */}
      <AnnotatedScreen
        accentRGB={LINX_RGB}
        eyebrow="The monthly report"
        caption="The deliverable that decides whether a client renews. Drafted by the system, edited by a partner, on cream paper with a Linx partner's name. Goes out on the first of every month."
        designAspect="1600/1100"
        annotations={[
          {
            number: "01",
            eyebrow: "An artifact, not an export",
            body: "Composed like a partner deck — cover, narrative, the one chart that matters, signed off by a partner. Eighteen pages, printable.",
          },
          {
            number: "02",
            eyebrow: "AI as the editor, not the author",
            body: "The system suggests the commentary. The partner approves, adjusts, or rewrites. The client never reads a sentence the studio didn't sign.",
          },
          {
            number: "03",
            eyebrow: "Variance, in the partner's voice",
            body: "Numbers flagged by the system are translated into the studio's voice — \"Three quiet shifts compounded into the quarter's edge.\"",
          },
        ]}
      >
        <ScreenReport />
      </AnnotatedScreen>

      {/* 11 — Quote 3: Sarah (operations) */}
      <PullQuote
        accentColor={LINX_PRIMARY}
        accentRGB={LINX_RGB}
        name="Sarah Tate"
        role="Partner · Operations · Linx"
        variant="deep"
      >
        Our 1st-of-the-month report rate used to sit around 61%. Clients
        were polite about it; it was death by a thousand small apologies.
        This March it was 100%. We&apos;ve had two months of full-on-time
        delivery for the first time since we founded the studio.
      </PullQuote>

      {/* 12 — DELIVERABLES */}
      <DeliverablesList
        eyebrow="What we delivered"
        heading="A studio operating system, signed by three names."
        accentRGB={LINX_RGB}
        items={[
          {
            number: "01",
            title: "Voice model",
            body: "Trained on the studio's own thirty proposals and sixty reports. The system writes like Linx writes.",
          },
          {
            number: "02",
            title: "AI proposal engine",
            body: "Brief → 12-page proposal in 45 minutes, in the studio's voice and structure.",
          },
          {
            number: "03",
            title: "Studio dashboard",
            body: "Every client, every channel, every report — the screen the partners open at 8am.",
          },
          {
            number: "04",
            title: "Monthly report engine",
            body: "Live data in, partner-signed cream-paper PDF out on the first of every month.",
          },
          {
            number: "05",
            title: "Editorial AI nudges",
            body: "Voice, structure, story and number suggestions — critical, not generative. The partner edits.",
          },
          {
            number: "06",
            title: "Operating rhythm",
            body: "Standup, sign-off and delivery cadence — embedded into the system, not a separate process.",
          },
        ]}
      />

      {/* 13 — CLOSING */}
      <StorySection
        accentRGB={LINX_RGB}
        eyebrow="What changed"
        heading={
          <>
            The studio is still three names.{" "}
            <span style={{ color: LINX_PRIMARY }}>Now it carries 23.</span>
          </>
        }
      >
        <p>
          Linx grew from nine clients to twenty-three in twelve months. The
          partners stopped staying late. The proposals are still signed
          Chen, Mor or Tate. The reports still land on the first of the
          month. The studio stayed the studio — it just stopped needing
          its founders to type every word.
        </p>
        <p>
          The work is more theirs now, not less. The system gave them
          back the part of the work they wanted to do.
        </p>
      </StorySection>

      {/* 14 — FOOTER */}
      <CaseFooter project={project} />
    </main>
  );
}
