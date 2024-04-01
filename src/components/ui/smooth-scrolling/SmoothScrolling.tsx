'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { PropsWithChildren } from 'react'

export default function SmoothScrolling({
	children,
}: PropsWithChildren<unknown>) {
	return <ReactLenis root>{children}</ReactLenis>
}
