import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export async function uploadToS3(file: File) {
	try{
		const client = new S3Client({
			region: process.env.NEXT_PUBLIC_S3_REGION as string,
			credentials: {
				accessKeyId: process.env.NEXT_PUBLIC_S3_AWS_ACCESS_KEY_ID as string,
				secretAccessKey: process.env.NEXT_PUBLIC_S3_AWS_SECRET_ACCESS_KEY as string,
			}
		})

		const file_key = 'uploads/'+ Date.now().toString() + file.name.replace(' ', '-')

		const upload = new PutObjectCommand({
			Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME as string,
			Key: file_key,
			Body: file,
		})

		const res = await client.send(upload)
		if (res.$metadata.httpStatusCode !== 200) {
			return Promise.reject(new Error('Failed to upload file'))
		}

		console.log('File uploaded successfully: '+ file_key)

		return Promise.resolve({
			file_key,
			file_name: file.name,
		})
	}catch(e){
		console.log(e)
	}
	
}

export function getS3Url(file_key: string) {

	return `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_S3_REGION}.amazonaws.com/${file_key}`;
}