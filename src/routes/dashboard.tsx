import { Dashboard } from '@/features/dashboard/components/dashboard';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard')({
    beforeLoad: ({ context }) => {
        // Check if user is authenticated
        const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
        if (!token) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: '/dashboard',
                },
            });
        }
    },
    component: Dashboard,
});
