import RolesSection from "@/features/settings/roles/roles-section";
import { userRolesLoader } from "@/features/settings/roles/utils/user-roles-loader";
import Dashboard from "@/layout/dashboard";
import NotFoundPage from "@/pages/not-found";
import SettingsPage from "@/pages/settings";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{
				path: "/",
				element: <SettingsPage />,
				children: [
					{
						index: true,
						element: <RolesSection />,
                        loader: userRolesLoader,
					},
					{
						path: "roles",
						element: <RolesSection />,
						loader: userRolesLoader,
					},
					{
						path: "*",
						element: <NotFoundPage />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);
