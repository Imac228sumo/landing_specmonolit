/* eslint-disable max-len */
import { FC } from 'react'

const ArrowBigSvg: FC<{ color?: string }> = ({ color }) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_64_1625)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0.000976562 -0.00012207H32.001V6.10352e-05H33.6002V32.0001H27.2002V8.68981L0.289202 35.6008L-3.50879 31.8028L23.4941 4.79988H0.000976562V-0.00012207Z'
					fill={color ? color : 'white'}
				/>
			</g>
			<defs>
				<clipPath id='clip0_64_1625'>
					<rect width='32' height='32' fill={color ? color : 'white'} />
				</clipPath>
			</defs>
		</svg>
	)
}

export default ArrowBigSvg
