import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import FeaturesSection from "@/components/landing/features-section";
import TrajectoryIntelligence from "@/components/landing/trajectory-intelligence";
import CTASection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute left-0 top-16 bottom-16 w-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-16 bottom-16 w-px bg-border pointer-events-none" />

        <div className="hidden lg:block absolute left-0 top-1/4 w-2.5 h-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-1/4 w-2.5 h-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute left-0 top-2/4 w-3.5 h-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-2/4 w-3.5 h-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute left-0 top-3/4 w-2.5 h-px bg-border pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-3/4 w-2.5 h-px bg-border pointer-events-none" />

        <Hero />
        <FeaturesSection />
        <TrajectoryIntelligence />
        <CTASection />
      </div>
      <Footer />
    </>
  );
}
