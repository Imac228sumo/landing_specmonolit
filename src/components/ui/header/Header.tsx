import HeaderContacts from '../header-contacts/HeaderContacts'
import Logo from '../logo/Logo'
import MobileMenu from '../mobile-menu/MobileMenu'
import NavBar from '../nav-bar/NavBar'

import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<MobileMenu />
					<Logo />
					<NavBar />
					<HeaderContacts />
				</div>
			</div>
		</header>
	)
}
