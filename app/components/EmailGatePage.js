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

    // Remove any previously injected script for this form
    const existing = document.getElementById("beehiiv-gate-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "beehiiv-gate-script";
    script.src = embedScript.src;
    script.setAttribute("data-form-id", embedScript.formId);
    script.setAttribute("data-form-url",
      `https://embeds.beehiiv.com/v3/subscribe/form/${embedScript.formId}`
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("beehiiv-gate-script");
      if (s) s.remove();
    };
  }, [embedScript]);

  return (
    <main className="min-h-screen bg-navy flex flex-col">

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

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-slate font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight">
              We found your pattern.
            </h1>
            <p className="text-slate/60 text-base leading-relaxed">
              Where should we send your result? Your habit consistency profile,
              what&apos;s been getting in the way, and your specific next step.
            </p>
          </div>

          {/* Beehiiv embed */}
          <div id="beehiiv-embed-target" className="w-full" />

          {/* Disclaimer */}
          <p className="text-slate/35 text-xs leading-relaxed">
            You&apos;ll also get Proof &amp; Practice, a weekly newsletter on
            evidence-based health for people too busy for perfection.
            Unsubscribe anytime.
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
