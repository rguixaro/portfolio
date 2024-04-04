import { z } from 'astro:content'

export const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	stack: z.array(z.string()),
	url: z.string(),
	url_name: z.string().optional(),
	location: z.string(),
})
