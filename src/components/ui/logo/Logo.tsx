import Link from 'next/link'

import styles from './Logo.module.scss'
import LogoSmallSvg from '@/components/elements/site-logo-svg/LogoSmallSvg'

export default function Logo() {
	return (
		<Link
			role='link'
			aria-label='Главная страничка'
			href={'/'}
			className={styles.logo}
		>
			<LogoSmallSvg />
			<p>
				<b>СПЕЦ</b>МОНОЛИТ
			</p>
		</Link>
	)
}
