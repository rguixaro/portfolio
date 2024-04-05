import { z } from 'astro:content'

export const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	stack: z.array(z.string()),
	url: z.string(),
	github: z.string(),
})
