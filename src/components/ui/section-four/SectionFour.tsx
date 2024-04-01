'use client'

import { m } from 'framer-motion'

import { MBlackCardsGalleryItem } from '../black-cards-gallery-item/BlackCardsGalleryItem'

import styles from './SectionFour.module.scss'
import { blackCardsList } from '@/shared/black-cards-list.data'

const cardAnimationLeft = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const cardAnimationRight = {
	hidden: {
		x: 200,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export default function SectionFour() {
	return (
		<m.section
			initial='hidden'
			whileInView={'visible'}
			viewport={{ amount: 0.2, once: true }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				<div className={styles.container}>
					<section>
						<m.section custom={2} variants={cardAnimationLeft}>
							<span>15</span>
						</m.section>
						<section>
							<MBlackCardsGalleryItem
								custom={2}
								variants={cardAnimationLeft}
								item={blackCardsList.items[0]}
							/>
							<MBlackCardsGalleryItem
								custom={0}
								variants={cardAnimationRight}
								item={blackCardsList.items[1]}
							/>
						</section>
					</section>

					<section>
						<MBlackCardsGalleryItem
							custom={1}
							variants={cardAnimationLeft}
							item={blackCardsList.items[2]}
						/>
						<MBlackCardsGalleryItem
							custom={0}
							variants={cardAnimationLeft}
							item={blackCardsList.items[3]}
						/>
						<MBlackCardsGalleryItem
							custom={1}
							variants={cardAnimationRight}
							item={blackCardsList.items[4]}
						/>
						<MBlackCardsGalleryItem
							custom={2}
							variants={cardAnimationRight}
							item={blackCardsList.items[5]}
						/>
					</section>
				</div>
			</div>
		</m.section>
	)
}
