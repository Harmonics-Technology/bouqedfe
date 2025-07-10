import { createFileRoute } from '@tanstack/react-router';
import { EmailVerificationDemo } from '@/features/auth/components/email-verification-demo';

export const Route = createFileRoute('/demo/email-verification')({
  component: EmailVerificationDemo,
});
