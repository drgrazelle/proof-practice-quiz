import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Seeker | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "absent",  colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "absent",  colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "present", colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `An evidence foundation that separates what actually works from what's been packaged to look like it does. And a practical system flexible enough to carry your reason through real life, not just the easy weeks.

You know why your health matters, and you know it in a specific way. It connects to someone or something you love. That clarity is rarer than you think. Most people who struggle with health consistency never find it. You have. And it's the piece that every sustainable health change eventually has to be built on.

What you're missing is the structure to carry that reason forward. Without an evidence base, it's hard to know which direction to build in. The health industry will pull you toward whatever is loudest, most convincing, and most profitable, which isn't always what the research actually supports. Without a practice system built for real life, the motivation can't translate into anything that holds past the first hard week.

You're starting from the right place. The foundation just needs something to stand on.

You feel genuinely motivated to be healthy but aren't sure what approach to actually trust. You have tried different things with real commitment, but without a clear evidence framework to evaluate what's working. You find that good intentions don't survive contact with a complicated, busy, real life.`;

export default function SeekerPage() {
  return (
    <ResultsPage
      archetypeName="The Seeker"
      oneLineTruth="You have the most important thing. Now you need something to build it on."
      strengthSentence="You know why your health matters in a way most people never figure out. That clarity is the rarest piece of the whole framework."
      whatYouNeed="An evidence foundation that separates what actually works from what's been packaged to look like it does. And a practical system flexible enough to carry your reason through real life, not just the easy weeks."
      blurContent={BLUR_CONTENT}
      accentBorder="border-purpose"
      accentText="text-purpose"
      pillars={PILLARS}
    />
  );
}
