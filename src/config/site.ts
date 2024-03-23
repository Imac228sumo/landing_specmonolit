import {
	getAppUrl,
	getEmail,
	getInstagram,
	getTelegram,
} from '@/utils/get-env/getEnv'

export const siteConfig = {
	name: 'СК Спецмонолит',
	url: getAppUrl(),
	ogImage: 'https://metawizard.vercel.app/og.jpg',
	description:
		'Наливные полы любой сложности можете заказать у нас. Работы по топпинговым полам, полимерные полы, промышленный наливной пол, ремонт покрытий. Обращайтесь!',
	links: {
		instagram: getInstagram(),
		email: getEmail(),
		telegram: getTelegram(),
	},
	creator: {
		name: 'Валерий Сергеевич',
	},
}

export type SiteConfig = typeof siteConfig
