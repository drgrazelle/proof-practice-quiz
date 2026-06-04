import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1A2B48",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "56px",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Headline */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "800",
            lineHeight: "1.1",
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <span style={{ color: "#F4F7FA" }}>{"Here's why you keep"}</span>
          <span style={{ color: "#E6C280" }}>starting over.</span>
        </div>

        {/* CTA button */}
        <div
          style={{
            background: "#E6C280",
            color: "#1A2B48",
            fontSize: "26px",
            fontWeight: "700",
            padding: "22px 56px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          Take the free quiz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
