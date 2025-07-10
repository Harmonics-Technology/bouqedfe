import { createFileRoute, Outlet } from '@tanstack/react-router';
import UserRegistration from '@/features/auth/components/user-registration';

function RegisterLayout() {
  // Check if we're on a child route (like /register/verify/token)
  const isChildRoute = window.location.pathname.includes('/register/verify/');

  if (isChildRoute) {
    return <Outlet />;
  }

  return <UserRegistration />;
}

export const Route = createFileRoute('/register')({
  component: RegisterLayout,
});
