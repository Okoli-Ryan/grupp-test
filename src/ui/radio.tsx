import type { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge';

const Radio = ({ className, ...props }: ComponentProps<"input"> & { icon?: React.ReactNode }) => {
	return (
		<input
			type="radio"
			className={twMerge(
				"appearance-none relative w-4 h-4 border border-gray-300 rounded-full focus:outline-none",
				"checked:border-primary-600",
				"after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full",
				"checked:after:w-1.5 checked:after:h-1.5 checked:after:bg-primary-600",
				className
			)}
			{...props}
		/>
	);
};

export default Radio;
