'use client'

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import cn from 'classnames'
import Link from 'next/link'
import MaskedInput from 'react-text-mask'

import styles from './SectionSeven.module.scss'
import ArrowRightLongSvg from '@/components/elements/arrow/ArrowRighLongSvg'
import UploadSvg from '@/components/elements/upload-svg/UploadSvg'
import { useContactForm } from '@/hooks/contact-form/useContactForm'
import { selectFootingList } from '@/shared/select-footing-list.data'
import { selectWorkloadsList } from '@/shared/select-workloads-list.data'

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})

export default function SectionSeven() {
	const {
		phoneRef,
		isErrorPhone,
		isGuide,
		touched,
		isAgreeable,
		isLoading,
		name,
		square,
		footing,
		workloads,
		phone,
		file,
		handleUploadFile,
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
	} = useContactForm(['name', 'square', 'footing', 'workloads', 'phone'])

	return (
		<section id='section_seven' className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.container}>
					<div>
						<h3 title='Рассчитайте стоимость прямо сейчас!'>
							Рассчитайте стоимость прямо сейчас!
						</h3>
						<p>
							С помощью онлайн калькулятора и консультации нашего специалиста
						</p>
					</div>
					<div>
						<section className={styles.left_side}></section>
						<section className={styles.right_side}>
							<div className={styles.container}>
								<FormControl
									variant='standard'
									sx={{ width: '100%' }}
									className={cn(styles.text_field, {
										[styles.error]: touched.square !== null && !square,
									})}
								>
									<TextField
										error={touched.square !== null && !square}
										helperText={
											touched.square !== null && !square && 'Обязательное поле'
										}
										onBlur={event => onBlur({ event })}
										name='square'
										onChange={event => handleSquareChange(event)}
										id='standard-text'
										label='Площадь объекта'
										variant='standard'
										InputProps={{
											classes: { input: styles.inputField },
											endAdornment:
												square.length > 0 ? (
													<InputAdornment position='end'>м²</InputAdornment>
												) : null,
										}}
										InputLabelProps={{
											className: styles.inputLabel,
										}}
										value={square}
									/>
								</FormControl>

								<FormControl
									error={touched.footing !== null && !footing}
									variant='standard'
									sx={{ width: '100%' }}
									className={cn(styles.select_one, {
										[styles.error]: touched.footing !== null && !footing,
									})}
								>
									<InputLabel id='footing' className={styles.inputLabel}>
										Основание
									</InputLabel>
									<Select
										onBlur={event => onBlur({ event })}
										name='footing'
										onChange={handleSelectFootingChange}
										labelId='footing'
										id='simple-select-standard'
										value={footing}
										label='Основание'
										MenuProps={{
											keepMounted: true,
											disableScrollLock: true,
										}}
									>
										{selectFootingList.items.map((item, index) => {
											return (
												<MenuItem
													role='button'
													aria-label={item.value}
													key={index}
													value={item.value}
												>
													{item.value}
												</MenuItem>
											)
										})}
									</Select>
									{touched.footing !== null && !footing && (
										<FormHelperText>Обязательное поле</FormHelperText>
									)}
								</FormControl>

								<FormControl
									error={touched.workloads !== null && !workloads}
									variant='standard'
									sx={{ width: '100%' }}
									className={cn(styles.select_one, {
										[styles.error]: touched.workloads !== null && !workloads,
									})}
								>
									<InputLabel id='workloads' className={styles.inputLabel}>
										Нагрузки
									</InputLabel>

									<Select
										onBlur={event => onBlur({ event })}
										name='workloads'
										onChange={handleSelectWorkloadsChange}
										labelId='workloads'
										id='simple-select-standard'
										value={workloads}
										label='Нагрузки'
										MenuProps={{
											keepMounted: true,
											disableScrollLock: true,
										}}
									>
										{selectWorkloadsList.items.map((item, index) => {
											return (
												<MenuItem
													role='button'
													aria-label={item.value}
													key={index}
													value={item.value}
												>
													{item.value}
												</MenuItem>
											)
										})}
									</Select>
									{touched.workloads !== null && !workloads && (
										<FormHelperText>Обязательное поле</FormHelperText>
									)}
								</FormControl>
								<div className={styles.personal_data}>
									<FormControl
										variant='standard'
										sx={{ width: '100%' }}
										className={cn(styles.name_field, {
											[styles.error]: touched.name !== null && !name,
										})}
									>
										<TextField
											aria-label='Ваше имя'
											error={touched.name !== null && !name}
											helperText={
												touched.name !== null && !name && 'Обязательное поле'
											}
											onBlur={event => onBlur({ event })}
											name='name'
											onChange={handleNameChange}
											id='standard-name'
											label='Ваше имя'
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
										className={cn(styles.phone_field, {
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
													aria-label='Ваш телефон'
													error={
														(touched.phone !== null && !phone) || isErrorPhone
													}
													helperText={
														((touched.phone !== null && !phone) ||
															isErrorPhone) &&
														'Обязательное поле'
													}
													name='phone'
													inputRef={ref}
													ref={phoneRef}
													{...props}
													id='standard-phone'
													label='Ваш телефон'
													variant='standard'
													autoComplete='off'
													InputProps={{
														classes: { input: styles.inputField },
													}}
													InputLabelProps={{
														className: styles.inputLabel,
														shrink: isGuide
															? true
															: phone !== ''
																? false
																: false,
													}}
													fullWidth
												/>
											)}
										/>
									</FormControl>
								</div>

								<Button
									role='button'
									aria-label='Прикрепить файл'
									className={styles.upload_button}
									component='label'
									variant='contained'
									tabIndex={-1}
									endIcon={<UploadSvg />}
								>
									<span className={styles.text}>
										{file ? (
											file.name
										) : (
											<>
												Ваше техническое решение <span>(text, photo)</span>
											</>
										)}
									</span>
									<VisuallyHiddenInput
										onChange={event => handleUploadFile(event)}
										type='file'
										accept='.docx, .txt, .xlsx, image/*'
									/>
								</Button>

								{/* <FormControl className={styles.сheckbox}>
									<FormControlLabel
										control={
											<Checkbox
												role='button'
												aria-label='Согласен с обработкой персональных данных'
												color='default'
												icon={<RadioButtonUncheckedIcon />}
												checkedIcon={<RadioButtonCheckedIcon />}
												checked={isAgreeable}
												onChange={handleAgreeableChange}
												name='isAgreeable'
											/>
										}
										label='Согласен с обработкой персональных данных'
									/>
								</FormControl> */}

								<FormControl className={styles.сheckbox}>
									<FormControlLabel
										control={
											<Checkbox
												role='button'
												aria-label='Согласен с обработкой персональных данных'
												color='default'
												icon={<RadioButtonUncheckedIcon />}
												checkedIcon={<RadioButtonCheckedIcon />}
												checked={isAgreeable}
												onChange={handleAgreeableChange}
												name='isAgreeable'
											/>
										}
										label={
											<>
												<span>Согласен с </span>
												<Link href='/policy'>
													обработкой персональных данных
												</Link>
											</>
										}
									/>
								</FormControl>

								<LoadingButton
									role='button'
									aria-label='Отправить данные для расчета стоимости'
									disabled={!isAgreeable}
									onClick={onSendMessage}
									endIcon={!isLoading && <ArrowRightLongSvg />}
									loading={isLoading}
									loadingPosition='center'
									variant='contained'
									className={cn(styles.send_button, {
										[styles.active]: isAgreeable,
										[styles.loading]: isLoading,
									})}
								>
									{!isLoading && 'Рассчитать стоимость'}
								</LoadingButton>
							</div>
						</section>
					</div>
				</div>
			</div>
		</section>
	)
}
