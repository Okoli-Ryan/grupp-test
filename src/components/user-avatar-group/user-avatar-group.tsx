export const UserAvatarGroup = ({ total, images = [] }: { total: number; images: string[] }) => {
	const displayCount = Math.min(total, 5);
	const hasMore = total > 5;

	return (
		<div className="flex -space-x-2 w-max">
			{images.slice(0, displayCount).map((image, i) => (
				<img key={i} src={image} className="w-8 h-8 rounded-full border-2 border-white" />
			))}
			{hasMore && (
				<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
					+{total - images.length}
				</div>
			)}
		</div>
	);
};
