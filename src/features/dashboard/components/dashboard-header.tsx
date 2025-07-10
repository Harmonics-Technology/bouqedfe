import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Bell, Menu, Moon, Sun, User, Settings, LogOut, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { UserView } from '@/api/models/UserView';

interface DashboardHeaderProps {
    user: UserView | null;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export function DashboardHeader({
    user,
    theme,
    toggleTheme,
    sidebarOpen,
    setSidebarOpen,
}: DashboardHeaderProps) {
    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        sessionStorage.removeItem('auth_token');
        window.location.href = '/login';
    };

    const getUserInitials = (user: UserView | null) => {
        if (!user) return 'U';
        const firstName = user.firstName || '';
        const lastName = user.lastName || '';
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U';
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4">
                {/* Mobile menu button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden mr-2"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu className="h-5 w-5" />
                </Button>

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <span className="font-bold text-xl text-foreground hidden sm:block">
                        Bouqed
                    </span>
                </div>

                {/* Search bar */}
                <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search services, businesses..."
                            className="pl-10 bg-muted/50"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2 ml-auto">
                    {/* Theme toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="hidden sm:flex"
                    >
                        {theme === 'light' ? (
                            <Moon className="h-4 w-4" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                    </Button>

                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-4 w-4" />
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                        >
                            3
                        </Badge>
                    </Button>

                    {/* User menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src={user?.profilePicture || ''}
                                        alt={user?.fullName || 'User'}
                                    />
                                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                        {getUserInitials(user)}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {user?.fullName || 'User'}
                                    </p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        {user?.email}
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="sm:hidden" onClick={toggleTheme}>
                                {theme === 'light' ? (
                                    <Moon className="mr-2 h-4 w-4" />
                                ) : (
                                    <Sun className="mr-2 h-4 w-4" />
                                )}
                                <span>Toggle theme</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
