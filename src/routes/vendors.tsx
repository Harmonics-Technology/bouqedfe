import { createFileRoute } from '@tanstack/react-router'
import { VendorLandingPage } from '@/components/landing/vendor-landing-page'

export const Route = createFileRoute('/vendors')({
  component: VendorLandingPage,
})
