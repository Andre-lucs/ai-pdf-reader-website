"use client"
import { uploadToS3 } from '@/lib/s3'
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone,  } from 'react-dropzone'

const FileUpload = () => {

	const {getRootProps, getInputProps, } = useDropzone({
		accept: {"application/pdf": [".pdf"]},
		maxFiles: 1,
		onDrop: async (acceptedFiles) => {
			const file : File = acceptedFiles[0]
			
			if (file.size > 10 * 1024 * 1024) {
				alert('File size is too large. Please upload a file less than 10MB.')
				return
			}
			uploadToS3(file)
			.then((res) => {
				console.log("uploaded Data: %s",res)
			})
			.catch((e) => {
				console.error(e)
			})
			
		},
	});
	
	return (
		<div className='p-2 bg-white rounded-xl w-full m-5 cursor-pointer' >
			<div {...getRootProps()} className='flex flex-col items-center p-10 gap-6' >
				<input {...getInputProps()}  />
				<Inbox className='w-10 h-10 text-blue-500' />
				<p className='text-lg text-gray-500'>Drop your PDF here</p>
			</div>
		</div>
	)
}

export default FileUpload