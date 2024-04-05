import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { TECH_STACK } from '../consts'
import type { TechStack } from '../types'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
	return Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
	}).format(date)
}

export function readingTime(html: string) {
	const textOnly = html.replace(/<[^>]+>/g, '')
	const wordCount = textOnly.split(/\s+/).length
	const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
	return `${readingTimeMinutes} min read`
}

export function getStack(stack: string[]): TechStack[] {
	const arr = new Set<TechStack>()
	stack.forEach((item: string) => {
		const stack = TECH_STACK.find(
			(stack: TechStack) => stack.NAME.toLowerCase() === item.toLowerCase()
		)
		if (stack) arr.add(stack)
	})
	return Array.from(arr)
}
