import type { JSX } from 'react';
export default function NavBar(): JSX.Element
{
	return (
		<div className="bg-white">
			<nav className="p-4 flex text-black justify-between w-1/2 mx-auto">
				<h1 className="text-3xl font-bold text-[#E4694E] cursor-pointer">Agharas</h1>
				<ul className="flex gap-5 items-center">
					<li className="text-base font-bold cursor-pointer">Home</li>
					<li className="text-base font-bold cursor-pointer">Report Issue</li>
					<li className="text-base font-bold cursor-pointer">View Reports</li>
					<li className="text-base font-bold bg-[#E4694E] p-2 rounded-2xl px-4 text-white cursor-pointer hover:bg-[#c67968]">About</li>
				</ul>
			</nav>
		</div>
	);
}
