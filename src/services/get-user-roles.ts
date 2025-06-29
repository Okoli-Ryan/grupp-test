import type { Role } from "@/types/role";

export const GetUserRolesEndpoint = "https://gamma-api.vercel.app/api/roles";

export const getUserRoles = async (): Promise<Role[]> => {
	try {
		const res = await fetch(GetUserRolesEndpoint);

		if (!res.ok) {
			throw new Error("Failed to fetch roles");
		}

		const roles: Role[] = await res.json();
		return roles;
	} catch (error) {
		throw new Error(`Error fetching roles: ${error instanceof Error ? error.message : "Unknown error"}`);
	}
};
