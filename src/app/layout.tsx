import { GoogleAnalytics } from '@next/third-parties/google'
import cn from 'classnames'
import type { Metadata } from 'next'
import { Manrope, Raleway } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '@/assets/styles/globals.scss'
import SmoothScrolling from '@/components/ui/smooth-scrolling/SmoothScrolling'
import { BASE_URL } from '@/config/api.config'

const raleway = Raleway({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	display: 'swap',
	variable: '--font-raleway',
})

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	display: 'swap',
	variable: '--font-manrope',
})

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: 'Наливные и бетонные полы заказать в Челябинске и Екатеринбурге',
		template: `%s - Наливные и бетонные полы заказать в Челябинске и Екатеринбурге`,
	},
	description:
		'Заказать установку наливных полов в Челябинске, Екатеринбурге и УРФО. Рассчитать стоимость полов с помощью удобного калькулятора и узнать цену. Ремонт полов любой сложности. Бетонные топпинговые полы купить',
	keywords: ['Наливной пол', 'Бетонный пол'],
	authors: [
		{
			name: 'Валерий Сергеевич',
			url: 'https://vk.com/stremnyy',
		},
	],
	creator: 'Валерий',
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: BASE_URL,
		title: 'Наливные и бетонные полы заказать в Челябинске и Екатеринбурге',
		description:
			'Заказать установку наливных полов в Челябинске, Екатеринбурге и УРФО. Рассчитать стоимость полов с помощью удобного калькулятора и узнать цену. Ремонт полов любой сложности. Бетонные топпинговые полы купить',
	},
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='yandex-verification' content='2407deb6b0106e1d' />
			</head>
			<body
				className={cn(raleway.variable, raleway.className, manrope.variable)}
			>
				<SmoothScrolling>{children}</SmoothScrolling>
				<Toaster position='top-center' />
			</body>
			<GoogleAnalytics gaId={process.env.REACT_APP_GA_MEASUREMENT_ID || ''} />
		</html>
	)
}
