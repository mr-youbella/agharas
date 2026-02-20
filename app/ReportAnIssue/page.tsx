import NavBar from "../NavBar";
import FormReport from "./FormReport";

export default function ReportAnIssue()
{
	return (
		<div>
			<NavBar />
			<menu className="my-10 w-1/4 mx-auto text-center text-black">
				<h2 className="text-6xl font-bold">Report an Issue</h2>
				<p className="mt-2 text-gray-400 text-base font-bold">Help us improve your community by reporting infrastructure problems. Your detailed report helps us understand and address issues quickly.</p>
				<FormReport />
			</menu>
		</div>
	);
}
