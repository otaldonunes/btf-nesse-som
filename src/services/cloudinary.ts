import { v2 as cloudinaryClient } from 'cloudinary';

export async function cloudinary(image: string): Promise<string> {
  cloudinaryClient.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  const { secure_url } = await cloudinaryClient.uploader.upload(image, {
    resource_type: 'image',
  });

  return secure_url;
}
