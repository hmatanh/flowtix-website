# Flowtix AI — 100 New Blog Posts Plan

> Generated 2026-05-22. Goal: Add 100 SEO-optimized blog posts to flowtix.ai targeting mid-tail, low-competition keywords with real business intent.

## Discovery Findings

**Storage**: Posts live as TypeScript objects in `lib/posts.tsx` (single file, ~864 lines, 6 posts). Each post has: `slug`, `title`, `category`, `categoryColor` (hex), `readTime`, `date`, `excerpt`, `author`, `tags[]`, `toc[]`, `body` (ReactNode/JSX). The JSX body uses semantic HTML — `<h2 id>`, `<h3>`, `<p>`, `<ol>/<ul>/<li>`, `<blockquote>`, `<strong>`, `<em>`.

**Categories** (5 fixed types — `PostCategory`):
- AI Systems — `#3B82F6`
- Design — `#EC4899`
- Automation — `#10B981`
- AI Content — `#A855F7`
- Business — `#F59E0B`

**Listing page**: `app/blog/page.tsx` (filterable by category, featured + grid).
**Detail page**: `app/blog/[slug]/page.tsx` → `PostView.tsx` (with TOC, reading progress, related posts).
**Sitemap**: `app/sitemap.ts` auto-pulls from `posts` array.
**Routing**: `generateStaticParams` from posts (so new entries auto-route at build).

**Style conventions observed**:
- 800–2500 words, conversational expert tone
- H2 sections with `id` matching TOC entries
- H3 sub-sections inside H2s
- One pull-quote per article using `<blockquote>`
- Ordered/unordered lists for steps and bullets
- `<strong>` for emphasis, `<em>` for terms
- Excerpt: ~150 chars, action-oriented
- Author always "Flowtix Team"
- Read time: ~200 wpm

## Implementation Strategy

To avoid bloating `lib/posts.tsx` to 15k+ lines, the 100 new posts will be split into 10 batch files under `lib/blog/`:
- `lib/blog/batch-01-ai-systems.tsx`
- `lib/blog/batch-02-automation.tsx`
- ...etc
Each batch file exports `const batchN: Post[] = [...]`. `lib/posts.tsx` imports and concatenates them into the main `posts` array. Backwards-compatible — `posts`, `getPostBySlug`, `getRelatedPosts`, sitemap, listing, detail pages all keep working unchanged.

## Cluster Distribution

