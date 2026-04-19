#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const UI_FILE = join(ROOT, 'src/i18n/ui.ts')
const SRC_DIR = join(ROOT, 'src')

const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const GREEN = '\x1b[32m'
const DIM = '\x1b[2m'
const RESET = '\x1b[0m'

const errors = []
const warnings = []

async function walk(dir, match) {
	const out = []
	for (const name of await readdir(dir)) {
		const path = join(dir, name)
		const s = await stat(path)
		if (s.isDirectory()) out.push(...(await walk(path, match)))
		else if (match(path)) out.push(path)
	}
	return out
}

function parseUi(source) {
	const localeBlocks = {}
	const localeRe = /^\t(en|es|ca|nb):\s*\{$/gm
	const matches = [...source.matchAll(localeRe)]
	for (let i = 0; i < matches.length; i++) {
		const start = matches[i].index + matches[i][0].length
		const end = i + 1 < matches.length ? matches[i + 1].index : source.length
		const body = source.slice(start, end)
		const keyRe = /^\s*['"]([\w.]+)['"]\s*:/gm
		const keys = new Set()
		for (const km of body.matchAll(keyRe)) keys.add(km[1])
		localeBlocks[matches[i][1]] = keys
	}
	return localeBlocks
}

async function main() {
	const uiSource = await readFile(UI_FILE, 'utf8')
	const locales = parseUi(uiSource)
	const localeNames = Object.keys(locales)

	if (localeNames.length === 0) {
		errors.push(`Could not parse any locale block from ${UI_FILE}`)
		report()
		return
	}

	const reference = locales.en ?? locales[localeNames[0]]
	for (const lang of localeNames) {
		if (lang === 'en') continue
		const missing = [...reference].filter((k) => !locales[lang].has(k))
		const extra = [...locales[lang]].filter((k) => !reference.has(k))
		for (const k of missing)
			errors.push(`Locale "${lang}" is missing key "${k}" (defined in en)`)
		for (const k of extra)
			errors.push(`Locale "${lang}" has extra key "${k}" (not in en)`)
	}

	const sourceFiles = await walk(
		SRC_DIR,
		(p) =>
			(p.endsWith('.astro') || p.endsWith('.ts') || p.endsWith('.tsx')) &&
			!p.endsWith('ui.ts'),
	)

	const referencedKeys = new Set()
	const callRe = /\b(?:t|tk)\(\s*(?:['"]([\w.]+)['"]|`([^`]+)`)/g
	for (const file of sourceFiles) {
		const content = await readFile(file, 'utf8')
		for (const m of content.matchAll(callRe)) {
			const literal = m[1]
			const template = m[2]
			const line = content.slice(0, m.index).split('\n').length

			if (literal) {
				referencedKeys.add(literal)
				if (!reference.has(literal)) {
					errors.push(
						`${relative(ROOT, file)}:${line} references unknown i18n key "${literal}"`,
					)
				}
			} else if (template) {
				const pattern = new RegExp(
					'^' +
						template.replace(/\./g, '\\.').replace(/\$\{[^}]+\}/g, '[\\w-]+') +
						'$',
				)
				let matched = false
				for (const k of reference) {
					if (pattern.test(k)) {
						referencedKeys.add(k)
						matched = true
					}
				}
				if (!matched) {
					errors.push(
						`${relative(ROOT, file)}:${line} template key "${template}" matches no defined keys`,
					)
				}
			}
		}
	}

	for (const k of reference) {
		if (!referencedKeys.has(k)) warnings.push(`Unused i18n key "${k}"`)
	}

	report()
}

function report() {
	if (warnings.length) {
		console.log(`${YELLOW}Warnings:${RESET}`)
		for (const w of warnings) console.log(`  ${DIM}•${RESET} ${w}`)
		console.log()
	}
	if (errors.length) {
		console.log(`${RED}Errors:${RESET}`)
		for (const e of errors) console.log(`  ${RED}✗${RESET} ${e}`)
		console.log()
		console.log(`${RED}i18n check failed: ${errors.length} error(s).${RESET}`)
		process.exit(1)
	}
	console.log(
		`${GREEN}✓${RESET} i18n keys consistent (${warnings.length} warning${warnings.length === 1 ? '' : 's'})`,
	)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
