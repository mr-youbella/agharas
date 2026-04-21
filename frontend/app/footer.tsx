import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer()
{
	return (
		<div className="bg-[#e4694e33] border-t border-gray-400">
			<div className="text-gray-500 font-semibold w-2/3 mx-auto pt-10 pb-5">
				<div className="flex flex-col lg:flex-row gap-3">
					<div className="flex-1 space-y-3">
						<h2 className="font-bold text-[#e4694e] text-xl">BlassaReviews</h2>
						<p>Empowering communities to report and resolve urban infrastructure issues with transparency and collective action.</p>
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold text-black mb-3">Quick Links</h3>
						<div className="flex flex-col gap-2">
							<Link href="/"><button className="mr-auto cursor-pointer hover:text-[#e4694e]">Home</button></Link>
							<Link href="ReportAnIssue"><button className="mr-auto cursor-pointer hover:text-[#e4694e]">Report Issue</button></Link>
							<Link href="ViewReports"><button className="mr-auto cursor-pointer hover:text-[#e4694e]">View Reports</button></Link>
							<Link href="About"><button className="mr-auto cursor-pointer hover:text-[#e4694e]">About Us</button></Link>
						</div>
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold text-black mb-3">Contact</h3>
						<div className="flex flex-col gap-2">
							<a className="hover:text-[#e4694e]" href="mailto:younesoubllal@gmail.com"><FontAwesomeIcon className="mr-2" icon={faEnvelope}/>younesoubllal@gmail.com</a>
							<a className="hover:text-[#e4694e]" href="tel:+212 694250007"><FontAwesomeIcon className="mr-2" icon={faPhone}/>+212 694250007</a>
							<a className="hover:text-[#e4694e]" href="https://en.wikipedia.org/wiki/Morocco" target="_blank"><FontAwesomeIcon className="mr-2" icon={faLocationDot}/>Morocco</a>
						</div>
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold text-black mb-3">Follow Us</h3>
						<div className="flex gap-3">
							<a href="https://www.instagram.com/master_youbella" target="_blank"><FontAwesomeIcon className="text-center text-xl bg-[#e95938] p-2 rounded-2xl text-white cursor-pointer hover:bg-[#f1461f]" icon={faInstagram}/></a>
							<a href="https://web.facebook.com/master.youbella" target="_blank"><FontAwesomeIcon className="text-center text-xl bg-[#e95938] p-2 rounded-2xl text-white cursor-pointer hover:bg-[#f1461f]" icon={faFacebook}/></a>
							<a href="https://wa.me/212694250007" target="_blank"><FontAwesomeIcon className="text-center text-xl bg-[#e95938] p-2 rounded-2xl text-white cursor-pointer hover:bg-[#f1461f]" icon={faWhatsapp}/></a>
						</div>
					</div>
				</div>
				<hr className="mt-2"/>
				<div className="flex-col md:flex mt-10 justify-between">
					<div>
						<p>© {new Date().getFullYear()} BlassaReviews. All rights reserved. | Building transparent communities together</p>
					</div>
					<div className="flex gap-4 mt-5 md:mt-0">
						<button className="cursor-pointer hover:text-[#e4694e] underline">Privacy Policy</button>
						<button className="cursor-pointer hover:text-[#e4694e] underline">Terms of Service</button>
					</div>
				</div>
			</div>
		</div>
	);
}
