import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Believer | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "present", colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "absent",  colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "present", colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `The Dial Method. A framework for operating across the full spectrum of effort, so that a hard week is an adjustment instead of a failure. Your knowledge and your purpose are already there. They just need a system that can survive contact with real life.

You know what works. You have real reasons for doing it. You've read enough to separate the evidence-based approaches from the noise, and your why goes deeper than wanting to look better or feel more energetic. On paper, you have everything you need. And yet, the Monday restart cycle is real and familiar, and you can't quite figure out why.

Your system is too rigid for your real life. You're building health habits the way you approach work projects. Comprehensive plan, high standards, full execution or nothing. That approach works for finite, controllable tasks. Health is neither. The plan that works perfectly on a good week breaks the first time a bad week arrives. Because your standards are high, anything less than the full plan feels like failure. So you stop. And restart. And stop again. The pattern lives in caring too much to do it halfway.

The practice of Flexible Consistency — adjusting instead of quitting, doing less instead of stopping, treating imperfect execution as the actual goal — is the specific skill you're missing. It's a learnable system. You're closer to having it than almost anyone else.

You restart health habits regularly, each time with full commitment and the same eventual outcome. You hold high standards that quietly function as permission to quit when those standards aren't met. You know the all-or-nothing trap intellectually and fall into it anyway.`;

export default function BelieverPage() {
  return (
    <ResultsPage
      archetypeName="The Believer"
      oneLineTruth="You know it and you feel it. You just can't make it survive real life."
      strengthSentence="You have the rarest combination most people are still searching for: real evidence to stand on and a real reason to care. The two hardest pieces are already yours."
      whatYouNeed="The Dial Method. A framework for operating across the full spectrum of effort, so that a hard week is an adjustment instead of a failure. Your knowledge and your purpose are already there. They just need a system that can survive contact with real life."
      blurContent={BLUR_CONTENT}
      accentBorder="border-purpose"
      accentText="text-purpose"
      pillars={PILLARS}
    />
  );
}
