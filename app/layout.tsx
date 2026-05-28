import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { Masthead } from "@/components/masthead";
import { Colophon } from "@/components/colophon";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rentershub.co.uk"),
  title: {
    default: "Renters Hub — A pamphlet for the Renters' Rights Act 2025",
    template: "%s · Renters Hub",
  },
  description:
    "Plain-English guides and free tools for private renters in England under the Renters' Rights Act 2025. Independent. No tracking. No paywall.",
  applicationName: "Renters Hub",
  authors: [{ name: "Renters Hub" }],
  keywords: [
    "Renters' Rights Act 2025",
    "Section 13 rent increase",
    "Form 4A",
    "Section 8 notice",
    "private renting England",
    "tenant rights UK 2026",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rentershub.co.uk",
    siteName: "Renters Hub",
    title: "Renters Hub — A pamphlet for the Renters' Rights Act 2025",
    description: "Plain-English guides and free tools for private renters in England.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink relative">
        <Masthead />
        <main className="flex-1 relative z-10">{children}</main>
        <Colophon />
        <CookieBanner />
      </body>
    </html>
  );
}
