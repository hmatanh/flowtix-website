type Props = { height?: number; className?: string };

export function SeroLogo({ height = 40, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 160 40"
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="serō"
    >
      {/* Pulse line behind the emblem */}
      <line
        x1="7"
        y1="20"
        x2="31"
        y2="20"
        stroke="#10B981"
        strokeWidth="0.5"
        opacity="0.3"
      />
      {/* Outer circle */}
      <circle
        cx="19"
        cy="20"
        r="17"
        stroke="#10B981"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Stylized S - two arcs */}
      <path
        d="M19 7 Q 27 12 19 17 Q 11 22 19 27"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Wordmark "serō" */}
      <text
        x="46"
        y="26"
        fill="white"
        fontWeight={500}
        fontSize={19}
        letterSpacing="-0.02em"
        fontFamily="Inter, system-ui, sans-serif"
      >
        ser&#x14D;
      </text>
    </svg>
  );
}
