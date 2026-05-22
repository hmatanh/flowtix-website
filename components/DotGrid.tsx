type Props = {
  className?: string;
  opacity?: number;
  size?: number;
};

export function DotGrid({ className = "", opacity = 0.25, size = 32 }: Props) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage:
          "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
