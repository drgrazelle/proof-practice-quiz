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
// Equilateral triangle, side = 120px, R = 120px → 120px overlap per pair
// (was side=140 → only 100px overlap; triple + bottom intersections were cramped)
// CY_PROOF = 148 → circle top = y 28 (room for faint axis label above)
// All archetype label positions verified in correct Venn regions.
const R = 120;
const CX_PROOF = 200, CY_PROOF = 148;
const CX_PRAC  = 140, CY_PRAC  = 252;   // side=120 → height=104 → cy=148+104=252
const CX_PUR   = 260, CY_PUR   = 252;

const PROOF_COLOR    = "#D4A847";
const PRACTICE_COLOR = "#87CEAB";
const PURPOSE_COLOR  = "#C4A8D4";
const FONT           = "system-ui, -apple-system, sans-serif";

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

          {/* Framework Venn */}
          <svg
            viewBox="0 0 400 410"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram of the three pillars: Proof, Practice, and Purpose"
          >
            <VennCircles fillOpacity={0.18} />

            {/* PROOF — inside top of Proof circle (top edge = y 28) */}
            <text x="200" y="68" textAnchor="middle"
              fill={PROOF_COLOR} fontWeight="700" fontSize="14"
              fontFamily={FONT} letterSpacing="2">
              PROOF
            </text>
            <text x="200" y="85" textAnchor="middle"
              fill="white" fillOpacity="0.6" fontSize="11"
              fontFamily={FONT}>
              Knowing what actually works
            </text>

            {/* PRACTICE — lower-left region inside Practice circle
                Verified: inside Practice(140,252,r120) ✓  outside Proof ✓  outside Purpose ✓ */}
            <text x="82" y="284" textAnchor="middle"
              fill={PRACTICE_COLOR} fontWeight="700" fontSize="13"
              fontFamily={FONT} letterSpacing="2">
              PRACTICE
            </text>
            <text x="82" y="299" textAnchor="middle"
              fill="white" fillOpacity="0.6" fontSize="11"
              fontFamily={FONT}>
              A system that
            </text>
            <text x="82" y="314" textAnchor="middle"
              fill="white" fillOpacity="0.6" fontSize="11"
              fontFamily={FONT}>
              survives real life
            </text>

            {/* PURPOSE — lower-right region inside Purpose circle */}
            <text x="318" y="284" textAnchor="middle"
              fill={PURPOSE_COLOR} fontWeight="700" fontSize="13"
              fontFamily={FONT} letterSpacing="2">
              PURPOSE
            </text>
            <text x="318" y="299" textAnchor="middle"
              fill="white" fillOpacity="0.6" fontSize="11"
              fontFamily={FONT}>
              A reason that
            </text>
            <text x="318" y="314" textAnchor="middle"
              fill="white" fillOpacity="0.6" fontSize="11"
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

          {/* Archetype Venn */}
          <svg
            viewBox="0 0 400 465"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="img"
            aria-label="Venn diagram mapping all 8 archetypes to their positions in the 3P Framework"
          >
            <VennCircles fillOpacity={0.12} />

            {/* ── Faint pillar axis labels — same anchor positions as framework diagram ── */}
            <text x="200" y="16" textAnchor="middle"
              fill={PROOF_COLOR} fillOpacity="0.45"
              fontSize="9" fontWeight="600" fontFamily={FONT} letterSpacing="1.5">
              PROOF
            </text>
            <text x="44" y="385" textAnchor="middle"
              fill={PRACTICE_COLOR} fillOpacity="0.45"
              fontSize="9" fontWeight="600" fontFamily={FONT} letterSpacing="1.5">
              PRACTICE
            </text>
            <text x="356" y="385" textAnchor="middle"
              fill={PURPOSE_COLOR} fillOpacity="0.45"
              fontSize="9" fontWeight="600" fontFamily={FONT} letterSpacing="1.5">
              PURPOSE
            </text>

            {/* ── Single-circle regions ── */}

            {/* THE READER — Proof only
                Verified: inside Proof(200,148,r120) ✓  outside Practice ✓  outside Purpose ✓ */}
            <text x="200" y="68" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12.5"
              fontFamily={FONT}>
              The Reader
            </text>
            <text x="200" y="83" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="10"
              fontFamily={FONT}>
              Has Proof only
            </text>

            {/* THE OPTIMIZER — Practice only
                Verified: inside Practice(140,252,r120) ✓  outside Proof ✓  outside Purpose ✓ */}
            <text x="82" y="294" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily={FONT}>
              The Optimizer
            </text>
            <text x="82" y="308" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily={FONT}>
              Has Practice only
            </text>

            {/* THE SEEKER — Purpose only
                Verified: inside Purpose(260,252,r120) ✓  outside Proof ✓  outside Practice ✓ */}
            <text x="318" y="294" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11.5"
              fontFamily={FONT}>
              The Seeker
            </text>
            <text x="318" y="308" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9.5"
              fontFamily={FONT}>
              Has Purpose only
            </text>

            {/* ── Two-circle intersections ── */}

            {/* THE BURNER — Proof + Practice, upper-left
                Verified: Proof dist≈62 ✓  Practice dist≈82 ✓  Purpose dist≈144 > 120 ✓ */}
            <text x="128" y="168" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Burner
            </text>
            <text x="128" y="181" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Proof + Practice
            </text>

            {/* THE BELIEVER — Proof + Purpose, upper-right
                Verified: Proof dist≈62 ✓  Purpose dist≈82 ✓  Practice dist≈144 > 120 ✓ */}
            <text x="272" y="168" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Believer
            </text>
            <text x="272" y="181" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Proof + Purpose
            </text>

            {/* THE DEVOTED — Practice + Purpose, bottom
                Verified: Practice dist≈76 ✓  Purpose dist≈76 ✓  Proof dist=150 > 120 ✓ */}
            <text x="200" y="298" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="11"
              fontFamily={FONT}>
              The Devoted
            </text>
            <text x="200" y="311" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Practice + Purpose
            </text>

            {/* ── Triple intersection center ── */}

            {/* THE PRACTITIONER — all three
                Centroid of triangle ≈ (200, 217)
                Verified: Proof dist=69 ✓  Practice dist≈71 ✓  Purpose dist≈71 ✓ */}
            <text x="200" y="214" textAnchor="middle"
              fill="white" fontWeight="700" fontSize="11.5"
              fontFamily={FONT}>
              The Practitioner
            </text>
            <text x="200" y="227" textAnchor="middle"
              fill="white" fillOpacity="0.5" fontSize="9"
              fontFamily={FONT}>
              Has all three
            </text>

            {/* ── Outside all circles — The Restarter ── */}
            <ellipse cx="200" cy="432" rx="87" ry="24"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              strokeDasharray="4 3" />
            <text x="200" y="428" textAnchor="middle"
              fill="white" fontWeight="600" fontSize="12"
              fontFamily={FONT}>
              The Restarter
            </text>
            <text x="200" y="442" textAnchor="middle"
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
