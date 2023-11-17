/**
 * Wait until `delayMs` milliseconds have passed before proceeding.
 *
 * @param delayMs The number of milliseconds to wait for.
 *
 * @returns A promise that will resolve once `delayMs` milliseconds have passed.
 */
export function delayBy(delayMs: number) {
  return new Promise<void>(resolve => setTimeout(resolve, delayMs));
}
