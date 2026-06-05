"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ── Raw questions ─────────────────────────────────────────────────────────────

const RAW_QUESTIONS = [
  // ── PROOF ──
  {
    id: 1,
    pillar: "proof",
    text: "A supplement was everywhere recently and a friend swore by it. What did you actually do?",
    options: [
      { text: "Tried it. Someone I trusted was seeing results.", score: 0 },
      { text: "Researched it thoroughly before spending any money.", score: 1 },
      { text: "Looked for actual studies rather than testimonials.", score: 2 },
      { text: "Didn't engage. My basic habits weren't solid enough to be adding things.", score: 3 },
    ],
  },
  {
    id: 2,
    pillar: "proof",
    text: "Two articles came out recently. One said a food was protective. The other said it caused inflammation. Both cited studies. What did you do?",
    options: [
      { text: "Went with what seemed to work for my body. Research changes constantly.", score: 0 },
      { text: "Followed the most recent or largest study for now.", score: 1 },
      { text: "Didn't spend much time on it. One food rarely changes the picture.", score: 2 },
      { text: "Looked for credible sources and read the overall evidence.", score: 3 },
    ],
  },
  {
    id: 3,
    pillar: "proof",
    text: "Think about the last time someone shared their exact morning routine and said it changed everything. What was your honest first reaction?",
    options: [
      { text: "Genuinely interested. If it worked for them, there was probably something to it.", score: 0 },
      { text: "Curious, but I wanted to understand why it worked before trying it.", score: 1 },
      { text: "Skeptical. I wanted to know if any of this was actually researched.", score: 2 },
      { text: "More curious about what else had changed in their life than the routine itself.", score: 3 },
    ],
  },
  {
    id: 4,
    pillar: "proof",
    text: "Think about the last time you started over a health habit after a long break. Where did you actually begin?",
    options: [
      { text: "Found a structured program. I didn't want to figure it out myself.", score: 0 },
      { text: "Researched the most effective approaches before committing to anything.", score: 1 },
      { text: "Went back to basics. Sleep, food, movement. I knew the foundation.", score: 2 },
      { text: "Picked one small thing and started there, even if it felt too simple.", score: 3 },
    ],
  },

  // ── PRACTICE ──
  {
    id: 5,
    pillar: "practice",
    text: "Think about the last time your health habits completely fell apart. What did you do next?",
    options: [
      { text: "Waited until Monday when things calmed down.", score: 0 },
      { text: "Tried to figure out what went wrong before attempting it again.", score: 1 },
      { text: "Salvaged something small before the week ended.", score: 2 },
      { text: "Kept going at whatever level I could actually reach that week.", score: 3 },
    ],
  },
  {
    id: 6,
    pillar: "practice",
    text: "The last time you planned 45 minutes to exercise and only had 15 — what did you actually do?",
    options: [
      { text: "Skipped it. 15 minutes felt pointless when the session was already compromised.", score: 0 },
      { text: "Felt torn and spent most of the time deciding, then didn't do much.", score: 1 },
      { text: "Did the 15 minutes. It still counted for something.", score: 2 },
      { text: "Did the one part that mattered most and moved on.", score: 3 },
    ],
  },
  {
    id: 7,
    pillar: "practice",
    text: "Think about the last significant life shift you went through. New job, moved to a new city, etc. What happened to your health habits?",
    options: [
      { text: "Put them on hold. I needed the right conditions before starting again.", score: 0 },
      { text: "Designed a new routine that fit before committing to anything.", score: 1 },
      { text: "Kept the smallest version I could manage. A short walk still counted.", score: 2 },
      { text: "Kept going in whatever form still fit. The thread stayed unbroken.", score: 3 },
    ],
  },
  {
    id: 8,
    pillar: "practice",
    text: "Life got busy recently and your habits quietly disappeared for two weeks. How did you actually come back?",
    options: [
      { text: "Declared a fresh start with a new plan. I needed a clean slate.", score: 0 },
      { text: "Figured out what caused the drift before trying again.", score: 1 },
      { text: "Picked back up where I left off without making it a big deal.", score: 2 },
      { text: "Started with the easiest habit first and let the rest follow.", score: 3 },
    ],
  },

  // ── PURPOSE ──
  {
    id: 9,
    pillar: "purpose",
    text: "Think about the last time you were three weeks into a health change and the motivation was gone. What kept you going — or didn't?",
    options: [
      { text: "Honestly, not much. When the feeling left, the habits went with it.", score: 0 },
      { text: "Reminded myself of the goal and tried to push through.", score: 1 },
      { text: "Went back to the reason I started. Something mattered more than how I felt.", score: 2 },
      { text: "Kept going regardless. What I was doing it for hadn't changed.", score: 3 },
    ],
  },
  {
    id: 10,
    pillar: "purpose",
    text: "The last time someone asked why you prioritize your health, what did you actually say?",
    options: [
      { text: "Something about wanting to feel better, lose weight and have more energy.", score: 0 },
      { text: "That I wanted more energy and to stay on top of my health before something went wrong.", score: 1 },
      { text: "That I wanted to show up fully for the people and things that matter.", score: 2 },
      { text: "That taking care of myself is how I take care of the people I love.", score: 3 },
    ],
  },
  {
    id: 11,
    pillar: "purpose",
    text: "Think about a time you had a strong reason to get healthy. A lab result. A big event coming up. What happened once that motivation faded?",
    options: [
      { text: "The habits disappeared with it. That reason was holding everything together.", score: 0 },
      { text: "Things got harder. The drive wasn't there without the urgency.", score: 1 },
      { text: "Things slowed but didn't stop. My reason went deeper than that one thing.", score: 2 },
      { text: "Things stayed mostly intact. What was driving me had nothing to do with what started it.", score: 3 },
    ],
  },
  {
    id: 12,
    pillar: "purpose",
    text: "Think about the last time you were going through the motions — doing the habits, but the meaning was gone. What did you actually do?",
    options: [
      { text: "Waited for the feeling to come back. Sometimes things drifted in the meantime.", score: 0 },
      { text: "Tried something new, hoping a change would spark something.", score: 1 },
      { text: "Sat with it and tried to reconnect with what originally made it matter.", score: 2 },
      { text: "Made my usual meal. Did my usual workout. Didn't try to feel anything about it.", score: 3 },
    ],
  },
];

