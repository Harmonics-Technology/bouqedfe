import { useState, useCallback } from 'react';
import { apiClient } from '@/api/client';

export const useResendVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const resendVerification = useCallback(async (email: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await apiClient.user.resendEmailVerification({
        email,
      });

      if (response.status && response.data) {
        setSuccess('Verification email sent successfully! Please check your inbox.');
      } else {
        setError(response.message || 'Failed to send verification email. Please try again.');
      }
    } catch (err: any) {
      console.error('Resend verification error:', err);
      setError(
        err?.body?.message ||
        err?.message ||
        'An unexpected error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    resendVerification,
    isLoading,
    error,
    success,
    clearMessages,
  };
};
