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
          position: "relative",
        }}
      >
        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
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
              color: "#E6C280",
              fontSize: "15px",
              fontWeight: "600",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Free Self-Assessment
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            position: "absolute",
            top: "52px",
            right: "80px",
            color: "#F4F7FA",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.7,
            display: "flex",
          }}
        >
          Proof &amp; Practice
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              color: "#F4F7FA",
              fontSize: "52px",
              fontWeight: "800",
              lineHeight: "1.15",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            There are{" "}
            <span style={{ color: "#E6C280", margin: "0 14px", display: "flex" }}>
              7 types of people
            </span>{" "}
            who struggle to make health habits stick.
          </div>

          <div
            style={{
              color: "#E6C280",
              fontSize: "42px",
              fontWeight: "700",
              textAlign: "center",
              display: "flex",
            }}
          >
            Which one are you?
          </div>

          <div
            style={{
              color: "#9EACC0",
              fontSize: "20px",
              fontWeight: "400",
              textAlign: "center",
              display: "flex",
            }}
          >
            12 questions · 3 minutes · Find out which piece you&apos;re missing
          </div>
        </div>

        {/* Pillar dots */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {[
            { label: "PROOF", color: "#F9D08B" },
            { label: "PRACTICE", color: "#A3D9C9" },
            { label: "PURPOSE", color: "#C9BFE3" },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: color,
                }}
              />
              <span
                style={{
                  color: color,
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.15em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
