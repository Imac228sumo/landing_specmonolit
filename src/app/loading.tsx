'use client'

import { Variants, motion } from 'framer-motion'

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
			<motion.div
				transition={{
					staggerChildren: 0.25,
				}}
				initial='initial'
				animate='animate'
			>
				<motion.div variants={variants} />
				<motion.div variants={variants} />
				<motion.div variants={variants} />
				<motion.div variants={variants} />
				<motion.div variants={variants} />
			</motion.div>
		</div>
	)
}
