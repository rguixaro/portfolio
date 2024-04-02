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
		'nav.experience': 'Experiència',
		'nav.projects': 'Projectes',
		'home.title': 'Hola, sóc Ricard',
		'home.description': 'Pàgina principal',
		'home.role': 'Desenvolupador de Software',
		'home.projects': 'Els meus projects',
		'experience.title': 'Experiència',
		'experience.description': 'Aquí hi ha una llista de llocs on he treballat.',
		'experience.present': 'Actualitat',
		'projects.title': 'Projectes',
		'projects.description':
			'Aquí hi ha una llista de projectes en els que he treballat.',
	},
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'home.title': 'Hello, I am Ricard',
		'home.description': 'Main page',
		'home.role': 'Software Developer',
		'home.projects': 'My work',
		'experience.title': 'Experience',
		'experience.description': 'Here is a list of places I have worked at.',
		'experience.present': 'Present',
		'projects.title': 'Projects',
		'projects.description': 'Here is a list of projects I have worked on.',
	},
	es: {
		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'home.title': 'Hola, soy Ricard',
		'home.description': 'Página principal',
		'home.role': 'Desarrollador de Software',
		'home.projects': 'Mis proyectos',
		'experience.title': 'Experiencia',
		'experience.description':
			'Aquí hay una lista de lugares en los que he trabajado.',
		'experience.present': 'Actualidad',
		'projects.title': 'Proyectos',
		'projects.description':
			'Aquí hay una lista de proyectos en los que he trabajado.',
	},
	no: {
		'nav.home': 'Hjem',
		'nav.about': 'Om',
		'nav.experience': 'Erfaring',
		'nav.projects': 'Prosjekter',
		'home.title': 'Hei, jeg er Ricard',
		'home.description': 'Hovedside',
		'home.role': 'Programvareutvikler',
		'home.projects': 'Se arbeidet mitt',
		'experience.title': 'Erfaring',
		'experience.description': 'Her er en liste over steder jeg har jobbet på.',
		'experience.present': 'Nåværende',
		'projects.title': 'Prosjekter',
		'projects.description':
			'Her er en liste over prosjekter jeg har jobbet med.',
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
