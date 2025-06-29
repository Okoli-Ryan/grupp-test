import UserRolesActiveRole from "./user-roles-active-role/user-roles-active-role";
import UserRolesConnectedEmail from "./user-roles-connected-email/user-roles-connected-email";

const UserRolesSection = () => {
	return (
		<div>
			<div>
				<div className="mb-6">
					<h2 className="text-lg font-medium text-gray-900 mb-1">User Roles</h2>
					<p className="text-sm text-gray-500 mb-5">Update your roles details and information.</p>
					<div className="border-t border-gray-200"></div>
				</div>
				<UserRolesConnectedEmail />

				<div className="border-t border-gray-200 mb-5"></div>

				<UserRolesActiveRole />
			</div>
		</div>
	);
};

export default UserRolesSection;
