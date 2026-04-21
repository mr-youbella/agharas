import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";
import { faBolt, faCamera, faCircleCheck, faEye, faLocationDot, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import Link from "next/link";

export default function Home()
{
	return (
		<div>
			<NavBar />
			<main>
				<div className="bg-[#FFFBF7]">
					<div className="lg:w-2/3 mx-3 lg:mx-auto flex flex-col lg:flex-row gap-10 py-20">
						<div className="flex-1">
							<p className="bg-[#f8b95433] p-2 rounded-3xl w-fit px-4 text-[#e4694e] text-base font-semibold mb-5">🏘️ Community Infrastructure Platform</p>
							<h1 className="text-6xl font-bold">Fix Your City, <span className="text-[#e4694e]">Together</span></h1>
							<p className="mt-5 text-gray-500 text-base font-semibold">BlassaReviews empowers communities to report and resolve urban infrastructure issues with complete transparency. From potholes to broken streetlights, your voice matters. Report issues, track resolutions, and build a better city.</p>
							<div className="flex gap-3">
								<Link href="ReportAnIssue"><button className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-3 rounded-2xl text-white font-bold text-xl mt-4 cursor-pointer px-5">Report an Issue →</button></Link>
								<Link href="ViewReports"><button className="border-2 border-[#e4694e] p-3 rounded-2xl text-[#e4694e] font-bold text-xl mt-4 cursor-pointer px-5">View Live Map</button></Link>
							</div>
							<div className="flex gap-3 mt-5 lg:justify-normal justify-between">
								<div>
									<h3 className="text-[#e4694e] font-bold text-2xl text-center">500+</h3>
									<p className="text-gray-500 text-base font-semibold">Issues Reported</p>
								</div>
								<div>
									<h3 className="text-[#e4694e] font-bold text-2xl text-center">500+</h3>
									<p className="text-gray-500 text-base font-semibold">Issues Resolved</p>
								</div>
								<div>
									<h3 className="text-[#e4694e] font-bold text-2xl text-center">500+</h3>
									<p className="text-gray-500 text-base font-semibold">Active Users</p>
								</div>
							</div>
						</div>
						<div className="flex-1 bg-[#f8b95433] p-5 rounded-2xl">
							<div className="rounded-2xl bg-linear-to-r from-orange-600/70 to-yellow-500/70 h-full text-center flex flex-col justify-center text-white space-y-2 p-10">
								<FontAwesomeIcon className="text-7xl mx-auto" icon={faLocationDot}/>
								<h2 className="text-2xl font-bold">Your City Map</h2>
								<p>Real-time issue tracking</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/3 mx-auto py-20">
					<h3 className="text-4xl font-bold text-center">Why Choose BlassaReviews?</h3>
					<p className="text-gray-500 text-base font-semibold text-center mt-2">A complete platform designed for communities to make real change together</p>
					<div className="grid lg:grid-cols-3 gap-3 mt-5">
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faCamera}/>
							<h4 className="text-gray-700 font-bold text-xl">Photo Documentation</h4>
							<p className="text-gray-500 text-base font-semibold">Upload clear photos of infrastructure issues for better assessment</p>
						</div>
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faLocationDot}/>
							<h4 className="text-gray-700 font-bold text-xl">Location Tracking</h4>
							<p className="text-gray-500 text-base font-semibold">Pinpoint exact locations with address details for easy identification</p>
						</div>
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faCircleCheck}/>
							<h4 className="text-gray-700 font-bold text-xl">Status Tracking</h4>
							<p className="text-gray-500 text-base font-semibold">Monitor issue resolution from pending to resolved status</p>
						</div>
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faPeopleGroup}/>
							<h4 className="text-gray-700 font-bold text-xl">Community Driven</h4>
							<p className="text-gray-500 text-base font-semibold">Empower citizens to participate in fixing their neighborhoods</p>
						</div>
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faEye}/>
							<h4 className="text-gray-700 font-bold text-xl">Full Transparency</h4>
							<p className="text-gray-500 text-base font-semibold">View all reports on an interactive map in real-time</p>
						</div>
						<div className="bg-[#FFFBF7] rounded-2xl p-4 space-y-3 py-6 border border-gray-400 hover:border hover:border-[#e4694e] hover:shadow-2xl group">
							<FontAwesomeIcon className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-4 text-white rounded-2xl transition duration-300 group-hover:scale-110" icon={faBolt}/>
							<h4 className="text-gray-700 font-bold text-xl">Quick Reporting</h4>
							<p className="text-gray-500 text-base font-semibold">Report issues in seconds with our intuitive mobile-friendly form</p>
						</div>
					</div>
				</div>
				<div className="bg-[#FFFBF7]">
					<div className="lg:w-2/3 mx-3 lg:mx-auto flex py-20">
						<div className="bg-linear-to-l from-orange-700 via-yellow-500 to-orange-700 p-7 rounded-2xl text-center mx-auto">
							<div className="lg:w-1/2 mx-auto space-y-3">
								<h3 className="text-4xl font-bold text-white">Ready to Make a Difference?</h3>
								<p className="text-white">Join thousands of citizens who are actively improving their cities. Start reporting issues today and help build transparent, responsive communities.</p>
								<Link href="ReportAnIssue"><button className="bg-white border-gray-400 p-4 px-7 rounded-3xl text-[#e4694e] font-semibold cursor-pointer">Start Reporting Now →</button></Link>
							</div>
						</div>
					</div>
					<p className="text-center pb-20">Built with ❤️ to strengthen communities. Inspired by the collaborative spirit of Morocco</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
