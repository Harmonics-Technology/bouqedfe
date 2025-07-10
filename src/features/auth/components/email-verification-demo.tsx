import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from './login-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { LoginFormData } from '../hooks/use-login';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  isVendor: yup.boolean().default(false),
  rememberMe: yup.boolean().default(false),
});

export function EmailVerificationDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [needsEmailVerification, setNeedsEmailVerification] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const form = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      isVendor: false,
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    setNeedsEmailVerification(false);
    setUserEmail(data.email);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate email verification error
    setError('Please check your email to verify your account');
    setNeedsEmailVerification(true);
    setIsLoading(false);
  };

  const clearError = () => {
    setError(null);
    setNeedsEmailVerification(false);
  };

  const simulateSuccess = () => {
    setError(null);
    setNeedsEmailVerification(false);
    alert('Login successful! (This is just a demo)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Email Verification Demo
          </h1>
          <p className="text-muted-foreground">
            This form will simulate the "Please check your email to verify your account" error
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center text-foreground">
              Test Login Form
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Enter any email and password to see the resend verification feature
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm
              form={form}
              onSubmit={form.handleSubmit(onSubmit)}
              isLoading={isLoading}
              error={error}
              needsEmailVerification={needsEmailVerification}
              userEmail={userEmail}
              onClearError={clearError}
            />

            <div className="mt-4 space-y-2">
              <Button
                onClick={simulateSuccess}
                variant="outline"
                className="w-full"
                disabled={isLoading}
              >
                Simulate Successful Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
