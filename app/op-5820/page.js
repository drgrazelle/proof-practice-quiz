import EmailGatePage from "@/app/components/EmailGatePage";

export const metadata = {
  title: "Your Result | Proof & Practice",
  robots: { index: false },
};

export default function Page() {
  return (
    <EmailGatePage
      embedScript={{
        src: "https://subscribe-forms.beehiiv.com/v3/loader.js",
        formId: "db75c8f8-5bd9-4701-a1c8-223fa0a8dc94",
      }}
    />
  );
}
