/**
 * Sorts an object by its keys.
 */
export const sortByKey = <T extends Record<string, any>>(obj: T): T => Object.keys(obj).sort().reduce((o, k) =>  ({ ...o, [k]: obj[k] }), {} as T)
