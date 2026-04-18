import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	site: 'https://portfolio-2025.rguixaro.dev',
	integrations: [mdx(), sitemap(), icon()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ca', 'es', 'no'],
		routing: { prefixDefaultLocale: false },
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
