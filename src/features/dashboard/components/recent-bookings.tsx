import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Calendar,
    Clock,
    MapPin,
    User,
    ArrowRight,
    CheckCircle,
    XCircle,
    AlertCircle,
    MoreHorizontal,
} from 'lucide-react';
import type { BookingView } from '@/api/models/BookingView';

interface RecentBookingsProps {
    isVendor: boolean;
    bookings: BookingView[];
}

export function RecentBookings({ isVendor, bookings }: RecentBookingsProps) {
    // Mock data for demonstration
    const mockBookings = [
        {
            id: '1',
            serviceName: 'Hair Styling',
            customerName: 'Sarah Johnson',
            vendorName: 'Beauty Salon Pro',
            date: '2024-01-15',
            time: '10:00 AM',
            status: 'confirmed',
            price: 85,
            location: 'Downtown Salon',
        },
        {
            id: '2',
            serviceName: 'Home Cleaning',
            customerName: 'Mike Chen',
            vendorName: 'CleanPro Services',
            date: '2024-01-16',
            time: '2:00 PM',
            status: 'pending',
            price: 120,
            location: '123 Main St',
        },
        {
            id: '3',
            serviceName: 'Personal Training',
            customerName: 'Emma Wilson',
            vendorName: 'FitLife Gym',
            date: '2024-01-17',
            time: '6:00 AM',
            status: 'completed',
            price: 60,
            location: 'FitLife Gym',
        },
        {
            id: '4',
            serviceName: 'Car Wash',
            customerName: 'David Brown',
            vendorName: 'AutoShine',
            date: '2024-01-18',
            time: '11:30 AM',
            status: 'cancelled',
            price: 25,
            location: 'Mobile Service',
        },
    ];

    const displayBookings = bookings.length > 0 ? bookings : mockBookings;

    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
                return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20">Confirmed</Badge>;
            case 'pending':
                return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20">Pending</Badge>;
            case 'completed':
                return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20">Completed</Badge>;
            case 'cancelled':
                return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20">Cancelled</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'confirmed':
                return <CheckCircle className="h-4 w-4 text-blue-600" />;
            case 'pending':
                return <AlertCircle className="h-4 w-4 text-yellow-600" />;
            case 'completed':
                return <CheckCircle className="h-4 w-4 text-green-600" />;
            case 'cancelled':
                return <XCircle className="h-4 w-4 text-red-600" />;
            default:
                return <Clock className="h-4 w-4 text-gray-600" />;
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Recent Bookings
                </CardTitle>
                <CardDescription>
                    {isVendor
                        ? 'Latest bookings for your services'
                        : 'Your recent service bookings'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                {displayBookings.length > 0 ? (
                    <div className="space-y-4">
                        {displayBookings.slice(0, 5).map((booking: any) => (
                            <div
                                key={booking.id}
                                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                                        {getStatusIcon(booking.status)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-medium text-foreground">
                                                {booking.serviceName}
                                            </h4>
                                            {getStatusBadge(booking.status)}
                                        </div>
                                        <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                                            <div className="flex items-center">
                                                <User className="mr-1 h-3 w-3" />
                                                {isVendor ? booking.customerName : booking.vendorName}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="mr-1 h-3 w-3" />
                                                {booking.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="mr-1 h-3 w-3" />
                                                {booking.time}
                                            </div>
                                        </div>
                                        {booking.location && (
                                            <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                                <MapPin className="mr-1 h-3 w-3" />
                                                {booking.location}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="text-right">
                                        <p className="font-semibold text-foreground">
                                            ${booking.price}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <div className="pt-4 border-t">
                            <Button variant="outline" className="w-full">
                                View All Bookings
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        <Calendar className="mx-auto h-12 w-12 mb-4 opacity-50" />
                        <p className="mb-2">No bookings yet</p>
                        <Button variant="outline" size="sm">
                            {isVendor ? 'Promote Your Services' : 'Browse Services'}
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
