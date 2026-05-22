type Props = { height?: number; className?: string };

export function KovaLogo({ height = 40, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 160 40"
      height={height}
      style={{ height, width: "auto" }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KOVA"
    >
      {/* Icon — geometric diamond */}
      <polygon
        points="18,2 34,18 18,34 2,18"
        stroke="#0EA5E9"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="18,9 27,18 18,27 9,18"
        stroke="#0EA5E9"
        strokeWidth="1"
        fill="rgba(14,165,233,0.08)"
      />
      <circle cx="18" cy="18" r="2" fill="#0EA5E9" />

      {/* Wordmark */}
      <text
        x="46"
        y="25"
        fill="white"
        fontWeight={700}
        fontSize={18}
        letterSpacing="0.08em"
        fontFamily="Inter, system-ui, sans-serif"
      >
        KOVA
      </text>
    </svg>
  );
}
