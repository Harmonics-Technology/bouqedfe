import { useState, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import { apiClient } from '@/api/client';
import type { UserView } from '@/api/models/UserView';

export const useUserProfile = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserView | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // First, validate the token to get user info
                const tokenResponse = await apiClient.user.validateToken({});

                if (tokenResponse.status && tokenResponse.data) {
                    setUser(tokenResponse.data);
                } else {
                    throw new Error('Failed to validate token');
                }
            } catch (err: any) {
                console.error('Error fetching user profile:', err);
                const errorMessage = err?.body?.message || err?.message || 'Failed to fetch user profile';
                setError(errorMessage);

                // If token is invalid, redirect to login
                if (err?.status === 401) {
                    localStorage.removeItem('auth_token');
                    sessionStorage.removeItem('auth_token');
                    router.navigate({ to: '/login' });
                }
            } finally {
                setIsLoading(false);
            }
        };

        // Only fetch if we have a token
        const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
        if (token) {
            fetchUserProfile();
        } else {
            setIsLoading(false);
            setError('No authentication token found');
        }
    }, []);

    const refetch = async () => {
        const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
        if (token) {
            setIsLoading(true);
            try {
                const tokenResponse = await apiClient.user.validateToken({});
                if (tokenResponse.status && tokenResponse.data) {
                    setUser(tokenResponse.data);
                    setError(null);
                }
            } catch (err: any) {
                console.error('Error refetching user profile:', err);
                setError(err?.body?.message || err?.message || 'Failed to refetch user profile');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        user,
        isLoading,
        error,
        refetch,
    };
};
