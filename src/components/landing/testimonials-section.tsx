import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "Bouqed made finding a reliable house cleaning service so easy! The booking process was seamless, and the cleaner was professional and thorough. I've been using it for 6 months now.",
    service: "House Cleaning"
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "As a busy entrepreneur, I needed reliable services for my office. From IT support to catering, Bouqed has connected me with amazing professionals. Highly recommend!",
    service: "Business Services"
  },
  {
    name: "Emily Rodriguez",
    role: "Working Mom",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "The convenience of booking childcare and tutoring services through one platform is incredible. All providers are verified, which gives me peace of mind as a parent.",
    service: "Childcare & Education"
  },
  {
    name: "David Thompson",
    role: "Homeowner",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "From plumbing emergencies to regular maintenance, Bouqed has never let me down. The quality of service providers and the booking system are both excellent.",
    service: "Home Maintenance"
  },
  {
    name: "Lisa Park",
    role: "Event Planner",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "I've booked photographers, caterers, and decorators through Bouqed for multiple events. The platform makes it easy to compare providers and read genuine reviews.",
    service: "Event Services"
  },
  {
    name: "James Wilson",
    role: "Fitness Enthusiast",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "Found my personal trainer through Bouqed and it's been life-changing! The platform made it easy to find someone who matched my fitness goals and schedule.",
    service: "Personal Training"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Customer Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience with Bouqed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-200 dark:text-blue-600/50" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Service Badge */}
                <Badge variant="outline" className="mb-4 text-xs">
                  {testimonial.service}
                </Badge>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-muted-foreground">
              Join our growing community of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Services Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
