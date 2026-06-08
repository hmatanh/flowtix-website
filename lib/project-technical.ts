/**
 * Per-project technical details. The Solution Architecture flow,
 * the AI Agents we deployed, and the categorized stack.
 * Used by ProjectArchitecture + ProjectAIAgents + ProjectTechStack.
 */

export type ArchNode = {
  label: string;
  sub: string;
  kind: "input" | "ai" | "system" | "output";
};

export type AIAgent = {
  name: string;
  role: string;
  model: string;
  capabilities: string[];
  integrationPoints: string[];
};

export type StackCategory = {
  label: string;
  description: string;
  items: string[];
};

export type ProjectTechnical = {
  architecture: {
    summary: string;
    nodes: ArchNode[];
  };
  agents: AIAgent[];
  stack: StackCategory[];
};

export const PROJECT_TECHNICAL: Record<string, ProjectTechnical> = {
  kova: {
    architecture: {
      summary:
        "Six AI workflows running in parallel, fed by a single canonical lead source. Every match is auditable, every reply is in the agent's voice, every action lands in the CRM with zero manual entry.",
      nodes: [
        { label: "MLS Feed + Web Forms", sub: "Listings + leads", kind: "input" },
        { label: "AI Matching Engine", sub: "Claude · vector + rules", kind: "ai" },
        { label: "Lead Response Agent", sub: "Voice-tuned · Claude", kind: "ai" },
        { label: "n8n Orchestration", sub: "Webhooks · cron · retries", kind: "system" },
        { label: "Agent Dashboard", sub: "Next.js · realtime", kind: "output" },
      ],
    },
    agents: [
      {
        name: "Property Matcher",
        role: "Scores every new listing against every active buyer profile, surfaces only matches above 80%.",
        model: "Claude 3.5 Sonnet · pgvector",
        capabilities: [
          "Reads full listing descriptions, not just MLS fields",
          "Weighs buyer preferences with recency decay",
          "Returns top-5 with reasoning per match",
        ],
        integrationPoints: ["MLS feed", "Buyer CRM profiles", "Agent dashboard"],
      },
      {
        name: "Lead Response Agent",
        role: "Replies to every form submission within 4 minutes in the assigned agent's voice, attaching relevant listings.",
        model: "Claude 3.5 Sonnet",
        capabilities: [
          "Per-agent voice profiles (12 distinct personas)",
          "Hallucination guard: cites listing IDs only",
          "Escalates to human on emotional/legal keywords",
        ],
        integrationPoints: ["Form intake (web, Zillow)", "Agent voice library", "CRM threading"],
      },
      {
        name: "Pipeline Summarizer",
        role: "Generates the daily 'morning brief' for each agent - pipeline, hot matches, follow-ups due.",
        model: "Claude 3.5 Sonnet",
        capabilities: [
          "Reads 30-day activity history per agent",
          "Surfaces deal-risk signals from CRM",
          "Recommends 3 actions to take before noon",
        ],
        integrationPoints: ["CRM activity log", "Calendar", "Slack DMs"],
      },
    ],
    stack: [
      {
        label: "AI Layer",
        description: "Frontier reasoning with grounded retrieval. No hallucinations on facts.",
        items: ["Claude 3.5 Sonnet", "OpenAI text-embedding-3", "Anthropic SDK"],
      },
      {
        label: "Web & UI",
        description: "Server-rendered dashboard that loads in under 1s on any device.",
        items: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        label: "Data & Automation",
        description: "Postgres with pgvector for semantic search; n8n for visual workflow orchestration.",
        items: ["Supabase (Postgres + pgvector)", "n8n", "Cron + webhooks"],
      },
      {
        label: "Infrastructure",
        description: "Edge-rendered with global CDN and zero-downtime deploys.",
        items: ["Vercel", "Edge Functions", "Sentry + Axiom logs"],
      },
    ],
  },

  sero: {
    architecture: {
      summary:
        "A calm, HIPAA-aware pipeline. Patient submits intake from their phone; AI structures the answers; clinician sees a triage-ready chart. The clinician owns every decision - the AI never crosses that line.",
      nodes: [
        { label: "Mobile Intake Form", sub: "Patient-facing · HIPAA", kind: "input" },
        { label: "AI Intake Parser", sub: "Structured output · Claude", kind: "ai" },
        { label: "Triage Classifier", sub: "Severity + routing", kind: "ai" },
        { label: "EMR Pre-population", sub: "n8n · API integration", kind: "system" },
        { label: "Practitioner View", sub: "Web + mobile · ready", kind: "output" },
      ],
    },
    agents: [
      {
        name: "Intake Parser",
        role: "Takes the patient's free-text complaint and structures it into the clinic's standard intake schema - symptom, onset, duration, severity, history.",
        model: "Claude 3.5 Sonnet (structured output)",
        capabilities: [
          "Schema-validated JSON output, every time",
          "Flags missing required fields for follow-up",
          "Confidence score per extracted field",
        ],
        integrationPoints: ["Mobile intake form", "EMR import API", "Clinician dashboard"],
      },
      {
        name: "Triage Classifier",
        role: "Reads the parsed intake and recommends routine vs. priority vs. urgent - clinician makes the final call.",
        model: "Claude 3.5 Sonnet + clinic protocol library",
        capabilities: [
          "Grounded in the clinic's own triage protocols",
          "Refuses to recommend treatment - flags for clinician only",
          "Hard escalation triggers for urgent presentations",
        ],
        integrationPoints: ["Intake parser output", "Clinic protocol PDFs", "Slack alerts"],
      },
      {
        name: "Documentation Drafter",
        role: "Drafts post-visit chart notes from the clinician's voice memo + the intake context.",
        model: "Claude 3.5 Sonnet",
        capabilities: [
          "Whisper transcription preprocessing",
          "Matches clinic's documentation style",
          "Clinician reviews and signs every note",
        ],
        integrationPoints: ["Voice memo recorder", "EMR draft API", "Clinician sign-off queue"],
      },
    ],
    stack: [
      {
        label: "AI Layer",
        description: "Structured-output AI with refusal contracts. Nothing the clinic can't audit.",
        items: ["Claude 3.5 Sonnet", "OpenAI Whisper (preprocessing)", "Anthropic SDK"],
      },
      {
        label: "Mobile & Web",
        description: "Mobile-first patient flow with adaptive questioning; clinician portal on web.",
        items: ["Next.js 14", "React Native (design system)", "Tailwind CSS"],
      },
      {
        label: "Automation",
        description: "n8n orchestrates intake → EMR → clinician queue with full audit logging.",
        items: ["n8n", "Webhooks (HIPAA-aware)", "Audit logging"],
      },
      {
        label: "Infrastructure",
        description: "HIPAA-aware hosting with BAA, encryption at rest and in transit.",
        items: ["AWS (BAA-signed)", "Postgres (encrypted)", "Sentry (PII-scrubbed)"],
      },
    ],
  },

  aurum: {
    architecture: {
      summary:
        "Custodian data flows in nightly. The AI computes performance, drafts the quarterly review in the advisor's voice, attaches compliance disclosures, and queues the PDF for review. The advisor edits and clicks send.",
      nodes: [
        { label: "Custodian APIs", sub: "Holdings · transactions", kind: "input" },
        { label: "Performance Engine", sub: "Math + benchmarks", kind: "system" },
        { label: "Narrative AI", sub: "Voice-matched · Claude", kind: "ai" },
        { label: "Compliance Layer", sub: "Auto-disclosures", kind: "system" },
        { label: "Client Portal", sub: "Secure · branded", kind: "output" },
      ],
    },
    agents: [
      {
        name: "Performance Narrator",
        role: "Turns this quarter's portfolio numbers into a 4-paragraph review in the advisor's voice - what happened, why it happened, what's next.",
        model: "Claude 3.5 Sonnet + advisor voice profile",
        capabilities: [
          "Per-advisor voice match (94%+ on blind tests)",
          "Compares against benchmark + previous quarter",
          "Flags numbers requiring advisor review",
        ],
        integrationPoints: ["Custodian holdings API", "Benchmark data feed", "Advisor review queue"],
      },
      {
        name: "Compliance Auditor",
        role: "Reads the draft report and inserts every required disclosure - fund prospectus references, performance disclaimers, conflict statements.",
        model: "Claude 3.5 Sonnet + compliance rulebook",
        capabilities: [
          "Rules-based first, AI for ambiguous cases",
          "Logs every disclosure decision for audit",
          "Refuses to send if mandatory disclosure missing",
        ],
        integrationPoints: ["Advisor narrative draft", "Compliance rulebook (versioned)", "Audit log"],
      },
      {
        name: "Portfolio Anomaly Watcher",
        role: "Daily scan of every client portfolio against mandate constraints. Flags drift, concentration risk, tax-loss harvesting opportunities.",
        model: "Claude 3.5 Sonnet + portfolio math library",
        capabilities: [
          "Compares positions against IPS constraints",
          "Estimates tax impact of suggested trades",
          "Routes high-severity items to advisor Slack",
        ],
        integrationPoints: ["Daily custodian snapshot", "Investment Policy Statements", "Slack alerts"],
      },
    ],
    stack: [
      {
        label: "AI Layer",
        description: "Voice-matched generation grounded in actual portfolio numbers. Every output reviewed.",
        items: ["Claude 3.5 Sonnet", "Custom voice profiles (per-advisor)", "Anthropic SDK"],
      },
      {
        label: "Web & PDF",
        description: "Editorial-quality PDFs generated server-side; client portal with bank-grade auth.",
        items: ["Next.js 14", "react-pdf", "Auth (SSO-ready)"],
      },
      {
        label: "Data & Compliance",
        description: "Daily snapshots, audit logs that survive SEC inspection.",
        items: ["Postgres", "Versioned compliance rulebook", "WORM audit log"],
      },
      {
        label: "Infrastructure",
        description: "SOC 2 hosting with encrypted backups + zero-downtime deploys.",
        items: ["AWS (SOC 2)", "CloudTrail", "Sentry (compliance-aware)"],
      },
    ],
  },

  drft: {
    architecture: {
      summary:
        "From product idea to launched brand in 5 weeks. Brand voice rulebook trains the AI. Shopify ships the store. n8n + Klaviyo orchestrate email. Every piece of content is on-brand by default - and a human signs off before it ships.",
      nodes: [
        { label: "Brand Voice Rulebook", sub: "12 rules · versioned", kind: "input" },
        { label: "Content AI", sub: "Voice-trained · Claude", kind: "ai" },
        { label: "Editor Review", sub: "Human-in-the-loop", kind: "system" },
        { label: "Klaviyo + Shopify", sub: "Auto-publish · auto-send", kind: "system" },
        { label: "Live Store + Inbox", sub: "Customer-facing", kind: "output" },
      ],
    },
    agents: [
      {
        name: "Brand Voice Writer",
        role: "Drafts product copy, ad copy, and social posts against the brand voice rulebook. Editor reviews and ships.",
        model: "Claude 3.5 Sonnet + DRFT voice profile",
        capabilities: [
          "Banned-word check (rejects + rewrites)",
          "Three voice variants per brief (Punchy/Editorial/Direct)",
          "Hashtag and CTA auto-generation",
        ],
        integrationPoints: ["Topic brief input", "Voice rulebook YAML", "Editor approval queue"],
      },
      {
        name: "Email Sequencer",
        role: "Composes welcome series, abandoned-cart, and post-purchase emails personalized per recipient based on browse + purchase history.",
        model: "Claude 3.5 Sonnet + Klaviyo data",
        capabilities: [
          "Per-customer product picks from catalog vectors",
          "Subject-line variant generation + A/B test",
          "Frequency capping respect (no overload)",
        ],
        integrationPoints: ["Klaviyo customer profile", "Shopify product catalog", "Send-time AI"],
      },
      {
        name: "Catalog Enricher",
        role: "Watches for new products, generates SEO descriptions + alt text + structured data automatically - editor reviews.",
        model: "Claude 3.5 Sonnet",
        capabilities: [
          "Per-product description in brand voice",
          "Schema.org Product markup generation",
          "Alt-text + image filename hygiene",
        ],
        integrationPoints: ["Shopify admin webhook", "Voice rulebook", "Editor queue"],
      },
    ],
    stack: [
      {
        label: "AI Layer",
        description: "Voice-trained generation that sounds like the brand - not like AI.",
        items: ["Claude 3.5 Sonnet", "Brand voice YAML (12 rules)", "Anthropic SDK"],
      },
      {
        label: "Store & Email",
        description: "Custom Shopify theme + Klaviyo flows for full email automation.",
        items: ["Shopify (custom Liquid theme)", "Klaviyo", "Shopify Admin API"],
      },
      {
        label: "Content Workflow",
        description: "n8n orchestrates brief → AI → editor → publish across channels.",
        items: ["n8n", "Brief intake forms", "Editor approval queue"],
      },
      {
        label: "Infrastructure",
        description: "Lightweight, fast - the brand's site loads in under 1s globally.",
        items: ["Shopify hosting", "Cloudflare CDN", "Klaviyo deliverability"],
      },
    ],
  },

  linx: {
    architecture: {
      summary:
        "Every agency workflow that used to take hours of senior time now runs on an AI backbone. Briefs come in, proposals go out, reports auto-send, clients see everything in their portal. The team's time goes to creative - not coordination.",
      nodes: [
        { label: "Brief Intake Form", sub: "Client-facing", kind: "input" },
        { label: "Brief AI + Proposal AI", sub: "Trained on 40+ proposals", kind: "ai" },
        { label: "Strategist Review", sub: "Edit + approve", kind: "system" },
        { label: "Reporting AI", sub: "Meta/Google/GA4 pulls", kind: "ai" },
        { label: "Client Portal + Inbox", sub: "Branded · proactive", kind: "output" },
      ],
    },
    agents: [
      {
        name: "Brief Generator",
        role: "Takes a client's loose form input and produces a full creative brief in LINX's format - audience, goal, message, KPIs.",
        model: "Claude 3.5 Sonnet + LINX brief templates",
        capabilities: [
          "Pulls audience data from past campaigns",
          "Suggests channels based on brief patterns",
          "Flags missing info before strategist sees it",
        ],
        integrationPoints: ["Client intake form", "Past brief library", "Strategist queue"],
      },
      {
        name: "Proposal AI",
        role: "Trained on 40+ past proposals - generates the next one tailored to the client in under 40 minutes (vs. 8 hours).",
        model: "Claude 3.5 Sonnet + RAG over proposal corpus",
        capabilities: [
          "Matches scope to similar past accounts",
          "Pricing suggestions with mark-up rules baked in",
          "Strategist always reviews before send",
        ],
        integrationPoints: ["Brief output", "Proposal corpus (40+ files)", "PDF generation"],
      },
      {
        name: "Reporting Auto-Drafter",
        role: "Monthly pull from Meta, Google, GA4, Klaviyo into a branded PDF with AI-written narrative + 'what to do next' insight.",
        model: "Claude 3.5 Sonnet",
        capabilities: [
          "Cross-platform data unification",
          "AI insight: 'shift $1.8k from Google to Meta'",
          "Client portal auto-publish",
        ],
        integrationPoints: ["Meta/Google/GA4/Klaviyo APIs", "PDF template engine", "Client portal"],
      },
    ],
    stack: [
      {
        label: "AI Layer",
        description: "RAG over past work + frontier reasoning. Proposals match LINX house style.",
        items: ["Claude 3.5 Sonnet", "OpenAI embeddings", "RAG over proposal corpus"],
      },
      {
        label: "Web & PDF",
        description: "Client portal + branded reports, all generated from the same design tokens.",
        items: ["Next.js 14", "react-pdf", "Tailwind + Figma tokens"],
      },
      {
        label: "Data & Automation",
        description: "Ad platform APIs unified; n8n + Make for the workflow plumbing.",
        items: ["Meta Marketing API", "Google Ads API", "n8n", "Make"],
      },
      {
        label: "Infrastructure",
        description: "Standard modern web stack on Vercel - instant deploys, global edge.",
        items: ["Vercel", "Edge Functions", "Sentry"],
      },
    ],
  },
};

export function getProjectTechnical(slug: string): ProjectTechnical | null {
  return PROJECT_TECHNICAL[slug] ?? null;
}
