import { StaticImageData } from 'next/image'

export interface IPartnersCardItem {
	title?: string
	image: StaticImageData

	seoTitle?: string
}

export interface IPartnersCards {
	items: IPartnersCardItem[]
}
