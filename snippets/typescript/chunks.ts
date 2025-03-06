/**
 * Splits an array into chunks of a specified length.
 */
export const chunks = <T>(array: T[], length: number) => array.reduce<T[][]>((chunks, el, i) => {
  const chunk = Math.floor(i / length)
  return { ...chunks, [chunk]: [...(chunks[chunk] || []), el] }
}, [])
