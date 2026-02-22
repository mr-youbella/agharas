import NavBar from "../NavBar";
import FormReport from "./FormReport";

export default function ReportAnIssue()
{
	return (
		<div>
			<NavBar />
			<menu className="my-10 mx-2 md:w-2/3 xl:w-1/2 2xl:w-1/3 min-[120rem]:w-1/4 md:mx-auto text-center text-black">
				<h2 className="text-5xl md:text-6xl font-bold">Report an Issue</h2>
				<p className="mt-2 text-gray-400 text-base font-bold">Help us improve your community by reporting infrastructure problems. Your detailed report helps us understand and address issues quickly.</p>
				<FormReport />
			</menu>
		</div>
	);
}
