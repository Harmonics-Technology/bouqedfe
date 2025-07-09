import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ApiClient } from '@/api/ApiClient';
import type { LoginModel } from '@/api/models/LoginModel';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    try {
      const apiClient = new ApiClient();

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

        // You can add navigation logic here
        // For example: navigate('/dashboard');
      } else {
        setError(response.message || 'Login failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(
        err?.body?.message ||
        err?.message ||
        'An unexpected error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    form,
    isLoading,
    error,
    onSubmit: form.handleSubmit(onSubmit),
    clearError,
  };
};
