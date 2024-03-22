import type { PropsWithChildren } from 'react'

import Footer from '../ui/footer/Footer'
import Header from '../ui/header/Header'

import styles from './LayoutClient.module.scss'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
