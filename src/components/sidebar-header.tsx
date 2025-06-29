import { AlignLeft } from "lucide-react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const SidebarHeader = ({ setIsOpen, isOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className="p-4 lg:p-6 items-center flex justify-between bg-white">
			<Link to="/" className="flex items-center gap-[10px]">
				<img src="/images/logo.svg" alt="Logo" />
				<span className="text-xl font-semibold text-gray-900">Untitled UI</span>
			</Link>
			<button
				className={twMerge("p-2 text-gray-500 hover:text-gray-700 lg:hidden", isOpen && "group-[.nav-open]:hidden")}
				onClick={() => setIsOpen((prev) => !prev)}>
				<AlignLeft className="h-6 w-6" />
			</button>
		</div>
	);
};

export default SidebarHeader;
