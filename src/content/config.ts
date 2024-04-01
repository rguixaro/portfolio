import { defineCollection } from 'astro:content'
import { projectSchema } from '@/schemas/project'
import { jobSchema } from '@/schemas/job'

const project = defineCollection({
	type: 'content',
	schema: projectSchema,
})

const job = defineCollection({
	type: 'content',
	schema: jobSchema,
})

export const collections = { project, job }
