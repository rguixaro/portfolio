export const rowTimings = {
	closingMs: 900,
	inertMs: 400,
	leavingMs: 1000,

	initialBg: 'opacity 320ms ease-in-out, width 480ms ease-in-out',
	initialWrapper:
		'opacity 160ms ease-in-out, grid-template-rows 320ms ease-in-out, filter 320ms ease-in-out',
	initialWrapperDelay: '0ms, 320ms, 0ms',

	openBg: 'opacity 240ms ease-in-out, width 350ms ease-in-out',
	openWrapper:
		'opacity 480ms ease-in-out, grid-template-rows 480ms ease-in-out, filter 240ms ease-in-out',
	openWrapperDelay: '350ms, 240ms, 240ms',

	closeBg: 'opacity 240ms ease-in-out 480ms, width 350ms ease-in-out 240ms',
	closeWrapper:
		'opacity 320ms ease-in-out, grid-template-rows 320ms ease-in-out, filter 320ms ease-in-out',
	closeWrapperDelay: '0ms, 0ms, 0ms',
} as const
