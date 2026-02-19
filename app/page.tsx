import NavBar from "./NavBar";

export default function Home()
{
	return (
		<div className="bg-linear-to-b from-white to-[#e8cbaa]/90 min-h-screen">
			<NavBar />
			<menu className="my-10 w-1/4 mx-auto text-center text-black">
				<h2 className="text-6xl font-bold">Report an Issue</h2>
				<p className="mt-2 text-gray-400 text-base font-bold">Help us improve your community by reporting infrastructure problems. Your detailed report helps us understand and address issues quickly.</p>
				<form className="flex flex-col bg-white shadow-[0_0_10px] shadow-black/30 rounded-2xl w-full mt-10 text-left p-7">
					<label className="text-base font-bold">Issue Title *</label>
					<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1" placeholder="e.g., Large pothole on Main Street"/>
					<label className="text-base font-bold">Description *</label>
					<textarea className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1" placeholder="Describe the issue in detail. What's wrong? How does it affect the community?"></textarea>
					<div className="flex gap-4">
						<div className="flex-1 flex flex-col">
							<label className="text-base font-bold">Address *</label>
							<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1" placeholder="e.g., 123 Main Street, Marrakech"/>
						</div>
						<div className="flex-1 flex flex-col">
							<label className="text-base font-bold">Neighborhood/District</label>
							<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1" placeholder="e.g., Medina, Gueliz"/>
						</div>
					</div>
					<button>Submit Report</button>
				</form>
			</menu>
		</div>
	);
}
