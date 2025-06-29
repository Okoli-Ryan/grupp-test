import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import UserRolesConnectedEmail from "./user-roles-connected-email";

describe("User-Roles ConnectedEmail", () => {
	it('shows email input if "alternative" option is selected', async () => {
		render(<UserRolesConnectedEmail />);

        // Check if the email input is not visible initially
		const emailInput = screen.getByPlaceholderText("billing@untitledui.com");
		expect(emailInput).toBeInTheDocument();

		const myAccountRadio = screen.getByLabelText(/my account email/i);
		await userEvent.click(myAccountRadio);

		expect(screen.queryByRole("textbox", { name: /email/i })).not.toBeInTheDocument();

		const altRadio = screen.getByLabelText(/an alternative email/i);
		await userEvent.click(altRadio);

		// Input should be back
		const visibleInput = screen.getByPlaceholderText("billing@untitledui.com");
		expect(visibleInput).toBeInTheDocument();
	});
});
