import type { Links, Page, Site, Socials } from '@/types'

// Global
export const SITE: Site = {
	TITLE: 'Astro Sphere',
	DESCRIPTION:
		'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
	AUTHOR: 'Ricard Guixaró',
}

// Work Page
export const WORK: Page = {
	TITLE: 'Work',
	DESCRIPTION: 'Places I have worked.',
}

// Projects Page
export const PROJECTS: Page = {
	TITLE: 'Projects',
	DESCRIPTION: 'Recent projects I have worked on.',
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
