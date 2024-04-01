'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { useState } from 'react'

import styles from './Home.module.scss'
import ModalWindow from '@/components/ui/modal-window/ModalWindow'
import SectionEight from '@/components/ui/section-eight/SectionEight'
import SectionFive from '@/components/ui/section-five/SectionFive'
import SectionFour from '@/components/ui/section-four/SectionFour'
import SectionOne from '@/components/ui/section-one/SectionOne'
import SectionSeven from '@/components/ui/section-seven/SectionSeven'
import SectionSix from '@/components/ui/section-six/SectionSix'
import SectionThree from '@/components/ui/section-three/SectionThree'
import SectionTwo from '@/components/ui/section-two/SectionTwo'

export default function Home() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<LazyMotion features={domAnimation}>
			<div className={styles.wrapper}>
				<SectionOne handleOpen={handleOpen} />
				<SectionTwo handleOpen={handleOpen} />
				<SectionThree />
				<SectionFour />
				<SectionFive handleOpen={handleOpen} />
				<SectionSix />
				<SectionSeven />
				<SectionEight />
				<ModalWindow handleClose={handleClose} open={open} />
			</div>
		</LazyMotion>
	)
}
