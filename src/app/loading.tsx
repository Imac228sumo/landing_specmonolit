'use client'

import { Variants, m } from 'framer-motion'

import styles from './Loading.module.scss'

const variants: Variants = {
	initial: {
		scaleY: 0.5,
		opacity: 0,
	},
	animate: {
		scaleY: 1,
		opacity: 1,
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 1,
			ease: 'circIn',
		},
	},
}

export default function Loading() {
	return (
		<div className={styles.loader}>
			<m.div
				transition={{
					staggerChildren: 0.25,
				}}
				initial='initial'
				animate='animate'
			>
				<m.div variants={variants} />
				<m.div variants={variants} />
				<m.div variants={variants} />
				<m.div variants={variants} />
				<m.div variants={variants} />
			</m.div>
		</div>
	)
}
