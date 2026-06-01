import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Practitioner | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "present", colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "present", colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "present", colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `Depth, refinement, and company. Proof & Practice exists for exactly where you are. The science behind why what you're doing works, the tools to go further, and a weekly reminder of what your health is actually in service of.

All three pieces are present. You know what actually works and why, and you can tell the difference between evidence and marketing. You have a system that bends with real life instead of breaking. A hard week is an adjustment. You've stopped measuring consistency by perfection. Underneath it all, you have a reason that goes deeper than any single outcome. Something that's still true when the motivation is gone and the season is hard.

This is Flexible Consistency. All three pieces in place, working together, holding the whole thing up. You've built something real.

The Practitioner's work changes shape. You're no longer building the foundation. You're deepening, refining, and extending what's already there. If you've internalized these three pieces, you're probably already doing something most people around you can't quite explain. You've made the architecture do the work willpower used to do.

You maintain health habits through disruption, hard seasons, and imperfect weeks. You have stopped needing perfect conditions to keep going. You treat setbacks as data rather than verdicts, and you come back without making it a bigger deal than it needs to be.`;

export default function PractitionerPage() {
  return (
    <ResultsPage
      archetypeName="The Practitioner"
      oneLineTruth="You've built what most people spend years searching for."
      strengthSentence="You've put all three pieces in place. That's the whole framework, working together, holding the whole thing up."
      whatYouNeed="Depth, refinement, and company. Proof & Practice exists for exactly where you are. The science behind why what you're doing works, the tools to go further, and a weekly reminder of what your health is actually in service of."
      blurContent={BLUR_CONTENT}
      gateCardWidth="92%"
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "8e85d083-290c-4830-8afb-689687badf01",
      }}
      accentBorder="border-golden"
      accentText="text-golden"
      pillars={PILLARS}
    />
  );
}
