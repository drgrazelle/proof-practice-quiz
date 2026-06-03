import Link from "next/link";

export const metadata = {
  title: "The 3P Archetype Map | Proof & Practice",
  description:
    "The 3P Framework and all 8 health habit archetypes — mapped to show exactly where every type sits.",
  openGraph: {
    title: "The 3P Archetype Map | Proof & Practice",
    description:
      "The 3P Framework and all 8 health habit archetypes — mapped to show exactly where every type sits.",
    siteName: "Proof & Practice",
    type: "website",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
};

// Shared Venn geometry
const R = 115;
const PROOF_COLOR    = "#D4A847";
const PRACTICE_COLOR = "#87CEAB";
const PURPOSE_COLOR  = "#C4A8D4";

// Circle centers — equilateral triangle arrangement
// PROOF top, PRACTICE bottom-left, PURPOSE bottom-right
// Positions verified: all archetype labels fall in correct Venn regions
const CX_PROOF = 200,  CY_PROOF = 120;
const CX_PRAC  = 127,  CY_PRAC  = 255;
const CX_PUR   = 273,  CY_PUR   = 255;

export default function ArchetypeMapPage() {
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
        <Link href="/" className="text-slate/60 text-xs hover:text-slate transition-colors">
          Take the quiz
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center px-6 py-10 max-w-2xl mx-auto w-full gap-16">

        {/* ══════════════════════════════════════
            SECTION 1 — THE 3P FRAMEWORK
        ══════════════════════════════════════ */}
        <section className="w-full flex flex-col gap-5">

          <div>
            <p className="text-golden text-xs font-semibold tracking-widest uppercase mb-3">
              The Framework
            </p>
            <h1 className="text-slate font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              The 3P Framework
            </h1>
            <p className="text-slate/70 text-sm leading-relaxed">
              Most people who struggle with health consistency aren't missing willpower.
              They're missing one piece of a three-part system.
            </p>
          </div>

          {/* Framework Venn diagram */}
          <svg
            viewBox="0 0 400 410"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram of the three pillars: Proof, Practice, and Purpose"
          >
            {/* ── Circles ── */}
            <circle cx={CX_PROOF} cy={CY_PROOF} r={R}
              fill={PROOF_COLOR}    fillOpacity="0.2"
              stroke={PROOF_COLOR}  strokeWidth="1.5" />
            <circle cx={CX_PRAC}  cy={CY_PRAC}  r={R}
              fill={PRACTICE_COLOR} fillOpacity="0.2"
              stroke={PRACTICE_COLOR} strokeWidth="1.5" />
            <circle cx={CX_PUR}   cy={CY_PUR}   r={R}
              fill={PURPOSE_COLOR}  fillOpacity="0.2"
              stroke={PURPOSE_COLOR} strokeWidth="1.5" />

            {/* ── PROOF label — top of Proof circle only region ── */}
            <text
              x="200" y="50"
              textAnchor="middle"
              fill={PROOF_COLOR}
              fontWeight="700"
              fontSize="15"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="2"
            >
              PROOF
            </text>
            <text
              x="200" y="67"
              textAnchor="middle"
              fill="white" fillOpacity="0.6"
              fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Knowing what actually works
            </text>

            {/* ── PRACTICE label — bottom-left of Practice only region ── */}
            <text
              x="90" y="300"
              textAnchor="middle"
              fill={PRACTICE_COLOR}
              fontWeight="700"
              fontSize="13.5"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="2"
            >
              PRACTICE
            </text>
            <text
              x="90" y="316"
              textAnchor="middle"
              fill="white" fillOpacity="0.6"
              fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              A system that
            </text>
            <text
              x="90" y="330"
              textAnchor="middle"
              fill="white" fillOpacity="0.6"
              fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              survives real life
            </text>

            {/* ── PURPOSE label — bottom-right of Purpose only region ── */}
            <text
              x="310" y="300"
              textAnchor="middle"
              fill={PURPOSE_COLOR}
              fontWeight="700"
              fontSize="13.5"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="2"
            >
              PURPOSE
            </text>
            <text
              x="310" y="316"
              textAnchor="middle"
              fill="white" fillOpacity="0.6"
              fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              A reason that
            </text>
            <text
              x="310" y="330"
              textAnchor="middle"
              fill="white" fillOpacity="0.6"
              fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {"doesn't expire"}
            </text>
          </svg>
        </section>

        {/* ══════════════════════════════════════
            SECTION 2 — THE 8 ARCHETYPES
        ══════════════════════════════════════ */}
        <section className="w-full flex flex-col gap-5">

          <div>
            <p className="text-golden text-xs font-semibold tracking-widest uppercase mb-3">
              The Archetypes
            </p>
            <h2 className="text-slate font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              The 8 Archetypes
            </h2>
            <p className="text-slate/70 text-sm leading-relaxed">
              Every combination of these three pieces produces a different archetype.
              Each one is dealing with a different gap.
            </p>
          </div>

          {/* Archetype Venn diagram */}
          <svg
            viewBox="0 0 400 460"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram mapping all 8 archetypes to their positions in the 3P Framework"
          >
            {/* ── Circles (slightly more transparent so labels read clearly) ── */}
            <circle cx={CX_PROOF} cy={CY_PROOF} r={R}
              fill={PROOF_COLOR}    fillOpacity="0.12"
              stroke={PROOF_COLOR}  strokeWidth="1.5" />
            <circle cx={CX_PRAC}  cy={CY_PRAC}  r={R}
              fill={PRACTICE_COLOR} fillOpacity="0.12"
              stroke={PRACTICE_COLOR} strokeWidth="1.5" />
            <circle cx={CX_PUR}   cy={CY_PUR}   r={R}
              fill={PURPOSE_COLOR}  fillOpacity="0.12"
              stroke={PURPOSE_COLOR} strokeWidth="1.5" />

            {/* ── Faint pillar axis labels ── */}
            <text x="200" y="16" textAnchor="middle"
              fill={PROOF_COLOR} fillOpacity="0.55"
              fontSize="9" fontWeight="600"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.5">
              PROOF
            </text>
            <text x="46" y="378" textAnchor="middle"
              fill={PRACTICE_COLOR} fillOpacity="0.55"
              fontSize="9" fontWeight="600"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.5">
              PRACTICE
            </text>
            <text x="354" y="378" textAnchor="middle"
              fill={PURPOSE_COLOR} fillOpacity="0.55"
              fontSize="9" fontWeight="600"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.5">
              PURPOSE
            </text>

            {/* ────────────────────────────
                SINGLE-CIRCLE REGIONS
            ──────────────────────────── */}

            {/* THE READER — Proof only, top */}
            <text x="200" y="49" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Reader
            </text>
            <text x="200" y="63" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="10"
              fontFamily="system-ui, -apple-system, sans-serif">
              Has Proof only
            </text>

            {/* THE OPTIMIZER — Practice only, bottom-left */}
            <text x="82" y="302" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Optimizer
            </text>
            <text x="82" y="315" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              Has Practice only
            </text>

            {/* THE SEEKER — Purpose only, bottom-right */}
            <text x="318" y="302" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Seeker
            </text>
            <text x="318" y="315" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              Has Purpose only
            </text>

            {/* ────────────────────────────
                TWO-CIRCLE INTERSECTIONS
            ──────────────────────────── */}

            {/* THE BURNER — Proof + Practice, left intersection */}
            <text x="150" y="178" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Burner
            </text>
            <text x="150" y="191" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily="system-ui, -apple-system, sans-serif">
              Proof + Practice
            </text>

            {/* THE BELIEVER — Proof + Purpose, right intersection */}
            <text x="250" y="178" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Believer
            </text>
            <text x="250" y="191" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily="system-ui, -apple-system, sans-serif">
              Proof + Purpose
            </text>

            {/* THE DEVOTED — Practice + Purpose, bottom intersection */}
            <text x="200" y="299" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Devoted
            </text>
            <text x="200" y="312" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily="system-ui, -apple-system, sans-serif">
              Practice + Purpose
            </text>

            {/* ────────────────────────────
                TRIPLE INTERSECTION CENTER
            ──────────────────────────── */}

            {/* THE PRACTITIONER — all three */}
            <text x="200" y="210" textAnchor="middle"
              fill="white" fontWeight="700" fontSize="11"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Practitioner
            </text>
            <text x="200" y="223" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily="system-ui, -apple-system, sans-serif">
              Has all three
            </text>

            {/* ────────────────────────────
                OUTSIDE ALL CIRCLES
            ──────────────────────────── */}

            {/* Dashed boundary indicating "outside the framework" */}
            <ellipse cx="200" cy="416" rx="87" ry="24"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              strokeDasharray="4 3" />

            {/* THE RESTARTER — outside all circles */}
            <text x="200" y="412" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12"
              fontFamily="system-ui, -apple-system, sans-serif">
              The Restarter
            </text>
            <text x="200" y="426" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily="system-ui, -apple-system, sans-serif">
              Building from the start
            </text>
          </svg>
        </section>

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
