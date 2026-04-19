// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://rguixaro.dev',
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: { ca: 'ca', en: 'en', es: 'es', nb: 'nb' },
			},
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['ca', 'en', 'es', 'nb'],
		routing: { prefixDefaultLocale: false, fallbackType: 'rewrite' },
		fallback: { ca: 'en', es: 'en', nb: 'en' },
	},
	vite: { plugins: [...tailwindcss()] },
})
