import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../NavBar";
import { faEarth, faHeart, faPeopleGroup, faUsersRays } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../footer";

export default function About()
{
	return (
		<div>
			<NavBar />
			<menu className="my-10 mx-2 text-center text-black">
				<div className="md:mx-auto md:w-2/3 xl:w-1/2 2xl:w-1/3 min-[120rem]:w-1/4">
					<h2 className="text-5xl md:text-6xl font-bold">About BlassaReviews</h2>
					<p className="mt-2 text-gray-400 text-base font-bold">Empowering communities to build better cities through transparency and collective action</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 mx-5 lg:mx-auto lg:w-2/3 mt-5 text-left">
					<div className="flex-1">
						<h2 className="font-bold text-3xl mb-3">Our Mission</h2>
						<p className="text-gray-400 text-base font-semibold">BlassaReviews is dedicated to bridging the gap between citizens and city authorities. We believe that every voice matters and that communities, when empowered with the right tools, can drive meaningful change.<br/><br/>By making it easy for people to report infrastructure issues and track their resolution, we create transparency, accountability, and inspire collective responsibility for our shared urban spaces.</p>
					</div>
					<div className="flex-1 flex flex-col gap-3 bg-white rounded-2xl p-8">
						<div className="space-y-2 flex">
							<FontAwesomeIcon className="my-auto mr-3 text-2xl text-orange-500" icon={faUsersRays} />
							<div>
								<h3 className="font-bold">Community Focused</h3>
								<p className="text-[#75808A] text-base">Built for and by communities to address their unique needs</p>
							</div>
						</div>
						<div className="space-y-2 flex">
							<FontAwesomeIcon className="my-auto mr-3 text-2xl text-orange-500" icon={faEarth} />
							<div>
								<h3 className="font-bold">Transparent</h3>
								<p className="text-[#75808A] text-base">All reports are visible to the community for full transparency</p>
							</div>
						</div>
						<div className="space-y-2 flex">
							<FontAwesomeIcon className="my-auto mr-3 text-2xl text-orange-500" icon={faHeart} />
							<div>
								<h3 className="font-bold">People-Driven</h3>
								<p className="text-[#75808A] text-base">Putting people at the center of urban development decisions</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-3xl mx-5 lg:mx-auto lg:w-2/3 mt-10">
					<div className="lg:w-1/2 lg:mx-auto p-2 py-10">
						<h2 className="text-3xl font-bold pb-3">Inspired by Moroccan Values</h2>
						<p className="text-gray-400 text-base font-semibold py-5">BlassaReviews is inspired by the collaborative spirit, cultural richness, and community values deeply rooted in Moroccan society. We celebrate the traditional "jema'a" concept - a community gathering where voices are heard and decisions are made collectively.</p>
						<p className="text-gray-400 text-base font-semibold">Just as Morocco's beautiful architecture blends geometric patterns and intricate designs, our platform weaves together technology and human connection to create stronger, more beautiful communities.</p>
					</div>
				</div>
				<div>
					<div className="md:mx-auto md:w-2/3 xl:w-1/2 2xl:w-1/3 min-[120rem]:w-1/4 mt-20">
						<h2 className="text-5xl md:text-3xl font-bold">Our Team</h2>
						<p className="mt-2 text-gray-400 text-base font-bold">A passionate team dedicated to making urban development transparent and community-driven.</p>
					</div>
					<div className="bg-orange-300/30 border border-dashed border-orange-600 rounded-3xl mx-5 lg:mx-auto lg:w-2/3 mt-10">
						<div className="w-1/2 mx-auto my-10">
							<FontAwesomeIcon className="text-5xl text-orange-500/40" icon={faPeopleGroup} />
							<p className="text-gray-400 text-base font-semibold mt-5">Team profiles coming soon</p>
						</div>
					</div>
				</div>
				<div className="md:mx-auto md:w-2/3 xl:w-1/2 2xl:w-1/3 min-[120rem]:w-1/4 my-10">
					<h2 className="text-5xl md:text-3xl font-bold">Join Our Movement</h2>
					<p className="mt-2 text-gray-400 text-base font-bold">Whether you're a citizen wanting to improve your neighborhood or a city authority committed to transparency, there's a place for you in BlassaReviews.</p>
					<Link href="ReportAnIssue"><button className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-3 rounded-2xl text-white font-bold text-xl mt-4 cursor-pointer px-5">Report an Issue →</button></Link>
				</div>
			</menu>
			<Footer />
		</div>
	);
}