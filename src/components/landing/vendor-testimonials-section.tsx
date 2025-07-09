import { Star, Quote, TrendingUp, Users, DollarSign } from "lucide-react";

export function VendorTestimonialsSection() {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      service: "Event Planning",
      location: "Lagos, Nigeria",
      rating: 5,
      earnings: "₦850K/month",
      customers: "200+",
      growth: "+250%",
      quote: "Bouqed completely transformed my event planning business. The automated booking system and payment processing freed up so much of my time to focus on creating amazing events. I've tripled my revenue in just 8 months!",
      avatar: "AJ",
      verified: true
    },
    {
      name: "Chioma Okafor",
      service: "Beauty & Makeup",
      location: "Abuja, Nigeria",
      rating: 5,
      earnings: "₦420K/month",
      customers: "150+",
      growth: "+180%",
      quote: "As a makeup artist, I was struggling to manage bookings and payments. Bouqed's platform made everything seamless. The customer reviews feature helped build my reputation, and now I'm booked solid every week!",
      avatar: "CO",
      verified: true
    },
    {
      name: "Ibrahim Musa",
      service: "Home Cleaning",
      location: "Kano, Nigeria",
      rating: 5,
      earnings: "₦320K/month",
      customers: "300+",
      growth: "+200%",
      quote: "I started with just basic cleaning services. Bouqed's analytics showed me which services were most in demand, helping me expand my offerings. The platform's trust and safety features give customers confidence to book with me.",
      avatar: "IM",
      verified: true
    },
    {
      name: "Grace Eze",
      service: "Catering Services",
      location: "Port Harcourt, Nigeria",
      rating: 5,
      earnings: "₦680K/month",
      customers: "120+",
      growth: "+300%",
      quote: "From cooking for family gatherings to running a full catering business - Bouqed made this journey possible. The scheduling tools help me manage multiple events, and the payment system ensures I get paid on time, every time.",
      avatar: "GE",
      verified: true
    },
    {
      name: "Tunde Adeyemi",
      service: "Photography",
      location: "Ibadan, Nigeria",
      rating: 5,
      earnings: "₦520K/month",
      customers: "180+",
      growth: "+220%",
      quote: "The portfolio feature on Bouqed showcases my work beautifully. Clients can see my previous work and book instantly. The mobile app lets me manage bookings on location. It's like having a business manager in my pocket!",
      avatar: "TA",
      verified: true
    },
    {
      name: "Fatima Aliyu",
      service: "Tutoring",
      location: "Kaduna, Nigeria",
      rating: 5,
      earnings: "₦280K/month",
      customers: "80+",
      growth: "+150%",
      quote: "Teaching has always been my passion, but managing students and schedules was overwhelming. Bouqed's platform organized everything for me. I can now focus on what I love - helping students succeed - while the platform handles the business side.",
      avatar: "FA",
      verified: true
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Vendors",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      value: "₦2.5B+",
      label: "Total Earnings",
      color: "text-green-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      value: "185%",
      label: "Average Growth",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Vendors
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 block">
              Are Saying
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how service providers across Nigeria are building successful businesses
            and transforming their lives with Bouqed.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{testimonial.earnings}</div>
                  <div className="text-xs text-muted-foreground">Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{testimonial.customers}</div>
                  <div className="text-xs text-muted-foreground">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">{testimonial.growth}</div>
                  <div className="text-xs text-muted-foreground">Growth</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-8 md:p-12 border border-border">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful vendors who have transformed their skills into thriving businesses.
                Your journey to financial freedom and business success starts with a single click.
              </p>

              {/* Success Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">₦2.5M</div>
                  <div className="text-sm text-muted-foreground">Average annual earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24hrs</div>
                  <div className="text-sm text-muted-foreground">To get started</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Vendor satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                  Start Your Journey Today
                </button>
                <button className="border border-border hover:bg-muted text-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Read More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
