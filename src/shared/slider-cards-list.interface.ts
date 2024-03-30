import { StaticImageData } from 'next/image'

export interface ISlide {
	title: string
	subTitle?: string
	caption?: string
	image: StaticImageData
	key: string

	seoTitle?: string
}
