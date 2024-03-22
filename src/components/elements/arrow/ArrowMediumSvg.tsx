/* eslint-disable max-len */
import { FC } from 'react'

const ArrowMediumSvg: FC<{ color?: string }> = ({ color }) => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_64_1879)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8.13007e-05 -0.00012207H20.0001V-6.10352e-05H21.0001V19.9999H17.0001V5.43073L0.180385 22.2504L-2.19336 19.8767L14.6834 2.99988H8.13007e-05V-0.00012207Z'
					fill={color ? color : 'white'}
				/>
			</g>
			<defs>
				<clipPath id='clip0_64_1879'>
					<rect width='20' height='20' fill={color ? color : 'white'} />
				</clipPath>
			</defs>
		</svg>
	)
}

export default ArrowMediumSvg
