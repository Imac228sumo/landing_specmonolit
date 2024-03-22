'use client'

import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import cn from 'classnames'
import MaskedInput from 'react-text-mask'

import styles from './ModalWindow.module.scss'
import { useModalWindow } from './useModalWindow'
import CloseRoundSvg from '@/components/elements/close-round-svg/CloseRoundSvg'
import { useContactForm } from '@/hooks/contact-form/useContactForm'

const style = {
	position: 'absolute',
	top: '50vh',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	height: 365,
	maxHeight: '400px',
	minWidth: '300px',
	borderColor: 'none',
	border: 'none',
	'@media (max-width: 998px)': {
		width: 'calc(340px + (160 + 160 * 0.92664) * ((100vw - 480px) / 998))',
		height: 'calc(400px + (-35 + -35 * 0.92664) * ((100vw - 480px) / 998))',
	},
	'@media (max-width: 480px)': {
		width: 'calc(300px + (40 + 40 * 3) * ((100vw - 360px) / 480))',
	},
}

export default function ModalWindow({
	handleClose,
	open,
}: {
	handleClose: () => void
	open: boolean
}) {
	const { dynamicStyle } = useModalWindow(style)
	const {
		phoneRef,
		isErrorPhone,
		isGuide,
		isErrorEmail,
		isLoading,
		name,
		phone,
		mail,
		touched,
		handleBlurEmail,
		handleEmailChange,
		onBlur,
		handleNameChange,
		setPhone,
		handleFocusPhone,
		handleBlurPhone,
		onSendMessage,
		resetForm,
	} = useContactForm(['name', 'phone', 'mail'])

	const handleCloseAndReset = () => {
		resetForm()
		handleClose()
	}
	const handleSendMessage = async () => {
		await onSendMessage()
		handleCloseAndReset()
	}

	return (
		<Modal
			open={open}
			onClose={handleCloseAndReset}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			sx={{ position: 'absolute' }}
			slotProps={{
				backdrop: {
					style: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 },
				},
			}}
		>
			<Box sx={dynamicStyle}>
				<div className={styles.modal_container}>
					<div className={styles.modal_header}>
						<span>Оставьте заявку на обратный звонок!</span>
						<button onClick={handleCloseAndReset}>
							<CloseRoundSvg color='black' opacity='0.8' />
						</button>
					</div>
					<div className={styles.modal_content}>
						<FormControl
							variant='standard'
							sx={{ width: '100%' }}
							className={cn(styles.form, {
								[styles.error]: touched.name !== null && !name,
							})}
						>
							<TextField
								error={touched.name !== null && !name}
								required
								helperText={
									touched.name !== null && !name && 'Обязательное поле'
								}
								onBlur={event => onBlur({ event })}
								name='name'
								onChange={handleNameChange}
								id='standard-name'
								label='Имя'
								variant='standard'
								InputProps={{
									classes: { input: styles.inputField },
								}}
								InputLabelProps={{
									className: styles.inputLabel,
								}}
								value={name}
							/>
						</FormControl>

						<FormControl
							variant='standard'
							sx={{ width: '100%' }}
							className={cn(styles.form, {
								[styles.error]:
									(touched.phone !== null && !phone) || isErrorPhone,
							})}
						>
							<MaskedInput
								ref={ref => (phoneRef ? phoneRef.current : null)}
								showMask
								onChange={event => setPhone(event.target.value)}
								onFocus={event => handleFocusPhone(event)}
								onBlur={event => handleBlurPhone(event)}
								value={phone}
								mask={[
									'+',
									'7',
									' ',
									'(',
									/[1-9]/,
									/\d/,
									/\d/,
									')',
									' ',
									/\d/,
									/\d/,
									/\d/,
									'-',
									/\d/,
									/\d/,
									'-',
									/\d/,
									/\d/,
								]}
								guide={isGuide}
								keepCharPositions={false}
								render={(ref, props) => (
									<TextField
										error={(touched.phone !== null && !phone) || isErrorPhone}
										required
										helperText={
											((touched.phone !== null && !phone) || isErrorPhone) &&
											'Обязательное поле'
										}
										name='phone'
										inputRef={ref}
										ref={phoneRef}
										{...props}
										id='standard-phone'
										label='Номер телефона'
										variant='standard'
										autoComplete='off'
										InputProps={{
											classes: { input: styles.inputField },
										}}
										InputLabelProps={{
											className: styles.inputLabel,
											shrink: isGuide ? true : phone !== '' ? false : false,
										}}
										fullWidth
									/>
								)}
							/>
						</FormControl>

						<FormControl
							variant='standard'
							sx={{ width: '100%' }}
							className={cn(styles.form, {
								[styles.error]: isErrorEmail,
							})}
						>
							<TextField
								error={isErrorEmail}
								onBlur={handleBlurEmail}
								onChange={handleEmailChange}
								type={'email'}
								id='standard-name'
								label='Ваш E-mail (если есть)'
								helperText={isErrorEmail && 'Не корректный e-mail'}
								variant='standard'
								InputProps={{
									classes: { input: styles.inputField },
								}}
								InputLabelProps={{
									className: styles.inputLabel,
								}}
								value={mail}
							/>
						</FormControl>

						<div>Получите бесплатную консультацию с нашим специалистом!</div>
					</div>
					<div className={styles.modal_footer}>
						<LoadingButton
							disabled={!name || isErrorPhone || isErrorEmail}
							onClick={handleSendMessage}
							loading={isLoading}
							loadingPosition='center'
							variant='contained'
							className={cn(styles.send_button, {
								[styles.active]: name !== '' && !isErrorPhone && !isErrorEmail,
								[styles.loading]: isLoading,
							})}
						>
							{!isLoading && 'Оставить заявку'}
						</LoadingButton>
					</div>
				</div>
			</Box>
		</Modal>
	)
}
