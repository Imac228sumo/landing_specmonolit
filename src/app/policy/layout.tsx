import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'
import LayoutPolicy from '@/components/layoutPolicy/LayoutPolicy'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
	description: 'Узнайте больше о политики конфиденциальности фирмы МонолитУрал',
}

export default function PolicyLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <LayoutPolicy>{children}</LayoutPolicy>
}
