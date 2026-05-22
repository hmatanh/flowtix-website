type Props = {
  items?: string[];
  className?: string;
  separator?: string;
  speed?: "slow" | "default";
};

const DEFAULT_ITEMS = [
  "AI Systems",
  "Intelligent Agents",
  "Brand Strategy",
  "Automation",
  "Web Development",
  "UI/UX Design",
  "AI Integration",
  "Workflow Design",
  "Digital Products",
  "AI Consulting",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  className = "",
  separator = "·",
  speed = "default",
}: Props) {
  const content = (
    <span className="inline-flex shrink-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center text-[#333] text-xs tracking-[0.15em] uppercase"
        >
          <span className="mx-8">{item}</span>
          <span className="text-[#1a1a1a]">{separator}</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`bg-[#080808] border-y border-[#1a1a1a] py-5 overflow-hidden relative ${className}`}
    >
      <div className={speed === "slow" ? "marquee-slow" : "marquee-track"}>
        {content}
        {content}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent" />
    </div>
  );
}
