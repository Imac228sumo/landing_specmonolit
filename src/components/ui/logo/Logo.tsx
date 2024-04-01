import Link from 'next/link'
// import LogoSmallSvg from '@/components/elements/site-logo-svg/LogoSmallSvg'
import React, { Suspense } from 'react'

import styles from './Logo.module.scss'

const LazyLogoSmallSvg = React.lazy(
	() => import('@/components/elements/site-logo-svg/LogoSmallSvg')
)

export default function Logo() {
	return (
		<Link
			role='link'
			aria-label='Главная страничка'
			href={'/'}
			className={styles.logo}
		>
			<Suspense>
				<LazyLogoSmallSvg />
			</Suspense>
			<p>
				<b>МОНОЛИТ</b>УРАЛ
			</p>
		</Link>
	)
}
