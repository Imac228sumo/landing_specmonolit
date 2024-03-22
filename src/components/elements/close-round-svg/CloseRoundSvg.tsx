/* eslint-disable max-len */
import { FC } from 'react'

const CloseRoundSvg: FC<{ color?: string; opacity?: string }> = ({
	color,
	opacity,
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			opacity={opacity ? opacity : 1}
		>
			<path
				d='M24 8L8 24'
				stroke={color ? color : 'white'}
				strokeWidth='2.53614'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 8L24 24'
				stroke={color ? color : 'white'}
				strokeWidth='2.53614'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CloseRoundSvg
