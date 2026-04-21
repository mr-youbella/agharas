import { v2 as cloudinary } from 'cloudinary';
import { MultipartFile } from '@fastify/multipart';

export async function upload_image(data: MultipartFile | undefined, folder_name: string): Promise<string>
{
	if (!data)
		throw Error("MultipartFile is undefined");
	const buffer_image = await data.toBuffer();
	const promise = await new Promise<string>((resolve) =>
	{
		const upload_image = cloudinary.uploader.upload_stream({folder: folder_name}, (error, result) =>
		{
			if (error || !result)
				throw Error(error?.message);
			return (resolve(result.url));
		});
		upload_image.end(buffer_image);
	});
	return (promise);
}
