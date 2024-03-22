import { StaticImageData } from 'next/image'

export interface IPartnersCardItem {
	title: string
	image: StaticImageData
}

export interface IPartnersCards {
	items: IPartnersCardItem[]
}
