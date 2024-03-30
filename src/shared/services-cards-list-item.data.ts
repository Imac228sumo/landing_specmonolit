import { IServicesCards } from './services-cards-list-item.interface'
import imgFive from '@/assets/images/cards/card_five.jpg'
import imgFour from '@/assets/images/cards/card_four.jpg'
import imgOne from '@/assets/images/cards/card_one.jpg'
import imgThree from '@/assets/images/cards/card_three.jpg'
import imgTwo from '@/assets/images/cards/card_two.jpg'

export const servicesCardsList: IServicesCards = {
	items: [
		{
			title: 'Бетонные топпинговые полы',
			subTitle: 'Бетонные полы цена',
			descriptions: 'От 340 руб/м²',
			image: imgOne,
			id: '0',
		},
		{
			title: 'Полимерные наливные полы',
			subTitle: 'Наливной пол цена',
			descriptions: 'От 399 руб/м²',
			image: imgTwo,
			id: '1',
		},
		{
			title: 'Полиуретан-цементные полы',
			subTitle: 'Топпинг полы',
			descriptions: 'От 399 руб/м²',
			image: imgThree,
			id: '2',
		},
		{
			title: 'Разметка и зонирование',
			subTitle: 'Наливной пол рассчитать',
			descriptions: 'От 299 руб/м²',
			image: imgFour,
			id: '3',
		},
		{
			title: 'Шлифовка и восстановление',
			subTitle: 'Залив наливного полы',
			descriptions: 'От 499 руб/м²',
			image: imgFive,
			id: '4',
		},
		{
			title: 'Оставить заявку',
			descriptions:
				'Рассчитаем стоимость для вашего объекта в течение 2-х часов',
			id: '5',
		},
	],
}
