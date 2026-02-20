import NavBar from "../NavBar";
import Reports from "./Reports";

export default function ReportAnIssue()
{
	return (
		<div>
			<NavBar />
			<menu className="my-10 w-1/2 mx-auto text-center text-black">
				<div className="w-1/2 mx-auto">
					<h2 className="text-6xl font-bold">Live Report Map</h2>
					<p className="mt-2 text-gray-400 text-base font-bold">Track all reported infrastructure issues in real-time. See what's being fixed in your community.</p>
				</div>
				<Reports />
			</menu>
		</div>
	);
}
