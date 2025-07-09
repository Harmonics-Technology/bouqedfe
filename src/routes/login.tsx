import { createFileRoute } from "@tanstack/react-router";
import Login from "@/features/auth/components/login";
import { ThemeProvider } from "@/contexts/theme-context";

export const Route = createFileRoute("/login")({
	component: () => (
		<ThemeProvider>
			<Login />
		</ThemeProvider>
	),
});
