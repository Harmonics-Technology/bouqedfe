import { createFileRoute } from '@tanstack/react-router';
import { EmailVerification } from '@/features/auth/components/email-verification';

export const Route = createFileRoute('/register/verify/$token')({
  component: EmailVerification,
});
