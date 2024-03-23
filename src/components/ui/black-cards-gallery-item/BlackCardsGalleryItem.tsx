'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import styles from './BlackCardsGalleryItem.module.scss'
import { buttonAnimation } from '@/animations/animations'
import ArrowMediumSvg from '@/components/elements/arrow/ArrowMediumSvg'
import { IBlackCardItem } from '@/shared/black-cards-list.interface'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

interface BlackCardsGalleryItemProps {
	item: IBlackCardItem
}

const BlackCardsGalleryItem = forwardRef<
	HTMLDivElement,
	BlackCardsGalleryItemProps
>(({ item }, ref) => {
	return (
		<motion.div
			onClick={() => scrollTo(item.href)}
			ref={ref}
			className={cn(styles.item, {
				[styles.notBlack]: !item.isBlack,
				[styles.notActive]: !item.isActive,
			})}
			variants={item.isActive ? buttonAnimation : undefined}
			whileHover='hover'
			whileTap={'tap'}
		>
			<button role={'button'} aria-label={item.title}>
				<div>
					<ArrowMediumSvg
						color={item.isActive ? (item.isBlack ? 'white' : '#000') : 'white'}
					/>
				</div>
				<p>{item.title}</p>
			</button>
		</motion.div>
	)
})

export const MBlackCardsGalleryItem = motion(BlackCardsGalleryItem)
export default BlackCardsGalleryItem
BlackCardsGalleryItem.displayName = 'BlackCardsGalleryItem'
