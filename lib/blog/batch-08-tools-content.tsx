import type { Post } from "@/lib/posts";

const C_BLUE = "my-8 p-6 border border-blue-500/30 bg-blue-500/5 rounded-2xl";
const Q_BLUE = "border-l-2 border-blue-500 pl-6 my-8 text-[#bbb] italic";
const C_GREEN = "my-8 p-6 border border-green-500/30 bg-green-500/5 rounded-2xl";
const Q_GREEN = "border-l-2 border-green-500 pl-6 my-8 text-[#bbb] italic";
const C_PURPLE = "my-8 p-6 border border-purple-500/30 bg-purple-500/5 rounded-2xl";
const Q_PURPLE = "border-l-2 border-purple-500 pl-6 my-8 text-[#bbb] italic";

export const batch8: Post[] = [
  {
    slug: "claude-api-practical-tour",
    title: "Claude API for Builders: A Practical Tour",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "10 min read",
    date: "July 11, 2026",
    excerpt:
      "A practical, builder-focused tour of the Claude API in 2026 - what to use it for, what to skip, and the patterns that produce production-grade systems.",
    author: "Flowtix Team",
    tags: ["Claude", "API", "AI Development"],
    toc: [
      { id: "why-claude", label: "Why Claude For This Job" },
      { id: "messages-api", label: "The Messages API Basics" },
      { id: "system-prompts", label: "System Prompts In Practice" },
      { id: "tool-use", label: "Tool Use" },
      { id: "long-context", label: "Long Context (200k+ Tokens)" },
      { id: "streaming", label: "Streaming" },
      { id: "caching", label: "Prompt Caching" },
      { id: "patterns", label: "Production Patterns" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-claude">Why Claude For This Job</h2>
        <p>
          Claude&apos;s strengths in 2026: strong reasoning, careful refusal behavior,
          large context window, predictable instruction-following. Where it shines:
          complex agentic workflows, document-heavy tasks, anything that benefits from
          honesty about uncertainty. Where another model might fit better: image
          generation (not Claude&apos;s focus), some specialized voice tasks.
        </p>

        <h2 id="messages-api">The Messages API Basics</h2>
        <p>
          The Messages API takes a list of <code>role</code>/<code>content</code> pairs
          and returns the next assistant message. Three things to know:
        </p>
        <ul>
          <li>System message goes in a separate <code>system</code> parameter, not as a role.</li>
          <li>Pass the entire conversation history with each call.</li>
          <li>Use structured output (<code>tool_use</code> or schema constraints) when you need a specific shape.</li>
        </ul>

        <h2 id="system-prompts">System Prompts In Practice</h2>
        <p>
          Treat the system prompt as a contract. Four ingredients we use in nearly every
          production system prompt:
        </p>
        <ol>
          <li>Role definition (&ldquo;You are an assistant that&hellip;&rdquo;).</li>
          <li>Hard constraints (&ldquo;Never do X. Always do Y.&rdquo;).</li>
          <li>Output format spec (&ldquo;Reply in this JSON shape&hellip;&rdquo;).</li>
          <li>Refusal rules (&ldquo;If asked X, reply with this exact phrase.&rdquo;).</li>
        </ol>

        <div className={C_BLUE}>
          <div className="text-label text-blue-400 mb-3">Prompt Discipline</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; One system prompt per use case - don&apos;t share across features.</li>
            <li>&bull; Version-control system prompts. They are code.</li>
            <li>&bull; Eval changes before deploying.</li>
          </ul>
        </div>

        <h2 id="tool-use">Tool Use</h2>
        <p>
          Tool use is how you give Claude the ability to call functions: lookup
          databases, call APIs, run code. The pattern: define tools in JSON schema,
          Claude decides when to call them, you execute and return the result, Claude
          synthesizes a final answer. For most agentic workflows this is the primary
          shape.
        </p>

        <h2 id="long-context">Long Context (200k+ Tokens)</h2>
        <p>
          Claude&apos;s long context is genuinely useful: feed in a long document, a
          large codebase, a quarter of customer transcripts. But long context costs
          more and slows responses. Use it when the task genuinely requires it. For
          retrieval-style use cases, RAG is still cheaper.
        </p>

        <h2 id="streaming">Streaming</h2>
        <p>
          Use the streaming endpoint for any interactive use. The SDK exposes
          <code>stream=true</code> and yields tokens. Wire it into your edge function
          for fast first-token UX.
        </p>

        <h2 id="caching">Prompt Caching</h2>
        <p>
          Prompt caching lets you reuse the same system prompt + context across many
          requests at a fraction of the cost. Critical for chat applications with long
          stable contexts. Cache hit rates above 80% on chat make the bills behave.
        </p>

        <h2 id="patterns">Production Patterns We Use</h2>
        <ul>
          <li>Wrap every Claude call in retry-with-exponential-backoff.</li>
          <li>Log requests and responses (PII-scrubbed) for eval.</li>
          <li>Set a max_tokens you actually need; defaults are wasteful.</li>
          <li>Use temperature 0 for deterministic outputs; 0.5&ndash;0.7 for creative.</li>
          <li>Validate structured outputs before returning to your app.</li>
        </ul>

        <blockquote className={Q_BLUE}>
          The Claude API isn&apos;t different from other model APIs in its shape. It&apos;s
          different in the discipline it rewards: tight system prompts, structured
          outputs, and clear refusal contracts. Build to those strengths and Claude is
          quietly excellent.
        </blockquote>

        <p>See <a href="/services/ai-systems/">our AI systems service</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Anthropic SDK or raw HTTP?</strong> SDK for productivity, raw HTTP if you need fine control over edge runtimes.</p>
        <p><strong>What about cost?</strong> Per-token pricing is competitive. The bigger savings come from caching, not from picking a different model.</p>
        <p><strong>Multimodal?</strong> Claude handles images well. Audio and video are evolving.</p>
      </>
    ),
  },
  {
    slug: "openai-assistants-vs-custom-agents",
    title: "OpenAI Assistants vs. Custom Agents: When to Use Which",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "8 min read",
    date: "July 12, 2026",
    excerpt:
      "OpenAI Assistants give you a fast-start agent. Custom agents give you control. Here is the practical decision framework for picking between them in 2026.",
    author: "Flowtix Team",
    tags: ["OpenAI", "Agents", "Architecture"],
    toc: [
      { id: "shape", label: "The Two Shapes" },
      { id: "assistants", label: "When OpenAI Assistants Win" },
      { id: "custom", label: "When Custom Agents Win" },
      { id: "tradeoffs", label: "The Trade-offs" },
      { id: "migration", label: "Migration Between Them" },
      { id: "stack", label: "What &ldquo;Custom&rdquo; Means In 2026" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="shape">The Two Shapes</h2>
        <p>
          OpenAI Assistants is a managed agent framework: it handles state, tool use,
          file context, and threading on OpenAI&apos;s side. You give it a system
          prompt and tools; it does the rest. Custom agents are what you build with raw
          API calls plus your own orchestration: more code, more control.
        </p>
        <p>
          The choice isn&apos;t about which is &ldquo;better.&rdquo; It&apos;s about
          which trade-off you want.
        </p>

        <h2 id="assistants">When OpenAI Assistants Win</h2>
        <ul>
          <li>You&apos;re shipping fast and the agent shape fits your use case.</li>
          <li>You don&apos;t want to manage conversation state yourself.</li>
          <li>You&apos;re OpenAI-committed and won&apos;t swap providers.</li>
          <li>Your tool use is straightforward (lookups, simple API calls).</li>
          <li>You&apos;re a small team that values fewer moving parts.</li>
        </ul>

        <h2 id="custom">When Custom Agents Win</h2>
        <ul>
          <li>You want to swap models or providers without rewriting.</li>
          <li>You need fine control over conversation state (compression, summarization, branching).</li>
          <li>You&apos;re running at scale where managed pricing hurts.</li>
          <li>Your tool use is complex (chained calls, conditional flows, multi-agent).</li>
          <li>You need detailed observability and evals.</li>
        </ul>

        <div className={C_BLUE}>
          <div className="text-label text-blue-400 mb-3">The Quick Decision Heuristic</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Prototype + small team + speed &rarr; Assistants.</li>
            <li>&bull; Production at scale + multi-provider future &rarr; Custom.</li>
            <li>&bull; Migrate from Assistants to Custom when scale hurts or lock-in stings.</li>
          </ul>
        </div>

        <h2 id="tradeoffs">The Trade-offs</h2>
        <p>
          Assistants give you speed at the cost of lock-in and pricing. Custom gives
          you control at the cost of months of work. Neither is wrong; they&apos;re
          choices about where you spend.
        </p>

        <h2 id="migration">Migration Between Them</h2>
        <p>
          If you&apos;ve built on Assistants and need to migrate, plan 4&ndash;8 weeks per
          agent. The state model is the hardest part - Assistants stores threads
          on their side, your custom version has to recreate them. Plan a parallel
          run period.
        </p>

        <h2 id="stack">What &ldquo;Custom&rdquo; Means In 2026</h2>
        <p>
          Custom doesn&apos;t mean from scratch. Frameworks like LangChain, LlamaIndex,
          Anthropic&apos;s own SDK with conversation helpers, and platform-native edge
          orchestration all reduce custom agent code by 70%+ vs raw HTTP.
        </p>

        <blockquote className={Q_BLUE}>
          The right question isn&apos;t &ldquo;managed or custom?&rdquo; It&apos;s
          &ldquo;at what scale and provider commitment level does managed stop paying
          off?&rdquo; Most teams answer that wrong by underestimating future scale.
        </blockquote>

        <p>See <a href="/blog/modern-web-stack-ai-product">modern AI product stack</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about Anthropic&apos;s equivalent?</strong> Less managed, more SDK-driven. Custom-leaning by default.</p>
        <p><strong>Can we mix?</strong> Yes - some agents on Assistants, others custom. Common at mid-size companies.</p>
        <p><strong>Open-source frameworks?</strong> Many. Production maturity varies. Test before committing.</p>
      </>
    ),
  },
  {
    slug: "prompt-engineering-business",
    title: "Prompt Engineering for Business Workflows (Not Just Chatbots)",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "9 min read",
    date: "July 13, 2026",
    excerpt:
      "Most prompt engineering content is about chatbots. Here is the prompt engineering that produces production business workflows - reliable, auditable, on-brand.",
    author: "Flowtix Team",
    tags: ["Prompt Engineering", "AI Workflows", "Production"],
    toc: [
      { id: "different-job", label: "A Different Job" },
      { id: "structure", label: "Structure Beats Cleverness" },
      { id: "constraints", label: "Constraints" },
      { id: "examples", label: "Examples (Few-Shot)" },
      { id: "output-format", label: "Output Format" },
      { id: "refusal", label: "Refusal Behavior" },
      { id: "iteration", label: "Iteration With Evals" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="different-job">A Different Job Than Chatbot Prompting</h2>
        <p>
          Chatbot prompts are conversational and forgiving. Business workflow prompts
          are contracts: the same input must produce the same shape of output, day
          after day, across thousands of executions. The disciplines are different.
        </p>

        <h2 id="structure">Structure Beats Cleverness</h2>
        <p>
          The clever &ldquo;you are a renowned expert&hellip;&rdquo; openers do little.
          What matters in business workflow prompts:
        </p>
        <ol>
          <li>Clear role and scope.</li>
          <li>Explicit input schema.</li>
          <li>Hard constraints listed.</li>
          <li>Required output schema.</li>
          <li>Failure handling specified.</li>
        </ol>

        <h2 id="constraints">Constraints</h2>
        <p>
          State what the model must never do. Examples: &ldquo;Never invent customer
          information.&rdquo; &ldquo;Never recommend a specific medical treatment.&rdquo;
          &ldquo;Always cite the source document by ID.&rdquo;
        </p>

        <h2 id="examples">Examples (Few-Shot)</h2>
        <p>
          Two or three concrete examples of correct input&rarr;output beat any amount of
          abstract instruction. The model pattern-matches. Show the pattern.
        </p>

        <div className={C_BLUE}>
          <div className="text-label text-blue-400 mb-3">The Anatomy Of A Workflow Prompt</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Role + scope (1 paragraph).</li>
            <li>&bull; Input schema (explicit).</li>
            <li>&bull; Hard rules (5&ndash;10 bullet points).</li>
            <li>&bull; 2&ndash;3 worked examples.</li>
            <li>&bull; Required output schema (JSON, usually).</li>
            <li>&bull; Refusal/escalation rules.</li>
          </ul>
        </div>

        <h2 id="output-format">Output Format</h2>
        <p>
          For workflows, structured output is non-negotiable. Specify JSON schema.
          Validate before consuming. Reject and retry if the model deviates. Modern
          models support structured output natively; use it.
        </p>

        <h2 id="refusal">Refusal Behavior</h2>
        <p>
          Specify exactly what the model says when it can&apos;t handle a request.
          &ldquo;If the input lacks X, reply with: {`{"error": "missing X"}`}.&rdquo;
          Predictable refusal is a feature.
        </p>

        <h2 id="iteration">Iteration With Evals</h2>
        <p>
          Build an eval set of 50&ndash;200 input/output pairs. Re-run after every prompt
          change. The eval is the difference between &ldquo;I think it&apos;s
          better&rdquo; and &ldquo;it&apos;s measurably better.&rdquo;
        </p>

        <blockquote className={Q_BLUE}>
          Prompt engineering for production isn&apos;t about magic words. It&apos;s
          about treating prompts like code: versioned, evaluated, and held to a quality
          bar.
        </blockquote>

        <p>See <a href="/services/ai-systems/">our AI systems service</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Should we use a prompt management tool?</strong> For teams of 3+, yes - LangSmith, Helicone, PromptLayer all useful.</p>
        <p><strong>How often to iterate?</strong> Weekly during development, then quarterly with monitoring.</p>
        <p><strong>Model-specific prompts?</strong> Yes - tune per model. Don&apos;t share prompts across providers without re-testing.</p>
      </>
    ),
  },
  {
    slug: "rag-done-right",
    title: "RAG Done Right: Avoiding the Common Mistakes",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "10 min read",
    date: "July 14, 2026",
    excerpt:
      "RAG is the most over-discussed and under-implemented AI pattern. Here is the production-grade RAG architecture and the mistakes that kill most builds.",
    author: "Flowtix Team",
    tags: ["RAG", "Architecture", "AI Systems"],
    toc: [
      { id: "what-rag-is", label: "What RAG Actually Is" },
      { id: "data-prep", label: "Data Preparation" },
      { id: "chunking", label: "Chunking Strategy" },
      { id: "embedding", label: "Embedding Choice" },
      { id: "retrieval", label: "Retrieval (Hybrid Search)" },
      { id: "reranking", label: "Re-ranking" },
      { id: "generation", label: "Generation With Citations" },
      { id: "mistakes", label: "Top 7 Mistakes" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="what-rag-is">What RAG Actually Is</h2>
        <p>
          RAG - retrieval-augmented generation - is the pattern where the
          model answers questions using passages retrieved from your data, not its
          training. Done right: factual, grounded, citation-backed answers. Done wrong:
          a chatbot that hallucinates with extra steps.
        </p>

        <h2 id="data-prep">Data Preparation</h2>
        <p>
          Most RAG failures start before any vector is computed. Your source data has
          duplicates, conflicting versions, outdated pages, and PDFs full of garbage.
          Clean and canonicalize first. The fancy retrieval can&apos;t fix bad data.
        </p>

        <h2 id="chunking">Chunking Strategy</h2>
        <p>
          Default token-based chunking destroys context. Use semantic chunking: break
          on H2/H3, paragraphs, or list items. Each chunk should contain one coherent
          idea. Add metadata (document title, section, last-updated) to every chunk.
        </p>

        <h2 id="embedding">Embedding Choice</h2>
        <p>
          Modern embedding models are commoditized. OpenAI, Cohere, open-source options
          all perform similarly for general text. Pick one, stick with it, evaluate
          recall on your specific corpus.
        </p>

        <h2 id="retrieval">Retrieval: Hybrid Search Always</h2>
        <p>
          Pure semantic search misses exact matches (SKUs, product names). Pure keyword
          search misses paraphrases. Combine: get top-K from each, merge, re-rank.
          Recall typically jumps 30&ndash;40 points.
        </p>

        <div className={C_BLUE}>
          <div className="text-label text-blue-400 mb-3">The Production RAG Stack</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Cleaned, canonicalized source data.</li>
            <li>&bull; Semantic chunking with rich metadata.</li>
            <li>&bull; Hybrid retrieval (semantic + keyword).</li>
            <li>&bull; Re-ranker on top-20.</li>
            <li>&bull; Citation-enforced generation.</li>
            <li>&bull; Eval suite running weekly.</li>
          </ul>
        </div>

        <h2 id="reranking">Re-ranking</h2>
        <p>
          A small re-ranker on top-20 retrieved chunks produces meaningfully better
          top-5. Cross-encoders (like Cohere&apos;s rerank or open-source alternatives)
          are cheap and effective.
        </p>

        <h2 id="generation">Generation With Citations</h2>
        <p>
          The system prompt must require citation per claim. The model is forbidden
          from inventing facts not in the retrieved chunks. If the retrieved chunks
          don&apos;t support the question, the model must say so.
        </p>

        <h2 id="mistakes">Top 7 Mistakes</h2>
        <ol>
          <li>Throwing all your data in without cleaning.</li>
          <li>Default chunking sized for the model, not for the ideas.</li>
          <li>Pure semantic search with no keyword fallback.</li>
          <li>No re-ranking layer.</li>
          <li>Generation prompt that doesn&apos;t enforce citations.</li>
          <li>No eval suite to catch regressions.</li>
          <li>Stale data - no freshness pipeline.</li>
        </ol>

        <blockquote className={Q_BLUE}>
          A well-built RAG system is boring. It answers questions accurately, cites
          sources, refuses when uncertain, and stays up-to-date. The fancy version most
          builders try first is the opposite of boring - and the opposite of
          working.
        </blockquote>

        <p>See <a href="/blog/ai-knowledge-base-no-hallucination">AI knowledge bases without hallucination</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Vector DB choice?</strong> pgvector if you&apos;re on Postgres. Pinecone or Weaviate at scale.</p>
        <p><strong>How big a corpus before RAG is worth it?</strong> Above ~50 documents. Below that, just include them in context.</p>
        <p><strong>Cost?</strong> Embedding is cheap. Storage is cheap. The expensive part is the generation call - same as without RAG.</p>
      </>
    ),
  },
  {
    slug: "vector-databases-compared",
    title: "Vector Databases Compared: Pinecone, Weaviate, pgvector",
    category: "AI Systems",
    categoryColor: "#3B82F6",
    readTime: "9 min read",
    date: "July 15, 2026",
    excerpt:
      "The three vector database options most teams actually consider, compared on the dimensions that matter for production AI systems.",
    author: "Flowtix Team",
    tags: ["Vector Database", "RAG", "Infrastructure"],
    toc: [
      { id: "the-three", label: "The Three Real Options" },
      { id: "pgvector", label: "pgvector" },
      { id: "pinecone", label: "Pinecone" },
      { id: "weaviate", label: "Weaviate" },
      { id: "criteria", label: "Decision Criteria" },
      { id: "cost", label: "Cost At Scale" },
      { id: "migration", label: "Migration Between Them" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-three">The Three Real Options</h2>
        <p>
          There are 20+ vector databases. Three are what serious teams actually pick
          between in 2026: <strong>pgvector</strong> (a Postgres extension),
          <strong> Pinecone</strong> (managed, purpose-built), and <strong>Weaviate</strong>{" "}
          (open-source, self-hostable or managed).
        </p>

        <h2 id="pgvector">pgvector</h2>
        <p>
          A Postgres extension that adds vector similarity to a regular relational
          database. The pitch: one database for everything.
        </p>
        <p>
          <strong>Strengths:</strong> No new infrastructure. SQL queries can mix vector
          and metadata filters. Cheap. Transactional consistency.
        </p>
        <p>
          <strong>Weaknesses:</strong> Performance ceilings at very large scale (tens
          of millions of vectors). Less specialized indexing than purpose-built tools.
        </p>
        <p>
          <strong>Right when:</strong> You&apos;re already on Postgres and have under
          ~10M vectors. Most SMB and mid-market deployments.
        </p>

        <h2 id="pinecone">Pinecone</h2>
        <p>
          Managed vector database, purpose-built. The pitch: don&apos;t think about
          infrastructure.
        </p>
        <p>
          <strong>Strengths:</strong> Excellent performance at scale. Polished
          developer experience. Mature.
        </p>
        <p>
          <strong>Weaknesses:</strong> Cost grows quickly with scale. Separate
          infrastructure to manage and authenticate. Vendor lock-in.
        </p>
        <p>
          <strong>Right when:</strong> You&apos;re at very large scale or want to
          minimize ops burden, and the cost trade-off works.
        </p>

        <h2 id="weaviate">Weaviate</h2>
        <p>
          Open-source vector database with managed and self-hosted options. The pitch:
          flexibility without lock-in.
        </p>
        <p>
          <strong>Strengths:</strong> Powerful hybrid search built-in. Multi-modal
          support. Open source.
        </p>
        <p>
          <strong>Weaknesses:</strong> More configuration than Pinecone. Self-hosting
          adds ops overhead.
        </p>
        <p>
          <strong>Right when:</strong> You want managed simplicity with the option to
          self-host. Strong hybrid search needs.
        </p>

        <div className={C_BLUE}>
          <div className="text-label text-blue-400 mb-3">Decision Heuristic</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Already on Postgres + under 10M vectors &rarr; pgvector.</li>
            <li>&bull; Want zero infrastructure thought &rarr; Pinecone.</li>
            <li>&bull; Want flexibility + strong hybrid search &rarr; Weaviate.</li>
          </ul>
        </div>

        <h2 id="criteria">Decision Criteria</h2>
        <ul>
          <li><strong>Scale</strong> - how many vectors, how many queries/sec?</li>
          <li><strong>Latency budget</strong> - p99 target?</li>
          <li><strong>Hybrid search</strong> - need keyword + semantic?</li>
          <li><strong>Existing stack</strong> - already on Postgres?</li>
          <li><strong>Cost sensitivity</strong> - what&apos;s the budget at year 2?</li>
          <li><strong>Ops capacity</strong> - can you run infrastructure?</li>
        </ul>

        <h2 id="cost">Cost At Scale</h2>
        <p>
          At 1M vectors: pgvector ~$50/month on a small Postgres instance, Pinecone
          ~$70/month, Weaviate ~$50/month self-hosted or $200/month managed. At 50M
          vectors: pgvector $300&ndash;$500, Pinecone $1.5&ndash;$3k, Weaviate $300&ndash;$1.5k. Exact
          numbers vary; do your own math.
        </p>

        <h2 id="migration">Migration Between Them</h2>
        <p>
          Wrap your vector layer behind a thin interface. Switching between any of the
          three is then a few days of work, not a rewrite. Avoid using
          provider-specific SQL extensions or query features.
        </p>

        <blockquote className={Q_BLUE}>
          For 80% of teams shipping RAG today, pgvector is the right answer. The other
          20% know exactly why they need Pinecone or Weaviate - usually scale or
          a specific feature.
        </blockquote>

        <p>See <a href="/blog/rag-done-right">RAG done right</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about Chroma, Milvus, Qdrant?</strong> All capable. We see less production adoption than the three above.</p>
        <p><strong>Cloud-vendor vector DBs?</strong> AWS, GCP, Azure all have offerings. Fine but more lock-in than self-hosted Weaviate.</p>
        <p><strong>Should we shard?</strong> Rarely below 100M vectors.</p>
      </>
    ),
  },
  {
    slug: "n8n-for-founders",
    title: "n8n for Founders: A Tour of the Self-Hosted Automation Layer",
    category: "Automation",
    categoryColor: "#10B981",
    readTime: "9 min read",
    date: "July 16, 2026",
    excerpt:
      "n8n is the automation layer for founders who want Zapier-style speed with self-hosted control. Here is the practical 2026 tour.",
    author: "Flowtix Team",
    tags: ["n8n", "Automation", "Self-Hosted"],
    toc: [
      { id: "why-n8n", label: "Why n8n Now" },
      { id: "vs-zapier", label: "n8n vs Zapier vs Make" },
      { id: "hosting", label: "Hosting Options" },
      { id: "ai-integration", label: "AI Integration" },
      { id: "patterns", label: "Common Patterns" },
      { id: "gotchas", label: "Gotchas" },
      { id: "when-not", label: "When Not To Use n8n" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="why-n8n">Why n8n Now</h2>
        <p>
          n8n is open-source, self-hostable, and has matured into a serious automation
          platform. For founders who&apos;ve hit Zapier&apos;s pricing wall or
          need to run automations with access to internal systems, n8n is the obvious
          next step.
        </p>

        <h2 id="vs-zapier">n8n vs Zapier vs Make</h2>
        <ul>
          <li><strong>Zapier:</strong> Best-in-class integrations, simplest UX, most expensive at scale.</li>
          <li><strong>Make:</strong> Cheaper, more flexible, steeper learning curve.</li>
          <li><strong>n8n:</strong> Open-source, self-hostable, technical but capable.</li>
        </ul>
        <p>
          The right answer for many founders: Zapier for the customer-facing edge
          (where integration depth matters), n8n for internal automation (where
          control and cost matter).
        </p>

        <h2 id="hosting">Hosting Options</h2>
        <p>
          Three ways to run n8n:
        </p>
        <ol>
          <li>n8n Cloud (managed, fastest start).</li>
          <li>Self-hosted on your own server (most control, ops burden).</li>
          <li>Managed platforms like Railway or Render with n8n templates (middle ground).</li>
        </ol>

        <h2 id="ai-integration">AI Integration</h2>
        <p>
          n8n has first-class AI nodes for OpenAI, Anthropic, and others. The killer
          pattern: webhook in &rarr; AI call &rarr; structured output &rarr; downstream
          actions. Many production AI workflows are just n8n flows with smart prompts.
        </p>

        <div className={C_GREEN}>
          <div className="text-label text-emerald-400 mb-3">Founder n8n Use Cases</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Lead enrichment + routing.</li>
            <li>&bull; Support ticket pre-processing.</li>
            <li>&bull; Internal team daily summaries.</li>
            <li>&bull; AI-drafted client check-ins.</li>
            <li>&bull; Cross-system data syncs.</li>
          </ul>
        </div>

        <h2 id="patterns">Common Patterns</h2>
        <ul>
          <li><strong>Webhook &rarr; enrich &rarr; route.</strong> The bread and butter.</li>
          <li><strong>Cron &rarr; aggregate &rarr; AI summary &rarr; Slack.</strong> Daily digests.</li>
          <li><strong>Form &rarr; AI classify &rarr; CRM update.</strong> Lead intake.</li>
          <li><strong>Email &rarr; AI extract &rarr; structured DB write.</strong> Document processing.</li>
        </ul>

        <h2 id="gotchas">Gotchas</h2>
        <ul>
          <li>Self-hosted needs a running database and reverse proxy.</li>
          <li>Workflow versioning is manual - build a backup discipline.</li>
          <li>Errors can be silent - set up alerting.</li>
          <li>Long-running workflows hit timeouts; design for chunking.</li>
        </ul>

        <h2 id="when-not">When Not To Use n8n</h2>
        <ul>
          <li>You need depth on Zapier-only integrations.</li>
          <li>You&apos;re not technical and can&apos;t hire someone who is.</li>
          <li>You need sub-100ms response time (n8n is not real-time).</li>
        </ul>

        <blockquote className={Q_GREEN}>
          n8n in 2026 is the founder&apos;s automation Swiss Army knife. Cheap, fast,
          and powerful - for teams comfortable with a small ops surface.
        </blockquote>

        <p>See <a href="/blog/zapier-vs-make-vs-n8n">our automation platform comparison</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>n8n vs Temporal/Airflow?</strong> Different audience. Temporal/Airflow for engineering teams; n8n for ops/founders.</p>
        <p><strong>How big can workflows grow?</strong> Hundreds of nodes per workflow is fine. Break larger ones into chained workflows.</p>
        <p><strong>Cost?</strong> Self-hosted: $20&ndash;$50/month server. Cloud: from free tier.</p>
      </>
    ),
  },
  {
    slug: "ai-content-strategy-framework",
    title: "AI Content Strategy: A Framework for Brands That Refuse to Sound Generic",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "9 min read",
    date: "July 17, 2026",
    excerpt:
      "AI content has flooded the internet with sameness. Here is the strategy framework for brands that want to use AI without sounding like everyone else.",
    author: "Flowtix Team",
    tags: ["AI Content", "Strategy", "Brand Voice"],
    toc: [
      { id: "the-problem", label: "The Sameness Problem" },
      { id: "framework", label: "The Framework" },
      { id: "voice", label: "Voice First" },
      { id: "ideas", label: "Ideas Stay Human" },
      { id: "production", label: "Production With AI" },
      { id: "review", label: "The Review Layer" },
      { id: "metrics", label: "Metrics" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-problem">The Sameness Problem</h2>
        <p>
          By mid-2025, AI content had homogenized the internet. The same phrasings, the
          same structures, the same fake authority. Brands that adopted AI without a
          strategy ended up sounding like every competitor that also adopted AI.
          Generic content gets shared less, ranks less, and earns less trust.
        </p>

        <h2 id="framework">The Framework</h2>
        <ol>
          <li>Voice first - codify the brand voice in writing before any AI touches a draft.</li>
          <li>Ideas stay human - AI doesn&apos;t decide what to write about.</li>
          <li>Production with AI - structured drafting against voice rules.</li>
          <li>Human review - every published piece gets human editor pass.</li>
          <li>Measure differently - not just output volume, but reader engagement.</li>
        </ol>

        <h2 id="voice">Voice First</h2>
        <p>
          The brand voice document is the single highest-leverage asset in AI content
          strategy. It includes:
        </p>
        <ul>
          <li>Brand personality (3&ndash;5 adjectives, with anti-adjectives).</li>
          <li>Tone (formal/casual, warm/distant, direct/diplomatic).</li>
          <li>Sentence patterns (length, rhythm).</li>
          <li>Banned phrases.</li>
          <li>Required structures.</li>
          <li>Examples (good vs. bad).</li>
        </ul>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Brand Voice Acid Test</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Print three of your AI-drafted paragraphs alongside competitors&apos; AI content.</li>
            <li>&bull; Can a reader tell which is yours?</li>
            <li>&bull; If no, your voice rules aren&apos;t tight enough.</li>
          </ul>
        </div>

        <h2 id="ideas">Ideas Stay Human</h2>
        <p>
          AI is excellent at executing on an editorial direction. AI is mediocre at
          deciding what direction to take. Topic selection, angle, point of view -
          human decisions. AI helps research them; AI doesn&apos;t pick them.
        </p>

        <h2 id="production">Production With AI</h2>
        <p>
          The production loop: brief in &rarr; AI draft against voice rules &rarr;
          editor refines &rarr; publish. The brief is dense (audience, goal, angle, key
          points). The AI does the heavy lifting on first draft. The editor brings the
          brand back into the prose.
        </p>

        <h2 id="review">The Review Layer</h2>
        <p>
          No AI content goes live without human editor review. The editor&apos;s job:
          enforce voice, add specificity, cut generic phrases, ensure facts. Editor
          time per piece: 30&ndash;45 minutes for a 1500-word post.
        </p>

        <h2 id="metrics">Metrics That Matter</h2>
        <ul>
          <li>Time on page - flat or up vs pre-AI content.</li>
          <li>Scroll depth - flat or up.</li>
          <li>Newsletter subscribes per published piece.</li>
          <li>Backlinks earned - the real signal of quality.</li>
        </ul>
        <p>
          What not to track: word count, posts per week. Both incentivize the wrong
          behavior.
        </p>

        <blockquote className={Q_PURPLE}>
          The brands winning at AI content in 2026 ship less than the early enthusiasts
          did in 2023 - and earn more attention with what they ship. Quality
          compounds; quantity decays.
        </blockquote>

        <p>See <a href="/blog/useful-ai-blog-posts">making AI blog posts useful</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>How many AI-assisted pieces per week?</strong> Start at 2&ndash;3. Quality matters more than cadence.</p>
        <p><strong>Should we disclose AI use?</strong> Reasonable people disagree. We disclose; many don&apos;t. Trust matters either way.</p>
        <p><strong>Specialist or generalist editors?</strong> Specialists for technical topics. Generalists fine for everything else.</p>
      </>
    ),
  },
  {
    slug: "ai-editorial-workflows",
    title: "Editorial Workflows With AI: Where to Use It, Where to Avoid It",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "8 min read",
    date: "July 18, 2026",
    excerpt:
      "Editorial teams that use AI everywhere produce mush. Teams that use it strategically scale quality. Here is the practical workflow map.",
    author: "Flowtix Team",
    tags: ["AI Content", "Editorial", "Workflows"],
    toc: [
      { id: "use-it", label: "Where AI Genuinely Helps" },
      { id: "avoid-it", label: "Where AI Hurts" },
      { id: "research", label: "Research Augmentation" },
      { id: "outline", label: "Outline And Structure" },
      { id: "drafting", label: "Drafting With Care" },
      { id: "editing", label: "Editing With AI" },
      { id: "headlines", label: "Headlines And Excerpts" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="use-it">Where AI Genuinely Helps</h2>
        <p>
          Five places AI has clear value in editorial work:
        </p>
        <ul>
          <li>Research synthesis - turning 20 sources into a brief.</li>
          <li>Outline structuring - from rough notes to organized.</li>
          <li>First-draft text on routine sections (definitions, summaries).</li>
          <li>Editing for clarity and brevity.</li>
          <li>Generating headline and excerpt variants for A/B testing.</li>
        </ul>

        <h2 id="avoid-it">Where AI Hurts</h2>
        <ul>
          <li>Idea generation - AI generates safe, generic ideas.</li>
          <li>Voice work - brand voice flattens fast.</li>
          <li>Quotes and anecdotes - AI invents them. Don&apos;t let it.</li>
          <li>Final fact-checking - AI confidently confirms wrong facts.</li>
          <li>Sensitive topics - AI defaults to milquetoast.</li>
        </ul>

        <h2 id="research">Research Augmentation</h2>
        <p>
          The right pattern: human chooses sources, AI extracts and summarizes. Never
          let AI alone search - it includes whatever pops up first and treats it
          as authoritative.
        </p>

        <h2 id="outline">Outline And Structure</h2>
        <p>
          Bring the writer rough notes; ask AI to propose a structure. Take the
          structure that resonates and edit it. 30 minutes saved per piece. Quality
          consistent.
        </p>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">Editorial AI Rules</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Never let AI invent facts, quotes, or sources.</li>
            <li>&bull; Always cite where you used AI in the workflow.</li>
            <li>&bull; Editor is responsible for everything published.</li>
            <li>&bull; Voice rules are non-negotiable.</li>
          </ul>
        </div>

        <h2 id="drafting">Drafting With Care</h2>
        <p>
          Use AI for first drafts on standard sections (definitions, &ldquo;how to&rdquo;
          steps, summaries). Don&apos;t use AI for the parts where the writer&apos;s
          perspective matters - opinion, narrative, conclusions.
        </p>

        <h2 id="editing">Editing With AI</h2>
        <p>
          AI is excellent at clarity edits, redundancy detection, and length pruning.
          Run drafts through an AI editor before human review. The human catches
          voice; the AI catches sloppiness.
        </p>

        <h2 id="headlines">Headlines And Excerpts</h2>
        <p>
          Generate 10 variants. Pick the best 3. Test 2 in A/B. Cheap, fast, much
          better than the writer brainstorming alone.
        </p>

        <blockquote className={Q_PURPLE}>
          AI in the editorial workflow is a power tool, not a replacement. Use it where
          it gives leverage; refuse it where it costs voice. The teams that get this
          right scale quality; the teams that don&apos;t scale mediocrity.
        </blockquote>

        <p>See <a href="/blog/ai-content-strategy-framework">AI content strategy framework</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>What about AI editors at scale?</strong> Useful for the first pass. Human always finishes.</p>
        <p><strong>Can AI rewrite for SEO?</strong> Yes - for metadata and standard schema, fine. For body text, careful.</p>
        <p><strong>Editor time savings?</strong> Typically 30&ndash;50%. The savings go to more pieces, not fewer editors.</p>
      </>
    ),
  },
  {
    slug: "seo-with-ai-2026",
    title: "SEO With AI in 2026: What Still Works (and What Got Killed)",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "10 min read",
    date: "July 19, 2026",
    excerpt:
      "Google's 2024-2026 updates killed the AI-content gold rush. Here is what still works for SEO when search engines, AI search, and AI content all compete.",
    author: "Flowtix Team",
    tags: ["SEO", "AI Search", "Content Strategy"],
    toc: [
      { id: "the-shift", label: "The 2024-2026 Shift" },
      { id: "killed", label: "What Got Killed" },
      { id: "still-works", label: "What Still Works" },
      { id: "ai-search", label: "Optimizing For AI Search" },
      { id: "schema", label: "Structured Data Matters More" },
      { id: "authority", label: "Authority Signals" },
      { id: "long-tail", label: "Long-Tail Lives" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="the-shift">The 2024-2026 Shift</h2>
        <p>
          Google&apos;s helpful content updates and the rise of AI search (Perplexity,
          ChatGPT search, Google AI Overviews) reshaped SEO. The 2022 playbook -
          mass produce keyword-targeted content - is mostly dead. The new
          playbook prizes original research, specific expertise, and trust signals.
        </p>

        <h2 id="killed">What Got Killed</h2>
        <ul>
          <li>Mass AI-generated content with no original value.</li>
          <li>Keyword-stuffed thin pages.</li>
          <li>&ldquo;Programmatic SEO&rdquo; at scale on commodity topics.</li>
          <li>Affiliate roundups recycled from other affiliate roundups.</li>
          <li>Generic listicles with no first-hand experience.</li>
        </ul>

        <h2 id="still-works">What Still Works</h2>
        <ul>
          <li>Genuine first-hand expertise published.</li>
          <li>Original research and data.</li>
          <li>Topic clusters that actually serve a user&apos;s journey.</li>
          <li>Pages that comprehensively answer a specific question.</li>
          <li>Strong site architecture and technical SEO.</li>
          <li>Trustworthy authorship and citations.</li>
        </ul>

        <h2 id="ai-search">Optimizing For AI Search</h2>
        <p>
          AI search engines (Perplexity, Google AIO, ChatGPT search) cite sources. The
          sources cited become the new top-ranking position. Optimizing for AI
          citation:
        </p>
        <ol>
          <li>Make claims that are clearly supported.</li>
          <li>Use structured data so machines can parse confidently.</li>
          <li>Be quotable - short, definitive statements that AI can pick up.</li>
          <li>Have visible authors with credentials.</li>
        </ol>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">2026 SEO Stack</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; First-hand expertise content (the moat).</li>
            <li>&bull; Comprehensive topic clusters.</li>
            <li>&bull; Strong schema markup.</li>
            <li>&bull; Authorship and entity signals.</li>
            <li>&bull; Internal linking that reflects topical authority.</li>
            <li>&bull; Site speed and Core Web Vitals.</li>
          </ul>
        </div>

        <h2 id="schema">Structured Data Matters More</h2>
        <p>
          AI search relies on structured data more than human search did. Mark up
          everything appropriate: Article, FAQ, HowTo, Organization, Person. The
          structured data is how AI confidently extracts and cites.
        </p>

        <h2 id="authority">Authority Signals</h2>
        <ul>
          <li>Author byline with credentials.</li>
          <li>About page with verifiable team.</li>
          <li>External validation (mentions, links, citations).</li>
          <li>Domain age and consistency.</li>
          <li>HTTPS, security headers, technical hygiene.</li>
        </ul>

        <h2 id="long-tail">Long-Tail Lives</h2>
        <p>
          Long-tail SEO still works in 2026 - especially for specific, expertise-led
          queries that AI overviews can&apos;t comprehensively answer. The shift: long-tail
          requires real depth, not surface-level coverage.
        </p>

        <blockquote className={Q_PURPLE}>
          SEO in 2026 isn&apos;t harder - it&apos;s more honest. The sites that
          win are the ones with real expertise, not the ones that gamed the system best.
          AI made the cheats unprofitable.
        </blockquote>

        <p>See <a href="/blog/useful-ai-blog-posts">making AI blog posts useful</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Should we stop publishing AI-assisted content?</strong> No - quality AI-assisted content with human editorial still works. Generic AI content doesn&apos;t.</p>
        <p><strong>What about EEAT?</strong> Experience matters most. Show, don&apos;t claim.</p>
        <p><strong>How long to see results?</strong> Quality SEO in 2026 takes 4&ndash;9 months. Faster than 2020; slower than 2022 prompts promised.</p>
      </>
    ),
  },
  {
    slug: "useful-ai-blog-posts",
    title: "AI-Generated Blog Posts: How to Make Them Genuinely Useful",
    category: "AI Content",
    categoryColor: "#A855F7",
    readTime: "9 min read",
    date: "July 20, 2026",
    excerpt:
      "Most AI blog posts are useless. Here is the practical framework for producing AI-assisted content that earns reader attention, ranks, and converts.",
    author: "Flowtix Team",
    tags: ["AI Content", "Blogging", "Editorial"],
    toc: [
      { id: "useless-pattern", label: "The Useless Pattern" },
      { id: "useful-pattern", label: "The Useful Pattern" },
      { id: "input-quality", label: "Input Quality" },
      { id: "depth", label: "Add Depth Humans Bring" },
      { id: "structure", label: "Structure With Care" },
      { id: "specifics", label: "Specifics Over Generics" },
      { id: "ethics", label: "Honest Practices" },
      { id: "faq", label: "FAQ" },
    ],
    body: (
      <>
        <h2 id="useless-pattern">The Useless Pattern Everyone Recognizes</h2>
        <p>
          A reader can spot a generic AI blog post in 30 seconds: vague intro about
          &ldquo;today&apos;s fast-paced digital landscape,&rdquo; bullet lists that
          could apply to any business, conclusion that pivots to a half-hearted CTA.
          The pages exist; they don&apos;t convert; they don&apos;t rank.
        </p>

        <h2 id="useful-pattern">The Useful Pattern</h2>
        <p>
          The opposite shape:
        </p>
        <ol>
          <li>A real claim in the opening that an experienced person would make.</li>
          <li>Specifics throughout (numbers, names, frameworks).</li>
          <li>A point of view, not just an overview.</li>
          <li>Examples from real practice.</li>
          <li>Honest about what&apos;s uncertain.</li>
        </ol>

        <h2 id="input-quality">Input Quality Determines Output Quality</h2>
        <p>
          The brief you hand the AI is 80% of the outcome. A bad brief: &ldquo;write a
          blog post about AI in marketing.&rdquo; A good brief: &ldquo;1500-word post
          arguing that AI personalization fails when it&apos;s shallow; include the 4
          depth dimensions; use the framework we ship to clients; reference our
          e-commerce case study; tone: matter-of-fact, no hype words.&rdquo;
        </p>

        <h2 id="depth">Add Depth Only Humans Bring</h2>
        <p>
          Three things AI cannot add and humans must:
        </p>
        <ul>
          <li>Specific lived examples (&ldquo;we deployed this for a 12-person agency&hellip;&rdquo;).</li>
          <li>Counter-intuitive points of view backed by experience.</li>
          <li>Tactical detail at the level of &ldquo;here&apos;s the exact thing to do Tuesday.&rdquo;</li>
        </ul>

        <div className={C_PURPLE}>
          <div className="text-label text-purple-400 mb-3">The Editor&apos;s Checklist</div>
          <ul className="space-y-2 text-[#ccc] text-sm">
            <li>&bull; Three specifics in the first paragraph?</li>
            <li>&bull; Clear point of view, not just &ldquo;balanced overview&rdquo;?</li>
            <li>&bull; At least two original examples?</li>
            <li>&bull; Banned phrases removed?</li>
            <li>&bull; Real, verifiable internal/external links?</li>
          </ul>
        </div>

        <h2 id="structure">Structure With Care</h2>
        <p>
          AI defaults to 8 H2s of equal weight. Useful posts have rhythm: a strong
          opening, a few major sections, a final perspective. Don&apos;t let AI flatten
          this.
        </p>

        <h2 id="specifics">Specifics Over Generics</h2>
        <p>
          &ldquo;Most companies struggle with X&rdquo; is generic. &ldquo;In our last 8
          deployments, 7 hit this exact wall&rdquo; is specific. Specific earns
          reading attention.
        </p>

        <h2 id="ethics">Honest Practices</h2>
        <ul>
          <li>Disclose AI use if it matters to your audience.</li>
          <li>Never publish AI-invented facts.</li>
          <li>Verify all citations.</li>
          <li>Author is responsible for everything published under their name.</li>
        </ul>

        <blockquote className={Q_PURPLE}>
          The useful AI-assisted blog post isn&apos;t written by AI. It&apos;s drafted
          by AI from a thoughtful brief and brought to life by an editor who knows the
          subject. That collaboration is the new standard.
        </blockquote>

        <p>See <a href="/blog/seo-with-ai-2026">SEO with AI in 2026</a>.</p>

        <h2 id="faq">FAQ</h2>
        <p><strong>Word count target?</strong> Whatever the topic deserves. 1200&ndash;2500 is the typical range for substantive posts.</p>
        <p><strong>How much editor time?</strong> 30&ndash;60 minutes per 1500-word post in steady-state.</p>
        <p><strong>Can we trust AI on facts?</strong> No - always verify. Cite primary sources.</p>
      </>
    ),
  },
];
