import { NextResponse } from 'next/server'
import Mail from 'nodemailer/lib/mailer'

import { mailOptions, transporter } from '@/config/nodemailer'
import { IFormData } from '@/shared/form-data.interface'
import { generateEmailContent } from '@/utils/mail-content/generateEmailContent'

export async function POST(req: Request) {
	// const res = await req.json()
	const data = await req.formData()
	const file: File | null = data.get('file') as unknown as File
	const extractData = extractFormData(data)

	let bytes = null
	let buffer = null
	if (file) {
		bytes = await file.arrayBuffer()
		buffer = Buffer.from(bytes)
	}

	try {
		const options: Mail.Options = {
			...mailOptions(),
			...generateEmailContent(extractData),
			attachments:
				file && buffer
					? [
							{
								filename: file.name,
								content: buffer,
								contentType: file.type,
							},
						]
					: undefined,
		}
		await new Promise((resolve, reject) => {
			transporter.sendMail(options, (err, response) => {
				if (err) {
					reject(err)
				} else {
					resolve(response)
				}
			})
		})
		return NextResponse.json({ message: 'Success' })
	} catch (err) {
		return NextResponse.json({ message: (err as Error).message })
	}
}

const extractFormData = (data: FormData): IFormData => {
	const result: IFormData = {}

	for (const [key, value] of data.entries()) {
		if (typeof value === 'string') {
			result[key] = value
		}
	}

	return result
}
