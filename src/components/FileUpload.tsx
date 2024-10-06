"use client"
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone,  } from 'react-dropzone'

const FileUpload = () => {

	const {getRootProps, getInputProps, } = useDropzone({
		accept: {"application/pdf": [".pdf"]},
		maxFiles: 1,
		onDrop: (acceptedFiles) => {
			console.log(acceptedFiles)
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