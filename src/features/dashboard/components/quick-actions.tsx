import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Plus,
    Search,
    Calendar,
    Heart,
    Settings,
    BarChart3,
    Users,
    MessageSquare,
    Star,
    Zap,
} from 'lucide-react';

interface QuickActionsProps {
    isVendor: boolean;
}

export function QuickActions({ isVendor }: QuickActionsProps) {
    const customerActions = [
        {
            icon: Search,
            label: 'Browse Services',
            description: 'Find services near you',
            color: 'bg-blue-500 hover:bg-blue-600',
            href: '/services',
        },
        {
            icon: Calendar,
            label: 'Book Appointment',
            description: 'Schedule a new service',
            color: 'bg-green-500 hover:bg-green-600',
            href: '/book',
        },
        {
            icon: Heart,
            label: 'View Saved',
            description: 'Your favorite services',
            color: 'bg-pink-500 hover:bg-pink-600',
            href: '/saved',
        },
        {
            icon: Star,
            label: 'Leave Review',
            description: 'Rate your experience',
            color: 'bg-yellow-500 hover:bg-yellow-600',
            href: '/reviews',
        },
    ];

    const vendorActions = [
        {
            icon: Plus,
            label: 'Add Service',
            description: 'Create new service offering',
            color: 'bg-blue-500 hover:bg-blue-600',
            href: '/services/add',
        },
        {
            icon: Calendar,
            label: 'Manage Bookings',
            description: 'View and update appointments',
            color: 'bg-green-500 hover:bg-green-600',
            href: '/bookings',
        },
        {
            icon: BarChart3,
            label: 'View Analytics',
            description: 'Business performance insights',
            color: 'bg-purple-500 hover:bg-purple-600',
            href: '/analytics',
        },
        {
            icon: Users,
            label: 'Customer Management',
            description: 'Manage your customers',
            color: 'bg-orange-500 hover:bg-orange-600',
            href: '/customers',
        },
    ];

    const actions = isVendor ? vendorActions : customerActions;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Quick Actions
                </CardTitle>
                <CardDescription>
                    {isVendor
                        ? 'Manage your business efficiently'
                        : 'Get things done quickly'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {actions.map((action, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-all duration-200"
                            asChild
                        >
                            <a href={action.href}>
                                <div className={`p-3 rounded-full ${action.color} text-white`}>
                                    <action.icon className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <p className="font-medium text-sm">{action.label}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {action.description}
                                    </p>
                                </div>
                            </a>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
