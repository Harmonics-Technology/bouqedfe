import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    Calendar,
    Clock,
    TrendingUp,
    Users,
    Star,
    MapPin,
    ArrowRight,
    Plus,
    Eye,
    Heart,
    ShoppingBag,
} from 'lucide-react';
import type { UserView } from '@/api/models/UserView';
import type { VendorDashboardView } from '@/api/models/VendorDashboardView';
import { DashboardStats } from './dashboard-stats';
import { RecentBookings } from './recent-bookings';
import { RecentlyViewed } from './recently-viewed';
import { QuickActions } from './quick-actions';

interface DashboardContentProps {
    user: UserView | null;
    dashboardData: any;
    isLoading: boolean;
}

export function DashboardContent({
    user,
    dashboardData,
    isLoading,
}: DashboardContentProps) {
    if (isLoading) {
        return (
            <div className="p-6">
                <div className="animate-pulse space-y-6">
                    <div className="h-8 bg-muted rounded w-1/3"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-32 bg-muted rounded"></div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="h-96 bg-muted rounded"></div>
                        <div className="h-96 bg-muted rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    const isVendor = false; // Determine from user data
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    return (
        <div className="p-6 space-y-6">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        {greeting}, {user?.firstName || 'User'}! 👋
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        {isVendor
                            ? "Here's what's happening with your business today."
                            : "Discover amazing services and manage your bookings."
                        }
                    </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Plus className="mr-2 h-4 w-4" />
                        {isVendor ? 'Add Service' : 'Book Service'}
                    </Button>
                </div>
            </div>

            {/* Dashboard Stats */}
            <DashboardStats
                isVendor={isVendor}
                dashboardData={dashboardData}
            />

            {/* Quick Actions */}
            <QuickActions isVendor={isVendor} />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <RecentBookings
                    isVendor={isVendor}
                    bookings={dashboardData?.recentBookings || []}
                />

                {/* Recently Viewed or Top Services */}
                {isVendor ? (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <TrendingUp className="mr-2 h-5 w-5" />
                                Top Services
                            </CardTitle>
                            <CardDescription>
                                Your most popular services this month
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {dashboardData?.topServices?.slice(0, 5).map((service: any, index: number) => (
                                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium">{service.name || 'Service Name'}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {service.bookings || 0} bookings
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-green-600">
                                            ${service.revenue || 0}
                                        </p>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                                            {service.rating || 0}
                                        </div>
                                    </div>
                                </div>
                            )) || (
                                <div className="text-center py-8 text-muted-foreground">
                                    <TrendingUp className="mx-auto h-12 w-12 mb-4 opacity-50" />
                                    <p>No service data available yet</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ) : (
                    <RecentlyViewed />
                )}
            </div>

            {/* Additional Content for Customers */}
            {!isVendor && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Popular Categories */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                Popular Categories
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { name: 'Beauty & Wellness', count: 245, color: 'bg-pink-500' },
                                { name: 'Home Services', count: 189, color: 'bg-blue-500' },
                                { name: 'Fitness', count: 156, color: 'bg-green-500' },
                                { name: 'Education', count: 134, color: 'bg-purple-500' },
                            ].map((category, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                                        <span className="text-sm font-medium">{category.name}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {category.count} services
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Saved Items */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Heart className="mr-2 h-5 w-5" />
                                Saved Items
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-8 text-muted-foreground">
                                <Heart className="mx-auto h-12 w-12 mb-4 opacity-50" />
                                <p className="mb-2">No saved items yet</p>
                                <Button variant="outline" size="sm">
                                    Browse Services
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Total Bookings</span>
                                <span className="font-semibold">12</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Completed</span>
                                <span className="font-semibold text-green-600">8</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Upcoming</span>
                                <span className="font-semibold text-blue-600">3</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Cancelled</span>
                                <span className="font-semibold text-red-600">1</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
