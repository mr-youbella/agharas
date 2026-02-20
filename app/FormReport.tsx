"use client";
import type { JSX } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCamera, faLocationDot, faUpload, faCircleNotch, faLightbulb, faPersonWalking, faFaucetDrip, faTrashCan, faPalette, faTriangleExclamation, faElevator } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FormReport(): JSX.Element
{
	let	[category, setCategory] = useState<number>(1);

	return (
		<div>
			<menu className="my-10 w-1/4 mx-auto text-center text-black">
				<h2 className="text-6xl font-bold">Report an Issue</h2>
				<p className="mt-2 text-gray-400 text-base font-bold">Help us improve your community by reporting infrastructure problems. Your detailed report helps us understand and address issues quickly.</p>
				<form className="flex flex-col bg-white shadow-[0_0_10px] shadow-black/30 rounded-2xl w-full mt-10 text-left p-7">
					<label className="text-base font-bold"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faFileLines} />Issue Title *</label>
					<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-2 placeholder:text-gray-400" placeholder="e.g., Large pothole on Main Street" />
					<label className="text-base font-bold mt-4">Category *</label>
					<div className="grid grid-cols-4 gap-4 mt-3">
						<button type="button" onClick={() => (setCategory(1))} className={`flex flex-col items-center justify-center border ${category === 1 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 1 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faCircleNotch} />Pothole</button>
						<button type="button" onClick={() => (setCategory(2))} className={`flex flex-col items-center justify-center border ${category === 2 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 2 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faLightbulb} />Broken Streetlight</button>
						<button type="button" onClick={() => (setCategory(3))} className={`flex flex-col items-center justify-center border ${category === 3 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 3 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faElevator} />Malfunctioning Elevator</button>
						<button type="button" onClick={() => (setCategory(4))} className={`flex flex-col items-center justify-center border ${category === 4 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 4 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faPersonWalking} />Damaged Sidewalk</button>
						<button type="button" onClick={() => (setCategory(5))} className={`flex flex-col items-center justify-center border ${category === 5 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 5 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faFaucetDrip} />Broken Water Pipe</button>
						<button type="button" onClick={() => (setCategory(6))} className={`flex flex-col items-center justify-center border ${category === 6 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 6 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faTrashCan} />Overflowing Trash</button>
						<button type="button" onClick={() => (setCategory(7))} className={`flex flex-col items-center justify-center border ${category === 7 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 7 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faPalette} />Graffiti</button>
						<button type="button" onClick={() => (setCategory(8))} className={`flex flex-col items-center justify-center border ${category === 8 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 8 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faTriangleExclamation} />Other</button>
					</div>
					<label className="text-base font-bold mt-4">Description *</label>
					<textarea className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="Describe the issue in detail. What's wrong? How does it affect the community?"></textarea>
					<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faCamera} />Photo *</label>
					<label htmlFor="image" className="border border-dashed border-[#E4694E] p-5 text-center rounded-2xl mt-3 cursor-pointer hover:bg-[#E4694E]/10">
						<FontAwesomeIcon className="text-3xl mx-auto text-[#E4694E]" icon={faUpload} />
						<h3 className="font-bold">Click to upload a photo</h3>
						<p className="text-gray-500 ">PNG, JPG up to 10MB. Clear photos help us understand the issue better.</p>
						<input id="image" className="hidden" type="file" accept=".png, .jpg" />
					</label>
					<div className="flex gap-4">
						<div className="flex-1 flex flex-col">
							<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faLocationDot} />Address *</label>
							<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g., 123 Main Street, Marrakech" />
						</div>
						<div className="flex-1 flex flex-col">
							<label className="text-base font-bold mt-4">Neighborhood/District</label>
							<input type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g., Medina, Gueliz" />
						</div>
					</div>
					<button className="bg-linear-to-r from-orange-600 to-yellow-500 p-3 rounded-2xl text-white font-bold text-xl mt-4 cursor-pointer">Submit Report</button>
					<p className="text-center text-sm mt-5 text-gray-500">All reports are reviewed and verified before being displayed on the map. We maintain community standards to ensure accuracy and trust.</p>
				</form>
			</menu>
		</div>
	);
}
