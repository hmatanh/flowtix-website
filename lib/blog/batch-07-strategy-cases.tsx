import type { Post } from "@/lib/posts";

const CALLOUT = "my-8 p-6 border border-amber-500/30 bg-amber-500/5 rounded-2xl";
const QUOTE = "border-l-2 border-amber-500 pl-6 my-8 text-[#bbb] italic";

export const batch7: Post[] = [
  {
    slug: "30-day-ai-discovery-sprint",
    title: "The 30-Day AI Discovery Sprint Every Founder Should Run",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "9 min read",
    date: "July 1, 2026",
    excerpt:
      "Skip the consulting deck. Run a 30-day AI discovery sprint that produces a real roadmap, validated use cases, and quantified ROI projections in one month.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Discovery", "Founders"],
    toc: [
      { id: "why-sprint", label: "Why A Sprint Beats A Project" },
      { id: "week-1", label: "Week 1: Map" },
      { id: "week-2", label: "Week 2: Quantify" },
      { id: "week-3", label: "Week 3: Test" },
      { id: "week-4", label: "Week 4: Decide" },
      { id: "deliverables", label: "The Four Deliverables" },
      { id: "what-not", label: "What Not To Do" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-sprint">Why A Sprint Beats A 6-Month Consulting Project</h2>
        <p>
          Six-month AI strategy projects produce binders. Sprints produce decisions. A
          30-day AI discovery sprint forces the team to pick three real use cases,
          quantify their opportunity, run a small test of the riskiest one, and commit
          to a 90-day build. By day 30 you have either: shipped your first AI win, or
          knowingly chosen not to. Both are progress.
        </p>
        <p>
          The sprint structure also forces decisions you&apos;d otherwise defer:
          who owns AI, what the budget actually is, what the team is willing to change.
          Those decisions don&apos;t happen in consulting decks; they happen under
          deadline.
        </p>

        <h2 id="week-1">Week 1: Map</h2>
        <p>
          Shadow operators across functions. Document where time goes. The deliverable
          at end-of-week is a one-page heatmap of the business: which workflows consume
          the most time, where humans are doing AI-suitable work, and which workflows
          are politically untouchable.
        </p>
        <p>
          Pick exactly five candidate use cases. Not three (too narrow), not ten (too
          unfocused). Five forces real prioritization.
        </p>

        <h2 id="week-2">Week 2: Quantify</h2>
        <p>
          For each of the five candidates, attach numbers: hours per week, dollar cost
          per year, ROI if AI handles 60%, ROI at 80%, what could go wrong, who
          champions internally, who resists. The numbers are estimates &mdash; that&apos;s
          fine. The discipline is the point.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Numbers Each Use Case Needs</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Current hours/week consumed.</li>
            <li>&bull; Fully-loaded cost.</li>
            <li>&bull; AI deployment cost.</li>
            <li>&bull; Implementation timeline.</li>
            <li>&bull; Adoption risk.</li>
          </ul>
        </div>

        <h2 id="week-3">Week 3: Test</h2>
        <p>
          Pick the riskiest of the top three. Build the smallest version that proves
          (or disproves) the AI approach can handle it. This is not the final product
          &mdash; it&apos;s a probe. Time-box it strictly.
        </p>
        <p>
          The test usually answers one question: does the AI quality meet the bar your
          users will tolerate? Everything else (UX, scale, integration) is a separate
          concern.
        </p>

        <h2 id="week-4">Week 4: Decide</h2>
        <p>
          One half-day workshop, all senior stakeholders. Review the numbers. Review
          the test results. Pick the use case to build. Define the next 90 days. Name
          the owner. Allocate the budget. Set the success metric.
        </p>
        <p>
          End-of-sprint deliverables get signed by the CEO. Without the signature, the
          sprint was theatre.
        </p>

        <h2 id="deliverables">The Four Deliverables</h2>
        <ol>
          <li><strong>The Map.</strong> One page showing where AI fits and where it doesn&apos;t.</li>
          <li><strong>The Quantification.</strong> Five use cases with numbers.</li>
          <li><strong>The Test Report.</strong> What the probe revealed.</li>
          <li><strong>The 90-Day Plan.</strong> Scope, timeline, owner, budget, success metric.</li>
        </ol>

        <h2 id="what-not">What Not To Do</h2>
        <ul>
          <li>Don&apos;t hire a Head of AI before the sprint. Decide the role based on what you learn.</li>
          <li>Don&apos;t extend the sprint. The deadline is the discipline.</li>
          <li>Don&apos;t outsource the entire sprint. The founder must be in the room.</li>
          <li>Don&apos;t pick five use cases that all flow through the same team.</li>
        </ul>

        <blockquote className={QUOTE}>
          A 30-day AI discovery sprint produces a real plan. A 6-month AI consulting
          engagement produces a beautiful PDF. The difference shows up in your P&amp;L
          a year later.
        </blockquote>

        <p>See <a href="/blog/ai-implementation-roadmap-small-business">our SMB roadmap</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Should we hire a consultant?</strong> A specialist for week 3&apos;s test build, fine. The strategy work belongs to operators.</p>
        <p><strong>What if our five use cases are all bad?</strong> Real possibility. Better to know in 30 days than 6 months.</p>
        <p><strong>How big a team for the sprint?</strong> 3&ndash;5 people, including the CEO part-time.</p>
      </>
    ),
  },
  {
    slug: "ai-budgeting-year-one",
    title: "AI Budgeting: How Much Should You Spend in Year One?",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 2, 2026",
    excerpt:
      "AI budgets range from $5k to $5M and most are wrong. Here is the realistic year-one AI budget for SMB through mid-market, with the line items.",
    author: "Flowtix Team",
    tags: ["AI Budget", "Year One", "Finance"],
    toc: [
      { id: "wrong-anchors", label: "The Wrong Anchors" },
      { id: "by-size", label: "By Company Size" },
      { id: "line-items", label: "The Line Items" },
      { id: "build-vs-buy", label: "Build vs Buy Math" },
      { id: "talent", label: "Talent Costs" },
      { id: "tooling", label: "Tooling Costs" },
      { id: "hidden", label: "Hidden Costs" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="wrong-anchors">The Wrong Anchors</h2>
        <p>
          Most year-one AI budgets are anchored on one of two wrong references: the
          enterprise consulting proposal ($500k+) or the &ldquo;ChatGPT for the team&rdquo;
          number ($2k). Neither maps to real AI deployment for an SMB or mid-market
          company. The honest range for a 20&ndash;200 person business: $30k&ndash;$250k
          fully loaded for year one.
        </p>

        <h2 id="by-size">By Company Size</h2>
        <ul>
          <li><strong>Under 10 people:</strong> $5k&ndash;$30k. Tools and a part-time builder.</li>
          <li><strong>10&ndash;30 people:</strong> $30k&ndash;$80k. Tools, a project, internal owner part-time.</li>
          <li><strong>30&ndash;100 people:</strong> $80k&ndash;$200k. Tools, 2&ndash;3 projects, internal owner full-time, possibly an external partner.</li>
          <li><strong>100&ndash;500 people:</strong> $200k&ndash;$1M. Tools, a portfolio of projects, a small team, governance.</li>
        </ul>

        <h2 id="line-items">The Line Items</h2>
        <ol>
          <li><strong>AI provider costs.</strong> OpenAI / Anthropic / etc.</li>
          <li><strong>SaaS AI tools.</strong> Per-seat or per-use.</li>
          <li><strong>Integration tools.</strong> Zapier, Make, n8n.</li>
          <li><strong>Data infrastructure.</strong> Postgres, vector DB, monitoring.</li>
          <li><strong>Internal talent.</strong> Owner, builder, possibly data person.</li>
          <li><strong>External partners.</strong> Consultancies, agencies, specialists.</li>
          <li><strong>Training.</strong> Workshops, documentation, change mgmt.</li>
          <li><strong>Governance.</strong> Policies, audits, legal review.</li>
        </ol>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">Year-One Allocation Heuristic</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; 40% &mdash; talent (internal and external).</li>
            <li>&bull; 30% &mdash; tooling and infrastructure.</li>
            <li>&bull; 20% &mdash; AI provider costs.</li>
            <li>&bull; 10% &mdash; training, governance, miscellany.</li>
          </ul>
        </div>

        <h2 id="build-vs-buy">Build vs Buy Math</h2>
        <p>
          Buy decisions cost 30&ndash;50% of equivalent build, but lock you into vendor
          terms. Build decisions cost more up-front and need maintenance. For most year-one
          use cases, buy. Build only when the use case is core to differentiation.
        </p>

        <h2 id="talent">Talent Costs</h2>
        <p>
          The internal AI owner: typically a senior product or ops person, often at
          0.5&ndash;1.0 FTE for year one. Fully loaded $80k&ndash;$200k depending on role and
          geography. The single biggest line item for most companies.
        </p>

        <h2 id="tooling">Tooling Costs</h2>
        <p>
          Modern stack for a 50-person company: $1.5k&ndash;$3k/month for the AI-adjacent
          tools. Add $0.5k&ndash;$2k/month in direct AI provider spend depending on volume.
        </p>

        <h2 id="hidden">Hidden Costs</h2>
        <ul>
          <li>Data cleanup before AI deployment (often 30%+ of project cost).</li>
          <li>Change management and training time.</li>
          <li>Productivity dip during transition.</li>
          <li>Legal and compliance review.</li>
          <li>The second tool you need after the first one falls short.</li>
        </ul>

        <blockquote className={QUOTE}>
          The honest year-one AI budget for a company that takes this seriously: 0.5&ndash;2%
          of revenue. Less than that and you&apos;re half-pregnant. More than that and
          you&apos;re likely over-engineering.
        </blockquote>

        <p>See <a href="/blog/hidden-costs-ai-implementation">hidden costs of AI implementation</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What if we have no budget?</strong> Start with $5k of tooling and a clear champion. Prove ROI, then ask for more.</p>
        <p><strong>Year two?</strong> Usually 1.5&ndash;2x year one as you scale wins.</p>
        <p><strong>How to defend the budget to the board?</strong> Tie every dollar to a measurable outcome.</p>
      </>
    ),
  },
  {
    slug: "ai-hype-vs-leverage",
    title: "The Difference Between AI Hype and AI Leverage",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 3, 2026",
    excerpt:
      "Operators struggle to separate AI hype from AI leverage. Here is the practical filter — what to ignore, what to invest in, and how to tell the difference quickly.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Hype", "Leverage"],
    toc: [
      { id: "the-frame", label: "The Frame" },
      { id: "hype-markers", label: "What Hype Looks Like" },
      { id: "leverage-markers", label: "What Leverage Looks Like" },
      { id: "test", label: "The Three-Question Test" },
      { id: "examples", label: "Examples From 2024-2026" },
      { id: "discipline", label: "The Discipline" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-frame">The Frame</h2>
        <p>
          AI hype produces conversation. AI leverage produces output. The same week
          where everyone is debating a new model on Twitter, the operators with
          leverage have shipped a workflow that saves their team 12 hours a week. They
          aren&apos;t arguing. They&apos;re building.
        </p>

        <h2 id="hype-markers">What Hype Looks Like</h2>
        <ul>
          <li>Demos that work on cherry-picked inputs.</li>
          <li>Benchmarks that don&apos;t map to your job.</li>
          <li>&ldquo;AGI is 18 months away&rdquo; predictions (a constant since 2017).</li>
          <li>Conference talks that don&apos;t survive a customer-facing deployment.</li>
          <li>VC-funded vendors with no production customers.</li>
          <li>Tools rebranded as &ldquo;agents&rdquo; with no new capability.</li>
        </ul>

        <h2 id="leverage-markers">What Leverage Looks Like</h2>
        <ul>
          <li>A specific workflow runs faster, costs less, or makes fewer errors.</li>
          <li>A team member&apos;s job changed for the better, measurably.</li>
          <li>A customer-facing metric (CSAT, conversion, retention) moved.</li>
          <li>A real cost line on the P&amp;L declined.</li>
          <li>A capability you didn&apos;t have before now exists.</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Three-Question Test</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; What specific workflow does this change?</li>
            <li>&bull; How would I measure the change?</li>
            <li>&bull; What would I stop doing as a result?</li>
          </ul>
        </div>

        <h2 id="test">The Three-Question Test</h2>
        <p>
          Apply this test to every AI product, model release, or strategy proposal. If
          you can&apos;t answer the three questions in 60 seconds, you&apos;re looking
          at hype. If you can, you&apos;re probably looking at leverage worth
          considering.
        </p>

        <h2 id="examples">Examples From 2024&ndash;2026</h2>
        <p>
          Hype: agents that &ldquo;autonomously run your business.&rdquo; Leverage: AI
          drafting support replies that get human review.
        </p>
        <p>
          Hype: AI-generated marketing &ldquo;at unlimited scale.&rdquo; Leverage: AI
          drafting against tight voice rules with editor review, 4&ndash;5x output at
          quality.
        </p>
        <p>
          Hype: AI &ldquo;decision-makers&rdquo; for hiring. Leverage: AI scheduling
          first-round interviews and producing structured candidate briefs.
        </p>

        <h2 id="discipline">The Discipline</h2>
        <p>
          Spend 20% of your AI attention on what&apos;s new and 80% on what&apos;s
          shipping. Most operators reverse the ratio and never ship. The leverage is in
          the boring, well-deployed AI &mdash; not in the cutting edge.
        </p>

        <blockquote className={QUOTE}>
          The hype is loud. The leverage is quiet and compounds. The operators who
          ignore the loud and patiently build the quiet are the ones who&apos;ll look
          like geniuses in 18 months.
        </blockquote>

        <p>See <a href="/blog/ai-strategy-first-time-operators">5 AI strategy decisions</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How do I stop the team from chasing hype?</strong> Tie AI work to specific metrics. Hype can&apos;t produce metric movement.</p>
        <p><strong>Should I follow new model releases?</strong> Skim them. Don&apos;t reorganize work around them weekly.</p>
        <p><strong>What about VC pitches?</strong> A useful market scan. Not a buying signal.</p>
      </>
    ),
  },
  {
    slug: "ai-champion-role-pick",
    title: "Why You Need an AI Champion (And Who to Pick)",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 4, 2026",
    excerpt:
      "AI deployments without a dedicated champion fade quietly. Here is what the role looks like, who fits it, and how to set them up to succeed.",
    author: "Flowtix Team",
    tags: ["AI Champion", "Leadership", "Adoption"],
    toc: [
      { id: "the-role", label: "Why The Role Exists" },
      { id: "who-fits", label: "Who Fits" },
      { id: "who-doesnt", label: "Who Doesn&apos;t Fit" },
      { id: "responsibilities", label: "Core Responsibilities" },
      { id: "authority", label: "The Authority They Need" },
      { id: "metrics", label: "How To Measure Them" },
      { id: "common-failures", label: "Common Failures" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-role">Why The Role Exists</h2>
        <p>
          AI cuts across functions: support, sales, marketing, ops, product. Without a
          named owner whose job is to push it forward across all of them, AI ends up
          being everyone&apos;s problem and nobody&apos;s priority. The champion is the
          person who makes AI happen.
        </p>

        <h2 id="who-fits">Who Fits</h2>
        <p>
          The right champion combines four traits:
        </p>
        <ul>
          <li>Operational seniority &mdash; respected across functions.</li>
          <li>Strong product instincts &mdash; knows good UX from bad.</li>
          <li>Technical literacy &mdash; doesn&apos;t need to code but can read it.</li>
          <li>Comfort with ambiguity &mdash; AI deployments are messy.</li>
        </ul>
        <p>
          Common profiles: senior PM, head of ops, COO-track operator, occasionally a
          senior engineer with product chops.
        </p>

        <h2 id="who-doesnt">Who Doesn&apos;t Fit</h2>
        <ul>
          <li>The CTO &mdash; usually too busy and too focused on the product itself.</li>
          <li>The CEO &mdash; can sponsor but shouldn&apos;t own.</li>
          <li>An external consultant &mdash; no authority to push internally.</li>
          <li>A junior data scientist &mdash; lacks operational seniority.</li>
        </ul>

        <h2 id="responsibilities">Core Responsibilities</h2>
        <ol>
          <li>Run the discovery and prioritization process.</li>
          <li>Pick the use cases worth funding.</li>
          <li>Manage vendor relationships.</li>
          <li>Drive adoption across teams.</li>
          <li>Track outcomes and report up.</li>
          <li>Manage the AI risk surface (data, compliance, brand).</li>
        </ol>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">What The Champion Needs Day One</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Written CEO sponsorship, visible to the org.</li>
            <li>&bull; A discretionary budget for tools and consultants.</li>
            <li>&bull; Authority to set policy on AI use.</li>
            <li>&bull; Direct access to the CFO and the heads of each function.</li>
          </ul>
        </div>

        <h2 id="authority">The Authority They Need</h2>
        <p>
          A champion without authority is a recommendation engine. They need real
          authority to: pick vendors, fund pilots, kill stalled projects, set
          guardrails. Without this, they get worn down by political resistance within
          90 days.
        </p>

        <h2 id="metrics">How To Measure Them</h2>
        <ul>
          <li>Number of AI use cases shipped to production per quarter.</li>
          <li>Outcomes on those use cases (time saved, dollars saved, quality improved).</li>
          <li>Adoption rates across the org.</li>
          <li>Number of vendor and tool consolidations.</li>
        </ul>

        <h2 id="common-failures">Common Failures</h2>
        <ul>
          <li>Picking someone too junior.</li>
          <li>Giving them no budget.</li>
          <li>Adding the role on top of an existing full-time job with no relief.</li>
          <li>Not giving them air cover when they make hard calls.</li>
        </ul>

        <blockquote className={QUOTE}>
          The single most predictive factor in whether a company&apos;s AI investment
          pays off is whether there&apos;s a credible, empowered AI champion. Everything
          else is downstream.
        </blockquote>

        <p>See <a href="/blog/ai-change-management">AI change management</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Full-time or part-time?</strong> Start part-time at 50%. Promote to full-time when the pipeline justifies it.</p>
        <p><strong>Title?</strong> Less important than authority. &ldquo;Head of AI Operations&rdquo; or &ldquo;Director, AI Initiatives&rdquo; both work.</p>
        <p><strong>External or internal?</strong> Internal almost always. External consultants can support but not own.</p>
      </>
    ),
  },
  {
    slug: "risk-management-ai-projects",
    title: "Risk Management for AI Projects: A Practical Framework",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "9 min read",
    date: "July 5, 2026",
    excerpt:
      "AI projects have unusual risk profiles. Here is the practical risk management framework — what to plan for, what to live with, and what to refuse.",
    author: "Flowtix Team",
    tags: ["AI Risk", "Risk Management", "Governance"],
    toc: [
      { id: "categories", label: "The Five Risk Categories" },
      { id: "model", label: "Model Risk" },
      { id: "data", label: "Data Risk" },
      { id: "operational", label: "Operational Risk" },
      { id: "regulatory", label: "Regulatory Risk" },
      { id: "reputational", label: "Reputational Risk" },
      { id: "framework", label: "The Practical Framework" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="categories">The Five Risk Categories</h2>
        <p>
          AI projects fail in different ways than traditional software projects.
          Mapping the failure modes to risk categories early lets you build mitigations
          rather than be surprised. The five categories that cover almost every
          incident we&apos;ve seen:
        </p>
        <ol>
          <li>Model risk &mdash; the AI is wrong in ways that matter.</li>
          <li>Data risk &mdash; the data going in is bad, missing, or leaks out.</li>
          <li>Operational risk &mdash; the system breaks or is misused.</li>
          <li>Regulatory risk &mdash; you&apos;ve violated a law or guidance.</li>
          <li>Reputational risk &mdash; the AI does something that ends up in the press.</li>
        </ol>

        <h2 id="model">Model Risk</h2>
        <p>
          Hallucination, bias, drift, performance degradation. Mitigations: grounded
          retrieval, evaluation suites, regular re-testing, human-in-loop on high-stakes
          decisions.
        </p>

        <h2 id="data">Data Risk</h2>
        <p>
          Sensitive data leaving your perimeter, training on private data, stale data
          driving wrong answers, PII in logs. Mitigations: BAAs and DPAs, no-training
          contract terms, data classification, log scrubbing.
        </p>

        <h2 id="operational">Operational Risk</h2>
        <p>
          AI outages, rate limit hits, latency spikes, misuse by employees. Mitigations:
          multi-vendor abstraction, rate limit monitoring, internal AUP for AI use.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">Incident Response Essentials</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Who declares an AI incident, and on what trigger?</li>
            <li>&bull; What&apos;s the kill switch?</li>
            <li>&bull; How does the team communicate (internal and external)?</li>
            <li>&bull; What&apos;s the rollback path?</li>
            <li>&bull; Who does the post-mortem?</li>
          </ul>
        </div>

        <h2 id="regulatory">Regulatory Risk</h2>
        <p>
          GDPR, CCPA, AI Act in the EU, sector-specific rules (HIPAA, GLBA, FINRA),
          and an emerging patchwork of US state AI laws. Mitigations: legal review
          before launch, periodic audits, documented model methodology, transparency to
          customers.
        </p>

        <h2 id="reputational">Reputational Risk</h2>
        <p>
          AI doing something embarrassing in front of customers or in the press.
          Mitigations: tight guardrails, sample monitoring, fast incident response, an
          ability to pull the plug.
        </p>

        <h2 id="framework">The Practical Framework</h2>
        <ol>
          <li>Identify the use case&apos;s risk profile (low/medium/high on each category).</li>
          <li>Set mitigations proportional to the risk.</li>
          <li>Define monitoring that would catch a problem early.</li>
          <li>Define incident response in advance.</li>
          <li>Review quarterly.</li>
        </ol>

        <blockquote className={QUOTE}>
          The companies that have AI incidents in the news are not the ones that took
          risk. They&apos;re the ones that didn&apos;t plan for the risk they were already
          taking. The difference is documentation and rehearsal.
        </blockquote>

        <p>See <a href="/blog/ai-governance-smb-framework">AI governance for SMBs</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about insurance?</strong> Some carriers now offer AI-specific coverage. Useful for high-risk deployments.</p>
        <p><strong>Who owns AI risk?</strong> The AI champion at the operational level, the CEO at the strategic level.</p>
        <p><strong>How often to review?</strong> Quarterly for tactical, annually for strategic.</p>
      </>
    ),
  },
  {
    slug: "case-study-agency-doubled-output",
    title: "Case Study: How a 12-Person Agency Doubled Output With AI",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 6, 2026",
    excerpt:
      "A representative case study of a small marketing agency that doubled deliverable output without hiring — what they changed, what broke, and what stuck.",
    author: "Flowtix Team",
    tags: ["Case Study", "Marketing Agency", "Productivity"],
    toc: [
      { id: "starting-point", label: "The Starting Point" },
      { id: "audit", label: "The Audit" },
      { id: "build", label: "The Build" },
      { id: "results", label: "Results After 6 Months" },
      { id: "what-broke", label: "What Broke" },
      { id: "lessons", label: "Lessons" },
      { id: "applicability", label: "Applicability" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="starting-point">The Starting Point</h2>
        <p>
          A 12-person digital marketing agency. Mid-five-figure monthly retainers from
          15 clients. Strong work, but team burnt out. Founders considering raising
          prices to slow demand, or hiring three more producers.
        </p>
        <p>
          Note: details modestly anonymized. The pattern is representative of multiple
          engagements.
        </p>

        <h2 id="audit">The Audit</h2>
        <p>
          A 2-week audit revealed where time actually went: 38% content production,
          22% reporting, 18% client communication, 14% strategy, 8% admin. Strategy
          &mdash; the high-margin work &mdash; was the smallest slice.
        </p>

        <h2 id="build">The Build</h2>
        <p>
          Three AI workflows shipped over 8 weeks:
        </p>
        <ol>
          <li><strong>Content production system.</strong> Voice rulebook per client + topic brief template + AI draft + editor review. 5x output potential.</li>
          <li><strong>Auto-drafted client reports.</strong> Monthly reports drafted from analytics data with plain-English narrative. 70% time saved.</li>
          <li><strong>Client check-in drafting.</strong> Weekly client emails drafted by AI; account leads reviewed and sent. 60% time saved.</li>
        </ol>

        <h2 id="results">Results After 6 Months</h2>
        <ul>
          <li>Deliverable output doubled per producer.</li>
          <li>No hires added.</li>
          <li>Average client retainer rose 15% as scope expanded.</li>
          <li>Strategy time grew to 28% of total work.</li>
          <li>Team retention improved (people left less; burnout dropped).</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Single Biggest Win</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Production time fell 65%. Editor time stayed flat. Quality stayed up.</li>
            <li>&bull; The savings went to strategy work &mdash; higher margin, more interesting.</li>
            <li>&bull; Producers became editors-plus-strategists, not displaced.</li>
          </ul>
        </div>

        <h2 id="what-broke">What Broke</h2>
        <ul>
          <li>First-pass voice rules were too loose; output sounded generic. Iterated 3x.</li>
          <li>Two producers struggled with the transition to editor role. One left voluntarily.</li>
          <li>Client billing model strained &mdash; hourly billing on AI-augmented work shorts the agency. Moved to fixed scope.</li>
        </ul>

        <h2 id="lessons">Lessons</h2>
        <ol>
          <li>Voice rules are the biggest quality lever &mdash; spend disproportionately on them.</li>
          <li>Editor skill is the new bottleneck. Train deliberately.</li>
          <li>Billing model must follow workflow change.</li>
          <li>Two of twelve people will leave; that&apos;s the cost of the transition.</li>
        </ol>

        <h2 id="applicability">Applicability</h2>
        <p>
          This pattern works for any service business where production is the bottleneck
          and quality is rule-bound (marketing agencies, content businesses, design
          studios, paralegal services). It works less well for services where
          differentiation is judgment-heavy.
        </p>

        <blockquote className={QUOTE}>
          The agency didn&apos;t become an AI agency. It became a strategy agency that
          uses AI for production. The framing matters &mdash; for clients, for talent,
          and for the founders themselves.
        </blockquote>

        <p>See <a href="/blog/ai-marketing-agencies-workflow">AI for marketing agencies</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Total investment?</strong> ~$60k over 6 months in tools and consulting. Paid back in month 4.</p>
        <p><strong>Could a smaller agency do this?</strong> Yes, with proportional scope. Even a 3-person agency benefits.</p>
        <p><strong>Did clients notice?</strong> Yes &mdash; faster turnaround and richer strategy. Mostly positive.</p>
      </>
    ),
  },
  {
    slug: "case-study-real-estate-fast-replies",
    title: "Case Study: A Real Estate Team That Replied to Leads in 90 Seconds",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 7, 2026",
    excerpt:
      "A real estate office that cut lead response from 4 hours to 90 seconds, and what happened to their pipeline as a result.",
    author: "Flowtix Team",
    tags: ["Case Study", "Real Estate", "Lead Response"],
    toc: [
      { id: "context", label: "Context" },
      { id: "the-problem", label: "The Problem" },
      { id: "the-build", label: "The Build" },
      { id: "results", label: "Results" },
      { id: "what-changed", label: "What Changed In Daily Work" },
      { id: "frictions", label: "Frictions" },
      { id: "lessons", label: "Lessons" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="context">Context</h2>
        <p>
          A 12-agent residential real estate office, mid-sized US metro. Strong listings
          inventory, weak lead conversion. The frustrating pattern: hot leads dropping
          off after 24&ndash;48 hours of no response. Agents working evenings to catch up
          and still missing.
        </p>

        <h2 id="the-problem">The Problem</h2>
        <p>
          Industry research is clear: lead response time below 5 minutes converts at
          5&ndash;10x the rate of response after 30+ minutes. This office&apos;s median
          response time was 4 hours, with significant tail into days. They were
          leaking deals every week.
        </p>

        <h2 id="the-build">The Build</h2>
        <p>
          Six-week implementation:
        </p>
        <ol>
          <li>Unified inbox: all lead sources flow to one system.</li>
          <li>AI auto-response in the agent&apos;s voice within 90 seconds, 24/7.</li>
          <li>AI matches the inquiry to relevant listings and includes them in the response.</li>
          <li>Conversation continues with AI until the lead signals readiness for human contact.</li>
          <li>Agent receives a structured handoff with full context.</li>
        </ol>

        <h2 id="results">Results</h2>
        <ul>
          <li>Median response time: 4 hours &rarr; 90 seconds.</li>
          <li>Lead-to-showing conversion: up 38%.</li>
          <li>Closings per agent: up 22% in the next 6 months.</li>
          <li>After-hours response: 100% of leads now get a response.</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Brokerage Math</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Pre-AI: 2.3 closings/agent/month.</li>
            <li>&bull; Post-AI: 2.8 closings/agent/month.</li>
            <li>&bull; Brokerage revenue: up roughly 22%, no new agents added.</li>
          </ul>
        </div>

        <h2 id="what-changed">What Changed In Daily Work</h2>
        <p>
          Agents stopped checking their phones obsessively at night because they knew
          the AI was handling first response. Mornings started with a curated &ldquo;hot
          leads from overnight&rdquo; queue. Showing prep was AI-drafted. Listing
          presentations were sharper. Burnout decreased even as production rose.
        </p>

        <h2 id="frictions">Frictions</h2>
        <ul>
          <li>Two senior agents resisted AI replies &ldquo;sounding like them.&rdquo; Solved by training the AI per agent.</li>
          <li>One lead complained about AI &mdash; the office added a clear disclosure on the first auto-message.</li>
          <li>MLS integration took longer than expected (3 weeks vs planned 1).</li>
        </ul>

        <h2 id="lessons">Lessons</h2>
        <ol>
          <li>Disclosure is non-negotiable. Trust beats stealth.</li>
          <li>Per-agent voice tuning is worth the effort.</li>
          <li>The 5-minute response window is more important than perfect responses.</li>
          <li>Senior agents become coaches in the new system &mdash; design for that.</li>
        </ol>

        <blockquote className={QUOTE}>
          A real estate office where every lead gets a real response in 90 seconds
          isn&apos;t a tech company. It&apos;s a real estate office that finally
          matches how clients want to be treated. AI is the means; speed and care are
          the ends.
        </blockquote>

        <p>See <a href="/blog/ai-real-estate-agents-workflow">AI for real estate agents</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Did agents push back?</strong> Most welcomed it. The two who resisted converted after seeing colleagues&apos; results.</p>
        <p><strong>What about fair housing compliance?</strong> AI was tuned to be neutral and disclose. All auto-responses logged for audit.</p>
        <p><strong>Cost?</strong> ~$40k all-in for build and first year. ROI within quarter two.</p>
      </>
    ),
  },
  {
    slug: "case-study-clinic-time-saved",
    title: "Case Study: How a Local Clinic Saved 18 Hours/Week With AI",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 8, 2026",
    excerpt:
      "A representative case study of a small medical clinic that recovered 18 hours per week of staff time using narrowly-scoped AI deployment.",
    author: "Flowtix Team",
    tags: ["Case Study", "Healthcare", "Clinic Operations"],
    toc: [
      { id: "context", label: "Context" },
      { id: "audit", label: "The Audit" },
      { id: "build", label: "The Build" },
      { id: "results", label: "Results" },
      { id: "compliance", label: "Compliance Notes" },
      { id: "lessons", label: "Lessons" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="context">Context</h2>
        <p>
          A 4-clinician primary care practice in a mid-sized US city. 8-person front
          office. Daily patient volume around 80. Pre-AI pattern: front desk
          chronically behind, charts entered late, after-hours work for clinicians.
        </p>

        <h2 id="audit">The Audit</h2>
        <p>
          Where the 8 staff actually spent their week:
        </p>
        <ul>
          <li>Insurance verification &mdash; 28 hours/week across staff.</li>
          <li>Appointment scheduling and reminders &mdash; 22 hours.</li>
          <li>Billing communication &mdash; 18 hours.</li>
          <li>Routine patient questions &mdash; 14 hours.</li>
          <li>Forms and intake &mdash; 12 hours.</li>
        </ul>

        <h2 id="build">The Build</h2>
        <p>
          Three AI workflows shipped over 10 weeks:
        </p>
        <ol>
          <li>Insurance verification automation (BAA-compliant vendor).</li>
          <li>AI appointment booking and reminders via chat.</li>
          <li>Intake and pre-visit forms via patient phone.</li>
        </ol>

        <h2 id="results">Results</h2>
        <ul>
          <li>18 hours/week of staff time recovered.</li>
          <li>No-show rate: 12% &rarr; 6%.</li>
          <li>Insurance denial rate: -22%.</li>
          <li>Patient satisfaction scores stable or up.</li>
          <li>Front desk turnover: zero in the year following deployment (had been a chronic problem).</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">What The Recovered Hours Went Toward</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Higher-touch patient experience (warm welcomes, personal handoffs).</li>
            <li>&bull; Catching up on billing follow-ups (collections improved).</li>
            <li>&bull; Staff training and process improvement.</li>
            <li>&bull; Staff went home on time. Burnout dropped.</li>
          </ul>
        </div>

        <h2 id="compliance">Compliance Notes</h2>
        <ul>
          <li>Every vendor under BAA before any PHI flowed.</li>
          <li>Patient notice updated to reference AI-assisted scheduling.</li>
          <li>Workforce trained and training documented.</li>
          <li>Quarterly compliance review built into the operations calendar.</li>
        </ul>

        <h2 id="lessons">Lessons</h2>
        <ol>
          <li>Insurance verification is the highest-ROI AI starting point for primary care.</li>
          <li>Patient-facing AI works when disclosed and when escalation is one tap away.</li>
          <li>Staff resistance fades when AI relieves their worst tasks.</li>
          <li>Compliance discipline must be in place from day one.</li>
        </ol>

        <blockquote className={QUOTE}>
          A small clinic that adopts AI well becomes a calmer place to work and a more
          pleasant place to be a patient. The financial benefit is real but secondary
          to the operational sanity restored.
        </blockquote>

        <p>See <a href="/blog/ai-dental-medical-clinics">AI for dental and medical clinics</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Cost?</strong> ~$28k year one, all in. ROI in month 4.</p>
        <p><strong>Documentation AI?</strong> Considered but not yet adopted. Separate compliance lift.</p>
        <p><strong>What about specialty clinics?</strong> Same framework, different starting workflows.</p>
      </>
    ),
  },
  {
    slug: "case-study-saas-support-triage",
    title: "Case Study: B2B SaaS Cuts Support Costs 47% With AI Triage",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 9, 2026",
    excerpt:
      "How a mid-stage B2B SaaS reduced support costs by 47% while improving CSAT, using narrowly-scoped AI triage and drafting.",
    author: "Flowtix Team",
    tags: ["Case Study", "SaaS", "Support Automation"],
    toc: [
      { id: "context", label: "Context" },
      { id: "audit", label: "The Audit" },
      { id: "build", label: "The Build" },
      { id: "results", label: "Results" },
      { id: "csat", label: "Why CSAT Went Up" },
      { id: "what-broke", label: "What Broke" },
      { id: "lessons", label: "Lessons" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="context">Context</h2>
        <p>
          A B2B SaaS at $15M ARR. 12-person support team across two time zones. Pre-AI
          state: 5,000 tickets/month, average resolution time 16 hours, CSAT 78%. New
          tickets growing 30% YoY ahead of revenue.
        </p>

        <h2 id="audit">The Audit</h2>
        <p>
          500-ticket classification revealed:
        </p>
        <ul>
          <li>42% &mdash; simple status / how-to (could be auto-resolved).</li>
          <li>31% &mdash; needs human but AI could draft the reply.</li>
          <li>18% &mdash; complex, needed senior agent.</li>
          <li>9% &mdash; not actually support tickets (sales, partnerships, billing edge cases).</li>
        </ul>

        <h2 id="build">The Build</h2>
        <p>
          Eight-week phased rollout:
        </p>
        <ol>
          <li>Build a grounded knowledge base from product docs and past tickets.</li>
          <li>Deploy AI triage classifier (routes to one of five paths).</li>
          <li>Open auto-resolve for top 10 ticket types with aggressive escalation.</li>
          <li>Launch AI drafting for the human-handled tier.</li>
          <li>Add senior side-tools (summarization, draft-the-difficult-paragraph).</li>
        </ol>

        <h2 id="results">Results</h2>
        <ul>
          <li>Support cost per ticket: -47%.</li>
          <li>Average resolution time: 16h &rarr; 4h.</li>
          <li>CSAT: 78% &rarr; 84%.</li>
          <li>Team size: shrunk by 4 (through attrition, not layoffs).</li>
          <li>Senior agent escalation rate: stable (no quality erosion).</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Multiplier</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; 47% support cost reduction.</li>
            <li>&bull; Higher CSAT (faster resolution beats human-everywhere).</li>
            <li>&bull; Senior agents now focus on complex/strategic tickets.</li>
            <li>&bull; Junior agent burnout vanished.</li>
          </ul>
        </div>

        <h2 id="csat">Why CSAT Went Up</h2>
        <p>
          Customers preferred fast accurate AI replies for simple questions over slow
          human ones. The complex tickets got better human attention because senior
          agents had time. The disclosed AI didn&apos;t bother customers; the slow
          response time used to.
        </p>

        <h2 id="what-broke">What Broke</h2>
        <ul>
          <li>The first knowledge base was too broad; the AI hallucinated. Rebuilt with stricter canonicalization.</li>
          <li>Auto-resolve was too aggressive on edge cases for one product line. Tightened thresholds.</li>
          <li>One enterprise customer escalated about &ldquo;AI handling our tickets.&rdquo; Built an opt-out for enterprise tier.</li>
        </ul>

        <h2 id="lessons">Lessons</h2>
        <ol>
          <li>Knowledge base quality determines everything. Invest before the AI.</li>
          <li>Disclosure and easy escalation are non-negotiable.</li>
          <li>Senior agents need to be coached into their new role.</li>
          <li>Enterprise customers may need an opt-out lane.</li>
        </ol>

        <blockquote className={QUOTE}>
          The 47% cost reduction wasn&apos;t the headline. The headline was a calmer
          support team producing better outcomes for customers. The economics followed.
        </blockquote>

        <p>See <a href="/blog/reduce-support-tickets-ai-triage">our triage architecture</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Cost?</strong> ~$80k build + $4k/month run cost. ROI in quarter two.</p>
        <p><strong>What about churn risk from AI handling support?</strong> Did not materialize when disclosure was clear and escalation easy.</p>
        <p><strong>Did the team feel threatened?</strong> Yes at first. CEO framing as &ldquo;you handle the harder, more interesting work&rdquo; calmed it.</p>
      </>
    ),
  },
  {
    slug: "case-study-ecom-personalization",
    title: "Case Study: E-com Brand Boosts Conversions With AI Personalization",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "July 10, 2026",
    excerpt:
      "How a mid-size DTC brand lifted email conversion 60% and on-site conversion 22% with AI personalization done at the right depth.",
    author: "Flowtix Team",
    tags: ["Case Study", "E-commerce", "Personalization"],
    toc: [
      { id: "context", label: "Context" },
      { id: "where-they-were", label: "Where They Started" },
      { id: "build", label: "What They Built" },
      { id: "results", label: "Results" },
      { id: "frictions", label: "Frictions" },
      { id: "lessons", label: "Lessons" },
      { id: "applicability", label: "Applicability" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="context">Context</h2>
        <p>
          A DTC home goods brand at ~$8M annual revenue. Strong product, good email
          list (180k), generic email content. Site conversion 2.1%. Email click rate
          2.4%.
        </p>

        <h2 id="where-they-were">Where They Started</h2>
        <p>
          Personalization meant <em>{`{firstName}`}</em> merge in subject lines and a
          &ldquo;recommended for you&rdquo; carousel that wasn&apos;t actually
          personalized to anyone. Standard 2022 e-com stack.
        </p>

        <h2 id="build">What They Built</h2>
        <ol>
          <li>Vector embedding of the catalog (every product as a vector).</li>
          <li>Customer profile vectors built from browse/purchase history.</li>
          <li>Email content drafted per recipient: copy + product picks.</li>
          <li>On-site recommendations replaced with real-time AI matches.</li>
          <li>Voice rules enforcing on-brand copy.</li>
        </ol>

        <h2 id="results">Results</h2>
        <ul>
          <li>Email click rate: 2.4% &rarr; 3.8% (+58%).</li>
          <li>Email conversion: +60%.</li>
          <li>On-site conversion: 2.1% &rarr; 2.6% (+22%).</li>
          <li>Revenue per email recipient: +47% over 6 months.</li>
        </ul>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">What &ldquo;Real&rdquo; Personalization Meant Here</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Subject line tuned to recipient&apos;s interest tier.</li>
            <li>&bull; Hero image swap based on style preference.</li>
            <li>&bull; Product picks computed per send, not pre-segmented.</li>
            <li>&bull; Copy rewritten in 4 voice variations (matter-of-fact, warm, design-led, value).</li>
          </ul>
        </div>

        <h2 id="frictions">Frictions</h2>
        <ul>
          <li>Initial AI copy felt generic; voice rules iterated 4x.</li>
          <li>ESP integration took 3 weeks longer than planned.</li>
          <li>Photography library was the bottleneck on hero-image personalization.</li>
        </ul>

        <h2 id="lessons">Lessons</h2>
        <ol>
          <li>Catalog and customer embeddings are the foundation; without them, &ldquo;personalization&rdquo; is theatre.</li>
          <li>Voice rules need 3&ndash;5 iterations to stop sounding AI-generated.</li>
          <li>Asset library (photos, copy variants) is part of the AI personalization stack.</li>
          <li>ESPs vary widely in personalization API maturity; check before committing.</li>
        </ol>

        <h2 id="applicability">Applicability</h2>
        <p>
          Works for: any DTC brand with 25k+ list and 200+ SKUs. Doesn&apos;t add much
          for: single-SKU brands, small lists where segments are too small for
          meaningful personalization.
        </p>

        <blockquote className={QUOTE}>
          AI personalization done right doesn&apos;t feel like a sales tactic. It feels
          like the brand knows you. The brands that build that feel earn the loyalty
          that compounds; the ones that fake it just sound creepy.
        </blockquote>

        <p>See <a href="/blog/ai-ecommerce-use-cases-2026">AI for e-commerce use cases</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Cost?</strong> ~$50k build + $3&ndash;5k/month run. Paid back in 4 months.</p>
        <p><strong>What about privacy?</strong> Customer data used per recipient for personalization. Disclosure in privacy policy. No data sharing.</p>
        <p><strong>SMS too?</strong> Yes. The same engine drives SMS personalization. Even higher ROI per message due to lower volume.</p>
      </>
    ),
  },
];
