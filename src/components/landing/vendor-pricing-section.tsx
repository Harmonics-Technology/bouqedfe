import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

export function VendorPricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for new vendors getting started",
      price: "Free",
      period: "Forever",
      commission: "8%",
      popular: false,
      features: [
        "Up to 50 bookings per month",
        "Basic profile customization",
        "Standard payment processing",
        "Email support",
        "Mobile app access",
        "Basic analytics",
        "Customer reviews",
        "Calendar integration"
      ],
      limitations: [
        "Limited customization options",
        "Standard support response time",
        "Basic reporting features"
      ],
      cta: "Get Started Free",
      color: "blue"
    },
    {
      name: "Professional",
      description: "For growing businesses that need more features",
      price: "₦5,000",
      period: "per month",
      commission: "5%",
      popular: true,
      features: [
        "Unlimited bookings",
        "Advanced profile customization",
        "Priority payment processing",
        "Priority email & chat support",
        "Mobile app access",
        "Advanced analytics & insights",
        "Customer reviews & ratings",
        "Calendar integration",
        "Custom booking forms",
        "Automated reminders",
        "Multi-location support",
        "Marketing tools",
        "Performance reports",
        "Customer management tools"
      ],
      limitations: [],
      cta: "Start Professional",
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For established businesses with advanced needs",
      price: "₦15,000",
      period: "per month",
      commission: "3%",
      popular: false,
      features: [
        "Everything in Professional",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced API access",
        "Custom reporting",
        "Team management",
        "Advanced security features",
        "Custom branding",
        "Priority feature requests",
        "Training & onboarding",
        "SLA guarantee"
      ],
      limitations: [],
      cta: "Contact Sales",
      color: "gold"
    }
  ];

  const additionalBenefits = [
    {
      title: "No Setup Fees",
      description: "Get started immediately with no upfront costs or hidden fees."
    },
    {
      title: "Instant Payouts",
      description: "Receive payments instantly after service completion."
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team."
    },
    {
      title: "Free Training",
      description: "Access comprehensive training materials and onboarding support."
    }
  ];

  const getColorClasses = (color: string, type: 'border' | 'bg' | 'text' | 'button') => {
    const colors = {
      blue: {
        border: 'border-blue-200 dark:border-blue-800',
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        border: 'border-purple-200 dark:border-purple-800',
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-purple-600',
        button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
      },
      gold: {
        border: 'border-yellow-200 dark:border-yellow-800',
        bg: 'bg-yellow-50 dark:bg-yellow-950/20',
        text: 'text-yellow-600',
        button: 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
      }
    };
    return colors[color as keyof typeof colors][type];
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block">
              Success Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. Our transparent pricing means you only pay for what you need,
            with no hidden fees or long-term commitments.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up ${
                plan.popular
                  ? 'border-2 border-purple-500 shadow-lg scale-105'
                  : `border ${getColorClasses(plan.color, 'border')}`
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${getColorClasses(plan.color, 'bg')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {plan.name === 'Starter' && <Zap className={`w-8 h-8 ${getColorClasses(plan.color, 'text')}`} />}
                  {plan.name === 'Professional' && <Crown className={`w-8 h-8 ${getColorClasses(plan.color, 'text')}`} />}
                  {plan.name === 'Enterprise' && <Star className={`w-8 h-8 ${getColorClasses(plan.color, 'text')}`} />}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== 'Forever' && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>

                <div className={`inline-flex items-center px-3 py-1 ${getColorClasses(plan.color, 'bg')} rounded-full text-sm font-medium ${getColorClasses(plan.color, 'text')}`}>
                  {plan.commission} commission rate
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full ${getColorClasses(plan.color, 'button')} text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center`}>
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What's Included in All Plans
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every plan comes with these essential features to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-4 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h4>
                <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Are there any setup fees?</h4>
                <p className="text-muted-foreground text-sm">No, there are no setup fees or hidden costs. You only pay the monthly subscription and commission rates.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How do commission rates work?</h4>
                <p className="text-muted-foreground text-sm">Commission is only charged on successful bookings. The rate depends on your chosen plan.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Is there a free trial?</h4>
                <p className="text-muted-foreground text-sm">Yes, the Starter plan is completely free forever. You can also try Professional for 14 days free.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground text-sm">We accept all major credit cards, bank transfers, and mobile money payments.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h4>
                <p className="text-muted-foreground text-sm">Yes, you can cancel your subscription at any time with no cancellation fees.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful vendors who are already building thriving businesses on Bouqed.
              Start with our free plan and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-green-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
