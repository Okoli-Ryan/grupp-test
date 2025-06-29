import { Check } from "lucide-react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = ({ className, ...props }: React.ComponentPropsWithoutRef<"input">) => {
	const id = useId();

	return (
		<div className="relative">
			<input id={id} type="checkbox" className={"sr-only peer"} {...props} />
			<label
				htmlFor={id}
				className={twMerge(
					"size-full rounded-sm border-2 flex items-center justify-center cursor-pointer",
					"peer-checked:bg-purple-600 peer-checked:border-purple-600",
					"border-gray-300 bg-white",
					className
				)}>
				<Check className="size-3 mx-auto text-white peer-has-checked:opacity-100 transition-opacity" strokeWidth={4} />
			</label>
		</div>
	);
};

export default Checkbox;
