import { ServiceDetailPage } from "@/features/services/components/service-detail-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$serviceId")({
    component: ServiceDetailPage,
});
