import Link from 'next/link';

export default function NavBar()
{
	return (
		<div className="bg-white">
			<nav className="p-4 flex text-black justify-between w-1/2 mx-auto">
				<Link href="/"><h1 className="text-3xl font-bold text-[#E4694E] cursor-pointer">Agharas</h1></Link>
				<ul className="flex gap-5 items-center">
					<Link href="/"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Home</li></Link>
					<Link  href="ReportAnIssue"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">Report Issue</li></Link>
					<Link href="ViewReports"><li className="text-base font-bold cursor-pointer hover:text-[#E4694E]">View Reports</li></Link>
					<li className="text-base font-bold bg-[#E4694E] p-2 rounded-2xl px-4 text-white cursor-pointer hover:bg-[#e4644e]">About</li>
				</ul>
			</nav>
		</div>
	);
}
