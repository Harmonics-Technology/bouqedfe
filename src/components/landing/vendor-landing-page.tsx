import { ThemeProvider } from "@/contexts/theme-context";
import { Footer } from "./footer";
import { VendorBenefitsSection } from "./vendor-benefits-section";
import { VendorFeaturesSection } from "./vendor-features-section";
import { VendorHeroSection } from "./vendor-hero-section";
import { VendorHowItWorksSection } from "./vendor-how-it-works-section";
import { VendorNavigation } from "./vendor-navigation";
import { VendorPricingSection } from "./vendor-pricing-section";
import { VendorTestimonialsSection } from "./vendor-testimonials-section";

export function VendorLandingPage() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-background">
                <VendorNavigation />
                <main>
                    <VendorHeroSection />
                    <VendorFeaturesSection />
                    <VendorHowItWorksSection />
                    <VendorBenefitsSection />
                    <VendorTestimonialsSection />
                    <VendorPricingSection />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
