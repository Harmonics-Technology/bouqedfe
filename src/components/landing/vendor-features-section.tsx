import {
  Calendar,
  CreditCard,
  BarChart3,
  MessageSquare,
  Shield,
  Smartphone,
  Users,
  Star,
  Clock,
  Globe,
  Zap,
  TrendingUp
} from "lucide-react";

export function VendorFeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking Management",
      description: "Automated scheduling, calendar sync, and booking confirmations. Never miss an appointment again.",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: CreditCard,
      title: "Secure Payment Processing",
      description: "Accept payments online with instant payouts. Support for cards, bank transfers, and mobile money.",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track your performance with detailed analytics. Monitor bookings, revenue, and customer trends.",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: MessageSquare,
      title: "Customer Communication",
      description: "Built-in messaging system to communicate with customers before, during, and after service delivery.",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Verified profiles, secure transactions, and dispute resolution to protect both you and your customers.",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Manage your business on-the-go with our mobile-optimized platform. Available on all devices.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Keep track of your customers, their preferences, and booking history."
    },
    {
      icon: Star,
      title: "Review System",
      description: "Build your reputation with authentic customer reviews and ratings."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Set your availability, manage time slots, and handle cancellations easily."
    },
    {
      icon: Globe,
      title: "Multi-Location Support",
      description: "Manage services across multiple locations with location-specific settings."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time alerts for new bookings, messages, and important updates."
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "Access marketing tools, promotions, and insights to grow your business."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Run Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to manage,
            grow, and scale your service business effectively.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Plus Many More Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover additional tools and capabilities designed to help you deliver
              exceptional service and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful vendors who are already using Bouqed to grow their businesses.
              Start your free trial today!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
