import { createMemoryHistory, createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Header from "@/components/header";

// Create a simple test wrapper component that includes the Header
function TestApp() {
	return (
		<div>
			<Header />
			<div>Test content</div>
		</div>
	);
}

// Mock the router setup for testing
const rootRoute = createRootRoute({
	component: TestApp,
});

const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: () => <div>Home Page</div>,
});

const tanstackQueryRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/demo/tanstack-query",
	component: () => <div>TanStack Query Page</div>,
});

const tableRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/demo/table",
	component: () => <div>TanStack Table Page</div>,
});

const sentryRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/demo/sentry",
	component: () => <div>Sentry Testing Page</div>,
});

const routeTree = rootRoute.addChildren([
	homeRoute,
	tanstackQueryRoute,
	tableRoute,
	sentryRoute,
]);

// Helper function to render component with router context
async function renderWithRouter(initialPath = "/") {
	const memoryHistory = createMemoryHistory({
		initialEntries: [initialPath],
	});

	const router = createRouter({
		routeTree,
		history: memoryHistory,
	});

	let app;

	// Wait for the router to be ready
	await act(async () => {
		await router.load()
		app = render(<RouterProvider router={router} />);
	});

	return app;
}

describe("header", () => {
	it("renders the header component correctly", async () => {
		await renderWithRouter();

		const header = screen.getByRole("banner");
		expect(header).toBeInTheDocument();
	});

	it("renders all navigation links with correct text", async () => {
		await renderWithRouter();

		expect(screen.getByRole("link", { name: /home bold/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /tanstack query/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /tanstack table/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /sentry testing/i })).toBeInTheDocument();
	});

	it("renders links with correct href attributes", async () => {
		await renderWithRouter();

		const homeLink = screen.getByRole("link", { name: /home bold/i });
		const queryLink = screen.getByRole("link", { name: /tanstack query/i });
		const tableLink = screen.getByRole("link", { name: /tanstack table/i });
		const sentryLink = screen.getByRole("link", { name: /sentry testing/i });

		expect(homeLink).toHaveAttribute("href", "/");
		expect(queryLink).toHaveAttribute("href", "/demo/tanstack-query");
		expect(tableLink).toHaveAttribute("href", "/demo/table");
		expect(sentryLink).toHaveAttribute("href", "/demo/sentry");
	});
});
