import { stdout } from 'node:process'

/**
 * Custom logger interface.
 */
export const logger = {
  /**
   * Logs a generic message to the console.
   */
  log: (...data: any[]): void => console.log(...data),
  /**
   * Logs an informative message to the console.
   */
  info: (...data: any[]): void => console.info('[INFO]', ...data),
  /**
   * Logs a warning message to the console.
   */
  warn: (...data: any[]): void => console.warn('[WARN]', ...data),
  /**
   * Logs an error message to the console.
   */
  error: (...data: any[]): void => console.error('[ERROR]', ...data),
  /**
   * Clears the current line in the console.
   */
  clearLine: (): void => {
    stdout.moveCursor(0, -1)
    stdout.clearLine(1)
  },
}
