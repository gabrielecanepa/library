/**
 * Fetches a resource from an API endpoint and returns the response as JSON.
 */
export const fetchApiResource = async (input: RequestInfo | URL, init: RequestInit = {}) => {
  const response = await fetch(input, init)
  return await response.json()
}
