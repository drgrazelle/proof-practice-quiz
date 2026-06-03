import Link from "next/link";

// ── Minimal line-style health icons (inline SVG, no external deps) ────────────

function IconBook() {
  // Open book — represents "Proof" (knowledge, evidence)
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
  // Sneaker side view — represents "Practice" (doing, moving, consistency)
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
  // Leaf — represents "Purpose" (why, roots, growth)
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
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F9F8F5" }}>

      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
          style={{ backgroundColor: "#EEF1F7", borderColor: "#C2CEE0" }}
        >
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#E6C280" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5B7BA8" }}>
            Free self-assessment
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-3xl text-balance mb-6"
          style={{ color: "#1A2B4A" }}
        >
          There are{" "}
          <span style={{ color: "#C8973A" }}>7 types of people</span>{" "}
          who struggle to make health habits stick.
          <br className="block" />
          <span className="block mt-6 sm:mt-8">
            <span style={{ color: "#C8973A" }}>Which one are you?</span>
          </span>
        </h1>

        {/* Subline */}
        <p
          className="text-base sm:text-lg mb-10 leading-relaxed text-center max-w-sm mx-auto"
          style={{ color: "#5B7BA8" }}
        >
          12 questions. 3 minutes. Find out which piece you&apos;re missing.
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="inline-block font-bold text-base sm:text-lg px-8 py-4 rounded-lg shadow-md hover:brightness-105 active:scale-95 transition-all duration-150"
          style={{ backgroundColor: "#1A2B4A", color: "#F9F8F5" }}
        >
          Take the quiz →
        </Link>

        {/* Reassurance */}
        <p className="text-xs mt-5 tracking-wide" style={{ color: "#9AAFC8" }}>
          For self-reflection only. Not a clinical assessment.
        </p>
      </section>

      {/* ── Three pillars strip ── */}
      <section className="max-w-3xl mx-auto w-full px-6 pb-16">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">

          {/* Proof */}
          <div
            className="flex flex-col items-center gap-3 rounded-xl p-4 sm:p-5 border"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E4DB" }}
          >
            <IconBook />
            <span className="font-bold text-xs sm:text-sm tracking-widest uppercase" style={{ color: "#C8973A" }}>
              Proof
            </span>
            <span className="text-xs text-center leading-relaxed hidden sm:block" style={{ color: "#5B7BA8" }}>
              Do you know which habits actually work?
            </span>
          </div>

          {/* Practice */}
          <div
            className="flex flex-col items-center gap-3 rounded-xl p-4 sm:p-5 border"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E4DB" }}
          >
            <IconRunningShoe />
            <span className="font-bold text-xs sm:text-sm tracking-widest uppercase" style={{ color: "#7DBFAB" }}>
              Practice
            </span>
            <span className="text-xs text-center leading-relaxed hidden sm:block" style={{ color: "#5B7BA8" }}>
              Do you have the skills to stay consistent when life gets hard?
            </span>
          </div>

          {/* Purpose */}
          <div
            className="flex flex-col items-center gap-3 rounded-xl p-4 sm:p-5 border"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E4DB" }}
          >
            <IconLeaf />
            <span className="font-bold text-xs sm:text-sm tracking-widest uppercase" style={{ color: "#9B8FC4" }}>
              Purpose
            </span>
            <span className="text-xs text-center leading-relaxed hidden sm:block" style={{ color: "#5B7BA8" }}>
              Do you have a reason deep enough that holds?
            </span>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-5" style={{ borderTop: "1px solid #DDD9D0" }}>
        <p className="text-xs text-center" style={{ color: "#9AAFC8" }}>
          &copy; 2026 Dr. Grazelle &mdash; Proof &amp; Practice. Not medical advice.
        </p>
      </footer>

    </main>
  );
}
