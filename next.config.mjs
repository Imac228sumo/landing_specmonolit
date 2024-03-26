/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_EMAIL_USER: process.env.REACT_APP_EMAIL_USER,
		APP_EMAIL_PASS: process.env.REACT_APP_EMAIL_PASS,
		APP_PHONE_USER: process.env.REACT_APP_PHONE_USER,
		APP_TELEGRAM_USER: process.env.REACT_APP_TELEGRAM_USER,
		APP_INSTAGRAM_USER: process.env.REACT_APP_INSTAGRAM_USER,
		APP_G_ID: process.env.REACT_APP_G_ID,
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_DOMAIN: process.env.REACT_APP_DOMAIN,
	},
}

export default nextConfig
