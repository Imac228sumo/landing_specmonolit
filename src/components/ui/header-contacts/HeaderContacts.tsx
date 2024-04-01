'use client'

import React, { Suspense } from 'react'

import styles from './HeaderContacts.module.scss'
// import PhoneSvg from '@/components/elements/phone-svg/PhoneSvg'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import { getPhone } from '@/utils/get-env/getEnv'

const LazyPhoneSvg = React.lazy(
	() => import('@/components/elements/phone-svg/PhoneSvg')
)
export default function HeaderContacts() {
	return (
		<>
			<a href={`tel:${getPhone()}`} className={styles.contacts_mobile}>
				<Suspense>
					<LazyPhoneSvg />
				</Suspense>
			</a>
			<a href={`tel:${getPhone()}`} className={styles.contacts}>
				<div className={styles.description}>Челябинск, Екатеринбург и УРФО</div>
				<div className={styles.number}>
					{formattedPhone(getPhone() || '') || 'не доступно'}
				</div>
			</a>
		</>
	)
}
