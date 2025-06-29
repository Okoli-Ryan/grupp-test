// loader.ts
import { QueryKeys } from "@/lib/constants";
import { queryClient } from "@/lib/query-client";
import { getUserRoles } from "@/services/get-user-roles";
import type { Role } from "@/types/role";

export async function userRolesLoader() {
	const cachedRoles = queryClient.getQueryData<Role[]>(QueryKeys.userRoles);

	if (cachedRoles) {
		return { roles: cachedRoles, error: undefined };
	}

	try {
		const roles = await getUserRoles();
		queryClient.setQueryData(QueryKeys.userRoles, roles);
		return { roles, error: undefined };
	} catch (error) {
		return { roles: [], error: error instanceof Error ? error.message : "Unable to fetch roles" };
	}
}
