type Props = { height?: number; className?: string };

export function AurumLogo({ height = 44, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 180 44"
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AURUM Wealth Management"
    >
      {/* Outer frame */}
      <rect
        x="2"
        y="2"
        width="36"
        height="38"
        rx="2"
        stroke="#D97706"
        strokeWidth="0.8"
        fill="none"
      />

      {/* Serif "A" — left leg, right leg, crossbar */}
      <path
        d="M8 34 L20 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 8 L32 34"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 24 L29 24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />

      {/* Bottom amber line across full emblem */}
      <line
        x1="2"
        y1="40"
        x2="38"
        y2="40"
        stroke="#D97706"
        strokeWidth="1"
      />

      {/* Wordmark "AURUM" */}
      <text
        x="52"
        y="20"
        fill="white"
        fontWeight={600}
        fontSize={15}
        letterSpacing="0.25em"
        fontFamily="Inter, system-ui, sans-serif"
      >
        AURUM
      </text>

      {/* Subtitle "WEALTH MANAGEMENT" */}
      <text
        x="52"
        y="32"
        fill="#D97706"
        fontWeight={500}
        fontSize={7}
        letterSpacing="0.2em"
        fontFamily="Inter, system-ui, sans-serif"
      >
        WEALTH MANAGEMENT
      </text>
    </svg>
  );
}
