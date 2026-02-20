import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCamera, faLocationDot, faUpload, faCircleNotch, faLightbulb, faPersonWalking, faFaucetDrip, faTrashCan, faPalette, faTriangleExclamation, faElevator } from "@fortawesome/free-solid-svg-icons";
import FormReport from "./FormReport";

export default function Home()
{
	return (
		<div className="bg-linear-to-b from-white to-[#e8cbaa]/90 min-h-screen">
			<NavBar />
			<FormReport />
		</div>
	);
}
