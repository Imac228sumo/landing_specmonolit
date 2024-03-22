'use client'

import { motion } from 'framer-motion'

import styles from './SectionOne.module.scss'
import { buttonAnimation, textAnimationTop } from '@/animations/animations'
import ArrowSmallSvg from '@/components/elements/arrow/ArrowSmallSvg'

export default function SectionOne({ handleOpen }: { handleOpen: () => void }) {
	const animation = textAnimationTop
	return (
		<motion.section
			initial='hidden'
			whileInView={'visible'}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				<div>
					<motion.h5 custom={4} variants={animation}>
						Строительная компания
					</motion.h5>
					<motion.h1 custom={3} variants={animation}>
						<b>СПЕЦ</b>МОНОЛИТ
					</motion.h1>
				</div>
				<div>
					<motion.h5 custom={2} variants={animation}>
						Мы создаем промышленные полы для вас
					</motion.h5>
				</div>
				<motion.div
					variants={animation}
					custom={1}
					onClick={() => handleOpen()}
				>
					<motion.div
						variants={buttonAnimation}
						whileHover='hover'
						whileTap={'tap'}
					>
						<motion.span>
							<h4>Оставить заявку</h4>
							<ArrowSmallSvg />
						</motion.span>

						<motion.p>
							Рассчитаем стоимость для <br /> вашего объекта
						</motion.p>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	)
}
