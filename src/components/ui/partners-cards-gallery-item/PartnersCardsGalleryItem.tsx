'use client'

import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import styles from './PartnersCardsGalleryItem.module.scss'
import { IPartnersCardItem } from '@/shared/partners-cards-list-item.interface'

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
	padding: '20px',
	'@media (max-width: 1280px)': {
		padding: 'calc(15px + (5 + 5 * 3.539) * ((100vw - 998px) / 1280))',
	},
	'@media (max-width: 600px)': {
		padding: '12px',
	},
	'@media (max-width: 599px)': {
		padding: 'calc(10px + (2 + 2 * 9.7565) * ((100vw - 480px) / 1280))',
	},
	'@media (max-width: 480px)': {
		padding: '10px',
	},
}))

const PartnersCardsGalleryItem: FC<{ item: IPartnersCardItem }> = ({
	item,
}) => {
	const ServicesCardsItem = styled(Paper)(({ theme }) => ({
		transitionProperty: 'transform',
		transitionTimingFunction: 'ease-in-out',
		transitionDuration: '200ms',
		width: '100%',
		padding: '0px',
		boxShadow: 'none',
		backgroundColor: '#f6f6f6',
		borderRadius: '0px',
	}))
	return (
		<ResponsiveGrid
			mobileXs={1}
			mobile={1}
			tablet={1}
			tabletXs={1}
			laptop={1}
			desktop={1}
		>
			<motion.div
				layout
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
			>
				<ServicesCardsItem className={cn(styles.item)}>
					<motion.div>
						<Image
							alt={item.title}
							src={item.image}
							fill
							draggable={false}
							priority
							sizes='41%'
						/>
						<div className={styles.title}>{item.title}</div>
					</motion.div>
				</ServicesCardsItem>
			</motion.div>
		</ResponsiveGrid>
	)
}

export default PartnersCardsGalleryItem