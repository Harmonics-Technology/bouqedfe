import VendorRegistration from '@/features/auth/components/vendor-registration';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/register-vendor')({
    component: VendorRegistration,
});
