"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const PILLAR_HIGH_COLORS = {
  Proof:    "#F9D08B",
  Practice: "#A3D9C9",
  Purpose:  "#C9BFE3",
};

function splitAtFirstSentence(text) {
  const idx = text.indexOf(". ");
  if (idx === -1) return [text, ""];
  return [text.slice(0, idx + 1), text.slice(idx + 2)];
}

export default function ResultsPage({
  archetypeName,
  oneLineTruth,
  strengthSentence,
  whatYouNeed,
  blurContent,
  missingPieceBorderColor = "#E6C280",
  embedScript,        // { src, formId } — when provided, injects beehiiv into #beehiiv-embed-target
  accentBorder,
  accentText,
  pillars,
}) {
  // phase 0: text fully visible, card hidden
  // phase 1: text blurring in (0.5s transition)
  // phase 2: blur complete, card fading in (0.5s transition)
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Dynamically append beehiiv script into its target div after gate card is visible.
  // Runs when phase reaches 2 so the target div is rendered before injection.
  useEffect(() => {
    if (!embedScript || phase < 2) return;
    const container = document.getElementById("beehiiv-embed-target");
    if (!container) return;
    // Guard: don't inject twice
    if (container.querySelector(`script[src="${embedScript.src}"]`)) return;
    const script = document.createElement("script");
    script.src = embedScript.src;
    script.async = true;
    script.setAttribute("data-beehiiv-form", embedScript.formId);
    container.appendChild(script);
  }, [phase, embedScript]);

  function scrollToForm() {
    document.getElementById("optin-form")?.scrollIntoView({ behavior: "smooth" });
  }


  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Top bar ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-2xl mx-auto w-full">
        <Link href="/" className="text-slate text-sm font-semibold tracking-widest uppercase hover:text-golden transition-colors">
          Health Habit Consistency Quiz
        </Link>
        <Link href="/" className="text-slate/60 text-xs hover:text-slate transition-colors">
          Retake the quiz
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center px-6 py-10 max-w-2xl mx-auto w-full gap-8">

        {/* ── Pillar score strip ── */}
        <div className="w-full grid grid-cols-3 gap-2">
          {pillars.map((p) => {
            const isHigh = p.status === "present";
            return (
              <div
                key={p.label}
                className="flex flex-col items-center gap-1.5 rounded-xl py-3 px-2"
                style={isHigh
                  ? { backgroundColor: PILLAR_HIGH_COLORS[p.label] }
                  : { backgroundColor: "#2A3A52" }
                }
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isHigh ? "#76C043" : "#E05252" }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: isHigh ? "#1A2B48" : "#9EACC0" }}
                >
                  {p.label}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: isHigh ? "#1A2B4899" : "#9EACC0AA" }}
                >
                  {isHigh ? "High" : "Low"}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Archetype name ── */}
        <div className="w-full text-center">
          <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${accentText}`}>
            Your result
          </p>
          <h1 className="text-slate font-extrabold text-4xl sm:text-5xl tracking-tight">
            {archetypeName}
          </h1>
        </div>

        {/* ── One-line truth ── */}
        <p className="text-slate/80 text-lg sm:text-xl text-center leading-relaxed max-w-xl">
          {oneLineTruth}
        </p>

        {/* ── Strength sentence ── */}
        <div className={`w-full rounded-xl border ${accentBorder} bg-navy/60 px-6 py-5`}>
          <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${accentText}`}>
            Your strength
          </p>
          <p className="text-slate text-base leading-relaxed">
            {strengthSentence}
          </p>
        </div>

        {/* ── Missing piece — full-page fade-to-gate ──
            No box. Blurred text floats on the page bg and fades to navy.
            Gate band breaks out of the column padding (negative margins)
            so it runs edge-to-edge, just like The Free Press paywall pattern.
        ── */}
        <div className="w-full">

          {/* Text zone: on page background, no box */}
          <div style={{ position: "relative", paddingBottom: "0" }}>

            {/* Label */}
            <p style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: missingPieceBorderColor,
              marginBottom: "16px",
            }}>
              Your missing piece
            </p>

            {/* Blurred text — clipped, fades into page background */}
            <div style={{
              fontSize: "1rem",
              lineHeight: 1.625,
              color: "#F4F7FA",
              maxHeight: "160px",
              overflow: "hidden",
              filter: phase >= 1 ? "blur(5px)" : "blur(0px)",
              transition: "filter 0.5s ease-in-out",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}>
              {blurContent}
            </div>

            {/* Gradient: transparent → page navy #1A2B48 */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "90px",
              background: "linear-gradient(to bottom, transparent, #1A2B48)",
              pointerEvents: "none",
            }} />
          </div>
          {/* end text zone */}

          {/* Gate band: breaks out of column px-6 padding, runs edge-to-edge */}
          <div style={{
            marginLeft: "-24px",
            marginRight: "-24px",
            backgroundColor: "rgba(255,249,240,0.97)",
            padding: "40px 24px 44px",
            textAlign: "center",
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            pointerEvents: phase >= 2 ? "auto" : "none",
          }}>
            <p style={{ color: "#1A2B48", fontWeight: 800, fontSize: "1.25rem", lineHeight: 1.3, margin: "0 0 12px" }}>
              Get the full picture.
            </p>
            <p style={{ color: "rgba(26,43,72,0.7)", fontSize: "0.9375rem", lineHeight: 1.6, margin: "0 auto 10px", maxWidth: "480px" }}>
              What this means for you specifically, how you compare to every other type, and the exact next steps for where you are right now.
            </p>
            <p style={{ color: "#1A2B48", fontSize: "0.8125rem", margin: "0 0 20px", fontStyle: "italic" }}>
              Free. Sent to your inbox.
            </p>

            {embedScript ? (
              <div
                id="beehiiv-embed-target"
                style={{ width: "100%", maxWidth: "440px", margin: "0 auto" }}
              />
            ) : (
              <button
                onClick={scrollToForm}
                style={{
                  backgroundColor: "#E6C280",
                  color: "#1A2B48",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get my full result
              </button>
            )}
          </div>
          {/* end gate band */}

        </div>
        {/* end missing piece section */}



      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-steel/20 px-6 py-5 mt-8">
        <p className="text-slate/40 text-xs text-center">
          &copy; 2026 Dr. Grazelle &mdash; Proof &amp; Practice. Not medical advice.
        </p>
      </footer>

    </main>
  );
}

