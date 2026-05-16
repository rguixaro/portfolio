export interface RoleProject {
	slug: string
	name: string
	href?: string
	hasDesc?: boolean
}

export interface Role {
	id: string
	company: string
	href?: string
	location: string
	tech?: string[]
	hasResponsibilities?: boolean
	projects?: RoleProject[]
}

export const roles: Role[] = [
	{
		id: 'unilabs',
		company: 'Unilabs Academy',
		href: 'https://www.unilabs.com',
		location: 'Barcelona',
		tech: ['Nuxt', 'Python', 'Flutter', 'Django', 'PostgreSQL', 'Docker'],
		hasResponsibilities: true,
		projects: [
			{
				slug: 'biomarkers',
				name: 'Biomarkers4HCPs',
				href: 'https://academy.unilabs.com/links/biomarkers-app',
				hasDesc: true,
			},
			{
				slug: 'academy',
				name: 'Unilabs Academy',
				href: 'https://academy.unilabs.com',
				hasDesc: true,
			},
		],
	},
	{
		id: 'owius',
		company: 'Owius Technologies',
		href: 'https://owius.com',
		location: 'Barcelona',
		tech: [
			'React Native',
			'React',
			'Vue',
			'Node.js',
			'Ionic',
			'MySQL',
			'MongoDB',
		],
		hasResponsibilities: true,
		projects: [
			{
				slug: 'eatfity',
				name: 'Eatfity',
				href: 'https://eatfity.com/',
				hasDesc: true,
			},
			{
				slug: 'musicadders',
				name: 'MusicAdders',
				href: 'https://www.musicadders.com/',
				hasDesc: true,
			},
			{
				slug: 'puntolimpio',
				name: 'Punto Limpio',
				href: 'https://punto-limpio.info/',
				hasDesc: true,
			},
		],
	},
	{
		id: 'tous',
		company: 'Tous Jewelry',
		href: 'https://www.tous.com',
		location: 'Manresa',
		hasResponsibilities: true,
	},
]
