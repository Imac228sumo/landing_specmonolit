import Link from 'next/link'

import styles from './LeftSide.module.scss'
import LogoMediumSvg from '@/components/elements/site-logo-svg/LogoMediumSvg'

export default function LeftSide() {
	return (
		<section className={styles.wrapper}>
			<section>
				<LogoMediumSvg />
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
