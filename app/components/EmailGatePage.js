"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * EmailGatePage
 * Shared layout for all 8 archetype result pages.
 * Shows the email gate — no archetype name, no scores, no result content.
 *
 * Props:
 *   embedScript: { src: string, formId: string }
 */
export default function EmailGatePage({ embedScript }) {
  useEffect(() => {
    if (!embedScript?.src || !embedScript?.formId) return;
    const container = document.getElementById("beehiiv-embed-target");
    if (!container) return;
    if (container.querySelector(`script[src="${embedScript.src}"]`)) return;
    const script = document.createElement("script");
    script.src = embedScript.src;
    script.async = true;
    script.setAttribute("data-beehiiv-form", embedScript.formId);
    container.appendChild(script);
  }, [embedScript]);

  return (
    <main className="min-h-screen bg-navy flex flex-col">

      <style>{`
        @keyframes drawBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .draw-bar {
          animation: drawBar 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .fade-up-1 {
          opacity: 0;
          animation: fadeUp 400ms ease forwards;
          animation-delay: 500ms;
        }
        .fade-up-2 {
          opacity: 0;
          animation: fadeUp 400ms ease forwards;
          animation-delay: 650ms;
        }
        .fade-up-3 {
          opacity: 0;
          animation: fadeUp 400ms ease forwards;
          animation-delay: 800ms;
        }
        .fade-up-4 {
          opacity: 0;
          animation: fadeUp 400ms ease forwards;
          animation-delay: 950ms;
        }
        .fade-up-5 {
          opacity: 0;
          animation: fadeUp 400ms ease forwards;
          animation-delay: 1050ms;
        }
      `}</style>

      {/* ── Progress complete bar — draws across on load ── */}
      <div className="w-full h-1 bg-navy overflow-hidden">
        <div className="h-full draw-bar" style={{ background: "#E6C280" }} />
      </div>

      {/* ── Header ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-2xl mx-auto w-full">
        <Link
          href="/"
          className="text-slate text-sm font-semibold tracking-widest uppercase hover:text-golden transition-colors"
        >
          Health Habit Consistency Quiz
        </Link>
        <Link href="/quiz" className="text-slate/60 text-xs hover:text-slate transition-colors">
          Retake the quiz
        </Link>
      </header>

      {/* ── Gate content ── */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-[480px] flex flex-col gap-6">

          <div className="flex flex-col gap-3">
            {/* Badge */}
            <div className="flex items-center gap-2 fade-up-1">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#E6C280" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#E6C280" }}
              >
                Your result is ready
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-slate font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight fade-up-2">
              We found your type.
            </h1>

            {/* Subheading */}
            <p className="text-slate font-semibold text-base leading-snug fade-up-3">
              Where should we send your result?
            </p>

            {/* Body text */}
            <p className="text-slate/60 text-base leading-relaxed fade-up-3">
              Your specific next step — plus what&apos;s been getting in the way
              and why it keeps happening.
            </p>
          </div>

          {/* Beehiiv embed */}
          <div id="beehiiv-embed-target" className="w-full fade-up-4" />

          {/* Disclaimer */}
          <p className="text-slate/35 text-xs leading-relaxed fade-up-5">
            You&apos;ll also get Proof &amp; Practice — every Saturday, one
            evidence-backed idea you can actually use to be consistent with your
            habits. Unsubscribe anytime.
          </p>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-steel/20 px-6 py-5 mt-8">
        <p className="text-slate/40 text-xs text-center">
          &copy; 2026 Dr. Grazelle &mdash; Proof &amp; Practice. Not medical advice.
        </p>
      </footer>

    </main>
  );
}
