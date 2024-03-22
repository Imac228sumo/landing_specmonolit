import React, { Suspense } from 'react'

import Loading from './../loading'

const LazyPolicy = React.lazy(
	() => import('@/components/screens/policy/Policy')
)
export default function PolicyPage() {
	return (
		<Suspense fallback={<Loading />}>
			<LazyPolicy />
		</Suspense>
	)
}
