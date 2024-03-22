import LeftSide from '../left-side-footer/LeftSide'
import RightSide from '../right-side-footer/RightSide'

import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer id='footer' className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<LeftSide />
					<RightSide />
				</div>
			</div>
		</footer>
	)
}
