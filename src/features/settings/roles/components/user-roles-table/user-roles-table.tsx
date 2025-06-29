import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";

import { QueryKeys } from "@/lib/constants";
import { getUserRoles } from "@/services/get-user-roles";
import type { Role } from "@/types/role";
import Button from "@/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, DownloadCloud } from "lucide-react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { toast } from "sonner";
import { UserRolesColumns } from "../../utils/user-roles-table-utils";

const UserRolesTable = () => {
	const initialRoles = useLoaderData<{ roles: Role[]; error: string | undefined }>() || { roles: [], error: undefined };

	const { data: roles } = useQuery({
		queryKey: QueryKeys.userRoles,
		queryFn: getUserRoles,
		initialData: initialRoles.roles,
		staleTime: Infinity,
		refetchOnMount: false,
	});

	const table = useReactTable<Role>({
		data: roles || [],
		columns: UserRolesColumns,
		getCoreRowModel: getCoreRowModel(),
		enableRowSelection: true,
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageIndex: 0,
				pageSize: 10,
			},
		},
	});

	useEffect(() => {
		const error = initialRoles.error;
		if (error) toast.error(error);
	}, [initialRoles.error]);

	return (
		<div>
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
				<h2 className="text-lg font-medium text-gray-900">User Roles</h2>
				<Button variant="outline" className="w-max">
					<DownloadCloud className="w-5 h-5" />
					Download all
				</Button>
			</div>
			<div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white ">
						<thead className="bg-gray-50 border-b border-gray-200">
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th key={header.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wide">
											{flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody className="divide-y divide-gray-200">
							{table.getRowModel().rows.map((row) => (
								<tr key={row.id} className="hover:bg-gray-50">
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id} className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 bg-white">
					<div className="text-sm text-gray-600">
						Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
					</div>
					<div className="flex items-center gap-2">
						<Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
							<ChevronsLeft size={18} />
						</Button>
						<Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
							<ChevronLeft size={18} />
						</Button>
						<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
							<ChevronRight size={18} />
						</Button>
						<Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
							<ChevronsRight size={18} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserRolesTable;
