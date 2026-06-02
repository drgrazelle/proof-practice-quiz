import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Reader | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "present", colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "absent",  colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "absent",  colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `A Practice system flexible enough to survive your actual life. And a Purpose deep enough to carry you through the weeks when nothing feels worth it. That's what Proof & Practice is built to give you.

You've read the research. You know what the science says about sleep, nutrition, movement, and stress. You can probably explain why certain habits matter better than most healthcare providers can. And yet, the gap between what you know and what you actually do on a consistent basis is wide, and widening.

This is an architecture problem. Knowledge is the foundation of sustainable health, and it's only one of three pieces. Without a system built for your real life, the knowledge stays in your head. Without a reason that goes deeper than wanting to be healthier, the system has no anchor. You've been given one wall and asked to build a whole house with it.

The Monday restart cycle is a design problem. The knowledge was never the gap. What was missing is what to do with it when Wednesday arrived and everything fell apart.

You can articulate exactly what you should be doing, and you struggle to do it consistently. You research thoroughly before committing to anything, which sometimes means never committing at all. You treat understanding as the goal, when implementation is actually the goal.`;

export default function ReaderPage() {
  return (
    <ResultsPage
      archetypeName="The Reader"
      oneLineTruth="You know more than most. You're living less than you could."
      strengthSentence="You know what the science says, and you can tell the difference between evidence and marketing. That foundation is real and it's the hardest piece for most people to get right."
      whatYouNeed="A Practice system flexible enough to survive your actual life. And a Purpose deep enough to carry you through the weeks when nothing feels worth it. That's what Proof & Practice is built to give you."
      blurContent={BLUR_CONTENT}
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "0f0ff9c4-ed4b-46f6-99b7-3dbe167164ef",
      }}
      missingPieceBorderColor="#A3D9C9"
      accentBorder="border-proof"
      accentText="text-proof"
      pillars={PILLARS}
    />
  );
}
