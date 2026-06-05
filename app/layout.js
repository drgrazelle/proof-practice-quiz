import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://quiz.drgrazelle.com"),
  title: "Health Habit Consistency Quiz",
  description:
    "12 questions. 3 minutes. Find out which piece of health consistency you're missing.",
  openGraph: {
    title: "Health Habit Consistency Quiz",
    description:
      "12 questions. 3 minutes. Find out which piece of health consistency you're missing.",
    siteName: "Proof & Practice",
    url: "https://quiz.drgrazelle.com",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Health Habit Consistency Quiz — Proof & Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Habit Consistency Quiz",
    description:
      "12 questions. 3 minutes. Find out which piece of health consistency you're missing.",
    images: ["/api/og"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
