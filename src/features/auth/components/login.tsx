import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoginForm } from './login-form';
import { useLogin } from '../hooks/use-login';
import { useTheme } from '@/contexts/theme-context';
import { Moon, Sun, Sparkles, Shield, Users } from 'lucide-react';

export default function Login() {
  const { form, isLoading, error, needsEmailVerification, userEmail, onSubmit, clearError } = useLogin();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration - similar to landing page */}
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

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 animate-float">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-lg">
            Sign in to your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
              Bouqed
            </span>{' '}
            account
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up animation-delay-200">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center text-foreground">
              Sign in
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm
              form={form}
              onSubmit={onSubmit}
              isLoading={isLoading}
              error={error}
              needsEmailVerification={needsEmailVerification}
              userEmail={userEmail}
              onClearError={clearError}
            />
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center animate-fade-in-up animation-delay-400">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a
              href="/register"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Sign up as User
            </a>
            {' or '}
            <a
              href="/register-vendor"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Become a Vendor
            </a>
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-8 animate-fade-in-up animation-delay-500">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm">Secure</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm">10K+ Users</span>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center space-y-2 animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors duration-200">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-foreground transition-colors duration-200">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-foreground transition-colors duration-200">Help</button>
          </div>
        </div>
      </div>
    </div>
  );
}
