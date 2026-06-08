type Props = { height?: number; className?: string };

export function DrftLogo({ height = 40, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 140 40"
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DRFT"
    >
      {/* Italic D lettermark */}
      <g transform="skewX(-8)">
        {/* Vertical stroke */}
        <line
          x1="8"
          y1="4"
          x2="8"
          y2="34"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="square"
        />
        {/* Curved right side */}
        <path
          d="M8 4 Q 36 4 36 19 Q 36 34 8 34"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        {/* Orange accent slash inside D */}
        <path
          d="M14 14 L26 24"
          stroke="#DC2626"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Wordmark "DRFT" - italic skewed */}
      <text
        x="52"
        y="28"
        fill="white"
        fontWeight={900}
        fontSize={22}
        letterSpacing="-0.03em"
        fontStyle="italic"
        fontFamily="Inter, system-ui, sans-serif"
        transform="skewX(-4)"
      >
        DRFT
      </text>
    </svg>
  );
}
