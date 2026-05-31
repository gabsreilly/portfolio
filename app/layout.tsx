import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Big Bird — the custom display serif we used on Achi (achi.world).
// Self-hosted from /public/fonts/. Used for general display moments.
const bigBird = localFont({
  src: [
    {
      path: "../public/fonts/TAYBigBirdRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TAYBigBirdRegular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

// Instrument Serif — the original face we used on the hero name.
// Reserved for the "Gabriella," wordmark moment under the portrait.
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Gabriella O'Reilly — An archive",
  description:
    "Translator of tech-jargon, online-speak, and stories that matter. A personal archive of work, words, and a few side things.",
  openGraph: {
    title: "Gabriella O'Reilly — An archive",
    description:
      "Translator of tech-jargon, online-speak, and stories that matter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bigBird.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
