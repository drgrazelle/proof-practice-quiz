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
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(94,122,158,0.4)",
            borderRadius: "9999px",
            padding: "8px 20px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#E6C280",
            }}
          />
          <span
            style={{
              color: "#F4F7FA",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Free self-assessment
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F4F7FA",
            fontSize: "58px",
            fontWeight: "800",
            lineHeight: "1.15",
            textAlign: "center",
            maxWidth: "900px",
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
            <span style={{ color: "#F4F7FA" }}>There are</span>
            <span style={{ color: "#E6C280" }}>7 types of people</span>
            <span style={{ color: "#F4F7FA" }}>who struggle to</span>
            <span style={{ color: "#F4F7FA" }}>make health habits stick.</span>
          </span>
          <span style={{ color: "#E6C280", marginTop: "28px", display: "flex" }}>
            Which one are you?
          </span>
        </div>

        {/* CTA button */}
        <div
          style={{
            background: "#E6C280",
            color: "#1A2B48",
            fontSize: "22px",
            fontWeight: "700",
            padding: "20px 48px",
            borderRadius: "10px",
            marginTop: "16px",
            display: "flex",
          }}
        >
          Take the quiz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
