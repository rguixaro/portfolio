import type { Links, Site, Socials, TechStack } from '@/types'

// Global
export const SITE: Site = {
	TITLE: 'Ricard Guixaró',
	DESCRIPTION: 'Welcome to my portfolio.',
}

// Links
export const LINKS: Links = [
	{ ID: 'home', HREF: '/' },
	{ ID: 'experience', HREF: '/experience' },
	{ ID: 'projects', HREF: '/projects' },
]

// Socials
export const SOCIALS: Socials = [
	{
		NAME: 'Email',
		ICON: 'email',
		TEXT: 'rguixaro@protonmail.ch',
		HREF: 'mailto:rguixaro@protonmail.ch',
	},
	{
		NAME: 'Github',
		ICON: 'github',
		TEXT: 'rguixaro',
		HREF: 'https://github.com/rguixaro',
	},
	{
		NAME: 'LinkedIn',
		ICON: 'linkedin',
		TEXT: 'rguixaro',
		HREF: 'https://www.linkedin.com/in/rguixaro/',
	},
]

// Tech stacks
export const TECH_STACK: TechStack[] = [
	{ NAME: 'Astro', ICON: 'astro' },
	{ NAME: 'Javascript', ICON: 'javascript' },
	{ NAME: 'Typescript', ICON: 'typescript' },
	{ NAME: 'Tailwind', ICON: 'tailwind' },
	{ NAME: 'React', ICON: 'react' },
	{ NAME: 'React Native', ICON: 'react' },
	{ NAME: 'MongoDB', ICON: 'mongodb' },
	{ NAME: 'Kotlin', ICON: 'kotlin' },
	{ NAME: 'Firebase', ICON: 'firebase' },
	{ NAME: 'Java', ICON: 'java' },
	{ NAME: 'Nginx', ICON: 'nginx' },
	{ NAME: 'Vue', ICON: 'vue' },
	{ NAME: 'Ionic', ICON: 'ionic' },
]
