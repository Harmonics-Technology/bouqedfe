import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users, DollarSign } from "lucide-react";

export function VendorHeroSection() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob dark:bg-blue-600/10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 dark:bg-purple-600/10" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 dark:bg-pink-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Grow Your Business with Bouqed
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Your Skills Into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Profitable Business
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Join thousands of service providers who are building successful businesses on Bouqed.
                From booking management to payment processing, we handle the tech so you can focus on what you do best.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Start Selling Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-2 hover:bg-muted"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">₦50M+</div>
                <div className="text-sm text-muted-foreground">Earned by Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative animate-fade-in-right animation-delay-200">
            <div className="grid grid-cols-2 gap-4">
              {/* Dashboard Preview Card */}
              <div className="col-span-2 bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Vendor Dashboard</h3>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +23%
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">142</div>
                    <div className="text-xs text-muted-foreground">Total Orders</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">28</div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">₦85K</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Cards */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-foreground">Customers</span>
                </div>
                <div className="text-2xl font-bold text-foreground">1,247</div>
                <div className="text-xs text-green-600">+12% this month</div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-foreground">Rating</span>
                </div>
                <div className="text-2xl font-bold text-foreground">4.8</div>
                <div className="text-xs text-muted-foreground">Based on 89 reviews</div>
              </div>

              {/* Earnings Card */}
              <div className="col-span-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-1">
                      <DollarSign className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">Monthly Earnings</span>
                    </div>
                    <div className="text-2xl font-bold">₦245,000</div>
                    <div className="text-xs opacity-90">+18% from last month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-90">Next payout</div>
                    <div className="text-sm font-medium">Jan 15, 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/10 rounded-full animate-float animation-delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
