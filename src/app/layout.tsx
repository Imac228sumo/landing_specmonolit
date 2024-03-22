import cn from 'classnames'
import type { Metadata } from 'next'
import { Manrope, Raleway } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '@/assets/styles/globals.scss'

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
	title: 'Спец монолит',
	description: 'Спец монолит',
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
