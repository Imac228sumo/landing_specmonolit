'use client'

import { m } from 'framer-motion'

import styles from './SectionOne.module.scss'
import { buttonAnimation, textAnimationTop } from '@/animations/animations'
import ArrowSmallSvg from '@/components/elements/arrow/ArrowSmallSvg'

export default function SectionOne({ handleOpen }: { handleOpen: () => void }) {
	const animation = textAnimationTop
	return (
		<m.section
			initial='hidden'
			whileInView={'visible'}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<h1
				title='Наливной пол заказать от ООО "МонолитУрал"'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол заказать от ООО "МонолитУрал"'}
			</h1>

			<h2
				title='Наливной пол Челябинск'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол Челябинск'}
			</h2>
			<h2
				title='Наливной пол Екатеринбург'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливной пол Екатеринбург'}
			</h2>
			<h2
				title='Наливное поле цена заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Наливное поле цена заказать'}
			</h2>
			<h2
				title='Промышленные полы купить Челябинск и Екатеринбург'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Промышленные полы купить Челябинск и Екатеринбург'}
			</h2>

			<h3
				title='Рассчитать стоимость пола с помощью калькулятора'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Рассчитать стоимость пола с помощью калькулятора'}
			</h3>
			<h3
				title='Залить бетонный пол, топпинговый пол в Челябинске'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Залить бетонный пол, топпинговый пол в Челябинске'}
			</h3>
			<h3
				title='Зонирование и заливка полов в Челябинске'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Зонирование и заливка полов в Челябинске'}
			</h3>
			<h3
				title='Заливка и установка бетонных, наливных полов'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Заливка и установка бетонных, наливных полов'}
			</h3>
			<h3
				title='Залив жидкого полимерного наливного пола'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Залив жидкого полимерного наливного пола'}
			</h3>

			<h4
				title='Шлифовка бетонного пола цена в Екатеринбурге'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Шлифовка бетонного пола цена в Екатеринбурге'}
			</h4>
			<h4
				title='Ремонт и восстановление пола'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Ремонт и восстановление пола'}
			</h4>
			<h4
				title='Разметка производственных и коммерческих помещений заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'Разметка производственных и коммерческих помещений заказать'}
			</h4>
			<h4
				title='3D наливные полы заказать'
				style={{ height: 0, width: 0, position: 'absolute', opacity: 0 }}
			>
				{'3D наливные полы заказать'}
			</h4>

			<div className={styles.content}>
				<div>
					<m.h3 custom={4} variants={animation}>
						Строительная компания
					</m.h3>
					<m.h1 custom={3} variants={animation}>
						<b>МОНОЛИТ</b>УРАЛ
					</m.h1>
				</div>
				<div>
					<m.h3 custom={2} variants={animation}>
						Мы создаем промышленные полы для вас
					</m.h3>
				</div>
				<m.div
					variants={animation}
					custom={1}
					onClick={() => handleOpen()}
					role={'button'}
					aria-label='Оставить заявку'
				>
					<m.div variants={buttonAnimation} whileHover='hover' whileTap={'tap'}>
						<m.span>
							<h4 title='Оставить заявку'>Оставить заявку</h4>
							<ArrowSmallSvg />
						</m.span>

						<m.p>
							Рассчитаем стоимость для <br /> вашего объекта
						</m.p>
					</m.div>
				</m.div>
			</div>
		</m.section>
	)
}
