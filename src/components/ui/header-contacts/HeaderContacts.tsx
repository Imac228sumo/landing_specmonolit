'use client'

import useMediaQuery from '@mui/material/useMediaQuery'

import styles from './HeaderContacts.module.scss'
import PhoneSvg from '@/components/elements/phone-svg/PhoneSvg'
import { formattedPhone } from '@/utils/formatted-phone/formattedPhone'
import { getPhone } from '@/utils/get-env/getEnv'

export default function HeaderContacts() {
	const matches = useMediaQuery('(max-width:890px)')
	return (
		<>
			{matches ? (
				<a href={`tel:${getPhone()}`} className={styles.contacts_mobile}>
					<PhoneSvg />
				</a>
			) : (
				<a href={`tel:${getPhone()}`} className={styles.contacts}>
					<div className={styles.description}>
						Челябинск, Екатеринбург и УРФО
					</div>
					<div className={styles.number}>
						{formattedPhone(getPhone() || '') || 'не доступно'}
					</div>
				</a>
			)}
		</>
	)
}
