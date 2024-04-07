export interface TransitionAnimation {
	name: string // The name of the keyframe
	delay?: number | string
	duration?: number | string
	easing?: string
	fillMode?: string
	direction?: string
}

export interface TransitionAnimationPair {
	old: TransitionAnimation | TransitionAnimation[]
	new: TransitionAnimation | TransitionAnimation[]
}

export interface TransitionDirectionalAnimations {
	forwards: TransitionAnimationPair
	backwards: TransitionAnimationPair
}

const slideInRightAnimation = {
	old: {
		name: 'slideIn',
		duration: '0.3s',
		easing: 'linear',
		fillMode: 'forwards',
	},
	new: {
		name: 'slideOut',
		duration: '0.3s',
		easing: 'linear',
		fillMode: 'backwards',
	},
}

export const slideInRight = {
	forwards: slideInRightAnimation,
	backwards: slideInRightAnimation,
}

const slideUpAnimation = {
	old: {
		name: 'slideUp',
		duration: '0.2s',
		easing: 'linear',
		fillMode: 'forwards',
	},
	new: {
		name: 'slideDown',
		duration: '0.2s',
		easing: 'linear',
		fillMode: 'backwards',
	},
}

export const slideUp = {
	forwards: slideUpAnimation,
	backwards: slideUpAnimation,
}
