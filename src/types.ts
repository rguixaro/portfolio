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
	title: string
	description: string
	date: Date
	stack: string[]
	url?: string
	url_name?: string
}
