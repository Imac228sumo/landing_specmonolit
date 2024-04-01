'use client'

import { Box, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { m } from 'framer-motion'

import { MServicesCardsGalleryItem } from '../services-cards-gallery-item/ServicesCardsGalleryItem'

import styles from './SectionFive.module.scss'
import { servicesCardsList } from '@/shared/services-cards-list-item.data'

declare module '@mui/system' {
	interface BreakpointOverrides {
		// Your custom breakpoints
		desktop: true
		laptop: true
		tablet: true
		tabletXs: true
		mobile: true
		mobileXs: true
		// Remove default breakpoints
		xs: false
		sm: false
		md: false
		lg: false
		xl: false
	}
}

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

const cardAnimationLeft = {
	hidden: {
		y: 200,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
	hover: { scale: 1.04 },
	tap: {
		scale: 0.95,
	},
}

export default function SectionFive({
	handleOpen,
}: {
	handleOpen: () => void
}) {
	const is1024 = useMediaQuery('(max-width:1024px)')

	return (
		<m.section
			id='section_five'
			initial='hidden'
			whileInView={'visible'}
			viewport={{ amount: 0, once: true }}
			className={styles.wrapper}
		>
			<div className={styles.content}>
				{/* variants={is1024 ? textAnimation : undefined} */}
				<m.h1 custom={1}>наши Услуги</m.h1>
				<Box style={{ flexGrow: 1 }}>
					<ThemeProvider
						theme={createTheme({
							breakpoints: {
								values: {
									desktop: 1280,
									laptop: 1024,
									tablet: 890,
									tabletXs: 600,
									mobile: 480,
									mobileXs: 360,
								},
							},
						})}
					>
						<Grid
							width={'100%'}
							container
							spacing={0}
							columns={{
								mobileXs: 1,
								mobile: 1,
								tabletXs: 2,
								tablet: 2,
								laptop: 3,
								desktop: 3,
							}}
						>
							{servicesCardsList.items.map((item, index) => {
								return (
									<MServicesCardsGalleryItem
										handleOpen={handleOpen}
										custom={index / 5}
										// variants={is1024 ? cardAnimationLeft : undefined}
										viewport={{ once: true }}
										initial='hidden'
										whileInView={'visible'}
										whileHover={'hover'}
										whileTap={'tap'}
										layoutId={item.id}
										item={item}
										key={index}
									/>
								)
							})}
						</Grid>
					</ThemeProvider>
				</Box>
			</div>
		</m.section>
	)
}
