'use client'

import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { forwardRef } from 'react'

import styles from './ServicesCardsGalleryItem.module.scss'
import ArrowSmallSvg from '@/components/elements/arrow/ArrowSmallSvg'
import { IServicesCardItem } from '@/shared/services-cards-list-item.interface'
import { containsNumber } from '@/utils/string/containsNumber'

interface ServicesCardsGalleryItemProps {
	item: IServicesCardItem
	handleOpen: () => void
}

const ServicesCardsItem = styled(Paper)(({ theme }) => ({
	transitionProperty: 'transform',
	transitionTimingFunction: 'ease-in-out',
	transitionDuration: '200ms',
	width: '100%',
	padding: '0px',
	boxShadow: 'none',
	backgroundColor: '#aaaaaa',
	borderRadius: '0px',
}))

const ServicesCardsGalleryItem = forwardRef<
	HTMLDivElement,
	ServicesCardsGalleryItemProps
>(({ item, handleOpen }, ref) => {
	const handleChange = () => {
		setTimeout(() => {
			handleOpen()
		}, 50)
	}

	return (
		<Grid
			ref={ref}
			mobileXs={1}
			mobile={1}
			tablet={1}
			tabletXs={1}
			laptop={1}
			desktop={1}
			padding='5px 5px 5px 5px'
		>
			<ServicesCardsItem className={cn(styles.item)}>
				<div
					onClick={() => handleChange()}
					className={cn({
						[styles.withText]: item.image && item.title,
					})}
				>
					{item.image ? (
						<>
							<Image
								alt={item.title}
								src={item.image}
								fill
								draggable={false}
								priority
								sizes='100%'
							/>
							<div className={styles.content}>
								<div className={styles.black_line}></div>
								<div className={styles.title}>{item.title}</div>
								<div
									className={cn(styles.description, {
										[styles.withNumber]: containsNumber(item.descriptions),
									})}
								>
									{item.descriptions}
								</div>
							</div>
						</>
					) : (
						<>
							<div className={styles.request}>
								<div>
									<span>
										<h4>Оставить заявку</h4>
										<ArrowSmallSvg />
									</span>

									<p>
										Рассчитаем стоимость для <br /> вашего объекта в течение
										<br /> 2-х часов
									</p>
								</div>
							</div>
						</>
					)}
				</div>
			</ServicesCardsItem>
		</Grid>
	)
})

export const MServicesCardsGalleryItem = motion(ServicesCardsGalleryItem)
export default ServicesCardsGalleryItem
ServicesCardsGalleryItem.displayName = 'ServicesCardsGalleryItem'
