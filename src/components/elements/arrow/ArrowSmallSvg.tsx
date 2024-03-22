/* eslint-disable max-len */
import { FC } from 'react'

const ArrowSmallSvg: FC<{ color?: string }> = ({ color }) => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_55_42)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M-0.000296116 -0.00012207H19.9997V-3.52859e-05H21V20H17V5.43084L0.180385 22.2505L-2.19336 19.8767L14.6835 2.99988H-0.000296116V-0.00012207Z'
					fill={color ? color : 'black'}
				/>
			</g>
			<defs>
				<clipPath id='clip0_55_42'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default ArrowSmallSvg
