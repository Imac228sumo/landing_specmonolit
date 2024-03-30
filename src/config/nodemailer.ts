import nodemailer from 'nodemailer'

const email = process.env.APP_EMAIL_USER
const pass = process.env.REACT_APP_EMAIL_PASS
const domain = process.env.APP_DOMAIN

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass: pass,
	},
})

export const mailOptions = () => {
	return {
		from: email || 'Мне',
		to: email || 'Мой сайт',
		subject: domain || 'СПЕЦМОНОЛИТ',
	}
}