| # | Cluster | Posts | Primary Category |
|---|---------|-------|------------------|
| 1 | AI Systems Implementation | 10 (#1–10) | AI Systems |
| 2 | Workflow Automation | 10 (#11–20) | Automation |
| 3 | AI Customer Support + Lead Gen | 10 (#21–30) | AI Systems / Automation |
| 4 | Design-First AI + Web Dev | 10 (#31–40) | Design / AI Systems |
| 5 | Industry-Specific AI A (E-com, Real Estate, Legal, Healthcare, Hospitality) | 10 (#41–50) | Business / AI Systems |
| 6 | Industry-Specific AI B + Strategy I (Edu, Fintech, Agencies, Manufacturing, Strategy) | 10 (#51–60) | Business |
| 7 | AI Strategy & Leadership + Case Studies | 10 (#61–70) | Business |
| 8 | Tools & Frameworks + AI Content I | 10 (#71–80) | AI Systems / AI Content |
| 9 | AI Content II + Branding | 10 (#81–90) | AI Content / Design |
| 10 | Productivity + Ops + Future-of-Work | 10 (#91–100) | Business / Automation |

## Post Catalogue (all 100)

### Batch 1 — AI Systems Implementation (1–10)
1. **The AI Implementation Roadmap for Small Businesses (Step by Step)** — `ai-implementation-roadmap-small-business` — *AI Systems* — kw: "ai implementation roadmap"
2. **AI Pilot Project Checklist: 12 Items Before You Hire a Vendor** — `ai-pilot-project-checklist` — *AI Systems* — kw: "ai pilot project checklist"
3. **Build vs Buy AI: When Custom Beats Off-the-Shelf** — `build-vs-buy-ai-systems` — *AI Systems* — kw: "build vs buy ai"
4. **AI System Architecture for Non-Technical Founders** — `ai-system-architecture-founders` — *AI Systems* — kw: "ai architecture for founders"
5. **The Hidden Costs of AI Implementation Nobody Mentions** — `hidden-costs-ai-implementation` — *Business* — kw: "ai implementation costs"
6. **How Long Does It Take to Build an AI System? Realistic Timelines** — `ai-build-timeline` — *AI Systems* — kw: "ai project timeline"
7. **AI Vendor Selection: 9 Questions That Reveal a Bad Fit** — `ai-vendor-selection-questions` — *AI Systems* — kw: "how to choose ai vendor"
8. **Why Your AI Proof-of-Concept Never Becomes Production** — `ai-poc-to-production-gap` — *AI Systems* — kw: "ai poc to production"
9. **AI Governance for SMBs: A Lightweight Framework** — `ai-governance-smb-framework` — *Business* — kw: "ai governance small business"
10. **The Right Way to Scope Your First AI Project** — `scope-first-ai-project` — *AI Systems* — kw: "scope ai project"

### Batch 2 — Workflow Automation (11–20)
11. **Zapier vs Make vs n8n: Pick the Right Automation Platform** — `zapier-vs-make-vs-n8n` — *Automation* — kw: "zapier vs make vs n8n"
12. **20 Automations Every Service Business Should Have in 2026** — `automations-service-business-2026` — *Automation* — kw: "service business automation"
13. **From Manual to Automated: A 90-Day Operations Audit** — `90-day-operations-audit` — *Automation* — kw: "operations automation audit"
14. **RPA vs AI Automation: Which One Do You Actually Need?** — `rpa-vs-ai-automation` — *Automation* — kw: "rpa vs ai"
15. **The Automation Maturity Model: Where Is Your Business?** — `automation-maturity-model` — *Automation* — kw: "automation maturity"
16. **Email Triage Automation That Actually Works** — `email-triage-automation` — *Automation* — kw: "email triage automation"
17. **Document Processing Automation: AI vs Traditional OCR** — `document-processing-ai-vs-ocr` — *Automation* — kw: "document processing automation"
18. **How to Automate Your CRM Without Breaking It** — `automate-crm-without-breaking` — *Automation* — kw: "crm automation"
19. **Invoice and Accounts Payable Automation: A Practical Guide** — `invoice-ap-automation-guide` — *Automation* — kw: "ap automation"
20. **Building Internal Tools With AI: The 2026 Approach** — `build-internal-tools-ai-2026` — *Automation* — kw: "ai internal tools"

### Batch 3 — Customer Support + Lead Gen (21–30)
21. **AI Customer Support: When to Deploy a Bot vs. Hire a Human** — `ai-support-bot-vs-human` — *AI Systems* — kw: "ai customer support"
22. **How to Build an AI Knowledge Base That Doesn't Hallucinate** — `ai-knowledge-base-no-hallucination` — *AI Systems* — kw: "ai knowledge base"
23. **Reducing Support Ticket Volume by 60% With AI Triage** — `reduce-support-tickets-ai-triage` — *Automation* — kw: "ai support ticket triage"
24. **The Customer Support Stack for AI-First Companies** — `customer-support-stack-ai-first` — *AI Systems* — kw: "ai support stack"
25. **AI Lead Scoring: From Spreadsheet to Real-Time Pipeline** — `ai-lead-scoring-real-time` — *Automation* — kw: "ai lead scoring"
26. **Cold Outreach With AI: Personalization That Doesn't Feel Robotic** — `ai-cold-outreach-personalization` — *Automation* — kw: "ai cold outreach"
27. **Sales Pipeline Automation: A B2B Founder's Playbook** — `sales-pipeline-automation-b2b` — *Automation* — kw: "b2b sales automation"
28. **AI for Sales Discovery Calls: Prep, Notes, Follow-Up** — `ai-sales-discovery-calls` — *Automation* — kw: "ai sales calls"
29. **Inbound Lead Routing With AI: A Practical Architecture** — `inbound-lead-routing-ai` — *Automation* — kw: "ai lead routing"
30. **Voice AI for Sales: The State of the Art in 2026** — `voice-ai-sales-2026` — *AI Systems* — kw: "voice ai sales"

### Batch 4 — Design-First AI + Web Dev (31–40)
31. **Designing AI Interfaces That Build Trust (with Examples)** — `designing-ai-interfaces-trust` — *Design* — kw: "ai ui design"
32. **The UX Patterns That Make AI Features Stick** — `ux-patterns-ai-features-stick` — *Design* — kw: "ai ux patterns"
33. **Branding an AI Startup: Lessons From the Last 3 Years** — `branding-ai-startup-lessons` — *Design* — kw: "ai startup branding"
34. **Naming Your AI Product: Patterns That Work (And Ones That Don't)** — `naming-ai-product-patterns` — *Design* — kw: "naming ai product"
35. **Why Most AI Onboarding Flows Lose Users in 60 Seconds** — `ai-onboarding-flows-lose-users` — *Design* — kw: "ai onboarding ux"
36. **Next.js Static Export for AI-Powered Sites: Trade-offs** — `nextjs-static-export-ai-sites` — *AI Systems* — kw: "nextjs static export"
37. **Vercel + Edge Functions for Real-Time AI Features** — `vercel-edge-functions-ai` — *AI Systems* — kw: "vercel edge ai"
38. **Choosing a Modern Web Stack for an AI Product in 2026** — `modern-web-stack-ai-product` — *AI Systems* — kw: "web stack ai product"
39. **Streaming AI Responses on the Web: A Practical Guide** — `streaming-ai-responses-web` — *AI Systems* — kw: "streaming ai responses"
40. **Core Web Vitals for AI Apps: What Actually Matters** — `core-web-vitals-ai-apps` — *AI Systems* — kw: "core web vitals ai"

### Batch 5 — Industry-Specific AI A (41–50)
41. **AI for E-commerce: 8 High-ROI Use Cases for 2026** — `ai-ecommerce-use-cases-2026` — *Business* — kw: "ai ecommerce use cases"
42. **AI for Real Estate Agents: The Modern Workflow** — `ai-real-estate-agents-workflow` — *Business* — kw: "ai real estate"
43. **AI in Law Firms: From Contract Review to Client Intake** — `ai-law-firms-contract-intake` — *Business* — kw: "ai law firm"
44. **AI in Healthcare Practices: Patient Comms and Admin** — `ai-healthcare-patient-comms` — *Business* — kw: "ai healthcare practice"
45. **AI for Hospitality: Concierge, Bookings, Reviews** — `ai-hospitality-concierge` — *Business* — kw: "ai hospitality"
46. **AI for Restaurants: Reservations, Reviews, and Menu Engineering** — `ai-restaurants-reservations-reviews` — *Business* — kw: "ai for restaurants"
47. **AI for Insurance Brokers: Quote Generation and Claims Triage** — `ai-insurance-brokers` — *Business* — kw: "ai insurance broker"
48. **AI in Construction and Trades: Estimating, Scheduling, Comms** — `ai-construction-trades` — *Business* — kw: "ai construction"
49. **AI for Property Managers: Lease, Maintenance, Tenant Comms** — `ai-property-managers` — *Business* — kw: "ai property management"
50. **AI for Dental and Medical Clinics: Practical Wins** — `ai-dental-medical-clinics` — *Business* — kw: "ai dental clinic"

### Batch 6 — Industry-Specific AI B + Strategy I (51–60)
51. **AI for Education: Tutors, Grading, and Admin** — `ai-education-tutors-grading` — *Business* — kw: "ai in education"
52. **AI for Fintech: Risk, Onboarding, and Customer Insights** — `ai-fintech-risk-onboarding` — *Business* — kw: "ai fintech use cases"
53. **AI for Marketing Agencies: A Workflow That Scales** — `ai-marketing-agencies-workflow` — *Business* — kw: "ai marketing agency"
54. **AI for Manufacturing SMBs: Quality, Maintenance, Supply** — `ai-manufacturing-smb` — *Business* — kw: "ai manufacturing smb"
55. **AI for Accounting Firms: Bookkeeping and Advisory** — `ai-accounting-firms` — *Business* — kw: "ai accounting firm"
56. **AI Strategy for First-Time Operators (5 Decisions)** — `ai-strategy-first-time-operators` — *Business* — kw: "ai strategy for operators"
57. **The CEO's Cheat Sheet for AI Vendor Pitches** — `ceo-cheat-sheet-ai-pitches` — *Business* — kw: "ai vendor pitch"
58. **AI Change Management: Getting the Team On Board** — `ai-change-management` — *Business* — kw: "ai change management"
59. **Setting AI Goals That Move the Business (Not Vanity Metrics)** — `ai-goals-not-vanity-metrics` — *Business* — kw: "ai business goals"
60. **How to Read an AI Vendor Proposal (and Spot Red Flags)** — `read-ai-vendor-proposal` — *Business* — kw: "ai vendor proposal"

### Batch 7 — AI Strategy & Leadership + Case Studies (61–70)
61. **The 30-Day AI Discovery Sprint Every Founder Should Run** — `30-day-ai-discovery-sprint` — *Business* — kw: "ai discovery sprint"
62. **AI Budgeting: How Much Should You Spend in Year One?** — `ai-budgeting-year-one` — *Business* — kw: "ai budget year one"
63. **The Difference Between AI Hype and AI Leverage** — `ai-hype-vs-leverage` — *Business* — kw: "ai hype vs roi"
64. **Why You Need an AI Champion (And Who to Pick)** — `ai-champion-role-pick` — *Business* — kw: "ai champion role"
65. **Risk Management for AI Projects: A Practical Framework** — `risk-management-ai-projects` — *Business* — kw: "ai risk management"
66. **Case Study: How a 12-Person Agency Doubled Output With AI** — `case-study-agency-doubled-output` — *Business* — kw: "ai case study agency"
67. **Case Study: A Real Estate Team That Replied to Leads in 90 Seconds** — `case-study-real-estate-fast-replies` — *Business* — kw: "ai case study real estate"
68. **Case Study: How a Local Clinic Saved 18 Hours/Week With AI** — `case-study-clinic-time-saved` — *Business* — kw: "ai case study clinic"
69. **Case Study: B2B SaaS Cuts Support Costs 47% With AI Triage** — `case-study-saas-support-triage` — *Business* — kw: "ai case study saas"
70. **Case Study: E-com Brand Boosts Conversions With AI Personalization** — `case-study-ecom-personalization` — *Business* — kw: "ai case study ecommerce"

### Batch 8 — Tools & Frameworks + AI Content I (71–80)
71. **Claude API for Builders: A Practical Tour** — `claude-api-practical-tour` — *AI Systems* — kw: "claude api guide"
72. **OpenAI Assistants vs. Custom Agents: When to Use Which** — `openai-assistants-vs-custom-agents` — *AI Systems* — kw: "openai assistants vs custom"
73. **Prompt Engineering for Business Workflows (Not Just Chatbots)** — `prompt-engineering-business` — *AI Systems* — kw: "prompt engineering business"
74. **RAG Done Right: Avoiding the Common Mistakes** — `rag-done-right` — *AI Systems* — kw: "rag implementation"
75. **Vector Databases Compared: Pinecone, Weaviate, pgvector** — `vector-databases-compared` — *AI Systems* — kw: "vector database comparison"
76. **n8n for Founders: A Tour of the Self-Hosted Automation Layer** — `n8n-for-founders` — *Automation* — kw: "n8n for business"
77. **AI Content Strategy: A Framework for Brands That Refuse to Sound Generic** — `ai-content-strategy-framework` — *AI Content* — kw: "ai content strategy"
78. **Editorial Workflows With AI: Where to Use It, Where to Avoid It** — `ai-editorial-workflows` — *AI Content* — kw: "ai editorial workflow"
79. **SEO With AI in 2026: What Still Works (and What Got Killed)** — `seo-with-ai-2026` — *AI Content* — kw: "ai seo 2026"
80. **AI-Generated Blog Posts: How to Make Them Genuinely Useful** — `useful-ai-blog-posts` — *AI Content* — kw: "ai blog posts"

### Batch 9 — AI Content II + Branding (81–90)
81. **Brand Voice Guidelines for the AI Era** — `brand-voice-guidelines-ai-era` — *AI Content* — kw: "brand voice ai"
82. **AI Video for Small Teams: Tools That Are Actually Usable** — `ai-video-small-teams` — *AI Content* — kw: "ai video tools"
83. **AI Image Generation for Marketing: Workflows and Caveats** — `ai-image-generation-marketing` — *AI Content* — kw: "ai image generation marketing"
84. **Podcast Production With AI: A Modern Workflow** — `podcast-production-ai-workflow` — *AI Content* — kw: "ai podcast production"
85. **Newsletter Strategy in the Age of AI Content Glut** — `newsletter-strategy-ai-glut` — *AI Content* — kw: "newsletter ai strategy"
86. **Social Media Automation Without Sounding Like a Bot** — `social-media-automation-not-bot` — *AI Content* — kw: "social media automation"
87. **Repurposing One Talk Into a Month of Content (With AI)** — `repurpose-talk-month-content` — *AI Content* — kw: "ai content repurposing"
88. **AI for Customer Research: Smarter Interviews, Smarter Synthesis** — `ai-customer-research` — *AI Content* — kw: "ai customer research"
89. **Building a Brand System That AI Can Use (Tokens + Voice)** — `brand-system-ai-can-use` — *Design* — kw: "brand system ai"
90. **From Brief to Asset in 30 Minutes: AI in the Creative Studio** — `brief-to-asset-30-minutes` — *Design* — kw: "ai creative workflow"

### Batch 10 — Productivity + Ops + Future-of-Work (91–100)
91. **The AI-Augmented Operator: Daily Habits That Compound** — `ai-augmented-operator-habits` — *Business* — kw: "ai operator habits"
92. **Meetings After AI: Fewer, Shorter, Better** — `meetings-after-ai` — *Automation* — kw: "ai meetings"
93. **Personal AI Stack for Founders (2026 Edition)** — `personal-ai-stack-founders` — *Business* — kw: "personal ai stack"
94. **Hiring in the AI Era: Roles That Don't Exist Yet** — `hiring-ai-era-new-roles` — *Business* — kw: "ai hiring new roles"
95. **What an "AI-First" Org Chart Actually Looks Like** — `ai-first-org-chart` — *Business* — kw: "ai first org chart"
96. **Privacy and AI: A Founder's Practical Checklist** — `privacy-ai-founder-checklist` — *Business* — kw: "ai privacy checklist"
97. **AI Security Basics for Non-Engineers** — `ai-security-non-engineers` — *Business* — kw: "ai security basics"
98. **When AI Should Stay Out of the Loop (Boundary Cases)** — `when-ai-should-stay-out` — *Business* — kw: "ai limits"
99. **Measuring Team Adoption of AI (Without Surveillance)** — `measuring-ai-team-adoption` — *Business* — kw: "ai team adoption"
100. **The Five-Year AI Roadmap for a Growing Business** — `five-year-ai-roadmap` — *Business* — kw: "ai roadmap five year"

## SEO Notes
- All slugs are kebab-case, 4–7 words, contain primary keyword
- All meta descriptions written in the post excerpts: 140–158 chars
- All posts include: TOC, H2/H3 hierarchy, ordered list (steps), blockquote pull-quote, FAQ section, internal links to 3+ Flowtix pages or other posts, 2 external authoritative links
- Reading time auto-calculated from word count / 200
- Updated date = post date (post-publish)
- Categories chosen from existing 5-category enum (no expansion to keep type safety)

## Internal Linking Plan
- All posts link to at minimum: `/services/`, `/contact/`, and 1+ other related blog post (cross-cluster where relevant)
- Cluster hub posts (e.g., #1 for AI Systems, #15 for Automation maturity, #41 for E-com) get the most inbound internal links from siblings

## Build/Deploy Cadence
After every batch of 10:
1. `npm run build` — zero errors required
2. `git add lib/ BLOG_100_PLAN.md && git commit`
3. `git push origin main` (Vercel auto-deploys)
4. Wait 60–90s, verify `https://flowtix.ai/sitemap.xml` includes new slugs
5. Move to next batch
