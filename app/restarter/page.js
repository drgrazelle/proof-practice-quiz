import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Restarter | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "absent",  colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "absent",  colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "absent",  colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `All three pieces. The fundamentals that actually work. A system flexible enough to survive your real life. And a reason deep enough to carry you through the weeks when nothing feels worth it. That's what Proof & Practice is built to give you, one week at a time.

You've been trying. You wouldn't have taken this quiz otherwise. Monday after Monday, you've shown up with real intent and watched it dissolve by Wednesday. The pattern is familiar enough that you've probably stopped expecting anything different.

What's actually happening is structural. Every sustainable health practice rests on three pieces. Evidence — knowing what actually works. A practice system — something that bends with real life instead of breaking. And a reason that goes deeper than the latest scare or goal. Right now, none of those pieces are fully in place yet. That's why the trying keeps disappearing. The trying is real. The architecture underneath it hasn't been built.

This is actually good news. The Monday restart cycle is information. It's telling you what hasn't been built yet. You're at the starting line, which is exactly where every Practitioner once stood. The difference between you and them is one thing: they built the three pieces. Most of them did it slowly, imperfectly, over years. You can too.

You have tried health changes many times and watched them dissolve before they could hold. You have the desire to feel better but aren't sure where to actually start. You have been told the basics and dismissed them because they felt too simple to matter.`;

export default function RestarterPage() {
  return (
    <ResultsPage
      archetypeName="The Restarter"
      oneLineTruth="You've been trying. The system underneath the trying hasn't been built yet."
      strengthSentence="You're still trying. After however many restarts, the impulse to build something is still alive in you. That's the part that matters."
      whatYouNeed="All three pieces. The fundamentals that actually work. A system flexible enough to survive your real life. And a reason deep enough to carry you through the weeks when nothing feels worth it. That's what Proof & Practice is built to give you, one week at a time."
      blurContent={BLUR_CONTENT}
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "a2ec281a-40fd-4cea-ad30-b6ea8e35246c",
      }}
      missingPieceBorderColor="#E6C280"
      accentBorder="border-golden"
      accentText="text-golden"
      pillars={PILLARS}
    />
  );
}
