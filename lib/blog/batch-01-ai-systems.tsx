import type { Post } from "@/lib/posts";

export const batch1: Post[] = [
  {
    slug: "ai-implementation-roadmap-small-business",
    title: "The AI Implementation Roadmap for Small Businesses (Step by Step)",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "8 min read",
    date: "May 22, 2026",
    excerpt:
      "Most SMB AI projects stall at the demo stage. This step-by-step roadmap shows you how to go from idea to live system in under 90 days.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Implementation", "SMB"],
    toc: [
      { id: "why-roadmap", label: "Why You Need a Roadmap" },
      { id: "phase-discovery", label: "Phase 1: Discovery" },
      { id: "phase-scope", label: "Phase 2: Scope" },
      { id: "phase-build", label: "Phase 3: Build" },
      { id: "phase-adopt", label: "Phase 4: Adoption" },
      { id: "phase-measure", label: "Phase 5: Measurement" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-roadmap">Why You Need a Real AI Implementation Roadmap</h2>
        <p>
          Most small businesses approach AI in the same broken way: somebody on the team
          watches a Twitter demo, gets excited, signs up for a tool, and three weeks later
          everyone has quietly stopped using it. The AI implementation roadmap below
          exists because that pattern repeats in nine out of ten organizations we audit.
        </p>
        <p>
          An <strong>AI implementation roadmap</strong> is not a Gantt chart. It is a
          sequence of forced decisions that prevents you from skipping the boring
          high-leverage work — problem framing, scoping, adoption planning — in favor of
          the fun work, which is shipping prompts.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• A real AI roadmap is five phases, not five tools.</li>
            <li>• Discovery and scoping take 30% of your timeline — and 80% of your outcome.</li>
            <li>• Adoption planning starts before you write a single line of code.</li>
            <li>• Measurement requires a baseline; gather it before launch, not after.</li>
          </ul>
        </div>

        <h2 id="phase-discovery">Phase 1: Discovery (Weeks 1–2)</h2>
        <p>
          Discovery is not "what would be cool to build." It is "what is the most
          expensive, repetitive, error-prone thing this business does, measured in
          dollars and hours?"
        </p>
        <p>
          Spend two weeks shadowing the operators. Quote, support, sales, ops — wherever
          your team is bleeding time. Document the top five candidate workflows. For each
          one, attach a real number: <em>this costs us X hours/week at Y$/hour</em>.
        </p>
        <p>
          When you finish, you should have a one-page document with five rows. If you
          cannot quantify a row, it does not belong on the list. This is the single
          biggest reason{" "}
          <a href="/blog/why-most-ai-implementations-fail">most AI implementations fail</a>:
          they target problems no one can value.
        </p>

        <h2 id="phase-scope">Phase 2: Scope (Week 3)</h2>
        <p>
          From your five candidates, pick exactly one. Not three. Not "we'll do these in
          parallel." One workflow, fully owned, with a measurable target.
        </p>
        <p>The scope document should answer six questions:</p>
        <ol>
          <li>What is the input the AI receives?</li>
          <li>What is the output the AI produces?</li>
          <li>Who reviews the output before it goes live (the human-in-the-loop)?</li>
          <li>What is the failure path when the AI is uncertain?</li>
          <li>Where does the data live, and who owns it?</li>
          <li>What KPI defines "this is working"?</li>
        </ol>
        <p>
          If you cannot answer all six in under an hour, the workflow is not scoped
          tightly enough. Cut it down.
        </p>

        <h2 id="phase-build">Phase 3: Build (Weeks 4–7)</h2>
        <p>
          With a tight scope, build is the easy part. Modern AI infrastructure —{" "}
          <a href="https://www.anthropic.com" target="_blank" rel="noopener">
            Claude
          </a>
          , <a href="https://platform.openai.com" target="_blank" rel="noopener">OpenAI</a>,
          <a href="https://vercel.com" target="_blank" rel="noopener"> Vercel</a> — has
          collapsed what used to be a six-month ML project into a four-week build.
        </p>
        <p>
          Build in three layers: data layer (where context lives), agent layer (where
          decisions happen), and interface layer (where humans interact). The interface
          layer is where most teams under-invest, and where most adoption is won or lost.
          For a deeper dive on this trade-off see{" "}
          <a href="/blog/design-first-ai-systems">our design-first article</a>.
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The build phase is the shortest phase in a well-scoped AI project. If yours is
          the longest, the problem is upstream — you under-scoped, or you under-discovered.
        </blockquote>

        <h2 id="phase-adopt">Phase 4: Adoption (Weeks 7–10)</h2>
        <p>
          Adoption is a design problem, a communications problem, and a management
          problem. It is almost never a technology problem.
        </p>
        <p>The adoption plan should include:</p>
        <ul>
          <li>One named owner accountable for usage rates</li>
          <li>Onboarding sessions, recorded, with screen-by-screen walkthroughs</li>
          <li>A weekly review of "Where did the AI get it wrong?" — celebrated, not hidden</li>
          <li>A clear escalation path when the system surprises someone</li>
        </ul>
        <p>
          Adoption rarely exceeds 60–70% in the first quarter even with strong design. If
          your <a href="/blog/ai-roi-how-to-measure">ROI math</a> requires 100% adoption,
          rebuild the math.
        </p>

        <h2 id="phase-measure">Phase 5: Measurement (Ongoing)</h2>
        <p>
          Measurement only works if you measured the baseline before launch. If you did
          not, you cannot prove ROI — only assert it. Capture the four numbers in your
          Phase 1 quantification, then measure them again at week 6, week 12, and week 26.
        </p>
        <p>
          Anything &gt;3x return on the system cost in the first 12 months is a strong
          outcome for an SMB AI project. Anything &lt;1.5x means the system is technically
          working but operationally failing — usually an adoption issue. Talk to us about
          your <a href="/services/">AI systems engagement</a> if you need an outside read.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <p>
          <strong>How long does this roadmap take end to end?</strong> 10–12 weeks for the
          first workflow. Subsequent workflows often run in 4–6 weeks because the
          infrastructure exists.
        </p>
        <p>
          <strong>What if my team has no AI experience?</strong> Phase 1 and Phase 2 can
          (and should) be done without any AI expertise. They are operational discovery,
          not technical work.
        </p>
        <p>
          <strong>Do I need a dedicated AI hire?</strong> Not for the first project. You
          need a senior operator who owns the workflow. Talent comes after proof.
        </p>
        <p>
          <strong>What's the most common reason this roadmap fails?</strong> Skipping
          Phase 1. Teams that start at Phase 3 because "we already know what we want to
          build" produce systems no one uses. Reach us at{" "}
          <a href="/contact/">flowtix.ai/contact</a> if you want a roadmap review.
        </p>
      </>
    ),
  },
  {
    slug: "ai-pilot-project-checklist",
    title: "AI Pilot Project Checklist: 12 Items Before You Hire a Vendor",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "Use this 12-item AI pilot project checklist before signing any vendor contract. It catches the issues that quietly sink most first projects.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Vendor Selection", "Pilot"],
    toc: [
      { id: "why-checklist", label: "Why a Checklist Beats a Gut Call" },
      { id: "the-12", label: "The 12 Items" },
      { id: "scoring", label: "Scoring Your Project" },
      { id: "red-flags", label: "Red Flags to Walk Away From" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-checklist">Why an AI Pilot Project Checklist Beats a Gut Call</h2>
        <p>
          The first AI pilot project sets the tone for everything that follows in the
          organization. A pilot that works builds momentum, a budget, and a roster of
          internal champions. A pilot that flops poisons the well for two years.
        </p>
        <p>
          The <strong>AI pilot project checklist</strong> below exists because the
          difference between a pilot that ships and one that quietly dies is rarely
          technical. It is procedural. Every item below maps to a specific failure mode
          we have personally seen kill a project.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• A pilot needs a single named owner and a single named metric.</li>
            <li>• Data access and approval should be confirmed in writing before kickoff.</li>
            <li>• Adoption planning must start in week one, not at launch.</li>
            <li>• A "we will see how it goes" pilot has already failed.</li>
          </ul>
        </div>

        <h2 id="the-12">The 12-Item Checklist</h2>

        <h3>1. Single named owner</h3>
        <p>
          One person inside your org owns the pilot end-to-end. Not a committee. Not "the
          ops team." A name and a calendar.
        </p>

        <h3>2. Single primary metric</h3>
        <p>
          What number must move for this pilot to be called a success? Response time,
          conversion rate, hours saved. One metric. If it is two, you have two pilots.
        </p>

        <h3>3. Quantified problem cost</h3>
        <p>
          The problem the pilot solves costs the business $X per month, today. Not
          "feels expensive." A specific number. If you cannot produce one, you are not
          ready — see our{" "}
          <a href="/blog/ai-roi-how-to-measure">ROI measurement guide</a> for the formulas.
        </p>

        <h3>4. Decision-maker pre-aligned</h3>
        <p>
          The person who will approve the rollout has agreed in writing to the success
          criteria. Surprises at the end of a pilot are the number-one reason promising
          projects die in the boardroom.
        </p>

        <h3>5. Data access confirmed in writing</h3>
        <p>
          The data the AI needs — CRM exports, ticket logs, transcripts — is approved by
          IT, legal, and the data owner. In writing. Before kickoff. Two months of vendor
          time has been wasted on "we are waiting on access" more times than we can count.
        </p>

        <h3>6. Privacy and security review scheduled</h3>
        <p>
          Schedule the review in week one, not week eight. Even a lightweight review can
          take 4–6 weeks. Don't let it become the critical path.
        </p>

        <h3>7. Pilot timeline less than 90 days</h3>
        <p>
          Pilots longer than 90 days lose executive attention. If your scope cannot fit in
          90 days, your scope is too big. Cut it.
        </p>

        <h3>8. Budget defined and approved</h3>
        <p>
          Capped budget, approved by the finance owner. Pilots with "we'll figure out
          billing later" become unhappy conversations later.
        </p>

        <h3>9. Adoption plan drafted</h3>
        <p>
          How will the people who use the system know it exists, learn to use it, and
          give feedback? See our{" "}
          <a href="/blog/why-most-ai-implementations-fail">implementation failure analysis</a>{" "}
          for why this is decisive.
        </p>

        <h3>10. Rollback path defined</h3>
        <p>
          What happens if the AI gets it wrong in a customer-facing way? Who turns it off?
          How fast? This question alone reveals whether your team is ready.
        </p>

        <h3>11. Vendor references checked</h3>
        <p>
          Two references from comparable-sized companies, both on a call, both asked the
          same five questions. Vendor case studies are a starting point, not an ending one.
        </p>

        <h3>12. Communication cadence locked</h3>
        <p>
          Weekly 30-minute review with vendor + internal owner. Standing meeting on the
          calendar before kickoff. Not "we'll sync as needed."
        </p>

        <h2 id="scoring">Scoring Your Project</h2>
        <p>
          Count how many of the 12 items you can confirm today, without asking anyone
          else. 10–12 means you are ready. 7–9 means you have homework. Below 7 means
          starting a pilot now will burn 90 days you can't get back.
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          Vendors are rarely the limiting factor in a first AI pilot. The org's
          readiness is. The checklist exists to surface that truth before money moves.
        </blockquote>

        <h2 id="red-flags">Red Flags to Walk Away From</h2>
        <ul>
          <li>The vendor cannot describe their last failed deployment honestly</li>
          <li>The vendor wants to skip discovery because they "know your industry"</li>
          <li>The proposal has no rollback or error-handling section</li>
          <li>References will not get on a live call</li>
          <li>The contract has no acceptance criteria — only deliverables</li>
        </ul>
        <p>
          For a fuller treatment of vendor evaluation see our companion piece on{" "}
          <a href="/blog/ai-vendor-selection-questions">vendor selection questions</a>{" "}
          and reach out via <a href="/contact/">our contact form</a> if you want a
          second pair of eyes on a proposal.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Is a pilot the same as a proof-of-concept?</strong> No. A POC validates
          feasibility; a pilot validates value. POCs end with a demo. Pilots end with a
          metric.
        </p>
        <p>
          <strong>How small can a pilot be?</strong> Small enough that one team feels the
          impact. Too small and you cannot measure. Too large and you cannot ship.
        </p>
        <p>
          <strong>Should the pilot run in production?</strong> Yes, on real data, with
          real users — gated behind a human-in-the-loop where the failure cost is high.
          Lab-only pilots tell you almost nothing about reality.
        </p>
      </>
    ),
  },
  {
    slug: "build-vs-buy-ai-systems",
    title: "Build vs Buy AI: When Custom Beats Off-the-Shelf",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "9 min read",
    date: "May 22, 2026",
    excerpt:
      "Build vs buy AI is the most expensive decision in your roadmap. This framework gives you a clear answer in under an hour — with the numbers.",
    author: "Flowtix Team",
    tags: ["AI Strategy", "Build vs Buy", "Architecture"],
    toc: [
      { id: "why-decision", label: "Why This Decision Is Underrated" },
      { id: "buy-default", label: "Buy Is the Right Default" },
      { id: "when-build", label: "When Build Wins" },
      { id: "the-math", label: "The Math, Honestly" },
      { id: "hybrid", label: "The Hybrid Path" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-decision">Why the Build vs Buy AI Decision Is Underrated</h2>
        <p>
          The <strong>build vs buy AI</strong> decision is treated like a procurement
          question. It is actually a strategic one. The wrong answer locks the business
          into a 24-month detour with little to show.
        </p>
        <p>
          The default assumption from most software vendors is "buy." The default
          assumption from most engineering teams is "build." Both are wrong as defaults.
          The right answer is workflow-specific, and the framework below gets you there.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• Buy is the right default for non-differentiating workflows.</li>
            <li>• Build wins when the workflow is your core competitive edge.</li>
            <li>• The hybrid path — buy the model, build the surface — is right more often than not.</li>
            <li>• Total cost of ownership is 2–4x the sticker price either way.</li>
          </ul>
        </div>

        <h2 id="buy-default">Why Buy Should Be Your Default</h2>
        <p>
          For most workflows in most businesses, off-the-shelf AI tools are good enough,
          ship faster, and have a maintained roadmap you don't have to fund. Customer
          support agents, marketing copy generators, meeting note-takers, sales follow-up
          tools — these categories have mature products with thousands of customers
          hardening them every day.
        </p>
        <p>
          Building any of those from scratch is almost always a strategic mistake. You
          will spend nine months replicating a tool you could have rented for $99/month
          per seat. The engineering effort that should have gone into your competitive
          edge is now going into commodity infrastructure.
        </p>

        <h2 id="when-build">When Build Wins</h2>
        <p>Build is the right answer when one of these is true:</p>
        <ol>
          <li>
            <strong>The workflow is your differentiator.</strong> If your "secret sauce"
            is the way you process loan applications, qualify leads, or generate
            proposals, an off-the-shelf tool standardizes you with everyone else.
          </li>
          <li>
            <strong>The data is sensitive and cannot leave your environment.</strong>{" "}
            Some regulated industries have legitimate reasons to keep inference inside
            their VPC.
          </li>
          <li>
            <strong>The off-the-shelf tools cap out below your scale.</strong> Some SaaS
            AI tools price per seat or per call in ways that get punitive at scale.
          </li>
          <li>
            <strong>You need integration depth no vendor will give you.</strong> If your
            workflow lives across six legacy systems with no public APIs, no SaaS tool
            will reach it.
          </li>
        </ol>
        <p>
          Notice what's <em>not</em> on the list: "we want it to feel custom" and "our
          team thinks they can do better." Both are vanity reasons that cost millions
          when scaled up.
        </p>

        <h2 id="the-math">The Real Math, Honestly</h2>
        <p>
          The total cost of an off-the-shelf AI tool over three years is typically 1.5–2x
          the listed sticker price (admin time, integration work, training, churn).
        </p>
        <p>
          The total cost of a custom-built AI system over three years is typically 2.5–4x
          the initial build cost (build, ops, maintenance, model updates, two engineers
          of operating overhead per year).
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The buy-side math wins on speed. The build-side math wins on long-term margin —
          but only if the workflow is genuinely differentiating. For everything else,
          custom is a tax you pay forever.
        </blockquote>
        <p>
          Use our <a href="/blog/ai-roi-how-to-measure">ROI formulas</a> to compare both
          paths over a 36-month window. The answer rarely comes out close — one option
          is usually 2x better than the other.
        </p>

        <h2 id="hybrid">The Hybrid Path Most Teams Should Take</h2>
        <p>
          For the vast majority of differentiated workflows, the right architecture is{" "}
          <strong>buy the model, build the surface</strong>. Use a foundation model API
          like Claude or GPT-4 for the heavy intelligence work. Build the data layer,
          orchestration, and interface that makes it specific to your business.
        </p>
        <p>This gives you:</p>
        <ul>
          <li>Best-in-class intelligence without the cost of training your own</li>
          <li>Total control over data flow, retention, and integrations</li>
          <li>A differentiated experience that you own</li>
          <li>The ability to swap model providers as the landscape evolves</li>
        </ul>
        <p>
          The pattern is documented in our{" "}
          <a href="/blog/ai-system-architecture-founders">architecture primer for
          founders</a>, and it is the default we use on most{" "}
          <a href="/services/">Flowtix engagements</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Should we build to "own the IP"?</strong> Usually not. The IP that
          matters is the data, the workflow, and the customer relationship — not the
          inference layer.
        </p>
        <p>
          <strong>How much engineering capacity does build require?</strong> 1.5–2
          full-time engineers to keep a custom system production-grade after launch. If
          you don't have that capacity reserved, buy.
        </p>
        <p>
          <strong>Can we start with buy and migrate to build later?</strong> Often yes,
          if you keep the data layer clean. This is the pragmatic path for many growing
          businesses.
        </p>
        <p>
          <strong>What about open-source models?</strong> Self-hosting open-source models
          shifts the cost from per-call licensing to GPU operations. For most SMBs the
          economics still favor hosted APIs. Verify with{" "}
          <a href="https://www.anthropic.com/pricing" target="_blank" rel="noopener">
            current pricing
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "ai-system-architecture-founders",
    title: "AI System Architecture for Non-Technical Founders",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "8 min read",
    date: "May 22, 2026",
    excerpt:
      "A clear, jargon-free guide to the four layers of modern AI system architecture, so you can speak with engineers and vendors as a peer.",
    author: "Flowtix Team",
    tags: ["Architecture", "Founders", "Fundamentals"],
    toc: [
      { id: "why-care", label: "Why a Founder Should Care" },
      { id: "four-layers", label: "The Four Layers" },
      { id: "data-layer", label: "Layer 1: Data" },
      { id: "model-layer", label: "Layer 2: Model" },
      { id: "orchestration", label: "Layer 3: Orchestration" },
      { id: "interface", label: "Layer 4: Interface" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-care">Why a Non-Technical Founder Should Care About Architecture</h2>
        <p>
          You don't need to write code. You do need to know what the parts are called.
          Founders who understand <strong>AI system architecture</strong> at the
          conceptual level make faster, cheaper vendor decisions, ask better questions in
          design reviews, and don't get sold $200K projects that should have cost $40K.
        </p>
        <p>
          The good news: modern AI systems have four layers, and you can hold all four in
          your head in 20 minutes. That is the whole goal of this article.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• Every modern AI system has four layers: data, model, orchestration, interface.</li>
            <li>• The model is the commodity. The other three layers are where you compete.</li>
            <li>• Where your vendor focuses their pitch tells you where they are weak.</li>
            <li>• Total cost is dominated by orchestration and interface, not the model.</li>
          </ul>
        </div>

        <h2 id="four-layers">The Four Layers</h2>
        <p>
          Think of an AI system the way you would think of a restaurant. The model is the
          stove — powerful, expensive, replaceable. The data layer is the pantry. The
          orchestration is the kitchen workflow. The interface is the dining room. A
          great restaurant invests in all four. A bad one buys the most expensive stove
          and forgets to train the waiters.
        </p>

        <h2 id="data-layer">Layer 1: The Data Layer</h2>
        <p>
          This is where the AI's context lives. Customer records, support tickets,
          historical proposals, product docs — any information the AI needs to make a
          good decision. For most AI systems, the data layer is where 60% of the value
          gets created and 80% of the bugs come from.
        </p>
        <p>Three jobs of the data layer:</p>
        <ol>
          <li>Pull the right information at the right time (retrieval)</li>
          <li>Keep it fresh as the business changes (sync)</li>
          <li>Track who is allowed to see what (permissions)</li>
        </ol>
        <p>
          Common vendor red flag: they show you a beautiful demo but cannot answer "how
          does this stay in sync when our CRM is updated?" That tells you the data layer
          is duct tape.
        </p>

        <h2 id="model-layer">Layer 2: The Model</h2>
        <p>
          The model is the LLM — Claude, GPT-4, Gemini, etc. This is the part most
          conversations focus on, and it is increasingly the least differentiating part
          of the stack. The model is largely a commodity. Treat it that way.
        </p>
        <p>
          The key model decisions you actually make as a founder are: which provider to
          start with, whether to allow multi-model fallback, and how much latency you
          can tolerate. Everything else is an engineering detail.
        </p>

        <h2 id="orchestration">Layer 3: Orchestration</h2>
        <p>
          Orchestration is the brain that decides what to do when. Should this request
          go to a fast model or a powerful one? Should it call the database first, or
          ask the AI to reason? Should a human review this output before it ships?
        </p>
        <p>
          Modern orchestration uses <em>agent</em> patterns — small AI workers that hand
          off tasks to each other. See our explainer on{" "}
          <a href="/blog/what-is-an-ai-agent">what an AI agent actually is</a> for the
          full breakdown. This layer is where most differentiation actually happens, and
          where the hidden complexity lives.
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          A founder who can ask "show me the orchestration diagram" filters out 70% of
          unserious AI vendors in one question. The other 30% are who you want to work
          with.
        </blockquote>

        <h2 id="interface">Layer 4: The Interface</h2>
        <p>
          The interface is everything the human user touches. Buttons, screens, alerts,
          chat windows. This is the layer that decides adoption. The best model in the
          world wrapped in a bad interface is a bad product.
        </p>
        <p>
          Our <a href="/blog/design-first-ai-systems">design-first approach</a> exists
          because interface investment is the most consistently under-funded part of AI
          systems. Vendors love showing models. Founders should ask about interfaces.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Which layer should I invest in first?</strong> The data layer. Without
          clean, accessible data, the other three layers cannot perform.
        </p>
        <p>
          <strong>Can a single vendor handle all four layers?</strong> Many claim to.
          Few do well. Ask for a layer-by-layer walkthrough before signing.
        </p>
        <p>
          <strong>What is the smallest possible AI system?</strong> Data sheet + model
          API call + a button. That covers all four layers in a basic form, and is the
          right starting point for many MVPs.
        </p>
        <p>
          <strong>Where do most teams go wrong?</strong> They invest in the model and
          underinvest in everything else. Talk to us via{" "}
          <a href="/contact/">flowtix.ai/contact</a> if you want an architecture review.
        </p>
      </>
    ),
  },
  {
    slug: "hidden-costs-ai-implementation",
    title: "The Hidden Costs of AI Implementation Nobody Mentions",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "The sticker price is the smallest part of your AI bill. Here are the hidden costs of AI implementation that quietly add 60% to most budgets.",
    author: "Flowtix Team",
    tags: ["Budget", "ROI", "Implementation"],
    toc: [
      { id: "intro", label: "Why the Sticker Price Lies" },
      { id: "the-six", label: "The Six Hidden Costs" },
      { id: "math", label: "What the Real Number Looks Like" },
      { id: "avoid", label: "How to Avoid Surprises" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">Why the Sticker Price Lies</h2>
        <p>
          When a vendor quotes an AI implementation at $40,000, the actual three-year
          cost to your business is typically $90,000–$120,000. This is not because
          vendors are dishonest — it is because the costs they cannot see are larger
          than the costs they can.
        </p>
        <p>
          Naming the <strong>hidden costs of AI implementation</strong> upfront protects
          your budget, your forecasts, and the relationship with the vendor. The six
          below are the ones that surprise leadership teams every single time.
        </p>
        <div className="my-8 p-6 border border-orange-500/30 bg-orange-500/5 rounded-2xl">
          <div className="text-label text-orange-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• Total 3-year cost is typically 2–3x the initial quote.</li>
            <li>• Adoption coaching and change management dominate the hidden line items.</li>
            <li>• Model and inference costs scale with usage — model them at 3x year-one usage.</li>
            <li>• Build a 20% reserve into every AI budget from day one.</li>
          </ul>
        </div>

        <h2 id="the-six">The Six Hidden Costs</h2>

        <h3>1. Internal hours during build</h3>
        <p>
          Your team will spend 80–120 hours during the build window — answering vendor
          questions, reviewing outputs, validating data. At a $75 blended rate, that's
          $6,000–$9,000 nobody quoted.
        </p>

        <h3>2. Adoption and training</h3>
        <p>
          Users do not absorb new tools by osmosis. Plan on 30–60 minutes of training
          per user, plus 2–4 weeks of follow-up reinforcement. For a 30-person rollout,
          that's a meaningful project on its own.
        </p>

        <h3>3. Model and inference costs</h3>
        <p>
          Most quotes lock model costs at year-one usage. Year-two usage typically
          doubles. Year-three triples. Build that into your 36-month TCO.
        </p>

        <h3>4. Integration debt</h3>
        <p>
          Your AI system connects to your CRM, your email, your ticketing system. Each
          of those connections will need re-work when a tool upgrades, an API deprecates,
          or you change vendors. Plan on 20–40 hours/year of integration maintenance.
        </p>

        <h3>5. The "second project" tax</h3>
        <p>
          The first AI project surfaces three more. This is good — but it also means
          your year-two budget is rarely 1.0x year-one. It's 1.5–2x as you scale wins.
        </p>

        <h3>6. Opportunity cost of internal champions</h3>
        <p>
          The person inside your org who runs the project is not doing their old job
          full-time. Account for 20–30% of their capacity during build and 10% during
          ongoing ops.
        </p>

        <h2 id="math">What the Real Number Looks Like</h2>
        <p>
          A $40,000 vendor quote with a 30-person rollout typically lands at:
        </p>
        <ul>
          <li>Vendor build: $40,000</li>
          <li>Internal time during build: $8,000</li>
          <li>Training and adoption: $6,000</li>
          <li>Year-one inference + maintenance: $12,000</li>
          <li>20% reserve: $13,200</li>
        </ul>
        <p>
          <strong>Real year-one cost: $79,200.</strong> Year two adds inference scaling
          and integration maintenance. By year three you are typically 2.2–2.5x the
          initial quote.
        </p>
        <blockquote className="border-l-2 border-orange-500 pl-6 my-8 text-[#bbb] italic">
          Quotes don't lie. They just don't model your business. The line items vendors
          can't see are bigger than the ones they can.
        </blockquote>

        <h2 id="avoid">How to Avoid Budget Surprises</h2>
        <ol>
          <li>Ask every vendor for a 36-month TCO model, not a year-one quote.</li>
          <li>Model inference costs at 3x year-one usage.</li>
          <li>Add a 20% budget reserve, line-itemed, before approval.</li>
          <li>Pre-allocate adoption and training time as a separate budget.</li>
          <li>Track integration maintenance hours and bill them quarterly to the AI program.</li>
        </ol>
        <p>
          For the underlying ROI math see our{" "}
          <a href="/blog/ai-roi-how-to-measure">measurement framework</a> and the{" "}
          <a href="/blog/ai-budgeting-year-one">year-one AI budgeting guide</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Are these costs unique to custom builds?</strong> No. Off-the-shelf
          tools have the same hidden costs, just with different ratios. Training and
          adoption are universal.
        </p>
        <p>
          <strong>How do I get vendors to share TCO honestly?</strong> Ask for case
          studies with 36-month financials, not 6-month results. Reputable vendors will
          share them under NDA.
        </p>
        <p>
          <strong>Is a 20% reserve too high?</strong> It's the floor we recommend. For
          first projects in a new vendor relationship, 25–30% is safer.
        </p>
      </>
    ),
  },
  {
    slug: "ai-build-timeline",
    title: "How Long Does It Take to Build an AI System? Realistic Timelines",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "6 min read",
    date: "May 22, 2026",
    excerpt:
      "AI build timelines have collapsed in 2026 — but most teams still over- or under-estimate. Here's how long each phase actually takes.",
    author: "Flowtix Team",
    tags: ["Timeline", "Planning", "Project Management"],
    toc: [
      { id: "intro", label: "The State of AI Timelines in 2026" },
      { id: "by-phase", label: "Realistic Times by Phase" },
      { id: "scope-impact", label: "How Scope Changes the Number" },
      { id: "accelerators", label: "What Actually Speeds Things Up" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">The State of AI Build Timelines in 2026</h2>
        <p>
          The honest 2026 answer to "how long does it take to build an AI system" is{" "}
          <strong>8–14 weeks for the first one, 3–6 weeks for subsequent ones</strong>.
          That is dramatically faster than the 6–9 months that was standard two years
          ago, because modern foundation models have removed the training step from most
          builds.
        </p>
        <p>
          Most timeline overruns happen because teams mistake "build" for "project." The
          build is one phase of five. Below is what each phase realistically takes for
          an SMB-scale AI system.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• First project: 10–12 weeks end-to-end is the realistic SMB number.</li>
            <li>• Subsequent projects on the same infrastructure: 3–6 weeks.</li>
            <li>• Discovery and adoption are the under-estimated phases — not build.</li>
            <li>• Anyone quoting "live in two weeks" is selling a demo, not a system.</li>
          </ul>
        </div>

        <h2 id="by-phase">Realistic Times by Phase</h2>
        <p>For a first-project SMB AI system:</p>
        <ol>
          <li>
            <strong>Discovery (1–2 weeks)</strong> — Map the workflow, quantify the
            problem, identify data sources, align stakeholders.
          </li>
          <li>
            <strong>Scope (3–5 days)</strong> — Lock the inputs, outputs, KPIs,
            human-in-the-loop, and rollback plan.
          </li>
          <li>
            <strong>Build (3–5 weeks)</strong> — Stand up the data layer, agent layer,
            and interface. Iterate with the operator user.
          </li>
          <li>
            <strong>Adoption (2–4 weeks)</strong> — Train users, refine the interface,
            handle edge cases as they emerge.
          </li>
          <li>
            <strong>Stabilization (2 weeks)</strong> — Monitor, fix the inevitable
            surprises, hand off to ongoing ops.
          </li>
        </ol>
        <p>
          Total: 10–14 weeks. If you are quoted 4 weeks total, the team is skipping
          discovery and adoption. If you are quoted 6 months total, they are over-engineering.
        </p>

        <h2 id="scope-impact">How Scope Changes the Number</h2>
        <p>The variables that move the timeline most:</p>
        <ul>
          <li><strong>Number of integrations</strong> — each external system adds 1–2 weeks</li>
          <li><strong>Compliance scope</strong> — HIPAA, SOC 2, GDPR add 4–8 weeks of work</li>
          <li><strong>Number of user roles</strong> — each distinct user persona adds 1–2 weeks of design</li>
          <li><strong>Output review complexity</strong> — heavy human-in-the-loop workflows add 2–3 weeks</li>
        </ul>
        <p>
          The variables that don't actually move the timeline much:
        </p>
        <ul>
          <li>Choice of model provider (Claude, GPT, etc.)</li>
          <li>Volume of data (within reason)</li>
          <li>Number of total users (rollout is incremental)</li>
        </ul>

        <h2 id="accelerators">What Actually Speeds Things Up</h2>
        <ol>
          <li>
            <strong>A pre-defined scope.</strong> Coming to kickoff with the six-question
            scope from the{" "}
            <a href="/blog/ai-pilot-project-checklist">pilot checklist</a> shaves 1–2
            weeks immediately.
          </li>
          <li>
            <strong>Data access cleared in advance.</strong> The single biggest
            accelerator. Get IT/legal sign-off before kickoff.
          </li>
          <li>
            <strong>A single decision-maker.</strong> Committees slow projects more than
            any technical factor.
          </li>
          <li>
            <strong>A reusable foundation.</strong> Subsequent projects on the same
            infrastructure ship 3x faster.
          </li>
        </ol>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The timeline is rarely set by the AI. It's set by how prepared the
          organization is to receive it.
        </blockquote>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Can we go faster than 10 weeks?</strong> Yes, if you have done a
          previous project on the same infrastructure, or if the workflow is genuinely
          narrow.
        </p>
        <p>
          <strong>Why do some projects take 6 months?</strong> Compliance scope, multi-
          system integration, or over-engineered architecture. Sometimes legitimate,
          often avoidable.
        </p>
        <p>
          <strong>What's the right pace?</strong> Faster than you'd expect for build,
          slower than you'd expect for adoption. See the{" "}
          <a href="/blog/ai-implementation-roadmap-small-business">full roadmap</a> for
          the breakdown.
        </p>
      </>
    ),
  },
  {
    slug: "ai-vendor-selection-questions",
    title: "AI Vendor Selection: 9 Questions That Reveal a Bad Fit",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "The 9 questions to ask any AI vendor before signing. Each one is calibrated to surface a specific failure mode we've seen kill real projects.",
    author: "Flowtix Team",
    tags: ["Vendor Selection", "Due Diligence", "Buying"],
    toc: [
      { id: "intro", label: "Why These 9 Questions" },
      { id: "questions", label: "The 9 Questions" },
      { id: "scoring", label: "Scoring the Answers" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">Why These 9 AI Vendor Questions, Specifically</h2>
        <p>
          Every AI vendor pitch sounds great. The differentiation is in how the team
          handles the awkward questions — the ones that make a polished sales engineer
          go quiet and look at the slide deck. These nine are the ones we wish every
          buyer asked before signing.
        </p>
        <p>
          Each question is here because it caught a real failure mode in a real
          engagement. If your AI vendor cannot give you a confident, specific answer to
          all nine, the bad fit is not subjective — it is structural.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• Vendors filter on capability. You should filter on candor.</li>
            <li>• Ask each question with no follow-ups — see how they fill the silence.</li>
            <li>• The right answer is often "here's how we've gotten that wrong before."</li>
            <li>• A vendor without a rollback story is a vendor without scars.</li>
          </ul>
        </div>

        <h2 id="questions">The 9 Questions</h2>

        <h3>1. Tell me about a deployment that didn't work and what you learned.</h3>
        <p>
          A vendor who cannot describe a failed deployment has either not done enough of
          them or is not honest. Both are bad. Listen for specifics: the failure mode,
          the recovery, the changed process.
        </p>

        <h3>2. Walk me through your data layer for a customer like us.</h3>
        <p>
          Most vendors can show their model layer. Half can show their interface. The
          best ones can show you their data layer — how context is retrieved, how
          permissions work, how data stays fresh. If they handwave this, the data layer
          is held together with cron jobs.
        </p>

        <h3>3. What happens when the AI is uncertain?</h3>
        <p>
          The correct answer involves human-in-the-loop, confidence scores, and
          rollback. If the answer is "the AI is very accurate" — wrong answer.
          Production systems have to handle uncertainty as a first-class case.
        </p>

        <h3>4. Show me the rollback plan.</h3>
        <p>
          Specifically: if the AI does something embarrassing tomorrow, what is the
          ten-minute procedure to disable it? If they have to think about it, they
          haven't shipped to anyone real.
        </p>

        <h3>5. How do you handle model updates?</h3>
        <p>
          Foundation models change every quarter. Behavior shifts. The vendor should
          have a regression-testing process and a model-update protocol. If they don't,
          your system will silently break.
        </p>

        <h3>6. Who on your team will I actually work with after kickoff?</h3>
        <p>
          The sales team is rarely the delivery team. Get names. Get LinkedIn profiles.
          Get the seniority level. Many AI vendors send senior engineers to demos and
          junior engineers to production.
        </p>

        <h3>7. What is your 36-month total cost of ownership for this project?</h3>
        <p>
          A vendor who has only a year-one quote has not been around long enough to
          have a 36-month dataset. See our{" "}
          <a href="/blog/hidden-costs-ai-implementation">hidden costs guide</a> for the
          line items that should appear.
        </p>

        <h3>8. How do you handle PII and sensitive data?</h3>
        <p>
          Specifically: where does data live, how long is it retained, what gets sent to
          the model provider, what is your subprocessor list? A vague answer is a
          regulatory risk. See our{" "}
          <a href="/blog/privacy-ai-founder-checklist">privacy checklist</a>.
        </p>

        <h3>9. Who else has done a project like ours, and can I talk to them?</h3>
        <p>
          Two references on live calls, same five questions for each. If references
          will only do email or written quotes, you are buying marketing material.
        </p>

        <h2 id="scoring">Scoring the Answers</h2>
        <p>
          The point isn't whether the vendor says the "right" words. It's whether they
          can be specific, whether they can be self-critical, and whether they can
          handle silence after a question without filling it with marketing.
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          Bad fit is rarely about capability. It's about candor. Calibrated questions
          surface candor faster than capability assessments do.
        </blockquote>
        <p>
          Score each answer 0–3 where 3 means "specific, scarred, transparent." Below
          18/27 total, the vendor is probably not ready for you. Want a second pair of
          eyes on a proposal? Send it our way at <a href="/contact/">flowtix.ai/contact</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Will vendors be offended by these questions?</strong> Good vendors
          welcome them. Bad ones bristle. Both reactions are useful signals.
        </p>
        <p>
          <strong>Can I ask these on a first call?</strong> Yes, but a 60-minute deep
          dive is the right setting. Don't try to sneak nine questions into a 20-minute
          demo.
        </p>
        <p>
          <strong>What if the vendor refuses to answer #1?</strong> End the process.
          Lack of failure narrative is the strongest disqualifier.
        </p>
      </>
    ),
  },
  {
    slug: "ai-poc-to-production-gap",
    title: "Why Your AI Proof-of-Concept Never Becomes Production",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "The POC-to-production gap is where 80% of AI projects die. Here's exactly what changes between a demo and a real system — and how to bridge it.",
    author: "Flowtix Team",
    tags: ["POC", "Production", "Implementation"],
    toc: [
      { id: "intro", label: "Why the Gap Exists" },
      { id: "differences", label: "What Actually Changes" },
      { id: "bridge", label: "The 4-Step Bridge" },
      { id: "antipatterns", label: "Anti-patterns to Avoid" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">Why the AI POC-to-Production Gap Exists</h2>
        <p>
          A proof-of-concept is built to win a slide. A production system is built to
          survive a Tuesday morning when the model is slow, the data is stale, and a
          customer is on hold. These are very different design targets.
        </p>
        <p>
          The <strong>AI POC-to-production gap</strong> is what kills most early AI
          investments. Teams spend $30K on a POC, the POC works, they celebrate, and
          then the project quietly dies because no one budgeted for what production
          actually requires.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• A POC is a feasibility test; production is a reliability test.</li>
            <li>• Production work is typically 3–4x the POC work, not 1.5x.</li>
            <li>• Plan production budget at POC kickoff, not POC end.</li>
            <li>• If "production" wasn't in scope from week one, it won't ship.</li>
          </ul>
        </div>

        <h2 id="differences">What Actually Changes From POC to Production</h2>
        <p>Here's what gets added when a POC graduates:</p>
        <ul>
          <li><strong>Authentication</strong> — POCs use shared logins; production needs SSO, role-based access, audit logs</li>
          <li><strong>Error handling</strong> — POCs assume happy paths; production needs every error class handled</li>
          <li><strong>Monitoring</strong> — POCs are watched manually; production needs dashboards and alerts</li>
          <li><strong>Data sync</strong> — POCs use exports; production needs live integrations</li>
          <li><strong>Performance</strong> — POCs run on one user; production runs on hundreds</li>
          <li><strong>Compliance</strong> — POCs sit outside policy; production needs review</li>
          <li><strong>Support</strong> — POCs get vendor attention; production needs runbooks and on-call</li>
        </ul>
        <p>
          Each of these is a real engineering line item. Multiply them by a few weeks
          each and the math gets honest.
        </p>

        <h2 id="bridge">The Four-Step Bridge</h2>
        <p>
          Bridging the gap is procedural. Do these four things at the start of the POC
          and the gap collapses.
        </p>
        <ol>
          <li>
            <strong>Write the production checklist at POC kickoff.</strong> 20–30 items
            covering auth, monitoring, error handling, compliance, on-call. Score the
            POC against it weekly.
          </li>
          <li>
            <strong>Pre-allocate the production budget.</strong> Treat the production
            phase as a sibling project to the POC, not a follow-on. Budget for it before
            the POC starts.
          </li>
          <li>
            <strong>Build on infrastructure that scales.</strong> Don't spin up a POC on
            a developer's laptop. Even a "throwaway" POC should live on real
            infrastructure if there's any chance it becomes production.
          </li>
          <li>
            <strong>Name the production owner at kickoff.</strong> The person who will
            own this in production should be in the room during the POC. They will catch
            things the POC team won't.
          </li>
        </ol>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          A POC that's never going to be production is a research project. A POC that's
          going to be production should be built like production from day one. Most
          teams pick a third, broken middle ground.
        </blockquote>

        <h2 id="antipatterns">Anti-patterns to Avoid</h2>
        <ul>
          <li>"We'll add auth later" — auth is a foundational design decision, not a feature</li>
          <li>"We'll re-platform when we go to production" — re-platforms cost 2–3x what doing it right cost</li>
          <li>"The POC team will hand off to engineering" — handoff projects fail at a 60% rate</li>
          <li>"We'll figure out monitoring after launch" — without monitoring, you cannot prove value</li>
        </ul>
        <p>
          See also our <a href="/blog/ai-pilot-project-checklist">pilot checklist</a> and
          the <a href="/blog/ai-implementation-roadmap-small-business">full implementation roadmap</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Should POCs always go to production?</strong> No. Some POCs prove the
          idea isn't worth the production cost. That's a successful POC outcome.
        </p>
        <p>
          <strong>How much more does production cost than POC?</strong> 2.5–4x is
          typical. Anything &lt;2x usually means you skipped real production hardening.
        </p>
        <p>
          <strong>Can a vendor do both POC and production?</strong> Yes — and arguably
          should. Vendor handoffs between POC and production are a major source of
          failure.
        </p>
      </>
    ),
  },
  {
    slug: "ai-governance-smb-framework",
    title: "AI Governance for SMBs: A Lightweight Framework",
    category: "Business",
    categoryColor: "#F59E0B",
    readTime: "8 min read",
    date: "May 22, 2026",
    excerpt:
      "Enterprise-grade AI governance is overkill for most SMBs. Here's a 5-page framework that handles 90% of the risk in under a week to deploy.",
    author: "Flowtix Team",
    tags: ["Governance", "Compliance", "SMB"],
    toc: [
      { id: "intro", label: "Why SMBs Need a Lightweight Framework" },
      { id: "principles", label: "Five Governance Principles" },
      { id: "deploy", label: "How to Deploy in a Week" },
      { id: "common-questions", label: "Common Edge Cases" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">Why SMBs Need Lightweight AI Governance</h2>
        <p>
          Enterprise AI governance frameworks (NIST AI RMF, ISO 42001) are excellent for
          enterprises. For a 50-person business, they are bureaucratic theater that
          slows projects without changing risk in any measurable way.
        </p>
        <p>
          What SMBs actually need is a lightweight <strong>AI governance framework</strong>{" "}
          — five principles, two reviews, one named owner. The version below has been
          deployed in real businesses, holds up under audit, and ships in a week.
        </p>
        <div className="my-8 p-6 border border-orange-500/30 bg-orange-500/5 rounded-2xl">
          <div className="text-label text-orange-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• Five principles cover 90% of SMB AI risk.</li>
            <li>• Heavy frameworks slow first projects without proportional risk reduction.</li>
            <li>• A single accountable AI owner does more than a committee.</li>
            <li>• Governance should ship in days, not quarters.</li>
          </ul>
        </div>

        <h2 id="principles">The Five Governance Principles</h2>

        <h3>1. Human-in-the-Loop for High-Impact Decisions</h3>
        <p>
          Any AI output that touches customers, money, or legal decisions must have a
          human review step before it goes live. Define which workflows qualify
          explicitly. Everything else can run autonomous with monitoring.
        </p>

        <h3>2. Data Minimization</h3>
        <p>
          Send the model the least data necessary to do the job. PII, regulated data,
          and trade secrets are scrubbed unless required. This is policy, not aspiration.
        </p>

        <h3>3. Transparent Disclosure</h3>
        <p>
          Customers know when they are talking to an AI. Employees know which workflows
          use AI. The disclosure is in writing, in the product, and in the policies.
        </p>

        <h3>4. Single Accountable Owner</h3>
        <p>
          One named person (usually the COO, head of ops, or a designated AI champion)
          owns AI risk across the org. Decisions escalate to them. They report on
          incidents quarterly.
        </p>

        <h3>5. Documented Rollback</h3>
        <p>
          Every production AI system has a written rollback procedure. The procedure is
          tested at least once. Without this, you do not have a system — you have a
          liability.
        </p>

        <h2 id="deploy">How to Deploy This in a Week</h2>
        <ol>
          <li>
            <strong>Day 1:</strong> Name the AI owner. Get exec sign-off on the role.
          </li>
          <li>
            <strong>Day 2:</strong> Inventory every AI tool currently in use. Most SMBs
            are surprised by the count.
          </li>
          <li>
            <strong>Day 3:</strong> Map each tool to the five principles. Identify gaps.
          </li>
          <li>
            <strong>Day 4:</strong> Write the policy (5 pages max). Use the principles
            as section headers.
          </li>
          <li>
            <strong>Day 5:</strong> Distribute, train, file. Set the next quarterly review.
          </li>
        </ol>
        <p>
          For sensitive industries (healthcare, finance, legal), this lightweight
          framework is the floor — not the ceiling. Layer industry-specific controls on
          top. See our <a href="/blog/ai-healthcare-patient-comms">healthcare guide</a> and{" "}
          <a href="/blog/ai-law-firms-contract-intake">law firm guide</a> for vertical
          specifics.
        </p>

        <h2 id="common-questions">Common Edge Cases</h2>
        <p>
          <strong>What if a tool predates the policy?</strong> Inventory it, score it
          against the principles, and remediate over the next 30 days. Grandfathering
          creates audit risk.
        </p>
        <p>
          <strong>What if a vendor refuses to disclose subprocessors?</strong> Walk away
          or accept the documented risk in writing. There is no middle ground.
        </p>
        <p>
          <strong>What about shadow AI use by employees?</strong> Build a short list of
          approved tools and a fast approval path for new ones. Banning AI does not work;
          channeling it does.
        </p>
        <blockquote className="border-l-2 border-orange-500 pl-6 my-8 text-[#bbb] italic">
          Lightweight governance that ships beats heavyweight governance that doesn't.
          Five principles, one owner, two reviews a year — and you are ahead of 80% of
          your peers.
        </blockquote>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Is this enough for SOC 2?</strong> It's a foundation. SOC 2 will
          require additional documentation and evidence, but the policy structure here
          aligns with the control families.
        </p>
        <p>
          <strong>Should we publish the policy?</strong> A summary, yes. Customers and
          partners increasingly ask. A short transparency page does the job.
        </p>
        <p>
          <strong>Who should be the AI owner?</strong> The person who already owns risk
          for the business — COO, head of ops, or CFO. Not the most technical person.
          Governance is an ownership problem, not a technical one.
        </p>
      </>
    ),
  },
  {
    slug: "scope-first-ai-project",
    title: "The Right Way to Scope Your First AI Project",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "7 min read",
    date: "May 22, 2026",
    excerpt:
      "The first AI project's scope decides everything that follows. Use this 6-question framework to scope it tightly — and ship something real.",
    author: "Flowtix Team",
    tags: ["Scoping", "Planning", "First Project"],
    toc: [
      { id: "intro", label: "Why Scope Is the Real Skill" },
      { id: "six-questions", label: "The 6 Scoping Questions" },
      { id: "narrow-better", label: "Why Narrow Beats Broad" },
      { id: "expansion", label: "How to Expand After Win #1" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="intro">Why Scoping Is the Real Skill</h2>
        <p>
          Anyone can build an AI demo. The skill that decides whether a project ships is
          scoping — the ability to draw a tight box around the workflow, agree on what
          is in and what is out, and resist the urge to expand mid-flight.
        </p>
        <p>
          The biggest reason first AI projects fail is not bad technology. It is scope
          drift. The <strong>six-question scoping framework</strong> below exists to
          prevent that.
        </p>
        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Key Takeaways</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>• A scope you can't read in 5 minutes is too broad.</li>
            <li>• Each question maps to a real failure mode we have seen kill a project.</li>
            <li>• Narrow scope = fast win = momentum for expansion. That order matters.</li>
            <li>• Resist scope creep by writing it down explicitly at kickoff.</li>
          </ul>
        </div>

        <h2 id="six-questions">The Six Scoping Questions</h2>

        <h3>1. What is the input?</h3>
        <p>
          Be exact. "An email" is not exact — is it an inbound inquiry, an internal
          forward, a thread? Pin the input format and source.
        </p>

        <h3>2. What is the output?</h3>
        <p>
          Equally exact. A drafted reply? A classified ticket? A scored lead? Define the
          shape, the maximum length, and where it goes when produced.
        </p>

        <h3>3. Who is the human-in-the-loop?</h3>
        <p>
          The person who reviews the output before it goes live, when applicable. Named.
          Counted. With a service level you both agree to.
        </p>

        <h3>4. What is the uncertainty path?</h3>
        <p>
          When the AI is not confident, what happens? Default to a human? Ask a
          clarifying question? Fail gracefully? Define it.
        </p>

        <h3>5. What KPI defines success?</h3>
        <p>
          One number. Not three. Examples: "First response time under 5 minutes,"
          "Lead-to-meeting conversion +20%," "Hours saved per week per agent &gt;3." One
          number, baseline measured before launch.
        </p>

        <h3>6. What is explicitly out of scope?</h3>
        <p>
          This is the question most teams skip. Listing what you are not building is
          more powerful than listing what you are. Write 5–10 explicit exclusions and
          attach them to the scope document.
        </p>

        <h2 id="narrow-better">Why Narrow Beats Broad, Every Time</h2>
        <p>
          A narrow project ships. A broad one doesn't. We have run this experiment
          dozens of times — the narrow team gets a win in 10 weeks and uses it to fund
          and motivate the next three projects. The broad team is still planning at
          week 14.
        </p>
        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          You don't win the war by scoping the whole campaign. You win by taking the
          first hill — and using it to fund the second.
        </blockquote>
        <p>
          For the broader project structure see the{" "}
          <a href="/blog/ai-implementation-roadmap-small-business">implementation roadmap</a>{" "}
          and the <a href="/blog/ai-pilot-project-checklist">pilot checklist</a>.
        </p>

        <h2 id="expansion">How to Expand After Win #1</h2>
        <ol>
          <li>Ship and measure the first project. Hit the KPI.</li>
          <li>Use the same six-question framework for project two — narrow again.</li>
          <li>Reuse the data, model, and orchestration infrastructure from project one.</li>
          <li>Project two ships in 4–6 weeks instead of 10–12 because of compound infrastructure.</li>
          <li>By project four you have a flywheel and a real AI capability.</li>
        </ol>
        <p>
          The teams that try to scope all four projects on day one rarely ship even
          project one.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>What if leadership wants a bigger first project?</strong> Negotiate.
          The cost of scope is non-linear; doubling scope quadruples timeline. A
          one-page memo with the math wins this conversation.
        </p>
        <p>
          <strong>How do I know my scope is tight enough?</strong> If you can read the
          scope document aloud in 5 minutes and a new hire understands it, you are
          there. If not, cut.
        </p>
        <p>
          <strong>Can scope change mid-project?</strong> Yes, but only with a documented
          re-scope, not a Slack message. Scope creep that isn't acknowledged is the
          number-one timeline killer.
        </p>
        <p>
          Talk to us at <a href="/contact/">flowtix.ai/contact</a> if you want a second
          read on your first scope before kickoff.
        </p>
      </>
    ),
  },
];
