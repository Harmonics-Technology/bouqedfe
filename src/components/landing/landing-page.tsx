import { Navigation } from "./navigation";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";
import { HowItWorksSection } from "./how-it-works-section";
import { FeaturesSection } from "./features-section";
import { TestimonialsSection } from "./testimonials-section";
import { Footer } from "./footer";
import { ThemeProvider } from "@/contexts/theme-context";

export function LandingPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <FeaturesSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
