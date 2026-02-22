"use client";
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function NavBar()
{
	let	[nav_bar, setNavBar] = useState<boolean>(false);

	return (
		<div className="bg-white">
			<nav className="p-4 flex text-black justify-between lg:w-1/2 mx-auto">
				<Link href="/"><h1 className="mr-auto md:text-center text-3xl font-bold text-[#E4694E] cursor-pointer">Agharas</h1></Link>
				<ul className="sm:flex gap-5 items-center hidden">
					<Link href="/"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Home</li></Link>
					<Link  href="ReportAnIssue"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Report Issue</li></Link>
					<Link href="ViewReports"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">View Reports</li></Link>
					<li className="text-base font-bold bg-[#E4694E] p-2 rounded-2xl px-4 text-white cursor-pointer hover:bg-[#e4644e]">About</li>
				</ul>
				<div className="sm:hidden">
					<FontAwesomeIcon onClick={() => (setNavBar(!nav_bar))} className="text-black text-4xl" icon={faList} />
				</div>
			</nav>
			<div className={`bg-black/10 rounded-2xl mx-2 duration-200 ${!nav_bar ? "opacity-0 h-0" : "opacity-100 h-fit"}`}>
				<ul className="flex flex-col gap-5 px-2 py-5">
					<Link href="/"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Home</li></Link>
					<Link  href="ReportAnIssue"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Report Issue</li></Link>
					<Link href="ViewReports"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">View Reports</li></Link>
					<li className="text-base font-bold bg-[#E4694E] p-2 rounded-2xl px-4 text-white cursor-pointer hover:bg-[#e4644e]">About</li>
				</ul>
			</div>
		</div>
	);
}
