'use client'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { SyntheticEvent, useState } from 'react'

import styles from './NavBar.module.scss'
import { routes } from '@/shared/routes-list.data'
import { scrollTo } from '@/utils/scroll-to/scrollTo'

interface StyledTabProps {
	label: string
	value: string
}

const CustomTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		backgroundColor: '#353535',
		height: '4px',
	},
})

/*

@media (hover: hover) {
			&:hover {
				> svg {
					opacity: 0.75;
				}
			}
		}

		@media (hover: none) {
			&:active  {
				> svg {
					opacity: 0.75;
				}
			}
		}

*/

const CustomTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	minWidth: 0,
	[theme.breakpoints.up('tabletXs')]: {
		minWidth: 0,
	},
	// fontWeight: theme.typography.fontWeightRegular,
	color: 'rgba(0, 0, 0, 0.85)',
	fontFamily: 'var(--font-raleway)',
	'@media (hover: hover)': {
		'&:hover': {
			color: '#0064fa',
			opacity: 1,
		},
	},
	'@media (hover: none)': {
		'&:active': {
			color: '#0064fa',
			opacity: 1,
		},
	},
	'&.Mui-selected': {
		color: '#353535',
		// fontWeight: theme.typography.fontWeightRegular,
	},
	'&.Mui-focusVisible': {
		backgroundColor: '#d1eaff',
	},
	transition: 'color 0.3s ease-in-out',
	lineHeight: '24px',
}))

export default function NavBar() {
	const matches = useMediaQuery('(min-width:891px)')
	const [value, setValue] = useState(routes[0].href)

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue)
		scrollTo(newValue)
	}

	return (
		<>
			{matches ? (
				<Box>
					<CustomTabs
						value={value}
						onChange={handleChange}
						aria-label='navigation'
						role={'navigation'}
						className={styles.custom_tabs}
					>
						{routes.map((route, index) => {
							return (
								<CustomTab
									aria-label={`Перейти к ${route.title}`}
									value={route.href}
									label={route.title}
									key={index}
								/>
							)
						})}
					</CustomTabs>
				</Box>
			) : null}
		</>
	)
}
