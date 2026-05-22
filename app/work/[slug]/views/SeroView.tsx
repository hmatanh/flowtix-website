"use client";

import { type Project } from "@/lib/projects";
import {
  ProjectPageLayout,
  type ProjectPageContent,
} from "@/components/projects/ProjectPageLayout";
import { ScreenPatient } from "@/components/clients/sero/ScreenPatient";
import { ScreenIntake } from "@/components/clients/sero/ScreenIntake";
import { ScreenMobile } from "@/components/clients/sero/ScreenMobile";

const CONTENT: ProjectPageContent = {
  heroHeadline:
    "22 hours a week. Returned to six practitioners who needed them.",
  keyMetric: "Intake processing: 25 minutes → 3 minutes",

  statementStats: [
    { value: 22, suffix: " hrs", label: "Reclaimed weekly across the clinic" },
    { value: 88, suffix: "%", label: "Faster patient intake" },
    { value: 6, suffix: " min", label: "From referral to triage" },
    { value: 96, suffix: "%", label: "Documentation accuracy" },
  ],

  challenge: {
    quote:
      "Six practitioners spending half their day on paperwork that nobody — not them, not the patients, not the regulators — actually wanted them doing.",
    paragraphs: [
      "Serō is a small allied-health clinic with six clinicians who chose the field to spend time with patients. By 2024 they were spending 25 minutes per intake on documentation, another 10 minutes per session on charting, and entire Friday afternoons on insurance pre-auths.",
      "The result was the exact opposite of why they got into the work: fewer patients seen, less attention per patient, and clinicians considering leaving the practice over admin burnout.",
    ],
  },
  solution: {
    quote:
      "An AI intake system that listens, summarizes, and prepares everything a clinician needs — so the human shows up for the human part.",
    paragraphs: [
      "The patient experience is unchanged from the outside: they fill in a short, mobile-first intake. Behind it, Claude is parsing the answers against the clinic's protocols, generating a triage-ready summary, flagging anything that needs the clinician's eye, and pre-populating the EMR.",
      "By the time the clinician sees the patient, the chart is ready, the relevant history is summarized, and the session can be about care — not data entry.",
    ],
  },
  whatWeBuilt: [
    {
      number: "01",
      title: "Patient intake — beautifully mobile",
      body:
        "A short, kind, mobile-first form. Adaptive questions. Calm typography. The opposite of a clinic clipboard.",
      visual: <ScreenMobile />,
      visualType: "phone",
    },
    {
      number: "02",
      title: "AI summary & triage",
      body:
        "Claude reads every intake, generates a structured summary, flags high-priority cases, and routes to the right practitioner. Each output reviewed by a clinician before file.",
      visual: <ScreenIntake />,
      visualType: "desktop",
      url: "app.sero.health/intake",
    },
    {
      number: "03",
      title: "Practitioner patient view",
      body:
        "One screen, one patient, one session — pre-populated with the summary, the history, the relevant assessments. Charting is a five-minute conversation, not an hour of typing.",
      visual: <ScreenPatient />,
      visualType: "desktop",
      url: "app.sero.health/patient",
    },
  ],

  fullBleed: {
    visual: <ScreenPatient />,
    type: "desktop",
    url: "app.sero.health",
    caption: "The Serō practitioner view — live across six clinicians since spring 2025",
  },

  gallery: [
    {
      id: "patient",
      name: "Patient view",
      description: "The screen practitioners live in. Calm, focused, useful.",
      visual: <ScreenPatient />,
      type: "desktop",
      url: "app.sero.health/patient",
      primary: true,
    },
    {
      id: "intake",
      name: "AI intake processor",
      description: "Each new intake summarized and triaged inside three minutes.",
      visual: <ScreenIntake />,
      type: "desktop",
      url: "app.sero.health/intake",
    },
    {
      id: "mobile",
      name: "Patient intake form",
      description: "Mobile-first, adaptive, never feels like a clipboard.",
      visual: <ScreenMobile />,
      type: "phone",
    },
  ],

  process: [
    {
      number: "1 / 3",
      title: "Time-and-motion study",
      body:
        "We sat in on real sessions and shadowed admin staff for a full week. Mapped every form, every system handoff, every interruption.",
      duration: "Weeks 1–2",
    },
    {
      number: "2 / 3",
      title: "Designing for clinicians, not engineers",
      body:
        "Every screen prototyped, tested with the practitioners, refined. We threw out two versions before landing on the third — because the third was the one clinicians actually wanted to use.",
      duration: "Weeks 2–5",
    },
    {
      number: "3 / 3",
      title: "Quiet, gradual rollout",
      body:
        "Started with two practitioners for two weeks, then four, then all six. By the time the whole clinic was on it, every edge case had been polished.",
      duration: "Weeks 5–7",
    },
  ],

  testimonialFull:
    "I went into healthcare to be present with patients. For years, admin work was slowly making that impossible. The Serō system gave us back the part of the job we actually love — and it did it without making patients feel like they were talking to a machine.",
  testimonialRole: "Clinical Director · Serō",
};

export function SeroView({ project }: { project: Project }) {
  return <ProjectPageLayout project={project} content={CONTENT} />;
}
