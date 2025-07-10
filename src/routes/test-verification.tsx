import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

function TestVerification() {
  const [token, setToken] = useState('fcy8zg');
  const [email, setEmail] = useState('test@example.com');

  const verificationUrl = `http://localhost:3001/register/verify/${token}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-purple-900/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Email Verification Test
          </h1>
          <p className="text-muted-foreground">
            Test the email verification functionality
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Test Verification Link */}
          <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Test Verification Link
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Test the email verification process with a sample token
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Token:</label>
                <Input
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter verification token"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Generated URL:</label>
                <div className="mt-1 p-2 bg-muted rounded text-sm font-mono break-all">
                  {verificationUrl}
                </div>
              </div>

              <Button
                onClick={() => window.open(verificationUrl, '_blank')}
                className="w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Test Verification Link
              </Button>
            </CardContent>
          </Card>

          {/* Test Resend Verification */}
          <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Test Resend Verification
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Test the resend verification email functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Email:</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  type="email"
                  className="mt-1"
                />
              </div>

              <Button
                onClick={() => {
                  // This would normally call the resend API
                  alert(`Would resend verification email to: ${email}`);
                }}
                variant="outline"
                className="w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Test Resend Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* API Information */}
        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl font-semibold text-foreground">
              API Endpoints Used
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              The email verification system uses these API endpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Verify Email</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <code className="bg-muted px-1 rounded">GET /api/User/verifyUser/{token}</code>
                </p>
                <p className="text-xs text-muted-foreground">
                  Verifies a user's email address using the provided token
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Resend Verification</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <code className="bg-muted px-1 rounded">POST /api/User/resend-email-verification</code>
                </p>
                <p className="text-xs text-muted-foreground">
                  Resends the verification email to the specified email address
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => window.location.href = '/login'}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/test-verification')({
  component: TestVerification,
});
