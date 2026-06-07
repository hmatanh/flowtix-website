import type { Post } from "@/lib/posts";

const CALLOUT = "my-8 p-6 border border-amber-500/30 bg-amber-500/5 rounded-2xl";
const QUOTE = "border-l-2 border-amber-500 pl-6 my-8 text-[#bbb] italic";

export const batch10: Post[] = [
  {
    slug: "ai-augmented-operator-habits",
    title: "The AI-Augmented Operator: Daily Habits That Compound",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "9 min read",
    date: "May 29, 2026",
    excerpt:
      "Operators who use AI well develop a small set of daily habits that compound over months. Here is the practical day-shape of an AI-augmented operator in 2026.",
    author: "Flowtix Team",
    tags: ["Operator Habits", "Productivity", "AI Workflow"],
    toc: [
      { id: "habit-question", label: "The Habit Question" },
      { id: "morning", label: "Morning: The AI Brief" },
      { id: "writing", label: "Writing: Draft First, Edit Second" },
      { id: "decisions", label: "Decisions: Steelman Both Sides" },
      { id: "meetings", label: "Meetings: AI Pre and Post" },
      { id: "evening", label: "Evening: Tomorrow Drafted" },
      { id: "weekly", label: "Weekly Compound" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="habit-question">The Habit Question</h2>
        <p>
          The right question isn&apos;t &ldquo;what tools should I use?&rdquo; It&apos;s
          &ldquo;what habits do I want AI to support?&rdquo; The operators who get the
          most leverage from AI in 2026 have a small set of daily habits where AI is
          part of the workflow, not an interruption.
        </p>

        <h2 id="morning">Morning: The AI Brief</h2>
        <p>
          A 90-second morning brief that summarizes: overnight customer signals, key
          metrics, calendar context, three priorities for the day. AI assembles this
          from your tools; the operator reads, adjusts, commits.
        </p>

        <h2 id="writing">Writing: Draft First, Edit Second</h2>
        <p>
          For every routine writing task (emails, summaries, briefs), AI drafts and
          the operator edits. Writing time per task drops 60%. The quality of the
          finished writing depends on the editing.
        </p>

        <h2 id="decisions">Decisions: Steelman Both Sides</h2>
        <p>
          Before any consequential decision, ask AI to argue the strongest case for
          and against. Surfaces blind spots. Doesn&apos;t decide for you; sharpens
          your decision.
        </p>

        <h2 id="meetings">Meetings: AI Pre and Post</h2>
        <p>
          Pre-meeting: AI assembles context (last conversation, key issues, decisions
          pending). Post-meeting: AI drafts the summary and follow-ups. Operator
          reviews and sends within an hour.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Compound Effect</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; 90 minutes saved daily = 22.5 hours/month.</li>
            <li>&bull; Add better decisions via AI steel-manning.</li>
            <li>&bull; Add faster follow-ups via post-meeting AI.</li>
            <li>&bull; The operator&apos;s effective output doubles over 6 months.</li>
          </ul>
        </div>

        <h2 id="evening">Evening: Tomorrow Drafted</h2>
        <p>
          End-of-day 5-minute ritual: review what shipped, draft the next morning&apos;s
          brief, queue follow-ups. AI assists. The operator starts tomorrow with
          momentum, not chaos.
        </p>

        <h2 id="weekly">Weekly Compound</h2>
        <p>
          End of each week: AI summarizes patterns from the week&apos;s work. What
          recurred? What got dropped? What&apos;s the trajectory? Operator reviews;
          adjusts priorities for the next week.
        </p>

        <blockquote className={QUOTE}>
          The AI-augmented operator doesn&apos;t feel busier than before AI &mdash;
          they feel calmer. The boring work is offloaded; the meaningful work has
          space.
        </blockquote>

        <p>See <a href="/blog/personal-ai-stack-founders">personal AI stack for founders</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What tools?</strong> Less important than the habits. Most modern AI tools support these patterns.</p>
        <p><strong>How long to form the habits?</strong> 30 days. The first week feels weird; by week 4 it&apos;s normal.</p>
        <p><strong>What if I&apos;m not technical?</strong> The habits don&apos;t require technical skill. They require discipline.</p>
      </>
    ),
  },
  {
    slug: "meetings-after-ai",
    title: "Meetings After AI: Fewer, Shorter, Better",
    category: "Automation",
    categoryColor: "#10B981",
    readTime: "8 min read",
    date: "May 30, 2026",
    excerpt:
      "AI gives operators a real chance to fix meetings — not by replacing them but by removing the reasons most meetings exist. Here is the practical playbook.",
    author: "Flowtix Team",
    tags: ["Meetings", "Productivity", "Operations"],
    toc: [
      { id: "why-broken", label: "Why Meetings Stayed Broken" },
      { id: "what-ai-fixes", label: "What AI Fixes" },
      { id: "fewer", label: "Fewer Meetings" },
      { id: "shorter", label: "Shorter Meetings" },
      { id: "better", label: "Better Meetings" },
      { id: "rituals", label: "Replace Rituals With Async" },
      { id: "what-stays", label: "What Stays Synchronous" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-broken">Why Meetings Stayed Broken</h2>
        <p>
          For two decades, knowledge work added meetings without removing them.
          Standup, retro, sync, 1:1, all-hands, planning, kickoff &mdash; calendars
          full. Most of the content was: sharing status, gathering input, making
          decisions. AI now handles much of the first two without a meeting.
        </p>

        <h2 id="what-ai-fixes">What AI Fixes</h2>
        <ul>
          <li>Status sharing &mdash; daily AI digest beats standup.</li>
          <li>Information gathering &mdash; structured async + AI synthesis.</li>
          <li>Pre-reading &mdash; AI summary of context before any synchronous decision.</li>
          <li>Notes and follow-ups &mdash; auto-generated, auto-distributed.</li>
        </ul>

        <h2 id="fewer">Fewer Meetings</h2>
        <p>
          Replace recurring status meetings with daily AI digests. Replace
          information-gathering meetings with async polls + AI synthesis. The
          calendar empties by 30&ndash;50% with no productivity loss.
        </p>

        <h2 id="shorter">Shorter Meetings</h2>
        <p>
          The 60-minute default is laziness. Most meetings should be 25 minutes.
          Pre-reading via AI summary buys 15 minutes back. Tight agenda buys
          another 15. The 60-minute slot becomes 25 with the same outcomes.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">Meeting Audit Questions</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; What decision will this meeting produce?</li>
            <li>&bull; Could AI-summarized pre-read replace half of it?</li>
            <li>&bull; Could 60 minutes become 25?</li>
            <li>&bull; Could it be async entirely?</li>
          </ul>
        </div>

        <h2 id="better">Better Meetings</h2>
        <p>
          The meetings that remain are higher-leverage: decisions, relationship-building,
          difficult conversations. They&apos;re better because they&apos;re scarcer and
          the context is richer (AI brief, pre-read consumed).
        </p>

        <h2 id="rituals">Replace Rituals With Async</h2>
        <p>
          Daily standup &rarr; async AI-summarized morning digest. Weekly retro &rarr;
          async retro template + AI clustering. Quarterly review &rarr; async
          submissions + AI synthesis + a short synchronous decisions session.
        </p>

        <h2 id="what-stays">What Stays Synchronous</h2>
        <ul>
          <li>Difficult conversations.</li>
          <li>Brainstorming (early-stage, generative).</li>
          <li>Relationship-building.</li>
          <li>Major decisions with multiple stakeholders.</li>
          <li>Customer calls &mdash; obviously.</li>
        </ul>

        <blockquote className={QUOTE}>
          AI didn&apos;t kill the meeting. It killed the meeting that exists because
          nobody knew a better way to share information. The meetings that remain are
          worth showing up for.
        </blockquote>

        <p>See <a href="/blog/ai-augmented-operator-habits">AI-augmented operator habits</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about culture?</strong> Culture doesn&apos;t require 27 hours of meetings/week. It requires intentional moments.</p>
        <p><strong>Resistance to async?</strong> Real. Manager-led modeling fixes it &mdash; if leaders go async, the team follows.</p>
        <p><strong>What about hybrid teams?</strong> Async-first beats hybrid meetings every time.</p>
      </>
    ),
  },
  {
    slug: "personal-ai-stack-founders",
    title: "Personal AI Stack for Founders (2026 Edition)",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "May 31, 2026",
    excerpt:
      "A founder's personal AI stack is different from a company's. Here is the practical 2026 setup — tools, habits, and workflows for the founder herself.",
    author: "Flowtix Team",
    tags: ["Founder", "Personal Productivity", "AI Stack"],
    toc: [
      { id: "different-stack", label: "Why The Stack Is Different" },
      { id: "core-tools", label: "The Core Tools" },
      { id: "writing", label: "Writing Workflows" },
      { id: "thinking", label: "Thinking Out Loud With AI" },
      { id: "research", label: "Research" },
      { id: "calendar", label: "Calendar and Email" },
      { id: "privacy", label: "Privacy" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="different-stack">Why The Founder Stack Is Different</h2>
        <p>
          A company AI stack is about scaling team workflows. A founder&apos;s personal
          stack is about leveraging one human&apos;s attention. The right tools are
          different: more flexible, more private, more conversational.
        </p>

        <h2 id="core-tools">The Core Tools</h2>
        <ul>
          <li>A frontier chat model for general work (Claude, ChatGPT, or both).</li>
          <li>A second model for variety on the same prompt.</li>
          <li>An AI-augmented email client.</li>
          <li>A note-taking tool with AI search.</li>
          <li>A meeting recorder + summarizer.</li>
          <li>A reading app with AI summaries.</li>
        </ul>

        <h2 id="writing">Writing Workflows</h2>
        <p>
          Three writing flows the AI-augmented founder runs:
        </p>
        <ol>
          <li>Long emails &mdash; AI drafts from a 3-bullet brief.</li>
          <li>Strategic memos &mdash; founder outlines, AI fleshes out, founder edits.</li>
          <li>Public writing (blog, social) &mdash; founder writes, AI critiques.</li>
        </ol>

        <h2 id="thinking">Thinking Out Loud With AI</h2>
        <p>
          The highest-leverage use of AI for founders: rubber-ducking. Talk through a
          decision with the AI. Ask it to steelman the other side. Use it as a
          sparring partner.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">Founder Anti-Patterns</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Asking AI for definitive answers on people decisions.</li>
            <li>&bull; Letting AI replace your judgment on strategic calls.</li>
            <li>&bull; Outsourcing all writing &mdash; voice disappears.</li>
            <li>&bull; Subscription bloat &mdash; 12 tools, 3 used.</li>
          </ul>
        </div>

        <h2 id="research">Research</h2>
        <p>
          Quick-research workflows: AI summary of a long report, AI-assisted reading of
          a 200-page contract, AI scan of public competitor moves. 30 minutes of
          research now feels like 3 hours&apos; worth.
        </p>

        <h2 id="calendar">Calendar and Email</h2>
        <p>
          AI calendar assistant for scheduling. AI-drafted email replies. The founder
          spends meaningfully less time on inbox triage.
        </p>

        <h2 id="privacy">Privacy</h2>
        <p>
          Keep one tool that you can trust with sensitive information (founder-only
          decisions, financial details, candid hire conversations). Read terms;
          confirm no-training options; segregate accounts.
        </p>

        <blockquote className={QUOTE}>
          The founder&apos;s AI stack should make them faster on the work that&apos;s
          unique to them and free them from the work that isn&apos;t. Stop optimizing
          the rest; that&apos;s the team&apos;s job.
        </blockquote>

        <p>See <a href="/blog/ai-augmented-operator-habits">AI-augmented operator habits</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How many tools?</strong> 4&ndash;6. More is friction.</p>
        <p><strong>Total monthly cost?</strong> $80&ndash;$300 in personal subscriptions.</p>
        <p><strong>Where do I start?</strong> The chat model + email + meeting recorder. Add others when you have a specific need.</p>
      </>
    ),
  },
  {
    slug: "hiring-ai-era-new-roles",
    title: "Hiring in the AI Era: Roles That Don't Exist Yet",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "9 min read",
    date: "June 1, 2026",
    excerpt:
      "AI created new roles that don't have established job titles yet. Here are the six emerging roles every growing company will hire for in the next 18 months.",
    author: "Flowtix Team",
    tags: ["Hiring", "AI Roles", "Future of Work"],
    toc: [
      { id: "the-shift", label: "The Shift In Hiring" },
      { id: "role-1", label: "1. AI Workflow Designer" },
      { id: "role-2", label: "2. Prompt Operations Engineer" },
      { id: "role-3", label: "3. AI Evaluator" },
      { id: "role-4", label: "4. Brand Voice Operator" },
      { id: "role-5", label: "5. AI-First PM" },
      { id: "role-6", label: "6. Internal Tools Builder" },
      { id: "hiring", label: "How To Find Them" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-shift">The Shift In Hiring</h2>
        <p>
          Traditional roles (engineer, designer, marketer) still exist. New roles
          emerged at the intersections. Most don&apos;t have established titles yet.
          The companies hiring them are pulling ahead because they&apos;ve identified
          the work that needs doing before the market named it.
        </p>

        <h2 id="role-1">1. AI Workflow Designer</h2>
        <p>
          Designs workflows where AI fits. Bridges product, ops, and AI engineering.
          Often a senior PM or ops leader with technical literacy.
        </p>

        <h2 id="role-2">2. Prompt Operations Engineer</h2>
        <p>
          Treats prompts like code. Owns the eval suites, the prompt versioning, the
          regression testing. Engineer-adjacent but more focused on language than
          systems.
        </p>

        <h2 id="role-3">3. AI Evaluator</h2>
        <p>
          The QA role for AI. Builds evaluation datasets, runs regression tests, tracks
          quality over time. Often a researcher or QA professional retrained.
        </p>

        <h2 id="role-4">4. Brand Voice Operator</h2>
        <p>
          Owns and enforces brand voice across AI-generated content. Sits between
          marketing and content ops. The new editor-in-chief role.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">Why These Roles Matter</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; AI quality is a function of these roles.</li>
            <li>&bull; They sit at the boundaries traditional roles miss.</li>
            <li>&bull; Hiring them early is a competitive advantage.</li>
            <li>&bull; The market hasn&apos;t standardized titles yet &mdash; you can attract underpriced talent.</li>
          </ul>
        </div>

        <h2 id="role-5">5. AI-First PM</h2>
        <p>
          PM whose first instinct is &ldquo;should AI handle this?&rdquo; Not a
          technical AI engineer; a product manager who understands AI capabilities
          deeply enough to design with them.
        </p>

        <h2 id="role-6">6. Internal Tools Builder</h2>
        <p>
          Builds the internal AI tools that other teams use. Modern back-office hero.
          Combines low-code skill, AI integration ability, and operational intuition.
        </p>

        <h2 id="hiring">How To Find Them</h2>
        <p>
          These roles often live inside other titles right now. Look for: PMs who
          ship AI features personally, marketers who&apos;ve built voice systems,
          engineers who write content, ops leaders who&apos;ve automated their own
          workflows. They&apos;re internal hires waiting to happen.
        </p>

        <blockquote className={QUOTE}>
          Hiring for the AI era isn&apos;t about hiring AI engineers. It&apos;s about
          hiring the boundary-spanners who connect AI capability to actual business
          outcomes. Those people are rare and they don&apos;t have one job title.
        </blockquote>

        <p>See <a href="/blog/ai-first-org-chart">what an AI-first org chart actually looks like</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about &ldquo;Head of AI&rdquo;?</strong> Often a vanity title. The work is done at the role level above.</p>
        <p><strong>Where to source?</strong> Internal first, then specialized communities, then mainstream channels.</p>
        <p><strong>Compensation?</strong> Premium &mdash; these are scarce skills. 20&ndash;30% above traditional equivalent.</p>
      </>
    ),
  },
  {
    slug: "ai-first-org-chart",
    title: "What an \"AI-First\" Org Chart Actually Looks Like",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "9 min read",
    date: "June 2, 2026",
    excerpt:
      "&ldquo;AI-first&rdquo; is a buzzword without a clear shape. Here is the practical org chart for an AI-first 50&ndash;200 person company in 2026.",
    author: "Flowtix Team",
    tags: ["Org Design", "AI-First", "Leadership"],
    toc: [
      { id: "buzzword", label: "The Buzzword Problem" },
      { id: "shape", label: "What &ldquo;AI-First&rdquo; Means In Org Design" },
      { id: "smaller", label: "Smaller Functions" },
      { id: "cross", label: "Cross-Functional AI Ops" },
      { id: "engineering", label: "Engineering Reshape" },
      { id: "creative", label: "Creative Functions" },
      { id: "back-office", label: "Back-Office Reduction" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="buzzword">The Buzzword Problem</h2>
        <p>
          &ldquo;AI-first&rdquo; is used by companies that haven&apos;t changed their
          org chart since 2020 and by companies that have rebuilt everything. The
          term is meaningless without specifics.
        </p>

        <h2 id="shape">What &ldquo;AI-First&rdquo; Means In Org Design</h2>
        <p>
          A real AI-first company has four structural traits:
        </p>
        <ol>
          <li>Smaller functional teams than industry average.</li>
          <li>A cross-functional AI operations group with real authority.</li>
          <li>Engineering organized around AI integration as a first-class concern.</li>
          <li>Creative functions structured for AI-augmented production.</li>
        </ol>

        <h2 id="smaller">Smaller Functions Than Industry Average</h2>
        <p>
          Marketing, support, sales ops, content teams: 40&ndash;60% smaller than
          equivalent non-AI-first companies. Not because people are replaced, but
          because each function can produce more per head.
        </p>

        <h2 id="cross">Cross-Functional AI Operations</h2>
        <p>
          A 3&ndash;8 person team that owns: the prompt library, the eval suites, the
          vendor relationships, the change management, the governance. Reports to
          COO or CEO, not engineering.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">AI Ops Team Composition</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Lead (operator background).</li>
            <li>&bull; AI workflow designers (1&ndash;3).</li>
            <li>&bull; Prompt operations engineer.</li>
            <li>&bull; AI evaluator.</li>
            <li>&bull; Part-time legal/compliance liaison.</li>
          </ul>
        </div>

        <h2 id="engineering">Engineering Reshape</h2>
        <p>
          Traditional engineering teams still exist for the product. Adds: AI platform
          team (the layer everything builds on), ML engineers for specialized models,
          tighter relationships with the AI ops team for shared infrastructure.
        </p>

        <h2 id="creative">Creative Functions Structured for Augmentation</h2>
        <p>
          Content, design, marketing teams shift toward direction-and-review roles.
          Production capacity per person 3&ndash;5x. Hiring profile shifts toward editors,
          art directors, strategists.
        </p>

        <h2 id="back-office">Back-Office Reduction</h2>
        <p>
          HR, finance, legal ops all benefit from AI. These teams shrink in headcount
          and grow in strategic contribution. The transactional work disappears; the
          advisory work expands.
        </p>

        <blockquote className={QUOTE}>
          An AI-first org isn&apos;t a company with an AI department. It&apos;s a
          company whose every department has been redesigned around what AI now
          handles. The shape is different by year three; the badge isn&apos;t.
        </blockquote>

        <p>See <a href="/blog/hiring-ai-era-new-roles">hiring in the AI era</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about CTO?</strong> Same role, expanded scope to include AI platform.</p>
        <p><strong>Chief AI Officer?</strong> For larger orgs (500+) yes. For mid-size, redundant.</p>
        <p><strong>How long to transition?</strong> 18&ndash;36 months for an existing company. Greenfield orgs can start AI-first from day one.</p>
      </>
    ),
  },
  {
    slug: "privacy-ai-founder-checklist",
    title: "Privacy and AI: A Founder's Practical Checklist",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "June 3, 2026",
    excerpt:
      "Privacy in AI is no longer theoretical — laws are in place and enforcement is happening. Here is the practical founder's checklist for staying clean.",
    author: "Flowtix Team",
    tags: ["Privacy", "AI Governance", "Compliance"],
    toc: [
      { id: "state", label: "Where We Are" },
      { id: "data-flow", label: "Map Your Data Flows" },
      { id: "vendors", label: "Vendor Due Diligence" },
      { id: "consent", label: "Consent and Disclosure" },
      { id: "minimization", label: "Data Minimization" },
      { id: "incident", label: "Incident Response" },
      { id: "compliance", label: "Specific Frameworks" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="state">Where We Are In 2026</h2>
        <p>
          GDPR, CCPA, the EU AI Act, and a growing patchwork of US state AI laws
          create real privacy obligations for any company deploying AI. Enforcement
          actions have started. Founders who treat this as &ldquo;legal&apos;s problem&rdquo;
          accumulate liability.
        </p>

        <h2 id="data-flow">Map Your Data Flows</h2>
        <p>
          Document every place customer data flows: what data, where it goes, how
          long it&apos;s retained, who can access it. AI vendors are a new addition
          to most flow maps and many founders haven&apos;t updated them.
        </p>

        <h2 id="vendors">Vendor Due Diligence</h2>
        <p>
          Every AI vendor in your stack needs:
        </p>
        <ul>
          <li>A signed DPA (data processing agreement) or BAA where applicable.</li>
          <li>No-training opt-out (in writing).</li>
          <li>Sub-processor list (who do they share with?).</li>
          <li>Breach notification commitment.</li>
          <li>SOC 2 Type II (for B2B).</li>
        </ul>

        <h2 id="consent">Consent and Disclosure</h2>
        <p>
          Disclose AI use to customers and users. The bar in 2026: privacy policy
          mentions AI, terms of service explain the model providers (or categories),
          relevant UI moments disclose AI involvement.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Quarterly Privacy Audit</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Data flow map current?</li>
            <li>&bull; All vendors have current DPAs?</li>
            <li>&bull; Privacy policy reflects current AI use?</li>
            <li>&bull; Retention schedules followed?</li>
            <li>&bull; Subject access requests processed in time?</li>
          </ul>
        </div>

        <h2 id="minimization">Data Minimization</h2>
        <p>
          The most overlooked principle: only send the AI provider the data they need.
          Strip PII before AI calls when possible. Mask names, addresses, identifiers
          unless the use case requires them.
        </p>

        <h2 id="incident">Incident Response</h2>
        <p>
          Pre-plan: who declares an AI privacy incident, who notifies regulators,
          who notifies customers, what&apos;s the timeline. Most jurisdictions
          require 72-hour notification on serious breaches.
        </p>

        <h2 id="compliance">Specific Frameworks</h2>
        <ul>
          <li>GDPR (EU customers): Article 22 (automated decisions), DPA, retention.</li>
          <li>CCPA/CPRA (CA): consumer rights, opt-out of sale, sensitive data.</li>
          <li>EU AI Act: risk classification, transparency, prohibited uses.</li>
          <li>HIPAA (healthcare): BAA, PHI handling.</li>
          <li>GLBA (financial): customer information safeguards.</li>
        </ul>

        <blockquote className={QUOTE}>
          Privacy in AI isn&apos;t a checklist you complete once. It&apos;s a discipline
          you maintain. The founders who build the discipline now spend less on
          compliance crisis-management later.
        </blockquote>

        <p>See <a href="/blog/ai-security-non-engineers">AI security basics</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Do we need a DPO?</strong> Required by GDPR if processing certain categories at scale. Otherwise advisable.</p>
        <p><strong>Privacy tool?</strong> Helpful at scale. Manual works under ~30 vendors.</p>
        <p><strong>Cookies?</strong> Separate compliance regime. Don&apos;t conflate.</p>
      </>
    ),
  },
  {
    slug: "ai-security-non-engineers",
    title: "AI Security Basics for Non-Engineers",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "June 4, 2026",
    excerpt:
      "AI security isn't only an engineering concern. Here is the practical guide for non-engineers — what to worry about, what to skip, and what to enforce.",
    author: "Flowtix Team",
    tags: ["AI Security", "Risk", "Governance"],
    toc: [
      { id: "real-risks", label: "The Real Risks" },
      { id: "data-leak", label: "Data Leakage Through Prompts" },
      { id: "prompt-injection", label: "Prompt Injection" },
      { id: "model-output", label: "Model Output Misuse" },
      { id: "credentials", label: "Credentials and Access" },
      { id: "policies", label: "Practical Policies" },
      { id: "training", label: "Training" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="real-risks">The Real Risks</h2>
        <p>
          AI security in 2026 has four practical risks that every operator should
          understand:
        </p>
        <ol>
          <li>Employees pasting sensitive data into public AI tools.</li>
          <li>Prompt injection attacks on your AI products.</li>
          <li>AI outputs that include harmful or wrong information.</li>
          <li>Stolen AI provider credentials.</li>
        </ol>

        <h2 id="data-leak">Data Leakage Through Prompts</h2>
        <p>
          The most common AI security incident in 2024&ndash;2025: an employee pasted a
          confidential document into ChatGPT to summarize it. The data is now in
          OpenAI&apos;s training pipeline (or at least their logs). The fix: company
          ChatGPT/Claude accounts with no-training terms, and policies.
        </p>

        <h2 id="prompt-injection">Prompt Injection</h2>
        <p>
          An attacker puts malicious instructions in content the AI reads (an email,
          a web page, a document). The AI follows the attacker&apos;s instructions
          instead of yours. Defenses: don&apos;t blindly trust AI output, validate
          before acting on AI suggestions, sandbox AI tool use.
        </p>

        <h2 id="model-output">Model Output Misuse</h2>
        <p>
          AI generates content that&apos;s harmful, biased, or wrong, and your
          system publishes it. The fix: human review on customer-facing outputs,
          structured outputs validated before consumption, refusal-friendly system
          prompts.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Non-Engineer&apos;s AI Security Policy</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Company-issued AI accounts only for work data.</li>
            <li>&bull; Never paste customer PII or credentials into any AI tool.</li>
            <li>&bull; Treat AI output as a draft, not as truth.</li>
            <li>&bull; Report unexpected AI behavior to a designated owner.</li>
          </ul>
        </div>

        <h2 id="credentials">Credentials and Access</h2>
        <p>
          AI provider API keys should:
        </p>
        <ul>
          <li>Live only in environment variables / secret managers.</li>
          <li>Be rotated quarterly.</li>
          <li>Be scoped to least privilege.</li>
          <li>Be revoked when employees leave.</li>
        </ul>

        <h2 id="policies">Practical Policies</h2>
        <p>
          Three policies every company needs:
        </p>
        <ol>
          <li>AI Acceptable Use Policy &mdash; what data can/can&apos;t go into AI tools.</li>
          <li>AI Vendor Approval Process &mdash; new AI tools need security review.</li>
          <li>AI Incident Response &mdash; who handles AI-related security incidents.</li>
        </ol>

        <h2 id="training">Training</h2>
        <p>
          15-minute annual training for every employee: what AI can and can&apos;t do
          with company data, examples of bad patterns, what to do if you&apos;re
          unsure. Higher-risk roles get more depth.
        </p>

        <blockquote className={QUOTE}>
          AI security is the new email security. Most incidents happen because of
          everyday user mistakes, not sophisticated attacks. The defense is
          unglamorous: policies, training, and the right defaults.
        </blockquote>

        <p>See <a href="/blog/privacy-ai-founder-checklist">privacy AI founder checklist</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Do we need a CISO for this?</strong> Below ~200 people, no. The AI champion can handle it with policies.</p>
        <p><strong>Tooling?</strong> Useful at scale. Manual works under ~100 employees.</p>
        <p><strong>Insurance?</strong> Cyber policies now include AI exclusions; read the small print.</p>
      </>
    ),
  },
  {
    slug: "when-ai-should-stay-out",
    title: "When AI Should Stay Out of the Loop (Boundary Cases)",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "June 5, 2026",
    excerpt:
      "Not every workflow benefits from AI. Here is the practical map of where to keep humans front and center — and why these boundary cases matter.",
    author: "Flowtix Team",
    tags: ["AI Limits", "Boundaries", "Ethics"],
    toc: [
      { id: "frame", label: "The Frame" },
      { id: "high-stakes", label: "High-Stakes Decisions" },
      { id: "creative-core", label: "Creative Core" },
      { id: "emotional", label: "Emotional Conversations" },
      { id: "ambiguous", label: "Ambiguous Authority" },
      { id: "first-touch", label: "Brand-Critical First Touches" },
      { id: "compliance", label: "Compliance-Sensitive" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="frame">The Frame</h2>
        <p>
          Knowing where not to use AI is as important as knowing where to use it. The
          boundary cases below are not absolutes &mdash; they&apos;re defaults that
          can be revisited as AI matures. But in 2026, keeping humans front and center
          in these places protects trust and outcomes.
        </p>

        <h2 id="high-stakes">High-Stakes Decisions Affecting People</h2>
        <p>
          Hiring decisions. Termination conversations. Promotion calls. Loan
          approvals. Medical decisions. AI can analyze; humans must decide and
          deliver. The legal and ethical risk of automating these is large.
        </p>

        <h2 id="creative-core">The Creative Core Of Your Brand</h2>
        <p>
          The voice. The point of view. The thing that makes the brand distinct. AI
          can produce in support of this; AI cannot define it. Brands that let AI
          define them flatten.
        </p>

        <h2 id="emotional">Emotional Conversations</h2>
        <p>
          A customer who&apos;s upset. A team member who&apos;s struggling. A
          partner with bad news. Humans are required. AI can help prepare; AI cannot
          be present.
        </p>

        <h2 id="ambiguous">Ambiguous Authority</h2>
        <p>
          Anywhere a person making the decision could later be questioned about who
          decided. &ldquo;The AI did it&rdquo; is not an accountable answer.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Accountability Test</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; If this decision turned out badly, who&apos;s accountable?</li>
            <li>&bull; If &ldquo;the AI,&rdquo; that&apos;s the wrong place for AI.</li>
            <li>&bull; If a named human, AI can assist.</li>
          </ul>
        </div>

        <h2 id="first-touch">Brand-Critical First Touches</h2>
        <p>
          The first interaction a high-value customer or prospect has with your brand.
          AI is everywhere in the funnel; the first hello to a major buyer is one
          place to spend human time.
        </p>

        <h2 id="compliance">Compliance-Sensitive Outputs</h2>
        <p>
          Anything that could later be entered in a regulator&apos;s file: financial
          advice, medical advice, legal opinions, hiring rationales. Human review is
          not optional.
        </p>

        <blockquote className={QUOTE}>
          The AI maturity of a company is visible in where they&apos;ve deliberately
          kept AI out. The companies that deploy AI everywhere look impressive in week
          one and run into walls by month six. The boundaries are the discipline.
        </blockquote>

        <p>See <a href="/blog/ai-governance-smb-framework">AI governance for SMBs</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Will the boundaries move?</strong> Yes. Plan to revisit annually.</p>
        <p><strong>What about AI-assisted hiring?</strong> AI for sorting, scheduling, interview notes &mdash; fine. AI for decisions &mdash; no.</p>
        <p><strong>Customer-facing AI everywhere?</strong> No. Reserve some human moments deliberately.</p>
      </>
    ),
  },
  {
    slug: "measuring-ai-team-adoption",
    title: "Measuring Team Adoption of AI (Without Surveillance)",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "June 6, 2026",
    excerpt:
      "Tracking AI adoption is necessary; surveillance is destructive. Here is how to measure adoption in a way that builds trust instead of breaking it.",
    author: "Flowtix Team",
    tags: ["AI Adoption", "Metrics", "Trust"],
    toc: [
      { id: "two-pulls", label: "The Two Pulls" },
      { id: "right-metrics", label: "The Right Metrics" },
      { id: "wrong-metrics", label: "Wrong Metrics" },
      { id: "self-report", label: "Self-Reporting" },
      { id: "outcome-based", label: "Outcome-Based Tracking" },
      { id: "transparency", label: "Transparency Builds Trust" },
      { id: "culture", label: "Culture Around Adoption" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="two-pulls">The Two Pulls</h2>
        <p>
          Leadership wants visibility on AI adoption. Employees fear surveillance.
          Both concerns are legitimate. The framework below balances them: measure
          what matters, transparently, without invasive monitoring.
        </p>

        <h2 id="right-metrics">The Right Metrics</h2>
        <ul>
          <li>Number of workflows where AI is in regular use, by team.</li>
          <li>Outcomes on those workflows (time saved, errors reduced, output quality).</li>
          <li>Self-reported AI usage in monthly surveys.</li>
          <li>Aggregate spend on AI tools (a proxy for usage).</li>
          <li>Internal champion engagement (who&apos;s helping others adopt).</li>
        </ul>

        <h2 id="wrong-metrics">Wrong Metrics</h2>
        <ul>
          <li>Per-employee prompt counts.</li>
          <li>Screen recording of AI tool usage.</li>
          <li>Keystroke logging.</li>
          <li>Anything that looks at individual employee AI behavior.</li>
        </ul>
        <p>
          The wrong metrics produce the wrong incentives: employees who feel watched
          stop experimenting. Adoption craters precisely because you&apos;re measuring
          it.
        </p>

        <h2 id="self-report">Self-Reporting</h2>
        <p>
          Monthly anonymous survey: where did AI help this month? Where did it hurt?
          What&apos;s missing? Aggregate the answers. Use them for product decisions,
          not for performance management.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Adoption Dashboard</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Workflows in production per team.</li>
            <li>&bull; Quarterly outcome metrics (vs baseline).</li>
            <li>&bull; Monthly satisfaction survey.</li>
            <li>&bull; Champion network engagement.</li>
            <li>&bull; Tool spend efficiency.</li>
          </ul>
        </div>

        <h2 id="outcome-based">Outcome-Based Tracking</h2>
        <p>
          Track outcomes per workflow, not behaviors per person. If support resolution
          time dropped 60%, that&apos;s the metric. Whether agent X used AI 47 times
          or 4,700 times doesn&apos;t matter.
        </p>

        <h2 id="transparency">Transparency Builds Trust</h2>
        <p>
          Share what you&apos;re tracking and why. Publish the survey results back to
          the team. Demonstrate that the data informs product, not performance review.
          Trust compounds.
        </p>

        <h2 id="culture">Culture Around Adoption</h2>
        <p>
          The cultural moves that drive adoption: celebrating wins openly, creating
          space to share AI experiments that didn&apos;t work, leadership using AI
          visibly, removing punitive metrics. Adoption follows culture.
        </p>

        <blockquote className={QUOTE}>
          Surveillance kills adoption. Visibility helps it. The difference is whether
          the measurement is at the individual level (don&apos;t) or the workflow
          level (do).
        </blockquote>

        <p>See <a href="/blog/ai-change-management">AI change management</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What if someone refuses to use AI?</strong> Fine, as long as the work gets done. Forced adoption fails.</p>
        <p><strong>Should adoption be in performance reviews?</strong> No. Outcomes can be; behaviors should not.</p>
        <p><strong>Who owns adoption metrics?</strong> The AI champion, reporting to the CEO.</p>
      </>
    ),
  },
  {
    slug: "five-year-ai-roadmap",
    title: "The Five-Year AI Roadmap for a Growing Business",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "10 min read",
    date: "June 7, 2026",
    excerpt:
      "Most AI roadmaps are 18-month tactics dressed as strategy. Here is what a real five-year AI roadmap looks like — phased, opinionated, and built to last.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Roadmap", "Long-Term Planning"],
    toc: [
      { id: "why-5", label: "Why Five Years Matters" },
      { id: "year-1", label: "Year 1: Foundation" },
      { id: "year-2", label: "Year 2: Production" },
      { id: "year-3", label: "Year 3: Scale" },
      { id: "year-4", label: "Year 4: Differentiation" },
      { id: "year-5", label: "Year 5: Strategic Position" },
      { id: "uncertainty", label: "Planning Under Uncertainty" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-5">Why Five Years Matters For AI</h2>
        <p>
          Eighteen-month plans don&apos;t cover the cost of the foundational
          investments AI requires. Five-year horizons force you to think about: the
          data infrastructure you need, the team you need, the strategic position you
          want. The plan is a living document, but the horizon matters.
        </p>

        <h2 id="year-1">Year 1: Foundation</h2>
        <p>
          Goals: ship 2&ndash;3 production AI workflows. Establish the AI champion role.
          Stand up basic governance. Build the initial brand voice rules. Pick the
          stack.
        </p>
        <p>
          Avoid: ambitious internal platforms before you have shipped customer use
          cases. Don&apos;t build infrastructure for a scale you haven&apos;t hit.
        </p>

        <h2 id="year-2">Year 2: Production</h2>
        <p>
          Goals: 8&ndash;15 AI workflows in production. Eval suite running. AI ops team
          formed. Data infrastructure mature. Privacy/compliance fully documented.
        </p>
        <p>
          Avoid: tool sprawl. Consolidate vendors. Pick the platform you&apos;ll bet
          on.
        </p>

        <h2 id="year-3">Year 3: Scale</h2>
        <p>
          Goals: AI embedded in every functional team&apos;s workflow. Internal
          platform mature enough that new use cases ship in weeks, not months. Brand
          system fully AI-aware. First-mover wins becoming permanent advantages.
        </p>
        <p>
          Avoid: complacency. The platform that won year 3 is the legacy of year 5.
          Keep options open.
        </p>

        <div className={CALLOUT}>
          <div className="text-label text-amber-400 mb-3">The Five-Year Arc</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Y1 Foundation &mdash; ship something.</li>
            <li>&bull; Y2 Production &mdash; scale to many.</li>
            <li>&bull; Y3 Scale &mdash; embed in every workflow.</li>
            <li>&bull; Y4 Differentiation &mdash; build moats.</li>
            <li>&bull; Y5 Strategic position &mdash; own the category.</li>
          </ul>
        </div>

        <h2 id="year-4">Year 4: Differentiation</h2>
        <p>
          Goals: AI moats specific to your business &mdash; proprietary data,
          fine-tuned models, unique workflows. The off-the-shelf capability is a
          commodity by year 4; your differentiation is what you&apos;ve built on top.
        </p>
        <p>
          Avoid: building moats prematurely. Premature optimization wastes year 1&ndash;3
          investment.
        </p>

        <h2 id="year-5">Year 5: Strategic Position</h2>
        <p>
          Goals: your AI capability is part of the company&apos;s competitive identity.
          You attract talent because of it. Customers expect it. Competitors struggle
          to catch up.
        </p>

        <h2 id="uncertainty">Planning Under Uncertainty</h2>
        <p>
          AI itself is changing fast. The roadmap is directional, not prescriptive.
          Revisit annually. Keep options open on vendors, models, and architectures.
          Bet on what&apos;s slow-changing: your customers&apos; problems, your
          team&apos;s culture, your data assets.
        </p>

        <blockquote className={QUOTE}>
          A five-year AI roadmap doesn&apos;t predict what AI will do. It predicts what
          your company will become if you take AI seriously for five years. The
          discipline is the difference.
        </blockquote>

        <p>See <a href="/blog/ai-strategy-first-time-operators">AI strategy for first-time operators</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What if AI capabilities outpace the plan?</strong> Update the plan. The arc holds; the specifics flex.</p>
        <p><strong>What if AI capabilities stall?</strong> The foundational investments still pay off &mdash; data, voice systems, governance.</p>
        <p><strong>When to review?</strong> Annually for the long view, quarterly for the next year&apos;s details.</p>
      </>
    ),
  },
];
