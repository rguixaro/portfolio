import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { TECH_STACK } from '../consts'
import type { TechStack } from '../types'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
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
