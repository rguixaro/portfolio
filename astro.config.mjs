import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false }), icon()],
	i18n: {
		defaultLocale: 'ca',
		locales: ['ca', 'en', 'es', 'no'],
		routing: { prefixDefaultLocale: false },
		fallback: { es: 'en', no: 'en', en: 'es' },
	},
})
