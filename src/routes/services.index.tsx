import { ServiceSearchPage } from "@/features/services/components/service-search-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
    component: ServiceSearchPage,
});
