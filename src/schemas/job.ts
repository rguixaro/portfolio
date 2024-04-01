import { z } from 'astro:content'

export const jobSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.string(),
	tags: z.array(z.string()),
	url: z.string(),
	url_name: z.string().optional(),
	location: z.string(),
})
