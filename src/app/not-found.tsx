import { Metadata } from 'next'
import Link from 'next/link'

import styles from './NotFound.module.scss'

export const metadata: Metadata = {
	title: '404',
	description: 'Что-то пошло не так',
}

export default function NotFound() {
	return (
		<div className={styles.not_found}>
			<h1 title='Страница не найдена'>Страница не найдена</h1>
			<p>Страница, на которую вы пытались получить доступ, не существует.</p>
			<Link href='/'>
				<span>Перейти на главную страницу</span>
			</Link>
		</div>
	)
}
