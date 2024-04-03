/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getRelativeLocaleUrl } from 'astro:i18n'
import { defaultLang, routes, showDefaultLang, ui } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}

export function useTranslatedPath(lang: keyof typeof ui = defaultLang) {
	return function translatePath(path: string, l: string = lang) {
		const pathName = path.replaceAll('/', '')
		const hasTranslation =
			/* defaultLang !== l && */
			routes[l] !== undefined && routes[l][pathName] !== undefined
		const translatedPath = hasTranslation ? `/${routes[l][pathName]}` : path

		return !showDefaultLang && l === defaultLang
			? translatedPath
			: `/${l}${translatedPath}`
	}
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname
	const parts = pathname?.split('/')
	const path = parts.pop() || parts.pop()

	if (path === undefined) {
		return undefined
	}

	const currentLang = getLangFromUrl(url)

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0]
		return route[path] !== undefined ? route[path] : undefined
	}

	const getKeyByValue = (
		obj: Record<string, string>,
		value: string
	): string | undefined => {
		return Object.keys(obj).find((key) => obj[key] === value)
	}

	const reversedKey = getKeyByValue(routes[currentLang], path)

	if (reversedKey !== undefined) {
		return reversedKey
	}

	return undefined
}

export function getRoute(key: string, lang: string = defaultLang): string {
	const t = useTranslations('en' as keyof typeof ui)
	// @ts-expect-error
	let route = (t(`nav.${key}`) as string)?.toLowerCase()
	route = route?.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
	if (route === 'home') route = ''
	return getRelativeLocaleUrl(lang, route)
}

export function inRoute(href: string, url?: string): boolean {
	const urlPath = url?.replaceAll('/', '') || ''
	const hrefPath = href.split('/').pop()
	return urlPath === hrefPath
}
