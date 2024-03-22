import { IconButton } from '@mui/material'
import cn from 'classnames'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/pagination'
import 'swiper/css/virtual'

import styles from './SlideButtons.module.scss'
import ArrowBackSmallSvg from '@/components/elements/arrow/ArrowBackSmallSvg'
import ArrowBackSvg from '@/components/elements/arrow/ArrowBackSvg'
import ArrowForwardSmallSvg from '@/components/elements/arrow/ArrowForwardSmallSvg'
import ArrowForwardSvg from '@/components/elements/arrow/ArrowForwardSvg'

const SlideButtons: FC<{
	swiperRef: any
	size?: string
}> = ({ swiperRef, size }) => {
	return (
		<div
			className={cn(size === 'small' ? styles.buttons_small : styles.buttons)}
		>
			<IconButton
				className={styles.button}
				aria-label='slidePrev'
				onClick={() => swiperRef.current?.swiper.slidePrev()}
			>
				{size === 'small' ? <ArrowBackSmallSvg /> : <ArrowBackSvg />}
			</IconButton>
			<IconButton
				className={styles.button}
				aria-label='slideNext'
				onClick={() => swiperRef.current?.swiper.slideNext()}
			>
				{size === 'small' ? <ArrowForwardSmallSvg /> : <ArrowForwardSvg />}
			</IconButton>
		</div>
	)
}
export default SlideButtons
