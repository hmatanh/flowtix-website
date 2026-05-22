type Props = { height?: number; className?: string };

export function LinxLogo({ height = 40, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 150 40"
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="linx"
    >
      {/* L vertical stroke */}
      <line
        x1="6"
        y1="6"
        x2="6"
        y2="32"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="square"
      />
      {/* L horizontal stroke */}
      <line
        x1="6"
        y1="32"
        x2="24"
        y2="32"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="square"
      />

      {/* Network connecting lines (under nodes) */}
      <line
        x1="30"
        y1="10"
        x2="36"
        y2="20"
        stroke="#8B5CF6"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <line
        x1="36"
        y1="20"
        x2="30"
        y2="30"
        stroke="#8B5CF6"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <line
        x1="30"
        y1="10"
        x2="30"
        y2="30"
        stroke="#8B5CF6"
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* Network nodes */}
      <circle cx="30" cy="10" r="3" fill="#8B5CF6" />
      <circle cx="36" cy="20" r="2" fill="#8B5CF6" opacity="0.7" />
      <circle cx="30" cy="30" r="2.5" fill="#8B5CF6" opacity="0.5" />

      {/* Wordmark "linx" */}
      <text
        x="48"
        y="26"
        fill="white"
        fontWeight={700}
        fontSize={20}
        letterSpacing="-0.03em"
        fontFamily="Inter, system-ui, sans-serif"
      >
        linx
      </text>
    </svg>
  );
}
