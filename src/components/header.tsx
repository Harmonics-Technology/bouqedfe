import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/" title="home">Home Bold</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/tanstack-query" title="tanstack-query">TanStack Query</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/table">TanStack Table</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/sentry">Sentry Testing</Link>
				</div>
			</nav>
		</header>
	);
}
