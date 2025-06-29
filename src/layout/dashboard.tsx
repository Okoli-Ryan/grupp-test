import SidebarHeader from "@/components/sidebar-header";
import { useState } from "react";
import { Outlet } from "react-router";
import { twMerge } from "tailwind-merge";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={twMerge("h-screen bg-white", isOpen && "overflow-hidden")}>
			<div>
				<div className={twMerge("block lg:hidden group lg:border-none border-b border-gray-200", isOpen && "nav-open")}>
					<SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			<div className="flex-1 lg:ml-80">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
