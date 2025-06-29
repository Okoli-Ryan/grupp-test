import Input from "@/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const PEOPLE = ["Phoenix Baker", "Olivia Rhye", "Lana Steiner", "Demi Wilkinson", "Candice Wu"];

const Searchbar = () => {
	const [query, setQuery] = useState("");
	const [focused, setFocused] = useState(false);

	const filteredPeople = PEOPLE.filter((name) => name.toLowerCase().includes(query.toLowerCase()));

	const shouldShowDropdown = focused && filteredPeople.length > 0;

	return (
		<div className="relative">
			<Input
				placeholder="Olivia Rhye"
				icon={<Search className="h-5 w-5 text-gray-400" />}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setTimeout(() => setFocused(false), 100)} // delay for click
			/>

			{shouldShowDropdown && (
				<div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
					<div className="p-1">
						{filteredPeople.map((name) => (
							<div key={name} className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 rounded cursor-pointer">
								{name}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Searchbar;
