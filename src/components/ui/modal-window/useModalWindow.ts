import { useEffect, useMemo, useState } from 'react'

export const useModalWindow = (style: object) => {
	const [modalTop, setModalTop] = useState('50vh')

	useEffect(() => {
		const adjustModalPosition = () => {
			const viewportHeight = window.innerHeight
			const scrollY = window.scrollY
			const newTop = `calc(50vh + ${scrollY}px)`
			setModalTop(newTop)
		}
		window.addEventListener('scroll', adjustModalPosition)
		adjustModalPosition()
		return () => {
			window.removeEventListener('scroll', adjustModalPosition)
		}
	}, [])

	const dynamicStyle = useMemo(
		() => ({
			...style,
			top: modalTop,
		}),
		[style, modalTop]
	)

	return useMemo(
		() => ({
			dynamicStyle,
		}),
		[dynamicStyle]
	)
}
