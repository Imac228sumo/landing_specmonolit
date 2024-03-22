import { IServicesCards } from './services-cards-list-item.interface'
import imgFive from '@/assets/images/photo_five.jpg'
import imgFour from '@/assets/images/photo_four.jpg'
import imgOne from '@/assets/images/photo_one.jpg'
import imgThree from '@/assets/images/photo_three.jpg'
import imgTwo from '@/assets/images/photo_two.jpg'

export const servicesCardsList: IServicesCards = {
	items: [
		{
			title: 'Топинговые полы',
			descriptions: 'От 150 руб/м²',
			image: imgOne,
			id: '0',
		},
		{
			title: 'Полимерные полы',
			descriptions: 'От 240 руб/м²',
			image: imgTwo,
			id: '1',
		},
		{
			title: 'Промышленные наливные полы',
			descriptions: 'От 140 руб/м²',
			image: imgThree,
			id: '2',
		},
		{
			title: 'Наливной пол в стиле LOFT',
			descriptions: 'Цена договорная',
			image: imgFour,
			id: '3',
		},
		{
			title: 'Наливные полы 3D',
			descriptions: 'Цена договорная',
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
