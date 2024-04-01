import { MetadataRoute } from 'next'

import { BASE_URL } from '@/config/api.config'

export default function sitemap(): MetadataRoute.Sitemap {
	const urlList: string[] = ['/', '/policy']

	return urlList.map(url => ({
		url: BASE_URL + url,
		lastModified: new Date(),
	}))
}
