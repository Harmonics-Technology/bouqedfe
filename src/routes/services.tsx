import { createFileRoute, Outlet } from "@tanstack/react-router";

function ServicesLayout() {
    return <Outlet />;
}

export const Route = createFileRoute("/services")({
    component: ServicesLayout,
});
