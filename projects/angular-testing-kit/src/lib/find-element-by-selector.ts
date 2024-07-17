/**
 * Find the element matched by the provided selector. If nothing is matched, `null` is returned.
 *
 * @param selector HTML selector to match.
 */
export function findElementBySelector(selector: string) {
  return document.body.querySelector(selector);
}
