import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CoreFeatures from "@/components/CoreFeatures";
import ExtraFeatures from "@/components/ExtraFeatures";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

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
