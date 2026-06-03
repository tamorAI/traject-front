import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import FeaturesSection from "@/components/landing/features-section";
import TrajectoryIntelligence from "@/components/landing/trajectory-intelligence";
import CTASection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(0,0,0,0.03), transparent 42%), linear-gradient(to bottom, transparent, transparent 55%, rgba(0,0,0,0.02))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <Header />
      <Hero />
      <FeaturesSection />
      <TrajectoryIntelligence />
      <CTASection />
      <Footer />
    </main>
  );
}
