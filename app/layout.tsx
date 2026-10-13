import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bryng — Academic Service Marketplace",
  description:
    "Connect with verified academic professionals. Pay safely through escrow. Only release funds when satisfied. Bryng is the structured marketplace for academic success.",
  keywords: [
    "academic help",
    "verified academic writers",
    "academic escrow",
    "thesis assistance",
    "student marketplace",
  ],
  openGraph: {
    title: "Bryng — Academic Service Marketplace",
    description:
      "Connect with verified professionals. Pay safely through escrow. Only release funds when satisfied.",
    type: "website",
    url: "https://bryng.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryng — Academic Service Marketplace",
    description:
      "Connect with verified professionals. Pay safely through escrow.",
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