// ── Slug map ──────────────────────────────────────────────────────────────────

const ARCHETYPE_SLUGS = {
  restarter:    "/r-4291",
  reader:       "/rd-7134",
  optimizer:    "/op-5820",
  seeker:       "/sk-3967",
  burner:       "/br-6412",
  believer:     "/bl-9053",
  devoted:      "/dv-2748",
  practitioner: "/pr-8361",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getArchetype(scores) {
  const proofPresent    = scores.proof    >= 9;
  const practicePresent = scores.practice >= 9;
  const purposePresent  = scores.purpose  >= 9;

  if (!proofPresent && !practicePresent && !purposePresent) return "restarter";
  if ( proofPresent && !practicePresent && !purposePresent) return "reader";
  if (!proofPresent &&  practicePresent && !purposePresent) return "optimizer";
  if (!proofPresent && !practicePresent &&  purposePresent) return "seeker";
  if ( proofPresent &&  practicePresent && !purposePresent) return "burner";
  if ( proofPresent && !practicePresent &&  purposePresent) return "believer";
  if (!proofPresent &&  practicePresent &&  purposePresent) return "devoted";
  return "practitioner";
}

const PILLAR_META = {
  proof:    { label: "Proof",    color: "bg-proof",    text: "text-proof" },
  practice: { label: "Practice", color: "bg-practice", text: "text-practice" },
  purpose:  { label: "Purpose",  color: "bg-purpose",  text: "text-purpose" },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function QuizPage() {
  const router = useRouter();

  // Start unshuffled (matches SSR). Shuffle client-side after mount.
  const [questions, setQuestions] = useState(RAW_QUESTIONS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setQuestions(
      RAW_QUESTIONS.map((q) => ({ ...q, options: shuffleArray(q.options) }))
    );
    setReady(true);
  }, []);

  const [current, setCurrent]   = useState(0);
  const [scores, setScores]     = useState({ proof: 0, practice: 0, purpose: 0 });
  const [selected, setSelected] = useState(null);

  // History stack: each entry is { optionIndex, pointsAdded, pillar }
  const [history, setHistory] = useState([]);
  // Stores the optionIndex the user previously chose on a question they backed into.
  // Set in handleBack, cleared on every forward selection.
  const [prevAnswerIndex, setPrevAnswerIndex] = useState(null);

  // Use a ref so the timeout callback always sees fresh state
  const stateRef = useRef({ current, scores, questions, history });
  useEffect(() => {
    stateRef.current = { current, scores, questions, history };
  });

  const total      = questions.length;
  const question   = questions[current];
  const progress   = (current / total) * 100;
  const pillarMeta = PILLAR_META[question.pillar];

  function handleSelect(optionIndex) {
    if (selected !== null) return;
    setSelected(optionIndex);

    setTimeout(() => {
      const { current: cur, scores: sc, questions: qs, history: hist } = stateRef.current;
      const q   = qs[cur];
      const pts = q.options[optionIndex].score;
      const newScores = { ...sc, [q.pillar]: sc[q.pillar] + pts };

      if (cur + 1 >= total) {
        router.push(ARCHETYPE_SLUGS[getArchetype(newScores)]);
      } else {
        setHistory([...hist, { optionIndex, pointsAdded: pts, pillar: q.pillar }]);
        setPrevAnswerIndex(null);
        setScores(newScores);
        setCurrent(cur + 1);
        setSelected(null);
      }
    }, 420);
  }

  function handleBack() {
    if (current === 0 || history.length === 0) return;
    const prev = history[history.length - 1];
    // Undo the score and store which option they picked so we can highlight it
    setScores((sc) => ({
      ...sc,
      [prev.pillar]: sc[prev.pillar] - prev.pointsAdded,
    }));
    setHistory((h) => h.slice(0, -1));
    setPrevAnswerIndex(prev.optionIndex);
    setSelected(null);
    setCurrent((c) => c - 1);
  }

  if (!ready) {
    return (
      <main className="min-h-screen bg-navy flex items-center justify-center">
        <span className="text-slate/40 text-sm">Loading...</span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy flex flex-col">

      {/* ── Top bar ── */}
      <header className="px-6 py-5 flex items-center justify-between max-w-2xl mx-auto w-full">
        <span className="text-slate text-sm font-semibold tracking-widest uppercase">
          Health Habit Consistency Quiz
        </span>
        <span className="text-slate/60 text-xs">
          Question {current + 1} of {total}
        </span>
      </header>

      {/* ── Progress bar ── */}
      <div className="w-full bg-steel/20 h-1">
        <div
          className="h-1 bg-golden transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Question card ── */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">

          {/* Back button — questions 2–12 only */}
          {current > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-slate/50 text-xs hover:text-slate/80 transition-colors mb-6 -ml-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
          )}

          {/* Pillar tag */}
          <div className="flex items-center gap-2 mb-5">
            <span className={`w-2.5 h-2.5 rounded-full ${pillarMeta.color}`} />
            <span className={`text-xs font-bold tracking-widest uppercase ${pillarMeta.text}`}>
              {pillarMeta.label}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-slate font-bold text-xl sm:text-2xl leading-snug mb-8">
            {question.text}
          </h2>

          {/* Answer options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => {
              // Highlight the answer they previously chose when returning to a question
              const wasPreviousAnswer = prevAnswerIndex === i;
              const isSelected = selected === i;

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selected !== null}
                  className={`
                    w-full text-left px-5 py-4 rounded-xl border text-sm sm:text-base leading-relaxed
                    transition-all duration-200
                    ${isSelected
                      ? "bg-golden text-navy border-golden font-semibold"
                      : wasPreviousAnswer
                        ? "bg-golden text-navy border-golden font-semibold cursor-pointer"
                        : selected !== null
                          ? "bg-navy/40 border-steel/20 text-slate/40 cursor-default"
                          : "bg-navy/60 border-steel/30 text-slate hover:border-golden/60 hover:bg-navy/80 cursor-pointer"
                    }
                  `}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-steel/20 px-6 py-4">
        <p className="text-slate/40 text-xs text-center">
          For self-reflection only. Not a clinical assessment.
        </p>
      </footer>

    </main>
  );
}
