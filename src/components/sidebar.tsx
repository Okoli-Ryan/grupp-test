import { BarChart2, CheckSquare, Flag, Home, Layers, LifeBuoy, LogOut, Settings, Users } from "lucide-react";

import Button from "@/ui/button";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import FeaturedCard from "./featured-card/featured-card";
import Searchbar from "./search-bar/search-bar";
import SidebarHeader from "./sidebar-header";

const SidebarRoutes = [
	{ icon: Home, label: "Home" },
	{ icon: BarChart2, label: "Dashboard", badge: "10" },
	{ icon: Layers, label: "Projects" },
	{ icon: CheckSquare, label: "Tasks" },
	{ icon: Flag, label: "Reporting" },
	{ icon: Users, label: "Users" },
	{ icon: LifeBuoy, label: "Support" },
	{ icon: Settings, label: "Settings" },
];

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className="lg:ml-80">
			<div
				className={twMerge(
					"min-h-[100dvh] bg-white flex flex-col justify-between transition-transform duration-200 z-[9999] w-80 fixed top-0 left-0 lg:!translate-x-0",
					isOpen ? "translate-x-0" : "-translate-x-full"
				)}>
				<div className="bg-white border-r border-gray-200 flex flex-col h-full">
					<SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />

					<div className="px-6 mb-6">
						<Searchbar />
					</div>

					<div className="overflow-y-auto slim-scrollbar max-h-[calc(100dvh-260px)] flex-1">
						<div className="flex-1 px-4">
							<nav className="space-y-1">
								{SidebarRoutes.map((item, index) => (
									<Link
										key={index}
										to="#"
										className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50`}>
										<div className="flex items-center gap-3">
											<item.icon className="h-6 w-6 text-gray-500" />
											<span className="text-base font-medium text-gray-700">{item.label}</span>
										</div>
										{item.badge && (
											<span className="bg-gray-100 font-medium text-gray-700 text-sm px-2 py-1 rounded-full">{item.badge}</span>
										)}
									</Link>
								))}
							</nav>
						</div>

						<FeaturedCard />
					</div>
				</div>
				<div className="px-6 ">
					<div className="flex justify-between border-t border-gray-200 mt-auto">
						<div className="flex justify-between flex-1 pb-8 pt-6">
							<div className="flex items-center gap-3">
								<img src="/images/avatar.png" alt="avatar" className="w-10 h-10 rounded-full"></img>
								<div>
									<div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
									<div className="text-sm text-gray-500">olivia@untitledui.com</div>
								</div>
							</div>
							<Button variant="ghost">
								<LogOut className="h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => setIsOpen(false)}
				className={twMerge("lg:hidden fixed inset-0 bg-black transition-opacity -z-10 duration-200 opacity-0", isOpen && "opacity-25 z-[998]")}></div>
		</div>
	);
};

export default Sidebar;
