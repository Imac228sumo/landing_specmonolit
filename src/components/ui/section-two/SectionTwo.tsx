'use client'

import { motion } from 'framer-motion'

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
		<motion.section
			initial='hidden'
			whileInView={'visible'}
			viewport={{ once: true, amount: 0.2 }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				<motion.div onClick={() => handleOpen()}>
					<span>
						<motion.h4 custom={6} variants={textAnimationLeft}>
							Оставить заявку
						</motion.h4>
						<motion.span custom={6} variants={textAnimationRight}>
							<ArrowBigSvg color='white' />
						</motion.span>
					</span>
					<motion.p custom={6} variants={textAnimationLeft}>
						Рассчитаем стоимость для <br /> вашего объекта
					</motion.p>
				</motion.div>
				<div>
					<div>
						<motion.h5 custom={6} variants={textAnimationBottom}>
							Геодезическая съёмка всего объекта, <br /> нашими специалистами в
							подарок
						</motion.h5>
					</div>
					<motion.div custom={7} variants={textAnimationBottom}>
						<motion.button
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
						</motion.button>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
