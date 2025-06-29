import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Searchbar, { People } from "./search-bar";

describe("Searchbar", () => {
	it("renders the input", () => {
		render(<Searchbar />);
		expect(screen.getByPlaceholderText(People[0])).toBeInTheDocument();
	});

	it("filters and displays results based on query", async () => {
		render(<Searchbar />);
		const input = screen.getByPlaceholderText(People[0])

		await userEvent.type(input, "olivia");

		expect(screen.getByText(People[0])).toBeInTheDocument();
		expect(screen.queryByText(People[1])).not.toBeInTheDocument();
	});

	it("shows dropdown on focus and hides on blur", async () => {
		render(<Searchbar />);
		const input = screen.getByPlaceholderText(People[0])

		input.focus();
		await userEvent.type(input, "phoe");

		expect(screen.getByText(People[1])).toBeInTheDocument();

		fireEvent.blur(input);

		await waitFor(() => {
			expect(screen.queryByText(People[1])).not.toBeInTheDocument();
		});
	});

	it("does not show dropdown if no matches", async () => {
		render(<Searchbar />);
		const input = screen.getByPlaceholderText(People[0])

		await userEvent.type(input, "xyz");

		expect(screen.queryByText(/phoenix|olivia|lana/i)).not.toBeInTheDocument();
	});
});
