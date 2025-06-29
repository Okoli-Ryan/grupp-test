import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FeaturedCard from "./featured-card";

describe("Featured Card", () => {
	it("renders the featured card initially", () => {
		render(<FeaturedCard />);

		// Check heading
		expect(screen.getByText(/New features available!/i)).toBeInTheDocument();

		// Check buttons
		expect(screen.getByText(/Dismiss/i)).toBeInTheDocument();
		expect(screen.getByText(/What's new/i)).toBeInTheDocument();
	});

	it('hides the card when "Dismiss" is clicked', async () => {
		render(<FeaturedCard />);

		const dismissButton = screen.getByText(/Dismiss/i);
		await userEvent.click(dismissButton);

		expect(screen.queryByText(/New features available!/i)).not.toBeInTheDocument();
	});
});
