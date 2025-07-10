import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Home,
    Calendar,
    ShoppingBag,
    Heart,
    Bell,
    Settings,
    User,
    Store,
    BarChart3,
    X,
    Briefcase,
    Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { UserView } from '@/api/models/UserView';

interface DashboardSidebarProps {
    user: UserView | null;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export function DashboardSidebar({
    user,
    sidebarOpen,
    setSidebarOpen,
}: DashboardSidebarProps) {
    const getUserInitials = (user: UserView | null) => {
        if (!user) return 'U';
        const firstName = user.firstName || '';
        const lastName = user.lastName || '';
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U';
    };

    // Determine if user is a vendor (this would typically come from user data)
    const isVendor = false; // You can determine this from user data or API

    const customerNavItems = [
        { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
        { icon: Calendar, label: 'My Bookings', href: '/bookings', badge: '3' },
        { icon: ShoppingBag, label: 'Browse Services', href: '/services' },
        { icon: Heart, label: 'Saved Items', href: '/saved' },
        { icon: Clock, label: 'Recently Viewed', href: '/recent' },
        { icon: Bell, label: 'Notifications', href: '/notifications', badge: '5' },
    ];

    const vendorNavItems = [
        { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
        { icon: Store, label: 'My Business', href: '/business' },
        { icon: Calendar, label: 'Bookings', href: '/bookings', badge: '12' },
        { icon: BarChart3, label: 'Analytics', href: '/analytics' },
        { icon: Briefcase, label: 'Services', href: '/services' },
        { icon: Bell, label: 'Notifications', href: '/notifications', badge: '8' },
    ];

    const navItems = isVendor ? vendorNavItems : customerNavItems;

    return (
        <>
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed top-0 left-0 z-50 h-full w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b lg:hidden">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="font-bold text-xl text-foreground">Bouqed</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* User info */}
                    <div className="p-4 border-b">
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage
                                    src={user?.profilePicture || ''}
                                    alt={user?.fullName || 'User'}
                                />
                                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                    {getUserInitials(user)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                    {user?.fullName || 'User'}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                    {user?.email}
                                </p>
                                {isVendor && (
                                    <Badge variant="secondary" className="mt-1 text-xs">
                                        Vendor
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant={item.active ? 'default' : 'ghost'}
                                className={cn(
                                    'w-full justify-start h-10',
                                    item.active && 'bg-primary text-primary-foreground'
                                )}
                                asChild
                            >
                                <a href={item.href}>
                                    <item.icon className="mr-3 h-4 w-4" />
                                    <span className="flex-1 text-left">{item.label}</span>
                                    {item.badge && (
                                        <Badge
                                            variant={item.active ? 'secondary' : 'default'}
                                            className="ml-auto text-xs"
                                        >
                                            {item.badge}
                                        </Badge>
                                    )}
                                </a>
                            </Button>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start h-10"
                            asChild
                        >
                            <a href="/profile">
                                <User className="mr-3 h-4 w-4" />
                                Profile
                            </a>
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start h-10"
                            asChild
                        >
                            <a href="/settings">
                                <Settings className="mr-3 h-4 w-4" />
                                Settings
                            </a>
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
}
