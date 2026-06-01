import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Optimizer | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "absent",  colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "present", colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "absent",  colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `The evidence layer that helps you separate what actually works from what's well-marketed. And a reason that lives deeper than the routine itself, so when the routine breaks, you know why you're rebuilding it.

You show up. You have routines, maybe you've had them for years. You're the person who actually does the things most people only talk about. But somewhere underneath all that effort, something isn't quite adding up. The results aren't matching the work. The routine keeps needing to be rebuilt. And when life disrupts it, there's nothing underneath it to rebuild from.

The health industry is designed for you. It knows you'll try things. Cold plunges. Supplements. Tracking protocols. Biohacking the edges. It profits from your willingness to optimize, because optimization without a strong evidence foundation is just expensive experimentation. The fundamentals — six pillars, decades of research, settled science — aren't being sold as aggressively as whatever launched last month. But they're what actually works.

Even with the Proof in place, a routine running on inertia alone has no anchor when life shifts. That's the second missing piece. Your effort is real. It deserves both a better foundation and a deeper reason.

You have a health routine but sometimes wonder quietly whether any of it is actually working. You are drawn to new approaches, protocols, and tools, and you switch when something shinier appears. You keep the habit going until life disrupts it, then find it hard to come back.`;

export default function OptimizerPage() {
  return (
    <ResultsPage
      archetypeName="The Optimizer"
      oneLineTruth="You've built the routine. You just built it on the wrong foundation."
      strengthSentence="You show up. You've built habits that hold their shape better than most people manage. That consistency is the muscle most people never develop."
      whatYouNeed="The evidence layer that helps you separate what actually works from what's well-marketed. And a reason that lives deeper than the routine itself, so when the routine breaks, you know why you're rebuilding it."
      blurContent={BLUR_CONTENT}
      accentBorder="border-practice"
      accentText="text-practice"
      pillars={PILLARS}
    />
  );
}
