import { IPartnersCards } from './partners-cards-list-item.interface'
import imgEight from '@/assets/images/partners/logo_eight.png'
import imgFive from '@/assets/images/partners/logo_five.svg'
import imgFour from '@/assets/images/partners/logo_four.png'
import imgOne from '@/assets/images/partners/logo_one.svg'
import imgSeven from '@/assets/images/partners/logo_seven.png'
import imgSix from '@/assets/images/partners/logo_six.svg'
import imgThree from '@/assets/images/partners/logo_three.svg'
import imgTwo from '@/assets/images/partners/logo_two.png'

export const partnersCardsList: IPartnersCards = {
	items: [
		{
			image: imgOne,
			seoTitle: 'Заливка пола',
		},
		{
			image: imgTwo,
			seoTitle: 'Напольные покрытия заказать',
		},
		{
			image: imgThree,
			seoTitle: 'Восстановление пола',
		},
		{
			image: imgFour,
			seoTitle: 'Наливное пол калькулятор',
		},
		{
			image: imgFive,
			seoTitle: 'Бетонные полы',
		},
		{
			image: imgSix,
			seoTitle: 'Полимерный наливной пол',
		},
		{
			image: imgSeven,
			seoTitle: 'Промышленные полы',
		},
		{
			image: imgEight,
			seoTitle: 'Ремонт полов',
		},
	],
}
