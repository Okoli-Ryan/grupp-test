import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface Tab {
	id: string;
	label: string;
	disabled?: boolean;
}

interface TabsProps {
	tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
	return (
		<div className="overflow-x-auto w-max">
			<div className="flex border border-gray-300 rounded-lg shadow-sm min-w-max overflow-hidden max-w-max">
				{tabs.map((tab) => {
					return (
						<NavLink
							to={tab.id}
							key={tab.id}
							className={({ isActive }) =>
								twMerge(
									"px-4 py-2.5 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-colors duration-150",
									isActive ? "bg-gray-50 text-gray-800" : " bg-white text-gray-700 hover:bg-gray-50",
									tab.disabled && "pointer-events-none"
								)
							}>
							{tab.label}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
