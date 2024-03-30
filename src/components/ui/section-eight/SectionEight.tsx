'use client'

import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import { AnimatePresence } from 'framer-motion'
import React, { Suspense } from 'react'

import styles from './SectionEight.module.scss'
import { partnersCardsList } from '@/shared/partners-cards-list-item.data'

const LazyPartnersCardsGalleryItem = React.lazy(
	() => import('../partners-cards-gallery-item/PartnersCardsGalleryItem')
)

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

const ResponsiveBox = styled(Box)(({ theme }) => ({
	margin: '-20px',
	'@media (max-width: 1280px)': {
		margin:
			'calc(-15px + (-5 + -5 * 3.539) * ((100vw - 998px) / 1280)) !important',
	},
	'@media (max-width: 600px)': {
		margin: '-12px !important',
	},
	'@media (max-width: 599px)': {
		margin:
			'calc(-10px + (-2 + -2 * 9.7565) * ((100vw - 480px) / 1280)) !important',
	},
	'@media (max-width: 480px)': {
		margin: '-10px !important',
	},
}))

export default function SectionEight() {
	return (
		<section id='section_eight' className={styles.wrapper}>
			<div className={styles.content}>
				<h2 title='Наши партнёры'>Наши партнёры</h2>
				<ResponsiveBox style={{ flexGrow: 1, margin: -20 }}>
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
							columns={{
								mobileXs: 2,
								mobile: 2,
								tabletXs: 4,
								tablet: 4,
								laptop: 4,
								desktop: 4,
							}}
						>
							<AnimatePresence presenceAffectsLayout>
								{partnersCardsList.items.map((item, index) => (
									<Suspense key={index}>
										<LazyPartnersCardsGalleryItem item={item} />
									</Suspense>
								))}
							</AnimatePresence>
						</Grid>
					</ThemeProvider>
				</ResponsiveBox>
			</div>
		</section>
	)
}
