import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '@/consts'

interface Context {
	site: string
}

export async function GET(context: Context) {
	const posts = await getCollection('blog')

	const items = [...posts]

	items.sort(
		(a, b) =>
			new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
	)

	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: items.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.pubDate,
			link: `/blog/${item.slug}/`,
		})),
	})
}
