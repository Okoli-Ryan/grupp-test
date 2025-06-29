import type { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge';

const Input = ({className, icon, ...props}: ComponentProps<"input"> & { icon?: React.ReactNode }) => {
	return (
		<div className="relative">
			{icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</div>}
			<input
				className={twMerge(
					"w-full pr-4 py-2.5 bg-white border text-gray-900 transition-all duration-200 border-gray-300 text-base active:border-primary-300 rounded-lg active:shadow-sm active:ring-4 active:ring-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-primary-300",
					icon ? "pl-10" : "pl-4",
					className
				)}
				{...props}
			/>
		</div>
	);
};

export default Input;
