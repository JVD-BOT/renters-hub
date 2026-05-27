import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renters-hub.vercel.app"),
  title: {
    default: "Renters Hub — Tools and guides for the Renters' Rights Act 2025",
    template: "%s · Renters Hub",
  },
  description:
    "Plain-English tools and guides for private renters in England under the Renters' Rights Act 2025. Free Section 13 rent increase check, Section 8 grounds explained, and expert guides written by a renter for renters.",
  applicationName: "Renters Hub",
  authors: [{ name: "Renters Hub" }],
  keywords: [
    "Renters' Rights Act 2025",
    "Section 13 rent increase",
    "Form 4A",
    "Section 8 notice",
    "private renting England",
    "tenant rights UK 2026",
    "First-tier Tribunal rent challenge",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://renters-hub.vercel.app",
    siteName: "Renters Hub",
    title: "Renters Hub — Tools and guides for the Renters' Rights Act 2025",
    description:
      "Free, plain-English tools and guides for private renters in England.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renters Hub",
    description:
      "Plain-English tools and guides for private renters in England.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
