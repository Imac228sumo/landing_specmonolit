import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import styles from './LayoutPolicy.module.scss'

export default function LayoutPolicy({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<Link role='link' aria-label='Вернуться на главную' href='/'>
					Вернуться на главную
				</Link>
			</header>

			<main>{children}</main>
		</div>
	)
}
