export interface Page {
	TITLE: string
	DESCRIPTION: string
}

export interface Site extends Page {}

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
	INVERT?: boolean
}

export interface Project {
	name: string
	stack: string[]
	url?: string
	github?: string
	googlePlay?: string
	appStore?: string
	logo?: string
	invert?: boolean
}
