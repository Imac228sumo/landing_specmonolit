import { axiosClassic } from '@/api/axios'

export const mailService = {
	async sendMail(data: FormData) {
		try {
			await axiosClassic.post('/sendMail', data)
		} catch (error) {
			throw error
		}
	},
}
