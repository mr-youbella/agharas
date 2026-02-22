"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleNotch, faLightbulb, faPersonWalking, faFaucetDrip, faTrashCan, faElevator, faFilter, faClock, faMapPin, faPalette, faTriangleExclamation, faCircleCheck, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from 'next/link';
import { data } from "./ReportsData";

export default function Reports()
{
	let	[filter, setFilter] = useState<string>("all");
	let	[search, setSearch] = useState<string>("");
	function setIcon(category: number)
	{
		switch (category)
		{
			case 1: return (faCircleNotch);
			case 2: return (faLightbulb);
			case 3: return (faElevator);
			case 4: return (faPersonWalking);
			case 5: return (faFaucetDrip);
			case 6: return (faTrashCan);
			case 7: return (faPalette);
			case 8: return (faTriangleExclamation);
		}
		return (faTriangleExclamation);
	}
	function setStatus(status: string)
	{
		switch (status)
		{
			case "pending": return {style: "bg-[#FEF3C7] text-[#92400E]", icon: faClock};
			case "in progress": return {style: "bg-[#dbeafe] text-[#1e40af]", icon: faArrowsRotate};
			case "resolved": return {style: "bg-[#dcfce7] text-[#166534]", icon: faCircleCheck};
		}
		return {style: "", icon: faTriangleExclamation};
	}

	return (
		<div>
			<div className="grid grid-cols-4 mt-10 gap-4">
				<div className="bg-white p-4 py-6 rounded-xl border border-gray-300">
					<h2 className="text-[#E4694E] text-3xl font-bold">{data.length}</h2>
					<p className="text-gray-400 text-base font-semibold mt-px">Total Reports</p>
				</div>
				<div className="bg-white p-4 py-6 rounded-xl border border-gray-300">
					<h2 className="text-[#D97706] text-3xl font-bold">{data.filter((value) => (value.status === "pending")).length}</h2>
					<p className="text-gray-400 text-base font-semibold mt-px">Pending</p>
				</div>
				<div className="bg-white p-4 py-6 rounded-xl border border-gray-300">
					<h2 className="text-[#2563EB] text-3xl font-bold">{data.filter((value) => (value.status === "in progress")).length}</h2>
					<p className="text-gray-400 text-base font-semibold mt-px">In Progress</p>
				</div>
				<div className="bg-white p-4 py-6 rounded-xl border border-gray-300">
					<h2 className="text-[#16A34A] text-3xl font-bold">{data.filter((value) => (value.status === "resolved")).length}</h2>
					<p className="text-gray-400 text-base font-semibold mt-px">Resolved</p>
				</div>
			</div>
			<div className="bg-white rounded-2xl p-7 mt-10">
				<div className="flex flex-col bg-linear-to-br from-[#E4694E]/30 to-yellow-300/30 rounded-2xl p-70 space-y-2">
					<FontAwesomeIcon className="text-6xl mx-auto text-[#E4694E]/50" icon={faLocationDot}/>
					<h2 className="text-2xl font-bold">Interactive Map</h2>
					<p className="text-gray-400 font-semibold">View all reports on a live map with location pins</p>
					<button className="bg-[#E4694E] w-1/3 mx-auto p-3 rounded-2xl text-white font-bold text-xl mt-4 cursor-pointer hover:shadow-[0_0_5px_gray]">Map Coming Soon</button>
				</div>
			</div>
			<div className="flex bg-white rounded-2xl p-5 gap-3 mt-10">
				<input value={search} onChange={(event) => (setSearch(event.target.value))} type="search" className="flex-1 bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 placeholder:text-gray-400" placeholder="Search by title, address, or neighborhood..."/>
				<FontAwesomeIcon className="my-auto text-2xl opacity-60" icon={faFilter} />
				<button onClick={() => (setFilter("all"))} className={`rounded-xl ${filter === "all" ? "bg-[#E4694E] text-white" : "bg-[#E2d9cf]"} font-semibold  px-5 cursor-pointer`}>All</button>
				<button onClick={() => (setFilter("pending"))} className={`rounded-xl ${filter === "pending" ? "bg-[#f59e0b] text-white" : "bg-[#E2d9cf]"} font-semibold px-5 cursor-pointer`}>Pending</button>
				<button onClick={() => (setFilter("in progress"))} className={`rounded-xl ${filter === "in progress" ? "bg-[#3b82f6] text-white" : "bg-[#E2d9cf]"} font-semibold px-5 cursor-pointer`}>In Progress</button>
				<button onClick={() => (setFilter("resolved"))} className={`rounded-xl ${filter === "resolved" ? "bg-[#22C55E] text-white" : "bg-[#E2d9cf]"} font-semibold px-5 cursor-pointer`}>Resolved</button>
			</div>
			<div className="flex flex-col mt-10 gap-4">
				{data.filter((value) => (value.issue_title.toLowerCase().includes(search.toLowerCase()) || value.address.toLowerCase().includes(search.toLowerCase()) || value.neighborhood.toLowerCase().includes(search.toLowerCase()))).filter((value) => (filter === "all" || value.status === filter)).map((value, index) =>
				{
					return (
						<div key={index} className="bg-white flex gap-3 p-4 rounded-xl items-center group hover:shadow-[0_0_5px_gray]">
							<FontAwesomeIcon className="my-auto text-2xl text-orange-500" icon={setIcon(value.category)} />
							<div className="flex-1 text-left space-y-1.5">
								<h2 className="text-xl font-bold group-hover:text-[#E4694E]">{value.issue_title}</h2>
								<p className="text-base text-gray-500"><FontAwesomeIcon className="mr-px text-[#E4694E]/80" icon={faLocationDot}/>{value.address}</p>
								<p className="text-base text-gray-500"><FontAwesomeIcon className="mr-px text-[#E4694E]/80" icon={faMapPin}/>{value.neighborhood}</p>
								<p className="text-base text-gray-500">{value.description}</p>
							</div>
							<div className="space-y-2">
								<h3 className={`${setStatus(value.status).style} rounded-xl px-2 py-px text-sm font-semibold capitalize`}><FontAwesomeIcon className="mr-px" icon={setStatus(value.status).icon}/>{value.status}</h3>
								<p className="text-base text-gray-500">{value.date}</p>
							</div>
						</div>
					);
				})}	
			</div>
			<Link href="ReportAnIssue"><button className="bg-linear-to-r from-orange-600/70 to-yellow-500/70 p-3 rounded-2xl text-white font-bold text-xl px-10 mt-4 cursor-pointer"><FontAwesomeIcon className="mr-px" icon={faLocationDot}/>Report a New Issue</button></Link>
		</div>
	);
}
