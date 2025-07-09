import { UserPlus, Settings, Zap, TrendingUp, ArrowRight } from "lucide-react";

export function VendorHowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Verify",
      description: "Create your vendor account, complete your profile, and get verified. It takes less than 10 minutes to get started.",
      details: [
        "Complete business registration",
        "Upload required documents",
        "Verify your identity",
        "Set up your business profile"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600"
    },
    {
      icon: Settings,
      title: "Setup Your Services",
      description: "Add your services, set pricing, configure availability, and customize your booking settings to match your business needs.",
      details: [
        "Create service listings",
        "Set competitive pricing",
        "Configure availability",
        "Upload service photos"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600"
    },
    {
      icon: Zap,
      title: "Start Receiving Bookings",
      description: "Go live and start receiving bookings from customers. Our platform handles payments, notifications, and scheduling automatically.",
      details: [
        "Receive instant booking notifications",
        "Automatic payment processing",
        "Customer communication tools",
        "Calendar synchronization"
      ],
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Use our analytics and marketing tools to optimize your services, attract more customers, and increase your revenue.",
      details: [
        "Performance analytics",
        "Customer feedback system",
        "Marketing and promotion tools",
        "Business growth insights"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Get Started
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block">
              in 4 Easy Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join Bouqed and start earning from your skills in minutes. Our streamlined onboarding process
            gets you up and running quickly, so you can focus on what you do best.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 dark:from-blue-800 dark:via-purple-800 dark:via-green-800 dark:to-orange-800 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full animate-pulse opacity-50" />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 mt-4`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} rounded-full mr-3 flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful service providers who have transformed their skills into thriving businesses.
              Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-border hover:bg-muted text-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-700">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
            <div className="text-sm text-muted-foreground">Average setup time</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Vendor satisfaction rate</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">₦2.5M</div>
            <div className="text-sm text-muted-foreground">Average monthly earnings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
