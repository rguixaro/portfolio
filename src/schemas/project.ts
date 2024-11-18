import { z } from 'astro:content'

export const projectSchema = z.object({
	name: z.string(),
	stack: z.array(z.string()),
	order: z.number(),
	url: z.string().optional(),
	github: z.string().optional(),
	googlePlay: z.string().optional(),
	appStore: z.string().optional(),
	logo: z.string().optional(),
	invert: z.boolean().optional(),
})
