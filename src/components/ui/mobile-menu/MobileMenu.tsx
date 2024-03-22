'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import styles from './MobileMenu.module.scss'
import { menuSlide, slide } from '@/animations/animations'
import InstagramLogoSvg from '@/components/elements/instagram-logo-svg/InstagramLogoSvg'
import MailLogoSvg from '@/components/elements/mail-logo-svg/MailLogoSvg'
import TelegramLogoSvg from '@/components/elements/telegram-logo-svg/TelegramLogoSvg'
import { routes } from '@/shared/routes-list.data'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import {
	getEmail,
	getInstagram,
	getPhone,
	getTelegram,
} from '@/utils/get-env/getEnv'

export default function MobileMenu() {
	const matches = useMediaQuery('(max-width:890px)')
	const [value, setValue] = useState('')
	const [isOpen, setOpen] = useState(false)
	const [headerHeight, setHeaderHeight] = useState(72)
	const [scrollHeight, setScrollHeight] = useState(0)
	const [animationComplete, setAnimationComplete] = useState(false)

	const ref = useRef(null)
	useClickAway(ref, () => setOpen(false))

	useEffect(() => {
		if (isOpen) {
			setValue(prev => '')
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => {
			setScrollHeight(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)
		if (section) {
			const yOffset = -100 // желаемый отступ сверху в пикселях
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset

			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}

	const closAndRoute = (sectionId: string) => {
		setValue(prev => sectionId)
		setOpen(prev => false)
	}

	useEffect(() => {
		if (animationComplete && !isOpen && value) {
			setTimeout(() => {
				scrollToSection(value)
			}, 500)
		}
	}, [animationComplete, value, isOpen])

	return (
		<>
			{matches ? (
				<>
					<div
						className={cn(styles.overlay, {
							[styles.active]: isOpen,
						})}
						style={{ marginTop: headerHeight - scrollHeight }}
					></div>
					<div ref={ref} className={styles.mobile_menu}>
						<Hamburger toggled={isOpen} size={24} toggle={setOpen} />
						<AnimatePresence mode='wait'>
							{isOpen && (
								<motion.div
									onAnimationComplete={() => setAnimationComplete(prev => true)}
									variants={menuSlide}
									initial='initial'
									animate='enter'
									exit='exit'
									className={styles.menu_container}
									style={{
										marginTop: headerHeight - scrollHeight,
										height: `calc(100vh - ${headerHeight - scrollHeight}px)`,
									}}
								>
									<div className={styles.body}>
										<div className={styles.nav}>
											<motion.div
												custom={1}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
												className={styles.title}
											>
												Навигация
											</motion.div>
											{routes.map((route, index) => {
												return (
													<motion.div
														key={index}
														className={styles.buttons}
														custom={index + 0.2}
														variants={slide}
														initial='initial'
														animate='enter'
														exit='exit'
													>
														<button onClick={() => closAndRoute(route.href)}>
															{' '}
															{route.title}
														</button>
													</motion.div>
												)
											})}
										</div>
										<div className={styles.footer}>
											<motion.div
												custom={0.2}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
												className={styles.title}
											>
												Контакты
											</motion.div>
											<motion.div
												custom={0.2}
												className={styles.contact}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
											>
												<a
													href={`tel:${getPhone()}`}
													onClick={() => setOpen(false)}
												>
													<div>Тел: </div>
													<div>
														{' '}
														{formattedPhone(getPhone() || '') || 'не доступно'}
													</div>
												</a>
											</motion.div>
											<motion.div
												custom={0.4}
												className={styles.contact}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
											>
												<a
													href={`mailto:${getEmail()}`}
													onClick={() => setOpen(false)}
												>
													<div>Почта: </div>
													<div> {getEmail() || 'не доступно'}</div>
												</a>
											</motion.div>
											<motion.div
												custom={0.6}
												className={styles.link}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
											>
												<div>Cоциальные сети:</div>
											</motion.div>
											<motion.div
												custom={0.8}
												variants={slide}
												initial='initial'
												animate='enter'
												exit='exit'
											>
												<div>
													<a
														href={getTelegram() || ''}
														onClick={() => setOpen(false)}
													>
														<TelegramLogoSvg />
													</a>
												</div>
												<div>
													<a
														href={`mailto:${getEmail()}`}
														onClick={() => setOpen(false)}
													>
														<MailLogoSvg />
													</a>
												</div>
												<div>
													<a
														href={getInstagram() || ''}
														onClick={() => setOpen(false)}
													>
														<InstagramLogoSvg />
													</a>
												</div>
											</motion.div>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</>
			) : null}
		</>
	)
}