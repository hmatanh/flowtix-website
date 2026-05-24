/**
 * Minimal placeholder used while an interactive tour code-splits in.
 * Pure CSS — no framer-motion, no heavy deps.
 */
export function TourLoader() {
  return (
    <div
      className="w-full rounded-2xl border flex items-center justify-center my-12"
      style={{
        height: 520,
        background: "#0D0D0D",
        borderColor: "#1a1a1a",
      }}
    >
      <div className="text-center">
        <div
          className="w-8 h-8 mx-auto mb-3 rounded-full animate-spin"
          style={{
            border: "1px solid #222",
            borderTopColor: "#fff",
          }}
        />
        <p className="text-[11px]" style={{ color: "#333" }}>
          Loading interactive demo…
        </p>
      </div>
    </div>
  );
}
