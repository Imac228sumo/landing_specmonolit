import axios, { CreateAxiosDefaults } from 'axios'

import { getMultipartContentType } from './api.helper'
import { API_URL } from '@/config/api.config'

const axiosClassicOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getMultipartContentType(),
}

export const axiosClassic = axios.create(axiosClassicOptions)
