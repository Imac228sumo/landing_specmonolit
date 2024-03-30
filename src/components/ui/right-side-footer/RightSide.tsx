'use client'

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
				<h3 title='Навигация'>Навигация</h3>
				<ul>
					<li>
						<button
							role={'button'}
							aria-label='Услуги'
							onClick={() => scrollTo('section_five')}
						>
							Услуги
						</button>
					</li>
					<li>
						<button
							role={'button'}
							aria-label='О компании'
							onClick={() => scrollTo('section_three')}
						>
							О компании
						</button>
					</li>
					<li>
						<button
							role={'button'}
							aria-label='Проекты'
							onClick={() => scrollTo('section_six')}
						>
							Проекты
						</button>
					</li>
					<li>
						<button
							role={'button'}
							aria-label='Калькулятор'
							onClick={() => scrollTo('section_seven')}
						>
							Калькулятор
						</button>
					</li>
					<li>
						<button
							role={'button'}
							aria-label='Партнеры'
							onClick={() => scrollTo('section_eight')}
						>
							Партнеры
						</button>
					</li>
				</ul>
			</section>
			<section className={styles.contacts}>
				<h3 title='Контакты'>Контакты</h3>
				<ul>
					<li>
						<a
							role={'link'}
							aria-label='Номер телефона'
							href={`tel:${getPhone()}`}
						>
							<div>Тел: </div>
							<div> {formattedPhone(getPhone() || '') || 'не доступно'}</div>
						</a>
					</li>
					<li>
						<a
							role={'link'}
							aria-label='Адрес почты'
							href={`mailto:${getEmail()}`}
						>
							<div>Почта: </div>
							<div> {getEmail() || 'не доступно'}</div>
						</a>
					</li>
					<li>
						<a aria-label='Cоциальные сети' href=''>
							Cоциальные сети:
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a role={'link'} aria-label='Телеграм' href={getTelegram() || ''}>
							<TelegramLogoSvg />
						</a>
					</li>
					<li>
						<a role={'link'} aria-label='Почта' href={`mailto:${getEmail()}`}>
							<MailLogoSvg />
						</a>
					</li>
					<li>
						<a role={'link'} aria-label='Инстаграм' href={getInstagram() || ''}>
							<InstagramLogoSvg />
						</a>
					</li>
				</ul>
			</section>
		</section>
	)
}
