import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, type RouteObject } from "react-router";
import { vi } from "vitest";

export function renderWithRouter({
	routes,
	initialEntries = ["/"],
	queryClient = new QueryClient(),
}: {
	routes: RouteObject[];
	initialEntries?: string[];
	queryClient?: QueryClient;
}) {
	const router = createMemoryRouter(routes, { initialEntries });

	return render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export function mockFetch<T>({ success, response, status = 200 }: { success: boolean; response: T; status?: number }) {
	global.fetch = vi.fn(() =>
		Promise[success ? "resolve" : "reject"](
			success
				? {
						ok: status >= 200 && status < 300,
						status,
						json: () => Promise.resolve(response),
				  }
				: new Error(typeof response === "string" ? response : "Fetch failed")
		)
	) as typeof fetch;
}
