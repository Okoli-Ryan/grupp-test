import { renderWithRouter } from "@/lib/test-utils";
import type { Role } from "@/types/role";
import { screen, waitFor, within } from "@testing-library/react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UserRolesTable from "./user-roles-table";

const DummyRoles = [
	{
		id: 1,
		name: "Admin",
		type: "System",
		date: "2025-06-01",
		status: "Active",
		users: ["Alice", "Bob", "Charlie"],
		totalUser: 3,
	},
] as Role[];

vi.mock("sonner", () => ({
	toast: {
		error: vi.fn(),
	},
}));

describe("User-Roles Table", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("calls toast.error if loader returns an error", async () => {
		renderWithRouter({
			routes: [
				{
					path: "/",
					element: <UserRolesTable />,
					loader: () => ({
						roles: [],
						error: "Something went wrong!",
					}),
				},
			],
		});

		await waitFor(() => {
			expect(toast.error).toHaveBeenCalledWith("Something went wrong!");
		});

		const table = await screen.findByRole("table");
		const rows = within(table).queryAllByRole("row");
		expect(rows).toHaveLength(1); // Only header row should be present
	});

	it("displays table data if successful", async () => {
		renderWithRouter({
			routes: [
				{
					path: "/",
					element: <UserRolesTable />,
					loader: () => ({
						roles: DummyRoles,
						error: undefined,
					}),
				},
			],
		});

		await waitFor(() => {
			expect(toast.error).not.toHaveBeenCalled();
		});

		const table = await screen.findByRole("table");
		const rows = within(table).queryAllByRole("row");
		expect(rows).toHaveLength(2); // Header row + 1 data row

		const systemType = within(table).getByText("System");
		expect(systemType).toBeInTheDocument();
	});
});
