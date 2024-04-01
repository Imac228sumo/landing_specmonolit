import React, { Suspense } from 'react'

// import HeaderContacts from '../header-contacts/HeaderContacts'
// import Logo from '../logo/Logo'
// import MobileMenu from '../mobile-menu/MobileMenu'
// import NavBar from '../nav-bar/NavBar'
import styles from './Header.module.scss'

const LazyMobileMenu = React.lazy(() => import('../mobile-menu/MobileMenu'))
const LazyLogo = React.lazy(() => import('../logo/Logo'))
const LazyNavBar = React.lazy(() => import('../nav-bar/NavBar'))
const LazyHeaderContacts = React.lazy(
	() => import('../header-contacts/HeaderContacts')
)

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<Suspense>
						<LazyMobileMenu />
					</Suspense>

					<Suspense>
						<LazyLogo />
					</Suspense>

					<Suspense>
						<LazyNavBar />
					</Suspense>
					<Suspense>
						<LazyHeaderContacts />
					</Suspense>
				</div>
			</div>
		</header>
	)
}
