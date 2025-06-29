import Button from "@/ui/button";
import Checkbox from "@/ui/checkbox";
import { Plus, Users } from "lucide-react";
import { useCallback, useState } from "react";

export const Dummy_Roles = [
	{
		id: "superadmin",
		title: "Superadmin",
		lastActive: "Last active 06/2023",
	},
	{
		id: "developeradmin",
		title: "Developeradmin",
		lastActive: "Last active 01/2023",
	},
	{
		id: "supportadmin",
		title: "Supportadmin",
		lastActive: "Last active 10/2022",
	},
];

const UserRolesActiveRole = () => {
	const [activeRole, setActiveRole] = useState("superadmin");

	function stopPropagation(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();
	}

	const isRoleSelected = useCallback((roleId: string) => activeRole === roleId, [activeRole]);

	return (
		<div className="mb-8">
			<div className="flex flex-col lg:flex-row lg:gap-8">
				<div className="lg:max-w-64 mb-4 lg:mb-0">
					<h3 className="text-sm font-medium text-gray-700 mb-1">Active Role</h3>
					<p className="text-sm text-gray-500">Select active role available to the user.</p>
				</div>

				<div className="flex-1">
					<div className="space-y-3 mb-4">
						{Dummy_Roles.map((role) => (
							<div
								role="button"
								onClick={() => setActiveRole(role.id)}
								data-testid={`role-${role.id}`}
								key={role.id}
								className={`relative justify-between flex items-start gap-3 p-4 rounded-lg border cursor-pointer ${
									isRoleSelected(role.id) ? "border-primary-300 bg-primary-50 role-selected" : "border-gray-200 bg-white"
								}`}>
								<div className="flex items-center gap-3 flex-1">
									{/* Role Icon */}
									<div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
										<Users className="w-[22px] h-[18px] text-gray-500" />
									</div>

									<div className="flex-1">
										<div className={`text-sm font-medium ${isRoleSelected(role.id) ? "text-purple-800" : "text-gray-700"}`}>
											{role.title}
										</div>
										<div className={`text-sm ${isRoleSelected(role.id) ? "text-purple-600" : "text-gray-400"}`}>{role.lastActive}</div>

										<div className="flex gap-3 mt-2">
											<button
												onClick={stopPropagation}
												className={`text-sm font-medium ${isRoleSelected(role.id) ? "text-purple-500" : "text-gray-500"}`}>
												Set as default
											</button>
											<button onClick={stopPropagation} className="text-sm font-medium text-primary-700">
												Edit
											</button>
										</div>
									</div>
								</div>

								<Checkbox className="rounded-full" onChange={() => setActiveRole(role.id)} checked={isRoleSelected(role.id)} />
							</div>
						))}
					</div>

					<Button variant="ghost">
						<Plus className="w-5 h-5" />
						Add role to user
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UserRolesActiveRole;
