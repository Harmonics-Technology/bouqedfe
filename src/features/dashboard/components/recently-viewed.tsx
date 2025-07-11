import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Eye,
    Star,
    MapPin,
    Clock,
    ArrowRight,
    Heart,
} from 'lucide-react';

export function RecentlyViewed() {
    // Mock data for recently viewed services
    const recentlyViewed = [
        {
            id: '1',
            name: 'Premium Hair Styling',
            vendor: 'Glamour Salon',
            rating: 4.8,
            reviews: 124,
            price: 85,
            location: 'Downtown',
            image: '/api/placeholder/60/60',
            category: 'Beauty',
            lastViewed: '2 hours ago',
        },
        {
            id: '2',
            name: 'Deep House Cleaning',
            vendor: 'CleanPro Services',
            rating: 4.9,
            reviews: 89,
            price: 120,
            location: 'Citywide',
            image: '/api/placeholder/60/60',
            category: 'Home',
            lastViewed: '1 day ago',
        },
        {
            id: '3',
            name: 'Personal Training Session',
            vendor: 'FitLife Gym',
            rating: 4.7,
            reviews: 156,
            price: 60,
            location: 'Fitness District',
            image: '/api/placeholder/60/60',
            category: 'Fitness',
            lastViewed: '2 days ago',
        },
        {
            id: '4',
            name: 'Mobile Car Detailing',
            vendor: 'AutoShine Pro',
            rating: 4.6,
            reviews: 78,
            price: 45,
            location: 'Mobile Service',
            image: '/api/placeholder/60/60',
            category: 'Automotive',
            lastViewed: '3 days ago',
        },
    ];

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            Beauty: 'bg-pink-100 text-pink-800 dark:bg-pink-900/20',
            Home: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20',
            Fitness: 'bg-green-100 text-green-800 dark:bg-green-900/20',
            Automotive: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20',
        };
        return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20';
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Eye className="mr-2 h-5 w-5" />
                    Recently Viewed
                </CardTitle>
                <CardDescription>
                    Services you've looked at recently
                </CardDescription>
            </CardHeader>
            <CardContent>
                {recentlyViewed.length > 0 ? (
                    <div className="space-y-4">
                        {recentlyViewed.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
                                    {service.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h4 className="font-medium text-foreground truncate">
                                            {service.name}
                                        </h4>
                                        <Badge className={getCategoryColor(service.category)}>
                                            {service.category}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {service.vendor}
                                    </p>
                                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                        <div className="flex items-center">
                                            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                                            {service.rating} ({service.reviews})
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {service.location}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {service.lastViewed}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-right">
                                        <p className="font-semibold text-foreground">
                                            ${service.price}
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <div className="pt-4 border-t">
                            <Button variant="outline" className="w-full">
                                View All History
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        <Eye className="mx-auto h-12 w-12 mb-4 opacity-50" />
                        <p className="mb-2">No recently viewed services</p>
                        <Button variant="outline" size="sm">
                            Browse Services
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
