import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserAvatarGroup } from "./user-avatar-group";

const Dummy_Images = ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png", "/avatar5.png", "/avatar6.png"];

describe("UserAvatarGroup", () => {
	it('shows "+X" badge when total exceeds 5', () => {
		render(<UserAvatarGroup total={8} images={Dummy_Images} />);
		expect(screen.getByText("+2")).toBeInTheDocument();
	});

	it("does not show '+X' badge if total <= 5", () => {
		const images = ["/avatar1.png", "/avatar2.png"];
		render(<UserAvatarGroup total={2} images={images} />);
		expect(screen.queryByText(/\+\d+/)).not.toBeInTheDocument();
	});

	it("renders nothing if total is 0", () => {
		render(<UserAvatarGroup total={0} images={[]} />);
		expect(screen.queryAllByRole("img")).toHaveLength(0);
		expect(screen.queryByText(/\+\d+/)).not.toBeInTheDocument();
	});

	it("handles total > 5 when images less than total", () => {
		const images = ["/avatar1.png", "/avatar2.png"];
		render(<UserAvatarGroup total={6} images={images} />);
		const avatars = screen.getAllByRole("img");
		expect(avatars).toHaveLength(2);
		expect(screen.getByText("+4")).toBeInTheDocument();
	});
});
