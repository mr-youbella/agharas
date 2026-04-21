import fastify from "fastify";
import fastifyPostgres from "@fastify/postgres";
import cors from "@fastify/cors";
import multiparr from "@fastify/multipart"
import dotenv from 'dotenv';
import { upload_image } from "./uploadImageToCloudinary";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config({path: "../.env"})
cloudinary.config
({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_CLOUD_KEY,
	api_secret: process.env.API_CLOUD_SECRET
});

type Issue =
{
	issue_title: string;
	category: number;
	description: string;
	address: string;
	neighborhood: string;
	date: string;
	status?: string;
	latitude: number;
	longitude: number;
};

const	server = fastify({logger: true});
server.register(fastifyPostgres, {connectionString: process.env.DATABASE, ssl: false});
server.register(cors, {origin: ["http://localhost:3000"]});
server.register(multiparr);

server.get("/reports", async () =>
{
	const	{rows} = await server.pg.query("SELECT * FROM blassareviews");
	return (rows);
});

server.get("/locations", async () =>
{
	const	{rows} = await server.pg.query("SELECT id, issue_title, latitude, longitude FROM blassareviews");
	return (rows);
});

server.post("/reports", async (req, res) =>
{
	let		data = await req.file();
	if (!data)
	{
		res.code(401);
		return ({error: "Image not sended"});
	}
	let		feilds = data.fields as Record<string, {value: string}>;
	const	{issue_title, category, description, address, neighborhood, date, latitude, longitude} = JSON.parse(feilds.data.value) as Issue;
	let		image_url:string = "";
	try
	{
		image_url = await upload_image(data, "reports");
		const { rows } = await server.pg.query(`INSERT INTO blassareviews (issue_title, category, description, address, neighborhood, date, status, image, latitude, longitude) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`, [issue_title, category, description, address, neighborhood, date, "pending", image_url, latitude, longitude]);
		console.log(rows);
		return (rows);
	}
	catch (e)
	{
		console.error(e);
		res.code(401);
		return ({error: "Failed to upload image"});
	}
});

async function start(is_there_pg: boolean)
{
	try
	{
		if (is_there_pg)
		{
			await server.after();
			const client = await server.pg.connect();
			client.release();
			server.log.info("✅ Database connection successful!");
		}
		await server.listen({ port: Number(process.env.PORT) || 3001, host: "0.0.0.0" });
		server.log.info("🚀 Server is running");
	}
	catch (err)
	{
		server.log.error(err);
		process.exit(1);
	}
}

start(true);
