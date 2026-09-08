import { ImageResponse } from "next/og";

export const alt = "Creator Website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#07070b",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 22,
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            color: "white",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          CD
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            color: "white",
            fontWeight: 700,
            letterSpacing: -1.5,
          }}
        >
          Creator District
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#a1a1aa" }}>
          Everything creators make, all in one place.
        </div>
        <div style={{ marginTop: 28, fontSize: 18, color: "#71717a" }}>
          Front-end prototype · mock data only · USD · United States
        </div>
      </div>
    ),
    { ...size },
  );
}
