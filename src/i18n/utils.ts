import { ui, defaultLang, type Lang, type UIKey } from './ui'

export function getLang(currentLocale: string | undefined): Lang {
	if (currentLocale && currentLocale in ui) return currentLocale as Lang
	return defaultLang
}

export function useTranslations(lang: Lang) {
	return function t(
		key: UIKey,
		vars?: Record<string, string | number>,
	): string {
		const dict = ui[lang] as Record<string, string>
		const fallback = ui[defaultLang] as Record<string, string>
		const template = dict[key] ?? fallback[key] ?? String(key)
		if (!vars) return template
		return Object.entries(vars).reduce(
			(str, [k, v]) => str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)),
			template,
		)
	}
}
