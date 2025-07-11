import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from '@tanstack/react-router';
import { apiClient } from '@/api/client';
import type { RegisterModel } from '@/api/models/RegisterModel';
import type { VendorRegisterModel } from '@/api/models/VendorRegisterModel';

// Registration success callback type
export type RegistrationSuccessCallback = (userData: any) => void;

// User registration schema
const userRegistrationSchema = z.object({
  // Step 1: Basic Info
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),

  // Step 2: Account Setup
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),

  // Step 3: Additional Info
  isStudent: z.boolean(),
  university: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Vendor registration schema
const vendorRegistrationSchema = z.object({
  // Step 1: Personal Info
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),

  // Step 2: Account Setup
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),

  // Step 3: Business Info
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessDescription: z.string().min(10, 'Please provide a business description'),
  businessAddress: z.string().min(5, 'Please enter a valid address'),
  businessCity: z.string().min(2, 'Please enter a valid city'),
  businessState: z.string().min(2, 'Please enter a valid state'),
  businessCountry: z.string().min(2, 'Please enter a valid country'),
  businessZipCode: z.string().min(3, 'Please enter a valid zip code'),
  businessPhone: z.string().min(10, 'Please enter a valid business phone'),
  businessEmail: z.string().email('Please enter a valid business email'),
  businessWebsite: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),

  // Step 4: Social Media & Additional
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  linkedIn: z.string().optional(),
  youTube: z.string().optional(),
  university: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type UserRegistrationData = z.infer<typeof userRegistrationSchema>;
export type VendorRegistrationData = z.infer<typeof vendorRegistrationSchema>;

export interface RegistrationStep {
  id: number;
  title: string;
  description: string;
  fields: string[];
}

export const USER_REGISTRATION_STEPS: RegistrationStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    fields: ['firstName', 'lastName', 'email', 'phoneNumber']
  },
  {
    id: 2,
    title: 'Account Security',
    description: 'Create your secure account',
    fields: ['password', 'confirmPassword']
  },
  {
    id: 3,
    title: 'Additional Details',
    description: 'Help us personalize your experience',
    fields: ['isStudent', 'university']
  }
];

export const VENDOR_REGISTRATION_STEPS: RegistrationStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    fields: ['firstName', 'lastName', 'email', 'phoneNumber']
  },
  {
    id: 2,
    title: 'Account Security',
    description: 'Create your secure account',
    fields: ['password', 'confirmPassword']
  },
  {
    id: 3,
    title: 'Business Information',
    description: 'Tell us about your business',
    fields: ['businessName', 'businessDescription', 'businessAddress', 'businessCity', 'businessState', 'businessCountry', 'businessZipCode', 'businessPhone', 'businessEmail', 'businessWebsite']
  },
  {
    id: 4,
    title: 'Social Media & Extras',
    description: 'Connect your social presence',
    fields: ['facebook', 'instagram', 'twitter', 'linkedIn', 'youTube', 'university']
  }
];

export function useUserRegistration(onSuccess?: RegistrationSuccessCallback) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm<UserRegistrationData>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      isStudent: false,
      university: '',
    },
    mode: 'onChange'
  });

  const nextStep = useCallback(async () => {
    const currentStepFields = USER_REGISTRATION_STEPS[currentStep - 1].fields;
    const isValid = await form.trigger(currentStepFields as any);

    if (isValid && currentStep < USER_REGISTRATION_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, form]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const onSubmit = useCallback(async (data: UserRegistrationData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Transform data to match API model
      const registerData: RegisterModel = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phoneNumber: data.phoneNumber,
        isStudent: data.isStudent,
        university: data.university || null,
      };

      // Call user registration API
      const response = await apiClient.user.create({
        requestBody: registerData,
      });

      if (response.status) {
        // Registration successful - user will need to verify email
        setIsSuccess(true);
        console.log('Registration successful:', response.data);

        // Call success callback if provided
        if (onSuccess) {
          onSuccess(response.data);
        }

        // Default behavior: redirect to login with success message
        setTimeout(() => {
          navigate({
            to: '/login',
            search: { message: 'Registration successful! Please check your email to verify your account.' }
          });
        }, 2000);
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (err: any) {
      // Handle API errors
      if (err.body?.message) {
        setError(err.body.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const progress = (currentStep / USER_REGISTRATION_STEPS.length) * 100;

  return {
    form,
    currentStep,
    totalSteps: USER_REGISTRATION_STEPS.length,
    progress,
    isLoading,
    isSuccess,
    error,
    nextStep,
    prevStep,
    onSubmit,
    clearError,
    steps: USER_REGISTRATION_STEPS
  };
}

export function useVendorRegistration(onSuccess?: RegistrationSuccessCallback) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm<VendorRegistrationData>({
    resolver: zodResolver(vendorRegistrationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      businessName: '',
      businessDescription: '',
      businessAddress: '',
      businessCity: '',
      businessState: '',
      businessCountry: '',
      businessZipCode: '',
      businessPhone: '',
      businessEmail: '',
      businessWebsite: '',
      facebook: '',
      instagram: '',
      twitter: '',
      linkedIn: '',
      youTube: '',
      university: '',
    },
    mode: 'onChange'
  });

  const nextStep = useCallback(async () => {
    const currentStepFields = VENDOR_REGISTRATION_STEPS[currentStep - 1].fields;
    const isValid = await form.trigger(currentStepFields as any);

    if (isValid && currentStep < VENDOR_REGISTRATION_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, form]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const onSubmit = useCallback(async (data: VendorRegistrationData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Transform data for vendor registration (combines user and basic business info)
      const vendorRegisterData: VendorRegisterModel = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phoneNumber: data.phoneNumber,
        isStudent: false,
        university: data.university || null,
        businessName: data.businessName,
        businessDescription: data.businessDescription,
        businessAddress: data.businessAddress,
      };

      // Call vendor registration API
      const response = await apiClient.user.createVendor({
        requestBody: vendorRegisterData,
      });

      if (response.status) {
        // Vendor registration successful
        setIsSuccess(true);
        console.log('Vendor registration successful:', response.data);

        // Call success callback if provided
        if (onSuccess) {
          onSuccess(response.data);
        }

        // The vendor registration endpoint should create both the user and business
        // Additional business details (social media, etc.) can be updated later
        // through the business profile management interface

        // Default behavior: redirect to login with success message
        setTimeout(() => {
          navigate({
            to: '/login',
            search: { message: 'Vendor registration successful! Please check your email to verify your account.' }
          });
        }, 2000);
      } else {
        throw new Error(response.message || 'Vendor registration failed');
      }
    } catch (err: any) {
      // Handle API errors
      if (err.body?.message) {
        setError(err.body.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Vendor registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const progress = (currentStep / VENDOR_REGISTRATION_STEPS.length) * 100;

  return {
    form,
    currentStep,
    totalSteps: VENDOR_REGISTRATION_STEPS.length,
    progress,
    isLoading,
    isSuccess,
    error,
    nextStep,
    prevStep,
    onSubmit,
    clearError,
    steps: VENDOR_REGISTRATION_STEPS
  };
}
