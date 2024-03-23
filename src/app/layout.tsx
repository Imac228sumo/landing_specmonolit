import cn from 'classnames'
import type { Metadata } from 'next'
import { Manrope, Raleway } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '@/assets/styles/globals.scss'
import { siteConfig } from '@/config/site'
import { getAppUrl } from '@/utils/get-env/getEnv'

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
	metadataBase: new URL('https://landing-specmonolit.vercel.app/'),
	title: {
		default: 'Наливные полы любой сложности ☎ СК Спецмонолит',
		template: `$%s - Наливные полы любой сложности ☎ СК Спецмонолит`,
	},
	description:
		'Наливные полы любой сложности можете заказать у нас. Работы по топпинговым полам, полимерные полы, промышленный наливной пол, ремонт покрытий. Обращайтесь!',
	keywords: [
		'полы',
		'наливные полы',
		'полы любой сложности',
		'наливные полы любой сложности',
		'красивые полы',
		'красивые пол',
		'супер полы',
		'пол',
		'половая доска',
		'бетон для пола',
		'строительство',
		'кастомные полы',
		'делаем пол',
		'сложные полы',
		'полы для ванн',
		'полы для кухни',
		'сложные для дома',
		'полы для завода',
		'полы для офиса',
		'полы для завода',
		'полы для офиса',
		'floors',
		'self-leveling floors',
		'floors of any complexity',
		'beautiful floors',
		'super floors',
		'gender',
		'floorboard',
		'concrete for the floor',
		'construction',
		'custom floors',
		'making the floor',
		'complex floors',
		'bathroom floors',
		'kitchen floors',
		'challenging for the home',
		'floors for the factory',
		'office floors',
		'floors for the factory',
		'office floors',
	],
	authors: [
		{
			name: 'Валерий Сергеевич',
			url: 'https://vk.com/stremnyy',
		},
	],
	creator: 'Валерий',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: getAppUrl() || 'https://landing-specmonolit.vercel.app/',
		title: 'Наливные полы любой сложности ☎ СК Спецмонолит',
		description:
			'An open-source metadata builder tool for generating metadata and metadata file conventions for Next.js apps.',
		siteName: 'СК Спецмонолит',
		images: [
			{
				url: `${siteConfig.url}`,
				width: 1200,
				height: 715,
				alt: 'Callsquare',
			},
		],
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
			<body
				className={cn(raleway.variable, raleway.className, manrope.variable)}
			>
				{children}
				<Toaster position='top-center' />
			</body>
		</html>
	)
}
