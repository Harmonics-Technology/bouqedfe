import { useState } from 'react';
import { useTheme } from '@/contexts/theme-context';
import { DashboardHeader } from './dashboard-header';
import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardContent } from './dashboard-content';
import { useDashboardData } from '../hooks/use-dashboard-data';
import { useUserProfile } from '../hooks/use-user-profile';

export function Dashboard() {
    const { theme, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, isLoading: userLoading } = useUserProfile();
    const { dashboardData, isLoading: dashboardLoading } = useDashboardData(user);

    const isLoading = userLoading || dashboardLoading;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <DashboardHeader
                user={user}
                theme={theme}
                toggleTheme={toggleTheme}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex">
                {/* Sidebar */}
                <DashboardSidebar
                    user={user}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Main Content */}
                <main className="flex-1 lg:ml-3">
                    <DashboardContent
                        user={user}
                        dashboardData={dashboardData}
                        isLoading={isLoading}
                    />
                </main>
            </div>
        </div>
    );
}
