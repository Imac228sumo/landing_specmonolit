import { StaticImageData } from 'next/image'

export interface IServicesCardItem {
	title: string
	descriptions: string
	subTitle?: string
	image?: StaticImageData
	id: string
}

export interface IServicesCards {
	items: IServicesCardItem[]
}
