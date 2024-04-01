import { ISlide } from './slider-cards-list.interface'
import imgFive from '@/assets/images/slides/slide_five.webp'
import imgFour from '@/assets/images/slides/slide_four.webp'
import imgOne from '@/assets/images/slides/slide_one.webp'
import imgSix from '@/assets/images/slides/slide_six.webp'
import imgThree from '@/assets/images/slides/slide_three.webp'
import imgTwo from '@/assets/images/slides/slide_two.webp'

export const slides: ISlide[] = [
	{
		title: 'УСТАНОВКА полов на “ЧКПЗ”',
		caption: 'Общая площадь 1200 м²',
		image: imgOne,
		key: 'Slide 1',

		seoTitle: 'Промышленные полы купить',
	},
	{
		title: 'Ремонт пола “МЧС РОССИИ”',
		caption: 'Общая площадь: 1-2 этажи',
		image: imgThree,
		key: 'Slide 2',

		seoTitle: 'Пол рассчитать стоимость',
	},
	{
		title: 'УСТАНОВКА полов для',
		subTitle: 'АО “Почта России”',
		image: imgTwo,
		key: 'Slide 3',

		seoTitle: 'Наливной пол сколько',
	},
	{
		title: 'УСТАНОВКА пола для',
		subTitle: 'ооо “люкс вода”',
		image: imgFour,
		key: 'Slide 4',

		seoTitle: 'Жидкий пол заказать',
	},
	{
		title: 'УСТАНОВКА полов для',
		subTitle: 'пао “ЧЕЛИНДБАНК”',
		image: imgFive,
		key: 'Slide 5',

		seoTitle: 'Залить пол цена',
	},
	{
		title: 'УСТАНОВКА пола для',
		subTitle: 'ао “Русская Медная Компания”',
		image: imgSix,
		key: 'Slide 6',

		seoTitle: 'Ремонтные работы полы',
	},
]
