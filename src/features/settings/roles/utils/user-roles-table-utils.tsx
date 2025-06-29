import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, DownloadCloud } from "lucide-react";

import { UserAvatarGroup } from "@/components/user-avatar-group/user-avatar-group";
import { type Role } from "@/types/role";
import Button from "@/ui/button";

import Checkbox from "@/ui/checkbox";
import { ArrowUp } from "lucide-react";

export const UserRolesColumns: ColumnDef<Role>[] = [
	{
		id: "name",
		accessorKey: "name",
		header: ({ column, table }) => (
			<div className="flex items-center gap-3">
				<Checkbox checked={table.getIsAllPageRowsSelected()} onChange={table.getToggleAllPageRowsSelectedHandler()} />
				<button
					type="button"
					onClick={column.getToggleSortingHandler()}
					className="flex items-center gap-1 text-xs font-medium text-gray-500 tracking-wide">
					Name
					{column.getIsSorted() === "asc" ? (
						<ArrowUp className="w-3 h-3" />
					) : column.getIsSorted() === "desc" ? (
						<ArrowDown className="w-3 h-3" />
					) : null}
				</button>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<Checkbox checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
				<span className="text-sm font-medium text-gray-900">{row.original.name}</span>
			</div>
		),
	},
	{
		accessorKey: "type",
		header: ({ column }) => (
			<button
				type="button"
				onClick={column.getToggleSortingHandler()}
				className="flex items-center gap-1 text-xs font-medium text-gray-500 tracking-wide">
				Type
				{column.getIsSorted() === "asc" ? <ArrowUp className="w-3 h-3" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-3 h-3" /> : null}
			</button>
		),
	},
	{
		accessorKey: "date",
		header: ({ column }) => (
			<button
				type="button"
				onClick={column.getToggleSortingHandler()}
				className="flex items-center gap-1 text-xs font-medium text-gray-500 tracking-wide">
				Date created
				{column.getIsSorted() === "asc" ? <ArrowUp className="w-3 h-3" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-3 h-3" /> : null}
			</button>
		),
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<button
				type="button"
				onClick={column.getToggleSortingHandler()}
				className="flex items-center gap-1 text-xs font-medium text-gray-500 tracking-wide">
				Status
				{column.getIsSorted() === "asc" ? <ArrowUp className="w-3 h-3" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-3 h-3" /> : null}
			</button>
		),
		cell: ({ getValue }) => {
			const status = getValue() as Role["status"];
			return (
				<span
					className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
						status === "Active" ? "bg-green-100 text-green-700" : "bg-orange text-white"
					}`}>
					{status === "Active" && <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />}
					{status}
				</span>
			);
		},
	},
	{
		accessorKey: "totalUser",
		header: "Role users",
		cell: ({ getValue, cell }) => <UserAvatarGroup images={cell.row.original.users} total={getValue<number>()} />,
		enableSorting: false,
	},
	{
		id: "actions",
		header: "",
		cell: () => (
			<Button variant="ghost">
				<DownloadCloud className="w-5 h-5" />
			</Button>
		),
		enableSorting: false,
	},
];
