import type { Links, Site, Socials, TechStack } from '@/types'

// Global
export const SITE: Site = {
	TITLE: 'Astro Sphere',
	DESCRIPTION:
		'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
	AUTHOR: 'Ricard Guixaró',
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
	{ NAME: 'Astro', ICON: 'astro', HREF: 'https://astro.build' },
	{
		NAME: 'Javascript',
		ICON: 'javascript',
		HREF: 'https://www.javascript.com',
	},
	{
		NAME: 'Typescript',
		ICON: 'typescript',
		HREF: 'https://www.typescriptlang.org',
	},
	{
		NAME: 'Tailwind',
		ICON: 'tailwind',
		HREF: 'https://tailwindcss.com',
	},
]
