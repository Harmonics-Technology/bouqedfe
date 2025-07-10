import { useTheme } from '@/contexts/theme-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RegistrationStep } from './registration-step';
import { useVendorRegistration } from '../hooks/use-registration';
import {
  Moon, Sun, Store, User, Lock, Building, Mail, Phone, Eye, EyeOff,
  MapPin, Globe, Facebook, Instagram, Twitter, Linkedin, Youtube,
  GraduationCap
} from 'lucide-react';
import { useState } from 'react';

export default function VendorRegistration() {
  const { theme, toggleTheme } = useTheme();
  const {
    form,
    currentStep,
    totalSteps,
    progress,
    isLoading,
    error,
    nextStep,
    prevStep,
    onSubmit,
    clearError,
    steps
  } = useVendorRegistration();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const currentStepData = steps[currentStep - 1];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>First Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Last Name</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Personal Email</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your personal email"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Personal Phone</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your personal phone number"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 animate-fade-in-up">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>Password</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a secure password"
                        {...field}
                        className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>Confirm Password</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...field}
                        className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password strength indicator */}
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Password strength:</div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                      form.watch('password')?.length >= level * 2
                        ? level <= 2
                          ? 'bg-red-500'
                          : level === 3
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-2">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 flex items-center space-x-2">
                <Store className="w-4 h-4" />
                <span>Vendor Account Benefits</span>
              </h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Create and manage your business profile</li>
                <li>• List unlimited services</li>
                <li>• Accept bookings and payments</li>
                <li>• Access analytics and insights</li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 animate-fade-in-up">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Business Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your business name"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Business Description</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business and the services you offer..."
                      className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Business Email</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="business@example.com"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Business Phone</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Business phone number"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Business Address</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your business address"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="businessCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessState"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="State"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessZipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Zip Code"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="businessCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Country"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Website (Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://your-website.com"
                      {...field}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium text-foreground">Connect Your Social Media</h3>
              <p className="text-sm text-muted-foreground">
                Help customers find and connect with your business on social platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <span>Facebook</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Facebook page URL"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span>Instagram</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Instagram profile URL"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Twitter className="w-4 h-4 text-blue-400" />
                      <span>Twitter</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Twitter profile URL"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      <span>LinkedIn</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="LinkedIn profile URL"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="youTube"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Youtube className="w-4 h-4 text-red-600" />
                      <span>YouTube</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="YouTube channel URL"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>University (Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="University affiliation"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 space-y-3">
              <h4 className="font-medium text-foreground flex items-center space-x-2">
                <Store className="w-5 h-5" />
                <span>Ready to Launch Your Business! 🚀</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                You're all set to join the Bouqed marketplace! Once you complete registration, you'll be able to:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Set up your business profile with photos and details</li>
                <li>• Create service listings with pricing</li>
                <li>• Start receiving bookings from customers</li>
                <li>• Access your vendor dashboard and analytics</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Theme Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/80"
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

      <div className="max-w-3xl w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 animate-float">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Become a Vendor
          </h1>
          <p className="text-muted-foreground text-lg">
            Join thousands of successful businesses on Bouqed
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <p className="text-destructive text-sm">{error}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearError}
                className="text-destructive hover:text-destructive"
              >
                ×
              </Button>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="animate-fade-in-up animation-delay-200">
            <RegistrationStep
              title={currentStepData.title}
              description={currentStepData.description}
              currentStep={currentStep}
              totalSteps={totalSteps}
              progress={progress}
              onNext={nextStep}
              onPrev={prevStep}
              onSubmit={form.handleSubmit(onSubmit)}
              isLoading={isLoading}
              isLastStep={currentStep === totalSteps}
            >
              {renderStepContent()}
            </RegistrationStep>
          </form>
        </Form>

        {/* Footer */}
        <div className="text-center animate-fade-in-up animation-delay-400">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Sign in
            </a>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Just looking for services?{' '}
            <a
              href="/register"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Sign up as User
            </a>
          </p>
        </div>

        {/* Additional Links */}
        <div className="text-center space-y-2 animate-fade-in-up animation-delay-500">
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors duration-200">Vendor Terms</button>
            <span>•</span>
            <button className="hover:text-foreground transition-colors duration-200">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-foreground transition-colors duration-200">Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}
