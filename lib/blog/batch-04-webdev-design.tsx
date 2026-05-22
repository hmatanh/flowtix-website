import type { Post } from "@/lib/posts";

export const batch4: Post[] = [
  {
    slug: "ux-patterns-ai-features-stick",
    title: "The UX Patterns That Make AI Features Stick",
    category: "Design",
    categoryColor: "#EC4899",
    readTime: "8 min read",
    date: "June 3, 2026",
    excerpt:
      "Most AI features ship and die within 90 days. The ones that stick share a small set of UX patterns. Here is the playbook for designing AI features users keep using.",
    author: "Flowtix Team",
    tags: ["AI UX", "Product Design", "Retention"],
    toc: [
      { id: "why-die", label: "Why Most AI Features Die" },
      { id: "stickiness", label: "Stickiness Is A Different Metric" },
      { id: "pattern-1", label: "Pattern 1: The One-Tap Entry" },
      { id: "pattern-2", label: "Pattern 2: Outputs You Can Edit" },
      { id: "pattern-3", label: "Pattern 3: Saved Starting Points" },
      { id: "pattern-4", label: "Pattern 4: The Quiet Power-User Path" },
      { id: "pattern-5", label: "Pattern 5: AI That Disappears When Done" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-die">Why Most AI Features Die Within 90 Days</h2>
        <p>
          A typical AI feature gets shipped with great metrics in week 1 (high adoption,
          high engagement) and disastrous metrics by week 12 (single-digit weekly active
          users). Teams blame the model, the marketing, the use case. The actual reason
          is almost always UX: the feature was designed for the demo, not for the
          workflow.
        </p>
        <p>
          The patterns that make AI features stick are not about model quality. They are
          about <strong>fitting AI into how people already work</strong> &mdash; with
          minimum disruption, maximum reversibility, and a graceful exit when the user
          doesn&apos;t need AI in this moment.
        </p>

        <h2 id="stickiness">Stickiness Is A Different Metric Than Adoption</h2>
        <p>
          Adoption: did the user try the feature once? Stickiness: does the user come
          back to the feature week after week? These metrics correlate weakly. The
          features with the highest adoption often have the lowest stickiness. The
          features that stick are usually those with quiet adoption that compounds.
        </p>
        <p>
          Optimize for the second metric. Adoption is a one-time event. Stickiness is the
          revenue.
        </p>

        <div className="my-8 p-6 border border-pink-500/30 bg-pink-500/5 rounded-2xl">
          <div className="text-label text-pink-400 mb-3">The 5 Stickiness Patterns</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; One-tap entry from the workflow the user is already in.</li>
            <li>&bull; Outputs the user can edit, not just regenerate.</li>
            <li>&bull; Starting points the AI remembers across sessions.</li>
            <li>&bull; A quiet keyboard-driven path for power users.</li>
            <li>&bull; The ability for the AI to disappear when not needed.</li>
          </ul>
        </div>

        <h2 id="pattern-1">Pattern 1: The One-Tap Entry</h2>
        <p>
          AI features that live in their own tab or section get used once and forgotten.
          AI features that appear inline in the workflow &mdash; right where the user
          already is &mdash; get used daily. The rule: every AI feature should be
          reachable from the user&apos;s current context in one tap, not via navigation.
        </p>
        <p>
          Examples: an AI summary button at the top of an email thread (not in a separate
          AI panel). A &ldquo;rewrite this&rdquo; option in the text editor&apos;s right-click
          menu (not in a sidebar). A &ldquo;suggest next step&rdquo; chip on the
          deal page in your CRM (not in a separate AI dashboard).
        </p>

        <h2 id="pattern-2">Pattern 2: Outputs You Can Edit, Not Just Regenerate</h2>
        <p>
          If the only response to an unsatisfactory AI output is &ldquo;regenerate,&rdquo; the
          user feels trapped. They have no leverage. They give up after the third try.
        </p>
        <p>
          Every AI output should be editable inline. The user can tweak a word, change a
          paragraph, delete a section &mdash; without going back to the prompt. The AI
          should treat user edits as feedback: future outputs in the same session should
          respect the edits.
        </p>
        <p>
          The deeper move: a one-tap &ldquo;keep this paragraph, redo the rest&rdquo;.
          That partial-regenerate flow is where AI features become irreplaceable. The
          user can&apos;t imagine doing this in any other tool.
        </p>

        <h2 id="pattern-3">Pattern 3: Saved Starting Points</h2>
        <p>
          Every time a user opens an AI feature, they should not have to explain who they
          are and what they&apos;re working on. The AI should remember &mdash; either
          explicitly (saved &ldquo;profiles&rdquo; the user can pick from) or implicitly
          (it knows the user&apos;s recent context).
        </p>
        <p>
          The simplest version of this: a &ldquo;Recent prompts&rdquo; section above the
          input box. The user re-runs yesterday&apos;s prompt with a small tweak &mdash;
          the second-most-common AI workflow after the initial generation.
        </p>

        <h2 id="pattern-4">Pattern 4: The Quiet Power-User Path</h2>
        <p>
          AI features that ship with a friendly visual UI and nothing else lose power
          users in week 3. Power users want to type, not click. They want keyboard
          shortcuts. They want to chain features together.
        </p>
        <p>
          Add a power-user surface from day one:
        </p>
        <ul>
          <li>A keyboard shortcut to invoke the AI from anywhere in the product.</li>
          <li>A slash-command vocabulary inside text inputs (&ldquo;/summarize&rdquo;, &ldquo;/improve&rdquo;).</li>
          <li>A way to save and re-run prompts as named &ldquo;commands.&rdquo;</li>
        </ul>
        <p>
          The slash-command surface is the single highest-leverage move. Power users
          double their AI usage within a month of slash-commands shipping. Casual users
          ignore them.
        </p>

        <h2 id="pattern-5">Pattern 5: AI That Disappears When You Don&apos;t Need It</h2>
        <p>
          The most overlooked stickiness pattern: <em>let the user turn it off</em>. Not
          permanently. Just for this document. Just for this hour. Just for this kind of
          task.
        </p>
        <p>
          AI features that aggressively offer themselves &mdash; with toasts, banners,
          and pop-ups &mdash; train the user to dismiss them on muscle memory. The user
          stops noticing. Features that wait quietly until invoked get invoked more often.
        </p>

        <blockquote className="border-l-2 border-pink-500 pl-6 my-8 text-[#bbb] italic">
          The AI features that stick are the ones the user invites in &mdash; not the
          ones that constantly invite themselves.
        </blockquote>

        <p>
          For trust and onboarding patterns see{" "}
          <a href="/blog/designing-ai-interfaces-trust">designing AI interfaces that build trust</a>{" "}
          and{" "}
          <a href="/blog/ai-onboarding-flows-lose-users">AI onboarding</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>How long should I expect for stickiness to stabilize?</strong> 90 days.
          The week-1 numbers are vanity.
        </p>
        <p>
          <strong>How many AI features can one product have?</strong> Fewer than you
          think. 3 great AI features beat 12 mediocre ones for retention.
        </p>
        <p>
          <strong>What about gamification?</strong> Don&apos;t. Gamification increases
          adoption and tanks stickiness for professional tools.
        </p>
      </>
    ),
  },
  {
    slug: "branding-ai-startup-lessons",
    title: "Branding an AI Startup: Lessons From the Last 3 Years",
    category: "Design",
    categoryColor: "#EC4899",
    readTime: "9 min read",
    date: "June 4, 2026",
    excerpt:
      "Most AI startup brands look the same: dark backgrounds, blue gradients, lowercase wordmarks. Here is what actually works for AI brand differentiation in 2026.",
    author: "Flowtix Team",
    tags: ["Brand Strategy", "AI Startups", "Brand Design"],
    toc: [
      { id: "sameness", label: "The Sameness Problem" },
      { id: "why-converge", label: "Why AI Brands Converged" },
      { id: "differentiation", label: "What Actually Differentiates" },
      { id: "voice", label: "Voice Is The New Logo" },
      { id: "interface", label: "The Product Is The Brand" },
      { id: "naming", label: "Naming Choices That Aged Well" },
      { id: "rebrand", label: "When to Rebrand" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="sameness">The AI Brand Sameness Problem</h2>
        <p>
          Walk through any pitch deck competition or YC demo day in 2026 and you&apos;ll
          see the same brand. Black or near-black background. Blue or purple gradient.
          Lowercase wordmark in a clean grotesque. The word &ldquo;intelligence&rdquo; or
          &ldquo;copilot&rdquo; or &ldquo;agent&rdquo; in the tagline. The same five
          colors in the same six positions.
        </p>
        <p>
          The convergence isn&apos;t lazy &mdash; it&apos;s the result of every founder
          looking at the last 18 months of successful AI brands and copying the surface.
          The problem: surface convergence doesn&apos;t produce differentiation. Once
          everyone has the same brand, nobody has a brand.
        </p>

        <h2 id="why-converge">Why AI Brands Converged in the First Place</h2>
        <p>
          Three forces:
        </p>
        <ol>
          <li><strong>The OpenAI gravity.</strong> OpenAI&apos;s brand worked. Black, sans, minimal. Hundreds of imitators followed.</li>
          <li><strong>The serious-tool signal.</strong> Founders wanted to look like a tool, not a consumer app. Dark + sans = serious.</li>
          <li><strong>The AI-generated logo problem.</strong> Founders used AI to generate brand assets. AI was trained on the same dataset. The outputs converged.</li>
        </ol>

        <h2 id="differentiation">What Actually Differentiates in AI Brand</h2>
        <p>
          The brands that broke through in 2025&ndash;2026 didn&apos;t differentiate on color
          palette. They differentiated on four less obvious axes:
        </p>
        <ul>
          <li><strong>Personality</strong> &mdash; warm vs cold, playful vs serious, expert vs friendly.</li>
          <li><strong>Voice</strong> &mdash; the way they write, especially in product copy and error states.</li>
          <li><strong>Texture</strong> &mdash; the small details: how a button feels, what loading looks like, how the product sounds (literally, in voice products).</li>
          <li><strong>Point of view</strong> &mdash; what does this brand believe about AI? What is it willing to refuse?</li>
        </ul>
        <p>
          These four are harder to copy than a color palette. They show up in every
          interaction, accumulating brand equity over months.
        </p>

        <div className="my-8 p-6 border border-pink-500/30 bg-pink-500/5 rounded-2xl">
          <div className="text-label text-pink-400 mb-3">Brand Audit Questions</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; If a user closed their eyes and read three of your error messages, would they recognize you?</li>
            <li>&bull; What does your brand <em>refuse</em> to do that competitors do?</li>
            <li>&bull; Is your loading state on-brand or off-the-shelf?</li>
            <li>&bull; Does your product&apos;s default tone match your marketing&apos;s tone?</li>
          </ul>
        </div>

        <h2 id="voice">Voice Is The New Logo</h2>
        <p>
          The most powerful brand asset in an AI product is not the logo &mdash; it&apos;s
          how the product talks. AI products generate text all day. Every output is a
          brand touchpoint. A consistent, distinctive voice across hundreds of generations
          is hard to build and impossible to fake.
        </p>
        <p>
          Build a voice guide that&apos;s actually enforceable: 8&ndash;12 rules with
          concrete examples and counter-examples. Banned words. Required structures
          (&ldquo;always answer in 2 sentences before the bulleted list&rdquo;). Default
          sign-offs. The AI prompts that drive your product should encode this voice
          directly.
        </p>

        <h2 id="interface">The Product Is The Brand</h2>
        <p>
          Marketing brand and product brand have to match. The number of AI startups
          with cinematic marketing and a generic-looking product is huge &mdash; and the
          gap is fatal. Visitors who try the product after seeing the marketing feel
          conned.
        </p>
        <p>
          Invest equal effort in product brand details: the cursor, the loading state,
          the empty state, the error messages, the sound of notifications. Each of these
          is a chance to be recognizably you.
        </p>

        <h2 id="naming">Naming Choices That Aged Well</h2>
        <p>
          Looking back three years, the names that aged well share a few properties:
        </p>
        <ul>
          <li><strong>Short.</strong> 4&ndash;7 letters. Memorable and typeable.</li>
          <li><strong>Pronounceable.</strong> If users have to learn how to say it, they won&apos;t recommend it.</li>
          <li><strong>Not too on-the-nose.</strong> Names with &ldquo;AI&rdquo; in them dated quickly. Names without &ldquo;AI&rdquo; stayed evergreen.</li>
          <li><strong>Owns a noun.</strong> The brand becomes the default term for a thing (&ldquo;a Notion&rdquo;, &ldquo;a Loom&rdquo;).</li>
        </ul>

        <h2 id="rebrand">When to Rebrand (And When To Stop)</h2>
        <p>
          Three legitimate reasons to rebrand an AI startup:
        </p>
        <ol>
          <li>The original name limits your market (e.g., &ldquo;EmailGPT&rdquo; when you&apos;ve expanded beyond email).</li>
          <li>The brand is genuinely confusing in your category (people mistake you for a competitor).</li>
          <li>You&apos;ve gone through a real strategic pivot.</li>
        </ol>
        <p>
          Three illegitimate reasons:
        </p>
        <ul>
          <li>Your investors think the brand &ldquo;could be sharper.&rdquo;</li>
          <li>A competitor launched with a brand you like better.</li>
          <li>You&apos;re bored.</li>
        </ul>

        <blockquote className="border-l-2 border-pink-500 pl-6 my-8 text-[#bbb] italic">
          Brand equity in AI is built in the small moments &mdash; error messages, loading
          states, the way your product apologizes. The visual identity is the first
          impression. The voice is the relationship.
        </blockquote>

        <p>
          See also{" "}
          <a href="/blog/naming-ai-product-patterns">naming patterns that work</a> and{" "}
          <a href="/services/design/">our design service</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Should we look different from the &ldquo;AI brand template&rdquo;?</strong>{" "}
          Eventually, yes. At launch, fitting the category is fine. By year 2, find your
          own surface.
        </p>
        <p>
          <strong>How much should we spend on brand?</strong> Less than founders think
          for V1; more than they think after PMF.
        </p>
        <p>
          <strong>Hire an agency or freelancer?</strong> A senior freelancer for V1. An
          agency once you&apos;re scaling brand across surfaces.
        </p>
      </>
    ),
  },
  {
    slug: "naming-ai-product-patterns",
    title: "Naming Your AI Product: Patterns That Work (And Ones That Don't)",
    category: "Design",
    categoryColor: "#EC4899",
    readTime: "8 min read",
    date: "June 5, 2026",
    excerpt:
      "AI product names tend to age badly. Here are the naming patterns that stayed evergreen — and the ones that became cringe within a year.",
    author: "Flowtix Team",
    tags: ["Naming", "Brand", "Product"],
    toc: [
      { id: "name-stakes", label: "What A Name Has To Do" },
      { id: "good-patterns", label: "Patterns That Aged Well" },
      { id: "bad-patterns", label: "Patterns That Aged Badly" },
      { id: "process", label: "A Practical Naming Process" },
      { id: "validation", label: "Validation Beyond Domains" },
      { id: "internal", label: "Naming Inside The Product" },
      { id: "rename", label: "When To Rename" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="name-stakes">What A Name Has To Do</h2>
        <p>
          A product name does three jobs: it&apos;s a memorable handle for the product,
          it signals what category the product is in, and it leaves room for the product
          to grow. A name that does the first two but fails the third becomes a ceiling.
          The number of AI products that named themselves into a corner in 2023 is large.
        </p>
        <p>
          Names that survived: did all three. Names that dated: did one or two.
        </p>

        <h2 id="good-patterns">Patterns That Aged Well</h2>
        <h3>Pattern A: The Invented Word</h3>
        <p>
          Five-letter coined words with no prior meaning (Flowtix, Linear, Notion).
          Pros: memorable, ownable, easy to trademark. Cons: requires marketing to
          establish category fit.
        </p>
        <h3>Pattern B: The Common Word Reused</h3>
        <p>
          A familiar word redirected into a new domain (Drift, Linear, Replit). Pros:
          easy to remember, evocative. Cons: SEO competition, trademark fights.
        </p>
        <h3>Pattern C: The Founder-Memory Name</h3>
        <p>
          Tied to something specific from the founder&apos;s history (Asana, Stripe).
          Pros: story to tell, no category constraint. Cons: requires storytelling
          discipline.
        </p>
        <h3>Pattern D: The Compound Word</h3>
        <p>
          Two familiar words pushed together (FaceTime, Slack-ish brands). Pros:
          semi-descriptive without being limiting. Cons: harder to trademark.
        </p>

        <h2 id="bad-patterns">Patterns That Aged Badly</h2>
        <ul>
          <li><strong>The &ldquo;GPT&rdquo; suffix.</strong> EmailGPT, LegalGPT, MarketingGPT. Tied to a specific vendor and feels like a wrapper.</li>
          <li><strong>The &ldquo;.ai&rdquo; gimmick.</strong> Names where the .ai TLD is essential to the brand. The TLD is fine; making it the name isn&apos;t.</li>
          <li><strong>The robot mascot.</strong> Anything with &ldquo;bot&rdquo; in the name signaled &ldquo;chatbot&rdquo;. Products outgrew chatbot framing fast.</li>
          <li><strong>The verb-noun.</strong> &ldquo;WriteAI&rdquo;, &ldquo;SummarizeBot&rdquo;. Locks the product into one feature.</li>
          <li><strong>The trademark-violation name.</strong> Anything that included a giant company&apos;s mark (&ldquo;GoogleScribe,&rdquo; etc.) got C&amp;D&apos;d.</li>
        </ul>

        <div className="my-8 p-6 border border-pink-500/30 bg-pink-500/5 rounded-2xl">
          <div className="text-label text-pink-400 mb-3">The Naming Smell Tests</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; If you triple your scope in 18 months, does the name still work?</li>
            <li>&bull; Can a non-English speaker pronounce it on first try?</li>
            <li>&bull; Is it 4&ndash;9 letters? Beyond 10 is a flag.</li>
            <li>&bull; Does it have a clean .com? Or are you stuck with an alt-TLD?</li>
          </ul>
        </div>

        <h2 id="process">A Practical Naming Process</h2>
        <ol>
          <li><strong>Define the product in one sentence.</strong> If you can&apos;t, name it later.</li>
          <li><strong>Brainstorm 100 names.</strong> Wide net. Most are bad. That&apos;s normal.</li>
          <li><strong>Cut to 20.</strong> Eliminate the bad patterns above.</li>
          <li><strong>Domain check.</strong> Drop anything where the .com is unobtainable or 5-figure.</li>
          <li><strong>Trademark check.</strong> USPTO and EUIPO basic search. Don&apos;t skip.</li>
          <li><strong>Pronunciation test.</strong> Say each remaining name out loud, 10x. The ones that get harder are out.</li>
          <li><strong>Top 5 to a small panel.</strong> 5&ndash;10 people in your target market, ideally not friends. Ask what they think the product does. Surprising answers are flags.</li>
          <li><strong>Pick.</strong> Don&apos;t commit to a brand exercise yet. Use the name for 2 weeks and see if it ages.</li>
        </ol>

        <h2 id="validation">Validation Beyond Domain Availability</h2>
        <p>
          A domain being available is the lowest bar. Better validation:
        </p>
        <ul>
          <li>Search the name + your category. Are you findable in 6 months?</li>
          <li>Search the name in major search engines. Any uncomfortable associations?</li>
          <li>Search the name on social platforms. Are the handles open?</li>
          <li>Search the name on app stores. Are there confusing existing products?</li>
        </ul>

        <h2 id="internal">Naming Inside The Product (Features, Models)</h2>
        <p>
          Many AI startups invest in the brand name and ignore feature naming. Bad
          feature names accumulate. By year 2 the product UI is unreadable. Three
          guidelines:
        </p>
        <ol>
          <li>Feature names should describe the action (&ldquo;Compose&rdquo;), not the technology (&ldquo;GPT-4 Writer&rdquo;).</li>
          <li>Don&apos;t give every internal model a public name. Users do not need to know about your three model versions.</li>
          <li>Avoid the &ldquo;Smart [thing]&rdquo; prefix. &ldquo;Smart Search&rdquo;, &ldquo;Smart Reply&rdquo; &mdash; signals &ldquo;the unmarked one is dumb.&rdquo;</li>
        </ol>

        <h2 id="rename">When to Rename, When to Hold</h2>
        <p>
          Renaming is expensive: domain transfer, brand redesign, customer confusion,
          SEO loss. Only rename when one of three conditions is true:
        </p>
        <ul>
          <li>The current name is actively limiting market expansion.</li>
          <li>The current name has accumulated negative associations.</li>
          <li>A genuine pivot has rendered the name irrelevant.</li>
        </ul>

        <blockquote className="border-l-2 border-pink-500 pl-6 my-8 text-[#bbb] italic">
          The best AI product names are ones that stop being notable. After two years,
          the name is invisible &mdash; the product is what users see. That&apos;s the
          goal.
        </blockquote>

        <p>
          See also{" "}
          <a href="/blog/branding-ai-startup-lessons">branding an AI startup</a> and{" "}
          <a href="/services/design/">our design service</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Should we use AI to name our AI startup?</strong> As an idea
          generator, fine. As the final decision, no &mdash; AI converges on the same
          patterns.
        </p>
        <p>
          <strong>What about codenames during development?</strong> Useful. Don&apos;t
          accidentally ship them.
        </p>
        <p>
          <strong>How much does professional naming cost?</strong> $5k&ndash;$50k for the
          process. Worth it for a flagship; overkill for a feature.
        </p>
      </>
    ),
  },
  {
    slug: "nextjs-static-export-ai-sites",
    title: "Next.js Static Export for AI-Powered Sites: Trade-offs",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "9 min read",
    date: "June 6, 2026",
    excerpt:
      "Static export is fast, cheap, and SEO-friendly — but it complicates AI. Here is the practical guide to using Next.js static export for AI sites and where to break the rule.",
    author: "Flowtix Team",
    tags: ["Next.js", "Static Export", "AI Architecture"],
    toc: [
      { id: "what-is", label: "What Static Export Is and Isn't" },
      { id: "ai-tension", label: "The AI Tension" },
      { id: "what-works", label: "What Works Well" },
      { id: "where-it-fails", label: "Where Static Export Hits A Wall" },
      { id: "hybrid", label: "The Hybrid Pattern" },
      { id: "tooling", label: "Tooling and Patterns" },
      { id: "decision-tree", label: "Decision Tree" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="what-is">What Static Export Is and Isn&apos;t</h2>
        <p>
          Next.js&apos;s <code>output: &apos;export&apos;</code> compiles every page to
          a flat HTML file at build time. No server runs at request time. The site is
          served as a folder of files from a CDN. The wins: free hosting at scale,
          excellent performance, predictable SEO, no server failure modes. The trade-off:
          no server runs at request time &mdash; which is exactly what AI features
          typically need.
        </p>
        <p>
          For pure marketing sites, static export is the obvious choice. For pure AI
          apps, it&apos;s the wrong choice. For marketing-plus-AI sites &mdash; the
          shape most agencies, SaaS marketing sites, and content-driven AI products take
          &mdash; the answer is a hybrid pattern.
        </p>

        <h2 id="ai-tension">The AI Tension</h2>
        <p>
          AI features almost always require a server-side call: an API key that
          can&apos;t live in the browser, a long-running stream, a vector database
          lookup. None of that runs from a static HTML file. The naive answer is
          &ldquo;then don&apos;t use static export.&rdquo; The smarter answer is
          &ldquo;use static export for everything that doesn&apos;t need a server, and
          put the small AI surface behind a separate endpoint.&rdquo;
        </p>

        <h2 id="what-works">What Works Well in Static Export</h2>
        <ul>
          <li><strong>Marketing pages</strong> &mdash; landing, services, pricing, about, contact.</li>
          <li><strong>Blog and content</strong> &mdash; massive SEO wins from prerendered pages.</li>
          <li><strong>Documentation</strong> &mdash; fast, navigable, searchable client-side.</li>
          <li><strong>Read-only product views</strong> &mdash; case studies, portfolios.</li>
          <li><strong>Interactive client-side features</strong> &mdash; anything that runs in the browser without a server.</li>
        </ul>

        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">Static Export Wins</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Sub-100ms time-to-first-byte from any CDN edge.</li>
            <li>&bull; $0 to $10/month hosting at small-medium scale.</li>
            <li>&bull; Predictable SEO &mdash; every URL is a real HTML file.</li>
            <li>&bull; No cold starts, no server outages.</li>
          </ul>
        </div>

        <h2 id="where-it-fails">Where Static Export Hits A Wall</h2>
        <ul>
          <li>Anything needing server-only secrets (API keys, DB creds).</li>
          <li>Streaming AI responses (model output token-by-token).</li>
          <li>Per-request authentication and personalization.</li>
          <li>Real-time data (live dashboards, presence indicators).</li>
          <li>Custom HTTP headers per route (Next.js static export ignores <code>headers()</code> in next.config).</li>
          <li>Image optimization on the fly (you set <code>unoptimized: true</code>).</li>
        </ul>

        <h2 id="hybrid">The Hybrid Pattern: Static + Edge Functions</h2>
        <p>
          The pattern we recommend for AI-marketing sites: static export for the public
          surface, plus a small number of edge functions (Vercel, Cloudflare Workers,
          AWS Lambda) for the AI calls.
        </p>
        <p>
          The marketing site lives at the root (<code>flowtix.ai/*</code>). The AI
          endpoints live at <code>flowtix.ai/api/*</code> or
          <code>api.flowtix.ai/*</code>. The client-side JavaScript on the static pages
          calls those endpoints when the user invokes an AI feature. Best of both
          worlds.
        </p>

        <h2 id="tooling">Tooling and Patterns</h2>
        <p>
          A few specific patterns we use:
        </p>
        <ul>
          <li><strong>Security headers</strong> &mdash; since <code>headers()</code> is ignored in static export, put them in <code>vercel.json</code> or <code>_headers</code> at the platform level.</li>
          <li><strong>Sitemap and robots</strong> &mdash; use <code>app/sitemap.ts</code> and <code>app/robots.ts</code> with <code>export const dynamic = &apos;force-static&apos;</code>.</li>
          <li><strong>Image strategy</strong> &mdash; pre-optimize images at build time. Skip dynamic optimization.</li>
          <li><strong>OG images</strong> &mdash; generate per-page at build time or pre-render in a build step.</li>
          <li><strong>Form submissions</strong> &mdash; post to an edge function or a third-party endpoint, not the static site.</li>
        </ul>

        <h2 id="decision-tree">Decision Tree: Should You Use Static Export?</h2>
        <ol>
          <li>Is the AI surface less than 20% of the product? &rarr; Static export with hybrid endpoints.</li>
          <li>Is the AI surface the product? &rarr; Server-rendered, edge runtime, or a separate app.</li>
          <li>Do you need per-request auth on most pages? &rarr; Not static export.</li>
          <li>Are you content-heavy (blog, docs, marketing)? &rarr; Static export.</li>
          <li>Do you need to deploy SEO-critical content fast and free? &rarr; Static export.</li>
        </ol>

        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The static-export-plus-edge-functions architecture is the modern shape of
          marketing-driven SaaS in 2026. You get SEO wins on the public surface and AI
          power where the product actually needs it &mdash; without paying for a
          server that&apos;s 99% idle.
        </blockquote>

        <p>
          See also{" "}
          <a href="/blog/vercel-edge-functions-ai">Vercel edge functions for AI</a> and{" "}
          <a href="/blog/core-web-vitals-ai-apps">Core Web Vitals for AI apps</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>What about ISR (Incremental Static Regeneration)?</strong> Requires a
          server. Defeats the static export benefit. Skip.
        </p>
        <p>
          <strong>Can we run AI in the browser?</strong> For small models, yes. For
          frontier-quality output, no &mdash; latency and download size kill it.
        </p>
        <p>
          <strong>How do we handle user accounts?</strong> Use a third-party auth
          provider that issues tokens; verify tokens in your edge endpoints.
        </p>
      </>
    ),
  },
  {
    slug: "vercel-edge-functions-ai",
    title: "Vercel + Edge Functions for Real-Time AI Features",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "8 min read",
    date: "June 7, 2026",
    excerpt:
      "Edge functions are the right shape for real-time AI on a static site. Here is how to deploy AI features that stream, scale, and stay under control.",
    author: "Flowtix Team",
    tags: ["Vercel", "Edge Functions", "AI Architecture"],
    toc: [
      { id: "why-edge", label: "Why Edge for AI" },
      { id: "the-shape", label: "The Shape of an AI Edge Function" },
      { id: "streaming", label: "Streaming Responses" },
      { id: "auth-secrets", label: "Auth and Secret Management" },
      { id: "rate-limit", label: "Rate Limiting and Abuse" },
      { id: "observability", label: "Observability" },
      { id: "cost", label: "Cost Control" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-edge">Why Edge Functions for AI Features</h2>
        <p>
          The classic backend pattern &mdash; a long-running Node/Python server &mdash;
          is wrong for most AI workloads. AI calls are bursty, often long, and
          per-request. A server idles 90% of the time and gets crushed during traffic
          spikes. Edge functions are the right shape: spin up per request, scale
          horizontally, deploy globally, and cost zero when not invoked.
        </p>
        <p>
          For the AI surface of a static-export site, edge functions are the canonical
          choice. Vercel, Cloudflare Workers, AWS Lambda@Edge &mdash; the platforms
          differ on tooling but the architecture is the same.
        </p>

        <h2 id="the-shape">The Shape of an AI Edge Function</h2>
        <p>
          A production AI edge function has six concerns:
        </p>
        <ol>
          <li><strong>Auth.</strong> Verify the caller before doing any work.</li>
          <li><strong>Input validation.</strong> Reject malformed payloads early.</li>
          <li><strong>Rate limit.</strong> Per-user, per-IP, per-route.</li>
          <li><strong>Provider call.</strong> The actual AI request to OpenAI / Anthropic / your own model.</li>
          <li><strong>Stream back.</strong> Don&apos;t wait for the whole response &mdash; stream it.</li>
          <li><strong>Log.</strong> Anonymized request/response pairs for evals and abuse detection.</li>
        </ol>
        <p>
          Each concern is 5&ndash;15 lines. The whole function is usually under 150 lines.
          Resist the urge to add business logic here &mdash; this is a thin proxy with
          guardrails.
        </p>

        <h2 id="streaming">Streaming Responses Properly</h2>
        <p>
          The killer feature of AI on the web is streaming: text appears as the model
          generates it, not after 12 seconds of waiting. Streaming requires the edge
          function to return a <code>ReadableStream</code> rather than a JSON response.
          The client uses <code>fetch</code> with the response body as a stream.
        </p>
        <p>
          Three things to get right:
        </p>
        <ul>
          <li>Use the Server-Sent Events format or raw text chunks &mdash; not WebSockets.</li>
          <li>Set the <code>Content-Type</code> to <code>text/event-stream</code>.</li>
          <li>Disable buffering on the response (no <code>Content-Length</code>, no proxy buffering).</li>
        </ul>

        <h2 id="auth-secrets">Auth and Secret Management</h2>
        <p>
          The two non-negotiables for an AI edge function:
        </p>
        <ul>
          <li><strong>Never expose the AI provider key to the browser.</strong> Every key request goes through your edge function.</li>
          <li><strong>Always authenticate the caller.</strong> Even on free tiers. Either a logged-in user token or, at minimum, a CAPTCHA challenge for anonymous traffic.</li>
        </ul>

        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">The Day-One Checklist</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Provider keys live only in environment variables.</li>
            <li>&bull; Every endpoint authenticates the caller (token, session, or CAPTCHA).</li>
            <li>&bull; Per-user and per-IP rate limits configured.</li>
            <li>&bull; Streaming format tested for buffering.</li>
            <li>&bull; Logs scrubbed of PII before storage.</li>
          </ul>
        </div>

        <h2 id="rate-limit">Rate Limiting and Abuse</h2>
        <p>
          Within hours of going public, an AI endpoint will get hammered &mdash; by curious
          users, by bad actors trying to use your key to bootstrap their own product, by
          bots. Three layers of defense:
        </p>
        <ol>
          <li><strong>Per-user.</strong> X requests/hour per authenticated user.</li>
          <li><strong>Per-IP.</strong> Y requests/hour per IP. Catches anonymous abuse.</li>
          <li><strong>Per-route.</strong> Global ceiling per route. Catches everything else.</li>
        </ol>
        <p>
          Use a managed rate-limiter like Upstash Ratelimit (Redis-backed) or
          Vercel&apos;s built-in. Roll your own only if you have a reason.
        </p>

        <h2 id="observability">Observability That Actually Helps</h2>
        <p>
          Three logs you must keep:
        </p>
        <ul>
          <li><strong>Request log</strong> &mdash; timestamp, user ID hash, route, status. For abuse detection.</li>
          <li><strong>Eval log</strong> &mdash; input prompt, output text. Sampled (10%) for quality monitoring. PII-scrubbed.</li>
          <li><strong>Cost log</strong> &mdash; per-request tokens in and out. For budget control.</li>
        </ul>
        <p>
          Don&apos;t log raw user input or AI output without scrubbing. PII shows up
          quickly and the cleanup is painful.
        </p>

        <h2 id="cost">Cost Control</h2>
        <p>
          Edge function compute is cheap; the AI provider bills are not. Three controls
          that matter:
        </p>
        <ol>
          <li><strong>Per-user budget.</strong> Hard cap on tokens per user per day.</li>
          <li><strong>Per-route budget.</strong> Total spend ceiling per AI feature.</li>
          <li><strong>Cheap model fallback.</strong> Try the cheaper model first; escalate only on low confidence.</li>
        </ol>

        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The cheapest AI features run a small model 80% of the time and a frontier
          model 20% of the time. The expensive ones run frontier on every request.
          The choice is yours &mdash; design for it.
        </blockquote>

        <p>
          For broader context see{" "}
          <a href="/blog/nextjs-static-export-ai-sites">Next.js static export trade-offs</a>{" "}
          and{" "}
          <a href="/services/ai-systems/">our AI systems service</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Vercel vs Cloudflare Workers vs AWS Lambda?</strong> All capable for
          AI proxying. Vercel for tight Next.js integration, Cloudflare for cost at
          scale, AWS for compliance-heavy environments.
        </p>
        <p>
          <strong>How long can an edge function run?</strong> Varies. Vercel: up to 25
          seconds for Hobby, 60+ for Pro with streaming. Plan for sub-30s end-to-end.
        </p>
        <p>
          <strong>What about cold starts?</strong> A real concern for traditional
          serverless, much less for modern edge runtimes. Test under load.
        </p>
      </>
    ),
  },
  {
    slug: "modern-web-stack-ai-product",
    title: "Choosing a Modern Web Stack for an AI Product in 2026",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "10 min read",
    date: "June 8, 2026",
    excerpt:
      "The 2026 AI product stack is converging fast. Here is the practical reference architecture and the trade-offs of each layer for builders shipping today.",
    author: "Flowtix Team",
    tags: ["Web Stack", "AI Product", "Architecture"],
    toc: [
      { id: "stack-shape", label: "The Shape of a Modern AI Stack" },
      { id: "frontend", label: "Frontend" },
      { id: "edge", label: "Edge Layer" },
      { id: "data", label: "Data Layer" },
      { id: "ai-layer", label: "AI Layer" },
      { id: "auth", label: "Auth and Identity" },
      { id: "obs", label: "Observability" },
      { id: "deploy", label: "Deploy and CI/CD" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="stack-shape">The Shape of a Modern AI Product Stack</h2>
        <p>
          By 2026, the &ldquo;modern AI stack&rdquo; has consolidated. A small builder
          today picks from a handful of canonical options at each layer and gets a
          production-grade system in days, not months. The novelty is gone; the leverage
          is in <em>what you build with it</em>, not <em>how you build it</em>.
        </p>
        <p>
          What follows is the reference stack we recommend to AI product teams of
          1&ndash;15 people. Larger orgs can deviate; smaller orgs should not.
        </p>

        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">The 7 Layers</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Frontend &mdash; React/Next.js with static export where possible.</li>
            <li>&bull; Edge &mdash; Vercel or Cloudflare Workers for AI proxying.</li>
            <li>&bull; Data &mdash; Postgres for structured, vector DB for semantic.</li>
            <li>&bull; AI &mdash; Anthropic or OpenAI for frontier; smaller open for specific tasks.</li>
            <li>&bull; Auth &mdash; Managed (Clerk, Auth0, or platform-native).</li>
            <li>&bull; Observability &mdash; structured logs + product analytics.</li>
            <li>&bull; CI/CD &mdash; Git-driven with platform auto-deploy.</li>
          </ul>
        </div>

        <h2 id="frontend">Frontend</h2>
        <p>
          <strong>Default:</strong> Next.js 16 with static export where feasible.
          React 19, TypeScript, Tailwind v4 for styling, Framer Motion for interactions.
          This combination is well-supported, ships fast, and integrates cleanly with
          the rest of the stack.
        </p>
        <p>
          <strong>When to deviate:</strong> Pure native app? Skip Next.js, use Expo or
          native frameworks. Heavy server-side rendering needs? Skip static export, use
          Next.js with Node runtime. Otherwise default.
        </p>

        <h2 id="edge">Edge Layer</h2>
        <p>
          <strong>Default:</strong> Vercel Edge Functions or Cloudflare Workers. Both
          handle AI proxying, streaming, and rate limiting well. Choose Vercel for
          tight Next.js integration; choose Cloudflare for cost at scale (their pricing
          is more predictable past the free tier).
        </p>
        <p>
          <strong>When to deviate:</strong> Compliance constraints (HIPAA, FedRAMP)
          often push you to AWS Lambda or self-hosted. For most SMB SaaS, the managed
          edge platforms are fine.
        </p>

        <h2 id="data">Data Layer</h2>
        <p>
          <strong>Default:</strong> Postgres for structured data (managed: Supabase,
          Neon, RDS). A vector database for semantic search (pgvector if you&apos;re
          already on Postgres; otherwise Pinecone or Weaviate).
        </p>
        <p>
          <strong>When to deviate:</strong> Massive analytical workloads? Add a
          warehouse (ClickHouse, Snowflake) downstream. Heavy real-time needs? Add
          Redis. Don&apos;t add either on day one.
        </p>

        <h2 id="ai-layer">AI Layer</h2>
        <p>
          <strong>Default:</strong> Anthropic Claude for frontier-quality reasoning and
          long context. OpenAI for tool ecosystem and broad coverage. A smaller open
          model (Llama, Mistral) for high-volume specific tasks where cost dominates.
        </p>
        <p>
          <strong>Architecture:</strong> Wrap the providers behind your own thin
          interface so you can swap. Never call a provider SDK directly from frontend
          code. Always route through your edge layer.
        </p>

        <h2 id="auth">Auth and Identity</h2>
        <p>
          <strong>Default:</strong> Managed auth. Clerk, Auth0, Supabase Auth, or
          WorkOS for B2B. Do not roll your own. The cost in security risk is
          enormous compared to the $20&ndash;$200/month for the managed product.
        </p>
        <p>
          <strong>When to deviate:</strong> Highly regulated environments where you
          need custom audit trails. Even then, start with managed and migrate later.
        </p>

        <h2 id="obs">Observability</h2>
        <p>
          <strong>Default:</strong> Sentry for errors, PostHog or Mixpanel for product
          analytics, structured logs to BetterStack or Axiom. For AI specifically,
          LangSmith or Helicone if you need detailed prompt/response inspection.
        </p>
        <p>
          <strong>Critical:</strong> Pipe AI evals into your observability so you can
          spot quality drift over time. Without that, you ship quality regressions
          silently.
        </p>

        <h2 id="deploy">Deploy and CI/CD</h2>
        <p>
          <strong>Default:</strong> Git-driven deployment with the platform doing the
          work. Vercel/Cloudflare both auto-deploy from main. Add a staging branch for
          larger changes. Run lint, type-check, and unit tests in CI on every PR.
        </p>
        <p>
          <strong>What not to do:</strong> Custom Docker pipelines on day one. Migrate
          to that if and when you outgrow managed platforms &mdash; not before.
        </p>

        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The 2026 AI stack is boring. That&apos;s the feature. Boring stacks ship
          faster, fail less, and let the team spend its energy on the product, not the
          infrastructure.
        </blockquote>

        <p>
          For more detail see{" "}
          <a href="/blog/nextjs-static-export-ai-sites">Next.js static export trade-offs</a>{" "}
          and{" "}
          <a href="/blog/vercel-edge-functions-ai">edge functions for AI</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Do we need a backend engineer?</strong> Eventually. Not for V1 with
          this stack &mdash; a strong full-stack TypeScript engineer covers it.
        </p>
        <p>
          <strong>What about Python?</strong> Useful for data pipelines and model
          training. For product APIs, TypeScript on the edge is faster to ship.
        </p>
        <p>
          <strong>How much should this all cost monthly?</strong> $200&ndash;$800 for a
          pre-PMF stage; $1k&ndash;$5k for early scale.
        </p>
      </>
    ),
  },
  {
    slug: "streaming-ai-responses-web",
    title: "Streaming AI Responses on the Web: A Practical Guide",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "8 min read",
    date: "June 9, 2026",
    excerpt:
      "Streaming is what turns AI from a slow API into a snappy product. Here is the practical guide to streaming responses on the web in 2026.",
    author: "Flowtix Team",
    tags: ["Streaming", "Web Dev", "AI Architecture"],
    toc: [
      { id: "why-stream", label: "Why Streaming Matters" },
      { id: "options", label: "The Three Options" },
      { id: "sse", label: "SSE: The Default Choice" },
      { id: "websocket", label: "WebSocket: When You Need Bi-Directional" },
      { id: "fetch-chunks", label: "Raw fetch: The Simplest" },
      { id: "ux", label: "UX Of Streaming Done Right" },
      { id: "pitfalls", label: "Common Pitfalls" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-stream">Why Streaming Matters For AI UX</h2>
        <p>
          A frontier-model response takes 4&ndash;15 seconds end-to-end. Without
          streaming, the user stares at a spinner the whole time. With streaming, the
          first words arrive in 200&ndash;800ms and the response unfolds smoothly. The
          subjective &ldquo;feel&rdquo; difference is enormous. Same model, same total
          time &mdash; entirely different product.
        </p>
        <p>
          Streaming is not optional in 2026. Any AI feature longer than 1.5 seconds
          end-to-end must stream. The UX cost of not streaming is too high.
        </p>

        <h2 id="options">The Three Streaming Options On The Web</h2>
        <ol>
          <li><strong>Server-Sent Events (SSE)</strong> &mdash; one-way server-to-client over HTTP. The default.</li>
          <li><strong>WebSocket</strong> &mdash; bi-directional, persistent connection.</li>
          <li><strong>Raw fetch with chunked transfer</strong> &mdash; the simplest, plain HTTP streaming.</li>
        </ol>
        <p>
          Most AI use cases need exactly the first or third. WebSockets are over-engineered
          for one-shot AI responses; they earn their complexity only when the
          conversation is truly bi-directional with frequent user interrupts.
        </p>

        <h2 id="sse">SSE: The Default Choice</h2>
        <p>
          SSE is HTTP with a streaming response body and a specific text format. The
          server sends events like:
        </p>
        <pre><code>{`data: {"text": "Hello"}\n\ndata: {"text": " world"}\n\ndata: [DONE]\n\n`}</code></pre>
        <p>
          The client uses <code>EventSource</code> or a <code>fetch</code> with a
          stream reader. SSE has automatic reconnection in the browser, which matters
          when networks flake. The trade-off: one-way only, and limited to 6
          concurrent SSE connections per origin (browser limit). For AI, both of those
          are typically fine.
        </p>

        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">SSE Server-Side Pattern</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Set Content-Type to <code>text/event-stream</code>.</li>
            <li>&bull; Disable proxy buffering (<code>X-Accel-Buffering: no</code> on nginx).</li>
            <li>&bull; Flush after each chunk.</li>
            <li>&bull; Send a final <code>[DONE]</code> sentinel so the client knows to close.</li>
          </ul>
        </div>

        <h2 id="websocket">WebSocket: When You Actually Need It</h2>
        <p>
          Use WebSocket when:
        </p>
        <ul>
          <li>The user can interrupt the AI mid-stream and the server needs that input immediately.</li>
          <li>You have multi-modal streams (audio + text simultaneously).</li>
          <li>You&apos;re building a multi-user collaborative AI room.</li>
        </ul>
        <p>
          Don&apos;t use WebSocket because it&apos;s &ldquo;more modern.&rdquo; The
          extra connection lifecycle, reconnect logic, and infrastructure cost rarely
          earns their keep for one-shot AI completions.
        </p>

        <h2 id="fetch-chunks">Raw fetch With Chunked Transfer</h2>
        <p>
          The simplest streaming: a plain <code>fetch</code> where the server returns
          <code>Content-Type: text/plain</code> and the body is just text streamed
          in chunks. The client reads from <code>response.body.getReader()</code>.
        </p>
        <p>
          When this works: you don&apos;t need to distinguish events. The model is
          outputting plain text. No structured intermediate states (no &ldquo;thinking,
          searching, writing&rdquo; phases). It&apos;s the path of least resistance and
          we use it more often than SSE for raw text generation.
        </p>

        <h2 id="ux">UX Of Streaming Done Right</h2>
        <p>
          Streaming is a UX pattern, not just a transport. Get these details right:
        </p>
        <ul>
          <li><strong>Cursor.</strong> A visible cursor showing &ldquo;still generating&rdquo; matters. Even a blinking pipe character beats no signal.</li>
          <li><strong>Smooth typing speed.</strong> Don&apos;t let tokens arrive in bursts. Buffer briefly and release smoothly &mdash; reads more natural than jittery batches.</li>
          <li><strong>Stop button.</strong> Always offer a way to interrupt mid-stream. Required for trust.</li>
          <li><strong>Status text.</strong> If the AI is doing multi-step work (retrieval, then generation), show what phase it&apos;s in.</li>
        </ul>

        <h2 id="pitfalls">Common Pitfalls</h2>
        <ol>
          <li><strong>Proxy buffering.</strong> CDNs and proxies buffer responses by default. Disable for streaming routes.</li>
          <li><strong>Content-Length header.</strong> Setting it kills streaming. Don&apos;t.</li>
          <li><strong>Reverse-proxy timeouts.</strong> Some platforms cap stream duration at 30s. Plan around it.</li>
          <li><strong>Mobile flakiness.</strong> Long streams on mobile networks fail. Build retry/resume.</li>
          <li><strong>Token-counting client-side.</strong> Don&apos;t. The server should bill, the client shouldn&apos;t need to know.</li>
        </ol>

        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          The streaming AI response is the modern progress indicator. A still spinner
          tells the user nothing is happening. A streamed token tells them the system
          is alive and working. Choose to stream.
        </blockquote>

        <p>
          See also{" "}
          <a href="/blog/vercel-edge-functions-ai">edge functions for AI</a> and{" "}
          <a href="/blog/core-web-vitals-ai-apps">Core Web Vitals for AI apps</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Can we stream JSON responses?</strong> Use SSE with JSON-per-event,
          not chunked transfer of a partial JSON document.
        </p>
        <p>
          <strong>Does streaming break SEO?</strong> Streaming is for interactive use
          only. SEO content should be statically rendered.
        </p>
        <p>
          <strong>What about resume-after-disconnect?</strong> Possible with SSE
          <code>Last-Event-ID</code> header but rarely worth the complexity for short
          AI streams.
        </p>
      </>
    ),
  },
  {
    slug: "core-web-vitals-ai-apps",
    title: "Core Web Vitals for AI Apps: What Actually Matters",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "9 min read",
    date: "June 10, 2026",
    excerpt:
      "Core Web Vitals are mostly built for static sites. Here is how to think about them for AI apps — what actually matters, what to ignore, and what Google has quietly added.",
    author: "Flowtix Team",
    tags: ["Core Web Vitals", "Performance", "AI Apps"],
    toc: [
      { id: "cwv-now", label: "Core Web Vitals in 2026" },
      { id: "ai-tension", label: "The Tension With AI Apps" },
      { id: "lcp", label: "LCP — Largest Contentful Paint" },
      { id: "inp", label: "INP — Interaction to Next Paint" },
      { id: "cls", label: "CLS — Cumulative Layout Shift" },
      { id: "ai-specific", label: "AI-Specific Performance Metrics" },
      { id: "improvements", label: "High-Impact Improvements" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="cwv-now">Core Web Vitals in 2026</h2>
        <p>
          Google&apos;s Core Web Vitals are three numbers (LCP, INP, CLS) that
          quietly affect search rankings and explicitly affect user experience. They
          were designed for content sites. AI apps challenge their assumptions:
          there&apos;s no &ldquo;largest contentful paint&rdquo; when the most
          meaningful content is a streamed AI response that arrives 4 seconds in.
        </p>
        <p>
          The good news: most AI apps land in a hybrid pattern (static marketing +
          interactive AI surface) where the marketing pages can hit excellent CWV and
          the AI surface optimizes for different metrics. The mistake is treating both
          surfaces the same.
        </p>

        <h2 id="ai-tension">The Tension Between AI UX and CWV</h2>
        <p>
          A pure AI product surface has three uncomfortable interactions with CWV:
        </p>
        <ul>
          <li>The &ldquo;largest content&rdquo; arrives after a network round-trip and 4&ndash;15 seconds of model generation &mdash; not within 2.5s.</li>
          <li>The page may be interactive long before the AI output finishes &mdash; INP can be great while &ldquo;perceived speed&rdquo; is bad.</li>
          <li>AI-generated content frequently shifts layout as new tokens arrive &mdash; CLS can spike artificially.</li>
        </ul>
        <p>
          The fix is not to game the metrics. It&apos;s to optimize for the actual user
          experience and let the metrics catch up.
        </p>

        <h2 id="lcp">LCP &mdash; Largest Contentful Paint</h2>
        <p>
          Target: under 2.5 seconds. Means the largest meaningful element of the page
          loads quickly.
        </p>
        <p>
          For AI apps, the largest element is usually the chat shell or the input box
          &mdash; not the AI output. Optimize for the shell: preload the font, inline
          critical CSS, defer non-critical JS, use a CDN. Hit the LCP target with the
          shell alone. The AI output arrives later; that&apos;s fine.
        </p>

        <h2 id="inp">INP &mdash; Interaction to Next Paint</h2>
        <p>
          Target: under 200ms. Means the page responds quickly to user input.
        </p>
        <p>
          This is the most important CWV for AI apps because it&apos;s about
          responsiveness, not load time. The trap: heavy JS bundles that block the main
          thread when the user clicks the AI button. Three fixes:
        </p>
        <ol>
          <li>Dynamic-import the AI logic. Don&apos;t load it until the user is about to use it.</li>
          <li>Use Web Workers for any client-side processing (token counting, parsing).</li>
          <li>Avoid blocking animations during AI generation.</li>
        </ol>

        <div className="my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl">
          <div className="text-label text-blue-400 mb-3">The Top 5 INP Killers In AI Apps</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Heavy syntax highlighting on streamed code blocks.</li>
            <li>&bull; Re-rendering the whole conversation on each token.</li>
            <li>&bull; Synchronous markdown rendering on every chunk.</li>
            <li>&bull; Auto-scroll that fights user scroll.</li>
            <li>&bull; Token-counting JS that runs on every keypress.</li>
          </ul>
        </div>

        <h2 id="cls">CLS &mdash; Cumulative Layout Shift</h2>
        <p>
          Target: under 0.1. Means the page doesn&apos;t shift unexpectedly as it loads.
        </p>
        <p>
          For AI apps, the streaming response inherently shifts layout as new tokens
          arrive. The fix is not to stop the shift &mdash; it&apos;s to make the layout
          shift <em>predictable</em>. Reserve space for AI output before it arrives. Pin
          the input box. Use <code>min-height</code> on streaming containers so they
          don&apos;t collapse and re-expand.
        </p>

        <h2 id="ai-specific">AI-Specific Performance Metrics To Add</h2>
        <p>
          Beyond CWV, track these for AI apps:
        </p>
        <ul>
          <li><strong>Time to first token (TTFT)</strong> &mdash; how long until the AI starts streaming. Target: under 800ms.</li>
          <li><strong>Tokens per second</strong> &mdash; streaming speed once it starts. Target: above 30 tps.</li>
          <li><strong>End-to-end latency</strong> &mdash; click to final output. Target depends on use case; for chat, under 10s.</li>
          <li><strong>Bounce on first prompt</strong> &mdash; users who type one prompt and leave.</li>
        </ul>

        <h2 id="improvements">High-Impact Improvements</h2>
        <ol>
          <li><strong>Static-export the marketing surface.</strong> Free CWV wins.</li>
          <li><strong>Dynamic-import heavy AI components.</strong> Reduces initial JS.</li>
          <li><strong>Preconnect to your AI endpoint.</strong> Shaves 100&ndash;300ms off first request.</li>
          <li><strong>Stream from edge.</strong> Cuts TTFT significantly.</li>
          <li><strong>Reserve layout space</strong> for streaming content.</li>
          <li><strong>Use semantic markdown rendering</strong> that batches updates, not per-token re-renders.</li>
        </ol>

        <blockquote className="border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic">
          Core Web Vitals on AI apps measure the shell, not the AI. Optimize the
          shell to land in the green zone, then track the AI-specific metrics (TTFT,
          tokens per second) for the experience that actually matters.
        </blockquote>

        <p>
          For more on the architecture see{" "}
          <a href="/blog/nextjs-static-export-ai-sites">Next.js static export</a> and{" "}
          <a href="/blog/streaming-ai-responses-web">streaming AI responses</a>.
        </p>

        <h2 id="faq">FAQ</h2>
        <p>
          <strong>Does CWV affect SEO for AI apps?</strong> Yes for indexable pages. For
          authenticated app surfaces, less directly but still affects user retention.
        </p>
        <p>
          <strong>What tool to monitor?</strong> Vercel Speed Insights, PageSpeed
          Insights, or any RUM platform. The key is real-user data, not lab-only.
        </p>
        <p>
          <strong>Should we lazy-load the AI shell itself?</strong> No &mdash; the user
          came to use AI. Lazy-load the heavy bits inside it.
        </p>
      </>
    ),
  },
];
