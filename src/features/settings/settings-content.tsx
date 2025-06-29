import Tabs from "@/components/tabs";
import { Outlet } from "react-router";

const TabList = [
	{ id: "details", label: "My details", disabled: true },
	{ id: "profile", label: "Profile", disabled: true },
	{ id: "password", label: "Password", disabled: true },
	{ id: "team", label: "Team", disabled: true },
	{ id: "plan", label: "Plan", disabled: true },
	{ id: "roles", label: "Roles" },
	{ id: "notifications", label: "Notifications", disabled: true },
	{ id: "integrations", label: "Integrations", disabled: true },
	{ id: "api", label: "API", disabled: true },
];

const SettingsContent = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="lg:ml-0">
				{/* Header Section */}
				<div className="bg-gray-50 px-4 lg:px-8 pt-8 pb-6">
					<div className="max-w-7xl mx-auto">
						{/* Page Header */}
						<div className="mb-6">
							<h1 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-2">Settings</h1>
							<p className="text-gray-600">Manage your team and preferences here.</p>
						</div>

						{/* Tabs */}
						<div className="overflow-x-auto">
							<Tabs tabs={TabList} />
						</div>
					</div>
				</div>

				<div className="px-4 lg:px-8 pb-12">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default SettingsContent;
