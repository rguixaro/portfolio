import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '@/consts'

interface Context {
	site: string
}

export async function GET(context: Context) {
	const posts = await getCollection('project')

	const items = [...posts]

	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: items.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			date: item.data.date,
			link: `/project/${item.slug}/`,
		})),
	})
}
