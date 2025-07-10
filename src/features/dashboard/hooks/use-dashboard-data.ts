import { useState, useEffect } from 'react';
import { apiClient } from '@/api/client';
import type { UserView } from '@/api/models/UserView';
import type { VendorDashboardView } from '@/api/models/VendorDashboardView';
import type { BookingView } from '@/api/models/BookingView';
import type { NotificationView } from '@/api/models/NotificationView';
import type { RecentlyViewedView } from '@/api/models/RecentlyViewedView';

interface DashboardData {
    vendorDashboard?: VendorDashboardView;
    recentBookings?: BookingView[];
    notifications?: NotificationView[];
    recentlyViewed?: RecentlyViewedView[];
}

export const useDashboardData = (user: UserView | null) => {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            if (!user?.id) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data: DashboardData = {};

                // Determine if user is a vendor (you might have this info in user object)
                const isVendor = false; // This should be determined from user data

                // Fetch vendor dashboard data if user is a vendor
                if (isVendor) {
                    try {
                        const vendorDashboardResponse = await apiClient.dashboard.vendoDashboardMetrics({});
                        if (vendorDashboardResponse.status && vendorDashboardResponse.data) {
                            data.vendorDashboard = vendorDashboardResponse.data;
                        }
                    } catch (err) {
                        console.warn('Failed to fetch vendor dashboard data:', err);
                    }
                }

                // Fetch recent bookings
                try {
                    const bookingsResponse = await apiClient.booking.getBookingsByUser({
                        limit: 5,
                        offset: 0,
                    });
                    if (bookingsResponse.status && bookingsResponse.data?.value) {
                        data.recentBookings = bookingsResponse.data.value;
                    }
                } catch (err) {
                    console.warn('Failed to fetch recent bookings:', err);
                }

                // Fetch notifications
                try {
                    const notificationsResponse = await apiClient.notification.getUserNotification({
                        userId: user.id,
                        limit: 5,
                        offset: 0,
                    });
                    if (notificationsResponse.status && notificationsResponse.data?.value) {
                        data.notifications = notificationsResponse.data.value;
                    }
                } catch (err) {
                    console.warn('Failed to fetch notifications:', err);
                }

                // Fetch recently viewed items for customers
                if (!isVendor) {
                    try {
                        const recentlyViewedResponse = await apiClient.recentlyViewed.getRecentlyViewedItems({
                            type: 'service', // or whatever type is appropriate
                        });
                        if (recentlyViewedResponse.status && recentlyViewedResponse.data) {
                            data.recentlyViewed = recentlyViewedResponse.data;
                        }
                    } catch (err) {
                        console.warn('Failed to fetch recently viewed items:', err);
                    }
                }

                setDashboardData(data);
            } catch (err: any) {
                console.error('Error fetching dashboard data:', err);
                const errorMessage = err?.body?.message || err?.message || 'Failed to fetch dashboard data';
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [user?.id]);

    const refetch = async () => {
        if (!user?.id) {
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const data: DashboardData = {};

            // Determine if user is a vendor (you might have this info in user object)
            const isVendor = false; // This should be determined from user data

            // Fetch vendor dashboard data if user is a vendor
            if (isVendor) {
                try {
                    const vendorDashboardResponse = await apiClient.dashboard.vendoDashboardMetrics({});
                    if (vendorDashboardResponse.status && vendorDashboardResponse.data) {
                        data.vendorDashboard = vendorDashboardResponse.data;
                    }
                } catch (err) {
                    console.warn('Failed to fetch vendor dashboard data:', err);
                }
            }

            // Fetch recent bookings
            try {
                const bookingsResponse = await apiClient.booking.getBookingsByUser({
                    limit: 5,
                    offset: 0,
                });
                if (bookingsResponse.status && bookingsResponse.data?.value) {
                    data.recentBookings = bookingsResponse.data.value;
                }
            } catch (err) {
                console.warn('Failed to fetch recent bookings:', err);
            }

            // Fetch notifications
            try {
                const notificationsResponse = await apiClient.notification.getUserNotification({
                    userId: user.id,
                    limit: 5,
                    offset: 0,
                });
                if (notificationsResponse.status && notificationsResponse.data?.value) {
                    data.notifications = notificationsResponse.data.value;
                }
            } catch (err) {
                console.warn('Failed to fetch notifications:', err);
            }

            // Fetch recently viewed items for customers
            if (!isVendor) {
                try {
                    const recentlyViewedResponse = await apiClient.recentlyViewed.getRecentlyViewedItems({
                        type: 'service', // or whatever type is appropriate
                    });
                    if (recentlyViewedResponse.status && recentlyViewedResponse.data) {
                        data.recentlyViewed = recentlyViewedResponse.data;
                    }
                } catch (err) {
                    console.warn('Failed to fetch recently viewed items:', err);
                }
            }

            setDashboardData(data);
        } catch (err: any) {
            console.error('Error fetching dashboard data:', err);
            const errorMessage = err?.body?.message || err?.message || 'Failed to fetch dashboard data';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        dashboardData,
        isLoading,
        error,
        refetch,
    };
};
