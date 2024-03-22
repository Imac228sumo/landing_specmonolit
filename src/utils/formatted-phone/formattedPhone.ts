export const formattedPhone = (phone: string) => {
	if (phone === '') return null
	const formattedPhoneNumber = `8(${phone.substring(1, 4)}) ${phone.substring(4, 7)} ${phone.substring(7)}`
	return formattedPhoneNumber
}
