/**
 * Fetches a resource from an API endpoint with a timeout.
 */
export const fetchWithTimeout = async (input: RequestInfo | URL, options: RequestInit & { timeout?: number } = {}) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), options.timeout || 1000)
  const response = await fetch(input, { ...options, signal: controller.signal })
  clearTimeout(id)
  return response
}
