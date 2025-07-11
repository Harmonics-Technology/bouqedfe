import { useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Loader2, Mail } from 'lucide-react';
import { useEmailVerification } from '../hooks/use-email-verification';
import { useResendVerification } from '../hooks/use-resend-verification';

export function EmailVerification() {
  const { token } = useParams({ strict: false });
  const { verifyEmail, isLoading, error, success } = useEmailVerification();
  const {
    resendVerification,
    isLoading: isResending,
    error: resendError,
    success: resendSuccess,
    clearMessages: clearResendMessages
  } = useResendVerification();

  useEffect(() => {
    if (token) {
      verifyEmail(token as string);
    }
  }, [token, verifyEmail]);

  const handleResendVerification = () => {
    // For demo purposes, we'll use a placeholder email
    // In a real app, you might want to store the email in localStorage or get it from the user
    const email = prompt('Please enter your email address to resend verification:');
    if (email) {
      clearResendMessages();
      resendVerification(email);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-start bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-md w-full space-y-8 mx-auto" style={{ marginTop: 'max(2rem, calc(50vh - 300px))' }}>
        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6 text-center">
            <div className="flex justify-center mb-4">
              {isLoading ? (
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
              ) : success ? (
                <CheckCircle className="h-12 w-12 text-green-500" />
              ) : error ? (
                <XCircle className="h-12 w-12 text-red-500" />
              ) : (
                <Mail className="h-12 w-12 text-blue-500" />
              )}
            </div>
            <CardTitle className="text-2xl font-semibold text-foreground">
              Email Verification
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {isLoading
                ? 'Verifying your email address...'
                : success
                ? 'Your email has been verified successfully!'
                : error
                ? 'Email verification failed'
                : 'Verifying your email address'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {success && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  {success}
                </p>
                <p className="text-green-600 dark:text-green-300 text-xs mt-1">
                  You will be redirected to the login page shortly.
                </p>
              </div>
            )}

            {error && (
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    {error}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Didn't receive the verification email?
                  </p>
                  <Button
                    onClick={handleResendVerification}
                    disabled={isResending}
                    variant="outline"
                    className="w-full"
                  >
                    {isResending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Resend Verification Email
                      </>
                    )}
                  </Button>
                </div>

                {resendSuccess && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      {resendSuccess}
                    </p>
                  </div>
                )}

                {resendError && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      {resendError}
                    </p>
                  </div>
                )}
              </div>
            )}

            {!token && !isLoading && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Invalid verification link. Please check your email for the correct verification link.
                </p>
              </div>
            )}

            <div className="text-center pt-4">
              <Button
                variant="ghost"
                onClick={() => window.location.href = '/login'}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Back to Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
