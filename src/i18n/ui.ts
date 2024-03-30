export const languages = [
	{ NAME: 'Català', CODE: 'ca' },
	{ NAME: 'English', CODE: 'en' },
	{ NAME: 'Español', CODE: 'es' },
	{ NAME: 'Norsk', CODE: 'no' },
]

export const defaultLang = 'ca'
export const showDefaultLang = false

export const ui = {
	ca: {
		'nav.home': 'Inici',
		'nav.about': 'Sobre mi',
		'nav.work': 'Experiència',
		'nav.projects': 'Projectes',
		'home.title': 'Hola, sóc Ricard',
		'home.role': 'Desenvolupador de Software',
	},
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.work': 'Experience',
		'nav.projects': 'Projects',
		'home.title': 'Hello, I am Ricard',
		'home.role': 'Software Developer',
	},
	es: {
		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.work': 'Experiencia',
		'nav.projects': 'Proyectos',
		'home.title': 'Hola, soy Ricard',
		'home.role': 'Desarrollador de Software',
	},
	no: {
		'nav.home': 'Hjem',
		'nav.about': 'Om',
		'nav.work': 'Erfaring',
		'nav.projects': 'Prosjekter',
		'home.title': 'Hei, jeg er Ricard',
		'home.role': 'Programvareutvikler',
	},
} as const

export const routes: { [key: string]: { [key: string]: string } } = {
	ca: {
		home: '/',
		about: '/sobre-mi',
	},
	en: {
		home: '/',
		about: '/about',
	},
	es: {
		home: '/',
		about: '/sobre-mi',
	},
	no: {
		home: '/',
		about: '/om',
	},
} as const
