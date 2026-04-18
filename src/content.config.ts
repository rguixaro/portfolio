import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { projectSchema } from '@/schemas/project'
import { jobSchema } from '@/schemas/job'

const project = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/project' }),
	schema: projectSchema,
})

const job = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/job' }),
	schema: jobSchema,
})

const home = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/home' }),
})

export const collections = { project, job, home }
