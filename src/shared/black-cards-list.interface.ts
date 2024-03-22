export interface IBlackCardItem {
	title: string
	isBlack: boolean
	isActive: boolean
	href?: string
}

export interface IBlackCards {
	items: IBlackCardItem[]
}
