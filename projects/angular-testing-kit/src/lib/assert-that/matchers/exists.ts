import { DebugElement } from '@angular/core';

export const existsMatcher = {
  compare(actual: Element | DebugElement | null, selector?: string) {
    const result: jasmine.CustomMatcherResult = {
      error: undefined,
      message: '',
      pass: actual !== null
    };

    if (typeof selector === 'string') {
      result.message = `Expected DOM element for '${selector}' to exist`;

      if (!result.pass) {
        /*
         * Without the new line character at the end, this error message doesn't show when this assertion fails.
         */
        result.error = new Error(`${result.message}, but it was missing (it should not have been null})\n`);
      }
    } else {
      result.message = 'Expected debug element to exist';

      if (!result.pass) {
        result.error = new Error(`${result.message}, but it was missing (it should not have been null)\n`);
      }
    }

    return result;
  }
};
