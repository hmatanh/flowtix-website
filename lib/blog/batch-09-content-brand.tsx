import type { Post } from "@/lib/posts";

const C_PURPLE = "my-8 p-6 border border-purple-500/30 bg-purple-500/5 rounded-2xl";
const Q_PURPLE = "border-l-2 border-purple-500 pl-6 my-8 text-[#bbb] italic";
const C_PINK = "my-8 p-6 border border-pink-500/30 bg-pink-500/5 rounded-2xl";
const Q_PINK = "border-l-2 border-pink-500 pl-6 my-8 text-[#bbb] italic";

export const batch9: Post[] = [
  {
    slug: "brand-voice-guidelines-ai-era",
    title: "Brand Voice Guidelines for the AI Era",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "9 min read",
    date: "July 21, 2026",
    excerpt:
      "Brand voice docs written in 2021 are useless for AI in 2026. Here is the new shape of a brand voice guide that AI tools can actually enforce.",
    author: "Flowtix Team",
    tags: ["Brand Voice", "AI Content", "Brand Guidelines"],
    toc: [
      { id: "old-voice", label: "Why Old Voice Docs Fail With AI" },
      { id: "new-shape", label: "The New Shape" },
      { id: "personality", label: "Personality Anchors" },
      { id: "rules", label: "Enforceable Rules" },
      { id: "banned", label: "Banned Phrases" },
      { id: "examples", label: "Examples (Good vs Bad)" },
      { id: "ai-prompts", label: "AI Prompts From Voice Doc" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="old-voice">Why 2021 Brand Voice Docs Fail With AI</h2>
        <p>
          Most brand voice docs were written for humans. They&apos;re full of
          metaphors and vibes: &ldquo;our voice is like a smart friend at a dinner
          party.&rdquo; A human writer can interpret that. An AI cannot. AI needs
          enforceable rules: specific sentence patterns, banned words, required
          structures. Without them, AI flattens any brand voice into the same generic
          AI tone.
        </p>

        <h2 id="new-shape">The New Shape of a Brand Voice Doc</h2>
        <ol>
          <li>Personality anchors (3&ndash;5 adjectives with anti-adjectives).</li>
          <li>Enforceable rules (8&ndash;12 specific dos and don&apos;ts).</li>
          <li>Banned phrases (concrete list).</li>
          <li>Required structures (specific patterns).</li>
          <li>Good-vs-bad examples (3&ndash;5 paired).</li>
          <li>AI prompt templates derived from the above.</li>
        </ol>

        <h2 id="personality">Personality Anchors</h2>
        <p>
          Three to five adjectives. Each paired with what we are NOT. Example:
          &ldquo;Direct, not aggressive. Warm, not cute. Confident, not arrogant.
          Curious, not naive.&rdquo; The anti-adjective forces clarity that single
          adjectives miss.
        </p>

        <h2 id="rules">Enforceable Rules</h2>
        <p>
          The kind of rules an AI can actually obey. Examples:
        </p>
        <ul>
          <li>&ldquo;Use sentences of 8&ndash;20 words. Vary length.&rdquo;</li>
          <li>&ldquo;Never start a sentence with &lsquo;Indeed&rsquo; or &lsquo;Furthermore.&rsquo;&rdquo;</li>
          <li>&ldquo;Use second person (you, your) more than third.&rdquo;</li>
          <li>&ldquo;Cite at least one specific example per major point.&rdquo;</li>
        </ul>

        <h2 id="banned">Banned Phrases</h2>
        <p>
          A concrete list of phrases the AI must never produce. Many brands ban: &ldquo;in
          today&apos;s fast-paced world,&rdquo; &ldquo;the digital landscape,&rdquo;
          &ldquo;leverage synergies,&rdquo; &ldquo;at the end of the day,&rdquo;
          &ldquo;cutting-edge.&rdquo;
        </p>
        <p>
          The banned list is enforced programmatically: any output containing a banned
          phrase gets returned to the model with the instruction to rewrite.
        </p>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Three-Section Voice Doc</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; <strong>Identity:</strong> personality anchors + point of view.</li>
            <li>&bull; <strong>Rules:</strong> enforceable dos and don&apos;ts.</li>
            <li>&bull; <strong>Examples:</strong> good vs bad pairs.</li>
          </ul>
        </div>

        <h2 id="examples">Examples (Good vs Bad)</h2>
        <p>
          Pair every rule with a concrete example. Bad: &ldquo;We&apos;re excited to
          announce our cutting-edge platform.&rdquo; Good: &ldquo;The new platform
          ships next Tuesday. Here&apos;s what changed and why it matters.&rdquo;
        </p>

        <h2 id="ai-prompts">AI Prompts Derived From the Voice Doc</h2>
        <p>
          The voice doc isn&apos;t just for humans &mdash; it becomes a prompt the AI
          reads on every generation. Pull the rules, the banned list, and one or two
          examples into a system prompt. The AI consults them while drafting. Voice
          consistency rises dramatically.
        </p>

        <blockquote className={Q_PURPLE}>
          A brand voice doc in 2026 isn&apos;t for the human writer alone. It&apos;s
          the contract between your brand and the AI that drafts on its behalf. Write
          it accordingly.
        </blockquote>

        <p>See <a href="/blog/branding-ai-startup-lessons">branding an AI startup</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How long should the doc be?</strong> 3&ndash;5 pages, dense. Not a 30-page brand bible.</p>
        <p><strong>How often to update?</strong> Quarterly review, annual rewrite.</p>
        <p><strong>One voice or many?</strong> Sub-voices for different contexts (sales, support, marketing) all anchored to a single identity.</p>
      </>
    ),
  },
  {
    slug: "ai-video-small-teams",
    title: "AI Video for Small Teams: Tools That Are Actually Usable",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 22, 2026",
    excerpt:
      "AI video tools have stratified. Some are toys; some are production-ready. Here is the practical 2026 guide for small teams making video without a studio.",
    author: "Flowtix Team",
    tags: ["AI Video", "Content Production", "Tools"],
    toc: [
      { id: "where-we-are", label: "Where AI Video Is in 2026" },
      { id: "categories", label: "Five Categories of AI Video" },
      { id: "what-works", label: "What Works For Small Teams" },
      { id: "what-fails", label: "What Still Fails" },
      { id: "workflow", label: "A Practical Production Workflow" },
      { id: "voice", label: "Voice and Avatar Considerations" },
      { id: "rights", label: "Rights and Disclosure" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="where-we-are">Where AI Video Is in 2026</h2>
        <p>
          AI video matured fast: text-to-video for short clips, AI avatars for
          explainer videos, auto-editing for raw footage, AI-generated b-roll. Some of
          it is genuinely production-ready. Some is still demo-only. The lines have
          moved quickly &mdash; what was unusable in 2024 may be standard now, and vice
          versa.
        </p>

        <h2 id="categories">Five Categories of AI Video</h2>
        <ol>
          <li><strong>Text-to-video generation</strong> &mdash; short clips from prompts.</li>
          <li><strong>AI avatars</strong> &mdash; talking-head video from script.</li>
          <li><strong>AI editing</strong> &mdash; auto-cut, transcribe-to-edit, captioning.</li>
          <li><strong>AI b-roll and stock</strong> &mdash; generated visuals to support narration.</li>
          <li><strong>AI translation/dubbing</strong> &mdash; localize one video to many languages.</li>
        </ol>

        <h2 id="what-works">What Works For Small Teams</h2>
        <ul>
          <li>AI captioning and transcription &mdash; near-perfect, saves hours.</li>
          <li>Transcribe-to-edit interfaces &mdash; edit video like text.</li>
          <li>AI avatars for explainers (when disclosed as AI).</li>
          <li>AI translation/dubbing for content localization.</li>
          <li>Auto-cropping for vertical/horizontal repurposing.</li>
        </ul>

        <h2 id="what-fails">What Still Fails for Production Use</h2>
        <ul>
          <li>Long-form text-to-video &mdash; uncanny, hard to control.</li>
          <li>AI lip-sync on real speakers &mdash; still detectable.</li>
          <li>Complex scene generation &mdash; physics and continuity break.</li>
          <li>Voice cloning of specific people without consent &mdash; legal and ethical minefield.</li>
        </ul>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Small-Team Video Stack</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Shoot or record narration normally.</li>
            <li>&bull; AI transcribe + transcript-based editor.</li>
            <li>&bull; AI auto-captions.</li>
            <li>&bull; AI b-roll for cutaways.</li>
            <li>&bull; Human pass for storytelling, pacing, music.</li>
          </ul>
        </div>

        <h2 id="workflow">A Practical Production Workflow</h2>
        <ol>
          <li>Record raw narration on a phone or basic mic.</li>
          <li>Run through AI transcription (1 minute per 10 minutes of audio).</li>
          <li>Edit by deleting text in the transcript &mdash; corresponding audio cuts.</li>
          <li>Drop in AI-generated b-roll where appropriate.</li>
          <li>Add captions (auto-generated, human-review).</li>
          <li>Human pass for music, pacing, intro/outro.</li>
        </ol>

        <h2 id="voice">Voice and Avatar Considerations</h2>
        <p>
          AI avatars are usable in 2026 for explainers if disclosed. Voice cloning of
          your own voice is fine; cloning someone else without consent is not. Some
          jurisdictions now require disclosure when synthetic media is used in
          marketing.
        </p>

        <h2 id="rights">Rights and Disclosure</h2>
        <p>
          Three rules:
        </p>
        <ol>
          <li>Disclose AI use when not obvious.</li>
          <li>Never clone a voice or likeness without explicit consent.</li>
          <li>Check the AI vendor&apos;s training data terms &mdash; some have legal exposure.</li>
        </ol>

        <blockquote className={Q_PURPLE}>
          The small team in 2026 can produce more video at higher quality than a small
          studio could in 2020. The bottleneck is no longer production; it&apos;s the
          ideas that are worth producing.
        </blockquote>

        <p>See <a href="/blog/ai-content-strategy-framework">AI content strategy framework</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Best transcript editor?</strong> Multiple capable products. Test on your specific footage.</p>
        <p><strong>Avatar quality &mdash; can viewers tell?</strong> Mostly yes within 30 seconds. Disclose.</p>
        <p><strong>What about TikTok-style content?</strong> AI cropping + caption tools shine here. Hand editing still better for storytelling.</p>
      </>
    ),
  },
  {
    slug: "ai-image-generation-marketing",
    title: "AI Image Generation for Marketing: Workflows and Caveats",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 23, 2026",
    excerpt:
      "AI image generation went from toy to tool. Here is the practical 2026 workflow for marketing use — what works, what gets you sued, and what looks generic.",
    author: "Flowtix Team",
    tags: ["AI Images", "Marketing", "Visual Content"],
    toc: [
      { id: "where-now", label: "Where AI Image Generation Is" },
      { id: "use-cases", label: "Real Marketing Use Cases" },
      { id: "avoid", label: "Where To Avoid" },
      { id: "rights", label: "Rights and Licensing" },
      { id: "workflow", label: "A Practical Workflow" },
      { id: "brand", label: "Brand Consistency" },
      { id: "humans", label: "AI People in Imagery" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="where-now">Where AI Image Generation Is in 2026</h2>
        <p>
          AI image generation in 2026 is fast, varied, and frequently good. The frontier
          models produce images that pass professional inspection in many use cases.
          Where the technology still struggles: photorealistic groups of specific
          people, precise typography in images, brand-consistent series.
        </p>

        <h2 id="use-cases">Real Marketing Use Cases That Work</h2>
        <ul>
          <li>Abstract hero illustrations.</li>
          <li>Background patterns and textures.</li>
          <li>Product mockups (with permission rights cleared).</li>
          <li>Iconography and pictograms.</li>
          <li>Concept art for internal brainstorms.</li>
          <li>Social post visuals.</li>
        </ul>

        <h2 id="avoid">Where To Avoid AI Image Generation</h2>
        <ul>
          <li>Showing real customers (consent and authenticity issues).</li>
          <li>Editorial content depicting real events.</li>
          <li>Any image meant to look like documentary evidence.</li>
          <li>Diversity imagery used to imply customer demographics.</li>
        </ul>

        <h2 id="rights">Rights and Licensing</h2>
        <p>
          Two issues:
        </p>
        <ol>
          <li><strong>Input rights:</strong> the AI vendor&apos;s training data may have unresolved copyright claims. Read the vendor&apos;s indemnification.</li>
          <li><strong>Output rights:</strong> who owns the generated image? Most vendors grant commercial use. Some don&apos;t.</li>
        </ol>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">Three Vendor Questions</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Who owns the generated image?</li>
            <li>&bull; Do you indemnify against third-party copyright claims?</li>
            <li>&bull; What&apos;s your stance on opt-out for training data?</li>
          </ul>
        </div>

        <h2 id="workflow">A Practical Workflow</h2>
        <ol>
          <li>Brief: what role does this image play in the marketing piece?</li>
          <li>Generate 8&ndash;12 variations.</li>
          <li>Pick 2&ndash;3 candidates.</li>
          <li>Refine with iterations (sometimes 5&ndash;10 more rounds).</li>
          <li>Post-process in real image software (color match brand, crop, type overlay).</li>
          <li>Archive prompt + final for future consistency.</li>
        </ol>

        <h2 id="brand">Brand Consistency Across Generations</h2>
        <p>
          AI image models default to a generic style. Brand consistency requires
          either fine-tuning on your style or consistent prompting with style
          anchors. The fine-tuning route gives much better results at scale.
        </p>

        <h2 id="humans">AI People in Imagery</h2>
        <p>
          Honest guidance: if the image suggests a real customer or employee but is
          AI-generated, you&apos;re creating a problem. Disclose or avoid. The lazy
          &ldquo;AI happy diverse customers&rdquo; trend is starting to backfire as
          audiences recognize the pattern.
        </p>

        <blockquote className={Q_PURPLE}>
          AI image generation isn&apos;t a license to be lazy. The brands using it
          well treat it like any other creative tool: in service of a clear idea, in
          a recognizable style, with rights settled.
        </blockquote>

        <p>See <a href="/blog/brand-system-ai-can-use">brand systems AI can use</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Tools?</strong> Multiple. Test on your specific use case.</p>
        <p><strong>Stock or AI?</strong> Real stock for testimonials/people; AI for abstract/conceptual.</p>
        <p><strong>How much should I expect to iterate?</strong> 10&ndash;30 generations to get one keeper.</p>
      </>
    ),
  },
  {
    slug: "podcast-production-ai-workflow",
    title: "Podcast Production With AI: A Modern Workflow",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 24, 2026",
    excerpt:
      "Podcast production stopped being expensive. Here is the practical 2026 AI-assisted workflow that produces studio-quality episodes from a one-person team.",
    author: "Flowtix Team",
    tags: ["Podcast", "Audio", "AI Workflow"],
    toc: [
      { id: "shift", label: "The Production Shift" },
      { id: "recording", label: "Recording" },
      { id: "transcription", label: "Transcription and Editing" },
      { id: "audio-cleanup", label: "Audio Cleanup" },
      { id: "show-notes", label: "Show Notes and Chapters" },
      { id: "repurposing", label: "Repurposing Into Content" },
      { id: "distribution", label: "Distribution" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="shift">The Production Shift</h2>
        <p>
          A solo podcaster in 2026 can produce a 45-minute episode end-to-end in 2&ndash;3
          hours. The same workflow took 8&ndash;12 hours in 2020. AI compressed the
          production tail dramatically.
        </p>

        <h2 id="recording">Recording</h2>
        <p>
          Hardware: a USB mic and quiet room. Software: any modern remote recording
          platform with isolated tracks. The recording phase looks the same; AI doesn&apos;t
          touch it.
        </p>

        <h2 id="transcription">Transcription and Editing</h2>
        <p>
          AI transcription is near-perfect on clear audio. The killer feature: editing
          the transcript edits the audio. Delete a sentence in the transcript; the
          audio cuts. Rearrange paragraphs; audio reorders. Production time for a
          rough edit drops 80%.
        </p>

        <h2 id="audio-cleanup">Audio Cleanup</h2>
        <p>
          AI handles: noise reduction, leveling, removing &ldquo;ums,&rdquo; sibilance,
          background hum. Output quality on consumer mics now rivals what only studios
          could deliver in 2020.
        </p>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">Per-Episode AI Outputs</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Full transcript.</li>
            <li>&bull; Chapter markers with timestamps.</li>
            <li>&bull; Show notes with key quotes.</li>
            <li>&bull; Social posts (10&ndash;15 from a single episode).</li>
            <li>&bull; Newsletter version (700&ndash;1000 words).</li>
            <li>&bull; Audiogram clips for social.</li>
          </ul>
        </div>

        <h2 id="show-notes">Show Notes and Chapters</h2>
        <p>
          AI generates chapter markers from the transcript. Drafts show notes with key
          quotes pulled out. Human editor refines the framing. 90 minutes &rarr; 15
          minutes per episode.
        </p>

        <h2 id="repurposing">Repurposing Into Content</h2>
        <p>
          One 45-minute episode becomes:
        </p>
        <ul>
          <li>A 1000-word newsletter post.</li>
          <li>10&ndash;15 social posts (LinkedIn, X, Threads).</li>
          <li>3&ndash;5 short video clips with captions.</li>
          <li>One blog article expanding on a key idea.</li>
        </ul>
        <p>
          All AI-drafted, human-edited. The marginal cost of multi-format content is
          now low.
        </p>

        <h2 id="distribution">Distribution</h2>
        <p>
          AI doesn&apos;t magically grow your audience. Distribution still requires
          human strategy: guesting, cross-promotion, building an email list. AI helps
          with the production hygiene that lets you stay consistent &mdash; which is
          90% of audience growth.
        </p>

        <blockquote className={Q_PURPLE}>
          The barrier to a great podcast in 2026 isn&apos;t production. It&apos;s
          having something worth saying every week. AI removed the excuse of
          &ldquo;no time for production.&rdquo; The hard part is what it always was.
        </blockquote>

        <p>See <a href="/blog/repurpose-talk-month-content">repurposing one talk into a month of content</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Total monthly tool cost?</strong> $50&ndash;$150 for the AI stack.</p>
        <p><strong>Best for solo vs interview?</strong> Both. The transcript-based editing changes interview production most.</p>
        <p><strong>Quality vs studio?</strong> Indistinguishable to most listeners with good mics and AI cleanup.</p>
      </>
    ),
  },
  {
    slug: "newsletter-strategy-ai-glut",
    title: "Newsletter Strategy in the Age of AI Content Glut",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 25, 2026",
    excerpt:
      "Newsletters are getting harder to grow as AI floods inboxes. Here is the strategy that still works — and the metrics that show whether it&apos;s working.",
    author: "Flowtix Team",
    tags: ["Newsletter", "Email", "Content Strategy"],
    toc: [
      { id: "harder", label: "Why It&apos;s Harder Now" },
      { id: "what-cuts", label: "What Cuts Through" },
      { id: "cadence", label: "Cadence" },
      { id: "format", label: "Format" },
      { id: "ai-role", label: "Where AI Fits" },
      { id: "growth", label: "Growth Tactics That Still Work" },
      { id: "metrics", label: "Real Metrics" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="harder">Why Newsletters Are Harder To Grow Now</h2>
        <p>
          The inbox in 2026 is full of AI-generated newsletters that all sound the same.
          Open rates are down across the board. Reader attention is scarcer. Generic
          newsletter content gets ignored even when it&apos;s technically &ldquo;good.&rdquo;
        </p>

        <h2 id="what-cuts">What Cuts Through</h2>
        <ul>
          <li>A distinctive voice that readers recognize.</li>
          <li>A specific point of view, not balanced summaries.</li>
          <li>First-hand observation, not regurgitated industry news.</li>
          <li>Useful brevity &mdash; under 800 words usually.</li>
          <li>One idea per issue, not a curated bundle.</li>
        </ul>

        <h2 id="cadence">Cadence</h2>
        <p>
          Weekly is the sweet spot for most newsletters. Bi-weekly works for
          slower-research topics. Daily is generally over-broadcasting for most
          readers in 2026.
        </p>
        <p>
          The cadence is part of the brand. Predictability matters. Pick one; stay
          consistent.
        </p>

        <h2 id="format">Format</h2>
        <p>
          Three formats that work:
        </p>
        <ol>
          <li><strong>The essay.</strong> One idea, 600&ndash;1000 words, a strong point of view.</li>
          <li><strong>The curated brief.</strong> 5&ndash;7 high-signal items with original commentary.</li>
          <li><strong>The behind-the-scenes.</strong> Honest looks at how you do the work.</li>
        </ol>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Three Reader Promises</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Show up consistently.</li>
            <li>&bull; Sound like a specific person, not a brand.</li>
            <li>&bull; Be worth the 4 minutes you ask for.</li>
          </ul>
        </div>

        <h2 id="ai-role">Where AI Fits (And Doesn&apos;t)</h2>
        <p>
          AI helps with: research, outlining, drafting routine sections, editing for
          length. AI doesn&apos;t help with: point of view, anecdotes, the actual
          voice. Use it for the production tail, not the creative head.
        </p>

        <h2 id="growth">Growth Tactics That Still Work</h2>
        <ul>
          <li>Guesting on other newsletters and podcasts.</li>
          <li>Quality referrals (paid or earned).</li>
          <li>A clear value proposition on the signup page.</li>
          <li>A welcome sequence that earns the next open.</li>
          <li>Republishing best issues as standalone articles.</li>
        </ul>

        <h2 id="metrics">Real Metrics</h2>
        <p>
          Open rate is broken by Apple Mail Privacy Protection. Track instead:
        </p>
        <ul>
          <li>Click-through rate to your site.</li>
          <li>Reply rate (replies indicate strong engagement).</li>
          <li>Forward rate.</li>
          <li>Unsubscribe rate (rising is a warning).</li>
          <li>Net subscriber growth.</li>
        </ul>

        <blockquote className={Q_PURPLE}>
          The newsletter that grows in 2026 sounds unmistakably like one person. The
          ones that fail sound like committees or AI. The voice is the only durable
          competitive advantage.
        </blockquote>

        <p>See <a href="/blog/brand-voice-guidelines-ai-era">brand voice guidelines for the AI era</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How long to see traction?</strong> 6&ndash;12 months of consistent shipping.</p>
        <p><strong>Should we niche down?</strong> Yes. Generic newsletters lose to specific ones.</p>
        <p><strong>Paid tier?</strong> When you have a clear value proposition above the free version. Don&apos;t paywall mediocre content.</p>
      </>
    ),
  },
  {
    slug: "social-media-automation-not-bot",
    title: "Social Media Automation Without Sounding Like a Bot",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 26, 2026",
    excerpt:
      "Social automation went too far and audiences learned to spot it. Here is how to use automation thoughtfully — keeping the human visibility that earns reach.",
    author: "Flowtix Team",
    tags: ["Social Media", "Automation", "AI Content"],
    toc: [
      { id: "overreach", label: "The Automation Overreach" },
      { id: "what-to-auto", label: "What To Automate" },
      { id: "what-not", label: "What Not To Automate" },
      { id: "voice", label: "Voice At Scale" },
      { id: "schedule", label: "Scheduling Patterns" },
      { id: "engagement", label: "Engagement" },
      { id: "platform", label: "Platform Differences" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="overreach">The Automation Overreach</h2>
        <p>
          By 2024, social automation tools made it possible to schedule a year of posts
          in an afternoon. The result: timelines full of brand-generic, soulless
          content. Audiences learned to scroll past it. Reach collapsed. Most of the
          posting was waste.
        </p>

        <h2 id="what-to-auto">What To Automate</h2>
        <ul>
          <li>Scheduling and cross-posting (not the creation).</li>
          <li>Analytics aggregation.</li>
          <li>Comment moderation (flag spam, route real comments).</li>
          <li>Initial response drafting (with human send).</li>
          <li>Audience growth metrics tracking.</li>
        </ul>

        <h2 id="what-not">What Not To Automate</h2>
        <ul>
          <li>The actual content of posts &mdash; should be human-authored or AI-drafted with strong editing.</li>
          <li>Replies to real comments.</li>
          <li>DMs &mdash; auto-DMs are universally hated.</li>
          <li>Engagement on others&apos; content (the auto-like, auto-follow tactics).</li>
        </ul>

        <h2 id="voice">Voice At Scale</h2>
        <p>
          AI can draft against voice rules. Strong rules + human editor = posts that
          sound like you. Weak rules = generic social content that gets ignored.
        </p>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Test</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Print three of your scheduled posts and three competitors&apos; posts.</li>
            <li>&bull; Can a stranger tell which are yours?</li>
            <li>&bull; If no, voice is too generic. Fix before scaling production.</li>
          </ul>
        </div>

        <h2 id="schedule">Scheduling Patterns That Work</h2>
        <ul>
          <li>Batch creation, scheduled posting.</li>
          <li>Mix evergreen content with timely takes.</li>
          <li>Leave room for spontaneous posts (the highest performers).</li>
          <li>Don&apos;t over-schedule &mdash; quality beats quantity.</li>
        </ul>

        <h2 id="engagement">Engagement Is The Hardest To Automate</h2>
        <p>
          Replies, comments, DMs. AI can draft; humans should send. The brands that
          auto-reply with generic-looking AI lose followers fast.
        </p>

        <h2 id="platform">Platform Differences</h2>
        <ul>
          <li><strong>LinkedIn:</strong> Long-form posts work. AI drafting common; voice rules essential.</li>
          <li><strong>X/Twitter:</strong> Punchy, timely. Hard to automate well.</li>
          <li><strong>Threads/Bluesky:</strong> Conversational. Genuine voice rewarded.</li>
          <li><strong>TikTok/Reels:</strong> Hand-shot beats AI-generated almost always.</li>
        </ul>

        <blockquote className={Q_PURPLE}>
          The social brand that wins in 2026 looks more like an individual than a
          company. Automation enables the consistency; humanity earns the reach. The
          mix is the craft.
        </blockquote>

        <p>See <a href="/blog/brand-voice-guidelines-ai-era">brand voice guidelines</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Should we have a community manager?</strong> Yes &mdash; engagement is unautomatable.</p>
        <p><strong>How many posts per week?</strong> Depends on platform. Quality matters more than count.</p>
        <p><strong>Tools?</strong> Many capable. Pick by ease, not features.</p>
      </>
    ),
  },
  {
    slug: "repurpose-talk-month-content",
    title: "Repurposing One Talk Into a Month of Content (With AI)",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 27, 2026",
    excerpt:
      "Conference talks and webinars are a goldmine of repurposing. Here is the AI-assisted workflow that turns one 45-minute talk into 30+ pieces of content.",
    author: "Flowtix Team",
    tags: ["Content Repurposing", "AI Content", "Productivity"],
    toc: [
      { id: "the-asset", label: "The Asset You&apos;re Sitting On" },
      { id: "outputs", label: "30 Possible Outputs" },
      { id: "workflow", label: "The Workflow" },
      { id: "quality", label: "Maintaining Quality" },
      { id: "cadence", label: "Distribution Cadence" },
      { id: "metrics", label: "Metrics" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-asset">The Asset You&apos;re Sitting On</h2>
        <p>
          Every conference talk, webinar, or recorded customer call is a content asset.
          Most teams use the talk once and move on. The teams that systematically
          repurpose get 5&ndash;10x the audience attention from the same creative effort.
        </p>

        <h2 id="outputs">30 Possible Outputs From One Talk</h2>
        <ul>
          <li>A long-form blog post (the talk transcript, edited).</li>
          <li>5&ndash;10 social posts pulling key quotes.</li>
          <li>An email newsletter issue.</li>
          <li>3&ndash;5 short video clips for social.</li>
          <li>A LinkedIn carousel (10&ndash;12 slides).</li>
          <li>An audiogram or audio teaser.</li>
          <li>A SlideShare-style summary deck.</li>
          <li>A podcast episode (if not already audio).</li>
          <li>Pull-quote graphics.</li>
          <li>An interactive quiz or assessment.</li>
        </ul>

        <h2 id="workflow">The Workflow</h2>
        <ol>
          <li>Get a clean transcript with speaker labels and timestamps.</li>
          <li>AI summarizes the talk into 5&ndash;7 key points.</li>
          <li>For each point: produce one social post and identify the relevant video segment.</li>
          <li>Edit the transcript into a long-form blog post.</li>
          <li>Pull quotes for graphics.</li>
          <li>Build a LinkedIn carousel using the structure.</li>
          <li>Schedule the rollout over 30 days.</li>
        </ol>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The 30-Day Rollout</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Week 1: full talk recording + blog post.</li>
            <li>&bull; Week 2: social posts + key clips.</li>
            <li>&bull; Week 3: carousel + audiogram + newsletter.</li>
            <li>&bull; Week 4: deep-dive follow-ups + Q&amp;A.</li>
          </ul>
        </div>

        <h2 id="quality">Maintaining Quality</h2>
        <p>
          Every repurposed piece needs human editing. Generic AI-cropped clips with
          generic captions perform worse than nothing. The repurposing succeeds because
          the original talk had substance &mdash; not despite a lack of editing.
        </p>

        <h2 id="cadence">Distribution Cadence</h2>
        <p>
          Don&apos;t dump all 30 pieces in week one. Pace them. Tie back to the
          original. Show readers each piece is part of a larger argument.
        </p>

        <h2 id="metrics">Metrics</h2>
        <p>
          Track per-piece engagement to learn what formats work for your audience. The
          social clips usually outperform the blog post on reach; the blog post
          outperforms on backlinks. Both matter.
        </p>

        <blockquote className={Q_PURPLE}>
          The hardest part of content marketing isn&apos;t producing &mdash; it&apos;s
          producing something worth saying. One great talk repurposed thoughtfully
          beats 30 average posts every time.
        </blockquote>

        <p>See <a href="/blog/podcast-production-ai-workflow">podcast production AI workflow</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What if the talk wasn&apos;t recorded?</strong> Record it next time. Or do a follow-up audio with the same content.</p>
        <p><strong>Time investment for repurposing?</strong> 4&ndash;6 hours for 30 pieces, with AI.</p>
        <p><strong>One talk per month?</strong> Reasonable. Don&apos;t exhaust the well.</p>
      </>
    ),
  },
  {
    slug: "ai-customer-research",
    title: "AI for Customer Research: Smarter Interviews, Smarter Synthesis",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 28, 2026",
    excerpt:
      "AI doesn't replace customer research — it makes it 5x faster. Here is the practical workflow for interviews, transcripts, and synthesis in 2026.",
    author: "Flowtix Team",
    tags: ["Customer Research", "AI Synthesis", "Product"],
    toc: [
      { id: "what-changes", label: "What Changes With AI" },
      { id: "interview-prep", label: "Interview Prep" },
      { id: "interviewing", label: "Interviewing" },
      { id: "transcription", label: "Transcription Done Right" },
      { id: "synthesis", label: "Synthesis Across Interviews" },
      { id: "patterns", label: "Identifying Patterns" },
      { id: "reporting", label: "Reporting Findings" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="what-changes">What Changes With AI</h2>
        <p>
          Traditional customer research: 8&ndash;15 interviews, 30&ndash;60 hours per researcher
          to synthesize. AI doesn&apos;t reduce the number of interviews you need
          (that&apos;s about quality of signal, not volume of data). It reduces the
          synthesis time from weeks to days and surfaces patterns humans miss.
        </p>

        <h2 id="interview-prep">Interview Prep</h2>
        <p>
          AI helps with prep: research the participant&apos;s public footprint, draft a
          tailored interview guide, propose questions based on what gaps your prior
          interviews left. Prep time per interview drops from 90 minutes to 25.
        </p>

        <h2 id="interviewing">Interviewing</h2>
        <p>
          Keep this human. AI co-pilots during live interviews distract. Record with
          consent; transcribe later. The human researcher reads the room.
        </p>

        <h2 id="transcription">Transcription Done Right</h2>
        <p>
          AI transcription with speaker labels and timestamps. Near-perfect on clear
          audio. The transcript becomes the searchable source of truth for everything
          downstream.
        </p>

        <h2 id="synthesis">Synthesis Across Interviews</h2>
        <p>
          The biggest AI win. Across 12 interview transcripts, AI surfaces: common
          phrases, repeated objections, surprising mentions, contradictions between
          participants. The researcher reviews and validates. Synthesis time: 30
          hours &rarr; 4 hours.
        </p>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">AI Synthesis Caveats</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; AI is good at patterns; humans are needed for meaning.</li>
            <li>&bull; AI can miss the most important quote because it&apos;s only said once.</li>
            <li>&bull; Always validate AI-surfaced themes against the original transcripts.</li>
          </ul>
        </div>

        <h2 id="patterns">Identifying Patterns vs Imposing Them</h2>
        <p>
          AI is prone to confirmation bias if you prompt it with hypotheses. Better:
          ask AI to summarize what each participant said in their own words first, then
          look for patterns across summaries. Less leading.
        </p>

        <h2 id="reporting">Reporting Findings</h2>
        <p>
          AI drafts the research report from the synthesis. Human researcher refines
          and adds judgment. Report time: 8 hours &rarr; 2.
        </p>

        <blockquote className={Q_PURPLE}>
          The researchers who use AI well still spend the same time on interviews.
          They spend less time on transcription and synthesis &mdash; and more time
          interpreting what the findings actually mean for the product.
        </blockquote>

        <p>See <a href="/blog/ai-content-strategy-framework">AI content strategy framework</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How many interviews?</strong> Same as before AI. 8&ndash;15 for most product questions.</p>
        <p><strong>Tools?</strong> Several capable. Test on a small batch first.</p>
        <p><strong>Privacy?</strong> BAA or DPA with vendors. Anonymize transcripts before AI processing if sensitive.</p>
      </>
    ),
  },
  {
    slug: "brand-system-ai-can-use",
    title: "Building a Brand System That AI Can Use (Tokens + Voice)",
    category: "Design",
    categoryColor: "#EC4899",
    readTime: "9 min read",
    date: "July 29, 2026",
    excerpt:
      "Brand systems built for humans break when AI tries to use them. Here is how to build a brand system AI can actually enforce — design tokens + structured voice.",
    author: "Flowtix Team",
    tags: ["Brand System", "Design Tokens", "AI Brand"],
    toc: [
      { id: "why-break", label: "Why Brand Systems Break For AI" },
      { id: "tokens", label: "Design Tokens" },
      { id: "voice-structured", label: "Structured Voice Rules" },
      { id: "imagery", label: "Imagery System" },
      { id: "components", label: "Components With Constraints" },
      { id: "feedback", label: "Feedback Loops" },
      { id: "governance", label: "Governance" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-break">Why Brand Systems Built For Humans Break With AI</h2>
        <p>
          Traditional brand guidelines rely on interpretation: &ldquo;use this when it
          feels right.&rdquo; AI can&apos;t feel. It needs rules expressed as data:
          specific values, specific rules, specific constraints. Brand systems that
          aren&apos;t machine-readable produce inconsistent AI output even with the
          best prompts.
        </p>

        <h2 id="tokens">Design Tokens</h2>
        <p>
          Every visual property defined as a named token: colors, type sizes,
          spacing, radii, shadows. Tokens are exported in a machine-readable format
          (JSON, CSS variables, design tool plugins). AI tools then reference tokens
          rather than inventing values.
        </p>

        <h2 id="voice-structured">Structured Voice Rules</h2>
        <p>
          Voice expressed as enforceable rules, not paragraphs of vibe. See our{" "}
          <a href="/blog/brand-voice-guidelines-ai-era">brand voice guidelines guide</a>{" "}
          for the shape. The voice rules become a JSON or YAML file consumed by AI
          prompts.
        </p>

        <h2 id="imagery">Imagery System</h2>
        <p>
          A photo style guide isn&apos;t enough. The AI imagery system has:
        </p>
        <ul>
          <li>Fine-tuning data (your own image library, captioned).</li>
          <li>Style prompts (anchors for consistent generation).</li>
          <li>Composition rules (rule-of-thirds, off-center, etc.).</li>
          <li>Color treatments (always tinted toward brand palette).</li>
        </ul>

        <div className={C_PINK}>
          <div className="text-label text-pink-400 mb-3">Brand System Files</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; <code>tokens.json</code> &mdash; design values.</li>
            <li>&bull; <code>voice.yaml</code> &mdash; voice rules and examples.</li>
            <li>&bull; <code>imagery.md</code> &mdash; style prompts and constraints.</li>
            <li>&bull; <code>components/*.json</code> &mdash; allowed component variations.</li>
            <li>&bull; All versioned in git.</li>
          </ul>
        </div>

        <h2 id="components">Components With Constraints</h2>
        <p>
          Brand components (buttons, cards, headers) expressed as data with allowed
          variations. AI tools producing brand collateral pick from the constrained
          set, not the open universe.
        </p>

        <h2 id="feedback">Feedback Loops</h2>
        <p>
          AI-generated brand assets get reviewed. The patterns that get rejected feed
          back into the rules. The brand system improves with use rather than
          stagnates.
        </p>

        <h2 id="governance">Governance</h2>
        <p>
          One brand owner with authority to update the system. PR-style updates with
          review. Versioned. The brand system is treated as code, not a Word doc.
        </p>

        <blockquote className={Q_PINK}>
          A brand system AI can use is a brand system humans can use better. The
          structure that constrains AI also clarifies for designers. Investing in this
          pays back across every channel.
        </blockquote>

        <p>See <a href="/blog/brand-voice-guidelines-ai-era">brand voice guidelines</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Cost to build?</strong> $20k&ndash;$80k depending on existing maturity. Years of payback.</p>
        <p><strong>Figma plugin or custom?</strong> Both. Figma for designers; tokens for code; AI prompts for content.</p>
        <p><strong>Do we still need a creative director?</strong> Yes &mdash; the system enforces the brand the CD designs.</p>
      </>
    ),
  },
  {
    slug: "brief-to-asset-30-minutes",
    title: "From Brief to Asset in 30 Minutes: AI in the Creative Studio",
    category: "Design",
    categoryColor: "#EC4899",
    readTime: "8 min read",
    date: "July 30, 2026",
    excerpt:
      "Modern creative studios produce brand-on assets in 30 minutes instead of 3 days. Here is the AI-assisted workflow that compresses without compromising.",
    author: "Flowtix Team",
    tags: ["Creative Workflow", "AI Design", "Studio"],
    toc: [
      { id: "compressed", label: "The New Compressed Cycle" },
      { id: "brief-quality", label: "Brief Quality Determines Output" },
      { id: "exploration", label: "Exploration With AI" },
      { id: "refinement", label: "Refinement Stays Human" },
      { id: "production", label: "Production" },
      { id: "review", label: "Review" },
      { id: "guardrails", label: "Guardrails Against Generic" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="compressed">The New Compressed Cycle</h2>
        <p>
          Brief to final asset in 30 minutes for a social post; 3 hours for a complex
          piece. The compression doesn&apos;t come from cutting corners &mdash; it
          comes from AI handling the parts that were slow without being creative.
        </p>

        <h2 id="brief-quality">Brief Quality Determines Output</h2>
        <p>
          A vague brief produces a vague asset, faster. A precise brief produces a
          great asset, faster. The leverage is in the brief, not the AI tool.
        </p>
        <p>
          Good brief elements: audience, goal, message, brand anchors, format
          constraints, references (what to emulate, what to avoid), success metric.
        </p>

        <h2 id="exploration">Exploration With AI</h2>
        <p>
          Generate 10&ndash;15 directions in 5 minutes. Designer evaluates: which 2&ndash;3
          have legs? AI explored the search space faster than any human could.
        </p>

        <h2 id="refinement">Refinement Stays Human</h2>
        <p>
          The designer takes the chosen direction and refines: composition, typography,
          color, motion. AI assists (variations, color tries) but the designer makes
          the calls. The last 10% of quality is still 100% human.
        </p>

        <div className={C_PINK}>
          <div className="text-label text-pink-400 mb-3">The Brief Template</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; <strong>Audience:</strong> one specific persona.</li>
            <li>&bull; <strong>Goal:</strong> one specific outcome.</li>
            <li>&bull; <strong>Message:</strong> one sentence the asset must convey.</li>
            <li>&bull; <strong>Brand:</strong> tokens, voice rules, must-have elements.</li>
            <li>&bull; <strong>References:</strong> 3&ndash;5 examples (good and bad).</li>
            <li>&bull; <strong>Format:</strong> dimensions, output type, deadline.</li>
          </ul>
        </div>

        <h2 id="production">Production</h2>
        <p>
          Once the direction is set, AI handles variations (different sizes, copy
          variants, language localizations). Production time on a campaign set drops
          80%+.
        </p>

        <h2 id="review">Review</h2>
        <p>
          Every asset gets human review against brand rules and the brief. Automated
          checks catch brand violations (banned phrases, wrong tokens). Human catches
          taste.
        </p>

        <h2 id="guardrails">Guardrails Against Generic</h2>
        <p>
          Two practices keep AI-assisted work from feeling generic:
        </p>
        <ol>
          <li>Strong brand system that AI must respect.</li>
          <li>Designer judgment on direction and refinement.</li>
        </ol>

        <blockquote className={Q_PINK}>
          The 30-minute brief-to-asset cycle isn&apos;t about doing less. It&apos;s
          about doing the boring parts faster so the creative work has more time and
          attention. The output quality goes up, not down.
        </blockquote>

        <p>See <a href="/blog/brand-system-ai-can-use">brand systems AI can use</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Does this replace junior designers?</strong> No &mdash; elevates them. Junior work shifts from production to direction.</p>
        <p><strong>Tools?</strong> Multiple capable. Test on your specific work.</p>
        <p><strong>What about agency billing?</strong> Move toward outcome-based pricing as production time drops.</p>
      </>
    ),
  },
];
