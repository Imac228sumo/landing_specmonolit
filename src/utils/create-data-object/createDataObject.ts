import { IFormData } from '@/shared/form-data.interface'

export const createDataObject = ({
	name,
	phone,
	mail,
	square,
	footing,
	workloads,
}: IFormData) => {
	return {
		...(name && { name }),
		...(phone && { phone }),
		...(mail && { mail }),
		...(square && { square }),
		...(footing && { footing }),
		...(workloads && { workloads }),
	}
}
