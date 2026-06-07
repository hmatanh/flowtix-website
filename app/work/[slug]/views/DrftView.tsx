"use client";

/**
 * Drft case study — Archetype C · Immersive Brand-Led
 *
 * Hello Monday × Locomotive pacing. Stays inside the site's dark frame
 * around section boundaries but the case-study sections themselves let
 * the brand take over — orange flood here, cream paper there, all-caps
 * display typography, motion as story not decoration. The case reads
 * less like an agency deck and more like an SS25 lookbook.
 */

import { type Project } from "@/lib/projects";

import { CaseHero } from "@/components/case-study/CaseHero";
import { MetricStrip } from "@/components/case-study/MetricStrip";
import { StorySection } from "@/components/case-study/StorySection";
import { AnnotatedScreen } from "@/components/case-study/AnnotatedScreen";
import { PullQuote } from "@/components/case-study/PullQuote";
import { DeliverablesList } from "@/components/case-study/DeliverablesList";
import { CaseFooter } from "@/components/case-study/CaseFooter";

import { ScreenStore } from "@/components/clients/drft/v2/ScreenStore";
import { ScreenContent } from "@/components/clients/drft/v2/ScreenContent";
import { ScreenEmail } from "@/components/clients/drft/v2/ScreenEmail";
import { HeroArtifact } from "@/components/clients/drft/v2/HeroArtifact";
import { BrandTakeover } from "@/components/clients/drft/v2/BrandTakeover";

const DRFT_RGB = "249, 115, 22";
const DRFT_PRIMARY = "#F97316";

