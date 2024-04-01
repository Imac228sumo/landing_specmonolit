'use client'

import { m } from 'framer-motion'

import styles from './SectionTwo.module.scss'
import {
	buttonAnimation,
	textAnimationBottom,
	textAnimationLeft,
	textAnimationRight,
} from '@/animations/animations'
import ArrowBigSvg from '@/components/elements/arrow/ArrowBigSvg'
import ArrowRightSmallSvg from '@/components/elements/arrow/ArrowRightSmallSvg'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

export default function SectionTwo({ handleOpen }: { handleOpen: () => void }) {
	return (
		<m.section
			initial='hidden'
			whileInView={'visible'}
			viewport={{ once: true, amount: 0.2 }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				<m.div onClick={() => handleOpen()}>
					<span>
						<m.h4 custom={6} variants={textAnimationLeft}>
							Оставить заявку
						</m.h4>
						<m.span custom={6} variants={textAnimationRight}>
							<ArrowBigSvg color='white' />
						</m.span>
					</span>
					<m.p custom={6} variants={textAnimationLeft}>
						Рассчитаем стоимость для <br /> вашего объекта
					</m.p>
				</m.div>
				<div>
					<div>
						<m.h5 custom={6} variants={textAnimationBottom}>
							Геодезическая съёмка всего объекта, <br /> нашими специалистами в
							подарок
						</m.h5>
					</div>
					<m.div custom={7} variants={textAnimationBottom}>
						<m.button
							role={'button'}
							aria-label='Рассчитать стоимость'
							onClick={() => scrollTo('section_seven')}
							variants={buttonAnimation}
							whileHover={'hover'}
							whileTap={'tap'}
						>
							<span>
								Рассчитать стоимость <ArrowRightSmallSvg color='white' />
							</span>
						</m.button>
					</m.div>
				</div>
			</div>
		</m.section>
	)
}
