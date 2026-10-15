import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bryng | Vetted Academic Support, Milestone by Milestone",
  description:
    "Find vetted subject experts for structured academic support. Agree on a clear plan, review each milestone, and approve work before payment is released.",
  keywords: [
    "academic help",
    "academic support",
    "vetted subject experts",
    "milestone-based academic support",
    "thesis assistance",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bryng | Vetted Academic Support, Milestone by Milestone",
    description:
      "Find vetted subject experts, agree on a clear plan, and review each milestone before payment is released.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryng | Vetted Academic Support, Milestone by Milestone",
    description:
      "Find vetted subject experts, agree on a clear plan, and review each milestone before payment is released.",
  },
  icons: {
    icon: [
      { url: "/Bryng_Icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/Bryng_Icon.svg",
    apple: "/Bryng_Icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#6C5CE7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${plusJakartaSans.className} scroll-smooth`}>
      <body
        className={`${plusJakartaSans.className} antialiased bg-bg-base text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
