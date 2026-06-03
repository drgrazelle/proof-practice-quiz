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
        formId: "8e85d083-290c-4830-8afb-689687badf01",
      }}
    />
  );
}
