import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Explore our wide range of services and find the perfect provider for your needs using our smart search and filters.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
    step: "01"
  },
  {
    icon: Calendar,
    title: "Book Instantly",
    description: "Select your preferred date and time, add any special requirements, and confirm your booking in just a few clicks.",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
    step: "02"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Pay securely through our platform with multiple payment options. Your money is protected until service completion.",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600",
    step: "03"
  },
  {
    icon: Star,
    title: "Enjoy & Review",
    description: "Receive your service from verified professionals and share your experience to help others in the community.",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
    step: "04"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Steps to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Amazing Service
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting the service you need has never been easier. Follow these simple steps and experience the convenience of Bouqed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-border/50 z-0" />
                )}

                <Card className="relative z-10 text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-full ${step.color} mb-4 mt-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Bouqed for their service needs. Your perfect service provider is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Start Booking Now
            </button>
            <button className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
