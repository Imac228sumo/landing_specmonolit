'use client'

import Link from 'next/link'

import styles from './RightSide.module.scss'
import InstagramLogoSvg from '@/components/elements/instagram-logo-svg/InstagramLogoSvg'
import MailLogoSvg from '@/components/elements/mail-logo-svg/MailLogoSvg'
import TelegramLogoSvg from '@/components/elements/telegram-logo-svg/TelegramLogoSvg'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import {
	getEmail,
	getInstagram,
	getPhone,
	getTelegram,
} from '@/utils/get-env/getEnv'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

export default function RightSide() {
	return (
		<section className={styles.wrapper}>
			<section className={styles.navigation}>
				<h3>Навигация</h3>
				<ul>
					<li>
						<button onClick={() => scrollTo('section_five')}>Услуги</button>
					</li>
					<li>
						<button onClick={() => scrollTo('section_three')}>
							О Компании
						</button>
					</li>
					<li>
						<button onClick={() => scrollTo('section_six')}>Проекты</button>
					</li>
					<li>
						<button onClick={() => scrollTo('section_seven')}>
							Калькулятор
						</button>
					</li>
					<li>
						<button onClick={() => scrollTo('section_eight')}>Партнеры</button>
					</li>
				</ul>
			</section>
			<section className={styles.contacts}>
				<h3>Контакты</h3>
				<ul>
					<li>
						<a href={`tel:${getPhone()}`}>
							<div>Тел: </div>
							<div> {formattedPhone(getPhone() || '') || 'не доступно'}</div>
						</a>
					</li>
					<li>
						<a href={`mailto:${getEmail()}`}>
							<div>Почта: </div>
							<div> {getEmail() || 'не доступно'}</div>
						</a>
					</li>
					<li>
						<a href=''>Cоциальные сети:</a>
					</li>
				</ul>
				<ul>
					<li>
						<Link href={getTelegram() || ''}>
							<TelegramLogoSvg />
						</Link>
					</li>
					<li>
						<a href={`mailto:${getEmail()}`}>
							<MailLogoSvg />
						</a>
					</li>
					<li>
						<a href={getInstagram() || ''}>
							<InstagramLogoSvg />
						</a>
					</li>
				</ul>
			</section>
		</section>
	)
}
