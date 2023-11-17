import { getElementBySelector } from './get-element-by-selector';

/**
 * Dispatch the given `eventType` DOM event on the target element matched by the provided selector.
 * If no element is found for `selector`, then an error will be thrown.
 *
 * @param selector HTML selector to match.
 * @param eventType DOM element type such as `click`, `pointerup`, etc.
 */
export function fireEvent(selector: string, eventType: keyof HTMLElementEventMap) {
  getElementBySelector(selector).dispatchEvent(new CustomEvent(eventType));
}
