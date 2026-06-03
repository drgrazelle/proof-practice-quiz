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
        formId: "d854fc1d-f157-4716-96e1-e88f162a24b7",
      }}
    />
  );
}
