import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
	variant?: "ghost" | "outline";
};

const variants = {
	ghost: "text-gray-500 hover:text-gray-600 p-2",
	outline: "px-4 py-2 bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-50",
};

const base = "flex items-center gap-2 text-sm font-medium rounded-lg focus:outline-none disabled:opacity-30 disabled:!cursor-not-allowed";

export const Button = ({ className, children, variant = "ghost", ...props }: ButtonProps) => {
	return (
		<button className={twMerge(base, variants[variant], className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
