export type Issue = 
{
	issue_title: string;
	category: number;
	description: string;
	address: string;
	neighborhood: string;
	date: string;
	status: string;
	image: string;
	latitude: number;
	longitude: number;
};

export type Locations = 
{
	id: number;
	issue_title: string;
	latitude: number;
	longitude: number;
};

export async function getReports()
{
	let	response = undefined;
	try
	{
		response = await fetch("http://127.0.0.1:3001/reports");
		if (!response.ok)
			throw new Error("Response not OK");
	}
	catch (err)
	{
		console.error(err);
	}
	if (response)
		response = await response.json();
	return (response)
}

export async function getLocations()
{
	let	response = undefined;
	try
	{
		response = await fetch("http://127.0.0.1:3001/locations");
		if (!response.ok)
			throw new Error("Response not OK");
	}
	catch (err)
	{
		console.error(err);
	}
	if (response)
		response = await response.json();
	return (response)
}

