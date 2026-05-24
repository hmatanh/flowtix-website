import { ImageResponse } from "next/og";

// Required for Next.js static export — generates the icon at build time.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 180 180" fill="none">
          <path
            d="M90 10L170 90L90 170L10 90L90 10Z"
            stroke="white"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M90 50L130 90L90 130L50 90L90 50Z"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
