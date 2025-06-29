// RoleSelector.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import UserRolesActiveRole, { Dummy_Roles } from "./user-roles-active-role";

describe("Role Selector", () => {
	it("selects a role when clicked", async () => {
		render(<UserRolesActiveRole />);

		const superAdminRole = screen.getByTestId(`role-${Dummy_Roles[0].id}`);
		const developerAdminRole = screen.getByTestId(`role-${Dummy_Roles[1].id}`);

		expect(superAdminRole).toBeInTheDocument();
		expect(developerAdminRole).toBeInTheDocument();

		// Initially selected
		expect(superAdminRole).toHaveClass("role-selected");
		expect(developerAdminRole).not.toHaveClass("role-selected");

		// Click the editor role
		await userEvent.click(developerAdminRole);

		// Now it should have selected styles
		expect(superAdminRole).not.toHaveClass("role-selected");
		expect(developerAdminRole).toHaveClass("role-selected");
	});
});
