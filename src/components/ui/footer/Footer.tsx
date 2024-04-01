import React, { Suspense } from 'react'

// import LeftSide from '../left-side-footer/LeftSide'
// import RightSide from '../right-side-footer/RightSide'
import styles from './Footer.module.scss'

const LazyLeftSide = React.lazy(() => import('../left-side-footer/LeftSide'))
const LazyRightSide = React.lazy(() => import('../right-side-footer/RightSide'))

export default function Footer() {
	return (
		<footer id='footer' className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<Suspense>
						<LazyLeftSide />
					</Suspense>
					<Suspense>
						<LazyRightSide />
					</Suspense>
				</div>
			</div>
		</footer>
	)
}
