import Link from 'next/link'
// import LogoMediumSvg from '@/components/elements/site-logo-svg/LogoMediumSvg'
import React, { Suspense } from 'react'

import styles from './LeftSide.module.scss'

const LazyLogoMediumSvg = React.lazy(
	() => import('@/components/elements/site-logo-svg/LogoMediumSvg')
)

export default function LeftSide() {
	return (
		<section className={styles.wrapper}>
			<section>
				<Suspense>
					<LazyLogoMediumSvg />
				</Suspense>
				<h3 title='МОНОЛИТУРАЛ'>МОНОЛИТУРАЛ</h3>
			</section>
			<section>
				<Link
					role='link'
					aria-label='Политика конфиденциальности'
					href='/policy'
				>
					Политика конфиденциальности
				</Link>
				<span>ИП Самолов С.C</span>
			</section>
		</section>
	)
}
