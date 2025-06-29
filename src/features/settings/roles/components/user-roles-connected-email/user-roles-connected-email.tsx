import Input from "@/ui/input";
import Radio from "@/ui/radio";
import { Mail } from "lucide-react";
import { useState } from "react";

const UserRolesConnectedEmail = () => {
	const [connectedEmail, setConnectedEmail] = useState("alternative");

	return (
		<div className="mb-5">
			<div className="flex flex-col lg:flex-row lg:gap-8">
				<div className="lg:w-48 mb-4 lg:mb-0">
					<h3 className="text-sm font-medium text-gray-700 mb-1">Connected email</h3>
					<p className="text-sm text-gray-600">Select role account</p>
				</div>

				<div className="flex-1 space-y-4">
					{/* My account email option */}
					<label className="flex items-start gap-3 cursor-pointer w-max">
						<div className="flex items-center h-5">
							<Radio
								name="connectedEmail"
								value="account"
								checked={connectedEmail === "account"}
								onChange={(e) => setConnectedEmail(e.target.value)}
							/>
						</div>
						<div>
							<div className="text-sm font-medium text-gray-700">My account email</div>
							<div className="text-sm text-gray-600">olivia@untitledui.com</div>
						</div>
					</label>

					{/* Alternative email option */}
					<div className="flex-1 space-y-3">
						<label className="flex items-center gap-3 cursor-pointer w-max">
							<Radio
								name="connectedEmail"
								value="alternative"
								checked={connectedEmail === "alternative"}
								onChange={(e) => setConnectedEmail(e.target.value)}
							/>
							<span className="text-sm font-medium text-gray-700">An alternative email</span>
						</label>

						{connectedEmail === "alternative" && (
							<div className="ml-6">
								<Input
									data-testid="alternative-email"
									className="max-w-md"
									name="alternativeEmail"
									icon={<Mail className="h-5 w-5 text-gray-400" />}
									type="email"
									placeholder="billing@untitledui.com"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserRolesConnectedEmail;
