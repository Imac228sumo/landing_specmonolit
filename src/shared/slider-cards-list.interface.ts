import { StaticImageData } from 'next/image'

export interface ISlide {
	title: string
	caption: string
	image: StaticImageData
	key: string
}
