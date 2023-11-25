import { DebugElement } from '@angular/core';

import { getElementBySelector } from './get-element-by-selector';

/**
 * Dispatch the given `eventType` DOM event on the target element matched by the provided selector.
 * The selector argument accepts 3 different types of value:
 *  - If it's a string, then it's treated as an HTML selector by which to find the target element
 *    to fire the event on. If no element is found for the provided selector,
 *    then an error will be thrown.
 *  - If it's an {@link EventTarget} such as {@link Element} or {@link window},
 *    then the event is fired directly on it.
 *  - If it's a {@link DebugElement}, then its native element will be dispatched the event on.
 *
 * @param selector HTML selector to match.
 * @param eventType DOM element type such as `click`, `pointerup`, etc.
 * @param eventDetail Optional event detail to include such as the key code for keyboard event.
 */
export function fireEvent<T extends keyof HTMLElementEventMap = keyof HTMLElementEventMap>(
  selector: string | EventTarget | DebugElement | null | undefined,
  eventType: T,
  eventDetail?: CustomEventInit<HTMLElementEventMap[T]>['detail']
) {
  if (typeof selector === 'string') {
    getElementBySelector(selector).dispatchEvent(new CustomEvent(eventType as string, { detail: eventDetail }));
  } else if (selector instanceof EventTarget) {
    selector.dispatchEvent(new CustomEvent(eventType as string, { detail: eventDetail }));
  } else if (selector instanceof DebugElement) {
    selector.nativeElement.dispatchEvent(new CustomEvent(eventType as string, { detail: eventDetail }));
  } else {
    throw new Error(
      `The event target for the provided selector is not a string, Element, or DebugElement, it was ${String(selector)}`
    );
  }
}
