import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Top bar ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <span className="text-slate text-sm font-semibold tracking-widest uppercase">
          Health Habit Consistency Quiz
        </span>
        <span className="text-slate text-xs tracking-wide hidden sm:block">
          Grazelle S.
        </span>
      </header>

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
        <h1 className="text-slate font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-3xl text-balance mb-6">
          There are{" "}
          <span className="text-golden">7 types of people</span>{" "}
          who struggle to make health habits stick.
          <br className="block" />
          <span className="block mt-6 sm:mt-8">
            <span className="text-golden">Which one are you?</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-slate text-base sm:text-lg mb-10 leading-relaxed text-center max-w-sm mx-auto">
          12 questions. 3 minutes. Find out which piece you&apos;re missing.
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
            <span className="w-3 h-3 rounded-full bg-proof" />
            <span className="text-proof font-bold text-xs sm:text-sm tracking-widest uppercase">
              Proof
            </span>
            <span className="text-slate text-xs text-center leading-relaxed hidden sm:block">
              Do you know which habits actually work?
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-navy/60 border border-steel/20 rounded-xl p-4 sm:p-5">
            <span className="w-3 h-3 rounded-full bg-practice" />
            <span className="text-practice font-bold text-xs sm:text-sm tracking-widest uppercase">
              Practice
            </span>
            <span className="text-slate text-xs text-center leading-relaxed hidden sm:block">
              Do you have the skills to stay consistent when life gets hard?
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-navy/60 border border-steel/20 rounded-xl p-4 sm:p-5">
            <span className="w-3 h-3 rounded-full bg-purpose" />
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
