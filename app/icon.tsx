import { ImageResponse } from "next/og";

// Required for Next.js static export - generates the icon at build time.
export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2L30 16L16 30L2 16L16 2Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M16 9L23 16L16 23L9 16L16 9Z"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
