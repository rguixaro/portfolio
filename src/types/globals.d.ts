export {}

/** Traffic-light classification for a Gatus endpoint. */
type GatusLevel = 'live' | 'slow' | 'down'

/** A single Gatus endpoint after classification by StatusBroadcaster. */
interface GatusStatusEntry {
	key: string
	name: string
	hostname?: string
	level: GatusLevel | null
}

declare global {
	interface Window {
		/** Populated once by StatusBroadcaster after a successful fetch. */
		__gatusStatuses?: GatusStatusEntry[]
		/** In-flight fetch guard so only one request is made per page load. */
		__gatusPromise?: Promise<void> | null
	}

	interface DocumentEventMap {
		'gatus:statuses': CustomEvent<GatusStatusEntry[]>
	}
}
