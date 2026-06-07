"use client";

/**
 * Sero case study — Archetype A+B · Clinical Editorial
 *
 * Pentagram MedExpress + Heydays Plateful pacing. The same dark site
 * palette, but with sage/emerald instead of sky blue, much wider
 * breathing room, larger type, fewer metric flexes. The hero artifact is
 * a calendar — not a dashboard — because the case is about returned time,
 * not feature ambition.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { DeliverablesList } from "@/components/case-study/DeliverablesList";
import { CaseFooter } from "@/components/case-study/CaseFooter";

import { ScreenPatient } from "@/components/clients/sero/v2/ScreenPatient";
import { ScreenIntake } from "@/components/clients/sero/v2/ScreenIntake";
import { ScreenMobile } from "@/components/clients/sero/v2/ScreenMobile";
import { HeroArtifact } from "@/components/clients/sero/v2/HeroArtifact";

const SERO_RGB = "16, 185, 129";
const SERO_PRIMARY = "#10B981";

export function SeroView({ project }: { project: Project }) {
  return (
    <main>
      {/* 1 — HERO — quieter than Kova */}
      <CaseHero
        eyebrow="Digital health · Clinical operations"
        year={project.year}
        serviceTags={[
          "AI Intake",
          "Mobile Patient Flow",
          "EMR Integration",
        ]}
        headline={
          <>
            <span style={{ color: SERO_PRIMARY }}>22 hours a week.</span>{" "}
            Returned to six practitioners who needed them.
          </>
        }
        primaryMetric="Intake processing: 25 minutes → 3 minutes — with no compromise on clinical judgement."
        accentColor={SERO_PRIMARY}
        accentRGB={SERO_RGB}
      />

      {/* 2 — HERO ARTIFACT — the calendar */}
      <AnnotatedScreen
        accentRGB={SERO_RGB}
        eyebrow="The calendar, before and after"
        caption="A single clinician's working week. Same hours, same building, same patients waiting — but the time once spent on intake admin is now spent in session."
        enableMobileScroll={false}
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 3 — THE CHALLENGE */}
      <StorySection
        accentRGB={SERO_RGB}
        eyebrow="The challenge"
        heading={
          <>
            Six clinicians who chose this work to be{" "}
            <span style={{ color: SERO_PRIMARY }}>with people</span>,
            spending half their day on paperwork.
          </>
        }
      >
        <p>
          Serō is a small allied-health clinic with six clinicians who walked
          into the profession to spend time with patients. By 2024 they were
          spending twenty-five minutes per intake on documentation, ten
          minutes per session on charting, and entire Friday afternoons on
          insurance pre-authorisations.
        </p>
        <p>
          The work was excellent. The structure producing it was an exhaustion
          machine. One clinician had already burned out. Another was close.
        </p>
      </StorySection>

      {/* 4 — MOBILE PATIENT FLOW — the editorial 3-phone moment */}
      <AnnotatedScreen
        accentRGB={SERO_RGB}
        eyebrow="The patient never sees the AI"
        caption="A short, adaptive intake on the patient's phone. Calm typography. Their answers shape the next question. They never know — or need to know — that there's a model on the other side."
        enableMobileScroll={false}
      >
        <ScreenMobile />
      </AnnotatedScreen>

      {/* 5 — THE SOLUTION */}
      <StorySection
        accentRGB={SERO_RGB}
        eyebrow="The solution"
        heading={
          <>
            The system that listens, structures, and prepares — so the human
            shows up for the human part.
          </>
        }
      >
        <p>
          Every intake is parsed against the clinic&apos;s protocols the
          moment it&apos;s submitted. The AI extracts the structured fields a
          clinician needs to plan a session — sleep average, presenting
          concerns, risk markers, treatment history — and surfaces the
          clinical questions that should be asked next.
        </p>
        <p>
          The clinician opens the chart, reads a one-page brief, approves or
          edits, and starts the session. The first ten minutes of every visit
          are now about the patient — not the paperwork.
        </p>
      </StorySection>

      {/* 6 — INTAKE PROCESSOR — full-bleed */}
      <AnnotatedScreen
        accentRGB={SERO_RGB}
        eyebrow="The clinician opens the intake"
        caption="The AI's structured analysis sits on the left. The triage suggestion sits on the right. Every approval is logged for clinical governance."
        annotations={[
          {
            number: "01",
            eyebrow: "Structured fields",
            body: "Pulled from the patient's free-text answers and stored in EMR-ready columns. No re-typing.",
          },
          {
            number: "02",
            eyebrow: "Triage suggestion",
            body: "Practitioner, first available slot, and pre-session task. The clinician approves or re-routes in one click.",
          },
          {
            number: "03",
            eyebrow: "Governance trail",
            body: "Every AI suggestion and every clinician decision is logged. The audit is invisible until it's needed.",
          },
        ]}
      >
        <ScreenIntake />
      </AnnotatedScreen>

      {/* 7 — A QUIET QUOTE */}
      <PullQuote
        accentColor={SERO_PRIMARY}
        accentRGB={SERO_RGB}
        name="Dr. Eliahu Bar-On"
        role="Clinical Director · Serō"
        variant="deep"
      >
        I went into healthcare to be present with patients. For years, admin
        work was slowly making that impossible. The system gave us back the
        part of the job we actually love — and it did it without making
        anyone feel they were talking to a machine.
      </PullQuote>

      {/* 8 — PATIENT VIEW */}
      <AnnotatedScreen
        accentRGB={SERO_RGB}
        eyebrow="What every clinician opens before a session"
        caption="A one-page brief in the clinician's voice, with the AI's reasoning visible underneath. The clinical impression is always written by the human."
        annotations={[
          {
            number: "01",
            eyebrow: "Latest scores",
            body: "Standardised assessments tracked across sessions. Trend arrows over the raw number, never replacing it.",
          },
          {
            number: "02",
            eyebrow: "Session brief",
            body: "A two-paragraph summary in the clinician's writing tone. Suggested focus areas are tagged for review.",
          },
          {
            number: "03",
            eyebrow: "Session history",
            body: "Last four sessions on the right rail. Nothing about the patient is more than a glance away.",
          },
        ]}
      >
        <ScreenPatient />
      </AnnotatedScreen>

      {/* 9 — A SECOND QUOTE */}
      <PullQuote
        accentColor={SERO_PRIMARY}
        accentRGB={SERO_RGB}
        name="Maya Hadar"
        role="Senior Practitioner · Serō"
        variant="subtle"
      >
        For the first time in a decade, I&apos;m writing my notes the day
        of the session — not on Sunday afternoon. That alone has changed
        what kind of clinician I am during the week.
      </PullQuote>

      {/* 10 — DELIVERABLES — Heydays editorial list */}
      <DeliverablesList
        eyebrow="What we built"
        heading="Five quiet systems, working as one."
        accentRGB={SERO_RGB}
        items={[
          {
            number: "01",
            title: "Mobile patient intake",
            body: "Adaptive, kind, never feels like a clipboard.",
          },
          {
            number: "02",
            title: "AI summary & triage",
            body: "Structured analysis, reviewed by a clinician before file.",
          },
          {
            number: "03",
            title: "Practitioner patient view",
            body: "One screen, one patient, one session.",
          },
          {
            number: "04",
            title: "EMR write-back",
            body: "Direct integration with the clinic's record system.",
          },
          {
            number: "05",
            title: "Governance log",
            body: "Auditable trail of every AI suggestion and human decision.",
          },
        ]}
      />

      {/* 11 — Closing */}
      <StorySection
        accentRGB={SERO_RGB}
        eyebrow="What changed"
        heading={
          <>
            Twenty-two hours a week, returned to{" "}
            <span style={{ color: SERO_PRIMARY }}>six clinicians</span> —
            and to every patient they now have time to be present with.
          </>
        }
      >
        <p>
          Six months after launch, intake processing is down to three minutes
          per patient, every clinician finishes their notes the day of the
          session, and the clinic added two new practitioners without
          enlarging the admin team.
        </p>
        <p>
          The system isn&apos;t the point. The hour someone gets back is.
        </p>
      </StorySection>

      {/* 12 — Footer */}
      <CaseFooter project={project} />
    </main>
  );
}
