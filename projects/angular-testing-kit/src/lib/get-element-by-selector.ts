/**
 * Retrieve the DOM element matched by `selector`. If nothing is found, an error will be thrown.
 *
 * @param selector HTML selector to match.
 *
 * @returns The matched DOM element.
 */
export function getElementBySelector(selector: string) {
  const element = document.body.querySelector(selector);

  if (element === null) {
    throw new Error(`No element with selector '${selector}' was found`);
  }

  return element as HTMLElement;
}
