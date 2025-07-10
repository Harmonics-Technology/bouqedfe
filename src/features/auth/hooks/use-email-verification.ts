import { useState, useCallback, useRef } from 'react';
import { apiClient } from '@/api/client';
import { useRouter } from '@tanstack/react-router';

export const useEmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const verifiedTokensRef = useRef<Set<string>>(new Set());

  const verifyEmail = useCallback(async (token: string) => {
    // Prevent multiple API calls for the same token
    if (verifiedTokensRef.current.has(token)) {
      return;
    }

    verifiedTokensRef.current.add(token);
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await apiClient.user.verify({
        token,
      });

      console.log('Email verification response:', response);

      // Check if the response indicates success
      if (response.status === true) {
        setSuccess(response.message || 'Email verified successfully! You can now log in to your account.');

        // Redirect to login page after successful verification
        setTimeout(() => {
          router.navigate({ to: '/login' });
        }, 2000);
      } else {
        // API returned 200 but status is false - this means verification failed
        setError(response.message || 'Email verification failed. The link may be invalid or expired.');
      }
    } catch (err: any) {
      console.error('Email verification error:', err);

      // Handle different error scenarios
      if (err?.body) {
        // API error with structured response
        setError(err.body.message || err.body.Message || 'Email verification failed. The link may be invalid or expired.');
      } else if (err?.response?.data) {
        // Axios error with response data
        setError(err.response.data.message || err.response.data.Message || 'Email verification failed. The link may be invalid or expired.');
      } else {
        // Generic error
        setError(err?.message || 'Email verification failed. The link may be invalid or expired.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    verifyEmail,
    isLoading,
    error,
    success,
    clearMessages,
  };
};
