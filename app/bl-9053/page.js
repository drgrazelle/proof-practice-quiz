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
        formId: "124320b8-2743-4316-a034-b1bc468c0acf",
      }}
    />
  );
}
