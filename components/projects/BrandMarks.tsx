type Props = { size?: number; color?: string };

export function KovaMark({ size = 28, color = "#0EA5E9" }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2L30 16L16 30L2 16L16 2Z" stroke={color} strokeWidth="1.5" />
      <path
        d="M9 18 L9 14 L16 9 L23 14 L23 18 Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="15" y1="18" x2="15" y2="22" stroke={color} strokeWidth="1.2" />
      <line x1="17" y1="18" x2="17" y2="22" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function SeroMark({ size = 28, color = "#10B981" }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.5" />
      <path
        d="M11 11 C 14 9, 18 9, 20 12 C 21 14, 19 16, 16 17 C 13 18, 11 20, 12 22 C 14 24, 18 24, 21 22"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function AurumMark({ size = 28, color = "#D97706" }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M6 28 L16 4 L26 28"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="10" y1="20" x2="22" y2="20" stroke={color} strokeWidth="1.4" />
      <line x1="6" y1="28" x2="9" y2="28" stroke={color} strokeWidth="1.4" />
      <line x1="23" y1="28" x2="26" y2="28" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function DrftMark({ color = "#F97316" }: Props) {
  return (
    <span
      className="font-black italic tracking-tighter"
      style={{ color, fontSize: 26, transform: "skewX(-8deg)", display: "inline-block" }}
    >
      D
    </span>
  );
}

export function LinxMark({ color = "#8B5CF6" }: Props) {
  return (
    <span className="inline-flex items-center gap-1" style={{ color }}>
      <span className="font-black tracking-tight" style={{ fontSize: 20 }}>
        L
      </span>
      <span className="inline-flex items-center gap-[3px]">
        <span className="w-1 h-1 rounded-full" style={{ background: color }} />
        <span className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.6 }} />
        <span className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.3 }} />
      </span>
    </span>
  );
}

export function ProjectMark({
  slug,
  size = 28,
}: {
  slug: string;
  size?: number;
}) {
  switch (slug) {
    case "kova":
      return <KovaMark size={size} />;
    case "sero":
      return <SeroMark size={size} />;
    case "aurum":
      return <AurumMark size={size} />;
    case "drft":
      return <DrftMark />;
    case "linx":
      return <LinxMark />;
    default:
      return null;
  }
}
