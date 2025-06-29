import UserRolesSection from "./components/user-roles-section";
import UserRolesTable from "./components/user-roles-table/user-roles-table";

const RolesSection = () => {
	return (
		<div className="max-w-7xl mx-auto space-y-8">
			<UserRolesSection />

			<UserRolesTable />
		</div>
	);
};

export default RolesSection;
