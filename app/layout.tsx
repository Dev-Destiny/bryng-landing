import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryng — Academic Help Without the Uncertainty",
  description:
    "Connect with verified academic professionals. Pay safely through escrow. Only release money when you're satisfied. Bryng is Nigeria's trusted academic service marketplace.",
  keywords: [
    "academic help Nigeria",
    "student freelance platform",
    "thesis writing Nigeria",
    "academic escrow",
    "verified writers Nigeria",
  ],
  openGraph: {
    title: "Bryng — Academic Help Without the Uncertainty",
    description:
      "Connect with verified professionals. Pay safely through escrow. The academic marketplace built for Nigerian students.",
    type: "website",
    url: "https://bryng.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryng — Academic Help Without the Uncertainty",
    description:
      "Connect with verified professionals. Pay safely through escrow.",
  },
  themeColor: "#6C5CE7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBFBF9]`}
      >
        {children}
      </body>
    </html>
  );
}
