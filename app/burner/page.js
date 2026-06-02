import ResultsPage from "../components/ResultsPage";

export const metadata = { title: "The Burner | Proof & Practice" };

const PILLARS = [
  { label: "Proof",    status: "present", colorClass: "text-proof",    dotClass: "bg-proof",    borderClass: "border-proof/40",    highBg: "bg-proof" },
  { label: "Practice", status: "present", colorClass: "text-practice", dotClass: "bg-practice", borderClass: "border-practice/40", highBg: "bg-practice" },
  { label: "Purpose",  status: "absent",  colorClass: "text-purpose",  dotClass: "bg-purpose",  borderClass: "border-purpose/40",  highBg: "bg-purpose" },
];

const BLUR_CONTENT = `Purpose. The kind that connects to something bigger than any single outcome. Something that's still true on the worst Wednesday of the year.

You've done this before. Maybe more than once. You built a real system. You knew what you were doing and you did it consistently. For months, maybe longer. And then something shifted. A hard season. A life change. The urgency that started everything quietly resolved. And the system that was working just stopped.

This is the failure mode that research predicted. Only 4.3% of people sustain behavior change after a major health scare — the most visceral motivator imaginable. If a near-miss with your own mortality can't sustain long-term change, fear and urgency alone never could. Neither can aesthetics, a deadline, or wanting to feel better in general. These things start the engine. They don't keep it running.

What you built was real. The system worked. The fuel underneath it ran out. A sustainable health practice needs a reason that outlasts the original trigger. Something that doesn't resolve, expire, or shift with the seasons.

You have had periods of genuine, sustained health consistency, and you lost them. You can identify exactly when things fell apart, but you struggle to explain why the motivation disappeared. You rebuild well when re-motivated, but find the re-motivation harder to access each time.`;

export default function BurnerPage() {
  return (
    <ResultsPage
      archetypeName="The Burner"
      oneLineTruth="You built something real. It just ran out of fuel."
      strengthSentence="You've built a real system before. You knew what you were doing and you did it consistently. That's not nothing. That's the proof you can do it again."
      whatYouNeed="Purpose. The kind that connects to something bigger than any single outcome. Something that's still true on the worst Wednesday of the year."
      blurContent={BLUR_CONTENT}
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "05b7494e-7391-4503-9d12-4bbf38e69b7e",
      }}
      missingPieceBorderColor="#C9BFE3"
      accentBorder="border-proof"
      accentText="text-proof"
      pillars={PILLARS}
    />
  );
}
