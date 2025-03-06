/**
 * Retries a promise until it resolves or the maximum number of retries is reached.
 */
export const retry = async <T>(fn: Promise<T>, timeout = 1000, retries = 10): Promise<T> => {
  try {
    await new Promise(resolve => setTimeout(resolve, timeout))
    return await fn
  } catch (e) {
    if (retries === 0) throw e
    return await retry(fn, timeout * 2, retries - 1)
  }
}
