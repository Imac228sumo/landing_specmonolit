import { IBlackCards } from './black-cards-list.interface'

export const blackCardsList: IBlackCards = {
	items: [
		{
			title: 'ЛЕТ НА РЫНКЕ',
			isBlack: false,
			isActive: false,
		},
		{
			title: 'Контакты',
			isBlack: true,
			isActive: true,
			href: 'footer',
		},
		{
			title: 'Наши услуги',
			isBlack: true,
			isActive: true,
			href: 'section_five',
		},
		{
			title: 'Проекты компании',
			isBlack: true,
			isActive: true,
			href: 'section_six',
		},
		{
			title: 'Наши партнеры',
			isBlack: true,
			isActive: true,
			href: 'section_eight',
		},
		{
			title: 'Рассчитать стоимость',
			isBlack: false,
			isActive: true,
			href: 'section_seven',
		},
	],
}
