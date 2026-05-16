export const defaultLang = 'en' as const

export const ui = {
	ca: {
		'seo.title': 'Ricard Guixaró · Enginyer de Software',
		'seo.jobTitle': 'Enginyer de Software',
		'seo.description':
			"Enginyer de software a Unilabs. M'encarrego de construir aplicacions de principi a fi, amb atenció al detall i al producte final.",
		'section.experience': 'Experiència i Educació',
		'section.expertise': 'Especialitats',
		'section.projects': 'Projectes personals',
		'section.contact': 'Contacte',

		'experience.lead.building': "M'agrada transformar idees en aplicacions",
		'experience.lead.range': 'des de prototips ràpids fins a eines',
		'experience.lead.usage': "que la gent utilitza cada dia. M'importa ",
		'experience.lead.focus':
			"clean architecture, el codi mantenible i la rapidesa d'iteració.",
		'experience.panel.responsibilities': 'Responsabilitats',
		'experience.panel.stack': 'Stack',
		'experience.panel.projects': 'Projectes',

		'expertise.lead.focus':
			"Prioritzo construir software fàcil de mantenir i d'escalar en",
		'expertise.lead.highlight': 'entorns full-stack, mòbil i DevOps',
		'expertise.card.fullstack.title': 'Desenvolupament full-stack',
		'expertise.card.fullstack.copy':
			'Productes digitals amb Next.js, Nuxt.js, React, TypeScript i Python, treballant des de la interfície fins a la base de dades.',
		'expertise.card.mobile.title': 'Desenvolupament mòbil',
		'expertise.card.mobile.copy':
			"Aplicacions mòbils amb Flutter, React Native i Ionic/Vue, enfocades a experiències d'usuari consistents i multiplataforma.",
		'expertise.card.qa.title': 'Qualitat i desenvolupament',
		'expertise.card.qa.copy':
			'Entorns àgils amb metodologies com Scrum, depuració, testeig i manteniment seguint bones pràctiques.',
		'expertise.card.devops.title': 'DevOps i sistemes',
		'expertise.card.devops.copy':
			"Desplegament i manteniment d'aplicacions en AWS, experiència en infraestructura i fluxos d'integració i entrega contínua.",

		'projects.description':
			"Els projectes personals són el meu espai d'experimentació. Els faig servir per provar eines, millorar l'ofici i convertir la curiositat en prototips reals.",
		'projects.subtitle.education': 'Educació',
		'projects.visit': 'Web',
		'projects.source': 'Codi',
		'projects.links': 'Enllaços',
		'projects.rask.desc':
			"Escurçador d'URL centrat en la privacitat i la simplicitat, construït amb repositoris separats per al client i l'API. Permet la creació, gestió i seguiment eficient d'enllaços curts dins d'una arquitectura full-stack lleugera.",
		'projects.cookbook.desc':
			'Plataforma per compartir receptes amb autenticació, càrrega de fitxers multimèdia, correus electrònics transaccionals i entorns separats de staging i producció.',
		'projects.roots.desc':
			"Una aplicació per crear i visualitzar arbres familiars de manera col·laborativa i intuïtiva. Permet convidar membres, afegir fotografies als perfils i ofereix una cronologia d'activitats, recordatoris de dates importants i un resum setmanal per correu.",
		'projects.edu.bachelor.name': 'Grau en Enginyeria Informàtica',
		'projects.edu.bachelor.location':
			'Universitat Politècnica de Catalunya, Barcelona',
		'projects.edu.aws.name': 'AWS Certified Developer - Associate (DVA-C02)',
		'projects.edu.aws.location': 'Amazon Web Services (AWS)',
		'projects.status.live': 'Actiu',
		'projects.status.slow': 'Lent',
		'projects.status.down': 'Caigut',
		'projects.status.wip': 'WIP',

		'contact.description':
			'Interessat en projectes de codi obert i en construir software que es pugui compartir, entendre i millorar col·lectivament.',
		'contact.location': 'Barcelona, Espanya',
		'contact.sayHi': 'Hola!',
		'contact.letsTalk': 'Parlem',
		'cv.download': 'Descarregar CV',
		'contact.footer.copyright': '© {year} Ricard Guixaró · Software Engineer',
		'contact.footer.status.operational': 'Operatiu',
		'contact.footer.status.degraded': 'Degradat',
		'contact.footer.status.disrupted': 'Interromput',
		'contact.footer.status.label': 'Estat',

		'hero.bio':
			"Enginyer de software a Unilabs. M'encarrego de construir aplicacions de principi a fi, amb atenció al detall i al producte final.",

		'role.unilabs.role': 'Enginyer de Software',
		'role.unilabs.period': '2025 - Actualitat',
		'role.unilabs.description':
			"Desenvolupament d'eines digitals per a formació en radiologia en aplicacions mòbils, plataformes d'aprenentatge i millores contínues del producte. Enfocat en sistemes fiables, una UX clara i una iteració ben cuidada.",
		'role.unilabs.responsibilities':
			"Responsable del desenvolupament i l'evolució de l'aplicació mòbil multiplataforma d'e-learning Biomarkers4HCPs, incloent decisions d'arquitectura, la implementació de funcionalitats i el manteniment | Contribució a l'estabilitat i rendiment de la plataforma, reduint la taxa d'errors del frontend, disminuint els errors de l'API del 0,37% al 0,05% i millorant el LCP de 2,78s a 1,88s | Disseny i implementació de serveis i APIs amb Python i integració amb bases de dades PostgreSQL | Col·laboració en la presa de decisions tècniques i en la millora contínua dels productes",
		'role.unilabs.project.biomarkers.desc':
			'App mòbil de microlearning sobre biomarcadors',
		'role.unilabs.project.academy.desc':
			'Plataforma de formació online per a radiòlegs',
		'role.owius.role': 'Desenvolupador Full-Stack Jr.',
		'role.owius.period': '2022 - 2024',
		'role.owius.description':
			"Desenvolupament de productes per a clients en producció, en sistemes mòbils, web, backend i back-office. Enfocat en el lliurament, manteniment i evolució de productes en cicles curts d'iteració.",
		'role.owius.responsibilities':
			"Responsabilitat integral de productes iOS i Android | Desenvolupament i manteniment de múltiples aplicacions en producció en plataformes mòbils, backend i web | Disseny i desenvolupament d'Eatfity en sistemes mòbils, backend i de back-office, contribuint al creixement fins a arribar a gairebé 10.000 usuaris | Desenvolupament de Punto Limpio i els seus sistemes de suport backend, back-office i web per a operacions de gestió de residus | Desenvolupament de MusicAdders, amb responsabilitat sobre les versions d'Android i iOS i integració amb una API externa | Planificació, seguiment i execució de tasques en sprints curts i desplegaments continus",
		'role.owius.project.eatfity.desc':
			'App de fitness i nutrició amb plans personalitzats',
		'role.owius.project.musicadders.desc':
			'Plataforma de monetització musical i gestió de catàlegs',
		'role.owius.project.puntolimpio.desc':
			'Cercador geolocalitzat de punts de reciclatge de RAEE',
		'role.tous.role': 'Pràctiques IT',
		'role.tous.period': '2019',
		'role.tous.description':
			"Pràctiques al departament d'IT donant suport a les operacions internes i a la fiabilitat dels sistemes.",
		'role.tous.responsibilities':
			"Manteniment de sistemes interns i hardware de treball | Diagnosi i resolució d'incidències tècniques per a usuaris interns",

		'anchor.experience': 'experiencia',
		'anchor.expertise': 'habilitats',
		'anchor.projects': 'projectes',
		'anchor.contact': 'contacte',

		'aria.theme.toggle': 'Canviar tema',
		'aria.lang.label': 'Idioma',
		'aria.hero.scroll': 'Desplaça cap a experiència',
		'aria.experience.toggle': 'Mostrar detalls de {company}',
		'aria.projects.toggle': 'Mostrar detalls del projecte',
	},
	en: {
		'seo.title': 'Ricard Guixaró · Software Engineer',
		'seo.jobTitle': 'Software Engineer',
		'seo.description':
			'Software engineer based in Barcelona. I build applications from start to finish, with attention to detail and the final product.',
		'section.experience': 'Experience and Education',
		'section.expertise': 'Expertise',
		'section.projects': 'Side projects',
		'section.contact': 'Get in touch',

		'experience.lead.building': 'I enjoy turning ideas into applications',
		'experience.lead.range': 'from quick prototypes to tools',
		'experience.lead.usage': 'people use every day. I care about ',
		'experience.lead.focus':
			'clean architecture, maintainable code, and fast iteration.',
		'experience.panel.responsibilities': 'Responsibilities',
		'experience.panel.stack': 'Stack',
		'experience.panel.projects': 'Projects',

		'expertise.lead.focus':
			'I prioritise building software that is easy to maintain and scale in',
		'expertise.lead.highlight': 'full-stack, mobile and DevOps environments',
		'expertise.card.fullstack.title': 'Full-stack development',
		'expertise.card.fullstack.copy':
			'Digital products with Next.js, Nuxt.js, React, TypeScript and Python, working from the interface to the database.',
		'expertise.card.mobile.title': 'Mobile development',
		'expertise.card.mobile.copy':
			'Mobile applications with Flutter, React Native and Ionic/Vue, focused on consistent and cross-platform user experiences.',
		'expertise.card.qa.title': 'Quality and development',
		'expertise.card.qa.copy':
			'Agile environments with methodologies like Scrum, debugging, testing and maintenance following best practices.',
		'expertise.card.devops.title': 'DevOps & systems',
		'expertise.card.devops.copy':
			'Deployment and maintenance of applications on AWS, experience with infrastructure and continuous integration and delivery workflows.',

		'projects.description':
			'Side projects are my space for experimentation. I use them to try out tools, improve my craft, and turn curiosity into real prototypes.',
		'projects.subtitle.education': 'Education',
		'projects.visit': 'Web',
		'projects.source': 'Source',
		'projects.links': 'Links',
		'projects.rask.desc':
			'A URL shortener focused on privacy and simplicity, built with separate client and API repositories. It enables efficient creation, management, and tracking of short links across a lightweight full-stack architecture.',
		'projects.cookbook.desc':
			'A recipe sharing platform with authentication, media uploads, transactional emails, and separate staging/production environments.',
		'projects.roots.desc':
			'An application to create and visualize family trees in a collaborative and intuitive way. It allows inviting members, adding photos to profiles, and provides an activity timeline, reminders for important dates, and a weekly email summary.',
		'projects.edu.bachelor.name': 'Bachelor Degree in Computer Science',
		'projects.edu.bachelor.location':
			'Universitat Politècnica de Catalunya, Barcelona',
		'projects.edu.aws.name': 'AWS Certified Developer - Associate (DVA-C02)',
		'projects.edu.aws.location': 'Amazon Web Services (AWS)',
		'projects.status.live': 'Live',
		'projects.status.slow': 'Slow',
		'projects.status.down': 'Down',
		'projects.status.wip': 'WIP',

		'contact.description':
			'Interested in open source projects and in building software that can be shared, understood and improved collectively.',
		'contact.location': 'Barcelona, Spain',
		'contact.sayHi': 'Say hi!',
		'contact.letsTalk': "Let's talk",
		'cv.download': 'Download CV',
		'contact.footer.copyright': '© {year} Ricard Guixaró · Software Engineer',
		'contact.footer.status.operational': 'Operational',
		'contact.footer.status.degraded': 'Degraded',
		'contact.footer.status.disrupted': 'Disrupted',
		'contact.footer.status.label': 'Status',

		'hero.bio':
			'Software engineer at Unilabs. I build applications from start to finish, with attention to detail and the final product.',

		'role.unilabs.role': 'Software Engineer',
		'role.unilabs.period': '2025 - Now',
		'role.unilabs.description':
			'Development of digital tools for radiology education across mobile applications, learning platforms, and ongoing product improvements. Focused on reliable systems, clear user experiences, and thoughtful iteration.',
		'role.unilabs.responsibilities':
			'Led development and evolution of the cross-platform e-learning mobile application Biomarkers4HCPs, including architecture decisions, feature implementation, and maintenance | Contributed to platform stability and performance improvements by reducing frontend session error rates, lowering backend API error rate from 0.37% to 0.05%, and improving LCP from 2.78s to 1.88s | Designed and implemented production APIs and services in Python, integrated with PostgreSQL databases | Collaborated in technical decision-making and continuous product improvement',
		'role.unilabs.project.biomarkers.desc':
			'Mobile app for biomarkers microlearning',
		'role.unilabs.project.academy.desc':
			'Online learning platform for radiologists',
		'role.owius.role': 'Jr. Full-Stack Developer',
		'role.owius.period': '2022 - 2024',
		'role.owius.description':
			'Development of production client products across mobile, web, backend, and back-office systems. Focused on delivery, maintenance, and product evolution through short iteration cycles.',
		'role.owius.responsibilities':
			'Ownership of iOS and Android products | Developed and maintained multiple production applications across mobile, backend, and web platforms | Designed and developed Eatfity across mobile, backend, and back-office systems, contributing to growth reaching nearly 10,000 users | Built Punto Limpio and its supporting backend, back-office, and web systems for waste management operations | Developed MusicAdders, with responsibility for Android and iOS versions and integration with a large external API | Planned, tracked, and executed tasks across short sprints and continuous deployments',
		'role.owius.project.eatfity.desc':
			'Fitness and nutrition app with personalised plans',
		'role.owius.project.musicadders.desc':
			'Music monetisation and catalogue management platform',
		'role.owius.project.puntolimpio.desc':
			'Geolocated recycling point finder for electronic waste',
		'role.tous.role': 'IT Internship',
		'role.tous.period': '2019',
		'role.tous.description':
			'IT department internship supporting internal operations and system reliability.',
		'role.tous.responsibilities':
			'Maintained internal systems and workplace hardware | Diagnosed and resolved technical issues for internal users',

		'anchor.experience': 'experience',
		'anchor.expertise': 'expertise',
		'anchor.projects': 'projects',
		'anchor.contact': 'contact',

		'aria.theme.toggle': 'Toggle theme',
		'aria.lang.label': 'Language',
		'aria.hero.scroll': 'Scroll to experience',
		'aria.experience.toggle': 'Toggle {company} details',
		'aria.projects.toggle': 'Toggle project details',
	},
	es: {
		'seo.title': 'Ricard Guixaró · Ingeniero de Software',
		'seo.jobTitle': 'Ingeniero de Software',
		'seo.description':
			'Ingeniero de software en Barcelona. Me encargo de construir aplicaciones de principio a fin, con atención al detalle y al producto final.',
		'section.experience': 'Experiencia y Educación',
		'section.expertise': 'Habilidades',
		'section.projects': 'Proyectos personales',
		'section.contact': 'Contacto',

		'experience.lead.building': 'Disfruto convirtiendo ideas en aplicaciones,',
		'experience.lead.range': 'desde prototipos rápidos hasta herramientas',
		'experience.lead.usage': 'que la gente usa cada día. Me importa ',
		'experience.lead.focus':
			'clean architecture, el código mantenible y la rapidez de iteración.',
		'experience.panel.responsibilities': 'Responsabilidades',
		'experience.panel.stack': 'Stack',
		'experience.panel.projects': 'Proyectos',

		'expertise.lead.focus':
			'Priorizo construir software fácil de mantener y de escalar en',
		'expertise.lead.highlight': 'entornos full-stack, móvil y DevOps',
		'expertise.card.fullstack.title': 'Desarrollo full-stack',
		'expertise.card.fullstack.copy':
			'Productos digitales con Next.js, Nuxt.js, React, TypeScript y Python, trabajando desde la interfaz hasta la base de datos.',
		'expertise.card.mobile.title': 'Desarrollo móvil',
		'expertise.card.mobile.copy':
			'Aplicaciones móviles con Flutter, React Native e Ionic/Vue, enfocadas a experiencias de usuario consistentes y multiplataforma.',
		'expertise.card.qa.title': 'Calidad y desarrollo',
		'expertise.card.qa.copy':
			'Entornos ágiles con metodologías como Scrum, depuración, testing y mantenimiento siguiendo buenas prácticas.',
		'expertise.card.devops.title': 'DevOps y sistemas',
		'expertise.card.devops.copy':
			'Despliegue y mantenimiento de aplicaciones en AWS, experiencia en infraestructura y flujos de integración y entrega continua.',

		'projects.description':
			'Los proyectos personales son mi espacio de experimentación. Los utilizo para probar herramientas, mejorar el oficio y convertir la curiosidad en prototipos reales.',
		'projects.subtitle.education': 'Educación',
		'projects.visit': 'Web',
		'projects.source': 'Código',
		'projects.links': 'Enlaces',
		'projects.rask.desc':
			'Acortador de URL centrado en la privacidad y la simplicidad, construido con repositorios separados para el cliente y la API. Permite la creación, gestión y seguimiento eficiente de enlaces cortos en una arquitectura full-stack ligera.',
		'projects.cookbook.desc':
			'Plataforma para compartir recetas con autenticación, carga de medios, correos electrónicos transaccionales y entornos separados de pruebas y producción.',
		'projects.roots.desc':
			'Una aplicación para crear y visualizar árboles familiares de forma colaborativa e intuitiva. Permite invitar a miembros, añadir fotografías a los perfiles y ofrece una cronología de actividad, recordatorios de fechas importantes y un resumen semanal por correo.',
		'projects.edu.bachelor.name': 'Grado en Ingeniería Informática',
		'projects.edu.bachelor.location':
			'Universitat Politècnica de Catalunya, Barcelona',
		'projects.edu.aws.name': 'AWS Certified Developer - Associate (DVA-C02)',
		'projects.edu.aws.location': 'Amazon Web Services (AWS)',
		'projects.status.live': 'Activo',
		'projects.status.slow': 'Lento',
		'projects.status.down': 'Caído',
		'projects.status.wip': 'WIP',

		'contact.description':
			'Interesado en proyectos de código abierto y en construir software que se pueda compartir, entender y mejorar colectivamente.',
		'contact.location': 'Barcelona, España',
		'contact.sayHi': '¡Hola!',
		'contact.letsTalk': 'Hablemos',
		'cv.download': 'Descargar CV',
		'contact.footer.copyright':
			'© {year} Ricard Guixaró · Ingeniero de Software',
		'contact.footer.status.operational': 'Operativo',
		'contact.footer.status.degraded': 'Degradado',
		'contact.footer.status.disrupted': 'Interrumpido',
		'contact.footer.status.label': 'Estado',

		'hero.bio':
			'Ingeniero de software en Unilabs. Me encargo de construir aplicaciones de principio a fin, con atención al detalle y al producto final.',

		'role.unilabs.role': 'Ingeniero de Software',
		'role.unilabs.period': '2025 - Actualidad',
		'role.unilabs.description':
			'Desarrollo de herramientas digitales para formación en radiología en aplicaciones móviles, plataformas de aprendizaje y mejoras continuas del producto. Enfocado en sistemas fiables, una UX clara y una iteración cuidada.',
		'role.unilabs.responsibilities':
			'Responsable del desarrollo y evolución de la aplicación móvil multiplataforma de e-learning Biomarkers4HCPs, incluyendo decisiones de arquitectura, implementación de funcionalidades y mantenimiento | Contribución a la estabilidad y rendimiento de la plataforma mediante la reducción de errores en frontend, la disminución de la tasa de error de la API backend del 0,37% al 0,05% y la mejora del LCP de 2,78s a 1,88s | Diseño e implementación de APIs y servicios en producción con Python, integrados con bases de datos PostgreSQL | Colaboración en la toma de decisiones técnicas y en la mejora continua del producto',
		'role.unilabs.project.biomarkers.desc':
			'App móvil de microlearning sobre biomarcadores',
		'role.unilabs.project.academy.desc':
			'Plataforma de formación online para radiólogos',
		'role.owius.role': 'Desarrollador Full-Stack Jr.',
		'role.owius.period': '2022 - 2024',
		'role.owius.description':
			'Desarrollo de productos para clientes en producción, en sistemas móviles, web, backend y back-office. Enfocado en la entrega, mantenimiento y evolución de productos en ciclos cortos de iteración.',
		'role.owius.responsibilities':
			'Responsabilidad de productos iOS y Android | Desarrollo y mantenimiento de múltiples aplicaciones en producción en plataformas móviles, backend y web | Diseño y desarrollo de Eatfity en sistemas móviles, backend y de back-office, contribuyendo al crecimiento hasta alcanzar casi 10.000 usuarios | Desarrollo de Punto Limpio y de sus sistemas de soporte backend, back-office y web para operaciones de gestión de residuos | Desarrollo de MusicAdders, con responsabilidad sobre las versiones de Android y iOS e integración con una API externa de gran tamaño | Planificación, seguimiento y ejecución de tareas en sprints cortos y despliegues continuos',
		'role.owius.project.eatfity.desc':
			'App de fitness y nutrición con planes personalizados',
		'role.owius.project.musicadders.desc':
			'Plataforma de monetización musical y gestión de catálogos',
		'role.owius.project.puntolimpio.desc':
			'Buscador geolocalizado de puntos de reciclaje de RAEE',
		'role.tous.role': 'Prácticas IT',
		'role.tous.period': '2019',
		'role.tous.description':
			'Prácticas en el departamento de IT dando soporte a las operaciones internas y a la fiabilidad de los sistemas.',
		'role.tous.responsibilities':
			'Mantenimiento de sistemas internos y hardware de trabajo | Diagnóstico y resolución de incidencias técnicas para usuarios internos',

		'anchor.experience': 'experiencia',
		'anchor.expertise': 'especialidades',
		'anchor.projects': 'proyectos',
		'anchor.contact': 'contacto',

		'aria.theme.toggle': 'Cambiar tema',
		'aria.lang.label': 'Idioma',
		'aria.hero.scroll': 'Ir a experiencia',
		'aria.experience.toggle': 'Mostrar detalles de {company}',
		'aria.projects.toggle': 'Mostrar detalles del proyecto',
	},
	nb: {
		'seo.title': 'Ricard Guixaró · Programvareutvikler',
		'seo.jobTitle': 'Programvareutvikler',
		'seo.description':
			'Softwareingeniør basert i Barcelona. Jeg bygger applikasjoner fra start til slutt, med fokus på detaljer og sluttproduktet.',
		'section.experience': 'Erfaring og Utdanning',
		'section.expertise': 'Ekspertise',
		'section.projects': 'Sideprosjekter',
		'section.contact': 'Kontakt',

		'experience.lead.building': 'Jeg liker å gjøre ideer om til applikasjoner,',
		'experience.lead.range': 'fra raske prototyper til verktøy',
		'experience.lead.usage': 'folk bruker hver dag. Jeg bryr meg om ',
		'experience.lead.focus':
			'ren arkitektur, vedlikeholdbar kode og rask iterasjon.',
		'experience.panel.responsibilities': 'Ansvarsområder',
		'experience.panel.stack': 'Stack',
		'experience.panel.projects': 'Prosjekter',

		'expertise.lead.focus':
			'Jeg prioriterer å bygge programvare som er enkel å vedlikeholde og skalere i',
		'expertise.lead.highlight': 'full-stack-, mobil- og DevOps-miljøer',
		'expertise.card.fullstack.title': 'Full-stack utvikling',
		'expertise.card.fullstack.copy':
			'Digitale produkter med Next.js, Nuxt.js, React, TypeScript og Python, fra grensesnitt til database.',
		'expertise.card.mobile.title': 'Mobilutvikling',
		'expertise.card.mobile.copy':
			'Mobilapplikasjoner med Flutter, React Native og Ionic/Vue, med fokus på konsistente og plattformuavhengige brukeropplevelser.',
		'expertise.card.qa.title': 'Kvalitet og utvikling',
		'expertise.card.qa.copy':
			'Agile miljøer med metoder som Scrum, feilsøking, testing og vedlikehold etter beste praksis.',
		'expertise.card.devops.title': 'DevOps og systemer',
		'expertise.card.devops.copy':
			'Distribusjon og vedlikehold av applikasjoner på AWS, erfaring med infrastruktur og kontinuerlig integrasjon og leveranse.',

		'projects.description':
			'Personlige prosjekter er mitt rom for eksperimentering. Jeg bruker dem til å teste verktøy, forbedre håndverket og gjøre nysgjerrighet om til reelle prototyper.',
		'projects.subtitle.education': 'Utdanning',
		'projects.visit': 'Nettside',
		'projects.source': 'Kildekode',
		'projects.links': 'Lenker',
		'projects.rask.desc':
			'URL-forkorter med fokus på personvern og enkelhet, bygget med separate klient- og API-repositorier. Den muliggjør effektiv opprettelse, administrasjon og sporing av korte lenker i en lettvekts full-stack-arkitektur.',
		'projects.cookbook.desc':
			'Plattform for deling av oppskrifter med autentisering, medieopplasting, transaksjonelle e-poster og separate test- og produksjonsmiljøer.',
		'projects.roots.desc':
			'En åpen applikasjon for å opprette og visualisere familietrær på en samarbeidende og intuitiv måte. Den lar deg invitere medlemmer, legge til bilder i profiler og tilbyr en aktivitetslogg, påminnelser om viktige datoer og en ukentlig oppsummering via e-post.',
		'projects.edu.bachelor.name': 'Bachelor i datavitenskap',
		'projects.edu.bachelor.location':
			'Universitat Politècnica de Catalunya, Barcelona',
		'projects.edu.aws.name': 'AWS Certified Developer - Associate (DVA-C02)',
		'projects.edu.aws.location': 'Amazon Web Services (AWS)',
		'projects.status.live': 'Live',
		'projects.status.slow': 'Treg',
		'projects.status.down': 'Nede',
		'projects.status.wip': 'WIP',

		'contact.description':
			'Interessert i prosjekter med åpen kildekode og i å bygge programvare som kan deles, forstås og forbedres i fellesskap.',
		'contact.location': 'Barcelona, Spania',
		'contact.sayHi': 'Hei!',
		'contact.letsTalk': 'La oss snakke',
		'cv.download': 'Last ned CV',
		'contact.footer.copyright': '© {year} Ricard Guixaró · Programvareutvikler',
		'contact.footer.status.operational': 'Operativ',
		'contact.footer.status.degraded': 'Redusert',
		'contact.footer.status.disrupted': 'Avbrutt',
		'contact.footer.status.label': 'Status',

		'hero.bio':
			'Programvareingeniør hos Unilabs. Jeg bygger applikasjoner fra start til slutt, med fokus på detaljer og sluttproduktet.',

		'role.unilabs.role': 'Programvareutvikler',
		'role.unilabs.period': '2025 - Nå',
		'role.unilabs.description':
			'Utvikling av digitale verktøy for radiologiutdanning på tvers av mobilapplikasjoner, læringsplattformer og løpende produktforbedringer. Fokus på pålitelige systemer, tydelige brukeropplevelser og gjennomtenkt iterasjon.',
		'role.unilabs.responsibilities':
			'Ansvarlig for utvikling og videreutvikling av den plattformuavhengige mobilapplikasjonen for e-læring, Biomarkers4HCPs, inkludert arkitekturvalg, implementering av funksjonalitet og vedlikehold | Bidrag til stabilitet og ytelse i plattformen ved å redusere feil i frontend relatert til sesjoner, redusere backend API-feilrate fra 0,37 % til 0,05 % og forbedre LCP fra 2,78s til 1,88s | Design og implementering av produksjons-API-er og tjenester i Python, integrert med PostgreSQL-databaser | Samarbeid i tekniske beslutninger og kontinuerlig produktforbedring',
		'role.unilabs.project.biomarkers.desc':
			'Mobilapp for microlearning om biomarkører',
		'role.unilabs.project.academy.desc':
			'Nettbasert læringsplattform for radiologer',
		'role.owius.role': 'Jr. Full-Stack-utvikler',
		'role.owius.period': '2022 - 2024',
		'role.owius.description':
			'Utvikling av produksjonsprodukter for kunder på tvers av mobil-, web-, backend- og backoffice-systemer. Fokus på levering, vedlikehold og videreutvikling gjennom korte iterasjonssykluser.',
		'role.owius.responsibilities':
			'Ansvar for iOS- og Android-produkter | Utviklet og vedlikeholdt flere produksjonsapplikasjoner på tvers av mobil-, backend- og webplattformer | Designet og utviklet Eatfity på tvers av mobil-, backend- og backoffice-systemer, og bidro til vekst til nærmere 10 000 brukere | Bygget Punto Limpio og tilhørende backend-, backoffice- og websystemer for avfallshåndteringsoperasjoner | Utviklet MusicAdders, med ansvar for Android- og iOS-versjoner og integrasjon med et omfattende eksternt API | Planlegging, oppfølging og gjennomføring av oppgaver i korte sprinter og kontinuerlige utrullinger',
		'role.owius.project.eatfity.desc':
			'Trenings- og ernæringsapp med personlige planer',
		'role.owius.project.musicadders.desc':
			'Plattform for musikkmonetisering og kataloghåndtering',
		'role.owius.project.puntolimpio.desc':
			'Geolokalisert søker for resirkuleringspunkter for EE-avfall',
		'role.tous.role': 'IT-praksisplass',
		'role.tous.period': '2019',
		'role.tous.description':
			'Praksisplass i IT-avdelingen med støtte til interne operasjoner og systempålitelighet.',
		'role.tous.responsibilities':
			'Vedlikehold av interne systemer og arbeidsutstyr | Diagnostisering og løsning av tekniske problemer for interne brukere',

		'anchor.experience': 'erfaring',
		'anchor.expertise': 'ekspertise',
		'anchor.projects': 'prosjekter',
		'anchor.contact': 'kontakt',

		'aria.theme.toggle': 'Bytt tema',
		'aria.lang.label': 'Språk',
		'aria.hero.scroll': 'Rull til erfaring',
		'aria.experience.toggle': 'Vis detaljer for {company}',
		'aria.projects.toggle': 'Vis prosjektdetaljer',
	},
} as const

export type Lang = keyof typeof ui
export type UIKey = keyof (typeof ui)[typeof defaultLang]

const _assertAllLocalesComplete: Record<Lang, Record<UIKey, string>> = ui
void _assertAllLocalesComplete
