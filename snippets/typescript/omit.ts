/**
 * Omits the specified keys from an object.
 */
export const omit = <T extends object, U extends keyof T>(obj: T, keys: U[]) =>
  (Object.keys(obj) as U[]).reduce(
    (acc, curr) => (keys.includes(curr) ? acc : { ...acc, [curr]: obj[curr] }),
    {} as Omit<T, U>
  )
