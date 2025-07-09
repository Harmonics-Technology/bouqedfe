import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Wrench,
  Camera,
  Car,
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Beauty & Wellness",
    description: "Hair styling, spa treatments, massage therapy, and personal care services",
    badge: "Popular",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description: "Plumbing, electrical work, cleaning, repairs, and maintenance",
    badge: "In Demand",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Event photography, portraits, product shoots, and video services",
    badge: "Creative",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Car wash, detailing, repairs, and maintenance services",
    badge: "Essential",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property management, interior design, and home staging",
    badge: "Premium",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Consulting, accounting, legal services, and professional support",
    badge: "Professional",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Heart,
    title: "Health & Fitness",
    description: "Personal training, nutrition coaching, and wellness programs",
    badge: "Trending",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Tutoring, skill development, and professional training",
    badge: "Growth",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 animate-fade-in-up">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            Find the Perfect Service
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}for You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Browse through our wide range of professional services and connect with verified providers in your area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const animationDelay = `animation-delay-${(index + 3) * 100}`;
            return (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-sm animate-scale-in ${animationDelay}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${service.color} dark:bg-opacity-20`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    Explore services
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We're constantly adding new service categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200">
              View All Services
            </button>
            <button className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-all duration-200">
              Request New Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
