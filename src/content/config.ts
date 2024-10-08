import { defineCollection } from 'astro:content'
import { projectSchema } from '@/schemas/project'
import { jobSchema } from '@/schemas/job'

const project = defineCollection({ type: 'content', schema: projectSchema })
const job = defineCollection({ type: 'content', schema: jobSchema })
const home = defineCollection({ type: 'content' })

export const collections = { project, job, home }
