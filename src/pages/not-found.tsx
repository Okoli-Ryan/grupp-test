import { Link } from "react-router";

const NotFoundPage = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-800">404</h1>
				<p className="text-xl text-gray-600 mt-4">Page Not Found</p>
				<Link to="/" className="text-blue-500 hover:underline mt-6 inline-block">
					Go back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
