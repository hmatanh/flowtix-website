import type { ComponentType } from "react";
import {
  IconRouteAltLeft,
  IconRobot,
  IconLayoutDashboard,
  IconRocket,
  IconCode,
  IconPalette,
  type IconProps,
} from "@tabler/icons-react";

export type ServiceStep = { title: string; text: string };
export type ServicePain = { title: string; text: string };
export type ServiceResult = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: ComponentType<IconProps>;
  features: string[];
  steps: ServiceStep[];
  pains: ServicePain[];
  pullQuote: string;
  results: ServiceResult[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "automation",
    number: "01",
    title: "Business Process Automation",
    short:
      "We automate the repetitive work that drains your team — across tools, forms, CRMs, emails, documents, and spreadsheets — so your people focus on what actually grows the business.",
    description:
      "We map your current operations, identify the workflows that waste the most time, and rebuild them as clean, reliable, end-to-end automations. The result is fewer hours spent on copy-paste work and more time spent on real business.",
    icon: IconRouteAltLeft,
    features: [
      "Workflow mapping & process audit",
      "Cross-tool automation (CRM, email, docs, spreadsheets)",
      "Approval, routing & escalation flows",
      "Data sync between platforms",
      "Error monitoring & alerts",
      "Documentation & team handoff",
    ],
    steps: [
      { title: "Audit", text: "We document every manual step in your current workflows with time and cost attached." },
      { title: "Map", text: "Visual flow diagrams for every process so you can see what is automatable before we touch a tool." },
      { title: "Design", text: "We design the new automated flow including decision points and human checkpoints." },
      { title: "Build", text: "Implementation in the right tools for your scale and stack. No over-engineering." },
      { title: "Test", text: "Real data, real edge cases. We do not ship until the failure rate is below acceptable." },
      { title: "Monitor", text: "Dashboards and alerts so you know within minutes if anything breaks." },
    ],
    pains: [
      { title: "Your team spends days on work that should take minutes.", text: "Manual data entry, copy-paste, formatting — pure overhead." },
      { title: "Integrations break every time a connected tool updates.", text: "And nobody finds out until a customer complains." },
      { title: "Different teams reinvent the same workflow badly.", text: "Five spreadsheets doing the same thing in slightly different ways." },
    ],
    pullQuote:
      "If a person spends 30 minutes on the same task more than twice a week, a system should be doing it.",
    results: [
      { value: 40, suffix: "%", label: "Faster end-to-end workflows" },
      { value: 12, prefix: "+", label: "Hours saved per person per week" },
      { value: 0, label: "Manual handoff errors after deployment" },
    ],
    related: ["ai-agents", "internal-tools", "mvp-product"],
  },
  {
    slug: "ai-agents",
    number: "02",
    title: "Custom AI Agents & Assistants",
    short:
      "AI assistants trained on your business — your tone, your products, your processes — for customer support, sales, onboarding, internal knowledge, and operational tasks.",
    description:
      "We design and build AI agents that handle real work: answering customer questions, qualifying leads, onboarding new clients, surfacing internal knowledge, drafting communications, and routing requests. Tailored to your context, integrated with the tools you already use.",
    icon: IconRobot,
    features: [
      "Customer support assistants",
      "Sales & lead qualification agents",
      "Onboarding & welcome flows",
      "Internal knowledge assistants",
      "Document & proposal generation",
      "CRM, WhatsApp, email & web integration",
    ],
    steps: [
      { title: "Discovery", text: "We learn how your team currently handles the work the agent will take over." },
      { title: "Design", text: "We define the agent's behavior, tone, boundaries, and handoff rules to humans." },
      { title: "Train", text: "We ground the agent in your documents, products, FAQs, and tone of voice." },
      { title: "Integrate", text: "Connection to your CRM, helpdesk, chat platform, or product." },
      { title: "Test", text: "Real-world conversations with your team before exposing to customers." },
      { title: "Improve", text: "Ongoing tuning based on the conversations that matter most." },
    ],
    pains: [
      { title: "Generic AI chat that sounds like every other tool.", text: "And makes the brand feel cheaper, not smarter." },
      { title: "Agents that hallucinate or escalate everything.", text: "Useless to customers and frustrating to staff." },
      { title: "AI that doesn't know your product or process.", text: "So it answers the wrong question and creates new tickets." },
    ],
    pullQuote:
      "A good AI agent feels like talking to your best, most patient team member — at three in the morning.",
    results: [
      { value: 70, suffix: "%", label: "Tier-1 questions resolved without a human" },
      { value: 4, suffix: "×", label: "Faster lead qualification" },
      { value: 24, suffix: "/7", label: "Coverage across every channel" },
    ],
    related: ["automation", "internal-tools", "mvp-product"],
  },
  {
    slug: "internal-tools",
    number: "03",
    title: "Internal Tools & Dashboards",
    short:
      "Custom dashboards, admin panels, client portals, and workflow systems designed around the way your team actually works — not the way a generic SaaS expects you to.",
    description:
      "If your team is jumping between five tabs to do one job, you don't need another tool — you need the right one. We design and build internal tools, dashboards, and client portals that consolidate the work into one calm, fast interface.",
    icon: IconLayoutDashboard,
    features: [
      "Operations dashboards",
      "Admin panels & back-office tools",
      "Client portals & login experiences",
      "Project, order, or case management",
      "Role-based access & permissions",
      "Real-time data + reporting",
    ],
    steps: [
      { title: "Shadow", text: "We spend time with the people who will use the tool every day." },
      { title: "Map", text: "Every screen, every action, every data source — documented before design." },
      { title: "Design", text: "Clean, fast UI that respects existing habits where it matters." },
      { title: "Build", text: "Production-ready code with the integrations your team actually needs." },
      { title: "Roll out", text: "Phased rollout with training so adoption is real, not theoretical." },
      { title: "Refine", text: "Monthly improvements based on actual usage." },
    ],
    pains: [
      { title: "Five disconnected tools and a spreadsheet doing one job.", text: "And every quarter a new manager wants to add another." },
      { title: "Off-the-shelf SaaS that almost fits your workflow.", text: "Almost is the most expensive word in business software." },
      { title: "Client portals that look like a 2012 banking site.", text: "Your service is premium. The login experience should match." },
    ],
    pullQuote:
      "The best internal tool is the one your team opens first in the morning and doesn't notice they're using.",
    results: [
      { value: 3, suffix: "→1", label: "Tools consolidated per workflow" },
      { value: 50, suffix: "%", label: "Faster daily operations" },
      { value: 95, suffix: "%", label: "Team adoption inside 30 days" },
    ],
    related: ["automation", "ai-agents", "web-development"],
  },
  {
    slug: "mvp-product",
    number: "04",
    title: "MVP & Product Development",
    short:
      "From idea to working product — strategy, UX, design, build, and launch — in weeks, not quarters. For founders who need to ship and learn fast.",
    description:
      "We help founders and product teams turn early ideas into real, usable software. The goal is not a polished spec — it's a working product in front of real users, fast enough to learn from, solid enough to scale into.",
    icon: IconRocket,
    features: [
      "Product strategy & scoping",
      "User flows & interface design",
      "Full-stack development",
      "Authentication, payments & integrations",
      "Launch readiness & analytics",
      "Roadmap planning post-launch",
    ],
    steps: [
      { title: "Scope", text: "We narrow the MVP to the smallest version that proves the business idea." },
      { title: "Design", text: "Every screen and flow drawn and validated before we build." },
      { title: "Build", text: "Weekly working previews. You see the product growing in real time." },
      { title: "Launch", text: "Production deploy, analytics, error tracking, support setup." },
      { title: "Learn", text: "We watch how real users behave and feed that into the roadmap." },
      { title: "Scale", text: "When the MVP is validated, we plan the next phase together." },
    ],
    pains: [
      { title: "Six months in and still nothing real to show users.", text: "The spec keeps growing. The product never ships." },
      { title: "Cheap freelancers, expensive rebuilds later.", text: "MVPs built without product thinking cost twice in the long run." },
      { title: "A beautiful prototype with no working backend.", text: "Or a working backend with a UI nobody can use." },
    ],
    pullQuote:
      "An MVP is not a small product — it's the smallest experiment that teaches you whether you have a business.",
    results: [
      { value: 6, suffix: " wks", label: "Typical idea-to-live timeline" },
      { value: 1, label: "Partner across product, design, automation, and AI" },
      { value: 100, suffix: "%", label: "Ownership of the codebase, day one" },
    ],
    related: ["web-development", "internal-tools", "design"],
  },
  {
    slug: "web-development",
    number: "05",
    title: "Web Design & Development",
    short:
      "Modern websites, landing pages, and product experiences — fast, clear, conversion-focused, and built on a stack that grows with you.",
    description:
      "Whether it's a marketing site, a launch landing page, or a fully integrated product experience, we design and build sites that feel premium, load fast, and convert. No template-shop output, no surprise rebuilds in six months.",
    icon: IconCode,
    features: [
      "Marketing sites & landing pages",
      "Product & SaaS websites",
      "Custom CMS or headless content",
      "Performance & SEO foundations",
      "Forms, payments & integrations",
      "Hosting & post-launch support",
    ],
    steps: [
      { title: "Strategy", text: "We agree on the audience, the message, and the one action the site has to drive." },
      { title: "Design", text: "Every page designed against that message — no padding, no filler." },
      { title: "Build", text: "Production code, fast loads, accessible by default." },
      { title: "Integrate", text: "Forms to CRM, payments, analytics, whatever the business needs." },
      { title: "Launch", text: "Domain, hosting, performance tuning, SEO basics handled." },
      { title: "Iterate", text: "We track how the site actually performs and improve from there." },
    ],
    pains: [
      { title: "A website that looks expensive and converts nothing.", text: "Beautiful, hollow, useless." },
      { title: "A site that loads in five seconds on a good connection.", text: "And on a phone, never." },
      { title: "A template that everyone in your category also uses.", text: "Sameness is the most expensive design choice." },
    ],
    pullQuote:
      "A website's job is not to be admired. It's to make the next conversation easier.",
    results: [
      { value: 2, suffix: " s", label: "Target time-to-interactive on mobile" },
      { value: 100, suffix: "/100", label: "Lighthouse Performance on launch" },
      { value: 3, suffix: " wks", label: "Typical design-to-live timeline" },
    ],
    related: ["mvp-product", "design", "internal-tools"],
  },
  {
    slug: "design",
    number: "06",
    title: "UX/UI & Brand Systems",
    short:
      "Interface, product, and visual identity work — designed so the product feels trustworthy, professional, and effortless from the first second.",
    description:
      "Strong design is what turns a working product into a serious one. We handle product UX, interface design, visual identity, design systems, and the hundred details that make customers trust what they're using.",
    icon: IconPalette,
    features: [
      "Product UX & flow design",
      "UI design & component systems",
      "Brand identity & visual systems",
      "Design tokens & multi-product consistency",
      "Marketing & sales assets",
      "Design system documentation",
    ],
    steps: [
      { title: "Understand", text: "The brand, the audience, the product, the competitors — read carefully before drawing." },
      { title: "Direction", text: "Two or three real options, not twenty mood boards." },
      { title: "Design", text: "Production-quality screens, real content, real edge cases." },
      { title: "System", text: "Tokens, components, documentation — so the team can keep building consistently." },
      { title: "Launch", text: "Hand-off in the form your team actually needs to build from." },
      { title: "Evolve", text: "We stay close while the design hits real users and refine accordingly." },
    ],
    pains: [
      { title: "Design that looks great in Figma and breaks in code.", text: "Because nobody designed for real states and content." },
      { title: "A brand identity that exists only as a logo file.", text: "And falls apart the moment marketing needs an email header." },
      { title: "Pretty UI that hides a confusing product.", text: "Decoration is the most expensive way to lose users." },
    ],
    pullQuote:
      "Design is not how it looks. Design is how it decides for the person using it.",
    results: [
      { value: 1, label: "Coherent system across product, web, and brand" },
      { value: 3, suffix: " wks", label: "Typical brand and system delivery" },
      { value: 0, label: "Time wasted re-translating Figma to code" },
    ],
    related: ["web-development", "mvp-product", "internal-tools"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string) {
  const s = getServiceBySlug(slug);
  if (!s) return [];
  return s.related
    .map((r) => services.find((x) => x.slug === r))
    .filter((x): x is Service => x !== undefined);
}
