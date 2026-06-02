import Link from "next/link";

export const metadata = {
  title: "Your Report Is On Its Way | Proof & Practice",
  description: "Your personalized health habit breakdown is headed to your inbox.",
};

export default function FullReportSentPage() {
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

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center px-6 py-14 max-w-2xl mx-auto w-full gap-8">

        {/* Eyebrow label */}
        <div className="w-full">
          <p className="text-golden text-xs font-semibold tracking-widest uppercase mb-4">
            You&apos;re in
          </p>

          {/* Headline */}
          <h1 className="text-slate font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight mb-5">
            Your full result is on its way.
          </h1>

          {/* Subtext */}
          <p className="text-slate/70 text-base leading-relaxed">
            Check your inbox — your personalized breakdown is headed there now. It includes what your result actually means, how you compare to every other type, and the exact next steps for where you are right now.
          </p>
        </div>

        {/* Cream card */}
        <div
          className="w-full rounded-xl px-6 py-6"
          style={{ background: "#FFF9F0" }}
        >
          <p className="text-navy font-bold text-sm tracking-wide mb-4">
            What&apos;s inside your report
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "The full picture of your archetype — strengths, blind spots, and patterns",
              "How all types compare and where you sit",
              "Your specific next steps based on your scores",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "#1A2B48" }}
                />
                <span className="text-navy text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spam note */}
        <p className="text-slate/40 text-xs text-center">
          Don&apos;t see it? Check your spam folder and move it to your inbox.
        </p>

        {/* Sign-off */}
        <div className="text-center">
          <p className="text-slate text-sm font-semibold mb-1">
            Grazelle 🌱
          </p>
          <p className="text-slate/40 text-xs">
            Proof &amp; Practice — Evidence-based health for people too busy for perfection.
          </p>
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
