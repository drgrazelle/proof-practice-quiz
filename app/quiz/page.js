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
      { text: "Tried it. Someone I trusted was seeing results, and that felt like reason enough to give it a shot.", score: 0 },
      { text: "Researched it thoroughly before spending any money. I wanted to understand what I was putting in my body.", score: 1 },
      { text: "Looked for actual studies rather than testimonials. I didn't want to spend money on something unproven.", score: 2 },
      { text: "Didn't really engage with it. I was more focused on whether I was sleeping and eating well that week than on anything new to add.", score: 3 },
    ],
  },
  {
    id: 2,
    pillar: "proof",
    text: "Two articles came out recently. One said a food was protective. The other said it caused inflammation. Both cited studies. What did you do?",
    options: [
      { text: "Went with what seemed to work for my body. The research changes constantly anyway, so I stopped trying to keep up.", score: 0 },
      { text: "Followed the most recent or largest study for now. It felt like the most reasonable approach until more evidence came in.", score: 1 },
      { text: "Didn't spend much time on it. One food rarely changes the picture when the overall diet is already solid.", score: 2 },
      { text: "Looked for sources without a financial stake and tried to understand the overall body of evidence, not just one study.", score: 3 },
    ],
  },
  {
    id: 3,
    pillar: "proof",
    text: "Think about the last time someone shared their exact health protocol and said it changed everything. What was your honest first reaction?",
    options: [
      { text: "Genuinely interested. If it was working for them, there was probably something real behind it worth exploring.", score: 0 },
      { text: "Curious but cautious. I wanted to understand the mechanism before trying anything myself.", score: 1 },
      { text: "Skeptical. I wanted to know whether any of this was actually backed by research before getting excited.", score: 2 },
      { text: "Less interested in the protocol itself, more curious about what else had changed in their life. These things rarely work in isolation.", score: 3 },
    ],
  },
  {
    id: 4,
    pillar: "proof",
    text: "Think about the last time you started over after a long break from your health habits. Where did you actually begin?",
    options: [
      { text: "Found a structured program to follow. I didn't want to figure it out myself when I was already low on motivation.", score: 0 },
      { text: "Spent time researching the most effective current approaches before committing to anything new.", score: 1 },
      { text: "Went back to basics. Sleep, food quality, movement. I knew those were the foundation and started there.", score: 2 },
      { text: "Picked one small thing and started with that, even though it felt almost too simple to matter.", score: 3 },
    ],
  },

  // ── PRACTICE ──
  {
    id: 5,
    pillar: "practice",
    text: "Think about the last week that completely fell apart. Work, stress, no time. You missed everything. What actually happened next?",
    options: [
      { text: "Waited until Monday when things calmed down. Starting mid-chaos never seemed to work for me anyway.", score: 0 },
      { text: "Tried to figure out what went wrong so I could build a better plan before attempting it again.", score: 1 },
      { text: "Salvaged something small before the week ended. Even one thing felt better than a complete wipeout.", score: 2 },
      { text: "Kept going at whatever level I could actually reach in that moment, even if it barely resembled the original plan.", score: 3 },
    ],
  },
  {
    id: 6,
    pillar: "practice",
    text: "The last time you planned 45 minutes to exercise and only had 15 — what did you actually do?",
    options: [
      { text: "Skipped it. A 15-minute workout felt pointless when the whole session was already compromised.", score: 0 },
      { text: "Felt genuinely torn about it and spent most of those 15 minutes deciding, then didn't end up doing much.", score: 1 },
      { text: "Did the 15 minutes. It wasn't what I planned but it still counted for something.", score: 2 },
      { text: "Figured out the one part that mattered most given the time I had, did that, and moved on with my day.", score: 3 },
    ],
  },
  {
    id: 7,
    pillar: "practice",
    text: "Think about the last significant life shift you went through. New job, new baby, a move. What actually happened to your health habits?",
    options: [
      { text: "Put them on hold until things settled enough to do them properly. I needed the right conditions first.", score: 0 },
      { text: "Took time to design a new routine that actually fit the new situation before committing to anything.", score: 1 },
      { text: "Kept the smallest version of each habit I could manage. A short walk still counted. Something was better than nothing.", score: 2 },
      { text: "Kept going in whatever form still fit the new reality. It wasn't pretty but the thread stayed unbroken.", score: 3 },
    ],
  },
  {
    id: 8,
    pillar: "practice",
    text: "Two weeks passed recently with no real crisis. Life just got busy and your habits quietly disappeared. How did you actually come back?",
    options: [
      { text: "Declared a fresh start with a new plan. I needed a clean slate to feel like I was actually recommitting.", score: 0 },
      { text: "Spent time understanding what caused the drift before trying again. I didn't want to repeat the same pattern.", score: 1 },
      { text: "Picked back up where I left off without making it a bigger deal than it needed to be.", score: 2 },
      { text: "Started with the one easiest habit just to get back in motion, then let the rest follow from there.", score: 3 },
    ],
  },

  // ── PURPOSE ──
  {
    id: 9,
    pillar: "purpose",
    text: "Think about the last time you were three weeks into a health change and the initial motivation was completely gone. What actually kept you going — or didn't?",
    options: [
      { text: "Honestly not much. When the feeling left, the habits tended to go with it, and I waited for it to come back.", score: 0 },
      { text: "Reminded myself of the goal and tried to push through. Some days it worked and some days it really didn't.", score: 1 },
      { text: "Went back to the reason I started. There was something underneath the goal that mattered more than how I felt that day.", score: 2 },
      { text: "Kept going without relying on how I felt about it. What I was doing it for hadn't changed just because the energy did.", score: 3 },
    ],
  },
  {
    id: 10,
    pillar: "purpose",
    text: "The last time someone genuinely asked why you prioritize your health, what did you actually say?",
    options: [
      { text: "Something vague. I didn't have a clear answer ready and realized I hadn't really thought it through.", score: 0 },
      { text: "That I wanted to feel good, have more energy, and stay at a healthy weight. The usual reasons.", score: 1 },
      { text: "That I wanted to be healthy enough to show up fully for the people and things that mattered most to me.", score: 2 },
      { text: "That my health and the people I love aren't separate things. Taking care of myself is how I take care of them.", score: 3 },
    ],
  },
  {
    id: 11,
    pillar: "purpose",
    text: "Think about a time when the external pressure driving your health habits disappeared. The health scare resolved, the event passed, the urgency lifted. What actually happened to your habits?",
    options: [
      { text: "They quietly disappeared with the pressure. I hadn't realized how much that external thing was holding everything together.", score: 0 },
      { text: "They got harder to maintain. I knew I should keep going but the drive just wasn't there without the urgency.", score: 1 },
      { text: "They slowed down but didn't stop. The reason I was doing it went deeper than that one thing.", score: 2 },
      { text: "They stayed mostly intact. Whatever was really driving me had nothing to do with the thing that first got me started.", score: 3 },
    ],
  },
  {
    id: 12,
    pillar: "purpose",
    text: "Think about the last time you were going through the motions with your health habits — doing them, but the meaning was completely gone. What did you actually do?",
    options: [
      { text: "Waited for the feeling to come back. Sometimes it did, sometimes it didn't, and things drifted in the meantime.", score: 0 },
      { text: "Tried switching something up. Different workout, new approach, hoping a change would spark something again.", score: 1 },
      { text: "Sat with it and tried to reconnect with what had originally made it matter. It took a while but I went looking for it.", score: 2 },
      { text: "Made my usual meal. Did my usual walk. Didn't try to feel anything about it. Sometimes that's just what it looks like.", score: 3 },
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
