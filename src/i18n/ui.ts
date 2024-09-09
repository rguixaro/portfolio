export const languages = [
	{ NAME: 'English', CODE: 'en' },
	{ NAME: 'Català', CODE: 'ca' },
	{ NAME: 'Español', CODE: 'es' },
	{ NAME: 'Norsk', CODE: 'no' },
]

export const defaultLang = 'en'
export const showDefaultLang = false

export const ui = {
	ca: {
		'nav.home': 'Inici',
		'nav.experience': 'Experiència',
		'nav.projects': 'Projectes',
		'home.main': 'Dossier digital',
		'home.title': 'Ricard Guixaró',
		'home.description': 'Pàgina principal',
		'home.role': 'Desenvolupador de Software',
		'home.cv': 'Currículum',
		'home.projects': 'Els meus projects',
		'home.projects.all': 'Tots els projectes',
		'home.connect': 'Connectem',
		'home.connections':
			"Posa't en contacte amb mi per correu electrònic o a les xarxes socials.",
		'home.developed-with': 'Web desenvolupat amb',
		'experience.title': 'Experiència',
		'experience.description': 'Aquí hi ha una llista de llocs on he treballat.',
		'experience.present': 'Actualitat',
		'projects.title': 'Projectes',
		'projects.description':
			'Aquí hi ha una llista de projectes en els que he treballat.',
		'project.developed-with': 'Desenvolupat amb',
		'project.links': 'Enllaços',
		email: 'Correu electrònic',
		'footer.backToTop': 'Tornar a dalt',
		'footer.rights': 'Tots els drets reservats',
	},
	en: {
		'nav.home': 'Home',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'home.main': 'Portfolio',
		'home.title': 'Ricard Guixaró',
		'home.description': 'Main page',
		'home.role': 'Software Developer',
		'home.cv': 'Resume',
		'home.projects': 'My work',
		'home.projects.all': 'All projects',
		'home.connect': "Let's connect",
		'home.connections': 'Reach out to me via email or on social media.',
		'home.developed-with': 'Web developed with',
		'experience.title': 'Experience',
		'experience.description': 'Here is a list of places I have worked at.',
		'experience.present': 'Present',
		'projects.title': 'Projects',
		'projects.description': 'Here is a list of projects I have worked on.',
		'project.developed-with': 'Developed with',
		'project.links': 'Links',
		'footer.backToTop': 'Back to top',
		'footer.rights': 'All rights reserved',
	},
	es: {
		'nav.home': 'Inicio',
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'home.main': 'Portafolio',
		'home.title': 'Ricard Guixaró',
		'home.description': 'Página principal',
		'home.role': 'Desarrollador de Software',
		'home.cv': 'Currículum',
		'home.projects': 'Mis proyectos',
		'home.projects.all': 'Todos los proyectos',
		'home.connect': 'Conectemos',
		'home.connections':
			'Ponte en contacto conmigo por correo electrónico o en las redes sociales.',
		'home.developed-with': 'Web desarrollada con',
		'experience.title': 'Experiencia',
		'experience.description':
			'Aquí hay una lista de lugares en los que he trabajado.',
		'experience.present': 'Actualidad',
		'projects.title': 'Proyectos',
		'projects.description':
			'Aquí hay una lista de proyectos en los que he trabajado.',
		'project.developed-with': 'Desarrollado con',
		'project.links': 'Enlaces',
		email: 'Correo electrónico',
		'footer.backToTop': 'Volver arriba',
		'footer.rights': 'Todos los derechos reservados',
	},
	no: {
		'nav.home': 'Hjem',
		'nav.experience': 'Erfaring',
		'nav.projects': 'Prosjekter',
		'home.main': 'Portefølje',
		'home.title': 'Ricard Guixaró',
		'home.description': 'Hovedside',
		'home.role': 'Programvareutvikler',
		'home.cv': 'Læreplan',
		'home.projects': 'Se arbeidet mitt',
		'home.projects.all': 'Alle prosjekter',
		'home.connect': 'La oss komme i kontakt',
		'home.connections': 'Ta kontakt med meg via e-post eller sosiale medier.',
		'home.developed-with': 'Web utviklet me',
		'experience.title': 'Erfaring',
		'experience.description': 'Her er en liste over steder jeg har jobbet på.',
		'experience.present': 'Nåværende',
		'projects.title': 'Prosjekter',
		'projects.description':
			'Her er en liste over prosjekter jeg har jobbet med.',
		'project.developed-with': 'Utviklet med',
		'project.links': 'Lenker',
		email: 'E-post',
		'footer.backToTop': 'Tilbake til toppen',
		'footer.rights': 'Alle rettigheter reservert',
	},
} as const

export const routes: { [key: string]: { [key: string]: string } } = {
	en: {
		home: 'home',
		experience: 'experience',
		projects: 'projects',
	},
	ca: {
		home: 'inici',
		experience: 'experiencia',
		projects: 'projectes',
	},
	es: {
		home: 'inicio',
		experience: 'experiencia',
		projects: 'proyectos',
	},
	no: {
		home: 'hjem',
		experience: 'erfaring',
		projects: 'prosjekter',
	},
} as const
