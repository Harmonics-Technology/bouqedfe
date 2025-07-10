import { apiClient } from '@/api/client';
import type { LoginModel } from '@/api/models/LoginModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from '@tanstack/react-router';
import * as yup from 'yup';

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

export type LoginFormData = yup.InferType<typeof loginSchema>;

export const useLogin = () => {
  const router = useRouter();
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

    try {
      const loginData: LoginModel = {
        email: data.email,
        password: data.password,
        isVendor: data.isVendor,
      };

      const response = await apiClient.user.loginUser({
        requestBody: loginData,
      });

      if (response.status && response.data) {
        // Handle successful login
        // You might want to store the token, redirect, etc.
        console.log('Login successful:', response.data);

        // Store token if available
        if (response.data.token) {
          if (data.rememberMe) {
            localStorage.setItem('auth_token', response.data.token);
          } else {
            sessionStorage.setItem('auth_token', response.data.token);
          }
        }

        // Redirect to dashboard after successful login
        router.navigate({ to: '/dashboard' });
      } else {
        setError(response.message || 'Login failed. Please try again.');
        if (response?.message?.toLowerCase().includes('check your email') ||
          response?.message?.toLowerCase().includes('verify your account') ||
          response.message?.toLowerCase().includes('email verification')) {
          setNeedsEmailVerification(true);
        }
      }
    } catch (err: any) {
      console.error('Login error:', err);
      const errorMessage = err?.body?.message || err?.message || 'An unexpected error occurred. Please try again.';

      // Check if the error is about email verification
      if (errorMessage.toLowerCase().includes('check your email') ||
        errorMessage.toLowerCase().includes('verify your account') ||
        errorMessage.toLowerCase().includes('email verification')) {
        setNeedsEmailVerification(true);
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
    setNeedsEmailVerification(false);
  };

  return {
    form,
    isLoading,
    error,
    needsEmailVerification,
    userEmail,
    onSubmit: form.handleSubmit(onSubmit),
    clearError,
  };
};
