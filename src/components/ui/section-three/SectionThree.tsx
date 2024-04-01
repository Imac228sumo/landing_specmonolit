'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { m } from 'framer-motion'

import styles from './SectionThree.module.scss'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export default function SectionThree() {
	const is1150 = useMediaQuery('(min-width:1150px)')
	const is480 = useMediaQuery('(max-width:480px)')

	return (
		<m.section
			id='section_three'
			initial='hidden'
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				<div>
					<m.h5 custom={1} variants={textAnimation}>
						О КОМПАНИИ
					</m.h5>
				</div>
				<div>
					{is480 ? (
						<m.p custom={2} variants={textAnimation}>
							Компания СПЕЦМОНОЛИТ была основана 15 лет назад. За годы работы мы
							завершили 50+ крупных промышленных объектов приняли участие в 170
							строительных проектах, в собственной технической базе более 60
							единиц техники.
						</m.p>
					) : (
						<m.p custom={2} variants={textAnimation}>
							Компания <b>СПЕЦМОНОЛИТ</b> была основана 15 лет назад. За годы
							работы: {is1150 && <br />} мы успели крепко обосноваться в своей
							нише и успешно проработать без нареканий на 50+ крупных
							промышленных объектов энергетики и металлургии, принять участие в
							170 строительных проектах, также обрести наличие собственной
							технической базы более 60 единиц и всего необходимого
							оборудования. Очень рады, что удается с легкостью находить общий
							язык с нашими партнерами и поставщиками на долгие годы.
						</m.p>
					)}
				</div>
			</div>
		</m.section>
	)
}
