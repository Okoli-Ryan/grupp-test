import { NavLink } from "react-router";

interface Tab {
	id: string;
	label: string;
	active?: boolean;
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
							className={({ isActive }) => `
                px-4 py-2.5 text-sm font-medium border-r border-gray-300 last:border-r-0
                ${isActive ? "bg-gray-50 text-gray-800" : "bg-white text-gray-700 hover:bg-gray-50"}
                transition-colors duration-150
              `}>
							{tab.label}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
