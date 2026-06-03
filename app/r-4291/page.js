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
        formId: "a2ec281a-40fd-4cea-ad30-b6ea8e35246c",
      }}
    />
  );
}
