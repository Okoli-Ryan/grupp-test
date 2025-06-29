import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { queryClient } from "./lib/query-client";
import { router } from "./lib/routes";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
