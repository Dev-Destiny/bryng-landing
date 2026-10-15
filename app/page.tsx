import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CoreFeatures from "@/components/CoreFeatures";
import ExtraFeatures from "@/components/ExtraFeatures";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Find Vetted Academic Support | Bryng",
  description:
    "Find vetted subject experts for structured academic support. Agree on a clear plan, review each milestone, and approve work before payment is released.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Find Vetted Academic Support | Bryng",
    description:
      "Find vetted subject experts, agree on a clear plan, and review each milestone before payment is released.",
    type: "website",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CoreFeatures />
      <ExtraFeatures />
      <Comparison />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
