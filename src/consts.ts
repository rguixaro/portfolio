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

// Blog Page
export const BLOG: Page = {
	TITLE: 'Blog',
	DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
	TITLE: 'Projects',
	DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
	TITLE: 'Search',
	DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Links
export const LINKS: Links = [
	{
		TEXT: 'Home',
		HREF: '/',
	},
	{
		TEXT: 'Work',
		HREF: '/work',
	},
	{
		TEXT: 'Blog',
		HREF: '/blog',
	},
	{
		TEXT: 'Projects',
		HREF: '/projects',
	},
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
