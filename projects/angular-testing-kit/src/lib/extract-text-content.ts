import { getElementBySelector } from './get-element-by-selector';

/**
 * Return the text content of the element matched by `selector`. Will throw an error if the matched element
 * is a `document` or `doctype` node. If no element is matched, then an error will be thrown.
 *
 * @param selector HTML selector to match.
 *
 * @returns The text content of the match element.
 */
export function extractTextContent(selector: string) {
  const textContent = getElementBySelector(selector).textContent;

  if (textContent !== null) {
    return textContent;
  }

  throw new Error(
    // eslint-disable-next-line max-len
    `Text content of element with selector '${selector}' is null, ensure that the target element is neither a document nor a doctype`
  );
}
