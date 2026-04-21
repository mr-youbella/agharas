"use server";

type State =
{
	error?: string | undefined,
	succes?: boolean | undefined
}

export type Issue = 
{
	issue_title: string;
	category: number;
	description: string;
	image: string;
	address: string;
	neighborhood: string;
	date: string;
	status?: string;
	latitude: number;
	longitude: number;
};

export async function sendData(pre_state: State, form_data: FormData): Promise<State>
{
	try
	{
		let		fd = new FormData();
		let		init_date = new Date();
		const	date = init_date.toISOString().split('T')[0];
		const data: Issue = 
		{
			issue_title: form_data.get("title") as string,
			category: Number(form_data.get("category")),
			description: form_data.get("description") as string,
			address: form_data.get("address") as string,
			neighborhood: form_data.get("neighborhood") as string,
			image: form_data.get("image") as string,
			latitude: Number(form_data.get("latitude")),
			longitude: Number(form_data.get("longitude")),
			date: date,
		}
		fd.append("data", JSON.stringify(data));
		fd.append("image", data.image);
		await fetch("http://127.0.0.1:3001/reports",
		{
			method: "POST",
			body: fd
		})
	}
	catch (err)
	{
		console.error(err);
		return ({error: "Not Sended", succes: false});
	}
	return ({succes: true});
}
