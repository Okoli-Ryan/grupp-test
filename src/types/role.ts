export type Role = {
	id: number;
	name: string;
	type: string;
	date: string;
	status: "Active" | "In Active";
	users: string[];
	totalUser: number;
};
