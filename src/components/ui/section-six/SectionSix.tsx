'use client'

import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/pagination'
import 'swiper/css/virtual'
import {
	A11y,
	Mousewheel,
	Navigation,
	Pagination,
	Virtual,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './SectionSix.module.scss'
import SlideButtons from './SlideButtons'
import { slides } from '@/shared/slider-cards-list.data'
import { ISlide } from '@/shared/slider-cards-list.interface'

export default function SectionSix() {
	const is999 = useMediaQuery('(min-width:999px)')
	const is768 = useMediaQuery('(max-width:768px)')
	const swiperRef = useRef<any>(null)
	const [mySlides, setMySlides] = useState<ISlide[]>([])

	useEffect(() => {
		setMySlides(prev => slides)
	}, [])

	return (
		<section id='section_six' className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.container}>
					<section className={styles.left_side}>
						<div className={styles.text}>
							<Typography className={styles.title}>Проекты компании</Typography>
							<Typography className={styles.caption}>
								Наша компания выполняет заказы на самых крупных предприятиях
								России <br /> Наша компания выполняет заказы на самых крупных
								предприятиях России:
							</Typography>
						</div>
						{is999 && <SlideButtons swiperRef={swiperRef} />}
					</section>
					<section className={styles.right_side}>
						<Swiper
							ref={swiperRef}
							// onBeforeInit={(swiper: SwiperType) => {
							// 	swiperRef.current = swiper
							// }}
							modules={[Navigation, Pagination, A11y, Mousewheel, Virtual]}
							slidesPerView={1}
							spaceBetween={10}
							className={styles.carousel}
							// navigation
							// pagination={{ clickable: true }}
							slidesPerGroup={is768 ? 1 : 2}
							mousewheel={{
								forceToAxis: true,
							}}
							rewind={true}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 30,
								},
								1024: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
							}}
						>
							{mySlides.map((slide, index) => (
								<SwiperSlide
									key={slide.key}
									virtualIndex={index}
									className={styles.res_slide}
								>
									<>
										<Image
											alt={`photo of the floor\n ${slide.title}`}
											src={slide.image}
											fill={true}
											draggable={false}
											priority
											sizes='100%'
										/>
										<Box className={styles.media_information}>
											<Typography className={styles.media_caption}>
												{slide.title}
											</Typography>
											<Typography className={styles.media_description}>
												{slide.caption}
											</Typography>
										</Box>
									</>
								</SwiperSlide>
							))}
						</Swiper>
						{!is999 && <SlideButtons swiperRef={swiperRef} size={'small'} />}
					</section>
				</div>
			</div>
		</section>
	)
}
