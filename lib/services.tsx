import type { ComponentType } from "react";
import {
  IconRobot,
  IconRouteAltLeft,
  IconPalette,
  IconCode,
  IconChartDots,
  IconMessageChatbot,
  IconChartArrowsVertical,
  IconWriting,
  IconBulb,
  IconSchool,
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
    slug: "ai-systems",
    number: "01",
    title: "AI Systems & Intelligent Agents",
    short: "We don’t just add AI to your workflow — we rebuild the workflow around AI. The result is a system that thinks, decides, and acts in ways that compound over time.",
    description:
      "We design and build AI agents and intelligent systems tailored to your exact operations. From automated pipelines to AI assistants that handle real business tasks — built with Claude, GPT-4, and the latest AI infrastructure.",
    icon: IconRobot,
    features: [
      "Custom AI agent development",
      "Claude & GPT-4 powered workflows",
      "AI-powered internal tools",
      "System integration & deployment",
      "Multi-step reasoning pipelines",
      "Ongoing optimization",
    ],
    steps: [
      { title: "Discovery", text: "We map your business operations and identify where AI delivers the highest leverage." },
      { title: "Architecture", text: "We design the system blueprint — data flow, model choice, integrations, and user touchpoints." },
      { title: "Build", text: "Engineering with daily progress check-ins. You see working software every 48 hours." },
      { title: "Train", text: "We train the system on your data, brand context, and operational rules until outputs are production-grade." },
      { title: "Deploy", text: "Full deployment with documentation, team training, and rollback safeguards." },
      { title: "Optimize", text: "30 days of post-launch tuning and monitoring at no extra cost." },
    ],
    pains: [
      { title: "AI projects that look great in demos but fail in production.", text: "Tools that impressed in the pitch and never got adopted." },
      { title: "Generic AI tools that don't understand your business.", text: "Out-of-the-box assistants that answer nothing your team actually asks." },
      { title: "Six-month builds that ship behind the curve.", text: "By the time it's live, the model and the market have moved on." },
    ],
    pullQuote:
      "An AI system that nobody uses is worse than no AI system at all.",
    results: [
      { value: 70, suffix: "%", label: "Reduction in repetitive task time" },
      { value: 4, suffix: "x", label: "Faster than manual workflows" },
      { value: 30, suffix: " days", label: "From kickoff to production" },
    ],
    related: ["automation", "ai-integration", "ai-chatbots"],
  },
  {
    slug: "automation",
    number: "02",
    title: "Automation & Workflow Design",
    short: "Every hour your team spends on repetitive work is an hour not spent on what actually moves the needle. We find those hours and give them back.",
    description:
      "We map your most time-consuming processes and rebuild them as AI-powered automations. The result: your team stops doing repetitive work and starts doing the work that actually matters.",
    icon: IconRouteAltLeft,
    features: [
      "Business process mapping",
      "n8n & Make automation",
      "AI-enhanced workflow design",
      "CRM & tool integrations",
      "Real-time error monitoring",
      "Documentation & handoff",
    ],
    steps: [
      { title: "Audit", text: "We document every manual step in your current workflows with time and cost attached." },
      { title: "Map", text: "Visual flow diagrams for every process — so you see what's automatable before we touch a tool." },
      { title: "Design", text: "We design the new automated flow, including AI judgment points and human checkpoints." },
      { title: "Build", text: "Implementation in n8n, Make, or custom code — chosen for your scale and stack." },
      { title: "Test", text: "Real data, real edge cases. We don't ship until the failure rate is below acceptable." },
      { title: "Monitor", text: "Dashboards and alerts so you know within minutes if anything breaks." },
    ],
    pains: [
      { title: "Your team spends days on work AI could do in minutes.", text: "Manual data entry, copy-paste, formatting — pure overhead." },
      { title: "Integrations break every time a connected tool updates.", text: "And nobody finds out until a customer complains." },
      { title: "Different teams reinvent the same automation badly.", text: "Five spreadsheets doing the same thing in slightly different ways." },
    ],
    pullQuote:
      "If a human spends 30 minutes on the same task more than twice a week, an AI should be doing it.",
    results: [
      { value: 40, suffix: "%", label: "Faster end-to-end workflows" },
      { value: 12, prefix: "+", label: "Hours saved per person per week" },
      { value: 0, label: "Manual handoff errors after deployment" },
    ],
    related: ["ai-systems", "ai-sales", "consulting"],
  },
  {
    slug: "design",
    number: "03",
    title: "Design & Brand Strategy",
    short: "We’ve spent a decade learning what makes people trust, adopt, and love digital products. That expertise is now built into every AI system we ship.",
    description:
      "10+ years of UI/UX and branding expertise applied to AI-powered products. We create brand identities, product interfaces, and digital experiences that make businesses look and feel world-class. Design isn't decoration — it's the reason people actually use your product.",
    icon: IconPalette,
    features: [
      "Brand identity & visual language",
      "UI/UX design for digital products",
      "Website design & prototyping",
      "Design systems",
      "Product experience design",
      "Design QA on engineering output",
    ],
    steps: [
      { title: "Discovery", text: "Audit your brand, audience, competitors, and what makes you genuinely different." },
      { title: "Strategy", text: "We define positioning, voice, and the visual territory before any pixels are pushed." },
      { title: "Concepting", text: "Multiple visual directions explored — we make the differences obvious so decisions are easy." },
      { title: "Design", text: "Final visual system, type, color, motion principles, and components." },
      { title: "Prototype", text: "High-fidelity interactive prototypes so you experience the design before it ships." },
      { title: "Handoff", text: "Design tokens, component library, and engineering specs — built for implementation." },
    ],
    pains: [
      { title: "Your product looks like every other AI tool from 2023.", text: "Tailwind defaults, stock illustrations, the same hero patterns." },
      { title: "Generic brand identity that nobody remembers.", text: "It does the job. It does nothing more." },
      { title: "Designers who ship pretty mockups that engineers can't build.", text: "Then the implemented version looks nothing like the file." },
    ],
    pullQuote:
      "Beautiful systems get adopted. Ugly ones get abandoned.",
    results: [
      { value: 3, suffix: "x", label: "Higher adoption vs. industry average" },
      { value: 2, suffix: " weeks", label: "Average full identity turnaround" },
      { value: 90, suffix: "%", label: "Designs ship without redesign" },
    ],
    related: ["web-development", "ai-content", "ai-systems"],
  },
  {
    slug: "web-development",
    number: "04",
    title: "Web Development & Digital Products",
    short: "Your website is a salesperson that works 24/7. We build ones that actually convert — not just ones that look impressive at a glance.",
    description:
      "We build premium marketing websites, landing pages, internal tools, and digital products. Clean code, fast performance, and design that converts — built for businesses that refuse to look average online.",
    icon: IconCode,
    features: [
      "Marketing website development",
      "Landing pages & conversion",
      "Internal tools & dashboards",
      "Web app development",
      "CMS setup & training",
      "Performance & SEO baseline",
    ],
    steps: [
      { title: "Brief", text: "Goals, audience, conversion targets, and the specific pages or flows in scope." },
      { title: "Architecture", text: "Information architecture, sitemap, and tech stack choices — picked for your team." },
      { title: "Design", text: "Full design system, every page designed to specification, content-fit and not template-fit." },
      { title: "Build", text: "Engineering with daily previews. Accessibility, performance, and SEO are non-negotiable." },
      { title: "QA", text: "Cross-browser, cross-device, real content, real traffic conditions." },
      { title: "Launch", text: "Migration, redirects, analytics, and a smooth cutover with rollback ready." },
    ],
    pains: [
      { title: "WordPress themes that load slow and look like everyone else.", text: "Templates were never going to make you stand out." },
      { title: "Agencies that ship websites engineers refuse to touch.", text: "Custom plugins, broken patterns, no documentation." },
      { title: "Beautiful designs that score 40 on Lighthouse.", text: "Pretty but unusable. Search engines and users both leave." },
    ],
    pullQuote:
      "A premium website pays for itself in two months of better conversion.",
    results: [
      { value: 95, suffix: "+", label: "Lighthouse score at launch" },
      { value: 42, suffix: "%", label: "Average conversion lift vs. prior site" },
      { value: 1, prefix: "<", suffix: "s", label: "Largest Contentful Paint" },
    ],
    related: ["design", "ai-content", "consulting"],
  },
  {
    slug: "ai-integration",
    number: "05",
    title: "AI Integration & Consulting",
    short: "You don’t need to rebuild what’s working. You need to make it intelligent. We integrate AI into your existing stack without breaking anything.",
    description:
      "We help businesses integrate AI into existing products and workflows. From LLM integration to full AI strategy — we find the highest-leverage opportunities and execute them without disrupting what already works.",
    icon: IconChartDots,
    features: [
      "AI readiness audit",
      "LLM integration (Claude, GPT-4, Gemini)",
      "API & data pipeline setup",
      "AI strategy consulting",
      "Team training",
      "Vendor & model evaluation",
    ],
    steps: [
      { title: "Audit", text: "We assess your current stack, data, and where AI integration is realistic versus blue-sky." },
      { title: "Planning", text: "Prioritized roadmap with effort, cost, and expected return for each integration." },
      { title: "Integration", text: "Build the connection between your existing systems and the chosen AI infrastructure." },
      { title: "Testing", text: "Validate accuracy, latency, and cost against real user traffic before rollout." },
      { title: "Training", text: "Hands-on sessions so your engineers can extend the integration without us." },
      { title: "Support", text: "30 days of post-launch optimization and incident response included." },
    ],
    pains: [
      { title: "Your team is overwhelmed by which AI vendor to pick.", text: "Every model has loud advocates and the marketing is identical." },
      { title: "AI features bolted onto your product feel disconnected.", text: "Because they were — and users notice immediately." },
      { title: "Token costs spiral and nobody catches it for a month.", text: "Until the bill arrives and the post-mortem starts." },
    ],
    pullQuote:
      "The fastest path to AI value is integrating it into the product people already use.",
    results: [
      { value: 60, suffix: "%", label: "Lower token spend vs. naive integration" },
      { value: 2, suffix: " weeks", label: "Typical integration timeline" },
      { value: 4, suffix: " models", label: "Evaluated before we recommend one" },
    ],
    related: ["ai-systems", "consulting", "training"],
  },
  {
    slug: "ai-chatbots",
    number: "06",
    title: "AI-Powered Chatbots & Assistants",
    short: "A chatbot that doesn’t know your business is just an expensive FAQ. We build assistants that know your products, tone, and customers inside out.",
    description:
      "We build intelligent chatbots and virtual assistants that know your products, policies, tone, and customers. Not generic bots — AI trained specifically on your business context, capable of handling real conversations and converting visitors into customers.",
    icon: IconMessageChatbot,
    features: [
      "Trained on your knowledge base, docs, and FAQs",
      "Custom personality matching your brand voice",
      "Multilingual support",
      "Escalation to human workflows",
      "Analytics on conversation patterns",
      "Embedded on any website or platform",
    ],
    steps: [
      { title: "Knowledge Base", text: "We ingest your docs, FAQs, product info, and past tickets to build the AI's source of truth." },
      { title: "Persona Design", text: "We define the bot's personality, tone, escalation rules, and what it should never say." },
      { title: "Training", text: "Tune the model on your specific Q&A pairs and conversational patterns." },
      { title: "Testing", text: "Real users, structured red-team prompts, edge-case validation before exposure." },
      { title: "Deploy", text: "Embed on your site, app, or messaging channels with full analytics wired up." },
      { title: "Tune", text: "Weekly review of conversation logs to close gaps and improve responses over time." },
    ],
    pains: [
      { title: "Generic chatbots that frustrate customers faster than no chatbot.", text: "Endless 'I didn't understand that' loops drive people to email." },
      { title: "Bots that sound nothing like your brand.", text: "Corporate, robotic, or weirdly chipper — never quite right." },
      { title: "No clean escalation path to a human.", text: "Customers stuck in the bot, support team confused about what already happened." },
    ],
    pullQuote:
      "A chatbot that doesn't know your product is a customer-loss generator.",
    results: [
      { value: 65, suffix: "%", label: "Of tickets resolved without escalation" },
      { value: 2, suffix: "s", label: "Average response time" },
      { value: 24, suffix: "/7", label: "Support coverage" },
    ],
    related: ["ai-systems", "ai-sales", "automation"],
  },
  {
    slug: "ai-sales",
    number: "07",
    title: "AI Sales Enablement Systems",
    short: "The best salespeople never sleep, never forget to follow up, and never miss a hot lead. We build AI that does all three.",
    description:
      "We build AI-powered sales systems that generate personalized outreach, automate follow-ups, qualify leads intelligently, and give your sales team an unfair advantage. From lead scoring to proposal generation — we automate the entire sales pipeline.",
    icon: IconChartArrowsVertical,
    features: [
      "AI lead scoring and qualification",
      "Automated personalized follow-up sequences",
      "AI-generated proposals and quotes",
      "CRM enrichment and data hygiene",
      "Sales performance analytics",
      "Pipeline automation",
    ],
    steps: [
      { title: "Audit", text: "Map your current sales process and identify drop-off points, manual tasks, and lead leakage." },
      { title: "System Design", text: "Design the automated pipeline — scoring rules, outreach sequences, escalation logic." },
      { title: "Build", text: "Implement scoring, generation, and routing logic with your AI provider of choice." },
      { title: "CRM Integration", text: "Wire it all into HubSpot, Salesforce, Pipedrive, or whatever you use — bi-directionally." },
      { title: "Train", text: "Onboard your sales team and tune the system on their feedback for a real-world calibration period." },
      { title: "Optimize", text: "Monthly review of close rates and conversion data to keep the system improving." },
    ],
    pains: [
      { title: "Sales reps spend more time on admin than selling.", text: "Notes, follow-ups, CRM updates, proposal drafting — hours every day." },
      { title: "Inconsistent follow-up means you lose deals you already won.", text: "Lead came in hot, no one followed up for three days, gone." },
      { title: "Proposals take half a day each.", text: "Templates exist but the customization always ends up bespoke and slow." },
    ],
    pullQuote:
      "A reply within 5 minutes converts 9x better than a reply within 30. AI makes that the default.",
    results: [
      { value: 35, suffix: "%", label: "Higher close rate after deployment" },
      { value: 60, suffix: "s", label: "Average lead response time" },
      { value: 5, suffix: " hrs", label: "Per rep per day reclaimed" },
    ],
    related: ["automation", "ai-content", "ai-chatbots"],
  },
  {
    slug: "ai-content",
    number: "08",
    title: "AI Content & Marketing Systems",
    short: "Your brand has a voice. Most AI tools don’t know it. Ours do — because we train them on your best work, not generic data.",
    description:
      "We build private AI content engines that know your brand deeply and generate all your marketing materials — social posts, email campaigns, ad copy, blog articles, product descriptions — consistently, at scale, without a full content team. This is the technology powering our Flowtix Brain product.",
    icon: IconWriting,
    features: [
      "Brand voice training on your existing content",
      "Multi-channel content generation",
      "Campaign planning and calendar",
      "SEO-optimized blog and article generation",
      "Email sequence automation",
      "Performance feedback loop",
    ],
    steps: [
      { title: "Brand Training", text: "We document your brand voice in 5 layers: vocabulary, tone, structure, values, and reference content." },
      { title: "Template Design", text: "Custom templates for each content type — social, email, ad, blog — tuned to your brand spec." },
      { title: "Workflow Build", text: "End-to-end content workspace where briefs in become finished content out." },
      { title: "Test", text: "Generate 30+ pieces across content types, rate them, calibrate the brand spec until consistently 8+." },
      { title: "Deploy", text: "Hand the system over with full training. Your team produces 5x the content with no quality loss." },
      { title: "Tune", text: "Monthly performance review — what got engagement, what flopped, refine the spec accordingly." },
    ],
    pains: [
      { title: "Generic AI content that sounds like everyone else.", text: "Same opening, same hedging, same flat tone. Brand invisible." },
      { title: "Content production is the bottleneck on every growth channel.", text: "Calendar gaps, stale newsletters, ads that never get tested." },
      { title: "Quality drops the moment you try to scale up volume.", text: "Three pieces a week is great. Twenty is a disaster." },
    ],
    pullQuote:
      "The brands that win in AI content are the ones that taught the AI to sound exactly like them.",
    results: [
      { value: 5, suffix: "x", label: "Content volume vs. manual baseline" },
      { value: 80, suffix: "%", label: "Reduction in production time" },
      { value: 100, suffix: "%", label: "On-brand quality after calibration" },
    ],
    related: ["design", "ai-sales", "ai-systems"],
  },
  {
    slug: "consulting",
    number: "09",
    title: "Digital Transformation Consulting",
    short: "AI strategy without execution is a PowerPoint. We give you a roadmap and then build every step of it.",
    description:
      "Not sure where to start with AI? We audit your current operations, identify the highest-leverage opportunities, and build a clear, actionable roadmap for AI adoption. We then execute it with you — or hand it off to your team with full documentation.",
    icon: IconBulb,
    features: [
      "Current operations audit",
      "AI opportunity mapping",
      "ROI projection for each opportunity",
      "Technology selection and vendor evaluation",
      "Implementation roadmap",
      "Team training and change management",
    ],
    steps: [
      { title: "Audit", text: "We interview team leads and shadow real workflows to understand where time and money are leaking." },
      { title: "Mapping", text: "Every opportunity is mapped against effort, technical risk, and expected return." },
      { title: "Roadmap", text: "12-month plan with quarterly milestones, dependencies, and decision points." },
      { title: "Prioritization", text: "We help you sequence — what to do first, what to defer, what to drop." },
      { title: "Execution Plan", text: "Vendor selection, team structure, budget, and timeline for the first three initiatives." },
      { title: "Handoff", text: "Full documentation and team training, so internal teams can run the plan after we step out." },
    ],
    pains: [
      { title: "You know AI matters but have no idea where to start.", text: "Too many vendors, too many opinions, no clear first move." },
      { title: "Past consultants delivered slide decks and disappeared.", text: "Recommendations that nobody could actually execute." },
      { title: "Internal stakeholders disagree on priorities and nothing ships.", text: "Months of meetings, zero deployed AI." },
    ],
    pullQuote:
      "The right AI roadmap is worth more than three years of random experimentation.",
    results: [
      { value: 6, suffix: " weeks", label: "From audit to executable roadmap" },
      { value: 3, label: "First-year priorities identified per business" },
      { value: 200, suffix: "%", label: "Average modeled return on Year 1 investments" },
    ],
    related: ["training", "ai-integration", "ai-systems"],
  },
  {
    slug: "training",
    number: "10",
    title: "AI Training & Workshops",
    short: "The best AI tools fail when the team doesn’t trust them. We train your people to work with AI confidently — not around it.",
    description:
      "We run hands-on workshops and training programs that teach your team to use AI tools effectively in their daily work. From executives to operations teams — practical, role-specific training that creates real behavior change, not just awareness.",
    icon: IconSchool,
    features: [
      "Role-specific curriculum (executives / ops / marketing / sales)",
      "Hands-on workshops with real tools",
      "Custom playbooks for your toolstack",
      "Ongoing coaching and Q&A sessions",
      "Team AI readiness assessment",
      "Certification completion",
    ],
    steps: [
      { title: "Assessment", text: "We survey teams to find current AI fluency, blockers, and the workflows they want to improve." },
      { title: "Curriculum", text: "Custom curriculum per role — executives, ops, marketing, sales — built for your actual stack." },
      { title: "Workshops", text: "Live, hands-on sessions. Real prompts, real outputs, real workflows by the end of the session." },
      { title: "Practice", text: "Two weeks of structured practice with weekly check-ins so the learning sticks." },
      { title: "Playbooks", text: "Each team gets a custom playbook for their tools and use cases — refreshed quarterly." },
      { title: "Follow-up", text: "60-day refresher session and a Slack channel for ongoing Q&A and prompt-sharing." },
    ],
    pains: [
      { title: "Generic AI training that never translates to actual work.", text: "Big concepts, no specific application to your team's job." },
      { title: "Team members reluctant to use AI tools that already exist.", text: "Fear of looking incompetent, fear of replacement, fear of breaking things." },
      { title: "Knowledge stays with the one early adopter.", text: "One person becomes the AI expert and the rest of the team still does it manually." },
    ],
    pullQuote:
      "AI literacy is the new computer literacy. Train it like one.",
    results: [
      { value: 85, suffix: "%", label: "Of trained employees using AI daily within 30 days" },
      { value: 4, suffix: " hrs", label: "Workshop length per session" },
      { value: 60, suffix: " days", label: "Of ongoing follow-up coaching" },
    ],
    related: ["consulting", "ai-content", "ai-integration"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => Boolean(s));
}
