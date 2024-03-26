import React, { Suspense } from 'react'

import Loading from './loading'
import LayoutClient from '@/components/layout/LayoutClient'

const LazyHome = React.lazy(() => import('@/components/screens/home/Home'))

export default function HomePage() {
	return (
		<LayoutClient>
			<Suspense fallback={<Loading />}>
				<LazyHome />
			</Suspense>
		</LayoutClient>
	)
}
