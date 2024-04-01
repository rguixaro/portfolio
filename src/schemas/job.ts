import { z } from 'astro:content'

export const jobSchema = z.object({
	company: z.string(),
	role: z.string(),
	dateStart: z.string(),
	dateEnd: z.string().optional(),
	tags: z.array(z.string()),
})
