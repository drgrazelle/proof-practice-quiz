import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Devoted | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "absent",  colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "present", colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "present", colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `The evidence foundation. The right framework for evaluating what you already encounter. The ability to recognize what decades of research actually point to, so your consistency and your purpose have the best possible target.

Your commitment is real. You show up consistently, you have genuine reasons for prioritizing your health, and you've built something that means something to you. That combination — real practice, real purpose — is rarer than you think. Most people are missing at least one of those. You have both.

What's missing is the evidence layer that tells you whether what you're doing is actually aimed in the right direction. Without it, it's hard to evaluate the flood of health advice, products, and protocols competing for your attention. The things that are loudest, most compelling, and most heavily marketed aren't always the things the research actually supports. And the things the research does support — the fundamentals, the settled science, the unsexy basics — aren't being sold as aggressively. Your effort and your heart are going somewhere. The question is whether that somewhere is where the evidence actually points.

This is an upgrade. Everything you've worked for gets more effective when it's aimed with precision.

You are consistent and motivated, and sometimes frustrated that the results don't fully match the effort. You find it hard to evaluate which health information to trust and which to dismiss. You have been drawn to approaches that felt right, sounded convincing, or came from someone you respected, without always having a way to verify them.`;

export default function DevotedPage() {
  return (
    <ResultsPage
      archetypeName="The Devoted"
      oneLineTruth="You show up with your whole heart. You deserve a better foundation."
      strengthSentence="You show up consistently and you do it for reasons that matter. That combination is rare. Most people are missing one or both."
      whatYouNeed="The evidence foundation. The right framework for evaluating what you already encounter. The ability to recognize what decades of research actually point to, so your consistency and your purpose have the best possible target."
      blurContent={BLUR_CONTENT}
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "d854fc1d-f157-4716-96e1-e88f162a24b7",
      }}
      missingPieceBorderColor="#F9D08B"
      accentBorder="border-practice"
      accentText="text-practice"
      pillars={PILLARS}
    />
  );
}
