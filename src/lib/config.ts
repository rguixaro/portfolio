/** Public origin of the Gatus-hosted status page. */
export const STATUS_PAGE_URL = 'https://census.rguixaro.dev'

/** Gatus batch endpoint trimmed to the single most-recent result per monitor. */
export const STATUS_API_URL = `${STATUS_PAGE_URL}/api/v1/endpoints/statuses?page=1&pageSize=1`

/** Response-time threshold (ms) above which a successful check is reported as "slow". */
export const STATUS_SLOW_MS = 1500
