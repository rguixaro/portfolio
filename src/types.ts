export interface Page {
	TITLE: string
	DESCRIPTION: string
}

export interface Site extends Page {
	AUTHOR: string
}

export type Links = {
	ID: string
	HREF: string
}[]

export type Socials = {
	NAME: string
	ICON: string
	TEXT: string
	HREF: string
}[]

export interface TechStack {
	NAME: string
	ICON: string
	HREF: string
}

export interface Project {
	name: string
	description: string
	stack: string[]
	url?: string
	github?: string
	googlePlay?: string
	appStore?: string
	logo?: string
}
