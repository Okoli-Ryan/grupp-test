import { useState } from "react";

const FeaturedCard = () => {
	const [isOpen, setIsOpen] = useState(true);

	if (!isOpen) return null;

	return (
		<div className="p-4">
			<div className="bg-gray-50 rounded-lg p-4 ">
				<div className="mb-4">
					<h3 className="text-sm font-medium text-gray-900 mb-1">New features available!</h3>
					<p className="text-sm text-gray-500">Check out the new dashboard view. Pages now load faster.</p>
				</div>
				<img src="/images/woman.png" alt="woman" className="w-full h-auto object-contain" />
				<div className="flex gap-3 text-sm mt-4">
					<button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
						Dismiss
					</button>
					<button className="text-primary-700 hover:text-purple-500 font-medium">What's new?</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
