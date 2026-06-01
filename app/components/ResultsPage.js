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
  gateCardWidth = "85%",
  embedScript,        // { src, formId } — when provided, injects beehiiv into #beehiiv-embed-target
  accentBorder,
  accentText,
  pillars,
}) {
  const [copied, setCopied] = useState(false);

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

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function scrollToForm() {
    document.getElementById("optin-form")?.scrollIntoView({ behavior: "smooth" });
  }

  const shareText = `I just took the 3P Quiz and I'm ${archetypeName}. Find out which piece of health consistency you're missing.`;
  const shareUrl  = typeof window !== "undefined" ? window.location.href : "";
  const [firstSentence] = splitAtFirstSentence(whatYouNeed);

  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Top bar ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-2xl mx-auto w-full">
        <Link href="/" className="text-slate text-sm font-semibold tracking-widest uppercase hover:text-golden transition-colors">
          Proof &amp; Practice
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
                  style={isHigh
                    ? { backgroundColor: "#1A2B48", opacity: 0.4 }
                    : { backgroundColor: "#9EACC0", opacity: 0.5 }
                  }
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

        {/* ── Missing piece (gated) ──
            Outer box: label + first sentence above, blur zone below.
            No fixed height anywhere — content sizes the box.
        ── */}
        <div style={{
          width: "100%",
          borderRadius: "12px",
          border: "1px solid rgba(94,122,158,0.3)",
          backgroundColor: "rgba(26,43,72,0.6)",
          padding: "20px 24px 0",
        }}>

          {/* Label */}
          <p style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(158,172,192,0.7)",
            marginBottom: "12px",
          }}>
            Your missing piece
          </p>

          {/* First sentence — always readable */}
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.625,
            color: "#F4F7FA",
            marginBottom: "16px",
          }}>
            {firstSentence}
          </p>

          {/* ── Blur + gate zone ──
              - position:relative container, overflow hidden, no fixed height
              - Blurred text is position:absolute; inset:0 → fills background
              - Gate card is in NORMAL FLOW → sizes the container height
              - Container padding: 36px top (line above), 20px sides (peek left/right)
          ── */}
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 0 8px 8px",
            marginLeft: "-24px",
            marginRight: "-24px",
            padding: "36px 20px 20px",
          }}>

            {/* Blurred text — absolute, fills background behind the card */}
            <div style={{
              position: "absolute",
              inset: 0,
              padding: "16px 20px",
              fontSize: "1rem",
              lineHeight: 1.625,
              color: "#F4F7FA",
              userSelect: "none",
              WebkitUserSelect: "none",
              filter: phase >= 1 ? "blur(8px)" : "blur(0px)",
              transition: "filter 0.5s ease-in-out",
            }}>
              {blurContent}
            </div>

            {/* Gate card — in normal flow, its height drives the container */}
            <div style={{
              position: "relative",
              width: gateCardWidth,
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: 1,
              backgroundColor: "rgba(255,249,240,0.92)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              borderRadius: "12px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              minHeight: embedScript ? "280px" : undefined,
              opacity: phase >= 2 ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              pointerEvents: phase >= 2 ? "auto" : "none",
            }}>
              <p style={{ color: "#1A2B48", fontWeight: 700, fontSize: "1.125rem", lineHeight: 1.4, margin: 0 }}>
                Get the full picture.
              </p>
              <p style={{ color: "#1A2B48CC", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                What this means for you specifically, how you compare to every other type, and the exact next steps for where you are right now.
              </p>
              <p style={{ color: "#1A2B48", fontSize: "0.75rem", margin: 0 }}>
                Free. Sent to your inbox.
              </p>

              {embedScript ? (
                // Target div for the beehiiv script — injected via useEffect above.
                // The script appends its form widget here, scoped to this div only.
                <div
                  id="beehiiv-embed-target"
                  style={{ width: "100%", marginTop: "8px", paddingTop: "4px", paddingBottom: "4px" }}
                />
              ) : (
                <button
                  onClick={scrollToForm}
                  style={{
                    marginTop: "4px",
                    backgroundColor: "#E6C280",
                    color: "#1A2B48",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get my full result
                </button>
              )}
            </div>
            {/* end gate card */}

          </div>
          {/* end blur+gate zone */}

        </div>
        {/* end missing piece box */}

        {/* ── BeeHiiv placeholder (only shown when no embed is configured) ── */}
        {!embedScript && (
          <div
            id="optin-form"
            className="w-full rounded-xl border-2 border-dashed border-steel/30 bg-navy/40 px-6 py-10 flex items-center justify-center"
          >
            <p className="text-steel/50 text-sm font-semibold tracking-widest uppercase text-center">
              BEEHIIV FORM GOES HERE
            </p>
          </div>
        )}

        {/* ── Social share ── */}
        <div className="w-full">
          <p className="text-slate/50 text-xs font-semibold tracking-widest uppercase mb-4 text-center">
            Share your result
          </p>
          <div className="flex flex-col sm:flex-row gap-3">

            <a
              href={`https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-navy/60 border border-steel/30 text-slate text-sm font-semibold py-3 px-4 rounded-xl hover:border-golden/60 hover:text-golden transition-all"
            >
              <ThreadsIcon />
              Threads
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-navy/60 border border-steel/30 text-slate text-sm font-semibold py-3 px-4 rounded-xl hover:border-golden/60 hover:text-golden transition-all"
            >
              <LinkedInIcon />
              LinkedIn
            </a>

            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 bg-navy/60 border border-steel/30 text-slate text-sm font-semibold py-3 px-4 rounded-xl hover:border-golden/60 hover:text-golden transition-all"
            >
              <CopyIcon />
              {copied ? "Copied!" : "Copy link"}
            </button>

          </div>
        </div>

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

function ThreadsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.017c.027-3.579.877-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.086.713 5.496 2.051 7.164 1.43 1.781 3.63 2.695 6.54 2.717 2.082-.013 3.816-.494 5.106-1.43 1.25-.906 2.083-2.302 2.474-4.142H12.75v-2.067h9.614c.124.857.166 1.725.115 2.616-.298 5.5-3.775 8.282-9.293 8.35z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  );
}
