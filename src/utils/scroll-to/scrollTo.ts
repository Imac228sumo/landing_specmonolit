export const scrollTo = (sectionId?: string) => {
	if (sectionId) {
		const section = document.getElementById(sectionId)
		if (section) {
			const yOffset = -100 // желаемый отступ сверху в пикселях
			const y =
				section.getBoundingClientRect().top + window.pageYOffset + yOffset

			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}
}