export function DrftView({ project }: { project: Project }) {
  return (
    <main>
      {/* 1 — HERO */}
      <CaseHero
        eyebrow="DTC fashion · Workwear"
        year={project.year}
        serviceTags={["Brand", "Shopify", "Content Engine", "Email Flows"]}
        headline={
          <>
            A brand, a store, and a content engine —{" "}
            <span style={{ color: DRFT_PRIMARY }}>shipped in five weeks.</span>
          </>
        }
        primaryMetric="Zero to $189 jackets · 4.7× industry-average email open rate · sold out twice."
        accentColor={DRFT_PRIMARY}
        accentRGB={DRFT_RGB}
      />

      {/* 2 — METRIC STRIP. Bold display numbers, brand-flooded backdrop. */}
      <MetricStrip
        accentColor={DRFT_PRIMARY}
        accentRGB={DRFT_RGB}
        metrics={[
          { value: "5 wks", label: "Brand to launch day", detail: "from kickoff" },
          { value: "78%", label: "Less time on content production", detail: "founder-only team" },
          { value: "$189", label: "Average order value", detail: "first season" },
        ]}
      />

      {/* 3 — DROP-CAMPAIGN POSTER */}
      <AnnotatedScreen
        accentRGB={DRFT_RGB}
        eyebrow="The first drop"
        caption="A poster pulled straight from the launch — the wordmark, the lookbook strip, and the three workwear silhouettes that defined the first season."
        enableMobileScroll={false}
      >
        <HeroArtifact />
      </AnnotatedScreen>

      {/* 4 — CHALLENGE */}
      <StorySection
        accentRGB={DRFT_RGB}
        eyebrow="The challenge"
        heading={
          <>
            A founder with a great product, a typewriter, and enough budget
            for either a brand or a launch — but{" "}
            <span style={{ color: DRFT_PRIMARY }}>not both</span>.
          </>
        }
      >
        <p>
          DRFT was a single founder with a single conviction: workwear-inspired
          men&apos;s outerwear made the way it used to be — heavy fabrics,
          real fit, honest pricing. The garments were ready. The brand
          wasn&apos;t. The store wasn&apos;t. The content engine to keep a
          DTC brand alive after launch definitely wasn&apos;t.
        </p>
        <p>
          Most agencies would have quoted six months and a budget that
          swallowed the entire first season. The founder needed something
          faster, leaner, and louder than a polite e-commerce starter kit.
        </p>
      </StorySection>

      {/* 5 — STOREFRONT */}
      <AnnotatedScreen
        accentRGB={DRFT_RGB}
        eyebrow="The storefront"
        caption="A Shopify build that reads like a photo essay, not a catalogue. Heavy product cards, color swatches with weight, copy that's been to a workshop floor."
        annotations={[
          {
            number: "01",
            eyebrow: "Product as the photograph",
            body: "Each piece sits on the brand color, not on plain white. Browsing the store feels like flipping a lookbook.",
          },
          {
            number: "02",
            eyebrow: "Words that earn the price",
            body: "Every product line is rewritten in the workwear voice — heavy, honest, no marketing fat.",
          },
          {
            number: "03",
            eyebrow: "Friction by design",
            body: "Sold-through sizes are shown crossed-out, not hidden. Trust precedes conversion.",
          },
        ]}
      >
        <ScreenStore />
      </AnnotatedScreen>

      {/* 6 — A bold quote on the orange wash */}
      <PullQuote
        accentColor={DRFT_PRIMARY}
        accentRGB={DRFT_RGB}
        name="Theo Lansing"
        role="Founder · DRFT"
        variant="deep"
      >
        I was skeptical about AI in a creative business — worried it would
        make everything feel generic. Flowtix proved the opposite. The
        systems they built made us faster without making us less creative.
      </PullQuote>

      {/* 7 — BRAND TAKEOVER — the cream-page section restyle */}
      <AnnotatedScreen
        accentRGB={DRFT_RGB}
        eyebrow="The voice, in three modes"
        enableMobileScroll={false}
      >
        <BrandTakeover />
      </AnnotatedScreen>

      {/* 8 — CONTENT ENGINE */}
      <AnnotatedScreen
        accentRGB={DRFT_RGB}
        eyebrow="The content engine"
        caption="One brief in. Six on-brand variations out, each tagged with its tone. The founder picks one in fifteen minutes — used to take a whole afternoon."
        annotations={[
          {
            number: "01",
            eyebrow: "Brief on the left",
            body: "Product, channel, voice slider, length, and a handful of style tags. Less form, more guitar tuning.",
          },
          {
            number: "02",
            eyebrow: "Six takes on the right",
            body: "Each card is a different tone — quiet long-form, punchy short, founder-warm, urgent sale, plain spec. Founder picks one.",
          },
          {
            number: "03",
            eyebrow: "Goes live on its own",
            body: "Pushed straight to the product page or queued into the email tool. The brand stays in voice across every surface.",
          },
        ]}
      >
        <ScreenContent />
      </AnnotatedScreen>

      {/* 9 — EMAIL FLOWS */}
      <AnnotatedScreen
        accentRGB={DRFT_RGB}
        eyebrow="The email flows"
        caption="Five connected nodes covering the moment a buyer leaves a coat in the cart. Subject-line A/B is AI-tuned. Open rate 4.7× the workwear-vertical benchmark."
        annotations={[
          {
            number: "01",
            eyebrow: "Five-node flow",
            body: "Trigger → soft reminder → 48-hour wait → value branch → reply or save. The system runs without supervision.",
          },
          {
            number: "02",
            eyebrow: "AI-tuned subjects",
            body: "Trained on what works in workwear-DTC. Suggests subject revisions with stated reasons, never auto-sends without approval.",
          },
          {
            number: "03",
            eyebrow: "Mobile-first preview",
            body: "Every email is composed for the iPhone first. Desktop adapts down. 89% of opens happen on mobile.",
          },
        ]}
      >
        <ScreenEmail />
      </AnnotatedScreen>

      {/* 10 — Quote 2 — different stakeholder */}
      <PullQuote
        accentColor={DRFT_PRIMARY}
        accentRGB={DRFT_RGB}
        name="Anna Caro"
        role="Brand Lead · DRFT"
        variant="subtle"
      >
        The site looks like a brand that&apos;s been around for ten years.
        We&apos;ve been around for ten months. The system is doing the work
        of three people I haven&apos;t had to hire.
      </PullQuote>

      {/* 11 — Deliverables */}
      <DeliverablesList
        eyebrow="What we delivered"
        heading="One brand. Built to run on its own."
        accentRGB={DRFT_RGB}
        items={[
          {
            number: "01",
            title: "Brand identity & system",
            body: "Wordmark, type lockups, color stories, photography direction.",
          },
          {
            number: "02",
            title: "Shopify storefront",
            body: "Custom-themed; reads like a lookbook, sells like a store.",
          },
          {
            number: "03",
            title: "AI content engine",
            body: "Brief in, six on-brand variations out, every channel covered.",
          },
          {
            number: "04",
            title: "Email automation",
            body: "Cart, restock, post-purchase and win-back flows on launch.",
          },
          {
            number: "05",
            title: "Campaign system",
            body: "Drop templates, lookbook layouts, hand-finished season copy.",
          },
          {
            number: "06",
            title: "Tone-of-voice playbook",
            body: "Three modes — manifesto, product, email — with examples.",
          },
        ]}
      />

      {/* 12 — Closing */}
      <StorySection
        accentRGB={DRFT_RGB}
        eyebrow="What changed"
        heading={
          <>
            A one-person studio that{" "}
            <span style={{ color: DRFT_PRIMARY }}>ships like a team of ten</span>{" "}
            — and a season that sold out before the next drop.
          </>
        }
      >
        <p>
          Five weeks from kickoff, DRFT went live. The first season sold
          through. The second was already being shot. The founder writes
          the parts that matter, the system writes the rest, and the brand
          stays in voice across every product page, every email, every
          campaign.
        </p>
        <p>
          The garments are still hand-finished. The brand around them now
          runs on the same craft, scaled.
        </p>
      </StorySection>

      {/* 13 — Footer */}
      <CaseFooter project={project} />
    </main>
  );
}
