import {
  DollarSign,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Globe,
  Star,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function VendorBenefitsSection() {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Maximize Your Earnings",
      description: "Keep up to 95% of your earnings with our low commission rates. Get paid instantly after service completion.",
      stats: "95% commission rate",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Work on Your Schedule",
      description: "Set your own hours, choose your clients, and work when it's convenient for you. Complete flexibility.",
      stats: "24/7 availability",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Access to Customers",
      description: "Tap into our growing customer base of over 100,000 active users looking for quality services.",
      stats: "100K+ customers",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "All transactions are secured and protected. We handle disputes and provide vendor protection."
    },
    {
      icon: TrendingUp,
      title: "Business Growth Tools",
      description: "Access analytics, marketing tools, and insights to help grow your business effectively."
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description: "Serve customers across Nigeria with our nationwide platform and delivery network."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Showcase your work, collect reviews, and build a strong professional reputation."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time alerts for new bookings, messages, and important business updates."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Our quality standards help you maintain high service levels and customer satisfaction."
    }
  ];

  const successStories = [
    {
      name: "Sarah O.",
      service: "Hair Styling",
      earnings: "₦450K/month",
      growth: "+180%",
      quote: "Bouqed transformed my small salon into a thriving business. I now serve 3x more customers!"
    },
    {
      name: "Michael A.",
      service: "Photography",
      earnings: "₦320K/month",
      growth: "+150%",
      quote: "The booking system is amazing. I can focus on my craft while Bouqed handles everything else."
    },
    {
      name: "Fatima K.",
      service: "Catering",
      earnings: "₦680K/month",
      growth: "+220%",
      quote: "From home kitchen to full catering business - Bouqed made it possible!"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Bouqed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits That Drive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Your Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join a platform designed to help service providers succeed. From flexible scheduling to
            secure payments, we provide everything you need to build a thriving business.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-2xl`} />

              {/* Icon */}
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${benefit.gradient} rounded-full text-white text-sm font-medium`}>
                  {benefit.stats}
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full`} />
            </div>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              More Reasons to Join
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover additional benefits that make Bouqed the perfect platform for growing your service business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how other vendors are building successful businesses on Bouqed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.name}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Stats */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{story.earnings}</div>
                    <div className="text-xs text-muted-foreground">Monthly Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{story.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{story.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Success Story Today
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful vendors who are already earning more and working smarter with Bouqed.
              Your journey to business success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                Join as Vendor
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
