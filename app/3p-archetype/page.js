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

// ── Shared Venn geometry ──────────────────────────────────────────────────────
// Equilateral triangle, side = 140px, R = 120px → overlap = 100px per pair
// All archetype label positions verified to fall in correct Venn regions.
const R = 120;
const CX_PROOF = 200, CY_PROOF = 148;
const CX_PRAC  = 130, CY_PRAC  = 269;
const CX_PUR   = 270, CY_PUR   = 269;

const PROOF_COLOR    = "#D4A847";
const PRACTICE_COLOR = "#87CEAB";
const PURPOSE_COLOR  = "#C4A8D4";
const FONT          = "system-ui, -apple-system, sans-serif";

// Shared circle definitions used in both diagrams
function VennCircles({ fillOpacity = 0.18 }) {
  return (
    <>
      <circle cx={CX_PROOF} cy={CY_PROOF} r={R}
        fill={PROOF_COLOR}    fillOpacity={fillOpacity}
        stroke={PROOF_COLOR}  strokeWidth="1.5" />
      <circle cx={CX_PRAC}  cy={CY_PRAC}  r={R}
        fill={PRACTICE_COLOR} fillOpacity={fillOpacity}
        stroke={PRACTICE_COLOR} strokeWidth="1.5" />
      <circle cx={CX_PUR}   cy={CY_PUR}   r={R}
        fill={PURPOSE_COLOR}  fillOpacity={fillOpacity}
        stroke={PURPOSE_COLOR} strokeWidth="1.5" />
    </>
  );
}

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
              Most people who struggle with health consistency aren&apos;t missing willpower.
              They&apos;re missing one piece of a three-part system.
            </p>
          </div>

          {/* Framework Venn — same geometry as archetype diagram, pillar labels only */}
          <svg
            viewBox="0 0 400 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram of the three pillars: Proof, Practice, and Purpose"
          >
            <VennCircles fillOpacity={0.18} />

            {/* PROOF — above top of circle */}
            <text x="200" y="22" textAnchor="middle"
              fill={PROOF_COLOR} fontWeight="700" fontSize="14"
              fontFamily={FONT} letterSpacing="2">
              PROOF
            </text>
            <text x="200" y="38" textAnchor="middle"
              fill="white" fillOpacity="0.55" fontSize="11"
              fontFamily={FONT}>
              Knowing what actually works
            </text>

            {/* PRACTICE — lower-left region */}
            <text x="82" y="308" textAnchor="middle"
              fill={PRACTICE_COLOR} fontWeight="700" fontSize="13"
              fontFamily={FONT} letterSpacing="2">
              PRACTICE
            </text>
            <text x="82" y="323" textAnchor="middle"
              fill="white" fillOpacity="0.55" fontSize="11"
              fontFamily={FONT}>
              A system that
            </text>
            <text x="82" y="338" textAnchor="middle"
              fill="white" fillOpacity="0.55" fontSize="11"
              fontFamily={FONT}>
              survives real life
            </text>

            {/* PURPOSE — lower-right region */}
            <text x="318" y="308" textAnchor="middle"
              fill={PURPOSE_COLOR} fontWeight="700" fontSize="13"
              fontFamily={FONT} letterSpacing="2">
              PURPOSE
            </text>
            <text x="318" y="323" textAnchor="middle"
              fill="white" fillOpacity="0.55" fontSize="11"
              fontFamily={FONT}>
              A reason that
            </text>
            <text x="318" y="338" textAnchor="middle"
              fill="white" fillOpacity="0.55" fontSize="11"
              fontFamily={FONT}>
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

          {/* Archetype Venn — same geometry, archetype labels instead of pillar descriptions */}
          <svg
            viewBox="0 0 400 470"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram mapping all 8 archetypes to their positions in the 3P Framework"
          >
            <VennCircles fillOpacity={0.12} />

            {/* ── Faint pillar axis labels (same positions as framework diagram) ── */}
            <text x="200" y="22" textAnchor="middle"
              fill={PROOF_COLOR} fillOpacity="0.5"
              fontSize="9" fontWeight="600"
              fontFamily={FONT} letterSpacing="1.5">
              PROOF
            </text>
            <text x="46" y="394" textAnchor="middle"
              fill={PRACTICE_COLOR} fillOpacity="0.5"
              fontSize="9" fontWeight="600"
              fontFamily={FONT} letterSpacing="1.5">
              PRACTICE
            </text>
            <text x="354" y="394" textAnchor="middle"
              fill={PURPOSE_COLOR} fillOpacity="0.5"
              fontSize="9" fontWeight="600"
              fontFamily={FONT} letterSpacing="1.5">
              PURPOSE
            </text>

            {/* ── Single-circle regions ── */}

            {/* THE READER — Proof only, top */}
            <text x="200" y="52" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12.5"
              fontFamily={FONT}>
              The Reader
            </text>
            <text x="200" y="66" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="10"
              fontFamily={FONT}>
              Has Proof only
            </text>

            {/* THE OPTIMIZER — Practice only, lower-left */}
            <text x="82" y="320" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily={FONT}>
              The Optimizer
            </text>
            <text x="82" y="333" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily={FONT}>
              Has Practice only
            </text>

            {/* THE SEEKER — Purpose only, lower-right */}
            <text x="318" y="320" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily={FONT}>
              The Seeker
            </text>
            <text x="318" y="333" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily={FONT}>
              Has Purpose only
            </text>

            {/* ── Two-circle intersections ── */}

            {/* THE BURNER — Proof + Practice, left */}
            <text x="155" y="192" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Burner
            </text>
            <text x="155" y="205" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Proof + Practice
            </text>

            {/* THE BELIEVER — Proof + Purpose, right */}
            <text x="245" y="192" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Believer
            </text>
            <text x="245" y="205" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Proof + Purpose
            </text>

            {/* THE DEVOTED — Practice + Purpose, bottom */}
            <text x="200" y="308" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Devoted
            </text>
            <text x="200" y="321" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Practice + Purpose
            </text>

            {/* ── Triple intersection ── */}

            {/* THE PRACTITIONER — all three, center */}
            <text x="200" y="218" textAnchor="middle"
              fill="white" fontWeight="700" fontSize="11.5"
              fontFamily={FONT}>
              The Practitioner
            </text>
            <text x="200" y="231" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Has all three
            </text>

            {/* ── Outside all circles ── */}

            <ellipse cx="200" cy="435" rx="87" ry="24"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              strokeDasharray="4 3" />

            {/* THE RESTARTER — outside all circles */}
            <text x="200" y="431" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12"
              fontFamily={FONT}>
              The Restarter
            </text>
            <text x="200" y="445" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily={FONT}>
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
