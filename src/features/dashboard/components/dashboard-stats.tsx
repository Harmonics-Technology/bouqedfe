import { Card, CardContent } from '@/components/ui/card';
import {
    Calendar,
    Clock,
    ShoppingBag,
    Heart,
    CheckCircle,
    XCircle,
    AlertCircle,
} from 'lucide-react';
import type { VendorDashboardView } from '@/api/models/VendorDashboardView';

interface DashboardStatsProps {
    isVendor: boolean;
    dashboardData: VendorDashboardView | null;
}

export function DashboardStats({ isVendor, dashboardData }: DashboardStatsProps) {
    if (isVendor) {
        // Vendor stats
        const stats = [
            {
                title: 'Total Orders',
                value: dashboardData?.totalOrders || 0,
                icon: ShoppingBag,
                color: 'text-blue-600',
                bgColor: 'bg-blue-100 dark:bg-blue-900/20',
                change: '+12%',
                changeType: 'positive' as const,
            },
            {
                title: 'Active Orders',
                value: dashboardData?.activeOrders || 0,
                icon: Clock,
                color: 'text-orange-600',
                bgColor: 'bg-orange-100 dark:bg-orange-900/20',
                change: '+5%',
                changeType: 'positive' as const,
            },
            {
                title: 'In Progress',
                value: dashboardData?.inProgressOrders || 0,
                icon: AlertCircle,
                color: 'text-yellow-600',
                bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
                change: '+8%',
                changeType: 'positive' as const,
            },
            {
                title: 'Cancelled',
                value: dashboardData?.cancelledOrders || 0,
                icon: XCircle,
                color: 'text-red-600',
                bgColor: 'bg-red-100 dark:bg-red-900/20',
                change: '-2%',
                changeType: 'negative' as const,
            },
        ];

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {stat.title}
                                    </p>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <div className="flex items-center mt-1">
                                        <span
                                            className={`text-xs font-medium ${
                                                stat.changeType === 'positive'
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                            }`}
                                        >
                                            {stat.change}
                                        </span>
                                        <span className="text-xs text-muted-foreground ml-1">
                                            from last month
                                        </span>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    } else {
        // Customer stats
        const stats = [
            {
                title: 'Total Bookings',
                value: 12,
                icon: Calendar,
                color: 'text-blue-600',
                bgColor: 'bg-blue-100 dark:bg-blue-900/20',
                description: 'All time bookings',
            },
            {
                title: 'Upcoming',
                value: 3,
                icon: Clock,
                color: 'text-orange-600',
                bgColor: 'bg-orange-100 dark:bg-orange-900/20',
                description: 'Next 30 days',
            },
            {
                title: 'Completed',
                value: 8,
                icon: CheckCircle,
                color: 'text-green-600',
                bgColor: 'bg-green-100 dark:bg-green-900/20',
                description: 'Successfully completed',
            },
            {
                title: 'Saved Items',
                value: 15,
                icon: Heart,
                color: 'text-pink-600',
                bgColor: 'bg-pink-100 dark:bg-pink-900/20',
                description: 'Favorite services',
            },
        ];

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {stat.title}
                                    </p>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {stat.description}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }
}
