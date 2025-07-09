import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  MapPin,
  CreditCard,
  MessageSquare,
  Award,
  Smartphone,
  Users
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Providers",
    description: "All service providers are thoroughly vetted and verified for your safety and peace of mind.",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600"
  },
  {
    icon: Clock,
    title: "24/7 Booking",
    description: "Book services anytime, anywhere. Our platform is available round the clock for your convenience.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Find service providers in your area with our smart location-based matching system.",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security. Your transactions are always protected.",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Communicate directly with service providers through our built-in messaging system.",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "We guarantee service quality with our rating system and money-back guarantee policy.",
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Fully responsive design that works perfectly on all devices - desktop, tablet, and mobile.",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
  },
  {
    icon: Users,
    title: "Community Reviews",
    description: "Read authentic reviews from real customers to make informed decisions about services.",
    color: "bg-red-100 dark:bg-red-900/30 text-red-600"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Bouqed?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built the most comprehensive service booking platform with features designed to make your experience seamless and secure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm bg-card"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-full ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-card rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Built for Everyone
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're a busy professional looking for home services, a business owner needing specialized support, or someone seeking personal care services, Bouqed has something for everyone.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-foreground">For individuals and families</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-foreground">For businesses and enterprises</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-foreground">For service providers</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Join Our Growing Community
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-muted-foreground">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-muted-foreground">Completed Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.9★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
