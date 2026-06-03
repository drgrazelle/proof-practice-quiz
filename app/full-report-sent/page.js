"use client";

import Link from "next/link";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FullReportSentPage() {
  useEffect(() => {
    // First burst — center
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { x: 0.5, y: 0.55 },
      colors: ["#E6C280", "#F9D08B", "#A3D9C9", "#C9BFE3", "#FFFFFF"],
      scalar: 1.1,
    });

    // Second burst — slight delay, wider spread
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#E6C280", "#F9D08B", "#A3D9C9", "#C9BFE3"],
        scalar: 0.9,
        startVelocity: 20,
        gravity: 0.7,
      });
    }, 200);
  }, []);

  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Top bar ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-2xl mx-auto w-full">
        <Link href="/" className="text-slate text-sm font-semibold tracking-widest uppercase hover:text-golden transition-colors">
          Health Habit Consistency Quiz
        </Link>
        <Link href="/quiz" className="text-slate/60 text-xs hover:text-slate transition-colors">
          Retake the quiz
        </Link>
      </header>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center px-6 py-10 max-w-2xl mx-auto w-full gap-8">

        {/* Hero card */}
        <div
          className="w-full rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-5"
          style={{ background: "#FFF9F0" }}
        >
          {/* Envelope icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "#E6C280" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="24" height="16" rx="2" stroke="#1A2B4A" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 8l12 9 12-9" stroke="#1A2B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#B8884A" }}>
              You&apos;re in
            </p>
            <h1 className="text-navy font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              Your report is on its way.
            </h1>
            <p className="text-navy/70 text-sm leading-relaxed max-w-sm mx-auto">
              Check your inbox — your personalized breakdown is headed there now.
            </p>
          </div>
        </div>

        {/* What&apos;s inside */}
        <div className="w-full">
          <p className="text-slate/50 text-xs font-semibold tracking-widest uppercase mb-4">
            What&apos;s inside
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "The full picture of your archetype — strengths, blind spots, and patterns",
              "How all types compare and where you sit",
              "Your specific next steps based on your scores",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "#E6C280" }}
                />
                <span className="text-slate/80 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spam note */}
        <p className="text-slate/40 text-xs text-center">
          Don&apos;t see it? Check your spam folder and move it to your inbox.
        </p>

      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-steel/20 px-6 py-5 mt-8">
        <p className="text-slate/50 text-xs text-center">
          &copy; 2026 Dr. Grazelle &mdash; Proof &amp; Practice. Not medical advice.
        </p>
      </footer>

    </main>
  );
}
