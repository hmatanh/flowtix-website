"use client";

/**
 * Aurum case study — Archetype B · Editorial Gallery (luxury restraint)
 *
 * Pentagram Billie + Heydays Alotta pacing. Stays dark to match the rest
 * of the site, but trades Kova's tech density and Sero's clinical calm
 * for a private-bank quietness. Serif display titling, generous
 * whitespace, an artifact-led image rhythm, and a single understated
 * quote instead of the usual metric strip.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { DeliverablesList } from "@/components/case-study/DeliverablesList";
import { CaseFooter } from "@/components/case-study/CaseFooter";

import { ScreenPortfolio } from "@/components/clients/aurum/v2/ScreenPortfolio";
import { ScreenReport } from "@/components/clients/aurum/v2/ScreenReport";
import { ScreenPortal } from "@/components/clients/aurum/v2/ScreenPortal";
import { HeroArtifact } from "@/components/clients/aurum/v2/HeroArtifact";
import { BrandBoard } from "@/components/clients/aurum/v2/BrandBoard";

const AURUM_RGB = "217, 119, 6";
const AURUM_PRIMARY = "#D97706";

export function AurumView({ project }: { project: Project }) {
  return (
    <main>
      {/* 1 — HERO. One sentence. Single accent. */}
      <CaseHero
        eyebrow="Private wealth · Boutique"
        year={project.year}
        serviceTags={["Brand", "Portfolio Intelligence", "AI Reports", "Client Portal"]}
        headline={
          <>
            Quiet intelligence for{" "}
            <span style={{ color: AURUM_PRIMARY }}>$397M</span> under management.
          </>
        }
        primaryMetric="Quarterly reports: 3 hours each → 0 minutes. Indistinguishable from the ones the partners used to write by hand."
        accentColor={AURUM_PRIMARY}
        accentRGB={AURUM_RGB}
      />

      {/* 2 — THE ARTIFACT. Single image, single thesis. */}
      <AnnotatedScreen
        accentRGB={AURUM_RGB}
        eyebrow="The Q4 review"
        enableMobileScroll={false}
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 3 — Two-paragraph thesis. Serif. */}
      <StorySection
        accentRGB={AURUM_RGB}
        eyebrow="The brief"
        heading={
          <>
            A boutique firm punching above its weight — at the cost of every
            advisor working past{" "}
            <span style={{ color: AURUM_PRIMARY }}>midnight</span>.
          </>
        }
      >
        <p>
          Aurum&apos;s three senior advisors managed almost $400M in client
          capital with a service experience that felt — to anyone receiving
          it — bespoke and personal. Behind the curtain, that experience was
          held together by 80 hours of manual report writing per quarter,
          copy-pasted from twelve different data sources into a Word template
          that nobody had time to redesign.
        </p>
        <p>
          The work was excellent. The system producing it was a fire that
          needed feeding every Sunday night. One advisor was already burned
          out. The other two were close.
        </p>
      </StorySection>

      {/* 4 — Editorial gallery #1 — Portfolio intelligence */}
      <AnnotatedScreen
        accentRGB={AURUM_RGB}
        eyebrow="The intelligence engine"
        caption="Returns, attribution, exposure and mandate compliance calculated continuously — so the morning conversation can be about the client, not the spreadsheet."
        annotations={[
          {
            number: "01",
            eyebrow: "Calm by design",
            body: "One performance number, one chart, one decision. Density only where the advisor needs it.",
          },
          {
            number: "02",
            eyebrow: "Mandate-aware",
            body: "Every position is checked against the trust's mandate before it lands in front of the advisor.",
          },
          {
            number: "03",
            eyebrow: "Auditable trail",
            body: "Every change to a portfolio, every approval, every dissent — logged for governance.",
          },
        ]}
      >
        <ScreenPortfolio />
      </AnnotatedScreen>

      {/* 5 — Editorial gallery #2 — Report editor (the headline product) */}
      <AnnotatedScreen
        accentRGB={AURUM_RGB}
        eyebrow="How a quarterly report is now written"
        caption="The AI drafts in the partner's own voice, using the firm's writing style as the gauge. The partner edits, the partner signs. The reader can't tell."
        annotations={[
          {
            number: "01",
            eyebrow: "Section outline",
            body: "Every report follows the firm's seven-section convention. Status indicators move from draft to signed in two days, not two weeks.",
          },
          {
            number: "02",
            eyebrow: "Two-column editorial",
            body: "Set in serif, with drop caps and inline charts. Reads like the firm's monograph series, because that's what it is.",
          },
          {
            number: "03",
            eyebrow: "Suggestions, not drafts",
            body: "Aurum's AI proposes tone and number edits with stated reasons. The partner approves or rejects with one click.",
          },
        ]}
      >
        <ScreenReport />
      </AnnotatedScreen>

      {/* 6 — Quote. Serif. No headshot — Aurum doesn't show its principals. */}
      <PullQuote
        accentColor={AURUM_PRIMARY}
        accentRGB={AURUM_RGB}
        name="Eitan Shaked"
        role="Managing Partner · Aurum Private"
        variant="deep"
      >
        Our clients now think we have a team of analysts behind us. We
        don&apos;t. We have one good system, and three partners who get to
        leave the office on time again.
      </PullQuote>

      {/* 7 — Editorial gallery #3 — Client portal */}
      <AnnotatedScreen
        accentRGB={AURUM_RGB}
        eyebrow="What the client sees"
        caption="A single page. One year-to-date number. One handwritten note from the partner. One report waiting to be read."
        annotations={[
          {
            number: "01",
            eyebrow: "One performance line",
            body: "The client never sees a chart they didn't ask for. They see what changed, and why.",
          },
          {
            number: "02",
            eyebrow: "A note in voice",
            body: "Every quarter, a paragraph from the partner. Composed in their own writing, not in a template.",
          },
          {
            number: "03",
            eyebrow: "The new report",
            body: "The artifact opens to the page the partner wanted them to see first. The other 13 pages wait.",
          },
        ]}
      >
        <ScreenPortal />
      </AnnotatedScreen>

      {/* 8 — Editorial gallery #4 — The brand identity itself */}
      <AnnotatedScreen
        accentRGB={AURUM_RGB}
        eyebrow="The brand, in one page"
        caption="The wordmark, the typographic system and the palette. Everything you'd find on the inside cover of a printed monograph."
        enableMobileScroll={false}
      >
        <BrandBoard />
      </AnnotatedScreen>

      {/* 9 — Deliverables — Heydays minimal list */}
      <DeliverablesList
        eyebrow="What we delivered"
        heading="Five quiet systems and one identity."
        accentRGB={AURUM_RGB}
        items={[
          {
            number: "01",
            title: "Brand identity",
            body: "Wordmark, monogram, type system, palette.",
          },
          {
            number: "02",
            title: "Portfolio intelligence engine",
            body: "Live returns, attribution, mandate compliance.",
          },
          {
            number: "03",
            title: "AI-written quarterly reports",
            body: "Drafted in the partner's voice, edited by the partner.",
          },
          {
            number: "04",
            title: "Confidential client portal",
            body: "One page per client. Members-club calm.",
          },
          {
            number: "05",
            title: "Compliance audit log",
            body: "Every AI suggestion, every partner decision.",
          },
          {
            number: "06",
            title: "Onboarding playbook",
            body: "How a new advisor takes over the system.",
          },
        ]}
      />

      {/* 10 — Closing */}
      <StorySection
        accentRGB={AURUM_RGB}
        eyebrow="What changed"
        heading={
          <>
            Three partners. Five times the report output. The same{" "}
            <span style={{ color: AURUM_PRIMARY }}>quiet voice</span> on every
            page.
          </>
        }
      >
        <p>
          Twelve months after launch, every Aurum client receives a 14-page
          report on the first business day of the new quarter — drafted by
          the system, edited by the partner who manages the relationship,
          and signed by Monday morning.
        </p>
        <p>
          The partners write the parts that matter. The system writes the
          rest, in their voice. The clients notice the difference in tone
          before they notice the difference in turnaround time.
        </p>
      </StorySection>

      {/* 11 — Footer */}
      <CaseFooter project={project} />
    </main>
  );
}
