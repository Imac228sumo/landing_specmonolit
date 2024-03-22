import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'
import LayoutPolicy from '@/components/layoutPolicy/LayoutPolicy'

export const metadata: Metadata = {
	title: 'Спец монолит',
	description: 'Спец монолит',
}

export default function PolicyLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <LayoutPolicy>{children}</LayoutPolicy>
}
