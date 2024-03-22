export const menuSlide = {
	initial: { x: 'calc(-100% - 100px)' }, // Стартовая позиция за левым краем экрана
	enter: { x: '0', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }, // Анимация внутрь экрана
	exit: {
		x: 'calc(-100% - 100px)', // Анимация обратно за левый край экрана
		transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
	},
}

export const slide = {
	initial: { x: -200 },
	enter: (i: number) => ({
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
	exit: (i: number) => ({
		x: -200,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
}

export const scale = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
}

export const buttonAnimation = {
	hover: { scale: 1.04 },
	tap: {
		scale: 0.95,
	},
}

export const textAnimationLeft = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const textAnimationRight = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const textAnimationTop = {
	hidden: {
		y: -50,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export const textAnimationBottom = {
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

export const hoverAnimation = {
	hover: {
		y: -5,
		transition: {
			duration: 0.2,
			ease: [0.42, 0, 0.58, 1],
		},
	},
}
