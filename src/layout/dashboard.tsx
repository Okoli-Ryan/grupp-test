import SidebarHeader from "@/components/sidebar-header";
import { useState } from "react";
import { Outlet } from "react-router";
import { twMerge } from "tailwind-merge";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="h-screen bg-white">
			<div>
				<div className={twMerge("block lg:hidden group", isOpen && "nav-open")}>
					<SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			{/* <div className="lg:hidden">
				<MobileHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
			</div> */}

			{/* {isMobileMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
					<div className="bg-white w-80 h-full">
						<Sidebar onClose={() => setIsMobileMenuOpen(false)} />
					</div>
				</div>
			)} */}
			<div className="flex-1 lg:ml-80">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
