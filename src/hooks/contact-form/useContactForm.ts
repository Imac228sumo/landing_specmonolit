import { SelectChangeEvent } from '@mui/material'
import {
	ChangeEvent,
	FocusEvent,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import toast from 'react-hot-toast'

import { mailService } from '@/services/mail.service'
import { IFormData } from '@/shared/form-data.interface'
import { createDataObject } from '@/utils/create-data-object/createDataObject'
import { validEmail } from '@/utils/valid-email/regex'

interface ITouched {
	name: boolean | null
	phone: boolean | null
	mail: boolean | null
	square: boolean | null
	footing: boolean | null
	workloads: boolean | null
}

type ContactKeys =
	| 'name'
	| 'phone'
	| 'mail'
	| 'square'
	| 'footing'
	| 'workloads'

export const useContactForm = (parameters: ContactKeys[]) => {
	const phoneRef = useRef<HTMLInputElement>(null)
	const [isGuide, setIsGuide] = useState(false)
	const [isFocusPhone, setIsFocusPhone] = useState<FocusEvent<
		HTMLInputElement,
		Element
	> | null>(null)
	const [touched, setTouched] = useState<ITouched>({
		name: null,
		phone: null,
		mail: null,
		square: null,
		footing: null,
		workloads: null,
	})
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isErrorPhone, setIsErrorPhone] = useState<boolean>(false)
	const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [footing, setFooting] = useState<string>('')
	const [workloads, setWorkloads] = useState<string>('')
	const [square, setSquare] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [mail, setMail] = useState<string>('')
	const [file, setFile] = useState<File | undefined>(undefined)

	const [isAgreeable, setIsAgreeable] = useState(false)

	const onBlur = ({
		event,
	}: {
		event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
	}) => setTouched(prev => ({ ...prev, [event.target.name]: true }))

	function containsAtLeastOneDigit(phoneNumber: string) {
		const regex = /\+7 \(\d{1,3}\) \d{1,3}-\d{1,2}-\d{1,2}/
		return regex.test(phoneNumber)
	}

	const handleUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.length) {
			setFile(prev => undefined)
			setFile(event.target.files[0])
		}
	}

	const handleFocusPhone = (event: FocusEvent<HTMLInputElement, Element>) => {
		setIsFocusPhone(prev => event)
		setIsGuide(prev => true)
	}

	useEffect(() => {
		if (isFocusPhone) {
			const value = isFocusPhone.target.value
			let position = value.indexOf('_')
			if (!position) position = 4
			if (position === -1) position = value.length
			if (position < 4) position = 4
			setTimeout(() => {
				isFocusPhone.target.setSelectionRange(position, position)
			}, 10)
		}
	}, [isFocusPhone])

	const handleBlurPhone = (
		event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
	) => {
		setTouched(prev => ({ ...prev, [event.target.name]: true }))
		setIsFocusPhone(prev => null)
		setIsGuide(prev => false)
		const digitsOnly = phone.replace(/\D/g, '')

		if (digitsOnly.length !== 11) {
			setIsErrorPhone(true)
		} else {
			setIsErrorPhone(false)
		}
		if (phone === '+7 (___) ___-__-__' || phone === '') {
			setPhone('')
			setIsGuide(prev => false)
		} else if (containsAtLeastOneDigit(phone.replace(/_/g, '1'))) {
			setIsGuide(prev => true)
		}
	}

	const handleEmailChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const newEmail = event.target.value
		if (validEmail.test(newEmail)) {
			setIsErrorEmail(false)
			setMail(newEmail)
		} else {
			setMail(newEmail)
			setIsErrorEmail(true)
		}
	}

	const handleBlurEmail = (
		event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
	) => {
		if (mail === '') {
			setIsErrorEmail(false)
		}
	}

	const handleSquareChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = event.target.value
		const regex = /^[0-9]*$/
		if (regex.test(value) && value.length <= 20) {
			setSquare(prev => value)
		}
	}

	const handleSelectFootingChange = (event: SelectChangeEvent) => {
		setFooting(prev => event.target.value as string)
	}

	const handleSelectWorkloadsChange = (event: SelectChangeEvent) => {
		setWorkloads(prev => event.target.value as string)
	}

	const handleNameChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const newValue = event.target.value
		const containsOnlyLetters = /^[A-Za-zА-Яа-яЁё\s]*$/.test(newValue)
		const words = newValue.split(' ').filter(Boolean)
		if (containsOnlyLetters && words.length <= 3 && newValue.length <= 50) {
			setName(prev => newValue)
		}
	}

	const handleAgreeableChange = () => {
		const values = { name, footing, workloads, square, phone, mail }
		const allValuesPresent = parameters.every(
			key => values[key as ContactKeys].trim() !== ''
		)

		if (allValuesPresent && !isErrorPhone) {
			setIsAgreeable(prev => !isAgreeable)
		} else {
			setIsAgreeable(prev => false)
		}
	}

	useEffect(() => {
		const values = { name, footing, workloads, square, phone, mail }
		const allValuesPresent = parameters.every(
			key => values[key as ContactKeys].trim() !== ''
		)
		if (allValuesPresent) {
			setIsAgreeable(prev => false)
		}
	}, [square, footing, workloads, name, phone, mail])

	const resetForm = () => {
		setTouched({
			name: null,
			phone: null,
			mail: null,
			square: null,
			footing: null,
			workloads: null,
		})
		setName(prev => '')
		setPhone(prev => '')
		setMail(prev => '')
		setSquare(prev => '')
		setFooting(prev => '')
		setWorkloads(prev => '')
		setFile(prev => undefined)
		setIsAgreeable(prev => false)
		setIsErrorPhone(prev => false)
		setIsErrorEmail(prev => false)
		setIsGuide(prev => false)
	}

	const onSendMessage = async () => {
		setIsLoading(prev => true)
		try {
			const data: IFormData = createDataObject({
				name,
				phone,
				mail,
				square,
				footing,
				workloads,
			})
			const formData = new FormData()
			Object.keys(data).forEach(key => {
				const value = data[key]
				if (value !== undefined) {
					formData.append(key, value)
				}
			})
			if (file) {
				formData.append('file', file)
			}

			await mailService.sendMail(formData)
			toast.success('Сообщение успешно отправлено!')
			resetForm()
		} catch (error: any) {
			toast.error('Не удалось отправить сообщение!')
			setIsLoading(prev => false)
		} finally {
			setIsLoading(prev => false)
		}
	}

	return useMemo(
		() => ({
			phoneRef,
			isErrorPhone,
			isErrorEmail,
			isGuide,
			touched,
			isAgreeable,
			isLoading,
			name,
			square,
			footing,
			workloads,
			phone,
			mail,
			file,
			handleUploadFile,
			handleBlurEmail,
			handleEmailChange,
			resetForm,
			setMail,
			onBlur,
			handleSquareChange,
			handleSelectFootingChange,
			handleSelectWorkloadsChange,
			handleNameChange,
			setPhone,
			handleFocusPhone,
			handleBlurPhone,
			handleAgreeableChange,
			onSendMessage,
		}),
		[
			phoneRef,
			isErrorPhone,
			isErrorEmail,
			isGuide,
			touched,
			isAgreeable,
			isLoading,
			name,
			square,
			footing,
			workloads,
			phone,
			mail,
			file,
			handleUploadFile,
			handleBlurEmail,
			handleEmailChange,
			resetForm,
			setMail,
			onBlur,
			handleSquareChange,
			handleSelectFootingChange,
			handleSelectWorkloadsChange,
			handleNameChange,
			setPhone,
			handleFocusPhone,
			handleBlurPhone,
			handleAgreeableChange,
			onSendMessage,
		]
	)
}
