export const formattedPhone = (phone: string) => {
	if (phone === '') return null
	const formattedPhoneNumber = `+7 (${phone.substring(2, 5)}) ${phone.substring(5, 8)}-${phone.substring(8, 10)}-${phone.substring(10, 12)}`
	return formattedPhoneNumber
}
