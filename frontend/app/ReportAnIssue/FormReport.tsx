"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCamera, faLocationDot, faUpload, faCircleNotch, faLightbulb, faPersonWalking, faFaucetDrip, faTrashCan, faPalette, faTriangleExclamation, faElevator, faL, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { useActionState, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { sendData } from "./sendData";

export default function FormReport()
{
	let	[name_image, setNameImage] = useState<string | null>(null);
	let	[latitude, setLatitude] = useState<number | "">("");
	let	[longitude, setLongitude] = useState<number | "">("");
	let	[category, setCategory] = useState<number>(0);
	let	toast_id = useRef<string | number | null>(null);
	let	[state, action] = useActionState(sendData, {error: undefined, succes: false});
	function ftSubmit()
	{
		toast_id.current = toast.loading("You report is uploading...");
	}
	useEffect(() =>
	{
		if (state.succes && toast_id.current)
		{
			toast.update(toast_id.current,
			{
				render: "Your report is uploaded successfully.",
				type: "success",
				isLoading: false,
				autoClose: 4000,
				closeButton: true,
			});
		}
		else if (toast_id.current)
		{
			toast.update(toast_id.current,
			{
				render: state.error,
				type: "error",
				isLoading: false,
				autoClose: 4000,
				closeButton: true,
			});
		}
	}, [state]);

	const getLocation = () =>
	{
		navigator.geolocation.getCurrentPosition((pos) =>
		{
			const lat = pos.coords.latitude;
			const lng = pos.coords.longitude;
			setLatitude(lat);
			setLongitude(lng);
		});
	};

	return (
		<form action={action} onSubmit={ftSubmit} className="flex flex-col bg-white shadow-[0_0_10px] shadow-black/30 rounded-2xl w-full mt-10 text-left p-7">
			<label className="text-base font-bold"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faFileLines} />Issue Title *</label>
			<input name="title" type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-2 placeholder:text-gray-400" placeholder="e.g., Large pothole on Main Street" required/>
			<label className="text-base font-bold mt-4">Category *</label>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
				<button name="1" type="button" onClick={() => (setCategory(1))} className={`flex flex-col items-center justify-center border ${category === 1 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 1 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faCircleNotch} />Pothole</button>
				<button name="2" type="button" onClick={() => (setCategory(2))} className={`flex flex-col items-center justify-center border ${category === 2 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 2 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faLightbulb} />Broken Streetlight</button>
				<button name="3" type="button" onClick={() => (setCategory(3))} className={`flex flex-col items-center justify-center border ${category === 3 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 3 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faElevator} />Malfunctioning Elevator</button>
				<button name="4" type="button" onClick={() => (setCategory(4))} className={`flex flex-col items-center justify-center border ${category === 4 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 4 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faPersonWalking} />Damaged Sidewalk</button>
				<button name="5" type="button" onClick={() => (setCategory(5))} className={`flex flex-col items-center justify-center border ${category === 5 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 5 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faFaucetDrip} />Broken Water Pipe</button>
				<button name="6" type="button" onClick={() => (setCategory(6))} className={`flex flex-col items-center justify-center border ${category === 6 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 6 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faTrashCan} />Overflowing Trash</button>
				<button name="7" type="button" onClick={() => (setCategory(7))} className={`flex flex-col items-center justify-center border ${category === 7 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 7 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faPalette} />Graffiti</button>
				<button name="8" type="button" onClick={() => (setCategory(8))} className={`flex flex-col items-center justify-center border ${category === 8 ? "border-[#f3390f] bg-[#e4694e1a]" : "border-gray-400"} p-2 py-4 rounded-xl text-xs font-semibold cursor-pointer hover:bg-[#e4694e14]`}><FontAwesomeIcon className={`text-xl mb-2 ${category === 8 ? "text-[#E4694E]" : "text-gray-500"} mx-auto`} icon={faTriangleExclamation} />Other</button>
			</div>
			<input type="hidden" name="category" value={category}/>
			<label className="text-base font-bold mt-4">Description *</label>
			<textarea name="description" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400 h-30" placeholder="Describe the issue in detail. What's wrong? How does it affect the community?" required />
			<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faCamera} />Photo *</label>
			<label htmlFor="image" className="border border-dashed border-[#E4694E] p-5 text-center rounded-2xl mt-3 cursor-pointer hover:bg-[#E4694E]/10">
				<FontAwesomeIcon className="text-3xl mx-auto text-[#E4694E]" icon={faUpload} />
				<h3 className="font-bold">Click to upload a photo</h3>
				<p className="text-gray-500 ">{name_image || "PNG, JPG up to 10MB. Clear photos help us understand the issue better."}</p>
				<input onChange={(event) => (setNameImage(event.target.files && event.target.files[0].name))} name="image" id="image" className="hidden" type="file" accept=".png, .jpg, .webp" required/>
			</label>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1 flex flex-col">
					<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faLocationDot} />Address *</label>
					<input name="address" type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g., 123 Main Street, Marrakech" required/>
				</div>
				<div className="flex-1 flex flex-col">
					<label className="text-base font-bold mt-4">Neighborhood/District</label>
					<input name="neighborhood" type="text" className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g., Medina, Gueliz"/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1 flex flex-col">
					<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faLocationCrosshairs} />Latitude *</label>
					<input value={latitude} onChange={(event) => (setLatitude(Number(event.target.value)))} name="latitude" type="number" step="any" max={90} min={-90} className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g, -73.9857" required/>
				</div>
				<div className="flex-1 flex flex-col">
					<label className="text-base font-bold mt-4"><FontAwesomeIcon className="mr-1 text-[#E4694E] inline" icon={faLocationCrosshairs} />Longitude *</label>
					<input value={longitude} onChange={(event) => (setLongitude(Number(event.target.value)))} name="longitude" type="number" step="any" max={180} min={-180} className="bg-[#FFFBF7] border border-gray-300 rounded-xl p-2 mt-1 placeholder:text-gray-400" placeholder="e.g, 40.7484" required/>
				</div>
			</div>
			<button type="button" onClick={() => (getLocation())} className="w-1/2 mx-auto bg-linear-to-r from-green-600 to-green-500 rounded-2xl text-white p-2 font-semibold mt-4 cursor-pointer">Automatic detection</button>
			<button className="bg-linear-to-r from-orange-600 to-yellow-500 p-3 rounded-2xl text-white font-bold text-xl mt-4 cursor-pointer">Submit Report</button>
			<p className="text-center text-sm mt-5 text-gray-500">All reports are reviewed and verified before being displayed on the map. We maintain community standards to ensure accuracy and trust.</p>
			<ToastContainer />
		</form>
	);
}
