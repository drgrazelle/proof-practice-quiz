"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ── Raw questions ─────────────────────────────────────────────────────────────

const RAW_QUESTIONS = [
  // ── PROOF ──
  {
    id: 1,
    pillar: "proof",
    text: "A supplement is everywhere right now and a friend swears by it. What do you do?",
    options: [
      { text: "Try it. If someone I trust is seeing results, it's worth a shot.", points: 0 },
      { text: "Research it thoroughly before spending any money.", points: 1 },
      { text: "Look for actual studies, not testimonials, before deciding.", points: 2 },
      { text: "Ask myself whether my fundamentals are solid first. A supplement probably isn't the gap.", points: 3 },
    ],
  },
  {
    id: 2,
    pillar: "proof",
    text: "Two articles, same week. One says a food is protective. The other says it causes inflammation. Both cite studies. How do you decide?",
    options: [
      { text: "Go with what seems to work for my body. Research keeps changing anyway.", points: 0 },
      { text: "Follow the most recent or largest study for now.", points: 1 },
      { text: "Find sources without a financial stake and look at the overall evidence, not just one study.", points: 2 },
      { text: "Focus on overall diet quality. One food rarely makes or breaks anything.", points: 3 },
    ],
  },
  {
    id: 3,
    pillar: "proof",
    text: "A visibly healthy friend shares her exact health protocol and says it changed everything. Your honest reaction?",
    options: [
      { text: "Genuinely interested. If it's working for her, there's probably something to it.", points: 0 },
      { text: "Curious but I'd want to understand why it works before trying it.", points: 1 },
      { text: "Cautious. I'd want to know if it's actually supported by research.", points: 2 },
      { text: "I'd wonder whether it's the protocol, or her sleep, food, and movement finally being solid underneath it.", points: 3 },
    ],
  },
  {
    id: 4,
    pillar: "proof",
    text: "You're starting over after a long break. Where do you begin?",
    options: [
      { text: "Find a comprehensive program so I don't have to figure it out myself.", points: 0 },
      { text: "Research the most effective current approaches before committing.", points: 1 },
      { text: "Go back to basics. Sleep, food quality, movement. I know what the foundation is.", points: 2 },
      { text: "Pick one sustainable thing and start there, even if it feels too simple.", points: 3 },
    ],
  },

  // ── PRACTICE ──
  {
    id: 5,
    pillar: "practice",
    text: "The week fell apart. Work, stress, no time. You missed everything. What happens next?",
    options: [
      { text: "Start fresh Monday when things settle down.", points: 0 },
      { text: "Figure out what went wrong so I can plan better next time.", points: 1 },
      { text: "Salvage something small before the week is over.", points: 2 },
      { text: "Keep going at whatever level I can reach right now.", points: 3 },
    ],
  },
  {
    id: 6,
    pillar: "practice",
    text: "You planned 45 minutes to exercise. You have 15. What do you do?",
    options: [
      { text: "Skip it. 15 minutes isn't worth disrupting the plan.", points: 0 },
      { text: "Feel conflicted and end up not doing much while deciding.", points: 1 },
      { text: "Do 15 minutes. It still counts.", points: 2 },
      { text: "Figure out which part matters most right now and do that.", points: 3 },
    ],
  },
  {
    id: 7,
    pillar: "practice",
    text: "Your life shifts significantly. New job, new baby, a move. The routine that was working no longer fits. What happens to your health habits?",
    options: [
      { text: "Put them on hold until things settle enough to do them properly.", points: 0 },
      { text: "Design a new routine that fits before I start again.", points: 1 },
      { text: "Find the smallest version of each habit that still counts and keep going.", points: 2 },
      { text: "Adjust the approach to fit the new reality. The goal hasn't changed.", points: 3 },
    ],
  },
  {
    id: 8,
    pillar: "practice",
    text: "Two weeks have passed. No crisis. Life just got busy and your habits quietly disappeared. How do you come back?",
    options: [
      { text: "Fresh start. New plan, new week, full commitment.", points: 0 },
      { text: "Understand what caused the drift before trying again.", points: 1 },
      { text: "Pick back up where I left off without making it a bigger deal than it is.", points: 2 },
      { text: "Start with the easiest habit first, just to get back in motion.", points: 3 },
    ],
  },

  // ── PURPOSE ──
  {
    id: 9,
    pillar: "purpose",
    text: "Three weeks in. The initial energy is completely gone. It's just hard now. What keeps you going?",
    options: [
      { text: "Honestly, not much. When motivation fades, things usually fade with it.", points: 0 },
      { text: "I remind myself of my goal and try to push through.", points: 1 },
      { text: "I reconnect with why I started. Something that matters more than the discomfort.", points: 2 },
      { text: "I don't rely on motivation. I know what this is in service of.", points: 3 },
    ],
  },
  {
    id: 10,
    pillar: "purpose",
    text: "Someone genuinely asks why you prioritize your health. What's your honest answer?",
    options: [
      { text: "I'm not sure I could give a clear answer right now.", points: 0 },
      { text: "I want to feel good, have more energy, and stay at a healthy weight.", points: 1 },
      { text: "I want to be healthy enough to show up fully for the people and things that matter most.", points: 2 },
      { text: "My health is in service of the people I love and the life I'm building with them. They're not separate from each other.", points: 3 },
    ],
  },
  {
    id: 11,
    pillar: "purpose",
    text: "The external thing driving your health habits is gone. The health scare resolved, the event passed, the urgency lifted. What happens to your habits?",
    options: [
      { text: "They quietly disappear. I didn't realize how much that pressure was holding things together.", points: 0 },
      { text: "They get harder. I know I should keep going but the drive isn't there.", points: 1 },
      { text: "They slow down but don't stop. My reason goes deeper than that one thing.", points: 2 },
      { text: "They stay mostly intact. What's driving me runs deeper than the one thing that started it.", points: 3 },
    ],
  },
  {
    id: 12,
    pillar: "purpose",
    text: "You're going through the motions. Doing the habits, but the meaning behind them is completely gone. What do you do?",
    options: [
      { text: "Wait for the feeling to come back. Or don't, and things quietly drift.", points: 0 },
      { text: "Try something new. Different workout, new approach, hoping it sparks something.", points: 1 },
      { text: "Sit with it and try to reconnect with what originally made this matter.", points: 2 },
      { text: "Remind myself the feeling isn't the point. Showing up is the point.", points: 3 },
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
  const proofPresent    = scores.proof    >= 6;
  const practicePresent = scores.practice >= 6;
  const purposePresent  = scores.purpose  >= 6;

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
      const pts = q.options[optionIndex].points;
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
