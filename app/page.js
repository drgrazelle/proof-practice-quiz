import Link from "next/link";

// ── Minimal line-style health icons ──────────────────────────────────────────

function IconBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 6C14 6 10 4 5 5V22C10 21 14 23 14 23C14 23 18 21 23 22V5C18 4 14 6 14 6Z"
        stroke="#F9D08B" strokeWidth="1.6" strokeLinejoin="round"/>
      <line x1="14" y1="6" x2="14" y2="23" stroke="#F9D08B" strokeWidth="1.6"/>
      <line x1="8" y1="10" x2="12" y2="9.5" stroke="#F9D08B" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="12" y2="12.5" stroke="#F9D08B" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconRunningShoe() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 19C3 19 6 15 10 15L15 12L20 14H24C24 14 25 16 24 18H3Z"
        stroke="#A3D9C9" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M10 15L12 11" stroke="#A3D9C9" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M3 19H24" stroke="#A3D9C9" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M17 14L16 11" stroke="#A3D9C9" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 22C8 22 9 14 14 10C19 6 23 7 23 7C23 7 23 12 19 16C15 20 8 22 8 22Z"
        stroke="#C9BFE3" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8 22C8 22 11 18 14 14" stroke="#C9BFE3" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-navy border border-steel/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-golden shrink-0" />
          <span className="text-slate text-xs font-semibold tracking-widest uppercase">
            Free self-assessment
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-slate font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-3xl text-balance mb-4">
          <span className="text-golden">7 types of people</span>{" "}
          keep restarting their health habits.{" "}
          <span className="text-golden">1 type</span>{" "}
          doesn&apos;t.
          <br />
          <br />
          Which one are you?
        </h1>

        {/* 12 questions line */}
        <p className="text-slate/70 text-sm sm:text-base mb-10">
          12 questions. 3 minutes.
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="inline-block bg-golden text-navy font-bold text-base sm:text-lg px-8 py-4 rounded-lg shadow-lg hover:brightness-105 active:scale-95 transition-all duration-150"
        >
          Take the quiz
        </Link>

        {/* Reassurance */}
        <p className="text-slate/70 text-xs mt-5 tracking-wide">
          For self-reflection only. Not a clinical assessment.
        </p>
      </section>

      {/* ── Three pillars strip ── */}
      <section className="max-w-3xl mx-auto w-full px-6 pb-16">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">

          <div className="flex flex-col items-center gap-2 bg-navy/60 border border-steel/20 rounded-xl p-4 sm:p-5">
            <IconBook />
            <span className="text-proof font-bold text-xs sm:text-sm tracking-widest uppercase">
              Proof
            </span>
            <span className="text-slate text-xs text-center leading-relaxed hidden sm:block">
              Do you know which habits actually work?
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 bg-navy/60 border border-steel/20 rounded-xl p-4 sm:p-5">
            <IconRunningShoe />
            <span className="text-practice font-bold text-xs sm:text-sm tracking-widest uppercase">
              Practice
            </span>
            <span className="text-slate text-xs text-center leading-relaxed hidden sm:block">
              Do you have the skills to stay consistent when life gets hard?
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 bg-navy/60 border border-steel/20 rounded-xl p-4 sm:p-5">
            <IconLeaf />
            <span className="text-purpose font-bold text-xs sm:text-sm tracking-widest uppercase">
              Purpose
            </span>
            <span className="text-slate text-xs text-center leading-relaxed hidden sm:block">
              Do you have a reason deep enough that holds?
            </span>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-steel/20 px-6 py-5">
        <p className="text-slate/60 text-xs text-center">
          &copy; 2026 Dr. Grazelle &mdash; Proof &amp; Practice. Not medical advice.
        </p>
      </footer>

    </main>
  );
}
